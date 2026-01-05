console.log('APP VERSION 5 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';


function App() {
  
  const [currentPage, setCurrentPage] = useState('globe');
  const { cards, loading, error, refetch } = useCards();
  const { groups, refetch: refetchGroups } = useGroups();
  const [selectedCards, setSelectedCards] = useState([]); // Cards with open popups
  const [focusedCard, setFocusedCard] = useState(null);
  const [focusTrigger, setFocusTrigger] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [markerVisibility, setMarkerVisibility] = useState({});
  
  // Visibility filter - null means show all (All Members active by default)
  const [visibleCardIds, setVisibleCardIds] = useState(null);
  
  // Check for embed mode via URL parameter
  const urlParams = useMemo(() => new URLSearchParams(window.location.search), []);
  const isEmbedMode = urlParams.get('embed') === 'true';
  const embedGroupId = urlParams.get('group');
  
  // Get embed group info
  const embedGroup = useMemo(() => {
    if (!embedGroupId || embedGroupId === 'all') return null;
    return groups.find(g => g.id === embedGroupId);
  }, [embedGroupId, groups]);
  
  const embedGroupName = useMemo(() => {
    if (!embedGroupId || embedGroupId === 'all') return 'All Members';
    return embedGroup?.name || 'All Members';
  }, [embedGroupId, embedGroup]);
  
  // Track if all cards are shown in embed mode
  const [embedShowAll, setEmbedShowAll] = useState(false);
  const [notification, setNotification] = useState(null);
  const [embedInitialized, setEmbedInitialized] = useState(false);
  
  // Auto-rotate timer - restart rotation after 5s of inactivity
  const autoRotateTimer = useRef(null);
  const lastInteractionTime = useRef(Date.now());
  
  // Stable card placements ref - stores placement decisions that persist
  const cardPlacementsRef = useRef({});

  // Reset auto-rotate timer on any interaction
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

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoRotateTimer.current) {
        clearTimeout(autoRotateTimer.current);
      }
    };
  }, []);

  // Initialize embed mode - show group's cards as visible
  useEffect(() => {
    if (!isEmbedMode || embedInitialized || !cards || cards.length === 0) return;
    
    let cardsToShow;
    if (embedGroupId && embedGroupId !== 'all' && embedGroup) {
      // Show only the selected group's members
      cardsToShow = cards.filter(c => embedGroup.memberIds?.includes(c.id));
    } else {
      // Show all cards
      cardsToShow = cards;
    }
    
    const visibleIds = new Set(cardsToShow.map(c => c.id));
    setVisibleCardIds(visibleIds);
    setEmbedInitialized(true);
  }, [isEmbedMode, embedInitialized, cards, embedGroupId, embedGroup]);


  // Check for notification from email action redirect (using hash params for GitHub Pages)
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
      
      // Clean URL
      const basePath = import.meta.env.BASE_URL || '/';
      window.history.replaceState({}, '', basePath);
      
      setTimeout(() => setNotification(null), 4000);
    }
  };
  
  // Check on mount
  checkNotification();
  
  // Also listen for hash changes
  window.addEventListener('hashchange', checkNotification);
  return () => window.removeEventListener('hashchange', checkNotification);
  }, []);

  // Calculate stable placements for all selected cards
  const cardPlacements = useMemo(() => {
    const cardWidth = 220;
    const cardHeight = 58;
    const verticalGap = 8;
    const screenCenterX = typeof window !== 'undefined' ? window.innerWidth / 2 : 500;
    
    // Get all visible selected cards with their screen positions
    const visibleCards = selectedCards
      .map(cardId => {
        const visibility = markerVisibility[cardId];
        const cardData = cards?.find(c => c.id === cardId);
        if (!visibility || !visibility.visible || !cardData) return null;
        return {
          id: cardId,
          screenX: visibility.screenPos.x,
          screenY: visibility.screenPos.y,
          card: cardData
        };
      })
      .filter(Boolean);
    
    // Sort by screen Y position for consistent processing
    visibleCards.sort((a, b) => a.screenY - b.screenY);
    
    const placements = {};
    const placedCards = { left: [], right: [] };
    
    for (const vc of visibleCards) {
      // Check if we already have a stable placement for this card
      const existingPlacement = cardPlacementsRef.current[vc.id];
      
      // Determine preferred side based on star position
      const preferredSide = vc.screenX > screenCenterX ? 'left' : 'right';
      
      // Use existing side if available (stability), otherwise use preferred
      const side = existingPlacement?.side || preferredSide;
      
      // Calculate base Y position (center on star)
      const baseY = vc.screenY - (cardHeight / 2);
      
      // Check for overlaps with already-placed cards on the same side
      let offsetY = 0;
      const sameSideCards = placedCards[side];
      
      for (const placed of sameSideCards) {
        const myTop = baseY + offsetY;
        const myBottom = myTop + cardHeight;
        const otherTop = placed.y;
        const otherBottom = otherTop + cardHeight;
        
        // Check if they overlap vertically
        const overlaps = !(myBottom + verticalGap < otherTop || myTop > otherBottom + verticalGap);
        
        // Check if they're close enough horizontally to matter
        const horizontallyClose = Math.abs(vc.screenX - placed.screenX) < cardWidth * 0.7;
        
        if (overlaps && horizontallyClose) {
          // Move below the other card
          offsetY = (otherBottom + verticalGap) - baseY;
        }
      }
      
      // Store placement
      placements[vc.id] = { 
        side, 
        offsetY
      };
      
      // Track this card's position for subsequent overlap checks
      placedCards[side].push({
        y: baseY + offsetY,
        screenX: vc.screenX
      });
    }
    
    // Update the stable ref (preserve side decisions for open cards)
    for (const [id, placement] of Object.entries(placements)) {
      if (!cardPlacementsRef.current[id]) {
        cardPlacementsRef.current[id] = { side: placement.side };
      }
      cardPlacementsRef.current[id].offsetY = placement.offsetY;
    }
    
    // Clean up placements for cards that are no longer selected
    const selectedSet = new Set(selectedCards);
    for (const id of Object.keys(cardPlacementsRef.current)) {
      if (!selectedSet.has(id)) {
        delete cardPlacementsRef.current[id];
      }
    }
    
    return placements;
  }, [selectedCards, markerVisibility, cards]);

  // Toggle card visibility (show/hide star on globe)
  const handleToggleCardVisibility = useCallback((cardId) => {
    setVisibleCardIds(prev => {
      // If null (show all), create a set with all cards except this one
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
      
      // If all cards visible, return null
      if (newSet.size === cards.length) {
        return null;
      }
      
      return newSet;
    });
  }, [cards, focusedCard]);

