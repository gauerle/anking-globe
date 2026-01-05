import React, { useState } from 'react';
import { getImageUrl } from '../utils/api';

// Card dimensions (must match App.jsx)
const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;

/**
 * Anchor corner definitions:
 * - 'top-left': card's top-left corner is at star, card extends RIGHT and DOWN
 * - 'top-right': card's top-right corner is at star, card extends LEFT and DOWN
 * - 'bottom-left': card's bottom-left corner is at star, card extends RIGHT and UP
 * - 'bottom-right': card's bottom-right corner is at star, card extends LEFT and UP
 */
const ANCHOR_CONFIG = {
  'top-left': {
    getPosition: (starX, starY) => ({ x: starX, y: starY }),
    transformOrigin: 'left top'
  },
  'top-right': {
    getPosition: (starX, starY) => ({ x: starX - CARD_WIDTH, y: starY }),
    transformOrigin: 'right top'
  },
  'bottom-left': {
    getPosition: (starX, starY) => ({ x: starX, y: starY - CARD_HEIGHT }),
    transformOrigin: 'left bottom'
  },
  'bottom-right': {
    getPosition: (starX, starY) => ({ x: starX - CARD_WIDTH, y: starY - CARD_HEIGHT }),
    transformOrigin: 'right bottom'
  }
};

function PopupCard({ card, visibilityData, anchor, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  // Get anchor configuration (fallback to top-left)
  const anchorConfig = ANCHOR_CONFIG[anchor] || ANCHOR_CONFIG['top-left'];
  
  // Scale calculations with limits
  const baseScale = 0.85;
  const minScale = 0.55;
  const maxScale = 1.0;
  const focusBoost = isFocused ? 1.35 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.08 : 1;
  
  const clampedRawScale = Math.max(0.5, Math.min(0.85, scale));
  let finalScale = clampedRawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  // Calculate position based on anchor
  const { x, y } = anchorConfig.getPosition(screenPos.x, screenPos.y);
  
  // Z-index: hovered > focused > base
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{
        left: x,
        top: y,
        transform: `scale(${finalScale})`,
        transformOrigin: anchorConfig.transformOrigin,
        opacity: opacity,
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
}

export default PopupCard;