console.log('APP VERSION 30 LOADED - RING COLLISION SYSTEM');

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

// Ring configuration
const RING_RADIUS = 25; // Base ring radius in pixels
const RING_POINTS = 8;  // Number of attachment points on ring
const MIN_SCALE = 0.5;  // Minimum card scale when avoiding collisions
const SCALE_STEP = 0.1; // How much to reduce scale per collision iteration

/**
 * Group cards by geographic proximity
 */
function groupCardsByLocation(cards, threshold = 3.0) {
  const groups = [];
  const assigned = new Set();
  
  const sortedCards = [...cards].sort((a, b) => {
    if (Math.abs(a.lat - b.lat) < 0.1) return a.lng - b.lng;
    return a.lat - b.lat;
  });
  
  for (const card of sortedCards) {
    if (assigned.has(card.id)) continue;
    
    const group = [card];
    assigned.add(card.id);
    
    for (const other of sortedCards) {
      if (assigned.has(other.id)) continue;
      
      const latDiff = Math.abs(card.lat - other.lat);
      const lngDiff = Math.abs(card.lng - other.lng);
      const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
      
      if (distance < threshold) {
        group.push(other);
        assigned.add(other.id);
      }
    }
    groups.push(group);
  }
  return groups;
}

/**
 * Get card bounds at a ring position
 */
