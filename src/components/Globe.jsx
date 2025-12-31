import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const GLOBE_RADIUS = 100;
const LAND_ELEVATION = 3.0;
const MARKER_SIZE = 7;
const SKYBOX_RADIUS = 1500;
const HOVER_DISTANCE_3D = 5; // Distance threshold - slightly larger than star size

const COLORS = {
  water: { r: 17, g: 22, b: 41 },
  land: { r: 54, g: 63, b: 84 },
};

function Globe({ cards, selectedCards, autoRotate, onMarkerClick, onMarkerVisibilityChange, onInteraction, focusCardId }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const skyboxRef = useRef(null);
  const mainLightRef = useRef(null);
  const markersRef = useRef([]);
  const lastFocusId = useRef(null);
  const frameCount = useRef(0);
  const visibilityState = useRef({});
  const markerOpacity = useRef({});
  const starTextureRef = useRef(null);
  const selectedCardsRef = useRef(selectedCards);
  const onMarkerVisibilityChangeRef = useRef(onMarkerVisibilityChange);
  const onInteractionRef = useRef(onInteraction);
  const isInitialized = useRef(false);
  
  // Cursor state via React - batched updates
  const [isHovering, setIsHovering] = useState(false);
  const lastHoveredId = useRef(null);
  const pendingHoverUpdate = useRef(null);
  
  // Reusable vectors for calculations
  const rayOrigin = useRef(new THREE.Vector3());
  const rayDirection = useRef(new THREE.Vector3());
  const toMarker = useRef(new THREE.Vector3());
  const tempVec = useRef(new THREE.Vector3());
  const mouseNDC = useRef(new THREE.Vector2());

  useEffect(() => {
    selectedCardsRef.current = selectedCards;
  }, [selectedCards]);

  useEffect(() => {
    onMarkerVisibilityChangeRef.current = onMarkerVisibilityChange;
  }, [onMarkerVisibilityChange]);

  useEffect(() => {
    onInteractionRef.current = onInteraction;
  }, [onInteraction]);

  const createStarfieldTexture = useCallback(() => {
    const size = 4096;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size / 2;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#000003';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < 2500; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 1.2 + 0.3;
      const brightness = Math.random();
      
      let r, g, b;
      const colorVariant = Math.random();
      if (colorVariant < 0.7) {
        r = g = b = 180 + Math.random() * 50;
      } else if (colorVariant < 0.85) {
        r = 160 + Math.random() * 40;
        g = 180 + Math.random() * 40;
        b = 220;
      } else {
        r = 220;
        g = 210 + Math.random() * 20;
        b = 160 + Math.random() * 40;
      }
      
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${(0.2 + brightness * 0.4) * 0.6})`;
      ctx.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  const createGlobeTextures = useCallback((specularImg) => {
    const size = 2048;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size / 2;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    ctx.drawImage(specularImg, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const dispCanvas = document.createElement('canvas');
    dispCanvas.width = size;
    dispCanvas.height = size / 2;
    const dispCtx = dispCanvas.getContext('2d');
    const dispImageData = dispCtx.createImageData(size, size / 2);
    const dispData = dispImageData.data;

    const colorCanvas = document.createElement('canvas');
    colorCanvas.width = size;
    colorCanvas.height = size / 2;
    const colorCtx = colorCanvas.getContext('2d');
    const colorImageData = colorCtx.createImageData(size, size / 2);
    const colorData = colorImageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const brightness = data[i];
      const isWater = brightness > 100;
      
      dispData[i] = dispData[i + 1] = dispData[i + 2] = isWater ? 0 : 255;
      dispData[i + 3] = 255;

      if (isWater) {
        colorData[i] = COLORS.water.r;
        colorData[i + 1] = COLORS.water.g;
        colorData[i + 2] = COLORS.water.b;
      } else {
        colorData[i] = COLORS.land.r;
        colorData[i + 1] = COLORS.land.g;
        colorData[i + 2] = COLORS.land.b;
      }
      colorData[i + 3] = 255;
    }

    dispCtx.putImageData(dispImageData, 0, 0);
    colorCtx.putImageData(colorImageData, 0, 0);

    const blurCanvas = document.createElement('canvas');
    blurCanvas.width = size;
    blurCanvas.height = size / 2;
    const blurCtx = blurCanvas.getContext('2d');
    blurCtx.filter = 'blur(1px)';
    blurCtx.drawImage(dispCanvas, 0, 0);

    return { 
      colorTexture: new THREE.CanvasTexture(colorCanvas), 
      displacementTexture: new THREE.CanvasTexture(blurCanvas) 
    };
  }, []);

  const loadStarTexture = useCallback(() => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 128, 128);
        resolve(new THREE.CanvasTexture(canvas));
      };
      img.onerror = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#9333ea';
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 60 : 25;
          const angle = (i * Math.PI) / 5 - Math.PI / 2;
          const x = 64 + Math.cos(angle) * r;
          const y = 64 + Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
        resolve(new THREE.CanvasTexture(canvas));
      };
      img.src = '/star.svg';
    });
  }, []);

  const createGlowTexture = useCallback(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(147, 51, 234, 0.8)');
    gradient.addColorStop(0.3, 'rgba(147, 51, 234, 0.4)');
    gradient.addColorStop(0.6, 'rgba(147, 51, 234, 0.15)');
    gradient.addColorStop(1, 'rgba(147, 51, 234, 0)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  const createStarMarker = useCallback((card, starTexture, glowTexture, existingMarkers = []) => {
    const group = new THREE.Group();
    
    const glowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE * 3.5, MARKER_SIZE * 3.5),
      new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    glowMesh.position.z = -0.2;
    glowMesh.userData = { type: 'glow' };
    
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE, MARKER_SIZE),
      new THREE.MeshBasicMaterial({
        map: starTexture,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    mesh.userData = { type: 'star' };
    
    group.add(glowMesh);
    group.add(mesh);
    
    // Calculate base position
    let lat = card.lat;
    let lng = card.lng;
    
    // Check for collisions with existing markers and offset if needed
    const MIN_DISTANCE = 8; // Minimum distance between markers (in 3D space units)
    const OFFSET_AMOUNT = 2.5; // Degrees to offset
    let attempts = 0;
    const maxAttempts = 8;
    
    while (attempts < maxAttempts) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      const r = GLOBE_RADIUS + LAND_ELEVATION + 2;
      const testPos = new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
      
      let hasCollision = false;
      for (const existingMarker of existingMarkers) {
        const dist = testPos.distanceTo(existingMarker.position);
        if (dist < MIN_DISTANCE) {
          hasCollision = true;
          break;
        }
      }
      
      if (!hasCollision) {
        group.position.copy(testPos);
        break;
      }
      
      // Offset in a spiral pattern
      const angle = (attempts * Math.PI / 4);
      const offsetDist = OFFSET_AMOUNT * (1 + attempts * 0.3);
      lat = card.lat + Math.sin(angle) * offsetDist;
      lng = card.lng + Math.cos(angle) * offsetDist;
      attempts++;
    }
    
    // If still colliding after max attempts, just place it anyway
    if (attempts >= maxAttempts) {
      const phi = (90 - card.lat) * (Math.PI / 180);
      const theta = (card.lng + 180) * (Math.PI / 180);
      const r = GLOBE_RADIUS + LAND_ELEVATION + 2;
      group.position.set(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    }
    
    group.lookAt(0, 0, 0);
    group.userData = { card };
    
    markerOpacity.current[card.id] = 1;
    
    return group;
  }, []);

  const getMarkerVisibility = useCallback((markerPos, cameraPos, cardId) => {
    toMarker.current.subVectors(cameraPos, markerPos).normalize();
    tempVec.current.copy(markerPos).normalize();
    const dot = toMarker.current.dot(tempVec.current);
    
    const wasVisible = visibilityState.current[cardId]?.visible ?? false;
    const visible = wasVisible ? dot > -0.15 : dot > 0.0;
    
    if (!visible) return { visible: false, targetOpacity: 0, scale: 0 };
    
    let targetOpacity = 1;
    if (dot < 0.2) {
      targetOpacity = Math.max(0, (dot + 0.15) / 0.35);
    }
    
    const distance = cameraPos.distanceTo(markerPos);
    const scale = Math.max(0.6, Math.min(1, 280 / distance));
    
    return { visible, targetOpacity, scale };
  }, []);

  const focusOnCard = useCallback((card) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    
    const phi = (90 - card.lat) * (Math.PI / 180);
    const theta = (card.lng + 180) * (Math.PI / 180);
    const targetPosition = new THREE.Vector3(
      -220 * Math.sin(phi) * Math.cos(theta),
      220 * Math.cos(phi),
      220 * Math.sin(phi) * Math.sin(theta)
    );
    
    const startPos = camera.position.clone();
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(0, 0, 0);
    const startTime = performance.now();
    const duration = 2800; // 2.8 seconds for very smooth movement
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      if (progress >= 1) {
        camera.position.copy(targetPosition);
        controls.target.set(0, 0, 0);
        controls.update();
        return;
      }
      
      // Custom smooth ease - very gentle acceleration and deceleration
      // Using quintic ease-in-out for ultra smooth feel
      const ease = progress < 0.5
        ? 16 * progress * progress * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 5) / 2;
      
      camera.position.lerpVectors(startPos, targetPosition, ease);
      controls.target.lerpVectors(startTarget, endTarget, ease);
      controls.update();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  // Calculate distance from a 3D ray to a point
  // Ray: origin + t * direction
  // Returns the perpendicular distance from the ray to the point
  const distanceFromRayToPoint = useCallback((origin, direction, point) => {
    // Vector from origin to point
    toMarker.current.subVectors(point, origin);
    
    // Project onto ray direction
    const t = toMarker.current.dot(direction);
    
    // Only consider points in front of camera
    if (t < 0) return Infinity;
    
    // Closest point on ray
    tempVec.current.copy(direction).multiplyScalar(t).add(origin);
    
    // Distance from closest point to marker
    return tempVec.current.distanceTo(point);
  }, []);

  // Find card under mouse using 3D ray-point distance
  const findCardAtMouse = useCallback((clientX, clientY) => {
    const camera = cameraRef.current;
    const container = containerRef.current;
    const markers = markersRef.current;
    
    if (!camera || !container || markers.length === 0) return null;
    
    const rect = container.getBoundingClientRect();
    
    // Convert mouse to NDC (-1 to 1)
    mouseNDC.current.set(
      ((clientX - rect.left) / rect.width) * 2 - 1,
      -((clientY - rect.top) / rect.height) * 2 + 1
    );
    
    // Get ray from camera through mouse position
    rayOrigin.current.copy(camera.position);
    rayDirection.current.set(mouseNDC.current.x, mouseNDC.current.y, 0.5)
      .unproject(camera)
      .sub(rayOrigin.current)
      .normalize();
    
    // Find closest visible marker to the ray
    let closestCard = null;
    let closestDist = HOVER_DISTANCE_3D;
    
    // If already hovering, use slightly larger threshold (hysteresis) to prevent jitter
    const threshold = lastHoveredId.current ? HOVER_DISTANCE_3D * 1.2 : HOVER_DISTANCE_3D;
    
    // Check current hovered card first with larger threshold
    if (lastHoveredId.current) {
      for (const marker of markers) {
        const card = marker.userData.card;
        if (card && card.id === lastHoveredId.current && marker.visible) {
          const opacity = markerOpacity.current[card.id] ?? 0;
          if (opacity > 0.3) {
            const dist = distanceFromRayToPoint(rayOrigin.current, rayDirection.current, marker.position);
            if (dist < threshold) {
              return card; // Stay on current card
            }
          }
          break;
        }
      }
    }
    
    // Find closest card
    for (const marker of markers) {
      if (!marker.visible) continue;
      
      const card = marker.userData.card;
      if (!card) continue;
      
      const opacity = markerOpacity.current[card.id] ?? 0;
      if (opacity < 0.3) continue;
      
      const dist = distanceFromRayToPoint(rayOrigin.current, rayDirection.current, marker.position);
      
      if (dist < closestDist) {
        closestDist = dist;
        closestCard = card;
      }
    }
    
    return closestCard;
  }, [distanceFromRayToPoint]);

  useEffect(() => {
    if (focusCardId && focusCardId !== lastFocusId.current && cards.length > 0) {
      lastFocusId.current = focusCardId;
      const cardId = parseInt(focusCardId.split('-')[0], 10);
      const card = cards.find(c => c.id === cardId);
      if (card) focusOnCard(card);
    }
  }, [focusCardId, cards, focusOnCard]);

  // Main scene setup
  useEffect(() => {
    if (!containerRef.current || isInitialized.current) return;
    isInitialized.current = true;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000003);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 3000);
    camera.position.z = 320;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 150;
    controls.maxDistance = 600;
    controls.enablePan = false;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;

    // Notify parent when user interacts with globe
    controls.addEventListener('start', () => {
      if (onInteractionRef.current) {
        onInteractionRef.current();
      }
    });

    // Prevent OrbitControls from changing cursor by monitoring style changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target;
          if (target.style.cursor && target.style.cursor !== '') {
            target.style.cursor = '';
          }
        }
      }
    });
    observer.observe(renderer.domElement, { attributes: true, attributeFilter: ['style'] });

    // Skybox
    const skybox = new THREE.Mesh(
      new THREE.SphereGeometry(SKYBOX_RADIUS, 64, 32),
      new THREE.MeshBasicMaterial({ map: createStarfieldTexture(), side: THREE.BackSide, transparent: true, opacity: 0.7 })
    );
    scene.add(skybox);
    skyboxRef.current = skybox;

    // Globe
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS, 200, 100),
      new THREE.MeshStandardMaterial({ color: 0x111629 })
    );
    scene.add(globe);

    const specularImg = new Image();
    specularImg.crossOrigin = 'anonymous';
    specularImg.onload = () => {
      const { colorTexture, displacementTexture } = createGlobeTextures(specularImg);
      globe.material.dispose();
      globe.material = new THREE.MeshStandardMaterial({
        map: colorTexture,
        displacementMap: displacementTexture,
        displacementScale: LAND_ELEVATION,
        roughness: 0.85,
        metalness: 0.05,
      });
    };
    specularImg.src = '/earth_specular.png';

    // Atmosphere
    scene.add(new THREE.Mesh(
      new THREE.SphereGeometry(GLOBE_RADIUS + 18, 32, 32),
      new THREE.ShaderMaterial({
        vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: `varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }`,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
      })
    ));

    // Lights
    scene.add(new THREE.AmbientLight(0x9966cc, 0.25));
    const mainLight = new THREE.DirectionalLight(0xffeedd, 1.0);
    mainLight.position.set(300, 100, 200);
    scene.add(mainLight);
    mainLightRef.current = mainLight;
    scene.add(new THREE.DirectionalLight(0x9333ea, 0.2).translateX(-200).translateY(-100).translateZ(-200));

    // Load textures
    const glowTexture = createGlowTexture();
    loadStarTexture().then(texture => {
      starTextureRef.current = { star: texture, glow: glowTexture };
    });

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const screenVec = new THREE.Vector3();
    
    let animationId;
    const animate = (time) => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      frameCount.current++;

      if (skyboxRef.current) {
        skyboxRef.current.rotation.y = -camera.rotation.y * 0.1;
        skyboxRef.current.rotation.x = -camera.rotation.x * 0.05;
      }

      if (mainLightRef.current) {
        const angle = time * 0.0001;
        mainLightRef.current.position.set(
          Math.cos(angle) * 400,
          Math.sin(angle * 0.3) * 100 + 50,
          Math.sin(angle) * 400
        );
      }

      const pulseScale = 1 + Math.sin(time * 0.0015) * 0.1;
      const pulseGlow = 0.6 + Math.sin(time * 0.0015) * 0.3;
      const markers = markersRef.current;
      const selected = selectedCardsRef.current;
      
      const visibilityData = {};
      const camPos = camera.position;
      const w = container.clientWidth;
      const h = container.clientHeight;
      
      for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        const card = marker.userData.card;
        if (!card) continue;
        
        const { visible, targetOpacity, scale } = getMarkerVisibility(marker.position, camPos, card.id);
        visibilityState.current[card.id] = { visible };
        
        const currentOpacity = markerOpacity.current[card.id] ?? 1;
        const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * 0.1;
        markerOpacity.current[card.id] = newOpacity;
        
        marker.visible = newOpacity > 0.01;
        
        for (let j = 0; j < marker.children.length; j++) {
          const child = marker.children[j];
          if (child.userData?.type === 'star') {
            child.material.opacity = newOpacity;
          }
        }
        
        const isSelected = selected?.includes(card.id);
        marker.scale.setScalar(isSelected ? pulseScale * 1.2 * scale : scale);
        
        for (let j = 0; j < marker.children.length; j++) {
          if (marker.children[j].userData?.type === 'glow') {
            marker.children[j].material.opacity = (isSelected ? pulseGlow : 0.5) * newOpacity;
          }
        }
        
        screenVec.copy(marker.position).project(camera);
        const screenX = (screenVec.x * 0.5 + 0.5) * w;
        const screenY = (-screenVec.y * 0.5 + 0.5) * h;
        
        visibilityData[card.id] = {
          visible: marker.visible,
          screenPos: { x: screenX, y: screenY },
          scale,
          opacity: newOpacity
        };
      }
      
      if (markers.length > 0 && frameCount.current % 3 === 0) {
        onMarkerVisibilityChangeRef.current?.(visibilityData);
      }

      renderer.render(scene, camera);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      observer.disconnect();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      isInitialized.current = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (pendingHoverUpdate.current) {
        cancelAnimationFrame(pendingHoverUpdate.current);
      }
    };
  }, []);

  useEffect(() => {
    if (controlsRef.current) controlsRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    if (!sceneRef.current || !starTextureRef.current) return;
    
    markersRef.current.forEach(m => {
      m.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      sceneRef.current.remove(m);
    });
    markersRef.current = [];
    markerOpacity.current = {};

    cards.forEach(card => {
      const group = createStarMarker(card, starTextureRef.current.star, starTextureRef.current.glow, markersRef.current);
      sceneRef.current.add(group);
      markersRef.current.push(group);
    });
  }, [cards, createStarMarker]);

  useEffect(() => {
    const checkTexture = setInterval(() => {
      if (starTextureRef.current && sceneRef.current && markersRef.current.length === 0 && cards.length > 0) {
        cards.forEach(card => {
          const group = createStarMarker(card, starTextureRef.current.star, starTextureRef.current.glow, markersRef.current);
          sceneRef.current.add(group);
          markersRef.current.push(group);
        });
        clearInterval(checkTexture);
      }
    }, 100);
    return () => clearInterval(checkTexture);
  }, [cards, createStarMarker]);

  const handleClick = useCallback((e) => {
    const card = findCardAtMouse(e.clientX, e.clientY);
    if (card) {
      onMarkerClick(card);
    }
  }, [onMarkerClick, findCardAtMouse]);

  const handlePointerMove = useCallback((e) => {
    const card = findCardAtMouse(e.clientX, e.clientY);
    const newHoveredId = card?.id ?? null;
    
    // Only schedule update if state actually changed
    if (newHoveredId !== lastHoveredId.current) {
      lastHoveredId.current = newHoveredId;
      
      // Cancel any pending update
      if (pendingHoverUpdate.current) {
        cancelAnimationFrame(pendingHoverUpdate.current);
      }
      
      // Batch the state update to next frame
      pendingHoverUpdate.current = requestAnimationFrame(() => {
        setIsHovering(newHoveredId !== null);
        pendingHoverUpdate.current = null;
      });
    }
  }, [findCardAtMouse]);

  const handlePointerLeave = useCallback(() => {
    if (pendingHoverUpdate.current) {
      cancelAnimationFrame(pendingHoverUpdate.current);
    }
    lastHoveredId.current = null;
    setIsHovering(false);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`globe-canvas ${isHovering ? 'hovering-star' : ''}`}
      onClick={handleClick}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    />
  );
}

export default Globe;
