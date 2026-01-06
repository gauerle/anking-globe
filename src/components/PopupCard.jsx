import React, { useState, useEffect, useRef, memo } from 'react';
import { getImageUrl } from '../utils/api';

const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const COMPACT_SIZE = 56;

// Distance thresholds (based on Globe's minDistance=150, maxDistance=600)
const MIN_DISTANCE = 150;
const MAX_DISTANCE = 600;
const COMPACT_DISTANCE = 350;

function calculatePosition(anchor, starX, starY, isCompact, offset = { x: 0, y: 0 }) {
  const width = isCompact ? COMPACT_SIZE : CARD_WIDTH;
  const height = isCompact ? COMPACT_SIZE : CARD_HEIGHT;
  
  let left, top, originX, originY;
  
  switch (anchor) {
    case 'top-left':
      left = starX;
      top = starY;
      originX = 'left';
      originY = 'top';
      break;
    case 'top-right':
      left = starX - width;
      top = starY;
      originX = 'right';
      originY = 'top';
      break;
    case 'bottom-left':
      left = starX;
      top = starY - height;
      originX = 'left';
      originY = 'bottom';
      break;
    case 'bottom-right':
      left = starX - width;
      top = starY - height;
      originX = 'right';
      originY = 'bottom';
      break;
    default:
      left = starX;
      top = starY;
      originX = 'left';
      originY = 'top';
  }
  
  left += offset.x;
  top += offset.y;
  
  return { left, top, originX, originY };
}

const PopupCard = memo(function PopupCard({ card, visibilityData, anchor, offset, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState('entering');
  const [isClosing, setIsClosing] = useState(false);
  const animationRef = useRef(null);
  const hasEnteredRef = useRef(false);
  
  const data = visibilityData?.[card.id];
  
  useEffect(() => {
    if (data?.visible && !hasEnteredRef.current) {
      hasEnteredRef.current = true;
      setAnimationState('entering');
      
      animationRef.current = requestAnimationFrame(() => {
        animationRef.current = requestAnimationFrame(() => {
          setAnimationState('visible');
        });
      });
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data?.visible]);
  
  const handleClose = (e) => {
    e.stopPropagation();
    setIsClosing(true);
    setAnimationState('exiting');
    
    setTimeout(() => {
      onClose(card.id);
    }, 200);
  };
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, distance, opacity } = data;
  
  // Use raw distance for world-attached scaling
  // At MIN_DISTANCE (150), scale should be ~1.0 (close up)
  // At MAX_DISTANCE (600), scale should be ~0.25 (far away)
  const clampedDistance = Math.max(MIN_DISTANCE, Math.min(MAX_DISTANCE, distance || 300));
  
  // Inverse relationship: closer = bigger, farther = smaller
  // This creates a much more dramatic scaling effect
  const worldScale = MIN_DISTANCE / clampedDistance; // 1.0 at 150, 0.25 at 600
  
  const isCompact = clampedDistance > COMPACT_DISTANCE && !isFocused;
  
  // Base scale 
  const baseScale = isCompact ? 0.8 : 1.0;
  
  const focusBoost = isFocused ? 1.15 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.08 : 1;
  
  // Animation scale
  let animScale = 1;
  if (animationState === 'entering') {
    animScale = 0.3;
  } else if (animationState === 'exiting' || isClosing) {
    animScale = 0.3;
  }
  
  // Final scale combines world distance with interactions
  let finalScale = baseScale * worldScale * focusBoost * hoverBoost * animScale;
  finalScale = Math.max(0.2, Math.min(1.3, finalScale));
  
  // Scale offset by world scale so cards stay proportionally close to star
  const scaledOffset = {
    x: (offset?.x || 0) * worldScale,
    y: (offset?.y || 0) * worldScale
  };
  
  const pos = calculatePosition(anchor, screenPos.x, screenPos.y, isCompact, scaledOffset);
  
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${pos.originX} ${pos.originY}`;
  
  let animOpacity = opacity;
  if (animationState === 'entering') {
    animOpacity = 0;
  } else if (animationState === 'exiting' || isClosing) {
    animOpacity = 0;
  }
  
  const infoText = [card.title, card.university].filter(Boolean).join(' · ');

  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''} ${isHovered ? 'hovered' : ''} ${isCompact ? 'compact' : ''}`}
      style={{
        left: pos.left,
        top: pos.top,
        width: isCompact ? COMPACT_SIZE : CARD_WIDTH,
        height: isCompact ? COMPACT_SIZE : CARD_HEIGHT,
        transform: `scale(${finalScale})`,
        transformOrigin,
        opacity: animOpacity,
        zIndex: computedZIndex,
        pointerEvents: opacity > 0.3 && animationState === 'visible' ? 'auto' : 'none',
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
      }}
      onClick={(e) => {
        e.stopPropagation();
        onFocus(card.id);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="popup-card-inner">
        <div className="card-image-wrapper">
          <img 
            src={getImageUrl(card.image)} 
            alt={card.name}
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff`;
            }}
          />
        </div>
        
        <div className="card-content">
          <p className="card-name">{card.name}</p>
          <div className="card-info marquee-wrapper">
            <span className="marquee-content">{infoText}</span>
          </div>
          <div className="card-location">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <div className="card-location-text marquee-wrapper">
              <span className="marquee-content">{card.location}</span>
            </div>
          </div>
        </div>
        
        <button 
          className="card-close-btn" 
          onClick={handleClose}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
  );
});

export default PopupCard;