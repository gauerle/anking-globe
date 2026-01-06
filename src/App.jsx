console.log('APP VERSION 19 LOADED');

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

/**
 * Anchor definitions - which direction does the card extend FROM the star?
 * 
 * 'top-left': star at top-left → card extends RIGHT and DOWN (to SE)
 * 'top-right': star at top-right → card extends LEFT and DOWN (to SW)
 * 'bottom-left': star at bottom-left → card extends RIGHT and UP (to NE)
 * 'bottom-right': star at bottom-right → card extends LEFT and UP (to NW)
 */
const ANCHOR_EXTENDS = {
  'top-left': { x: 1, y: 1 },      // card body is SE of star
  'top-right': { x: -1, y: 1 },    // card body is SW of star
  'bottom-left': { x: 1, y: -1 },  // card body is NE of star
  'bottom-right': { x: -1, y: -1 } // card body is NW of star
};

/**
 * Get the anchor that extends the card AWAY from a given direction
 * 
 * @param awayX - positive means card should extend to the RIGHT
 * @param awayY - positive means card should extend DOWN
 */
function getAnchorExtendingToward(awayX, awayY) {
  if (awayX >= 0 && awayY >= 0) return 'top-left';      // extend SE
  if (awayX < 0 && awayY >= 0) return 'top-right';      // extend SW
  if (awayX >= 0 && awayY < 0) return 'bottom-left';    // extend NE
  return 'bottom-right';                                 // extend NW
}

/**
 * Find clusters of nearby cards based on lat/lng proximity
 */
function findClusters(cards, threshold = 12) {
  const clusters = [];
  const assigned = new Set();
  
  for (const card of cards) {
    if (assigned.has(card.id)) continue;
    
    const cluster = [];
    const queue = [card];
    assigned.add(card.id);
    
    while (queue.length > 0) {
      const current = queue.shift();
      cluster.push(current);
      
      for (const other of cards) {
        if (assigned.has(other.id)) continue;
        
        const dist = Math.sqrt(
          Math.pow(current.lat - other.lat, 2) + 
          Math.pow(current.lng - other.lng, 2)
        );
        
        if (dist < threshold) {
          assigned.add(other.id);
          queue.push(other);
        }
      }
    }
    
    clusters.push(cluster);
  }
  
  return clusters;
}

/**
 * For a cluster, assign anchors so cards spread OUTWARD from centroid
 */
function assignClusterAnchors(cluster) {
  const anchors = {};
  
  if (cluster.length === 1) {
    // Single card - use position-based default
    const card = cluster[0];
    // Western hemisphere cards extend right, eastern extend left
    // Northern hemisphere cards extend down, southern extend up
    const extendRight = card.lng < -30;
    const extendDown = card.lat > 20;
    anchors[card.id] = getAnchorExtendingToward(
      extendRight ? 1 : -1,
      extendDown ? 1 : -1
    );
    return anchors;
  }
  
  // Calculate cluster centroid
  let centroidLat = 0, centroidLng = 0;
  for (const card of cluster) {
    centroidLat += card.lat;
    centroidLng += card.lng;
  }
  centroidLat /= cluster.length;
  centroidLng /= cluster.length;
  
  // Each card extends AWAY from centroid
  for (const card of cluster) {
    // Direction from centroid to card
    const dx = card.lng - centroidLng;
    const dy = card.lat - centroidLat;  // Note: lat increases northward
    
    // Card should extend in the same direction (away from centroid)
    // But we need to account for screen coordinates where Y is flipped
    // On screen: positive Y is DOWN, but positive lat is NORTH (up)
    anchors[card.id] = getAnchorExtendingToward(
      dx >= 0 ? 1 : -1,   // if card is east of centroid, extend right
      dy >= 0 ? -1 : 1    // if card is north of centroid, extend up (negative screen Y)
    );
  }
  
  return anchors;
}

/**
 * Compute optimal anchors using cluster spread algorithm
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  // Find clusters
  const clusters = findClusters(cards, 15);
  
  // Assign anchors to each cluster
  const anchors = {};
  
  for (const cluster of clusters) {
    const clusterAnchors = assignClusterAnchors(cluster);
    Object.assign(anchors, clusterAnchors);
  }
  
  // Log results
  console.log('Card anchors (spread-from-centroid):');
  console.log(`  Found ${clusters.length} clusters`);
  for (const cluster of clusters) {
    if (cluster.length > 1) {
      console.log(`  Cluster of ${cluster.length}: ${cluster.map(c => c.name).join(', ')}`);
    }
  }
  for (const card of cards) {
    console.log(`  ${card.name}: "${anchors[card.id]}" at (${card.lat.toFixed(1)}, ${card.lng.toFixed(1)})`);
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