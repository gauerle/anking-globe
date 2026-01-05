import React, { useState } from 'react';
import { getImageUrl } from '../utils/api';

// Generate a deterministic offset from card ID (for slight vertical variation)
function getCardOffset(cardId) {
  let hash = 0;
  for (let i = 0; i < cardId.length; i++) {
    hash = ((hash << 5) - hash) + cardId.charCodeAt(i);
    hash |= 0;
  }
  // Return a value between -15 and +15 pixels
  return (Math.abs(hash) % 31) - 15;
}

function PopupCard({ card, visibilityData, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  // Card dimensions (unscaled)
  const cardWidth = 220;
  const cardHeight = 58;
  const margin = 10;
  
  // Scale calculations with limits
  const baseScale = 0.85;
  const minScale = 0.55;
  const maxScale = 1.0;
  const focusBoost = isFocused ? 1.35 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.08 : 1;
  
  const clampedRawScale = Math.max(0.5, Math.min(0.85, scale));
  let finalScale = clampedRawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  const scaledHeight = cardHeight * finalScale;
  
  // STABLE placement decision - based ONLY on star screen position
  // Does NOT depend on scale, focus, or hover state
  const screenCenterX = window.innerWidth / 2;
  const placementSide = screenPos.x > screenCenterX ? 'left' : 'right';
  
  // Calculate position - anchor at star
  let x;
  let transformOrigin;
  
  if (placementSide === 'right') {
    // Card to the RIGHT of star - left edge at star position
    x = screenPos.x;
    transformOrigin = 'left center';
  } else {
    // Card to the LEFT of star - right edge at star position  
    x = screenPos.x - cardWidth;
    transformOrigin = 'right center';
  }
  
  // Base Y: center card vertically on star, plus deterministic offset
  const verticalOffset = getCardOffset(card.id);
  const baseY = screenPos.y - (cardHeight / 2) + verticalOffset;
  
  // Clamp to screen bounds
  const clampedY = Math.max(margin, Math.min(window.innerHeight - scaledHeight - margin, baseY));
  
  // Z-index: hovered > focused > base
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{
        left: x,
        top: clampedY,
        transform: `scale(${finalScale})`,
        transformOrigin: transformOrigin,
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