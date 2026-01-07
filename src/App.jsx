console.log('APP VERSION 29 LOADED');

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
const ANCHOR_RADIUS = 8; // Distance from star center to card corner

/**
 * Convert lat/lng to screen coordinates (equirectangular projection)
 */
function latLngToScreen(lat, lng) {
  const x = (lng + 180) * 4;
  const y = (90 - lat) * 4;
  return { x, y };
}

/**
 * Get card bounds given star screen position and angle
 * Card corner sits on circumference at angle, card extends outward
 */
function getCardBoundsFromAngle(starX, starY, angleDeg, radius = ANCHOR_RADIUS) {
  const angleRad = angleDeg * Math.PI / 180;
  
  // Anchor point on circumference (note: screen Y is inverted)
  const anchorX = starX + radius * Math.cos(angleRad);
  const anchorY = starY - radius * Math.sin(angleRad);
  
  // Determine card position based on angle quadrant
  // Card extends AWAY from star center
  let left, top;
  const normalizedAngle = ((angleDeg % 360) + 360) % 360;
  
  if (normalizedAngle >= 315 || normalizedAngle < 45) {
    // Right side: card's left edge at anchor
    left = anchorX;
    top = anchorY - CARD_HEIGHT / 2;
  } else if (normalizedAngle >= 45 && normalizedAngle < 135) {
    // Top side: card's bottom edge at anchor
    left = anchorX - CARD_WIDTH / 2;
    top = anchorY - CARD_HEIGHT;
  } else if (normalizedAngle >= 135 && normalizedAngle < 225) {
    // Left side: card's right edge at anchor
    left = anchorX - CARD_WIDTH;
    top = anchorY - CARD_HEIGHT / 2;
  } else {
    // Bottom side: card's top edge at anchor
    left = anchorX - CARD_WIDTH / 2;
    top = anchorY;
  }
  
  return {
    left,
    top,
    right: left + CARD_WIDTH,
    bottom: top + CARD_HEIGHT,
    anchorX,
    anchorY
  };
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
 * Calculate overlap for one card against all others
 */
function calculateCardOverlap(cardIndex, angle, cards, angles, radius) {
  const card = cards[cardIndex];
  const { x: starX, y: starY } = latLngToScreen(card.lat, card.lng);
  const bounds = getCardBoundsFromAngle(starX, starY, angle, radius);
  
  let totalOverlap = 0;
  
  for (let i = 0; i < cards.length; i++) {
    if (i === cardIndex) continue;
    
    const other = cards[i];
    const { x: otherX, y: otherY } = latLngToScreen(other.lat, other.lng);
    const otherBounds = getCardBoundsFromAngle(otherX, otherY, angles[i], radius);
    
    totalOverlap += getOverlapArea(bounds, otherBounds);
  }
  
  return totalOverlap;
}

/**
 * Calculate total pairwise overlap
 */
function calculateTotalOverlap(cards, angles, radius) {
  let total = 0;
  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      const { x: x1, y: y1 } = latLngToScreen(cards[i].lat, cards[i].lng);
      const { x: x2, y: y2 } = latLngToScreen(cards[j].lat, cards[j].lng);
      const bounds1 = getCardBoundsFromAngle(x1, y1, angles[i], radius);
      const bounds2 = getCardBoundsFromAngle(x2, y2, angles[j], radius);
      total += getOverlapArea(bounds1, bounds2);
    }
  }
  return total;
}

/**
 * Get initial angle based on card's position (point away from globe center)
 */
function getInitialAngle(card) {
  // Cards on left side of globe → point right (0°)
  // Cards on right side → point left (180°)
  // Cards on top → point up (90°)
  // Cards on bottom → point down (270°)
  
  const lngFactor = -card.lng / 180; // -1 to 1, negative lng = positive direction
  const latFactor = card.lat / 90;   // -1 to 1
  
  // Convert to angle, biased by position
  let angle = Math.atan2(latFactor, lngFactor) * 180 / Math.PI;
  
  // Adjust to point outward from crowded center
  if (card.lng < -30) {
    angle = card.lat > 0 ? 45 : 315;  // Right side, up or down
  } else if (card.lng > 30) {
    angle = card.lat > 0 ? 135 : 225; // Left side, up or down
  } else {
    angle = card.lat > 0 ? 90 : 270;  // Center, up or down
  }
  
  return angle;
}

/**
 * Group cards by proximity for localized optimization
 */
