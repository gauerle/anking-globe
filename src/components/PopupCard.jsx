import React, { useState, memo } from 'react';
import { getImageUrl } from '../utils/api';

const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const COMPACT_SIZE = 56;

// DISTANCE-BASED THRESHOLD (linear, more intuitive!)
// Cards become compact when camera is farther than this distance
// 
// Guide:
//   180 = cards stay full almost always (very close zoom required)
//   220 = cards compact at medium zoom  
//   280 = cards compact fairly quickly
//   320 = cards compact very quickly
//   400 = cards are almost always compact
//
const COMPACT_DISTANCE = 280;

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
  
  const rawScale = Math.max(0.5, Math.min(1.5, scale));
  
  // Convert scale back to approximate distance
  // (scale = 220 / distance, so distance = 220 / scale)
  const approxDistance = 180 / rawScale;
  
  // Compact when distance exceeds threshold (and not focused)
  const isCompact = approxDistance > COMPACT_DISTANCE && !isFocused;
  
  // Debug: uncomment to see current distance
  console.log(`${card.name}: dist=${approxDistance.toFixed(0)}, compact=${isCompact}`);
  
  const baseScale = isCompact ? 0.85 : 0.75;
  const minScale = isCompact ? 0.55 : 0.5;
  const maxScale = isCompact ? 1.0 : 1.1;
  const focusBoost = isFocused ? 1.5 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.15 : 1;
  
  let finalScale = rawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  const pos = calculatePosition(anchor, screenPos.x, screenPos.y, isCompact);
  
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${pos.originX} ${pos.originY}`;
  
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