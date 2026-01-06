console.log('APP VERSION 21 LOADED');

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import Globe from './components/Globe';
import ControlsPanel from './components/ControlsPanel';
import PopupCard from './components/PopupCard';
import LoadingScreen from './components/LoadingScreen';
import AdminPage from './components/AdminPage';
import { useCards } from './hooks/useCards';
import { useGroups } from './hooks/useGroups';

// Back to original card width
const CARD_WIDTH = 220;
const CARD_HEIGHT = 58;
const CORNERS = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

/**
 * Get the anchor that extends the card in a given direction
 */
function getAnchorExtendingToward(awayX, awayY) {
  if (awayX >= 0 && awayY >= 0) return 'top-left';
  if (awayX < 0 && awayY >= 0) return 'top-right';
  if (awayX >= 0 && awayY < 0) return 'bottom-left';
  return 'bottom-right';
}

/**
 * Calculate card bounds given star position and anchor
 */
function getCardBounds(lat, lng, anchor) {
  const starX = (lng + 180) * 4;
  const starY = (90 - lat) * 4;
  
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

/**
 * Calculate overlap area between two boxes
 */
function getOverlapArea(box1, box2) {
  const xOverlap = Math.max(0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
  const yOverlap = Math.max(0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
  return xOverlap * yOverlap;
}

/**
 * Calculate total pairwise overlap for all cards
 */
function calculateTotalOverlap(cards, anchors) {
  let total = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const bounds1 = getCardBounds(cards[i].lat, cards[i].lng, anchors[cards[i].id]);
      const bounds2 = getCardBounds(cards[j].lat, cards[j].lng, anchors[cards[j].id]);
      total += getOverlapArea(bounds1, bounds2);
    }
  }
  return total;
}

/**
 * Calculate overlap for a single card against all others
 */
function calculateCardOverlap(card, cards, anchors) {
  let total = 0;
  const bounds1 = getCardBounds(card.lat, card.lng, anchors[card.id]);
  for (const other of cards) {
    if (other.id === card.id) continue;
    const bounds2 = getCardBounds(other.lat, other.lng, anchors[other.id]);
    total += getOverlapArea(bounds1, bounds2);
  }
  return total;
}

/**
 * Find clusters of nearby cards
 */
function findClusters(cards, threshold = 15) {
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
 * ROUND 1: Initial assignment based on spread from centroid
 */
function initialAssignment(cards) {
  const anchors = {};
  const clusters = findClusters(cards, 18);
  
  for (const cluster of clusters) {
    if (cluster.length === 1) {
      const card = cluster[0];
      const extendRight = card.lng < -30;
      const extendDown = card.lat > 20;
      anchors[card.id] = getAnchorExtendingToward(
        extendRight ? 1 : -1,
        extendDown ? 1 : -1
      );
      continue;
    }
    
    let centroidLat = 0, centroidLng = 0;
    for (const card of cluster) {
      centroidLat += card.lat;
      centroidLng += card.lng;
    }
    centroidLat /= cluster.length;
    centroidLng /= cluster.length;
    
    for (const card of cluster) {
      const dx = card.lng - centroidLng;
      const dy = card.lat - centroidLat;
      anchors[card.id] = getAnchorExtendingToward(
        dx >= 0 ? 1 : -1,
        dy >= 0 ? -1 : 1
      );
    }
  }
  
  return anchors;
}

/**
 * ROUND 2: Iterative single-card improvement
 */
function improveAnchors(cards, anchors, maxIterations = 10) {
  let improved = true;
  let iteration = 0;
  
  while (improved && iteration < maxIterations) {
    improved = false;
    iteration++;
    
    const cardsByOverlap = [...cards].sort((a, b) => {
      return calculateCardOverlap(b, cards, anchors) - calculateCardOverlap(a, cards, anchors);
    });
    
    for (const card of cardsByOverlap) {
      const currentOverlap = calculateCardOverlap(card, cards, anchors);
      if (currentOverlap === 0) continue;
      
      const currentAnchor = anchors[card.id];
      let bestAnchor = currentAnchor;
      let bestOverlap = currentOverlap;
      
      for (const anchor of CORNERS) {
        if (anchor === currentAnchor) continue;
        
        anchors[card.id] = anchor;
        const newOverlap = calculateCardOverlap(card, cards, anchors);
        
        if (newOverlap < bestOverlap) {
          bestOverlap = newOverlap;
          bestAnchor = anchor;
          improved = true;
        }
      }
      
      anchors[card.id] = bestAnchor;
    }
  }
  
  return iteration;
}

/**
 * ROUND 3: Pairwise swap optimization
 */
function pairwiseOptimization(cards, anchors) {
  let improved = true;
  let swaps = 0;
  
  while (improved) {
    improved = false;
    
    for (let i = 0; i < cards.length; i++) {
      for (let j = i + 1; j < cards.length; j++) {
        const card1 = cards[i];
        const card2 = cards[j];
        
        const bounds1 = getCardBounds(card1.lat, card1.lng, anchors[card1.id]);
        const bounds2 = getCardBounds(card2.lat, card2.lng, anchors[card2.id]);
        const currentPairOverlap = getOverlapArea(bounds1, bounds2);
        
        if (currentPairOverlap === 0) continue;
        
        const anchor1 = anchors[card1.id];
        const anchor2 = anchors[card2.id];
        
        anchors[card1.id] = anchor2;
        anchors[card2.id] = anchor1;
        
        const newBounds1 = getCardBounds(card1.lat, card1.lng, anchors[card1.id]);
        const newBounds2 = getCardBounds(card2.lat, card2.lng, anchors[card2.id]);
        const newPairOverlap = getOverlapArea(newBounds1, newBounds2);
        
        const oldTotal = calculateTotalOverlap(cards, { ...anchors, [card1.id]: anchor1, [card2.id]: anchor2 });
        const newTotal = calculateTotalOverlap(cards, anchors);
        
        if (newPairOverlap < currentPairOverlap && newTotal <= oldTotal) {
          improved = true;
          swaps++;
        } else {
          anchors[card1.id] = anchor1;
          anchors[card2.id] = anchor2;
        }
      }
    }
  }
  
  return swaps;
}

/**
 * ROUND 4: Exhaustive search for remaining overlapping cards
 */
function exhaustiveFixRemaining(cards, anchors) {
  let fixes = 0;
  
  // Find cards that still have overlap
  const overlappingCards = cards.filter(card => calculateCardOverlap(card, cards, anchors) > 0);
  
  for (const card of overlappingCards) {
    const currentOverlap = calculateCardOverlap(card, cards, anchors);
    let bestAnchor = anchors[card.id];
    let bestTotalOverlap = calculateTotalOverlap(cards, anchors);
    
    // Try each anchor and pick the one that minimizes TOTAL overlap
    for (const anchor of CORNERS) {
      anchors[card.id] = anchor;
      const newTotal = calculateTotalOverlap(cards, anchors);
      
      if (newTotal < bestTotalOverlap) {
        bestTotalOverlap = newTotal;
        bestAnchor = anchor;
        fixes++;
      }
    }
    
    anchors[card.id] = bestAnchor;
  }
  
  return fixes;
}

/**
 * ROUND 5: Global hill climbing with random restarts
 */
function globalOptimization(cards, anchors) {
  const originalTotal = calculateTotalOverlap(cards, anchors);
  if (originalTotal === 0) return 0;
  
  let bestAnchors = { ...anchors };
  let bestTotal = originalTotal;
  let improvements = 0;
  
  // Try different starting configurations
  for (let restart = 0; restart < 3; restart++) {
    const testAnchors = { ...anchors };
    
    // Randomly perturb some assignments
    const cardsToPerturb = cards.filter(() => Math.random() < 0.3);
    for (const card of cardsToPerturb) {
      testAnchors[card.id] = CORNERS[Math.floor(Math.random() * 4)];
    }
    
    // Run improvement rounds on this configuration
    improveAnchors(cards, testAnchors, 5);
    pairwiseOptimization(cards, testAnchors);
    
    const newTotal = calculateTotalOverlap(cards, testAnchors);
    if (newTotal < bestTotal) {
      bestTotal = newTotal;
      bestAnchors = { ...testAnchors };
      improvements++;
    }
  }
  
  // Copy best back
  Object.assign(anchors, bestAnchors);
  return improvements;
}

/**
 * ROUND 6: Final local search - try all combinations for small overlapping groups
 */
function finalLocalSearch(cards, anchors) {
  const overlappingCards = cards.filter(card => calculateCardOverlap(card, cards, anchors) > 0);
  
  if (overlappingCards.length === 0 || overlappingCards.length > 5) {
    return 0;
  }
  
  // Try all combinations for the overlapping subset
  let bestTotal = calculateTotalOverlap(cards, anchors);
  let bestConfig = overlappingCards.map(c => anchors[c.id]);
  let improvements = 0;
  
  const numCombinations = Math.pow(4, overlappingCards.length);
  
  for (let i = 0; i < numCombinations; i++) {
    let idx = i;
    for (const card of overlappingCards) {
      anchors[card.id] = CORNERS[idx % 4];
      idx = Math.floor(idx / 4);
    }
    
    const total = calculateTotalOverlap(cards, anchors);
    if (total < bestTotal) {
      bestTotal = total;
      bestConfig = overlappingCards.map(c => anchors[c.id]);
      improvements++;
    }
  }
  
  // Apply best config
  overlappingCards.forEach((card, i) => {
    anchors[card.id] = bestConfig[i];
  });
  
  return improvements;
}

/**
 * Main anchor computation with refined multi-round optimization
 */
function computeCardAnchors(cards) {
  if (!cards || cards.length === 0) return {};
  
  console.log('=== Computing card anchors (refined multi-round) ===');
  
  // Round 1: Initial spread-from-centroid
  let anchors = initialAssignment(cards);
  let overlap = calculateTotalOverlap(cards, anchors);
  console.log(`Round 1 (initial): overlap = ${overlap.toFixed(0)}`);
  
  // Round 2: Iterative single-card improvement
  const iterations = improveAnchors(cards, anchors, 15);
  overlap = calculateTotalOverlap(cards, anchors);
  console.log(`Round 2 (${iterations} iters): overlap = ${overlap.toFixed(0)}`);
  
  // Round 3: Pairwise swap
  const swaps = pairwiseOptimization(cards, anchors);
  overlap = calculateTotalOverlap(cards, anchors);
  console.log(`Round 3 (${swaps} swaps): overlap = ${overlap.toFixed(0)}`);
  
  // Round 4: Exhaustive fix for remaining
  const fixes = exhaustiveFixRemaining(cards, anchors);
  overlap = calculateTotalOverlap(cards, anchors);
  console.log(`Round 4 (${fixes} fixes): overlap = ${overlap.toFixed(0)}`);
  
  // Round 5: Global optimization with restarts
  const globalImprovements = globalOptimization(cards, anchors);
  overlap = calculateTotalOverlap(cards, anchors);
  console.log(`Round 5 (${globalImprovements} global): overlap = ${overlap.toFixed(0)}`);
  
  // Round 6: Final local search
  const localFixes = finalLocalSearch(cards, anchors);
  overlap = calculateTotalOverlap(cards, anchors);
  console.log(`Round 6 (${localFixes} local): overlap = ${overlap.toFixed(0)}`);
  
  // Log final
  console.log('Final anchors:');
  for (const card of cards) {
    const cardOverlap = calculateCardOverlap(card, cards, anchors);
    console.log(`  ${card.name}: "${anchors[card.id]}"${cardOverlap > 0 ? ` ⚠️ overlap: ${cardOverlap.toFixed(0)}` : ' ✓'}`);
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