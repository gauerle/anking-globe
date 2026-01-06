import React, { useState, memo } from 'react';
import { getImageUrl } from '../utils/api';

// Full card dimensions
const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;

// Compact mode dimensions
const COMPACT_SIZE = 36;

// Scale threshold for compact mode (when rawScale is below this, show compact)
const COMPACT_THRESHOLD = 0.55;

/**
 * Calculate card position so that the star is at the specified corner.
 * 
 * Visual representation:
 * 
 * 'top-left' anchor:           'top-right' anchor:
 *    ★━━━━━━━━━━━━━━━┓            ┏━━━━━━━━━━━━━━━★
 *    ┃    CARD       ┃            ┃    CARD       ┃
 *    ┗━━━━━━━━━━━━━━━┛            ┗━━━━━━━━━━━━━━━┛
 * 
 * 'bottom-left' anchor:        'bottom-right' anchor:
 *    ┏━━━━━━━━━━━━━━━┓            ┏━━━━━━━━━━━━━━━┓
 *    ┃    CARD       ┃            ┃    CARD       ┃
 *    ★━━━━━━━━━━━━━━━┛            ┗━━━━━━━━━━━━━━━★
 */
function calculatePosition(anchor, starX, starY, width, height) {
  switch (anchor) {
    case 'top-left':
      // Star is at top-left corner
      // Card extends to the RIGHT and DOWN
      return {
        left: starX,
        top: starY,
        originX: 'left',
        originY: 'top'
      };
    
    case 'top-right':
      // Star is at top-right corner
      // Card extends to the LEFT and DOWN
      return {
        left: starX - width,
        top: starY,
        originX: 'right',
        originY: 'top'
      };
    
    case 'bottom-left':
      // Star is at bottom-left corner
      // Card extends to the RIGHT and UP
      return {
        left: starX,
        top: starY - height,
        originX: 'left',
        originY: 'bottom'
      };
    
    case 'bottom-right':
      // Star is at bottom-right corner
      // Card extends to the LEFT and UP
      return {
        left: starX - width,
        top: starY - height,
        originX: 'right',
        originY: 'bottom'
      };
    
    default:
      // Fallback to top-left
      console.warn('Invalid anchor:', anchor, '- using top-left');
      return {
        left: starX,
        top: starY,
        originX: 'left',
        originY: 'top'
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
  
  // Clamp raw scale
  const rawScale = Math.max(0.5, Math.min(0.85, scale));
  
  // Determine if compact mode (image only when zoomed out)
  const isCompact = rawScale < COMPACT_THRESHOLD && !isFocused && !isHovered;
  
  // Current dimensions based on mode
  const currentWidth = isCompact ? COMPACT_SIZE : CARD_WIDTH;
  const currentHeight = isCompact ? COMPACT_SIZE : CARD_HEIGHT;
  
  // Scale calculations
  const baseScale = isCompact ? 0.9 : 0.65;
  const minScale = isCompact ? 0.6 : 0.45;
  const maxScale = isCompact ? 1.0 : 0.8;
  const focusBoost = isFocused ? 1.25 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.1 : 1;
  
  let finalScale = rawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  // Calculate position with star at the anchor corner
  const pos = calculatePosition(anchor, screenPos.x, screenPos.y, currentWidth, currentHeight);
  
  // Z-index hierarchy
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${pos.originX} ${pos.originY}`;

  // Compact mode - circular image only
  if (isCompact) {
    return (
      <div 
        className="popup-card compact"
        style={{
          left: pos.left,
          top: pos.top,
          width: COMPACT_SIZE,
          height: COMPACT_SIZE,
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
        left: pos.left,
        top: pos.top,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
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