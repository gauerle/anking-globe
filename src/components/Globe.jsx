import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

const GLOBE_RADIUS = 100;
const LAND_ELEVATION = 3.0;
const MARKER_SIZE = 2.8;
const MARKER_OFFSET = 0.3;
const RAY_LENGTH = 8;
const SKYBOX_RADIUS = 1500;

// 3D Card positioning
const CARD_OFFSET_DISTANCE = 18;
const CARD_SCALE = 0.13;

const COLORS = {
  water: { r: 17, g: 22, b: 41 },
  land: { r: 54, g: 63, b: 84 },
};

const DEFAULT_STAR_COLOR = '#9333ea';

function Globe({ 
  cards, 
  selectedCards, 
  autoRotate, 
  onMarkerClick, 
  onMarkerVisibilityChange, 
  onInteraction, 
  focusCardId, 
  onFocusLost, 
  visibleCardIds,
  onCloseCard,
  onFocusCard
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const rendererRef = useRef(null);
  const cssRendererRef = useRef(null);
  const cssSceneRef = useRef(null);
  const skyboxRef = useRef(null);
  const mainLightRef = useRef(null);
  const markersRef = useRef([]);
  const card3DObjectsRef = useRef({});
  const connectionLinesRef = useRef({});
  const lastFocusId = useRef(null);
  const frameCount = useRef(0);
  const visibilityState = useRef({});
  const markerOpacity = useRef({});
  const starTexturesRef = useRef({});
  const glowTextureRef = useRef(null);
  const selectedCardsRef = useRef(selectedCards);
  const onMarkerVisibilityChangeRef = useRef(onMarkerVisibilityChange);
  const onInteractionRef = useRef(onInteraction);
  const onCloseCardRef = useRef(onCloseCard);
  const onFocusCardRef = useRef(onFocusCard);
  const isInitialized = useRef(false);
  const focusCardIdRef = useRef(focusCardId);
  const [isHovering, setIsHovering] = useState(false);
  const savedCameraPosition = useRef(null);
  const lastHoveredId = useRef(null);
  const pendingHoverUpdate = useRef(null);
  const visibleCardIdsRef = useRef(visibleCardIds);
  const rayOpacityRef = useRef({});
  
  const toMarker = useRef(new THREE.Vector3());
  const tempVec = useRef(new THREE.Vector3());

  useEffect(() => { selectedCardsRef.current = selectedCards; }, [selectedCards]);
  useEffect(() => { focusCardIdRef.current = focusCardId; }, [focusCardId]);
  useEffect(() => { onMarkerVisibilityChangeRef.current = onMarkerVisibilityChange; }, [onMarkerVisibilityChange]);
  useEffect(() => { onInteractionRef.current = onInteraction; }, [onInteraction]);
  useEffect(() => { visibleCardIdsRef.current = visibleCardIds; }, [visibleCardIds]);
  useEffect(() => { onCloseCardRef.current = onCloseCard; }, [onCloseCard]);
  useEffect(() => { onFocusCardRef.current = onFocusCard; }, [onFocusCard]);

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
      if (colorVariant < 0.7) { r = g = b = 180 + Math.random() * 50; }
      else if (colorVariant < 0.85) { r = 160 + Math.random() * 40; g = 180 + Math.random() * 40; b = 220; }
      else { r = 220; g = 210 + Math.random() * 20; b = 160 + Math.random() * 40; }
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
      if (isWater) { colorData[i] = COLORS.water.r; colorData[i + 1] = COLORS.water.g; colorData[i + 2] = COLORS.water.b; }
      else { colorData[i] = COLORS.land.r; colorData[i + 1] = COLORS.land.g; colorData[i + 2] = COLORS.land.b; }
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
    return { colorTexture: new THREE.CanvasTexture(colorCanvas), displacementTexture: new THREE.CanvasTexture(blurCanvas) };
  }, []);

  const createStarTexture = useCallback((color = DEFAULT_STAR_COLOR) => {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 === 0 ? 60 : 25;
      const angle = (i * Math.PI) / 5 - Math.PI / 2;
      const x = 64 + Math.cos(angle) * r;
      const y = 64 + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
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
          canvas.width = 128; canvas.height = 128;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, 128, 128);
          resolve(new THREE.CanvasTexture(canvas));
        };
        img.onerror = () => resolve(createStarTexture(color));
        img.src = (import.meta.env.BASE_URL || '/') + 'star.svg';
      } else { resolve(createStarTexture(color)); }
    });
  }, [createStarTexture]);

  const createGlowTexture = useCallback((color = DEFAULT_STAR_COLOR) => {
    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 128;
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
    const svgCenterX = 11.04 / 2, svgCenterY = 11.53 / 2;
    const svgSize = Math.max(11.04, 11.53);
    const scaleFactor = MARKER_SIZE / svgSize;
    const shapePoints = starShape.getPoints(32);
    const centeredPoints = shapePoints.map(p => ({ x: (p.x - svgCenterX) * scaleFactor, y: -(p.y - svgCenterY) * scaleFactor }));
    const segments = 20, numPoints = centeredPoints.length;
    const positions = [], uvs = [], indices = [];
    for (let seg = 0; seg <= segments; seg++) {
      const t = seg / segments, z = t * RAY_LENGTH, scale = 1 + t * 1.2;
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
      const currBase = seg * vertsPerRing, nextBase = (seg + 1) * vertsPerRing;
      for (let i = 0; i < numPoints; i++) {
        const curr = currBase + i, next = currBase + ((i + 1) % numPoints);
        const currNext = nextBase + i, nextNext = nextBase + ((i + 1) % numPoints);
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
      uniforms: { color: { value: new THREE.Color(r / 255, g / 255, b / 255) }, opacity: { value: 0.35 }, rayLength: { value: RAY_LENGTH } },
      vertexShader: `varying float vDistance; uniform float rayLength; void main() { vDistance = position.z / rayLength; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 color; uniform float opacity; varying float vDistance; void main() { float fade = 1.0 - vDistance; fade = fade * fade * fade; float alpha = fade * opacity; gl_FragColor = vec4(color, alpha); }`,
      transparent: true, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const beam = new THREE.Mesh(geometry, material);
    beam.position.z = 0.3;
    beam.userData = { type: 'beam' };
    return beam;
  }, [parseColor, createStarBeamGeometry]);

  const createStarMarker = useCallback((card, starTexture, glowTexture, existingMarkers = []) => {
    const group = new THREE.Group();
    const starContainer = new THREE.Group();
    let hash = 0;
    for (let i = 0; i < card.id.length; i++) { hash = ((hash << 5) - hash) + card.id.charCodeAt(i); hash |= 0; }
    const baseRotation = (Math.abs(hash) % 1000) / 1000 * Math.PI * 2;
    starContainer.rotation.z = baseRotation;
    starContainer.userData = { type: 'starContainer', baseRotation };
    const glowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE * 1.5, MARKER_SIZE * 1.5),
      new THREE.MeshBasicMaterial({ map: glowTexture, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    glowMesh.position.z = 0.1;
    glowMesh.userData = { type: 'glow' };
    const starMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE, MARKER_SIZE),
      new THREE.MeshBasicMaterial({ map: starTexture, transparent: true, opacity: 1, side: THREE.DoubleSide, depthWrite: false })
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
    group.userData.beam = beam;
    group.userData.starContainer = starContainer;
    group.userData.baseRotation = baseRotation;
    rayOpacityRef.current[card.id] = 1;
    let lat = card.lat, lng = card.lng;
    const MIN_DISTANCE = 5, OFFSET_AMOUNT = 1.5;
    let attempts = 0;
    const maxAttempts = 8;
    while (attempts < maxAttempts) {
      const phi = (90 - lat) * (Math.PI / 180), theta = (lng + 180) * (Math.PI / 180);
      const r = GLOBE_RADIUS + LAND_ELEVATION + MARKER_OFFSET;
      const testPos = new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
      let hasCollision = false;
      for (const existingMarker of existingMarkers) { if (testPos.distanceTo(existingMarker.position) < MIN_DISTANCE) { hasCollision = true; break; } }
      if (!hasCollision) { group.position.copy(testPos); break; }
      const angle = (attempts * Math.PI / 4);
      const offsetDist = OFFSET_AMOUNT * (1 + attempts * 0.3);
      lat = card.lat + Math.sin(angle) * offsetDist;
      lng = card.lng + Math.cos(angle) * offsetDist;
      attempts++;
    }
    if (attempts >= maxAttempts) {
      const phi = (90 - card.lat) * (Math.PI / 180), theta = (card.lng + 180) * (Math.PI / 180);
      const r = GLOBE_RADIUS + LAND_ELEVATION + MARKER_OFFSET;
      group.position.set(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
    }
    const outwardDir = group.position.clone().normalize();
    group.lookAt(group.position.clone().add(outwardDir));
    group.userData.card = card;
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
    if (dot < 0.2) targetOpacity = Math.max(0, (dot + 0.15) / 0.35);
    const distance = cameraPos.distanceTo(markerPos);
    const scale = Math.max(0.5, Math.min(0.85, 220 / distance));
    return { visible, targetOpacity, scale };
  }, []);

  const findCardAtMouse = useCallback((clientX, clientY) => {
    const camera = cameraRef.current, container = containerRef.current, markers = markersRef.current;
    if (!camera || !container || markers.length === 0) return null;
    const rect = container.getBoundingClientRect();
    const clickX = clientX - rect.left, clickY = clientY - rect.top;
    let closestCard = null, closestScreenDist = 25;
    const screenVec = new THREE.Vector3();
    for (const marker of markers) {
      if (!marker.visible) continue;
      const card = marker.userData.card;
      if (!card) continue;
      const opacity = markerOpacity.current[card.id] ?? 0;
      if (opacity < 0.3) continue;
      screenVec.copy(marker.position).project(camera);
      const markerScreenX = (screenVec.x * 0.5 + 0.5) * rect.width;
      const markerScreenY = (-screenVec.y * 0.5 + 0.5) * rect.height;
      const dx = clickX - markerScreenX, dy = clickY - markerScreenY;
      const screenDist = Math.sqrt(dx * dx + dy * dy);
      if (screenDist < closestScreenDist) { closestScreenDist = screenDist; closestCard = card; }
    }
    return closestCard;
  }, []);

  const createCard3DElement = useCallback((card) => {
    const element = document.createElement('div');
    element.className = 'card-3d-wrapper';
    element.dataset.cardId = card.id;
    const imgSrc = card.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff`;
    const infoText = [card.title, card.university].filter(Boolean).join(' · ');
    element.innerHTML = `
      <div class="card-3d">
        <div class="card-3d-inner">
          <div class="card-3d-image">
            <img src="${imgSrc}" alt="${card.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff'"/>
          </div>
          <div class="card-3d-content">
            <p class="card-3d-name">${card.name}</p>
            <p class="card-3d-info">${infoText}</p>
            <p class="card-3d-location">📍 ${card.location || ''}</p>
          </div>
          <button class="card-3d-close" data-card-id="${card.id}">✕</button>
        </div>
      </div>
    `;
    element.querySelector('.card-3d-close').addEventListener('click', (e) => { e.stopPropagation(); if (onCloseCardRef.current) onCloseCardRef.current(card.id); });
    element.addEventListener('click', (e) => { if (!e.target.closest('.card-3d-close') && onFocusCardRef.current) onFocusCardRef.current(card.id); });
    return element;
  }, []);

  const createConnectionLine = useCallback((color = DEFAULT_STAR_COLOR) => {
    const { r, g, b } = parseColor(color);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const material = new THREE.LineBasicMaterial({ color: new THREE.Color(r / 255, g / 255, b / 255), transparent: true, opacity: 0.5 });
    return new THREE.Line(geometry, material);
  }, [parseColor]);

  const calculateCardPosition = useCallback((starPos, cardIndex, totalCards) => {
    const outward = starPos.clone().normalize();
    const up = new THREE.Vector3(0, 1, 0);
    const tangentX = new THREE.Vector3().crossVectors(up, outward).normalize();
    if (tangentX.length() < 0.1) tangentX.set(1, 0, 0);
    const tangentY = new THREE.Vector3().crossVectors(outward, tangentX).normalize();
    let offsetX = 0, offsetY = CARD_OFFSET_DISTANCE, offsetZ = CARD_OFFSET_DISTANCE * 0.5;
    if (totalCards > 1) {
      const angleRange = Math.PI * 0.6;
      const angleStep = angleRange / (totalCards - 1);
      const angle = -angleRange / 2 + angleStep * cardIndex;
      offsetX = Math.sin(angle) * CARD_OFFSET_DISTANCE;
      offsetY = Math.cos(angle) * CARD_OFFSET_DISTANCE + 5;
    }
    return starPos.clone().add(outward.clone().multiplyScalar(offsetZ)).add(tangentX.clone().multiplyScalar(offsetX)).add(tangentY.clone().multiplyScalar(offsetY));
  }, []);

  // Main initialization
  useEffect(() => {
    if (!containerRef.current || isInitialized.current) return;
    isInitialized.current = true;
    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000003);
    sceneRef.current = scene;
    const cssScene = new THREE.Scene();
    cssSceneRef.current = cssScene;
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 3000);
    camera.position.z = 320;
    cameraRef.current = camera;
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(container.clientWidth, container.clientHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.left = '0';
    cssRenderer.domElement.style.pointerEvents = 'none';
    container.appendChild(cssRenderer.domElement);
    cssRendererRef.current = cssRenderer;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 150;
    controls.maxDistance = 600;
    controls.enablePan = false;
    controls.autoRotateSpeed = 0.5;
    controlsRef.current = controls;
    controls.addEventListener('start', () => { if (onInteractionRef.current) onInteractionRef.current(); });
    const skybox = new THREE.Mesh(new THREE.SphereGeometry(SKYBOX_RADIUS, 64, 32), new THREE.MeshBasicMaterial({ map: createStarfieldTexture(), side: THREE.BackSide, transparent: true, opacity: 0.7 }));
    scene.add(skybox);
    skyboxRef.current = skybox;
    const globe = new THREE.Mesh(new THREE.SphereGeometry(GLOBE_RADIUS, 200, 100), new THREE.MeshStandardMaterial({ color: 0x111629 }));
    scene.add(globe);
    const specularImg = new Image();
    specularImg.crossOrigin = 'anonymous';
    specularImg.onload = () => {
      const { colorTexture, displacementTexture } = createGlobeTextures(specularImg);
      globe.material.dispose();
      globe.material = new THREE.MeshStandardMaterial({ map: colorTexture, displacementMap: displacementTexture, displacementScale: LAND_ELEVATION, roughness: 0.85, metalness: 0.05 });
    };
    specularImg.src = (import.meta.env.BASE_URL || '/') + 'earth_specular.png';
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(GLOBE_RADIUS + 18, 32, 32), new THREE.ShaderMaterial({
      vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `varying vec3 vNormal; void main() { float i = pow(0.6 - dot(vNormal, vec3(0,0,1)), 2.0); gl_FragColor = vec4(0.58, 0.2, 0.92, 1.0) * i * 0.4; }`,
      blending: THREE.AdditiveBlending, side: THREE.BackSide, transparent: true
    })));
    scene.add(new THREE.AmbientLight(0x9966cc, 0.25));
    const mainLight = new THREE.DirectionalLight(0xffeedd, 1.0);
    mainLight.position.set(300, 100, 200);
    scene.add(mainLight);
    mainLightRef.current = mainLight;
    scene.add(new THREE.DirectionalLight(0x9333ea, 0.2).translateX(-200).translateY(-100).translateZ(-200));
    glowTextureRef.current = createGlowTexture(DEFAULT_STAR_COLOR);
    loadStarTexture(DEFAULT_STAR_COLOR).then(texture => { starTexturesRef.current[DEFAULT_STAR_COLOR] = texture; });
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      cssRenderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    const screenVec = new THREE.Vector3();
    let animationId;
    const animate = (time) => {
      animationId = requestAnimationFrame(animate);
      controls.update();
      frameCount.current++;
      if (skyboxRef.current) { skyboxRef.current.rotation.y = -camera.rotation.y * 0.1; skyboxRef.current.rotation.x = -camera.rotation.x * 0.05; }
      if (mainLightRef.current) { const angle = time * 0.0001; mainLightRef.current.position.set(Math.cos(angle) * 400, Math.sin(angle * 0.3) * 100 + 50, Math.sin(angle) * 400); }
      const markers = markersRef.current;
      const selected = selectedCardsRef.current;
      const visibilityData = {};
      const camPos = camera.position;
      const w = container.clientWidth, h = container.clientHeight;
      for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];
        const card = marker.userData.card;
        if (!card) continue;
        const visibleIds = visibleCardIdsRef.current;
        const isInVisibleSet = visibleIds === null || visibleIds.has(card.id);
        const { visible, targetOpacity, scale } = getMarkerVisibility(marker.position, camPos, card.id);
        visibilityState.current[card.id] = { visible };
        const filteredTargetOpacity = isInVisibleSet ? targetOpacity : 0;
        const currentOpacity = markerOpacity.current[card.id] ?? 1;
        const newOpacity = currentOpacity + (filteredTargetOpacity - currentOpacity) * 0.1;
        markerOpacity.current[card.id] = newOpacity;
        marker.visible = newOpacity > 0.01;
        const isSelected = selected?.includes(card.id);
        const currentRayOpacity = rayOpacityRef.current[card.id] ?? 1;
        const targetRayOpacity = isSelected ? 0 : 1;
        rayOpacityRef.current[card.id] = currentRayOpacity + (targetRayOpacity - currentRayOpacity) * 0.08;
        const starContainer = marker.userData.starContainer;
        const beam = marker.userData.beam;
        const baseRotation = marker.userData.baseRotation || 0;
        if (marker.userData.currentRotationOffset === undefined) marker.userData.currentRotationOffset = 0;
        if (isSelected) {
          marker.scale.setScalar(0.7 * scale);
          marker.userData.currentRotationOffset += 0.02;
          const currentRotation = baseRotation + marker.userData.currentRotationOffset;
          if (starContainer) starContainer.rotation.z = currentRotation;
          if (beam) beam.rotation.z = currentRotation;
          marker.traverse((child) => {
            if (child.userData?.type === 'star') child.material.opacity = newOpacity;
            else if (child.userData?.type === 'glow') { child.material.opacity = 0.6 * newOpacity; child.scale.setScalar(1.8); }
            else if (child.userData?.type === 'beam' && child.material.uniforms) child.material.uniforms.opacity.value = rayOpacityRef.current[card.id] * 0.35 * newOpacity;
          });
        } else {
          marker.scale.setScalar(scale);
          if (marker.userData.currentRotationOffset !== 0) {
            const fullRotations = Math.round(marker.userData.currentRotationOffset / (Math.PI * 2));
            const targetOffset = fullRotations * Math.PI * 2;
            const diff = targetOffset - marker.userData.currentRotationOffset;
            marker.userData.currentRotationOffset = Math.abs(diff) < 0.01 ? 0 : marker.userData.currentRotationOffset + diff * 0.1;
          }
          const currentRotation = baseRotation + marker.userData.currentRotationOffset;
          if (starContainer) starContainer.rotation.z = currentRotation;
          if (beam) beam.rotation.z = currentRotation;
          marker.traverse((child) => {
            if (child.userData?.type === 'star') child.material.opacity = newOpacity;
            else if (child.userData?.type === 'glow') { child.material.opacity = 0.3 * newOpacity; child.scale.setScalar(1); }
            else if (child.userData?.type === 'beam' && child.material.uniforms) child.material.uniforms.opacity.value = rayOpacityRef.current[card.id] * 0.35 * newOpacity;
          });
        }
        screenVec.copy(marker.position).project(camera);
        visibilityData[card.id] = { visible: marker.visible, screenPos: { x: (screenVec.x * 0.5 + 0.5) * w, y: (-screenVec.y * 0.5 + 0.5) * h }, scale, opacity: newOpacity, distance: camPos.distanceTo(marker.position) };
      }
      for (const cardId of Object.keys(card3DObjectsRef.current)) {
        const cssObj = card3DObjectsRef.current[cardId];
        const line = connectionLinesRef.current[cardId];
        const vis = visibilityData[cardId];
        if (cssObj && vis) {
          const isVisible = vis.visible && vis.opacity > 0.1;
          cssObj.visible = isVisible;
          if (cssObj.element) { cssObj.element.style.opacity = vis.opacity; cssObj.element.style.pointerEvents = isVisible ? 'auto' : 'none'; }
          if (line && cssObj.userData.starPos) {
            const positions = line.geometry.attributes.position.array;
            const starPos = cssObj.userData.starPos, cardPos = cssObj.position;
            positions[0] = starPos.x; positions[1] = starPos.y; positions[2] = starPos.z;
            positions[3] = cardPos.x; positions[4] = cardPos.y; positions[5] = cardPos.z;
            line.geometry.attributes.position.needsUpdate = true;
            line.visible = isVisible;
            line.material.opacity = vis.opacity * 0.5;
          }
        }
      }
      if (markers.length > 0) onMarkerVisibilityChangeRef.current?.(visibilityData);
      renderer.render(scene, camera);
      cssRenderer.render(cssScene, camera);
    };
    animate(0);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      for (const cardId of Object.keys(card3DObjectsRef.current)) { const obj = card3DObjectsRef.current[cardId]; if (obj?.element) obj.element.remove(); }
      card3DObjectsRef.current = {};
      for (const cardId of Object.keys(connectionLinesRef.current)) { const line = connectionLinesRef.current[cardId]; if (line) { scene.remove(line); line.geometry.dispose(); line.material.dispose(); } }
      connectionLinesRef.current = {};
      scene.traverse((obj) => { if (obj.geometry) obj.geometry.dispose(); if (obj.material) { if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose()); else obj.material.dispose(); } });
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) container.removeChild(renderer.domElement);
      if (cssRendererRef.current && cssRendererRef.current.domElement.parentNode === container) container.removeChild(cssRendererRef.current.domElement);
      isInitialized.current = false;
    };
  }, [createStarfieldTexture, createGlobeTextures, createGlowTexture, loadStarTexture, getMarkerVisibility]);

  // Manage 3D cards
  useEffect(() => {
    const scene = sceneRef.current, cssScene = cssSceneRef.current;
    if (!scene || !cssScene || !cards) return;
    const currentSelected = new Set(selectedCards || []);
    const existingCards = new Set(Object.keys(card3DObjectsRef.current));
    for (const cardId of existingCards) {
      if (!currentSelected.has(cardId)) {
        const cssObj = card3DObjectsRef.current[cardId];
        if (cssObj) { cssScene.remove(cssObj); if (cssObj.element) cssObj.element.remove(); }
        delete card3DObjectsRef.current[cardId];
        const line = connectionLinesRef.current[cardId];
        if (line) { scene.remove(line); line.geometry.dispose(); line.material.dispose(); }
        delete connectionLinesRef.current[cardId];
      }
    }
    const cardsByMarker = {};
    for (const cardId of currentSelected) {
      const marker = markersRef.current.find(m => m.userData.card?.id === cardId);
      if (marker) {
        const key = `${marker.position.x.toFixed(2)}_${marker.position.y.toFixed(2)}_${marker.position.z.toFixed(2)}`;
        if (!cardsByMarker[key]) cardsByMarker[key] = { marker, cardIds: [] };
        cardsByMarker[key].cardIds.push(cardId);
      }
    }
    for (const key of Object.keys(cardsByMarker)) {
      const { marker, cardIds } = cardsByMarker[key];
      const starPos = marker.position.clone();
      cardIds.forEach((cardId, idx) => {
        if (existingCards.has(cardId)) return;
        const card = cards.find(c => c.id === cardId);
        if (!card) return;
        const element = createCard3DElement(card);
        const cssObject = new CSS3DObject(element);
        cssObject.scale.set(CARD_SCALE, CARD_SCALE, CARD_SCALE);
        const cardPos = calculateCardPosition(starPos, idx, cardIds.length);
        cssObject.position.copy(cardPos);
        cssObject.lookAt(cardPos.clone().normalize().multiplyScalar(500));
        cssObject.userData = { starPos: starPos.clone(), cardId };
        cssScene.add(cssObject);
        card3DObjectsRef.current[cardId] = cssObject;
        const line = createConnectionLine(card.starColor || DEFAULT_STAR_COLOR);
        scene.add(line);
        connectionLinesRef.current[cardId] = line;
      });
    }
  }, [selectedCards, cards, createCard3DElement, createConnectionLine, calculateCardPosition]);

  useEffect(() => { if (controlsRef.current) controlsRef.current.autoRotate = autoRotate && !isHovering && (!selectedCards || selectedCards.length === 0) && !focusCardId; }, [autoRotate, isHovering, selectedCards, focusCardId]);

  useEffect(() => {
    if (!sceneRef.current || !glowTextureRef.current || !starTexturesRef.current[DEFAULT_STAR_COLOR] || !cards || cards.length === 0) return;
    markersRef.current.forEach(m => { m.traverse((obj) => { if (obj.geometry) obj.geometry.dispose(); if (obj.material) obj.material.dispose(); }); sceneRef.current.remove(m); });
    markersRef.current = [];
    markerOpacity.current = {};
    rayOpacityRef.current = {};
    cards.forEach(card => {
      const color = card.starColor || DEFAULT_STAR_COLOR;
      const starTexture = starTexturesRef.current[color] || starTexturesRef.current[DEFAULT_STAR_COLOR];
      const glowTexture = createGlowTexture(color);
      const group = createStarMarker(card, starTexture, glowTexture, markersRef.current);
      sceneRef.current.add(group);
      markersRef.current.push(group);
    });
  }, [cards, createStarMarker, createGlowTexture]);

  useEffect(() => {
    const checkTexture = setInterval(() => {
      if (starTexturesRef.current[DEFAULT_STAR_COLOR] && sceneRef.current && markersRef.current.length === 0 && cards && cards.length > 0) {
        cards.forEach(card => {
          const color = card.starColor || DEFAULT_STAR_COLOR;
          const group = createStarMarker(card, starTexturesRef.current[color] || starTexturesRef.current[DEFAULT_STAR_COLOR], createGlowTexture(color), markersRef.current);
          sceneRef.current.add(group);
          markersRef.current.push(group);
        });
        clearInterval(checkTexture);
      }
    }, 100);
    return () => clearInterval(checkTexture);
  }, [cards, createStarMarker, createGlowTexture]);

  const handleClick = useCallback((e) => { if (e.target.closest('.card-3d-wrapper')) return; const card = findCardAtMouse(e.clientX, e.clientY); if (card) onMarkerClick(card); }, [onMarkerClick, findCardAtMouse]);
  const handlePointerMove = useCallback((e) => {
    if (e.target.closest('.card-3d-wrapper')) { if (!isHovering) setIsHovering(true); return; }
    const card = findCardAtMouse(e.clientX, e.clientY);
    const newHoveredId = card?.id ?? null;
    if (newHoveredId !== lastHoveredId.current) {
      lastHoveredId.current = newHoveredId;
      if (pendingHoverUpdate.current) cancelAnimationFrame(pendingHoverUpdate.current);
      pendingHoverUpdate.current = requestAnimationFrame(() => { setIsHovering(newHoveredId !== null); pendingHoverUpdate.current = null; });
    }
  }, [findCardAtMouse, isHovering]);
  const handlePointerLeave = useCallback(() => { if (pendingHoverUpdate.current) cancelAnimationFrame(pendingHoverUpdate.current); lastHoveredId.current = null; setIsHovering(false); }, []);

  return <div ref={containerRef} className={`globe-canvas ${isHovering ? 'hovering-star' : ''}`} onClick={handleClick} onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} />;
}

export default Globe;