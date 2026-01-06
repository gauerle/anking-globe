console.log('APP VERSION 34 LOADED - 3D CARDS');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

function App() {
  const [currentPage, setCurrentPage] = useState('globe');
  const { cards, loading, error, refetch } = useCards();
  const { groups, refetch: refetchGroups } = useGroups();
  const [selectedCards, setSelectedCards] = useState([]);
  const [focusedCard, setFocusedCard] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [markerVisibility, setMarkerVisibility] = useState({});
  const [visibleCardIds, setVisibleCardIds] = useState(null);
  
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
    
    // Toggle selection
    setSelectedCards(prev => {
      if (prev.includes(card.id)) {
        // Deselect
        if (focusedCard === card.id) setFocusedCard(null);
        return prev.filter(id => id !== card.id);
      } else {
        // Select
        setFocusedCard(card.id);
        return [...prev, card.id];
      }
    });
  }, [resetAutoRotateTimer, focusedCard]);

  // Called from 3D card close button
  const handleCloseCard = useCallback((cardId) => {
    setSelectedCards(prev => prev.filter(id => id !== cardId));
    if (focusedCard === cardId) setFocusedCard(null);
  }, [focusedCard]);

  // Called from 3D card click (not close button)
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
          onCloseCard={handleCloseCard}
          onFocusCard={handleFocusCard}
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

        {/* 3D Cards are now rendered inside Globe.jsx */}

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