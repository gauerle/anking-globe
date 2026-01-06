import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

const GLOBE_RADIUS = 100;
const LAND_ELEVATION = 3.0;
const MARKER_SIZE = 3.5;
const MARKER_OFFSET = 0.3;
const RAY_LENGTH = 8;
const SKYBOX_RADIUS = 1500;
const HOVER_DISTANCE_3D = 6;

const COLORS = {
  water: { r: 17, g: 22, b: 41 },
  land: { r: 54, g: 63, b: 84 },
};

const DEFAULT_STAR_COLOR = '#9333ea';

/**
 * Group cards that are close together into clusters
 * Each cluster will be represented by a single star
 */
function clusterCardsByLocation(cards, thresholdDegrees = 5) {
  if (!cards || cards.length === 0) return [];
  
  const clusters = [];
  const assigned = new Set();
  
  for (const card of cards) {
    if (assigned.has(card.id)) continue;
    
    const cluster = [card];
    assigned.add(card.id);
    
    // Find all nearby cards
    for (const other of cards) {
      if (assigned.has(other.id)) continue;
      const dist = Math.sqrt(
        Math.pow(card.lat - other.lat, 2) + 
        Math.pow(card.lng - other.lng, 2)
      );
      if (dist < thresholdDegrees) {
        cluster.push(other);
        assigned.add(other.id);
      }
    }
    
    clusters.push(cluster);
  }
  
  return clusters;
}

/**
 * Calculate the centroid (average position) of a cluster
 */
function getClusterCentroid(cluster) {
  let lat = 0, lng = 0;
  for (const card of cluster) {
    lat += card.lat;
    lng += card.lng;
  }
  return {
    lat: lat / cluster.length,
    lng: lng / cluster.length
  };
}

