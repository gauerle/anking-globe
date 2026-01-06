console.log('APP VERSION 13 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

/**
 * Distance between two points
 */
function geoDistance(lat1, lng1, lat2, lng2) {
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

/**
 * The 4 valid corners - in order for cycling
 */
const CORNERS = ['top-left', 'bottom-right', 'top-right', 'bottom-left'];

/**
 * Opposite corners - for forcing maximum separation
 */
const OPPOSITE = {
  'top-left': 'bottom-right',
  'bottom-right': 'top-left',
  'top-right': 'bottom-left',
  'bottom-left': 'top-right'
};

/**
 * NEW APPROACH: Cluster-based corner assignment
 * 
 * 1. Find clusters of nearby cards
 * 2. Within each cluster, assign corners to maximize spread
 * 3. Isolated cards get hemisphere-based defaults
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  const CLUSTER_THRESHOLD = 15; // degrees - cards within this form a cluster
  const anchors = {};
  const assigned = new Set();
  
  // Sort cards by latitude (north to south), then longitude (west to east)
  const sortedCards = [...cards].sort((a, b) => {
    const latDiff = b.lat - a.lat;
    if (Math.abs(latDiff) > 2) return latDiff;
    return a.lng - b.lng;
  });
  
  // Build adjacency list - which cards are near each other
  const nearby = {};
  for (const card of cards) {
    nearby[card.id] = [];
    for (const other of cards) {
      if (other.id === card.id) continue;
      const dist = geoDistance(card.lat, card.lng, other.lat, other.lng);
      if (dist < CLUSTER_THRESHOLD) {
        nearby[card.id].push({ card: other, dist });
      }
    }
    nearby[card.id].sort((a, b) => a.dist - b.dist);
  }
  
  // Process each card
  for (const card of sortedCards) {
    if (assigned.has(card.id)) continue;
    
    const neighbors = nearby[card.id];
    
    if (neighbors.length === 0) {
      // Isolated card - use hemisphere default
      anchors[card.id] = getHemisphereDefault(card);
      assigned.add(card.id);
      continue;
    }
    
    // Find all cards in this cluster (BFS)
    const cluster = [];
    const queue = [card];
    const visited = new Set([card.id]);
    
    while (queue.length > 0) {
      const current = queue.shift();
      cluster.push(current);
      
      for (const neighbor of nearby[current.id]) {
        if (!visited.has(neighbor.card.id)) {
          visited.add(neighbor.card.id);
          queue.push(neighbor.card);
        }
      }
    }
    
    // Assign corners within cluster to maximize spread
    assignClusterCorners(cluster, anchors, nearby);
    
    for (const c of cluster) {
      assigned.add(c.id);
    }
  }
  
  // Log results
  console.log('Card anchors (cluster-based):');
  for (const card of sortedCards) {
    const neighborCount = nearby[card.id].length;
    console.log(`  ${card.name}: "${anchors[card.id]}" (${neighborCount} nearby)`);
  }
  
  return anchors;
}

/**
 * Get default corner based on hemisphere
 */
function getHemisphereDefault(card) {
  const inWest = card.lng < 0;
  const inNorth = card.lat > 0;
  if (inWest && inNorth) return 'top-left';
  if (!inWest && inNorth) return 'top-right';
  if (inWest && !inNorth) return 'bottom-left';
  return 'bottom-right';
}

/**
 * Assign corners to cards in a cluster to minimize overlap
 */
function assignClusterCorners(cluster, anchors, nearby) {
  if (cluster.length === 1) {
    anchors[cluster[0].id] = getHemisphereDefault(cluster[0]);
    return;
  }
  
  // Sort cluster by position (top-left to bottom-right)
  cluster.sort((a, b) => {
    const latDiff = b.lat - a.lat; // Higher lat = more north = first
    if (Math.abs(latDiff) > 1) return latDiff;
    return a.lng - b.lng; // Lower lng = more west = first
  });
  
  // For 2 cards: use opposite corners
  if (cluster.length === 2) {
    const [card1, card2] = cluster;
    
    // Determine relative position
    const card2IsBelow = card2.lat < card1.lat;
    const card2IsRight = card2.lng > card1.lng;
    
    if (card2IsBelow && card2IsRight) {
      // Card2 is to bottom-right of Card1
      anchors[card1.id] = 'bottom-right'; // Card1 extends up-left
      anchors[card2.id] = 'top-left';     // Card2 extends down-right
    } else if (card2IsBelow && !card2IsRight) {
      // Card2 is to bottom-left of Card1
      anchors[card1.id] = 'bottom-left';
      anchors[card2.id] = 'top-right';
    } else if (!card2IsBelow && card2IsRight) {
      // Card2 is to top-right of Card1
      anchors[card1.id] = 'top-right';
      anchors[card2.id] = 'bottom-left';
    } else {
      // Card2 is to top-left of Card1
      anchors[card1.id] = 'top-left';
      anchors[card2.id] = 'bottom-right';
    }
    return;
  }
  
  // For 3+ cards: assign corners cyclically, but try to spread
  const usedCorners = {};
  
  for (let i = 0; i < cluster.length; i++) {
    const card = cluster[i];
    
    // Get corners already used by nearby cards
    const nearbyCorners = new Set();
    for (const neighbor of nearby[card.id]) {
      if (anchors[neighbor.card.id]) {
        nearbyCorners.add(anchors[neighbor.card.id]);
      }
    }
    
    // Find a corner not used by immediate neighbors
    let bestCorner = null;
    
    // First priority: opposite corners from neighbors
    for (const corner of CORNERS) {
      if (!nearbyCorners.has(corner) && !nearbyCorners.has(OPPOSITE[corner])) {
        bestCorner = corner;
        break;
      }
    }
    
    // Second priority: any unused corner
    if (!bestCorner) {
      for (const corner of CORNERS) {
        if (!nearbyCorners.has(corner)) {
          bestCorner = corner;
          break;
        }
      }
    }
    
    // Fallback: cycle through corners
    if (!bestCorner) {
      bestCorner = CORNERS[i % 4];
    }
    
    anchors[card.id] = bestCorner;
  }
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