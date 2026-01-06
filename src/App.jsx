console.log('APP VERSION 12 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

/**
 * Calculate distance between two lat/lng points
 */
function geoDistance(lat1, lng1, lat2, lng2) {
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

const VALID_CORNERS = ['top-left', 'bottom-left', 'bottom-right', 'top-right'];

const CORNER_EXTENDS = {
  'top-left': { x: 1, y: 1 },
  'bottom-left': { x: 1, y: -1 },
  'bottom-right': { x: -1, y: -1 },
  'top-right': { x: -1, y: 1 }
};

const OPPOSITE_CORNER = {
  'top-left': 'bottom-right',
  'bottom-left': 'top-right',
  'bottom-right': 'top-left',
  'top-right': 'bottom-left'
};

function getCornerAwayFrom(neighborIsNorth, neighborIsEast) {
  if (neighborIsNorth && neighborIsEast) return 'top-right';
  if (neighborIsNorth && !neighborIsEast) return 'top-left';
  if (!neighborIsNorth && neighborIsEast) return 'bottom-right';
  return 'bottom-left';
}

function getDefaultCorner(card) {
  const inWest = card.lng < 0;
  const inNorth = card.lat > 0;
  if (inWest && inNorth) return 'top-left';
  if (!inWest && inNorth) return 'top-right';
  if (inWest && !inNorth) return 'bottom-left';
  return 'bottom-right';
}

function wouldOverlap(card1, anchor1, card2, anchor2, threshold = 12) {
  const dist = geoDistance(card1.lat, card1.lng, card2.lat, card2.lng);
  if (dist > threshold) return false;
  
  const ext1 = CORNER_EXTENDS[anchor1];
  const ext2 = CORNER_EXTENDS[anchor2];
  
  if (!ext1 || !ext2) return false;
  
  const center1x = card1.lng + ext1.x * 5;
  const center1y = card1.lat - ext1.y * 2;
  const center2x = card2.lng + ext2.x * 5;
  const center2y = card2.lat - ext2.y * 2;
  
  const centerDist = geoDistance(center1y, center1x, center2y, center2x);
  return centerDist < 8;
}

/**
 * Pre-compute optimal anchor corners using 3-pass algorithm
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  const NEIGHBOR_THRESHOLD = 25;
  const anchors = {};
  
  // Build neighbor map
  const neighbors = {};
  for (const card of cards) {
    if (!card || !card.id) continue;
    
    neighbors[card.id] = [];
    for (const other of cards) {
      if (!other || !other.id || other.id === card.id) continue;
      
      const dist = geoDistance(card.lat, card.lng, other.lat, other.lng);
      if (dist < NEIGHBOR_THRESHOLD) {
        neighbors[card.id].push({
          card: other,
          dist,
          isNorth: other.lat > card.lat,
          isEast: other.lng > card.lng
        });
      }
    }
    neighbors[card.id].sort((a, b) => a.dist - b.dist);
  }
  
  // PASS 1: Initial assignment
  for (const card of cards) {
    if (!card || !card.id) continue;
    
    const cardNeighbors = neighbors[card.id] || [];
    
    if (cardNeighbors.length === 0) {
      anchors[card.id] = getDefaultCorner(card);
    } else {
      const closest = cardNeighbors[0];
      anchors[card.id] = getCornerAwayFrom(closest.isNorth, closest.isEast);
    }
    
    // Validate
    if (!VALID_CORNERS.includes(anchors[card.id])) {
      console.warn(`Invalid anchor for ${card.name}, using default`);
      anchors[card.id] = getDefaultCorner(card);
    }
  }
  
  // PASS 2: Resolve direct conflicts
  for (const card of cards) {
    if (!card || !card.id) continue;
    
    const cardNeighbors = neighbors[card.id] || [];
    
    for (const neighbor of cardNeighbors) {
      if (anchors[card.id] === anchors[neighbor.card.id]) {
        if (card.lat < neighbor.card.lat || 
            (card.lat === neighbor.card.lat && card.lng > neighbor.card.lng)) {
          anchors[card.id] = OPPOSITE_CORNER[anchors[card.id]];
        }
        break;
      }
    }
  }
  
  // PASS 3: Check remaining overlaps
  for (const card of cards) {
    if (!card || !card.id) continue;
    
    const cardNeighbors = neighbors[card.id] || [];
    if (cardNeighbors.length === 0) continue;
    
    let hasOverlap = false;
    for (const neighbor of cardNeighbors) {
      if (wouldOverlap(card, anchors[card.id], neighbor.card, anchors[neighbor.card.id])) {
        hasOverlap = true;
        break;
      }
    }
    
    if (hasOverlap) {
      let bestCorner = anchors[card.id];
      let bestOverlapCount = Infinity;
      
      for (const corner of VALID_CORNERS) {
        let overlapCount = 0;
        for (const neighbor of cardNeighbors) {
          if (wouldOverlap(card, corner, neighbor.card, anchors[neighbor.card.id])) {
            overlapCount++;
          }
        }
        if (overlapCount < bestOverlapCount) {
          bestOverlapCount = overlapCount;
          bestCorner = corner;
        }
      }
      
      anchors[card.id] = bestCorner;
    }
  }
  
  // Final validation pass
  for (const card of cards) {
    if (!card || !card.id) continue;
    if (!VALID_CORNERS.includes(anchors[card.id])) {
      anchors[card.id] = 'top-left';
    }
  }
  
  // Log results
  console.log('Card anchors (3-pass):');
  for (const card of cards) {
    if (!card) continue;
    const n = neighbors[card.id] || [];
    const closestName = n.length > 0 ? n[0].card.name : 'none';
    console.log(`  ${card.name}: "${anchors[card.id]}" (closest: ${closestName})`);
  }
  
  return anchors;
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
  
  // Pre-computed card anchors
  const cardAnchors = useMemo(() => computeCardAnchors(cards), [cards]);
  
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

  const handleMarkerClick = useCallback((card) => {
    resetAutoRotateTimer();
    if (focusedCard === card.id) {
      setSelectedCards(prev => prev.filter(id => id !== card.id));
      setFocusedCard(null);
      return;
    }
    setSelectedCards(prev => prev.includes(card.id) ? prev : [...prev, card.id]);
    setFocusedCard(card.id);
  }, [resetAutoRotateTimer, focusedCard]);

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