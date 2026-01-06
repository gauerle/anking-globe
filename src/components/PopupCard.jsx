import React, { useState, useRef, useEffect, memo } from 'react';
import { getImageUrl } from '../utils/api';

const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const COMPACT_SIZE = 56;

// Much higher threshold - cards become photos very quickly when zooming out
const COMPACT_THRESHOLD = 0.92;

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

/**
 * Marquee text component - scrolls if text overflows
 * isActive: true when card is selected/open (marquee starts automatically)
 * isHovered: true when mouse is over card (also triggers marquee)
 */
function MarqueeText({ text, className, isActive }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [needsMarquee, setNeedsMarquee] = useState(false);
  
  useEffect(() => {
    if (containerRef.current && textRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const textWidth = textRef.current.scrollWidth;
      setNeedsMarquee(textWidth > containerWidth);
    }
  }, [text]);
  
  // Marquee scrolls when card is active (selected) and text overflows
  const shouldScroll = needsMarquee && isActive;
  
  return (
    <div ref={containerRef} className={`marquee-container ${className || ''}`}>
      <span 
        ref={textRef} 
        className={`marquee-text ${shouldScroll ? 'scrolling' : ''}`}
      >
        {text}
        {shouldScroll && <span className="marquee-spacer">&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</span>}
        {shouldScroll && text}
      </span>
    </div>
  );
}

const PopupCard = memo(function PopupCard({ card, visibilityData, anchor, onClose, onFocus, isFocused, zIndex }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const data = visibilityData?.[card.id];
  
  if (!data || !data.visible || data.opacity < 0.05) {
    return null;
  }

  const { screenPos, scale, opacity } = data;
  
  const rawScale = Math.max(0.5, Math.min(0.85, scale));
  
  // FIXED: Compact mode only depends on scale and focus, NOT hover
  // This prevents flickering when hovering over compact cards
  const isCompact = rawScale < COMPACT_THRESHOLD && !isFocused;
  
  const baseScale = isCompact ? 0.85 : 0.75;
  const minScale = isCompact ? 0.55 : 0.5;
  const maxScale = isCompact ? 1.0 : 0.95;
  const focusBoost = isFocused ? 1.3 : 1;
  const hoverBoost = isHovered && !isFocused ? 1.15 : 1;
  
  let finalScale = rawScale * baseScale * focusBoost * hoverBoost;
  finalScale = Math.max(minScale, Math.min(maxScale, finalScale));
  
  const pos = calculatePosition(anchor, screenPos.x, screenPos.y, isCompact);
  
  let computedZIndex = zIndex || 1000;
  if (isFocused) computedZIndex = 2000;
  if (isHovered) computedZIndex = 2500;

  const transformOrigin = `${pos.originX} ${pos.originY}`;
  
  // Build info text
  const infoText = [card.title, card.university].filter(Boolean).join(' · ');
  
  // Marquee is active when card is selected (always true here since component renders)
  // or when hovered
  const marqueeActive = true; // Card is always "active" when rendered (it's selected)

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
          <MarqueeText text={infoText} className="card-info" isActive={marqueeActive} />
          <div className="card-location">
            <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <MarqueeText text={card.location} className="card-location-text" isActive={marqueeActive} />
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