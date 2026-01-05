console.log('APP VERSION 8 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

// Card dimensions (unscaled)
const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;

/**
 * Calculate great-circle distance between two lat/lng points (in degrees)
 * Returns approximate distance for comparison purposes
 */
function geoDistance(lat1, lng1, lat2, lng2) {
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  // Simple approximation - good enough for nearby cards
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

/**
 * Pre-compute optimal anchor corners for all cards.
 * 
 * Algorithm:
 * For each card, look at nearby neighbors and choose a corner that
 * extends AWAY from them to minimize overlap.
 * 
 * Corner definitions (where the card extends FROM the star):
 * - 'top-left': star at top-left corner, card extends RIGHT and DOWN
 * - 'bottom-left': star at bottom-left corner, card extends RIGHT and UP
 * - 'bottom-right': star at bottom-right corner, card extends LEFT and UP
 * - 'top-right': star at top-right corner, card extends LEFT and DOWN
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  const anchors = {};
  const NEIGHBOR_THRESHOLD = 15; // degrees - cards within this are "neighbors"
  
  // Corner definitions: which direction does the card extend?
  const cornerDirections = {
    'top-left': { dx: 1, dy: 1 },      // extends RIGHT (+x) and DOWN (+y)
    'bottom-left': { dx: 1, dy: -1 },  // extends RIGHT (+x) and UP (-y)
    'bottom-right': { dx: -1, dy: -1 }, // extends LEFT (-x) and UP (-y)
    'top-right': { dx: -1, dy: 1 }     // extends LEFT (-x) and DOWN (+y)
  };
  
  // Order to try corners (as specified by user)
  const cornerOrder = ['top-left', 'bottom-left', 'bottom-right', 'top-right'];
  
  // Process cards sorted by latitude (north to south)
  const sortedCards = [...cards].sort((a, b) => b.lat - a.lat);
  
  for (const card of sortedCards) {
    // Find all nearby cards that have already been assigned anchors
    const neighbors = [];
    for (const other of sortedCards) {
      if (other.id === card.id) continue;
      if (!anchors[other.id]) continue; // Not yet processed
      
      const dist = geoDistance(card.lat, card.lng, other.lat, other.lng);
      if (dist < NEIGHBOR_THRESHOLD) {
        neighbors.push({
          card: other,
          anchor: anchors[other.id],
          dist,
          // Relative position: is neighbor to the right? below?
          relX: other.lng - card.lng, // positive = neighbor is to the east/right
          relY: card.lat - other.lat  // positive = neighbor is to the south/below (inverted lat)
        });
      }
    }
    
    if (neighbors.length === 0) {
      // No nearby neighbors - use default based on hemisphere
      // West hemisphere: extend right (top-left or bottom-left)
      // East hemisphere: extend left (top-right or bottom-right)
      // North hemisphere: extend down (top-left or top-right)
      // South hemisphere: extend up (bottom-left or bottom-right)
      if (card.lng < 0 && card.lat > 0) {
        anchors[card.id] = 'top-left';     // NW: extend right-down
      } else if (card.lng >= 0 && card.lat > 0) {
        anchors[card.id] = 'top-right';    // NE: extend left-down
      } else if (card.lng < 0 && card.lat <= 0) {
        anchors[card.id] = 'bottom-left';  // SW: extend right-up
      } else {
        anchors[card.id] = 'bottom-right'; // SE: extend left-up
      }
      continue;
    }
    
    // Find the closest neighbor
    neighbors.sort((a, b) => a.dist - b.dist);
    const closest = neighbors[0];
    
    // Choose corner that extends AWAY from the closest neighbor
    // If neighbor is to the RIGHT (relX > 0), we should extend LEFT
    // If neighbor is BELOW (relY > 0), we should extend UP
    let bestCorner = 'top-left';
    let bestScore = -Infinity;
    
    for (const corner of cornerOrder) {
      const dir = cornerDirections[corner];
      let score = 0;
      
      for (const neighbor of neighbors) {
        // We want to extend in the opposite direction of the neighbor
        // If neighbor.relX > 0 (neighbor is right), dir.dx should be negative (extend left)
        // If neighbor.relY > 0 (neighbor is below), dir.dy should be negative (extend up)
        
        const xScore = -neighbor.relX * dir.dx; // Positive when extending away from neighbor
        const yScore = -neighbor.relY * dir.dy;
        
        // Weight by inverse distance (closer neighbors matter more)
        const weight = 1 / (neighbor.dist + 1);
        score += (xScore + yScore) * weight;
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestCorner = corner;
      }
    }
    
    anchors[card.id] = bestCorner;
  }
  
  // Debug: log anchors
  console.log('Computed card anchors:', anchors);
  
  return anchors;
}


function App() {
  
  const [currentPage, setCurrentPage] = useState('globe');
  const { cards, loading, error, refetch } = useCards();
  const { groups, refetch: refetchGroups } = useGroups();
  const [selectedCards, setSelectedCards] = useState([]);
  const [focusedCard, setFocusedCard] = useState(null);
  const [focusTrigger, setFocusTrigger] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [markerVisibility, setMarkerVisibility] = useState({});
  
  const [visibleCardIds, setVisibleCardIds] = useState(null);
  
  // Pre-computed card anchors (computed once when cards load)
  const cardAnchors = useMemo(() => {
    return computeCardAnchors(cards);
  }, [cards]);
  
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
  const lastInteractionTime = useRef(Date.now());

  const resetAutoRotateTimer = useCallback(() => {
    lastInteractionTime.current = Date.now();
    setAutoRotate(false);
    
    if (autoRotateTimer.current) {
      clearTimeout(autoRotateTimer.current);
    }
    
    autoRotateTimer.current = setTimeout(() => {
      setAutoRotate(true);
    }, 5000);
  }, []);

  useEffect(() => {
    return () => {
      if (autoRotateTimer.current) {
        clearTimeout(autoRotateTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isEmbedMode || embedInitialized || !cards || cards.length === 0) return;
    
    let cardsToShow;
    if (embedGroupId && embedGroupId !== 'all' && embedGroup) {
      cardsToShow = cards.filter(c => embedGroup.memberIds?.includes(c.id));
    } else {
      cardsToShow = cards;
    }
    
    const visibleIds = new Set(cardsToShow.map(c => c.id));
    setVisibleCardIds(visibleIds);
    setEmbedInitialized(true);
  }, [isEmbedMode, embedInitialized, cards, embedGroupId, embedGroup]);

  useEffect(() => {
  const checkNotification = () => {
    let params;
    if (window.location.hash && window.location.hash.length > 1) {
      params = new URLSearchParams(window.location.hash.slice(1));
    } else {
      params = new URLSearchParams(window.location.search);
    }
    
    const notifType = params.get('notification');
    const message = params.get('message');
    
    if (notifType && message) {
      setNotification({ type: notifType, message: decodeURIComponent(message) });
      
      const basePath = import.meta.env.BASE_URL || '/';
      window.history.replaceState({}, '', basePath);
      
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
        if (focusedCard === cardId) {
          setFocusedCard(null);
        }
      } else {
        newSet.add(cardId);
      }
      
      if (newSet.size === cards.length) {
        return null;
      }
      
      return newSet;
    });
  }, [cards, focusedCard]);

  const handleMarkerClick = useCallback((card) => {
    resetAutoRotateTimer();
    
    if (focusedCard === card.id) {
      setSelectedCards(prev => prev.filter(id => id !== card.id));
      setFocusedCard(null);
      return;
    }
    
    setSelectedCards(prev => {
      if (prev.includes(card.id)) return prev;
      return [...prev, card.id];
    });
    setFocusedCard(card.id);
  }, [resetAutoRotateTimer, focusedCard]);

  const handleClosePopup = useCallback((cardId) => {
    setSelectedCards(prev => prev.filter(id => id !== cardId));
    if (focusedCard === cardId) {
      setFocusedCard(null);
    }
  }, [focusedCard]);

  const handleFocusCard = (id) => {
    if (focusedCard === id) {
      setFocusedCard(null);
    } else {
      setFocusedCard(id);
    }
  };

  const toggleCardPopup = useCallback((cardId) => {
    resetAutoRotateTimer();
    setSelectedCards(prev => {
      const isOpen = prev.includes(cardId);
      if (isOpen) {
        if (focusedCard === cardId) {
          setFocusedCard(null);
        }
        return prev.filter(id => id !== cardId);
      } else {
        const card = cards.find(c => c.id === cardId);
        if (card) {
          setFocusedCard(cardId);
          setFocusTrigger(prev => prev + 1);
        }
        return [...prev, cardId];
      }
    });
  }, [cards, focusedCard, resetAutoRotateTimer]);

  const openAllCards = useCallback(() => {
    resetAutoRotateTimer();
    const visibleIds = visibleCardIds === null 
      ? cards.map(c => c.id) 
      : Array.from(visibleCardIds);
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
  const focusKey = focusedCard;

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
          focusCardId={focusKey}
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
            <>
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
            </>
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