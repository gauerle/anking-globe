import React, { useState, useEffect, useRef } from 'react';
import { getImageUrl } from '../utils/api';

// Registry to track all visible card positions for overlap detection
const cardPositions = new Map();

function PopupCard({ card, visibilityData, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const data = visibilityData?.[card.id];
  
  // Cleanup position from registry when unmounting or hidden
  useEffect(() => {
    return () => {
      cardPositions.delete(card.id);
    };
  }, [card.id]);
  
  if (!data || !data.visible || data.opacity < 0.05) {
    cardPositions.delete(card.id);
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  // Scale settings with limits
  const baseScale = 0.75;
  const minScale = 0.5;
  const maxScale = 1.1;  // Maximum scale to prevent cards from getting too large
  const focusBoost = isFocused ? 1.4 : 1;  // Increased from 1.2
  const hoverBoost = isHovered && !isFocused ? 1.1 : 1;
  
  // Calculate final scale with min/max limits
  let finalScale = scale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  const cardWidth = 220;
  const cardHeight = 58;
  
  // Calculate base position
  let x = screenPos.x + 15;
  let y = screenPos.y - 30;
  
  // Boundary checks
  if (x + cardWidth * finalScale > window.innerWidth - 10) {
    x = screenPos.x - cardWidth * finalScale - 15;
  }
  x = Math.max(10, x);
  y = Math.max(10, Math.min(window.innerHeight - 80 * finalScale, y));
  
  // Smart positioning to avoid overlap with other cards
  const adjustPosition = (baseX, baseY) => {
    const padding = 8;
    const scaledWidth = cardWidth * finalScale;
    const scaledHeight = cardHeight * finalScale;
    
    let newX = baseX;
    let newY = baseY;
    
    // Positions to try: original, below, above, right, left, and diagonals
    const offsets = [
      { dx: 0, dy: 0 },                          // Original
      { dx: 0, dy: scaledHeight + padding },     // Below
      { dx: 0, dy: -(scaledHeight + padding) },  // Above
      { dx: scaledWidth + padding, dy: 0 },      // Right
      { dx: -(scaledWidth + padding), dy: 0 },   // Left
      { dx: scaledWidth/2, dy: scaledHeight + padding },   // Below-right
      { dx: -scaledWidth/2, dy: scaledHeight + padding },  // Below-left
      { dx: 0, dy: -(scaledHeight + padding) * 1.5 },      // Further above
    ];
    
    const hasOverlap = (testX, testY) => {
      for (const [otherId, otherPos] of cardPositions.entries()) {
        if (otherId === card.id) continue;
        
        const overlapX = testX < otherPos.x + otherPos.width + padding && 
                         testX + scaledWidth + padding > otherPos.x;
        const overlapY = testY < otherPos.y + otherPos.height + padding && 
                         testY + scaledHeight + padding > otherPos.y;
        
        if (overlapX && overlapY) return true;
      }
      return false;
    };
    
    // Try each offset position
    for (const offset of offsets) {
      const testX = baseX + offset.dx;
      const testY = baseY + offset.dy;
      
      // Check boundaries
      if (testX < 10 || testX + scaledWidth > window.innerWidth - 10) continue;
      if (testY < 10 || testY + scaledHeight > window.innerHeight - 10) continue;
      
      if (!hasOverlap(testX, testY)) {
        newX = testX;
        newY = testY;
        break;
      }
    }
    
    return { x: newX, y: newY };
  };
  
  // Get adjusted position
  const finalPos = adjustPosition(x, y);
  
  // Update registry with current position
  cardPositions.set(card.id, {
    x: finalPos.x,
    y: finalPos.y,
    width: cardWidth * finalScale,
    height: cardHeight * finalScale
  });

  // Z-index: hovered > focused > base
  let computedZIndex = zIndex;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  return (
    <div 
      ref={cardRef}
      className={`popup-card ${isFocused ? 'focused' : ''} ${isHovered ? 'hovered' : ''}`}
      style={{
        left: finalPos.x,
        top: finalPos.y,
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