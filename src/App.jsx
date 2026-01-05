console.log('APP VERSION 7 LOADED');

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
 * Pre-compute optimal anchor corners for all cards to prevent overlap.
 * Uses lat/lng positions to create a stable 2D projection.
 * 
 * Algorithm:
 * 1. Start with top-left corner
 * 2. Check if overlap >50% with any placed card
 * 3. If yes, try: bottom-left → bottom-right → top-right
 * 4. Pick first that has <50% overlap, or the one with least overlap
 * 
 * Corner definitions:
 * - 'top-left': star at card's top-left, card extends RIGHT and DOWN
 * - 'top-right': star at card's top-right, card extends LEFT and DOWN  
 * - 'bottom-left': star at card's bottom-left, card extends RIGHT and UP
 * - 'bottom-right': star at card's bottom-right, card extends LEFT and UP
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  // Convert lat/lng to normalized 2D coordinates (0-1 range)
  const cardPositions = cards.map(card => ({
    id: card.id,
    x: (card.lng + 180) / 360,
    y: (90 - card.lat) / 180,
    lat: card.lat,
    lng: card.lng
  }));
  
  // Normalized card dimensions (relative to 0-1 coordinate space)
  const normWidth = CARD_WIDTH / 1200;
  const normHeight = CARD_HEIGHT / 700;
  
  // Corner offset definitions - where card extends FROM the star
  const corners = {
    'top-left': { dx: 0, dy: 0 },                        // card goes right and down
    'bottom-left': { dx: 0, dy: -normHeight },           // card goes right and up
    'bottom-right': { dx: -normWidth, dy: -normHeight }, // card goes left and up
    'top-right': { dx: -normWidth, dy: 0 }               // card goes left and down
  };
  
  // Order to try corners
  const cornerOrder = ['top-left', 'bottom-left', 'bottom-right', 'top-right'];
  
  // Get bounding box for a card at position with given corner anchor
  const getBoundingBox = (pos, corner) => {
    const offset = corners[corner];
    return {
      left: pos.x + offset.dx,
      right: pos.x + offset.dx + normWidth,
      top: pos.y + offset.dy,
      bottom: pos.y + offset.dy + normHeight
    };
  };
  
  // Calculate overlap percentage between two boxes (relative to box A's area)
  const getOverlapPercentage = (a, b) => {
    // Check if boxes overlap at all
    if (a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom) {
      return 0;
    }
    
    const overlapWidth = Math.min(a.right, b.right) - Math.max(a.left, b.left);
    const overlapHeight = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
    const overlapArea = overlapWidth * overlapHeight;
    const areaA = (a.right - a.left) * (a.bottom - a.top);
    
    return overlapArea / areaA;
  };
  
  // Get maximum overlap percentage with any placed card
  const getMaxOverlap = (box, placedBoxes) => {
    let maxOverlap = 0;
    for (const placed of placedBoxes) {
      const overlap = getOverlapPercentage(box, placed);
      if (overlap > maxOverlap) {
        maxOverlap = overlap;
      }
    }
    return maxOverlap;
  };
  
  // Sort cards by latitude (top to bottom) for consistent processing
  const sortedCards = [...cardPositions].sort((a, b) => a.y - b.y);
  
  const anchors = {};
  const placedBoxes = [];
  
  for (const card of sortedCards) {
    let bestCorner = 'top-left';
    let bestOverlap = Infinity;
    
    // Try corners in order: top-left → bottom-left → bottom-right → top-right
    for (const corner of cornerOrder) {
      const box = getBoundingBox(card, corner);
      const maxOverlap = getMaxOverlap(box, placedBoxes);
      
      // If overlap is less than 50%, use this corner
      if (maxOverlap < 0.5) {
        bestCorner = corner;
        bestOverlap = maxOverlap;
        break; // Found acceptable position
      }
      
      // Track best option in case all have >50% overlap
      if (maxOverlap < bestOverlap) {
        bestOverlap = maxOverlap;
        bestCorner = corner;
      }
    }
    
    // Store the chosen anchor
    anchors[card.id] = bestCorner;
    
    // Add this card's bounding box to placed cards
    placedBoxes.push(getBoundingBox(card, bestCorner));
  }
  
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