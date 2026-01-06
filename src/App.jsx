console.log('APP VERSION 29 LOADED - MERGED STARS');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const COMPACT_SIZE = 56;
const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

// Offset for cards at same location
const BASE_OFFSET = 18;
const RING_OFFSET = 25;

/**
 * Group cards by location (lat/lng within threshold)
 */
function groupCardsByLocation(cards, threshold = 0.5) {
  const groups = [];
  const assigned = new Set();
  
  for (const card of cards) {
    if (assigned.has(card.id)) continue;
    const group = [card];
    assigned.add(card.id);
    
    for (const other of cards) {
      if (assigned.has(other.id)) continue;
      if (Math.abs(card.lat - other.lat) < threshold && Math.abs(card.lng - other.lng) < threshold) {
        group.push(other);
        assigned.add(other.id);
      }
    }
    groups.push(group);
  }
  return groups;
}

/**
 * Get anchor extending toward direction
 */
function getAnchorExtendingToward(awayX, awayY) {
  if (awayX >= 0 && awayY >= 0) return 'top-left';
  if (awayX < 0 && awayY >= 0) return 'top-right';
  if (awayX >= 0 && awayY < 0) return 'bottom-left';
  return 'bottom-right';
}

/**
 * Get card bounds at screen position
 */
function getCardBoundsAtScreen(screenX, screenY, anchor, offset = { x: 0, y: 0 }, isCompact = false) {
  const width = isCompact ? COMPACT_SIZE : CARD_WIDTH;
  const height = isCompact ? COMPACT_SIZE : CARD_HEIGHT;
  
  let left, top;
  switch (anchor) {
    case 'top-left': left = screenX; top = screenY; break;
    case 'top-right': left = screenX - width; top = screenY; break;
    case 'bottom-left': left = screenX; top = screenY - height; break;
    case 'bottom-right': left = screenX - width; top = screenY - height; break;
    default: left = screenX; top = screenY;
  }
  
  left += offset.x;
  top += offset.y;
  
  return { left, top, right: left + width, bottom: top + height, centerX: left + width/2, centerY: top + height/2 };
}

/**
 * Check if a box overlaps with a point (star position)
 */
function boxContainsPoint(box, px, py, padding = 20) {
  return px >= box.left - padding && 
         px <= box.right + padding && 
         py >= box.top - padding && 
         py <= box.bottom + padding;
}

/**
 * Check overlap between two boxes
 */
