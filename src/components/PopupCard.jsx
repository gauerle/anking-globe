import React, { useState, useEffect, useRef, memo } from 'react';
import { getImageUrl } from '../utils/api';

const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const COMPACT_SIZE = 56;

// Distance-based threshold for compact mode
const COMPACT_DISTANCE = 280;

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
  
  // Apply fuzzy offset (scaled by current scale for consistency)
  left += offset.x;
  top += offset.y;
  
  return { left, top, originX, originY };
}

const PopupCard = memo(function PopupCard({ card, visibilityData, anchor, offset, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState('entering'); // 'entering', 'visible', 'exiting'
  const [isClosing, setIsClosing] = useState(false);
  const animationRef = useRef(null);
  const hasEnteredRef = useRef(false);
  
  const data = visibilityData?.[card.id];
  
  // Handle enter animation
  useEffect(() => {
    if (data?.visible && !hasEnteredRef.current) {
      hasEnteredRef.current = true;
      setAnimationState('entering');
      
      // Trigger transition to visible after a frame
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
  
  // Handle close with animation
  const handleClose = (e) => {
    e.stopPropagation();
    setIsClosing(true);
    setAnimationState('exiting');
    
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      onClose(card.id);
    }, 200);
  };
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  // Scale is from Globe: 220/distance, ranging ~0.5-0.85
  // Make cards scale MORE with distance - feel attached to world
  const worldScale = scale; // This already decreases when zooming out
  
  // Convert scale to distance for threshold check
  const approxDistance = 220 / Math.max(0.1, worldScale);
  const isCompact = approxDistance > COMPACT_DISTANCE && !isFocused;
  
  // Base scale that respects world distance
  // When far (scale=0.5), cards should be small
  // When close (scale=0.85), cards should be normal size
  const baseScale = isCompact ? 0.7 : 0.85;
  
  // Apply world scale more directly - cards shrink when zooming out
  const distanceScale = Math.max(0.4, Math.min(1.0, worldScale * 1.3));
  
  const focusBoost = isFocused ? 1.2 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.1 : 1;
  
  // Animation scale
  let animScale = 1;
  if (animationState === 'entering') {
    animScale = 0.3;
  } else if (animationState === 'exiting' || isClosing) {
    animScale = 0.3;
  }
  
  let finalScale = baseScale * distanceScale * focusBoost * hoverBoost * animScale;
  finalScale = Math.max(0.3, Math.min(1.2, finalScale));
  
  // Scale offset by distance so cards stay closer to star when zoomed out
  const scaledOffset = {
    x: (offset?.x || 0) * distanceScale,
    y: (offset?.y || 0) * distanceScale
  };
  
  const pos = calculatePosition(anchor, screenPos.x, screenPos.y, isCompact, scaledOffset);
  
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${pos.originX} ${pos.originY}`;
  
  // Animation opacity
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