function getCardBounds(starX, starY, ringAngle, ringRadius, cardScale, isCompact = false) {
  const width = (isCompact ? COMPACT_SIZE : CARD_WIDTH) * cardScale;
  const height = (isCompact ? COMPACT_SIZE : CARD_HEIGHT) * cardScale;
  
  // Position on ring
  const attachX = starX + Math.cos(ringAngle) * ringRadius;
  const attachY = starY + Math.sin(ringAngle) * ringRadius;
  
  // Determine anchor based on ring position (card extends away from star)
  let left, top;
  const normalizedAngle = ((ringAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  
  if (normalizedAngle < Math.PI / 2) {
    // Top-right quadrant: card extends right and down
    left = attachX;
    top = attachY;
  } else if (normalizedAngle < Math.PI) {
    // Top-left quadrant: card extends left and down
    left = attachX - width;
    top = attachY;
  } else if (normalizedAngle < Math.PI * 1.5) {
    // Bottom-left quadrant: card extends left and up
    left = attachX - width;
    top = attachY - height;
  } else {
    // Bottom-right quadrant: card extends right and up
    left = attachX;
    top = attachY - height;
  }
  
  return {
    left,
    top,
    right: left + width,
    bottom: top + height,
    width,
    height,
    attachX,
    attachY,
    angle: ringAngle
  };
}

/**
 * Check if two boxes overlap
 */
function boxesOverlap(box1, box2, padding = 5) {
  return !(box1.right + padding < box2.left ||
           box1.left - padding > box2.right ||
           box1.bottom + padding < box2.top ||
           box1.top - padding > box2.bottom);
}

/**
 * Check if a box overlaps with a star position
 */
function boxOverlapsStar(box, starX, starY, starRadius = 15) {
  const closestX = Math.max(box.left, Math.min(starX, box.right));
  const closestY = Math.max(box.top, Math.min(starY, box.bottom));
  const distX = starX - closestX;
  const distY = starY - closestY;
  return (distX * distX + distY * distY) < (starRadius * starRadius);
}

/**
 * Compute optimal positions for all selected cards using ring collision system
 */
function computeRingPositions(selectedCards, allCards, markerVisibility, worldScale) {
  const positions = {};
  
  if (!selectedCards.length || !markerVisibility) {
    return positions;
  }
  
  // Get all star positions (for avoiding)
  const starPositions = [];
  const processedStars = new Set();
  
  for (const card of allCards) {
    const vis = markerVisibility[card.id];
    if (!vis?.screenPos) continue;
    
    const key = `${Math.round(vis.screenPos.x)}_${Math.round(vis.screenPos.y)}`;
    if (!processedStars.has(key)) {
      processedStars.add(key);
      starPositions.push({ x: vis.screenPos.x, y: vis.screenPos.y });
    }
  }
  
  // Group selected cards by their star
  const cardsByStarKey = {};
  for (const card of selectedCards) {
    const vis = markerVisibility[card.id];
    if (!vis?.screenPos) continue;
    
    const key = `${Math.round(vis.screenPos.x)}_${Math.round(vis.screenPos.y)}`;
    if (!cardsByStarKey[key]) {
      cardsByStarKey[key] = {
        starX: vis.screenPos.x,
        starY: vis.screenPos.y,
        cards: []
      };
    }
    cardsByStarKey[key].cards.push(card);
  }
  
  // All placed card bounds (for collision detection)
  const placedBounds = [];
  
  // Process each star group
  for (const starKey of Object.keys(cardsByStarKey)) {
    const { starX, starY, cards } = cardsByStarKey[starKey];
    const ringRadius = RING_RADIUS * worldScale;
    
    // Distribute cards around the ring
    const angleStep = (Math.PI * 2) / Math.max(cards.length, RING_POINTS);
    const startAngle = -Math.PI / 2; // Start from top
    
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      let bestPosition = null;
      let bestScale = 1.0;
      let minOverlaps = Infinity;
      
      // Try different starting angles
      for (let angleOffset = 0; angleOffset < RING_POINTS; angleOffset++) {
        const baseAngle = startAngle + (i * angleStep) + (angleOffset * (Math.PI * 2 / RING_POINTS));
        
        // Try different scales
        for (let scale = 1.0; scale >= MIN_SCALE; scale -= SCALE_STEP) {
          const bounds = getCardBounds(starX, starY, baseAngle, ringRadius, scale);
          
          // Count overlaps
          let overlaps = 0;
          
          // Check against other placed cards
          for (const placed of placedBounds) {
            if (boxesOverlap(bounds, placed)) {
              overlaps++;
            }
          }
          
          // Check against other stars (excluding own star)
          for (const star of starPositions) {
            if (Math.abs(star.x - starX) < 5 && Math.abs(star.y - starY) < 5) continue;
            if (boxOverlapsStar(bounds, star.x, star.y)) {
              overlaps += 2; // Stars are more important to avoid
            }
          }
          
          if (overlaps < minOverlaps) {
            minOverlaps = overlaps;
            bestPosition = bounds;
            bestScale = scale;
          }
          
          if (overlaps === 0) break; // Found perfect position
        }
        
        if (minOverlaps === 0) break; // Found perfect position
      }
      
      if (bestPosition) {
        positions[card.id] = {
          x: bestPosition.attachX,
          y: bestPosition.attachY,
          angle: bestPosition.angle,
          scale: bestScale,
          starX,
          starY
        };
        placedBounds.push(bestPosition);
      }
    }
  }
  
  return positions;
}

/**
 * Get anchor based on ring angle
 */
function getAnchorFromAngle(angle) {
  const normalized = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  if (normalized < Math.PI / 2) return 'top-left';
  if (normalized < Math.PI) return 'top-right';
  if (normalized < Math.PI * 1.5) return 'bottom-right';
  return 'bottom-left';
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
  
  // Store current card positions for smooth transitions
  const [cardPositions, setCardPositions] = useState({});
  
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

  // Calculate world scale from marker visibility
  const worldScale = useMemo(() => {
    const firstVis = Object.values(markerVisibility)[0];
    if (firstVis?.distance) {
      return Math.max(0.4, Math.min(1.2, 150 / firstVis.distance));
    }
    return 1;
  }, [markerVisibility]);

  // Compute positions whenever selection or visibility changes
  useEffect(() => {
    if (!cards || selectedCards.length === 0) {
      setCardPositions({});
      return;
    }
    
    const selectedCardObjects = cards.filter(c => selectedCards.includes(c.id));
    const newPositions = computeRingPositions(
      selectedCardObjects,
      cards,
      markerVisibility,
      worldScale
    );
    
    setCardPositions(newPositions);
  }, [selectedCards, cards, markerVisibility, worldScale]);

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
    const cardsArray = Array.isArray(clickedCards) ? clickedCards : [clickedCards];
    
    resetAutoRotateTimer();
    
    const allSelected = cardsArray.every(c => selectedCards.includes(c.id));
    
    if (allSelected) {
      setSelectedCards(prev => prev.filter(id => !cardsArray.some(c => c.id === id)));
      if (cardsArray.some(c => c.id === focusedCard)) {
        setFocusedCard(null);
      }
    } else {
      setSelectedCards(prev => {
        const newSelected = [...prev];
        for (const card of cardsArray) {
          if (!newSelected.includes(card.id)) {
            newSelected.push(card.id);
          }
        }
        return newSelected;
      });
      const firstNew = cardsArray.find(c => !selectedCards.includes(c.id));
      if (firstNew) {
        setFocusedCard(firstNew.id);
      }
    }
  }, [resetAutoRotateTimer, focusedCard, selectedCards]);

  const handleClosePopup = useCallback((cardId) => {
    setSelectedCards(prev => prev.filter(id => id !== cardId));
    if (focusedCard === cardId) setFocusedCard(null);
  }, [focusedCard]);

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

  // Calculate stagger indices for animation
  const staggerInfo = {};
  const cardsByStarKey = {};
  
  for (const card of selectedCardObjects) {
    const vis = markerVisibility[card.id];
    if (!vis?.screenPos) continue;
    
    const key = `${Math.round(vis.screenPos.x)}_${Math.round(vis.screenPos.y)}`;
    if (!cardsByStarKey[key]) cardsByStarKey[key] = [];
    cardsByStarKey[key].push(card.id);
  }
  
  for (const key of Object.keys(cardsByStarKey)) {
    const ids = cardsByStarKey[key];
    ids.forEach((id, idx) => {
      staggerInfo[id] = { index: idx, total: ids.length };
    });
  }

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

        {selectedCardObjects.map((card, index) => {
          const position = cardPositions[card.id];
          const stagger = staggerInfo[card.id] || { index: 0, total: 1 };
          
          return (
            <PopupCard
              key={card.id}
              card={card}
              visibilityData={markerVisibility}
              position={position}
              anchor={position ? getAnchorFromAngle(position.angle) : 'top-left'}
              onClose={handleClosePopup}
              onFocus={handleFocusCard}
              isFocused={focusedCard === card.id}
              zIndex={1000 + index}
              staggerIndex={stagger.index}
              totalInGroup={stagger.total}
              worldScale={worldScale}
              collisionScale={position?.scale || 1}
            />
          );
        })}

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