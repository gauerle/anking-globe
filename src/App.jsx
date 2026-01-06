console.log('APP VERSION 18 LOADED');

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
const SIM_WIDTH = 800;
const SIM_HEIGHT = 800;
const GLOBE_RADIUS_SIM = 350;
const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

/**
 * Spherical orthographic projection
 */
function latLngToScreen(lat, lng) {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;
  const centerLng = (-95 * Math.PI) / 180;
  const adjustedLng = lngRad - centerLng;
  
  const x = Math.cos(latRad) * Math.sin(adjustedLng);
  const y = Math.sin(latRad);
  
  const screenX = SIM_WIDTH / 2 + x * GLOBE_RADIUS_SIM;
  const screenY = SIM_HEIGHT / 2 - y * GLOBE_RADIUS_SIM;
  
  return { x: screenX, y: screenY };
}

function getCardBounds(starX, starY, anchor) {
  let left, top;
  switch (anchor) {
    case 'top-left': left = starX; top = starY; break;
    case 'top-right': left = starX - CARD_WIDTH; top = starY; break;
    case 'bottom-left': left = starX; top = starY - CARD_HEIGHT; break;
    case 'bottom-right': left = starX - CARD_WIDTH; top = starY - CARD_HEIGHT; break;
    default: left = starX; top = starY;
  }
  return { left, top, right: left + CARD_WIDTH, bottom: top + CARD_HEIGHT };
}

function getOverlapArea(box1, box2) {
  const xOverlap = Math.max(0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
  const yOverlap = Math.max(0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
  return xOverlap * yOverlap;
}

/**
 * Calculate total pairwise overlap for a set of cards with given anchors
 */
function calculateTotalOverlap(cards, anchors, screenPositions) {
  let totalOverlap = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const bounds1 = getCardBounds(screenPositions[cards[i].id].x, screenPositions[cards[i].id].y, anchors[cards[i].id]);
      const bounds2 = getCardBounds(screenPositions[cards[j].id].x, screenPositions[cards[j].id].y, anchors[cards[j].id]);
      totalOverlap += getOverlapArea(bounds1, bounds2);
    }
  }
  return totalOverlap;
}

/**
 * Generate all possible anchor combinations for a cluster
 */
function* generateCombinations(cards, index = 0, current = {}) {
  if (index === cards.length) {
    yield { ...current };
    return;
  }
  for (const corner of CORNERS) {
    current[cards[index].id] = corner;
    yield* generateCombinations(cards, index + 1, current);
  }
}

/**
 * Find optimal anchors for a cluster by trying all combinations
 */
function optimizeCluster(cluster, screenPositions, existingAnchors = {}) {
  if (cluster.length === 0) return {};
  
  if (cluster.length === 1) {
    // Single card - use hemisphere-based default
    const card = cluster[0];
    return { [card.id]: card.lat > 0 ? (card.lng < -50 ? 'top-left' : 'top-right') : (card.lng < -50 ? 'bottom-left' : 'bottom-right') };
  }
  
  // For clusters up to 6 cards, try all combinations (4^6 = 4096)
  if (cluster.length <= 6) {
    let bestAnchors = null;
    let bestOverlap = Infinity;
    
    for (const combination of generateCombinations(cluster)) {
      // Merge with existing anchors for overlap calculation
      const testAnchors = { ...existingAnchors, ...combination };
      const overlap = calculateTotalOverlap(cluster, testAnchors, screenPositions);
      
      if (overlap < bestOverlap) {
        bestOverlap = overlap;
        bestAnchors = { ...combination };
      }
      
      if (overlap === 0) break; // Perfect solution found
    }
    
    return bestAnchors;
  }
  
  // For larger clusters, use iterative improvement
  const anchors = {};
  
  // Initial assignment based on position
  for (const card of cluster) {
    const pos = screenPositions[card.id];
    const centerX = SIM_WIDTH / 2;
    const centerY = SIM_HEIGHT / 2;
    
    if (pos.x < centerX && pos.y < centerY) anchors[card.id] = 'bottom-right';
    else if (pos.x >= centerX && pos.y < centerY) anchors[card.id] = 'bottom-left';
    else if (pos.x < centerX && pos.y >= centerY) anchors[card.id] = 'top-right';
    else anchors[card.id] = 'top-left';
  }
  
  // Iterative improvement
  let improved = true;
  let iterations = 0;
  while (improved && iterations < 10) {
    improved = false;
    iterations++;
    
    for (const card of cluster) {
      const currentAnchor = anchors[card.id];
      const currentOverlap = calculateTotalOverlap(cluster, anchors, screenPositions);
      
      for (const corner of CORNERS) {
        if (corner === currentAnchor) continue;
        
        anchors[card.id] = corner;
        const newOverlap = calculateTotalOverlap(cluster, anchors, screenPositions);
        
        if (newOverlap < currentOverlap) {
          improved = true;
          break;
        } else {
          anchors[card.id] = currentAnchor;
        }
      }
    }
  }
  
  return anchors;
}

/**
 * Find clusters of nearby cards
 */
function findClusters(cards, screenPositions, threshold = 250) {
  const clusters = [];
  const assigned = new Set();
  
  for (const card of cards) {
    if (assigned.has(card.id)) continue;
    
    // BFS to find all connected cards
    const cluster = [];
    const queue = [card];
    assigned.add(card.id);
    
    while (queue.length > 0) {
      const current = queue.shift();
      cluster.push(current);
      
      const currentPos = screenPositions[current.id];
      
      for (const other of cards) {
        if (assigned.has(other.id)) continue;
        
        const otherPos = screenPositions[other.id];
        const dist = Math.sqrt(
          Math.pow(currentPos.x - otherPos.x, 2) + 
          Math.pow(currentPos.y - otherPos.y, 2)
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
 * Main anchor computation using cluster-based optimization
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  // Convert to screen positions
  const screenPositions = {};
  for (const card of cards) {
    screenPositions[card.id] = latLngToScreen(card.lat, card.lng);
  }
  
  // Find clusters
  const clusters = findClusters(cards, screenPositions, 280);
  
  // Optimize each cluster
  const anchors = {};
  
  // Sort clusters by size (process larger clusters first)
  clusters.sort((a, b) => b.length - a.length);
  
  for (const cluster of clusters) {
    const clusterAnchors = optimizeCluster(cluster, screenPositions, anchors);
    Object.assign(anchors, clusterAnchors);
  }
  
  // Log results
  console.log('Card anchors (cluster optimization):');
  console.log(`  Found ${clusters.length} clusters: ${clusters.map(c => c.length).join(', ')} cards`);
  for (const card of cards) {
    const pos = screenPositions[card.id];
    console.log(`  ${card.name}: "${anchors[card.id]}" at (${pos.x.toFixed(0)}, ${pos.y.toFixed(0)})`);
  }
  
  // Calculate and log total overlap
  const totalOverlap = calculateTotalOverlap(cards, anchors, screenPositions);
  console.log(`  Total overlap: ${totalOverlap.toFixed(0)} sq px`);
  
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