const handleMarkerClick = useCallback((card) => {
  resetAutoRotateTimer();
  
  // Only close if clicking the SAME star that's currently focused
  if (focusedCard === card.id) {
    setSelectedCards(prev => prev.filter(id => id !== card.id));
    setFocusedCard(null);
    return;
  }
  
  // Otherwise open (if not already) and focus
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
    // If clicking same card or star, unfocus
    if (focusedCard === id) {
      setFocusedCard(null);
    } else {
      setFocusedCard(id);
    }
  };

  // Toggle card popup (from dropdown)
  const toggleCardPopup = useCallback((cardId) => {
    resetAutoRotateTimer();
    setSelectedCards(prev => {
      const isOpen = prev.includes(cardId);
      if (isOpen) {
        // Close the card
        if (focusedCard === cardId) {
          setFocusedCard(null);
        }
        return prev.filter(id => id !== cardId);
      } else {
        // Open the card and focus on it
        const card = cards.find(c => c.id === cardId);
        if (card) {
          setFocusedCard(cardId);
          setFocusTrigger(prev => prev + 1);
        }
        return [...prev, cardId];
      }
    });
  }, [cards, focusedCard, resetAutoRotateTimer]);

  // Open all visible cards
  const openAllCards = useCallback(() => {
    resetAutoRotateTimer();
    const visibleIds = visibleCardIds === null 
      ? cards.map(c => c.id) 
      : Array.from(visibleCardIds);
    setSelectedCards(visibleIds);
  }, [cards, visibleCardIds, resetAutoRotateTimer]);

  // Close all cards
  const closeAllCards = useCallback(() => {
    setSelectedCards([]);
    setFocusedCard(null);
  }, []);

  // Toggle all cards in embed mode
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

  // Track globe interaction
  const handleGlobeInteraction = useCallback(() => {
    resetAutoRotateTimer();
  }, [resetAutoRotateTimer]);

  const handleFocusLost = useCallback(() => {
    setFocusedCard(null);
    // Don't close the card, just release focus so user can rotate/zoom freely
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
              placement={cardPlacements[card.id]}
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