function findNearbyClusters(cards, threshold = 20) {
  const clusters = [];
  const assigned = new Set();
  
  for (let i = 0; i < cards.length; i++) {
    if (assigned.has(i)) continue;
    
    const cluster = [i];
    assigned.add(i);
    const queue = [i];
    
    while (queue.length > 0) {
      const current = queue.shift();
      const { x: cx, y: cy } = latLngToScreen(cards[current].lat, cards[current].lng);
      
      for (let j = 0; j < cards.length; j++) {
        if (assigned.has(j)) continue;
        
        const { x: jx, y: jy } = latLngToScreen(cards[j].lat, cards[j].lng);
        const dist = Math.sqrt((cx - jx) ** 2 + (cy - jy) ** 2);
        
        if (dist < threshold * 4) { // Screen distance threshold
          assigned.add(j);
          cluster.push(j);
          queue.push(j);
        }
      }
    }
    
    clusters.push(cluster);
  }
  
  return clusters;
}

/**
 * Main optimization: find best angles for all cards
 */
function computeCardAngles(cards) {
  if (!cards || cards.length === 0) return { angles: {}, offsets: {} };
  
  console.log('=== Computing card angles (continuous positioning) ===');
  
  const radius = ANCHOR_RADIUS;
  const cardArray = [...cards];
  const angles = cardArray.map(c => getInitialAngle(c));
  
  let initialOverlap = calculateTotalOverlap(cardArray, angles, radius);
  console.log(`Initial overlap: ${initialOverlap.toFixed(0)}`);
  
  // Find clusters for efficient optimization
  const clusters = findNearbyClusters(cardArray);
  console.log(`Found ${clusters.length} clusters`);
  
  // Coarse optimization: try angles at 30° intervals
  const coarseStep = 30;
  for (let iter = 0; iter < 20; iter++) {
    let improved = false;
    
    for (const cluster of clusters) {
      // Sort cluster by overlap (worst first)
      cluster.sort((a, b) => {
        const overlapA = calculateCardOverlap(a, angles[a], cardArray, angles, radius);
        const overlapB = calculateCardOverlap(b, angles[b], cardArray, angles, radius);
        return overlapB - overlapA;
      });
      
      for (const idx of cluster) {
        const currentOverlap = calculateCardOverlap(idx, angles[idx], cardArray, angles, radius);
        if (currentOverlap === 0) continue;
        
        let bestAngle = angles[idx];
        let bestOverlap = currentOverlap;
        
        for (let testAngle = 0; testAngle < 360; testAngle += coarseStep) {
          const testOverlap = calculateCardOverlap(idx, testAngle, cardArray, angles, radius);
          if (testOverlap < bestOverlap) {
            bestOverlap = testOverlap;
            bestAngle = testAngle;
            improved = true;
          }
        }
        
        angles[idx] = bestAngle;
      }
    }
    
    if (!improved) break;
  }
  
  // Fine optimization: refine with smaller steps
  const fineSteps = [15, 10, 5, 2];
  for (const step of fineSteps) {
    for (let iter = 0; iter < 5; iter++) {
      let improved = false;
      
      for (let idx = 0; idx < cardArray.length; idx++) {
        const currentOverlap = calculateCardOverlap(idx, angles[idx], cardArray, angles, radius);
        if (currentOverlap === 0) continue;
        
        for (const delta of [-step, step, -step * 2, step * 2]) {
          const testAngle = (angles[idx] + delta + 360) % 360;
          const testOverlap = calculateCardOverlap(idx, testAngle, cardArray, angles, radius);
          
          if (testOverlap < currentOverlap) {
            angles[idx] = testAngle;
            improved = true;
            break;
          }
        }
      }
      
      if (!improved) break;
    }
  }
  
  const finalOverlap = calculateTotalOverlap(cardArray, angles, radius);
  console.log(`Final overlap: ${finalOverlap.toFixed(0)} (reduced by ${((1 - finalOverlap / Math.max(1, initialOverlap)) * 100).toFixed(1)}%)`);
  
  // Build result object
  const result = { angles: {}, offsets: {} };
  for (let i = 0; i < cardArray.length; i++) {
    const card = cardArray[i];
    result.angles[card.id] = angles[i];
    result.offsets[card.id] = { x: 0, y: 0 };
    
    const overlap = calculateCardOverlap(i, angles[i], cardArray, angles, radius);
    console.log(`  ${card.name}: ${angles[i].toFixed(0)}°${overlap > 0 ? ` ⚠️ overlap: ${overlap.toFixed(0)}` : ' ✓'}`);
  }
  
  return result;
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
  
  // Compute anchors and offsets
  const { angles: cardAngles, offsets: cardOffsets } = useMemo(() => computeCardAngles(cards), [cards]);  
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
            angle={cardAngles[card.id] ?? 45}
            offset={cardOffsets[card.id] || { x: 0, y: 0 }}
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