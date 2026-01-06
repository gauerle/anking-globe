import React, { useState, memo } from 'react';
import { getImageUrl } from '../utils/api';

// Wider cards to show full text
const CARD_WIDTH = 320;
const CARD_HEIGHT = 58;

// Compact mode - just the square image
const COMPACT_SIZE = 56;

// Scale threshold for compact mode
const COMPACT_THRESHOLD = 0.70;

/**
 * Calculate card position based on anchor.
 */
function calculatePosition(anchor, starX, starY, isCompact) {
  const width = isCompact ? COMPACT_SIZE : CARD_WIDTH;
  const height = isCompact ? COMPACT_SIZE : CARD_HEIGHT;
  
  switch (anchor) {
    case 'top-left':
      return { left: starX, top: starY, originX: 'left', originY: 'top' };
    case 'top-right':
      return { left: starX - width, top: starY, originX: 'right', originY: 'top' };
    case 'bottom-left':
      return { left: starX, top: starY - height, originX: 'left', originY: 'bottom' };
    case 'bottom-right':
      return { left: starX - width, top: starY - height, originX: 'right', originY: 'bottom' };
    default:
      return { left: starX, top: starY, originX: 'left', originY: 'top' };
  }
}

const PopupCard = memo(function PopupCard({ card, visibilityData, anchor, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  // Clamp raw scale
  const rawScale = Math.max(0.5, Math.min(0.85, scale));
  
  // Determine if compact mode
  const isCompact = rawScale < COMPACT_THRESHOLD && !isFocused && !isHovered;
  
  // Scale calculations
  const baseScale = isCompact ? 0.85 : 0.70;  // Slightly smaller base for wider cards
  const minScale = isCompact ? 0.55 : 0.45;
  const maxScale = isCompact ? 1.0 : 0.85;
  const focusBoost = isFocused ? 1.2 : 1;
  const hoverBoost = isHovered ? 1.15 : 1;
  
  let finalScale = rawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  // Calculate position
  const pos = calculatePosition(anchor, screenPos.x, screenPos.y, isCompact);
  
  // Z-index hierarchy
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${pos.originX} ${pos.originY}`;

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
        opacity,
        zIndex: computedZIndex,
        pointerEvents: opacity > 0.3 ? 'auto' : 'none',
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
          <p className="card-info">
            {card.title}{card.title && card.university && ' · '}{card.university}
          </p>
          <span className="card-location">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{card.location}</span>
          </span>
        </div>
        
        <button 
          className="card-close-btn" 
          onClick={(e) => {
            e.stopPropagation();
            onClose(card.id);
          }}
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