function getOverlapArea(box1, box2) {
  const xOverlap = Math.max(0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
  const yOverlap = Math.max(0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
  return xOverlap * yOverlap;
}

/**
 * Generate radial positions for cards at same star
 */
function generateRadialPositions(count) {
  const positions = [];
  
  if (count === 1) {
    return [{ angle: 0, distance: 0 }];
  }
  
  if (count === 2) {
    return [
      { angle: -Math.PI / 4, distance: BASE_OFFSET },
      { angle: 3 * Math.PI / 4, distance: BASE_OFFSET }
    ];
  }
  
  if (count === 3) {
    return [
      { angle: -Math.PI / 2, distance: BASE_OFFSET },
      { angle: Math.PI / 6, distance: BASE_OFFSET },
      { angle: 5 * Math.PI / 6, distance: BASE_OFFSET }
    ];
  }
  
  if (count === 4) {
    return [
      { angle: -Math.PI / 4, distance: BASE_OFFSET },
      { angle: -3 * Math.PI / 4, distance: BASE_OFFSET },
      { angle: Math.PI / 4, distance: BASE_OFFSET },
      { angle: 3 * Math.PI / 4, distance: BASE_OFFSET }
    ];
  }
  
  // 5+ cards: spiral
  const cardsPerRing = 6;
  for (let i = 0; i < count; i++) {
    const ring = Math.floor(i / cardsPerRing);
    const posInRing = i % cardsPerRing;
    const cardsInThisRing = Math.min(cardsPerRing, count - ring * cardsPerRing);
    const angleOffset = ring * (Math.PI / cardsPerRing);
    const angle = (2 * Math.PI * posInRing / cardsInThisRing) + angleOffset - Math.PI / 2;
    const distance = BASE_OFFSET + ring * RING_OFFSET;
    positions.push({ angle, distance });
  }
  
  return positions;
}

/**
 * Get best anchor for an angle (card extends away from star)
 */
function getAnchorForAngle(angle) {
  const normalized = ((angle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  if (normalized < Math.PI / 2) return 'top-left';
  if (normalized < Math.PI) return 'top-right';
  if (normalized < 3 * Math.PI / 2) return 'bottom-right';
  return 'bottom-left';
}

/**
 * Compute anchors and offsets, considering other star positions
 */
function computeCardAnchors(cards, markerVisibility) {
  if (!cards || cards.length === 0) return { anchors: {}, offsets: {} };
  
  const anchors = {};
  const offsets = {};
  
  // Get all star screen positions
  const starPositions = [];
  for (const card of cards) {
    const vis = markerVisibility?.[card.id];
    if (vis?.screenPos) {
      // Only add unique positions (merged stars share position)
      const exists = starPositions.some(p => 
        Math.abs(p.x - vis.screenPos.x) < 5 && Math.abs(p.y - vis.screenPos.y) < 5
      );
      if (!exists) {
        starPositions.push({ x: vis.screenPos.x, y: vis.screenPos.y, cardIds: [card.id] });
      } else {
        const existing = starPositions.find(p => 
          Math.abs(p.x - vis.screenPos.x) < 5 && Math.abs(p.y - vis.screenPos.y) < 5
        );
        if (existing) existing.cardIds.push(card.id);
      }
    }
  }
  
  // Group cards by location
  const locationGroups = groupCardsByLocation(cards, 0.5);
  
  for (const group of locationGroups) {
    const primaryCard = group[0];
    const primaryVis = markerVisibility?.[primaryCard.id];
    const starX = primaryVis?.screenPos?.x ?? 0;
    const starY = primaryVis?.screenPos?.y ?? 0;
    
    if (group.length === 1) {
      // Single card - find best anchor that doesn't cover other stars
      const card = group[0];
      let bestAnchor = 'top-left';
      let bestScore = Infinity;
      
      for (const anchor of CORNERS) {
        const bounds = getCardBoundsAtScreen(starX, starY, anchor, { x: 0, y: 0 });
        let score = 0;
        
        // Penalize covering other stars
        for (const starPos of starPositions) {
          if (starPos.cardIds.includes(card.id)) continue;
          if (boxContainsPoint(bounds, starPos.x, starPos.y)) {
            score += 1000;
          }
        }
        
        // Slight preference based on hemisphere
        const extendRight = card.lng < -30;
        const extendDown = card.lat > 20;
        const preferred = getAnchorExtendingToward(extendRight ? 1 : -1, extendDown ? 1 : -1);
        if (anchor !== preferred) score += 1;
        
        if (score < bestScore) {
          bestScore = score;
          bestAnchor = anchor;
        }
      }
      
      anchors[card.id] = bestAnchor;
      offsets[card.id] = { x: 0, y: 0 };
    } else {
      // Multiple cards at same star - radial layout
      const positions = generateRadialPositions(group.length);
      
      for (let i = 0; i < group.length; i++) {
        const card = group[i];
        const pos = positions[i];
        
        if (pos.distance === 0) {
          // Center card
          anchors[card.id] = getAnchorExtendingToward(card.lng < -30 ? 1 : -1, card.lat > 20 ? 1 : -1);
          offsets[card.id] = { x: 0, y: 0 };
        } else {
          // Find best anchor for this position that avoids other stars
          let bestAnchor = getAnchorForAngle(pos.angle);
          let bestScore = Infinity;
          
          const baseOffset = {
            x: Math.cos(pos.angle) * pos.distance,
            y: Math.sin(pos.angle) * pos.distance
          };
          
          for (const anchor of CORNERS) {
            const bounds = getCardBoundsAtScreen(starX, starY, anchor, baseOffset);
            let score = 0;
            
            // Penalize covering other stars
            for (const starPos of starPositions) {
              if (group.some(c => starPos.cardIds.includes(c.id))) continue;
              if (boxContainsPoint(bounds, starPos.x, starPos.y)) {
                score += 1000;
              }
            }
            
            // Prefer anchor matching angle direction
            if (anchor !== getAnchorForAngle(pos.angle)) score += 10;
            
            if (score < bestScore) {
              bestScore = score;
              bestAnchor = anchor;
            }
          }
          
          anchors[card.id] = bestAnchor;
          offsets[card.id] = baseOffset;
        }
      }
    }
  }
  
  // Fill in any missing
  for (const card of cards) {
    if (!anchors[card.id]) anchors[card.id] = 'top-left';
    if (!offsets[card.id]) offsets[card.id] = { x: 0, y: 0 };
  }
  
  return { anchors, offsets };
}


function App() {
  const [currentPage, setCurrentPage] = useState('globe');
  const { cards, loading, error, refetch } = useCards();
  const { groups, refetch: refetchGroups } = useGroups();
  const [selectedCards, setSelectedCards] = useState([]);
  const [focusedCard, setFocusedCard] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [markerVisibility, setMarkerVisibility] = useState({});
  
  const [visibleCardIds, setVisibleCardIds] = useState(null);
  
  // Compute anchors and offsets based on current visibility data
  const { anchors: cardAnchors, offsets: cardOffsets } = useMemo(
    () => computeCardAnchors(cards, markerVisibility), 
    [cards, markerVisibility]
  );
  
  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const isEmbedMode = urlParams.get('embed') === 'true';
  const embedGroupId = urlParams.get('group');
  
  const embedGroup = useMemo(() => {
    if (!embedGroupId || embedGroupId === 'all') return null;
    return groups.find(g => g.id === embedGroupId);
  }, [embedGroupId, groups]);
  
  const embedGroupName = useMemo(() => {
    if (!embedGroupId || embedGroupId === 'all') return 'All Members';
    return embedGroup?.name || 'All Members';
  }, [embedGroupId, embedGroup]);
  
  const [embedShowAll, setEmbedShowAll] = useState(false);
  const [notification, setNotification] = useState(null);
  const [embedInitialized, setEmbedInitialized] = useState(false);
  
  const autoRotateTimer = useRef(null);

  const resetAutoRotateTimer = useCallback(() => {
    setAutoRotate(false);
    if (autoRotateTimer.current) clearTimeout(autoRotateTimer.current);
    autoRotateTimer.current = setTimeout(() => setAutoRotate(true), 5000);
  }, []);

  useEffect(() => {
    return () => {
      if (autoRotateTimer.current) clearTimeout(autoRotateTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!isEmbedMode || embedInitialized || !cards || cards.length === 0) return;
    let cardsToShow = (embedGroupId && embedGroupId !== 'all' && embedGroup)
      ? cards.filter(c => embedGroup.memberIds?.includes(c.id))
      : cards;
    setVisibleCardIds(new Set(cardsToShow.map(c => c.id)));
    setEmbedInitialized(true);
  }, [isEmbedMode, embedInitialized, cards, embedGroupId, embedGroup]);

  useEffect(() => {
    const checkNotification = () => {
      let params = window.location.hash?.length > 1
        ? new URLSearchParams(window.location.hash.slice(1))
        : new URLSearchParams(window.location.search);
      const notifType = params.get('notification');
      const message = params.get('message');
      if (notifType && message) {
        setNotification({ type: notifType, message: decodeURIComponent(message) });
        window.history.replaceState({}, '', import.meta.env.BASE_URL || '/');
        setTimeout(() => setNotification(null), 4000);
      }
    };
    checkNotification();
    window.addEventListener('hashchange', checkNotification);
    return () => window.removeEventListener('hashchange', checkNotification);
  }, []);

  const handleToggleCardVisibility = useCallback((cardId) => {
    setVisibleCardIds(prev => {
      if (prev === null) {
        const allIds = new Set(cards.map(c => c.id));
        allIds.delete(cardId);
        return allIds;
      }
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
        setSelectedCards(sel => sel.filter(id => id !== cardId));
        if (focusedCard === cardId) setFocusedCard(null);
      } else {
        newSet.add(cardId);
      }
      return newSet.size === cards.length ? null : newSet;
    });
  }, [cards, focusedCard]);

  const handleMarkerClick = useCallback((clickedCards) => {
    // clickedCards is now an array of all cards at that star
    const cardsArray = Array.isArray(clickedCards) ? clickedCards : [clickedCards];
    
    resetAutoRotateTimer();
    
    // Check if ALL cards at this location are already selected
    const allSelected = cardsArray.every(c => selectedCards.includes(c.id));
    
    if (allSelected) {
      // Deselect all cards at this location
      setSelectedCards(prev => prev.filter(id => !cardsArray.some(c => c.id === id)));
      if (cardsArray.some(c => c.id === focusedCard)) {
        setFocusedCard(null);
      }
    } else {
      // Select all cards at this location
      setSelectedCards(prev => {
        const newSelected = [...prev];
        for (const card of cardsArray) {
          if (!newSelected.includes(card.id)) {
            newSelected.push(card.id);
          }
        }
        return newSelected;
      });
      // Focus on the first newly selected card
      const firstNew = cardsArray.find(c => !selectedCards.includes(c.id));
      if (firstNew) {
        setFocusedCard(firstNew.id);
      }
    }
  }, [resetAutoRotateTimer, focusedCard, selectedCards]);

  const handleClosePopup = useCallback((cardId) => {
    setSelectedCards(prev => prev.filter(id => id !== cardId));
  }, []);

  const handleFocusCard = useCallback((id) => {
    setFocusedCard(prev => prev === id ? null : id);
  }, []);

  const toggleCardPopup = useCallback((cardId) => {
    resetAutoRotateTimer();
    setSelectedCards(prev => {
      if (prev.includes(cardId)) {
        if (focusedCard === cardId) setFocusedCard(null);
        return prev.filter(id => id !== cardId);
      }
      setFocusedCard(cardId);
      return [...prev, cardId];
    });
  }, [focusedCard, resetAutoRotateTimer]);

  const openAllCards = useCallback(() => {
    resetAutoRotateTimer();
    const visibleIds = visibleCardIds === null ? cards.map(c => c.id) : Array.from(visibleCardIds);
    setSelectedCards(visibleIds);
  }, [cards, visibleCardIds, resetAutoRotateTimer]);

  const closeAllCards = useCallback(() => {
    setSelectedCards([]);
    setFocusedCard(null);
  }, []);

  const toggleEmbedCards = useCallback(() => {
    if (embedShowAll) {
      setSelectedCards([]);
      setFocusedCard(null);
    } else {
      setSelectedCards(cards.map(c => c.id));
    }
    setEmbedShowAll(!embedShowAll);
    resetAutoRotateTimer();
  }, [embedShowAll, cards, resetAutoRotateTimer]);

  const handleMarkerVisibilityChange = useCallback((data) => {
    setMarkerVisibility(data);
  }, []);

  const handleGlobeInteraction = useCallback(() => {
    resetAutoRotateTimer();
  }, [resetAutoRotateTimer]);

  const handleFocusLost = useCallback(() => {
    setFocusedCard(null);
  }, []);

  if (loading) return <LoadingScreen />;
  if (error) return <div className="error-screen">Error: {error}</div>;

  if (currentPage === 'admin') {
    return <AdminPage onBack={() => { setCurrentPage('globe'); refetch(); refetchGroups(); }} />;
  }

  const countryCount = cards ? new Set(cards.map(c => c.location?.split(',').pop()?.trim())).size : 0;
  const selectedCardObjects = cards ? cards.filter(c => selectedCards.includes(c.id)) : [];

  return (
    <>
      <div className={`globe-container ${isEmbedMode ? 'embed-mode' : ''}`}>
        <Globe
          cards={cards || []}
          selectedCards={selectedCards}
          autoRotate={autoRotate}
          onMarkerClick={handleMarkerClick}
          onMarkerVisibilityChange={handleMarkerVisibilityChange}
          onInteraction={handleGlobeInteraction}
          focusCardId={focusedCard}
          onFocusLost={handleFocusLost}
          visibleCardIds={visibleCardIds}
        />

        {!isEmbedMode && (
          <ControlsPanel
            cards={cards}
            groups={groups}
            selectedCards={selectedCards}
            visibleCardIds={visibleCardIds}
            autoRotate={autoRotate}
            onAutoRotateChange={setAutoRotate}
            onToggleCard={toggleCardPopup}
            onToggleCardVisibility={handleToggleCardVisibility}
            onOpenAll={openAllCards}
            onCloseAll={closeAllCards}
            onManageClick={() => setCurrentPage('admin')}
            isEmbedMode={isEmbedMode}
          />
        )}

        {selectedCardObjects.map((card, index) => (
          <PopupCard
            key={card.id}
            card={card}
            visibilityData={markerVisibility}
            anchor={cardAnchors[card.id] || 'top-left'}
            offset={cardOffsets[card.id] || { x: 0, y: 0 }}
            onClose={handleClosePopup}
            onFocus={handleFocusCard}
            isFocused={focusedCard === card.id}
            zIndex={1000 + index}
          />
        ))}

        <div className={`globe-logo-container ${isEmbedMode ? 'embed' : ''}`}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="globe-logo" />
        </div>

        <div className="globe-footer">
          {isEmbedMode ? embedGroupName : 'AnKing Step Deck Maintainers · 2025'}
        </div>

        <div className="globe-stats">
          <div className="stat-item">
            <div className="stat-value">{isEmbedMode ? (visibleCardIds?.size ?? (cards?.length || 0)) : (cards?.length || 0)}</div>
            <div className="stat-label">Active Members</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{countryCount}</div>
            <div className="stat-label">Countries</div>
          </div>
        </div>

        <div className="instructions">
          <kbd>Drag</kbd> to rotate · <kbd>Scroll</kbd> to zoom<br />
          Click markers to toggle cards
        </div>
        
        {isEmbedMode && (
          <button className="embed-toggle-btn" onClick={toggleEmbedCards}>
            {embedShowAll ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
                Hide All
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Show All
              </>
            )}
          </button>
        )}
      </div>
      
      {notification && (
        <div className={`toast-notification ${notification.type}`}>
          {notification.type === 'success' ? '✓' : 'ℹ'} {notification.message}
        </div>
      )}
    </>
  );
}

export default App;