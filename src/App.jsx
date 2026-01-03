import React, { useState, useEffect, useCallback, useRef } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';

function App() {
  const [currentPage, setCurrentPage] = useState('globe');
  const { cards, loading, error, refetch } = useCards();
  const [selectedCards, setSelectedCards] = useState([]); // Cards with open popups
  const [focusedCard, setFocusedCard] = useState(null);
  const [focusTrigger, setFocusTrigger] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [markerVisibility, setMarkerVisibility] = useState({});
  
  // Check for embed mode via URL parameter
  const isEmbedMode = new URLSearchParams(window.location.search).get('embed') === 'true';
  
  // Track if all cards are shown in embed mode
  const [embedShowAll, setEmbedShowAll] = useState(false);
  const [notification, setNotification] = useState(null);
  
  // Auto-rotate timer - restart rotation after 5s of inactivity
  const autoRotateTimer = useRef(null);
  const lastInteractionTime = useRef(Date.now());

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


  // Check for notification from email action redirect (using hash params for GitHub Pages)
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the #
    const params = new URLSearchParams(hash);
    const notifType = params.get('notification');
    const message = params.get('message');
    
    if (notifType && message) {
      // Show notification immediately
      setNotification({ type: notifType, message: message });
      setCurrentPage('admin');
      
      // Clean URL but keep base path
      const basePath = import.meta.env.BASE_URL || '/';
      window.history.replaceState({}, '', basePath);
      
      // Auto-hide after 4 seconds
      setTimeout(() => setNotification(null), 4000);
    }
  }, []);

  const handleMarkerClick = useCallback((card) => {
    resetAutoRotateTimer();
    
    // If clicking the same star that's focused, close and unfocus
    if (focusedCard === card.id) {
      setSelectedCards(prev => prev.filter(id => id !== card.id));
      setFocusedCard(null);
      return;
    }
    
    // Otherwise, open/select the card and focus on it
    setSelectedCards(prev => {
      if (prev.includes(card.id)) {
        return prev; // Already open, just focus
      }
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

  const openAllCards = useCallback(() => {
    resetAutoRotateTimer();
    setSelectedCards(cards.map(c => c.id));
  }, [cards, resetAutoRotateTimer]);

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
    return <AdminPage onBack={() => { setCurrentPage('globe'); refetch(); }} />;
  }

  const countryCount = new Set(cards.map(c => c.location.split(',').pop()?.trim())).size;
  const selectedCardObjects = cards.filter(c => selectedCards.includes(c.id));
  const focusKey = focusedCard;

  return (
    <>
      {currentPage === 'admin' ? (
        <AdminPage onBack={() => { setCurrentPage('globe'); refetch(); }} />
      ) : (
        <div className={`globe-container ${isEmbedMode ? 'embed-mode' : ''}`}>
          <Globe
            cards={cards}
            selectedCards={selectedCards}
            autoRotate={autoRotate}
            onMarkerClick={handleMarkerClick}
            onMarkerVisibilityChange={handleMarkerVisibilityChange}
            onInteraction={handleGlobeInteraction}
            focusCardId={focusKey}
            onFocusLost={handleFocusLost}
          />

          {!isEmbedMode && (
            <ControlsPanel
              cards={cards}
              selectedCards={selectedCards}
              autoRotate={autoRotate}
              onAutoRotateChange={setAutoRotate}
              onToggleCard={toggleCardPopup}
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
              onClose={handleClosePopup}
              onFocus={handleFocusCard}
              isFocused={focusedCard === card.id}
              zIndex={1000 + index}
            />
          ))}

          <div className={`globe-logo-container ${isEmbedMode ? 'embed' : ''}`}>
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="globe-logo" />
          </div>

          {!isEmbedMode && (
            <div className="globe-footer">
              AnKing Step Deck Maintainers · 2025
            </div>
          )}

          <div className="globe-stats">
            <div className="stat-item">
              <div className="stat-value">{cards.length}</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{countryCount}</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>

          {!isEmbedMode && (
            <div className="instructions">
              <kbd>Drag</kbd> to rotate · <kbd>Scroll</kbd> to zoom<br />
              Click markers to toggle cards
            </div>
          )}
          
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
              
              <div className="embed-watermark">
                AnKing Step Deck Maintainers
              </div>
            </>
          )}
        </div>
      )}
      
      {notification && (
        <div className={`toast-notification ${notification.type}`}>
          {notification.type === 'success' ? '✓' : 'ℹ'} {notification.message}
        </div>
      )}
    </>
  );
}

export default App;
