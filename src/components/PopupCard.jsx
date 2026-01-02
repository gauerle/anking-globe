import React, { useState } from 'react';
import { getImageUrl } from '../utils/api';

function PopupCard({ card, visibilityData, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  const baseScale = 0.75;
  const focusBoost = isFocused ? 1.3 : 1;
  const hoverBoost = isHovered ? 1.5 : 1;
  const finalScale = scale * baseScale * focusBoost * hoverBoost;
  
  const cardWidth = 280;
  let x = screenPos.x + 15;
  let y = screenPos.y - 40;
  
  if (x + cardWidth * finalScale > window.innerWidth - 10) {
    x = screenPos.x - cardWidth * finalScale - 15;
  }
  x = Math.max(10, x);
  y = Math.max(10, Math.min(window.innerHeight - 100 * finalScale, y));
  
  // Calculate transform origin relative to star position
  const originX = screenPos.x - x;
  const originY = screenPos.y - y;

  const computedZIndex = isFocused ? 2000 : zIndex;

  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''}`}
      style={{
        left: x,
        top: y,
        transform: `scale(${finalScale})`,
        transformOrigin: `${originX}px ${originY}px`,
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
        <div className="card-horizontal">
          <div className="card-avatar-side">
            <img 
              src={getImageUrl(card.image)} 
              alt={card.name}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff`;
              }}
            />
          </div>
          <div className="card-text-side">
            <div className="card-name">{card.name}</div>
            <div className="card-info-compact">
              {card.title}{card.title && card.university && ' · '}{card.university}
            </div>
            <div className="card-location-compact">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {card.location}
            </div>
          </div>
          <button 
            className="popup-close" 
            onClick={(e) => {
              e.stopPropagation();
              onClose(card.id);
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;