function Globe({ cards, selectedCards, autoRotate, onMarkerClick, onMarkerVisibilityChange, onInteraction, focusCardId, onFocusLost, visibleCardIds }) {
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
  const starTexturesRef = useRef({});
  const prevVisibilityData = useRef({});
  const glowTextureRef = useRef(null);
  const selectedCardsRef = useRef(selectedCards);
  const onMarkerVisibilityChangeRef = useRef(onMarkerVisibilityChange);
  const onInteractionRef = useRef(onInteraction);
  const isInitialized = useRef(false);
  const focusCardIdRef = useRef(focusCardId);
  const [isHovering, setIsHovering] = useState(false);
  const savedCameraPosition = useRef(null);
  const lastHoveredId = useRef(null);
  const pendingHoverUpdate = useRef(null);
  const visibleCardIdsRef = useRef(visibleCardIds);
  
  const rayOpacityRef = useRef({});
  
  const rayOrigin = useRef(new THREE.Vector3());
  const rayDirection = useRef(new THREE.Vector3());
  const toMarker = useRef(new THREE.Vector3());
  const tempVec = useRef(new THREE.Vector3());
  const mouseNDC = useRef(new THREE.Vector2());

  useEffect(() => {
    selectedCardsRef.current = selectedCards;
  }, [selectedCards]);

  useEffect(() => {
    focusCardIdRef.current = focusCardId;
  }, [focusCardId]);

  useEffect(() => {
    onMarkerVisibilityChangeRef.current = onMarkerVisibilityChange;
  }, [onMarkerVisibilityChange]);

  useEffect(() => {
    onInteractionRef.current = onInteraction;
  }, [onInteraction]);

  useEffect(() => {
    visibleCardIdsRef.current = visibleCardIds;
  }, [visibleCardIds]);

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

  const createStarTexture = useCallback((color = DEFAULT_STAR_COLOR) => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = color;
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
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  const loadStarTexture = useCallback((color = DEFAULT_STAR_COLOR) => {
    return new Promise((resolve) => {
      if (color === DEFAULT_STAR_COLOR) {
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
          resolve(createStarTexture(color));
        };
        const baseUrl = import.meta.env.BASE_URL || '/';
        img.src = baseUrl + 'star.svg';
      } else {
        resolve(createStarTexture(color));
      }
    });
  }, [createStarTexture]);

  const createGlowTexture = useCallback((color = DEFAULT_STAR_COLOR) => {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    
    let r = 147, g = 51, b = 234;
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
    
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.5)`);
    gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.2)`);
    gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.05)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  const parseColor = useCallback((color) => {
    let r = 147, g = 51, b = 234;
    if (color.startsWith('#')) {
      const hex = color.slice(1);
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    }
    return { r, g, b };
  }, []);

  const createStarBeamGeometry = useCallback(() => {
    const svgPath = 'M4.9.28l2.13,2.42,3.16-.69c.6-.21,1.1.49.71.99l-1.62,2.83,1.6,2.74c.38.5-.12,1.19-.72.98l-3.16-.61-2.14,2.31c-.36.52-1.17.25-1.16-.38l-.37-3.13L.45,6.36c-.61-.18-.6-1.04,0-1.22l2.9-1.26.39-3.23c-.01-.63.8-.89,1.16-.37Z';
    
    const loader = new SVGLoader();
    const svgData = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.04 11.53"><path d="${svgPath}"/></svg>`);
    
    const shapes = SVGLoader.createShapes(svgData.paths[0]);
    const starShape = shapes[0];
    
    const svgCenterX = 11.04 / 2;
    const svgCenterY = 11.53 / 2;
    
    const svgSize = Math.max(11.04, 11.53);
    const scaleFactor = MARKER_SIZE / svgSize;
    
    const shapePoints = starShape.getPoints(32);
    const centeredPoints = shapePoints.map(p => ({
      x: (p.x - svgCenterX) * scaleFactor,
      y: -(p.y - svgCenterY) * scaleFactor
    }));
    
    const segments = 20;
    const numPoints = centeredPoints.length;
    
    const positions = [];
    const uvs = [];
    const indices = [];
    
    for (let seg = 0; seg <= segments; seg++) {
      const t = seg / segments;
      const z = t * RAY_LENGTH;
      const scale = 1 + t * 1.2;
      
      for (let i = 0; i < numPoints; i++) {
        const pt = centeredPoints[i];
        positions.push(pt.x * scale, pt.y * scale, z);
        uvs.push(i / numPoints, t);
      }
      
      positions.push(0, 0, z);
      uvs.push(0.5, t);
    }
    
    const vertsPerRing = numPoints + 1;
    
    for (let seg = 0; seg < segments; seg++) {
      const currBase = seg * vertsPerRing;
      const nextBase = (seg + 1) * vertsPerRing;
      
      for (let i = 0; i < numPoints; i++) {
        const curr = currBase + i;
        const next = currBase + ((i + 1) % numPoints);
        const currNext = nextBase + i;
        const nextNext = nextBase + ((i + 1) % numPoints);
        
        indices.push(curr, next, currNext);
        indices.push(next, nextNext, currNext);
      }
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    
    return geometry;
  }, []);

  const createLightBeam = useCallback((color = DEFAULT_STAR_COLOR) => {
    const { r, g, b } = parseColor(color);
    
    const geometry = createStarBeamGeometry();
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(r / 255, g / 255, b / 255) },
        opacity: { value: 0.15 },
        rayLength: { value: RAY_LENGTH }
      },
      vertexShader: `
        varying float vDistance;
        uniform float rayLength;
        
        void main() {
          vDistance = position.z / rayLength;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        varying float vDistance;
        
        void main() {
          float fade = 1.0 - vDistance;
          fade = fade * fade * fade;
          float alpha = fade * opacity;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    
    const beam = new THREE.Mesh(geometry, material);
    beam.position.z = 0.3;
    beam.userData = { type: 'beam' };
    
    return beam;
  }, [parseColor, createStarBeamGeometry]);

  const createStarMarker = useCallback((card, starTexture, glowTexture) => {
    const group = new THREE.Group();
    
    const starContainer = new THREE.Group();
    let hash = 0;
    for (let i = 0; i < card.id.length; i++) {
      hash = ((hash << 5) - hash) + card.id.charCodeAt(i);
      hash |= 0;
    }
    const baseRotation = (Math.abs(hash) % 1000) / 1000 * Math.PI * 2;
    starContainer.rotation.z = baseRotation;
    starContainer.userData = { type: 'starContainer', baseRotation };
    
    const glowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE * 1.5, MARKER_SIZE * 1.5),
      new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    glowMesh.position.z = 0.1;
    glowMesh.userData = { type: 'glow' };
    
    const starMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE, MARKER_SIZE),
      new THREE.MeshBasicMaterial({
        map: starTexture,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
        depthWrite: false,
      })
    );
    starMesh.position.z = 0.2;
    starMesh.userData = { type: 'star' };
    
    starContainer.add(glowMesh);
    starContainer.add(starMesh);
    group.add(starContainer);
    
    const color = card.starColor || DEFAULT_STAR_COLOR;
    const beam = createLightBeam(color);
    group.add(beam);
    beam.rotation.z = baseRotation;
    
    rayOpacityRef.current[card.id] = 1;
    
    // Simple position calculation - no collision detection needed (clustering handles it)
    const phi = (90 - card.lat) * (Math.PI / 180);
    const theta = (card.lng + 180) * (Math.PI / 180);
    const r = GLOBE_RADIUS + LAND_ELEVATION + MARKER_OFFSET;
    
    group.position.set(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
    
    const outwardDir = group.position.clone().normalize();
    const targetPoint = group.position.clone().add(outwardDir);
    group.lookAt(targetPoint);
    
    group.userData = { card };
    markerOpacity.current[card.id] = 1;
    
    return group;
  }, [createLightBeam]);

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
    const scale = Math.max(0.5, Math.min(1.5, 220 / distance));
    
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
    const duration = 2000;
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      if (progress >= 1) {
        camera.position.copy(targetPosition);
        controls.target.set(0, 0, 0);
        controls.update();
        return;
      }
      
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

  const distanceFromRayToPoint = useCallback((origin, direction, point) => {
    toMarker.current.subVectors(point, origin);
    const t = toMarker.current.dot(direction);
    if (t < 0) return Infinity;
    tempVec.current.copy(direction).multiplyScalar(t).add(origin);
    return tempVec.current.distanceTo(point);
  }, []);

  const findCardsAtMouse = useCallback((clientX, clientY) => {
    const camera = cameraRef.current;
    const container = containerRef.current;
    const markers = markersRef.current;
    
    if (!camera || !container || markers.length === 0) return null;
    
    const rect = container.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;
    
    let closestMarker = null;
    let closestScreenDist = 25;
    
    const screenVec = new THREE.Vector3();
    
    for (const marker of markers) {
      if (!marker.visible) continue;
      
      const markerCard = marker.userData.card;
      if (!markerCard) continue;
      
      // Check if any card in this cluster is visible
      const clusterCards = marker.userData.cards || [markerCard];
      const anyVisible = clusterCards.some(card => {
        const opacity = markerOpacity.current[card.id] ?? 0;
        return opacity >= 0.3;
      });
      if (!anyVisible) continue;
      
      screenVec.copy(marker.position).project(camera);
      const markerScreenX = (screenVec.x * 0.5 + 0.5) * rect.width;
      const markerScreenY = (-screenVec.y * 0.5 + 0.5) * rect.height;
      
      const dx = clickX - markerScreenX;
      const dy = clickY - markerScreenY;
      const screenDist = Math.sqrt(dx * dx + dy * dy);
      
      if (screenDist < closestScreenDist) {
        closestScreenDist = screenDist;
        closestMarker = marker;
      }
    }
    
    if (!closestMarker) return null;
    
    // Return ALL cards in this cluster
    return closestMarker.userData.cards || [closestMarker.userData.card];
  }, []);

  useEffect(() => {
    if (focusCardId && focusCardId !== lastFocusId.current && cards.length > 0) {
      lastFocusId.current = focusCardId;
      const cardId = parseInt(focusCardId.split('-')[0], 10);
      const card = cards.find(c => c.id === cardId);
      if (card) focusOnCard(card);
    }
  }, [focusCardId, cards, focusOnCard]);

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

    controls.addEventListener('start', () => {
      if (onInteractionRef.current) {
        onInteractionRef.current();
      }
    });

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

    const skybox = new THREE.Mesh(
      new THREE.SphereGeometry(SKYBOX_RADIUS, 64, 32),
      new THREE.MeshBasicMaterial({ map: createStarfieldTexture(), side: THREE.BackSide, transparent: true, opacity: 0.7 })
    );
    scene.add(skybox);
    skyboxRef.current = skybox;

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
    const baseUrl = import.meta.env.BASE_URL || '/';
    specularImg.src = baseUrl + 'earth_specular.png';

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

    scene.add(new THREE.AmbientLight(0x9966cc, 0.25));
    const mainLight = new THREE.DirectionalLight(0xffeedd, 1.0);
    mainLight.position.set(300, 100, 200);
    scene.add(mainLight);
    mainLightRef.current = mainLight;
    scene.add(new THREE.DirectionalLight(0x9333ea, 0.2).translateX(-200).translateY(-100).translateZ(-200));

    const defaultGlow = createGlowTexture(DEFAULT_STAR_COLOR);
    glowTextureRef.current = defaultGlow;
    
    loadStarTexture(DEFAULT_STAR_COLOR).then(texture => {
      starTexturesRef.current[DEFAULT_STAR_COLOR] = texture;
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

      const rotationSpeed = time * 0.0005;
      
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
        
        // Get all cards in this cluster
        const clusterCards = marker.userData.cards || [card];
        
        // Check if any card in cluster is in visible set
        const visibleIds = visibleCardIdsRef.current;
        const isInVisibleSet = clusterCards.some(c => 
          visibleIds === null || visibleIds.has(c.id)
        );
        
        const { visible, targetOpacity, scale } = getMarkerVisibility(marker.position, camPos, card.id);
        visibilityState.current[card.id] = { visible };
        
        const filteredTargetOpacity = isInVisibleSet ? targetOpacity : 0;
        
        const currentOpacity = markerOpacity.current[card.id] ?? 1;
        const newOpacity = currentOpacity + (filteredTargetOpacity - currentOpacity) * 0.1;
        markerOpacity.current[card.id] = newOpacity;
        
        // Update opacity for all cards in cluster
        for (const clusterCard of clusterCards) {
          markerOpacity.current[clusterCard.id] = newOpacity;
        }
        
        marker.visible = newOpacity > 0.01;
        
        // Check if ANY card in cluster is selected
        const isSelected = clusterCards.some(c => selected?.includes(c.id));
        
        // Get ray opacity for the marker
        const currentRayOpacity = rayOpacityRef.current[card.id] ?? 1;
        const targetRayOpacity = isSelected ? 0 : 1;
        const newRayOpacity = currentRayOpacity + (targetRayOpacity - currentRayOpacity) * 0.08;
        rayOpacityRef.current[card.id] = newRayOpacity;
        
        let starContainer = null;
        for (const child of marker.children) {
          if (child.userData?.type === 'starContainer') starContainer = child;
        }

        if (isSelected) {
          marker.scale.setScalar(0.7 * scale);
          
          if (starContainer) {
            const base = starContainer.userData.baseRotation || 0;
            starContainer.rotation.z = base + rotationSpeed;
          }
          
          marker.traverse((child) => {
            if (child.userData?.type === 'star') {
              child.material.opacity = newOpacity;
            } else if (child.userData?.type === 'glow') {
              child.material.opacity = 0.6 * newOpacity;
              child.scale.setScalar(1.8);
            } else if (child.userData?.type === 'beam' && child.material.uniforms) {
              child.material.uniforms.opacity.value = newRayOpacity * 0.35 * newOpacity;
            }
          });
        } else {
          marker.scale.setScalar(scale);
          
          // Reset star rotation to match beam
          if (starContainer) {
            const base = starContainer.userData.baseRotation || 0;
            starContainer.rotation.z = base;
          }
          
          marker.traverse((child) => {
            if (child.userData?.type === 'star') {
              child.material.opacity = newOpacity;
            } else if (child.userData?.type === 'glow') {
              child.material.opacity = 0.3 * newOpacity;
              child.scale.setScalar(1);
            } else if (child.userData?.type === 'beam' && child.material.uniforms) {
              child.material.uniforms.opacity.value = newRayOpacity * 0.35 * newOpacity;
            }
          });
        }
        
        screenVec.copy(marker.position).project(camera);
        const screenX = (screenVec.x * 0.5 + 0.5) * w;
        const screenY = (-screenVec.y * 0.5 + 0.5) * h;
        
        // Report visibility for ALL cards in this cluster
        for (const clusterCard of clusterCards) {
          visibilityData[clusterCard.id] = {
            visible: marker.visible,
            screenPos: { x: screenX, y: screenY },
            scale,
            opacity: newOpacity
          };
        }
      }
      
      if (markers.length > 0 && frameCount.current % 1 === 0) {
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
    if (controlsRef.current) {
      const shouldRotate = autoRotate && !isHovering && (!selectedCards || selectedCards.length === 0) && !focusCardId;
      controlsRef.current.autoRotate = shouldRotate;
    }
  }, [autoRotate, isHovering, selectedCards, focusCardId]);

  // Camera zoom on focus
  useEffect(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    
    if (focusCardId) {
      if (!savedCameraPosition.current) {
        savedCameraPosition.current = cameraRef.current.position.clone();
      }
      
      const marker = markersRef.current.find(m => {
        const clusterCards = m.userData.cards || [m.userData.card];
        return clusterCards.some(c => c.id === focusCardId);
      });
      
      if (marker) {
        const markerPos = marker.position.clone().normalize();
        const targetPos = markerPos.multiplyScalar(160);
        
        const startPos = cameraRef.current.position.clone();
        const duration = 600;
        const startTime = Date.now();
        
        let cancelled = false;
        
        const animateZoom = () => {
          if (cancelled || !focusCardIdRef.current) return;
          
          const elapsed = Date.now() - startTime;
          const t = Math.min(elapsed / duration, 1);
          const easeT = 1 - Math.pow(1 - t, 3);
          
          cameraRef.current.position.lerpVectors(startPos, targetPos, easeT);
          controlsRef.current.update();
          
          if (t < 1) requestAnimationFrame(animateZoom);
        };
        animateZoom();
        
        return () => { cancelled = true; };
      }
    } else {
      // Simply clear saved position - no zoom out animation
      savedCameraPosition.current = null;
    }
  }, [focusCardId]);

  // Detect rotation/zoom attempt to unfocus
  useEffect(() => {
    if (!controlsRef.current || !containerRef.current) return;
    
    let mouseDownPos = null;
    
    const handleMouseDown = (e) => {
      mouseDownPos = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseMove = (e) => {
      if (!mouseDownPos) return;
      const dx = e.clientX - mouseDownPos.x;
      const dy = e.clientY - mouseDownPos.y;
      if (Math.sqrt(dx*dx + dy*dy) > 5) {
        if (focusCardIdRef.current && onFocusLost) {
          onFocusLost();
        }
        mouseDownPos = null;
      }
    };
    
    const handleMouseUp = () => {
      mouseDownPos = null;
    };
    
    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onFocusLost]);

  // Create markers for clusters
  useEffect(() => {
    if (!sceneRef.current || !glowTextureRef.current) return;
    if (!starTexturesRef.current[DEFAULT_STAR_COLOR]) return;
    if (!cards || cards.length === 0) return;
    
    // Clean up old markers
    markersRef.current.forEach(m => {
      m.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      sceneRef.current.remove(m);
    });
    markersRef.current = [];
    markerOpacity.current = {};
    rayOpacityRef.current = {};

    // Cluster cards by location (5 degrees threshold)
    const clusters = clusterCardsByLocation(cards, 5);
    console.log(`Created ${clusters.length} star clusters from ${cards.length} cards`);

    // Create one marker per cluster
    clusters.forEach(cluster => {
      const centroid = getClusterCentroid(cluster);
      
      // Create a "virtual" card for the marker position
      const markerCard = {
        ...cluster[0],
        lat: centroid.lat,
        lng: centroid.lng,
        id: cluster.map(c => c.id).join('-')
      };
      
      const color = markerCard.starColor || DEFAULT_STAR_COLOR;
      const starTexture = starTexturesRef.current[color] || starTexturesRef.current[DEFAULT_STAR_COLOR];
      const glowTexture = createGlowTexture(color);
      
      const group = createStarMarker(markerCard, starTexture, glowTexture);
      
      // Store ALL cards in this cluster
      group.userData = {
        card: markerCard,
        cards: cluster,
        isCluster: cluster.length > 1
      };
      
      // Initialize opacity for all cards in cluster
      cluster.forEach(card => {
        markerOpacity.current[card.id] = 1;
        rayOpacityRef.current[card.id] = 1;
      });
      
      sceneRef.current.add(group);
      markersRef.current.push(group);
    });
  }, [cards, createStarMarker, createGlowTexture]);

  useEffect(() => {
    const checkTexture = setInterval(() => {
      if (starTexturesRef.current[DEFAULT_STAR_COLOR] && sceneRef.current && markersRef.current.length === 0 && cards && cards.length > 0) {
        const clusters = clusterCardsByLocation(cards, 5);
        
        clusters.forEach(cluster => {
          const centroid = getClusterCentroid(cluster);
          
          const markerCard = {
            ...cluster[0],
            lat: centroid.lat,
            lng: centroid.lng,
            id: cluster.map(c => c.id).join('-')
          };
          
          const color = markerCard.starColor || DEFAULT_STAR_COLOR;
          const starTexture = starTexturesRef.current[color] || starTexturesRef.current[DEFAULT_STAR_COLOR];
          const glowTexture = createGlowTexture(color);
          
          const group = createStarMarker(markerCard, starTexture, glowTexture);
          
          group.userData = {
            card: markerCard,
            cards: cluster,
            isCluster: cluster.length > 1
          };
          
          cluster.forEach(card => {
            markerOpacity.current[card.id] = 1;
            rayOpacityRef.current[card.id] = 1;
          });
          
          sceneRef.current.add(group);
          markersRef.current.push(group);
        });
        
        clearInterval(checkTexture);
      }
    }, 100);
    return () => clearInterval(checkTexture);
  }, [cards, createStarMarker, createGlowTexture]);

  const handleClick = useCallback((e) => {
    const cards = findCardsAtMouse(e.clientX, e.clientY);
    if (cards && cards.length > 0) {
      onMarkerClick(cards);
    }
  }, [onMarkerClick, findCardsAtMouse]);

  const handlePointerMove = useCallback((e) => {
    const cards = findCardsAtMouse(e.clientX, e.clientY);
    const hovering = cards && cards.length > 0;
    
    if (hovering !== (lastHoveredId.current !== null)) {
      lastHoveredId.current = hovering ? 'hovering' : null;
      
      if (pendingHoverUpdate.current) {
        cancelAnimationFrame(pendingHoverUpdate.current);
      }
      
      pendingHoverUpdate.current = requestAnimationFrame(() => {
        setIsHovering(hovering);
        pendingHoverUpdate.current = null;
      });
    }
  }, [findCardsAtMouse]);

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