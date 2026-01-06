console.log('APP VERSION 14 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

function geoDistance(lat1, lng1, lat2, lng2) {
  const dLat = lat2 - lat1;
  const dLng = lng2 - lng1;
  return Math.sqrt(dLat * dLat + dLng * dLng);
}

/**
 * NEW APPROACH: Cards extend AWAY from their cluster center
 * 
 * For a cluster of cards, find the centroid, then each card
 * gets an anchor that makes it extend away from that center.
 * 
 * Card position relative to center → anchor → card extends direction
 * ─────────────────────────────────────────────────────────────────
 * NW of center → bottom-right → card extends UP and LEFT
 * NE of center → bottom-left  → card extends UP and RIGHT
 * SW of center → top-right    → card extends DOWN and LEFT
 * SE of center → top-left     → card extends DOWN and RIGHT
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  const CLUSTER_THRESHOLD = 20;
  const anchors = {};
  const processed = new Set();
  
  // Build adjacency for clustering
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
  
  // Process cards, grouping into clusters
  for (const card of cards) {
    if (processed.has(card.id)) continue;
    
    // BFS to find all cards in this cluster
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
    
    // Assign anchors to this cluster
    assignClusterAnchors(cluster, anchors);
    
    for (const c of cluster) {
      processed.add(c.id);
    }
  }
  
  // Log results
  console.log('Card anchors (spread-from-center):');
  for (const card of cards) {
    console.log(`  ${card.name}: "${anchors[card.id]}" (${nearby[card.id].length} neighbors)`);
  }
  
  return anchors;
}

/**
 * Assign anchors to a cluster so cards spread outward from center
 */
function assignClusterAnchors(cluster, anchors) {
  if (cluster.length === 1) {
    // Single card - use hemisphere default
    const card = cluster[0];
    anchors[card.id] = getDefaultAnchor(card);
    return;
  }
  
  // Find cluster centroid
  let centerLat = 0, centerLng = 0;
  for (const card of cluster) {
    centerLat += card.lat;
    centerLng += card.lng;
  }
  centerLat /= cluster.length;
  centerLng /= cluster.length;
  
  // Assign each card an anchor based on position relative to center
  for (const card of cluster) {
    const isNorth = card.lat >= centerLat;
    const isEast = card.lng >= centerLng;
    
    // Card extends AWAY from cluster center
    if (isNorth && !isEast) {
      // NW of center → extend up-left → bottom-right anchor
      anchors[card.id] = 'bottom-right';
    } else if (isNorth && isEast) {
      // NE of center → extend up-right → bottom-left anchor
      anchors[card.id] = 'bottom-left';
    } else if (!isNorth && !isEast) {
      // SW of center → extend down-left → top-right anchor
      anchors[card.id] = 'top-right';
    } else {
      // SE of center → extend down-right → top-left anchor
      anchors[card.id] = 'top-left';
    }
  }
  
  // Check for conflicts (multiple cards got same anchor in same quadrant)
  // and resolve by adjusting
  resolveConflicts(cluster, anchors, centerLat, centerLng);
}

/**
 * Resolve conflicts when multiple cards in same quadrant got same anchor
 */
function resolveConflicts(cluster, anchors, centerLat, centerLng) {
  // Group cards by their assigned anchor
  const byAnchor = { 'top-left': [], 'top-right': [], 'bottom-left': [], 'bottom-right': [] };
  
  for (const card of cluster) {
    byAnchor[anchors[card.id]].push(card);
  }
  
  // For each anchor with multiple cards, spread them to adjacent anchors
  const anchorOrder = ['top-left', 'top-right', 'bottom-right', 'bottom-left'];
  
  for (const anchor of anchorOrder) {
    const cardsWithAnchor = byAnchor[anchor];
    if (cardsWithAnchor.length <= 1) continue;
    
    // Sort by distance from center (furthest first keeps original)
    cardsWithAnchor.sort((a, b) => {
      const distA = geoDistance(a.lat, a.lng, centerLat, centerLng);
      const distB = geoDistance(b.lat, b.lng, centerLat, centerLng);
      return distB - distA;
    });
    
    // Keep first card, reassign others to adjacent anchors
    const anchorIdx = anchorOrder.indexOf(anchor);
    for (let i = 1; i < cardsWithAnchor.length; i++) {
      const card = cardsWithAnchor[i];
      // Try clockwise then counter-clockwise
      const cw = anchorOrder[(anchorIdx + i) % 4];
      const ccw = anchorOrder[(anchorIdx - i + 4) % 4];
      
      // Pick whichever has fewer cards
      if (byAnchor[cw].length <= byAnchor[ccw].length) {
        anchors[card.id] = cw;
        byAnchor[cw].push(card);
      } else {
        anchors[card.id] = ccw;
        byAnchor[ccw].push(card);
      }
    }
  }
}

function getDefaultAnchor(card) {
  const inWest = card.lng < 0;
  const inNorth = card.lat > 0;
  if (inWest && inNorth) return 'bottom-right';
  if (!inWest && inNorth) return 'bottom-left';
  if (inWest && !inNorth) return 'top-right';
  return 'top-left';
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