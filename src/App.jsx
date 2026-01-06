console.log('APP VERSION 15 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

// Card dimensions (must match PopupCard.jsx)
const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;

// Simulation viewport (approximate screen size for calculation)
const SIM_WIDTH = 1200;
const SIM_HEIGHT = 800;

/**
 * Convert lat/lng to approximate screen position using equirectangular projection
 */
function latLngToScreen(lat, lng) {
  // Normalize to 0-1 range, then scale to viewport
  const x = ((lng + 180) / 360) * SIM_WIDTH;
  const y = ((90 - lat) / 180) * SIM_HEIGHT;
  return { x, y };
}

/**
 * Get bounding box for a card at given star position with given anchor
 */
function getCardBounds(starX, starY, anchor) {
  let left, top;
  
  switch (anchor) {
    case 'top-left':
      left = starX;
      top = starY;
      break;
    case 'top-right':
      left = starX - CARD_WIDTH;
      top = starY;
      break;
    case 'bottom-left':
      left = starX;
      top = starY - CARD_HEIGHT;
      break;
    case 'bottom-right':
      left = starX - CARD_WIDTH;
      top = starY - CARD_HEIGHT;
      break;
    default:
      left = starX;
      top = starY;
  }
  
  return {
    left,
    top,
    right: left + CARD_WIDTH,
    bottom: top + CARD_HEIGHT
  };
}

/**
 * Calculate overlap area between two bounding boxes
 */
function getOverlapArea(box1, box2) {
  const xOverlap = Math.max(0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
  const yOverlap = Math.max(0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
  return xOverlap * yOverlap;
}

/**
 * Calculate total overlap of a card with all placed cards
 */
function getTotalOverlap(cardBounds, placedBounds) {
  let total = 0;
  for (const placed of placedBounds) {
    total += getOverlapArea(cardBounds, placed);
  }
  return total;
}

/**
 * SIMULATION-BASED ANCHOR ASSIGNMENT
 * 
 * For each card:
 * 1. Try all 4 anchor options
 * 2. Calculate overlap with already-placed cards
 * 3. Pick anchor with minimum overlap
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  const anchors = {};
  const placedBounds = []; // Bounding boxes of already-assigned cards
  
  // Convert all cards to screen positions
  const cardScreenPos = {};
  for (const card of cards) {
    cardScreenPos[card.id] = latLngToScreen(card.lat, card.lng);
  }
  
  // Sort cards by latitude (north to south) for consistent processing
  const sortedCards = [...cards].sort((a, b) => b.lat - a.lat);
  
  // Greedy assignment
  for (const card of sortedCards) {
    const starPos = cardScreenPos[card.id];
    
    let bestAnchor = 'top-left';
    let bestOverlap = Infinity;
    
    // Try each anchor and pick the one with least overlap
    for (const anchor of CORNERS) {
      const bounds = getCardBounds(starPos.x, starPos.y, anchor);
      const overlap = getTotalOverlap(bounds, placedBounds);
      
      if (overlap < bestOverlap) {
        bestOverlap = overlap;
        bestAnchor = anchor;
      }
      
      // If no overlap, we're done
      if (overlap === 0) break;
    }
    
    anchors[card.id] = bestAnchor;
    
    // Add this card's bounds to placed list
    const finalBounds = getCardBounds(starPos.x, starPos.y, bestAnchor);
    placedBounds.push(finalBounds);
  }
  
  // Second pass: try to improve any cards that still have overlap
  for (const card of sortedCards) {
    const starPos = cardScreenPos[card.id];
    const currentAnchor = anchors[card.id];
    const currentBounds = getCardBounds(starPos.x, starPos.y, currentAnchor);
    
    // Get bounds of all OTHER cards
    const otherBounds = [];
    for (const other of sortedCards) {
      if (other.id === card.id) continue;
      const otherPos = cardScreenPos[other.id];
      otherBounds.push(getCardBounds(otherPos.x, otherPos.y, anchors[other.id]));
    }
    
    const currentOverlap = getTotalOverlap(currentBounds, otherBounds);
    
    if (currentOverlap > 0) {
      // Try other anchors
      for (const anchor of CORNERS) {
        if (anchor === currentAnchor) continue;
        
        const newBounds = getCardBounds(starPos.x, starPos.y, anchor);
        const newOverlap = getTotalOverlap(newBounds, otherBounds);
        
        if (newOverlap < currentOverlap) {
          anchors[card.id] = anchor;
          break;
        }
      }
    }
  }
  
  // Log results
  console.log('Card anchors (simulation-based):');
  for (const card of sortedCards) {
    const pos = cardScreenPos[card.id];
    console.log(`  ${card.name}: "${anchors[card.id]}" at (${pos.x.toFixed(0)}, ${pos.y.toFixed(0)})`);
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