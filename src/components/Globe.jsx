import React, { useRef, useEffect, useCallback, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { createRoot } from 'react-dom/client';
import Card3D from './Card3D';

const GLOBE_RADIUS = 100;
const LAND_ELEVATION = 3.0;
const MARKER_SIZE = 2.8;
const MARKER_OFFSET = 0.3;
const RAY_LENGTH = 8;
const SKYBOX_RADIUS = 1500;

// Card positioning
const CARD_DISTANCE = 25; // Distance from star to card
const CARD_SCALE = 0.15; // Scale of 3D cards

const COLORS = {
  water: { r: 17, g: 22, b: 41 },
  land: { r: 54, g: 63, b: 84 },
};

const DEFAULT_STAR_COLOR = '#9333ea';

/**
 * Group cards by geographic proximity
 */
function groupCardsByLocation(cards, threshold = 3.0) {
  const groups = [];
  const assigned = new Set();
  
  const sortedCards = [...cards].sort((a, b) => {
    if (Math.abs(a.lat - b.lat) < 0.1) return a.lng - b.lng;
    return a.lat - b.lat;
  });
  
  for (const card of sortedCards) {
    if (assigned.has(card.id)) continue;
    
    const group = [card];
    assigned.add(card.id);
    
    for (const other of sortedCards) {
      if (assigned.has(other.id)) continue;
      
      const latDiff = Math.abs(card.lat - other.lat);
      const lngDiff = Math.abs(card.lng - other.lng);
      const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
      
      if (distance < threshold) {
        group.push(other);
        assigned.add(other.id);
      }
    }
    groups.push(group);
  }
  return groups;
}

/**
 * Calculate optimal card positions around a star using physics simulation
 */
function calculateCardPositions(cardCount, starPosition) {
  if (cardCount === 0) return [];
  
  const positions = [];
  
  // Get the outward direction from globe center
  const outward = starPosition.clone().normalize();
  
  // Create a local coordinate system on the tangent plane
  const up = new THREE.Vector3(0, 1, 0);
  const tangentX = new THREE.Vector3().crossVectors(up, outward).normalize();
  if (tangentX.length() < 0.1) {
    tangentX.set(1, 0, 0);
  }
  const tangentY = new THREE.Vector3().crossVectors(outward, tangentX).normalize();
  
  if (cardCount === 1) {
    // Single card: position above and slightly to the right
    const offset = tangentX.clone().multiplyScalar(CARD_DISTANCE * 0.3)
      .add(tangentY.clone().multiplyScalar(CARD_DISTANCE * 0.8))
      .add(outward.clone().multiplyScalar(CARD_DISTANCE * 0.5));
    positions.push(starPosition.clone().add(offset));
  } else {
    // Multiple cards: distribute in a fan pattern
    const angleSpread = Math.min(Math.PI * 0.8, cardCount * 0.4);
    const startAngle = Math.PI / 2 - angleSpread / 2;
    
    for (let i = 0; i < cardCount; i++) {
      const angle = startAngle + (angleSpread * i) / (cardCount - 1 || 1);
      const radius = CARD_DISTANCE + (i % 2) * 5; // Stagger depth slightly
      
      const x = Math.cos(angle) * radius * 0.5;
      const y = Math.sin(angle) * radius;
      const z = CARD_DISTANCE * 0.3;
      
      const offset = tangentX.clone().multiplyScalar(x)
        .add(tangentY.clone().multiplyScalar(y))
        .add(outward.clone().multiplyScalar(z));
      
      positions.push(starPosition.clone().add(offset));
    }
  }
  
  return positions;
}

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
  const cardPositionsRef = useRef({});
  
  const toMarker = useRef(new THREE.Vector3());
  const tempVec = useRef(new THREE.Vector3());

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

  useEffect(() => {
    onCloseCardRef.current = onCloseCard;
  }, [onCloseCard]);

  useEffect(() => {
    onFocusCardRef.current = onFocusCard;
  }, [onFocusCard]);

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
        opacity: { value: 0.35 },
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

  const createConnectionLine = useCallback((startPos, endPos, color = DEFAULT_STAR_COLOR) => {
    const { r, g, b } = parseColor(color);
    
    const points = [startPos, endPos];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(r / 255, g / 255, b / 255),
      transparent: true,
      opacity: 0.6,
      linewidth: 2,
    });
    
    return new THREE.Line(geometry, material);
  }, [parseColor]);

  const createStarMarker = useCallback((cardGroup, starTexture, glowTexture) => {
    const primaryCard = cardGroup[0];
    const group = new THREE.Group();
    
    const starContainer = new THREE.Group();
    let hash = 0;
    for (let i = 0; i < primaryCard.id.length; i++) {
      hash = ((hash << 5) - hash) + primaryCard.id.charCodeAt(i);
      hash |= 0;
    }
    const baseRotation = (Math.abs(hash) % 1000) / 1000 * Math.PI * 2;
    starContainer.rotation.z = baseRotation;
    starContainer.userData = { type: 'starContainer', baseRotation };
    
    const glowScale = 1 + Math.min(cardGroup.length - 1, 4) * 0.15;
    
    const glowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(MARKER_SIZE * 1.5 * glowScale, MARKER_SIZE * 1.5 * glowScale),
      new THREE.MeshBasicMaterial({
        map: glowTexture,
        transparent: true,
        opacity: 0.3 + Math.min(cardGroup.length - 1, 4) * 0.1,
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
    
    const color = primaryCard.starColor || DEFAULT_STAR_COLOR;
    const beam = createLightBeam(color);
    beam.rotation.z = baseRotation;
    group.add(beam);
    
    group.userData.beam = beam;
    group.userData.starContainer = starContainer;
    
    let avgLat = 0, avgLng = 0;
    for (const card of cardGroup) {
      avgLat += card.lat;
      avgLng += card.lng;
      rayOpacityRef.current[card.id] = 1;
    }
    avgLat /= cardGroup.length;
    avgLng /= cardGroup.length;
    
    const phi = (90 - avgLat) * (Math.PI / 180);
    const theta = (avgLng + 180) * (Math.PI / 180);
    const r = GLOBE_RADIUS + LAND_ELEVATION + MARKER_OFFSET;
    group.position.set(
      -r * Math.sin(phi) * Math.cos(theta),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
    
    const outwardDir = group.position.clone().normalize();
    const targetPoint = group.position.clone().add(outwardDir);
    group.lookAt(targetPoint);
    
    group.userData.cards = cardGroup;
    group.userData.card = primaryCard;
    group.userData.locationKey = `${avgLat.toFixed(1)}_${avgLng.toFixed(1)}`;
    group.userData.baseRotation = baseRotation;
    
    for (const card of cardGroup) {
      markerOpacity.current[card.id] = 1;
    }
    
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
    const scale = Math.max(0.5, Math.min(0.85, 220 / distance));
    
    return { visible, targetOpacity, scale };
  }, []);

  const findCardAtMouse = useCallback((clientX, clientY) => {
    const camera = cameraRef.current;
    const container = containerRef.current;
    const markers = markersRef.current;
    
    if (!camera || !container || markers.length === 0) return null;
    
    const rect = container.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;
    
    let closestCards = null;
    let closestScreenDist = 25;
    
    const screenVec = new THREE.Vector3();
    
    for (const marker of markers) {
      if (!marker.visible) continue;
      
      const cards = marker.userData.cards;
      if (!cards || cards.length === 0) continue;
      
      const primaryCard = cards[0];
      const opacity = markerOpacity.current[primaryCard.id] ?? 0;
      if (opacity < 0.3) continue;
      
      screenVec.copy(marker.position).project(camera);
      const markerScreenX = (screenVec.x * 0.5 + 0.5) * rect.width;
      const markerScreenY = (-screenVec.y * 0.5 + 0.5) * rect.height;
      
      const dx = clickX - markerScreenX;
      const dy = clickY - markerScreenY;
      const screenDist = Math.sqrt(dx * dx + dy * dy);
      
      if (screenDist < closestScreenDist) {
        closestScreenDist = screenDist;
        closestCards = cards;
      }
    }
    
    return closestCards;
  }, []);

  // Create or update 3D card objects
  const update3DCards = useCallback((selectedCardIds, cardData, scene, cssScene) => {
    if (!scene || !cssScene) return;
    
    // Remove cards that are no longer selected
    for (const cardId of Object.keys(card3DObjectsRef.current)) {
      if (!selectedCardIds.includes(cardId)) {
        const cardObj = card3DObjectsRef.current[cardId];
        if (cardObj) {
          cssScene.remove(cardObj);
          if (cardObj.element) {
            cardObj.element.remove();
          }
        }
        delete card3DObjectsRef.current[cardId];
        
        // Remove connection line
        const line = connectionLinesRef.current[cardId];
        if (line) {
          scene.remove(line);
          line.geometry.dispose();
          line.material.dispose();
        }
        delete connectionLinesRef.current[cardId];
        delete cardPositionsRef.current[cardId];
      }
    }
    
    // Group selected cards by their marker
    const cardsByMarker = {};
    for (const cardId of selectedCardIds) {
      const marker = markersRef.current.find(m => 
        m.userData.cards?.some(c => c.id === cardId)
      );
      if (marker) {
        const key = marker.userData.locationKey;
        if (!cardsByMarker[key]) {
          cardsByMarker[key] = { marker, cardIds: [] };
        }
        cardsByMarker[key].cardIds.push(cardId);
      }
    }
    
    // Create/update cards for each marker
    for (const key of Object.keys(cardsByMarker)) {
      const { marker, cardIds } = cardsByMarker[key];
      const starPos = marker.position.clone();
      
      // Calculate positions only once when cards are added
      const newCardIds = cardIds.filter(id => !cardPositionsRef.current[id]);
      if (newCardIds.length > 0) {
        const positions = calculateCardPositions(cardIds.length, starPos);
        cardIds.forEach((cardId, idx) => {
          if (!cardPositionsRef.current[cardId]) {
            cardPositionsRef.current[cardId] = positions[idx] || starPos.clone();
          }
        });
      }
      
      // Create/update card objects
      for (const cardId of cardIds) {
        const card = cardData.find(c => c.id === cardId);
        if (!card) continue;
        
        const cardPos = cardPositionsRef.current[cardId];
        if (!cardPos) continue;
        
        if (!card3DObjectsRef.current[cardId]) {
          // Create new card element
          const element = document.createElement('div');
          element.className = 'card-3d-container';
          element.innerHTML = `
            <div class="card-3d">
              <div class="card-3d-inner">
                <div class="card-image-wrapper">
                  <img src="${card.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff`}" 
                       alt="${card.name}"
                       onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff'"/>
                </div>
                <div class="card-content">
                  <p class="card-name">${card.name}</p>
                  <div class="card-info">${[card.title, card.university].filter(Boolean).join(' · ')}</div>
                  <div class="card-location">
                    <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <span>${card.location || ''}</span>
                  </div>
                </div>
                <button class="card-close-btn" data-card-id="${cardId}">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            </div>
          `;
          
          // Add click handlers
          element.querySelector('.card-close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (onCloseCardRef.current) onCloseCardRef.current(cardId);
          });
          
          element.addEventListener('click', (e) => {
            if (!e.target.closest('.card-close-btn')) {
              if (onFocusCardRef.current) onFocusCardRef.current(cardId);
            }
          });
          
          const cssObject = new CSS3DObject(element);
          cssObject.scale.set(CARD_SCALE, CARD_SCALE, CARD_SCALE);
          cssObject.position.copy(cardPos);
          
          // Make card face outward from globe
          const lookAtPos = cardPos.clone().normalize().multiplyScalar(200);
          cssObject.lookAt(lookAtPos);
          
          cssScene.add(cssObject);
          card3DObjectsRef.current[cardId] = cssObject;
          
          // Create connection line
          const line = createConnectionLine(starPos, cardPos, card.starColor || DEFAULT_STAR_COLOR);
          scene.add(line);
          connectionLinesRef.current[cardId] = line;
        } else {
          // Update existing card position (for smooth animation)
          const cssObject = card3DObjectsRef.current[cardId];
          cssObject.position.lerp(cardPos, 0.1);
          
          // Update connection line
          const line = connectionLinesRef.current[cardId];
          if (line) {
            const positions = line.geometry.attributes.position;
            positions.setXYZ(0, starPos.x, starPos.y, starPos.z);
            positions.setXYZ(1, cssObject.position.x, cssObject.position.y, cssObject.position.z);
            positions.needsUpdate = true;
          }
          
          // Update look direction
          const lookAtPos = cssObject.position.clone().normalize().multiplyScalar(200);
          cssObject.lookAt(lookAtPos);
        }
        
        // Update focus state
        const element = card3DObjectsRef.current[cardId]?.element;
        if (element) {
          const cardDiv = element.querySelector('.card-3d');
          if (cardDiv) {
            cardDiv.classList.toggle('focused', focusCardIdRef.current === cardId);
          }
        }
      }
    }
  }, [createConnectionLine]);

  useEffect(() => {
    if (!containerRef.current || isInitialized.current) return;
    isInitialized.current = true;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000003);
    sceneRef.current = scene;
    
    // CSS3D Scene for cards
    const cssScene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 3000);
    camera.position.z = 320;
    cameraRef.current = camera;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // CSS3D Renderer
    const cssRenderer = new CSS3DRenderer();
    cssRenderer.setSize(container.clientWidth, container.clientHeight);
    cssRenderer.domElement.style.position = 'absolute';
    cssRenderer.domElement.style.top = '0';
    cssRenderer.domElement.style.pointerEvents = 'none';
    container.appendChild(cssRenderer.domElement);
    cssRendererRef.current = cssRenderer;
    
    // Make CSS3D elements clickable
    cssRenderer.domElement.style.pointerEvents = 'auto';

    const controls = new OrbitControls(camera, cssRenderer.domElement);
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
      cssRenderer.setSize(container.clientWidth, container.clientHeight);
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
        const cardGroup = marker.userData.cards;
        if (!cardGroup || cardGroup.length === 0) continue;
        
        const primaryCard = cardGroup[0];
        
        const visibleIds = visibleCardIdsRef.current;
        const isInVisibleSet = visibleIds === null || cardGroup.some(c => visibleIds.has(c.id));
        
        const { visible, targetOpacity, scale } = getMarkerVisibility(marker.position, camPos, primaryCard.id);
        
        for (const card of cardGroup) {
          visibilityState.current[card.id] = { visible };
        }
        
        const filteredTargetOpacity = isInVisibleSet ? targetOpacity : 0;
        
        const currentOpacity = markerOpacity.current[primaryCard.id] ?? 1;
        const newOpacity = currentOpacity + (filteredTargetOpacity - currentOpacity) * 0.1;
        
        for (const card of cardGroup) {
          markerOpacity.current[card.id] = newOpacity;
        }
        
        marker.visible = newOpacity > 0.01;
        
        const isSelected = selected?.some(id => cardGroup.some(c => c.id === id));
        
        for (const card of cardGroup) {
          const currentRayOpacity = rayOpacityRef.current[card.id] ?? 1;
          const cardSelected = selected?.includes(card.id);
          const targetRayOpacity = cardSelected ? 0 : 1;
          rayOpacityRef.current[card.id] = currentRayOpacity + (targetRayOpacity - currentRayOpacity) * 0.08;
        }
        
        const avgRayOpacity = cardGroup.reduce((sum, c) => sum + (rayOpacityRef.current[c.id] ?? 1), 0) / cardGroup.length;
        
        const starContainer = marker.userData.starContainer;
        const beam = marker.userData.beam;
        const baseRotation = marker.userData.baseRotation || 0;
        
        if (marker.userData.currentRotationOffset === undefined) {
          marker.userData.currentRotationOffset = 0;
        }

        if (isSelected) {
          marker.scale.setScalar(0.7 * scale);
          marker.userData.currentRotationOffset += 0.02;
          
          const currentRotation = baseRotation + marker.userData.currentRotationOffset;
          if (starContainer) starContainer.rotation.z = currentRotation;
          if (beam) beam.rotation.z = currentRotation;
          
          marker.traverse((child) => {
            if (child.userData?.type === 'star') {
              child.material.opacity = newOpacity;
            } else if (child.userData?.type === 'glow') {
              child.material.opacity = 0.6 * newOpacity;
              child.scale.setScalar(1.8);
            } else if (child.userData?.type === 'beam' && child.material.uniforms) {
              child.material.uniforms.opacity.value = avgRayOpacity * 0.35 * newOpacity;
            }
          });
        } else {
          marker.scale.setScalar(scale);
          
          if (marker.userData.currentRotationOffset !== 0) {
            const fullRotations = Math.round(marker.userData.currentRotationOffset / (Math.PI * 2));
            const targetOffset = fullRotations * Math.PI * 2;
            const diff = targetOffset - marker.userData.currentRotationOffset;
            if (Math.abs(diff) < 0.01) {
              marker.userData.currentRotationOffset = 0;
            } else {
              marker.userData.currentRotationOffset += diff * 0.1;
            }
          }
          
          const currentRotation = baseRotation + marker.userData.currentRotationOffset;
          if (starContainer) starContainer.rotation.z = currentRotation;
          if (beam) beam.rotation.z = currentRotation;
          
          marker.traverse((child) => {
            if (child.userData?.type === 'star') {
              child.material.opacity = newOpacity;
            } else if (child.userData?.type === 'glow') {
              child.material.opacity = 0.3 * newOpacity;
              child.scale.setScalar(1);
            } else if (child.userData?.type === 'beam' && child.material.uniforms) {
              child.material.uniforms.opacity.value = avgRayOpacity * 0.35 * newOpacity;
            }
          });
        }
        
        screenVec.copy(marker.position).project(camera);
        const screenX = (screenVec.x * 0.5 + 0.5) * w;
        const screenY = (-screenVec.y * 0.5 + 0.5) * h;
        
        const distance = camPos.distanceTo(marker.position);
        
        for (const card of cardGroup) {
          visibilityData[card.id] = {
            visible: marker.visible,
            screenPos: { x: screenX, y: screenY },
            scale,
            distance,
            opacity: newOpacity
          };
        }
      }
      
      // Update 3D cards
      if (selected && selected.length > 0) {
        update3DCards(selected, cards, scene, cssScene);
      } else {
        update3DCards([], cards, scene, cssScene);
      }
      
      // Update connection line visibility based on marker visibility
      for (const cardId of Object.keys(connectionLinesRef.current)) {
        const line = connectionLinesRef.current[cardId];
        const vis = visibilityData[cardId];
        if (line && vis) {
          line.material.opacity = vis.opacity * 0.6;
          line.visible = vis.visible && vis.opacity > 0.1;
        }
      }
      
      // Update card visibility
      for (const cardId of Object.keys(card3DObjectsRef.current)) {
        const cardObj = card3DObjectsRef.current[cardId];
        const vis = visibilityData[cardId];
        if (cardObj && vis) {
          cardObj.visible = vis.visible && vis.opacity > 0.1;
          if (cardObj.element) {
            cardObj.element.style.opacity = vis.opacity;
          }
        }
      }
      
      if (markers.length > 0 && frameCount.current % 1 === 0) {
        onMarkerVisibilityChangeRef.current?.(visibilityData);
      }

      renderer.render(scene, camera);
      cssRenderer.render(cssScene, camera);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      
      // Clean up 3D cards
      for (const cardId of Object.keys(card3DObjectsRef.current)) {
        const cardObj = card3DObjectsRef.current[cardId];
        if (cardObj?.element) cardObj.element.remove();
      }
      card3DObjectsRef.current = {};
      
      for (const cardId of Object.keys(connectionLinesRef.current)) {
        const line = connectionLinesRef.current[cardId];
        if (line) {
          line.geometry.dispose();
          line.material.dispose();
        }
      }
      connectionLinesRef.current = {};
      
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
      if (container && cssRenderer.domElement.parentNode === container) {
        container.removeChild(cssRenderer.domElement);
      }
      isInitialized.current = false;
    };
  }, [cards]);

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

  useEffect(() => {
    if (!sceneRef.current || !glowTextureRef.current) return;
    if (!starTexturesRef.current[DEFAULT_STAR_COLOR]) return;
    if (!cards || cards.length === 0) return;
    
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

    const locationGroups = groupCardsByLocation(cards, 3.0);
    
    locationGroups.forEach(cardGroup => {
      const primaryCard = cardGroup[0];
      const color = primaryCard.starColor || DEFAULT_STAR_COLOR;
      const starTexture = starTexturesRef.current[color] || starTexturesRef.current[DEFAULT_STAR_COLOR];
      const glowTexture = createGlowTexture(color);
      
      const group = createStarMarker(cardGroup, starTexture, glowTexture);
      sceneRef.current.add(group);
      markersRef.current.push(group);
    });
  }, [cards, createStarMarker, createGlowTexture]);

  const handleClick = useCallback((e) => {
    // Don't handle clicks on cards
    if (e.target.closest('.card-3d-container')) return;
    
    const cards = findCardAtMouse(e.clientX, e.clientY);
    if (cards && cards.length > 0) {
      onMarkerClick(cards);
    }
  }, [onMarkerClick, findCardAtMouse]);

  const handlePointerMove = useCallback((e) => {
    if (e.target.closest('.card-3d-container')) {
      if (!isHovering) setIsHovering(true);
      return;
    }
    
    const cards = findCardAtMouse(e.clientX, e.clientY);
    const newHoveredId = cards?.[0]?.id ?? null;
    
    if (newHoveredId !== lastHoveredId.current) {
      lastHoveredId.current = newHoveredId;
      
      if (pendingHoverUpdate.current) {
        cancelAnimationFrame(pendingHoverUpdate.current);
      }
      
      pendingHoverUpdate.current = requestAnimationFrame(() => {
        setIsHovering(newHoveredId !== null);
        pendingHoverUpdate.current = null;
      });
    }
  }, [findCardAtMouse, isHovering]);

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