import React, { useState, useEffect, useRef, memo } from 'react';
import { getImageUrl } from '../utils/api';

const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const COMPACT_SIZE = 56;

const MIN_DISTANCE = 150;
const MAX_DISTANCE = 600;
const COMPACT_DISTANCE = 350;
const STAGGER_DELAY = 80;

const PopupCard = memo(function PopupCard({ 
  card, 
  visibilityData, 
  position,
  anchor,
  onClose, 
  onFocus, 
  isFocused, 
  zIndex,
  staggerIndex = 0,
  totalInGroup = 1,
  worldScale = 1,
  collisionScale = 1
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationState, setAnimationState] = useState('waiting');
  const [isClosing, setIsClosing] = useState(false);
  
  // Smooth position tracking
  const [smoothPosition, setSmoothPosition] = useState(null);
  const animationFrameRef = useRef(null);
  const staggerTimeoutRef = useRef(null);
  
  const data = visibilityData?.[card.id];
  
  // Smooth position updates
  useEffect(() => {
    if (!position || !data?.visible) return;
    
    const targetX = position.x;
    const targetY = position.y;
    
    if (!smoothPosition) {
      // Initial position (from star center for animation)
      setSmoothPosition({ x: position.starX, y: position.starY });
    }
    
    const animate = () => {
      setSmoothPosition(prev => {
        if (!prev) return { x: targetX, y: targetY };
        
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        
        // Lerp factor - higher = faster
        const lerp = 0.15;
        
        // If close enough, snap to target
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
          return { x: targetX, y: targetY };
        }
        
        return {
          x: prev.x + dx * lerp,
          y: prev.y + dy * lerp
        };
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [position, data?.visible]);
  
  // Staggered enter animation
  useEffect(() => {
    if (data?.visible && animationState === 'waiting') {
      const delay = staggerIndex * STAGGER_DELAY;
      
      staggerTimeoutRef.current = setTimeout(() => {
        setAnimationState('entering');
        
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimationState('visible');
          });
        });
      }, delay);
    }
    
    return () => {
      if (staggerTimeoutRef.current) {
        clearTimeout(staggerTimeoutRef.current);
      }
    };
  }, [data?.visible, staggerIndex, animationState]);
  
  const handleClose = (e) => {
    e.stopPropagation();
    
    const reverseIndex = totalInGroup - 1 - staggerIndex;
    const delay = reverseIndex * STAGGER_DELAY;
    
    setTimeout(() => {
      setIsClosing(true);
      setAnimationState('exiting');
      
      setTimeout(() => {
        onClose(card.id);
      }, 200);
    }, delay);
  };
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { opacity, distance } = data;
  
  // Use smooth position or fall back to direct position
  const displayX = smoothPosition?.x ?? position?.x ?? data.screenPos?.x ?? 0;
  const displayY = smoothPosition?.y ?? position?.y ?? data.screenPos?.y ?? 0;
  
  const clampedDistance = Math.max(MIN_DISTANCE, Math.min(MAX_DISTANCE, distance || 300));
  const isCompact = clampedDistance > COMPACT_DISTANCE && !isFocused;
  
  const width = isCompact ? COMPACT_SIZE : CARD_WIDTH;
  const height = isCompact ? COMPACT_SIZE : CARD_HEIGHT;
  
  // Calculate position based on anchor
  let left = displayX;
  let top = displayY;
  let originX = 'left';
  let originY = 'top';
  
  switch (anchor) {
    case 'top-right':
      left = displayX - width;
      originX = 'right';
      break;
    case 'bottom-left':
      top = displayY - height;
      originY = 'bottom';
      break;
    case 'bottom-right':
      left = displayX - width;
      top = displayY - height;
      originX = 'right';
      originY = 'bottom';
      break;
    default: // top-left
      break;
  }
  
  // Scale calculations
  const baseScale = isCompact ? 0.8 : 1.0;
  const focusBoost = isFocused ? 1.15 : 1;
  const hoverBoost = isHovered ? 1.2 : 1; // More prominent hover effect
  
  // Animation scale
  let animScale = 1;
  if (animationState === 'waiting' || animationState === 'entering') {
    animScale = 0.3;
  } else if (animationState === 'exiting' || isClosing) {
    animScale = 0.3;
  }
  
  // Final scale includes collision scale (from App.jsx)
  let finalScale = baseScale * worldScale * collisionScale * focusBoost * hoverBoost * animScale;
  finalScale = Math.max(0.2, Math.min(1.4, finalScale));
  
  // Opacity
  let animOpacity = opacity;
  if (animationState === 'waiting' || animationState === 'entering') {
    animOpacity = 0;
  } else if (animationState === 'exiting' || isClosing) {
    animOpacity = 0;
  }
  
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${originX} ${originY}`;
  const infoText = [card.title, card.university].filter(Boolean).join(' · ');

  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''} ${isHovered ? 'hovered' : ''} ${isCompact ? 'compact' : ''}`}
      style={{
        left,
        top,
        width,
        height,
        transform: `scale(${finalScale})`,
        transformOrigin,
        opacity: animOpacity,
        zIndex: computedZIndex,
        pointerEvents: opacity > 0.3 && animationState === 'visible' ? 'auto' : 'none',
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease-out',
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