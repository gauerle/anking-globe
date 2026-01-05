import React, { useState } from 'react';
import { getImageUrl } from '../utils/api';

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
  const maxScale = 0.90;
  const focusBoost = isFocused ? 1.35 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.08 : 1;
  
  const clampedRawScale = Math.max(0.5, Math.min(0.85, scale));
  let finalScale = clampedRawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  // Calculate available space on each side of the star
  const spaceOnRight = window.innerWidth - screenPos.x - margin;
  const spaceOnLeft = screenPos.x - margin;
  
  // Expected scaled dimensions for boundary checking
  const scaledWidth = cardWidth * finalScale;
  const scaledHeight = cardHeight * finalScale;
  
  // Decide placement side based on available space
  let placementSide;
  
  if (spaceOnRight >= scaledWidth && spaceOnLeft < scaledWidth) {
    // Only fits on right
    placementSide = 'right';
  } else if (spaceOnLeft >= scaledWidth && spaceOnRight < scaledWidth) {
    // Only fits on left
    placementSide = 'left';
  } else if (spaceOnRight >= scaledWidth && spaceOnLeft >= scaledWidth) {
    // Both sides fit - choose based on star's screen position
    // Star on right half → card goes left, star on left half → card goes right
    placementSide = screenPos.x > window.innerWidth / 2 ? 'left' : 'right';
  } else {
    // Neither fits perfectly - use side with more space
    placementSide = spaceOnRight > spaceOnLeft ? 'right' : 'left';
  }
  
  // Position calculation
  // The anchor point (star intersection) stays fixed during scaling
  let x, transformOrigin;
  
  if (placementSide === 'right') {
    // Card appears to the RIGHT of star
    // Left edge of card is anchored at star position
    x = screenPos.x;
    transformOrigin = 'left center';
  } else {
    // Card appears to the LEFT of star
    // Right edge of card is anchored at star position
    // Set left so that: left + cardWidth = screenPos.x
    x = screenPos.x - cardWidth;
    transformOrigin = 'right center';
  }
  
  // Vertical position: center card vertically on star
  // Anchor at vertical center so scaling is symmetric
  const y = screenPos.y - (cardHeight / 2);
  
  // Apply boundary constraints (after determining placement)
  // For vertical, clamp to screen bounds
  const clampedY = Math.max(margin, Math.min(window.innerHeight - scaledHeight - margin, y));
  
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