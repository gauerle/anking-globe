import React, { useState, memo } from 'react';
import { getImageUrl } from '../utils/api';

// Full card dimensions
const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;

// Compact mode (image only) dimensions
const COMPACT_SIZE = 40;

// Scale threshold for compact mode
const COMPACT_THRESHOLD = 0.55;

/**
 * Anchor corner definitions:
 * The star position is at the specified corner of the card.
 * 
 * - 'top-left': star at card's top-left corner
 * - 'top-right': star at card's top-right corner
 * - 'bottom-left': star at card's bottom-left corner
 * - 'bottom-right': star at card's bottom-right corner
 */
function getCardStyle(anchor, starX, starY, isCompact) {
  const width = isCompact ? COMPACT_SIZE : CARD_WIDTH;
  const height = isCompact ? COMPACT_SIZE : CARD_HEIGHT;
  
  switch (anchor) {
    case 'top-left':
      // Star is at top-left corner of card
      // Card extends right and down from star
      return {
        left: starX,
        top: starY,
        transformOrigin: 'left top'
      };
    
    case 'top-right':
      // Star is at top-right corner of card
      // Card extends left and down from star
      return {
        left: starX - width,
        top: starY,
        transformOrigin: 'right top'
      };
    
    case 'bottom-left':
      // Star is at bottom-left corner of card
      // Card extends right and up from star
      return {
        left: starX,
        top: starY - height,
        transformOrigin: 'left bottom'
      };
    
    case 'bottom-right':
      // Star is at bottom-right corner of card
      // Card extends left and up from star
      return {
        left: starX - width,
        top: starY - height,
        transformOrigin: 'right bottom'
      };
    
    default:
      // Fallback to top-left
      return {
        left: starX,
        top: starY,
        transformOrigin: 'left top'
      };
  }
}

const PopupCard = memo(function PopupCard({ card, visibilityData, anchor, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  // Determine if we should show compact mode (image only)
  const rawScale = Math.max(0.5, Math.min(0.85, scale));
  const isCompact = rawScale < COMPACT_THRESHOLD && !isFocused && !isHovered;
  
  // Scale calculations
  const baseScale = isCompact ? 0.9 : 0.65;
  const minScale = isCompact ? 0.6 : 0.45;
  const maxScale = isCompact ? 1.0 : 0.8;
  const focusBoost = isFocused ? 1.25 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.1 : 1;
  
  let finalScale = rawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  // Get position and transform origin based on anchor
  const cardStyle = getCardStyle(anchor, screenPos.x, screenPos.y, isCompact);
  
  // Z-index: hovered > focused > base
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  // Compact mode - just show circular image
  if (isCompact) {
    return (
      <div 
        className="popup-card compact"
        style={{
          left: cardStyle.left,
          top: cardStyle.top,
          width: COMPACT_SIZE,
          height: COMPACT_SIZE,
          transform: `scale(${finalScale})`,
          transformOrigin: cardStyle.transformOrigin,
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
        <img 
          src={getImageUrl(card.image)} 
          alt={card.name}
          className="compact-image"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff`;
          }}
        />
      </div>
    );
  }

  // Full card mode
  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{
        left: cardStyle.left,
        top: cardStyle.top,
        transform: `scale(${finalScale})`,
        transformOrigin: cardStyle.transformOrigin,
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
});

export default PopupCard;