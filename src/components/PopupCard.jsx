import React from 'react';
import { getImageUrl } from '../utils/api';

function PopupCard({ card, visibilityData, onClose, onFocus, isFocused, zIndex }) {
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  const baseScale = 0.75;
  const focusBoost = isFocused ? 1.2 : 1;
  const finalScale = scale * baseScale * focusBoost;
  
  const cardWidth = 220;
  let x = screenPos.x + 15;
  let y = screenPos.y - 30;
  
  if (x + cardWidth * finalScale > window.innerWidth - 10) {
    x = screenPos.x - cardWidth * finalScale - 15;
  }
  x = Math.max(10, x);
  y = Math.max(10, Math.min(window.innerHeight - 80 * finalScale, y));

  const computedZIndex = isFocused ? 2000 : zIndex;

  return (
    <div 
      className={`popup-card ${isFocused ? 'focused' : ''}`}
      style={{
        left: x,
        top: y,
        transform: `scale(${finalScale})`,
        transformOrigin: 'left top',
        opacity: opacity,
        zIndex: computedZIndex,
        pointerEvents: opacity > 0.3 ? 'auto' : 'none',
      }}
      onClick={(e) => {
        e.stopPropagation();
        onFocus(card.id);
      }}
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