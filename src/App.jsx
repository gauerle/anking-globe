console.log('APP VERSION 31 LOADED - RING COLLISION SYSTEM');

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
const COMPACT_SIZE = 56;

// Ring configuration
const RING_RADIUS = 25;
const MIN_SCALE = 0.5;
const SCALE_STEP = 0.1;

/**
 * Group cards by geographic proximity
 */
function groupCardsByLocation(cards, threshold = 3.0) {
  const groups = [];
  const assigned = new Set();
  
  const sortedCards = [...cards].sort((a, b) => {
    if (Math.abs(a.lat - b.lat) < 0.1) return a.lng - b.lng;
    return a.lat - b.lat;
  });
  
  for (const card of sortedCards) {
    if (assigned.has(card.id)) continue;
    
    const group = [card];
    assigned.add(card.id);
    
    for (const other of sortedCards) {
      if (assigned.has(other.id)) continue;
      
      const latDiff = Math.abs(card.lat - other.lat);
      const lngDiff = Math.abs(card.lng - other.lng);
      const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff);
      
      if (distance < threshold) {
        group.push(other);
        assigned.add(other.id);
      }
    }
    groups.push(group);
  }
  return groups;
}

/**
 * Get card bounds for a single card (corner at star center)
 */
function getSingleCardBounds(starX, starY, anchor, cardScale, isCompact = false) {
  const width = (isCompact ? COMPACT_SIZE : CARD_WIDTH) * cardScale;
  const height = (isCompact ? COMPACT_SIZE : CARD_HEIGHT) * cardScale;
  
  let left, top;
  
  switch (anchor) {
    case 'top-left':
      left = starX;
      top = starY;
      break;
    case 'top-right':
      left = starX - width;
      top = starY;
      break;
    case 'bottom-left':
      left = starX;
      top = starY - height;
      break;
    case 'bottom-right':
      left = starX - width;
      top = starY - height;
      break;
    default:
      left = starX;
      top = starY;
  }
  
  return {
    left,
    top,
    right: left + width,
    bottom: top + height,
    width,
    height,
    attachX: starX,
    attachY: starY,
    anchor
  };
}

/**
 * Get card bounds at a ring position (for multi-card stars)
 */
function getRingCardBounds(starX, starY, ringAngle, ringRadius, cardScale, isCompact = false) {
  const width = (isCompact ? COMPACT_SIZE : CARD_WIDTH) * cardScale;
  const height = (isCompact ? COMPACT_SIZE : CARD_HEIGHT) * cardScale;
  
  const attachX = starX + Math.cos(ringAngle) * ringRadius;
  const attachY = starY + Math.sin(ringAngle) * ringRadius;
  
  let left, top, anchor;
  const normalizedAngle = ((ringAngle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  
  if (normalizedAngle < Math.PI / 2) {
    left = attachX;
    top = attachY;
    anchor = 'top-left';
  } else if (normalizedAngle < Math.PI) {
    left = attachX - width;
    top = attachY;
    anchor = 'top-right';
  } else if (normalizedAngle < Math.PI * 1.5) {
    left = attachX - width;
    top = attachY - height;
    anchor = 'bottom-right';
  } else {
    left = attachX;
    top = attachY - height;
    anchor = 'bottom-left';
  }
  
  return {
    left,
    top,
    right: left + width,
    bottom: top + height,
    width,
    height,
    attachX,
    attachY,
    angle: ringAngle,
    anchor
  };
}

/**
 * Check if two boxes overlap
 */
function doBoxesOverlap(box1, box2, padding = 8) {
  return !(box1.right + padding < box2.left ||
           box1.left - padding > box2.right ||
           box1.bottom + padding < box2.top ||
           box1.top - padding > box2.bottom);
}

/**
 * Check if a box overlaps with a star position
 */
function doesBoxOverlapStar(box, starX, starY, starRadius = 20) {
  const closestX = Math.max(box.left, Math.min(starX, box.right));
  const closestY = Math.max(box.top, Math.min(starY, box.bottom));
  const distX = starX - closestX;
  const distY = starY - closestY;
  return (distX * distX + distY * distY) < (starRadius * starRadius);
}

/**
 * Find best anchor for a single card that avoids other stars
 */
function findBestAnchorForSingle(starX, starY, otherStars, placedBounds, cardScale) {
  const anchors = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  let bestAnchor = 'top-left';
  let bestScore = Infinity;
  let bestBounds = null;
  
  for (const anchor of anchors) {
    const bounds = getSingleCardBounds(starX, starY, anchor, cardScale);
    let score = 0;
    
    for (const star of otherStars) {
      if (Math.abs(star.x - starX) < 5 && Math.abs(star.y - starY) < 5) continue;
      if (doesBoxOverlapStar(bounds, star.x, star.y)) {
        score += 100;
      }
    }
    
    for (const placed of placedBounds) {
      if (doBoxesOverlap(bounds, placed)) {
        score += 50;
      }
    }
    
    if (score < bestScore) {
      bestScore = score;
      bestAnchor = anchor;
      bestBounds = bounds;
    }
    
    if (score === 0) break;
  }
  
  return { anchor: bestAnchor, bounds: bestBounds, score: bestScore };
}

/**
 * Compute optimal positions for all selected cards using ring collision system
 */
function computeRingPositions(selectedCards, allCards, markerVisibility, worldScale) {
  const positions = {};
  
  if (!selectedCards.length || !markerVisibility) {
    return positions;
  }
  
  const starPositions = [];
  const processedStars = new Set();
  
  for (const card of allCards) {
    const vis = markerVisibility[card.id];
    if (!vis?.screenPos) continue;
    
    const key = `${Math.round(vis.screenPos.x)}_${Math.round(vis.screenPos.y)}`;
    if (!processedStars.has(key)) {
      processedStars.add(key);
      starPositions.push({ x: vis.screenPos.x, y: vis.screenPos.y });
    }
  }
  
  const cardsByStarKey = {};
  for (const card of selectedCards) {
    const vis = markerVisibility[card.id];
    if (!vis?.screenPos) continue;
    
    const key = `${Math.round(vis.screenPos.x)}_${Math.round(vis.screenPos.y)}`;
    if (!cardsByStarKey[key]) {
      cardsByStarKey[key] = {
        starX: vis.screenPos.x,
        starY: vis.screenPos.y,
        cards: []
      };
    }
    cardsByStarKey[key].cards.push(card);
  }
  
  const placedBounds = [];
  
  const sortedStarKeys = Object.keys(cardsByStarKey).sort((a, b) => {
    return cardsByStarKey[a].cards.length - cardsByStarKey[b].cards.length;
  });
  
  for (const starKey of sortedStarKeys) {
    const { starX, starY, cards } = cardsByStarKey[starKey];
    
    if (cards.length === 1) {
      const card = cards[0];
      const { anchor, bounds, score } = findBestAnchorForSingle(
        starX, starY, starPositions, placedBounds, 1.0
      );
      
      let finalScale = 1.0;
      let finalBounds = bounds;
      let finalAnchor = anchor;
      
      if (score > 0) {
        for (let scale = 0.9; scale >= MIN_SCALE; scale -= SCALE_STEP) {
          const result = findBestAnchorForSingle(
            starX, starY, starPositions, placedBounds, scale
          );
          if (result.score < score) {
            finalScale = scale;
            finalBounds = result.bounds;
            finalAnchor = result.anchor;
            if (result.score === 0) break;
          }
        }
      }
      
      positions[card.id] = {
        x: starX,
        y: starY,
        angle: 0,
        scale: finalScale,
        starX,
        starY,
        anchor: finalAnchor,
        isSingle: true
      };
      
      if (finalBounds) {
        placedBounds.push(finalBounds);
      }
    } else {
      const ringRadius = RING_RADIUS * worldScale;
      const numAngles = 16;
      
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let bestPosition = null;
        let bestBounds = null;
        let minScore = Infinity;
        
        for (let angleIdx = 0; angleIdx < numAngles; angleIdx++) {
          const angle = (angleIdx / numAngles) * Math.PI * 2 - Math.PI / 2;
          
          for (let scale = 1.0; scale >= MIN_SCALE; scale -= SCALE_STEP) {
            const bounds = getRingCardBounds(starX, starY, angle, ringRadius, scale);
            let score = 0;
            
            for (const placed of placedBounds) {
              if (doBoxesOverlap(bounds, placed)) {
                score += 50;
              }
            }
            
            for (const star of starPositions) {
              if (Math.abs(star.x - starX) < 5 && Math.abs(star.y - starY) < 5) continue;
              if (doesBoxOverlapStar(bounds, star.x, star.y)) {
                score += 100;
              }
            }
            
            const idealAngle = -Math.PI / 2 + (i / cards.length) * Math.PI * 2;
            const angleDiff = Math.abs(angle - idealAngle);
            score += angleDiff * 2;
            
            score += (1 - scale) * 20;
            
            if (score < minScore) {
              minScore = score;
              bestPosition = {
                x: bounds.attachX,
                y: bounds.attachY,
                angle: angle,
                scale: scale,
                starX,
                starY,
                anchor: bounds.anchor,
                isSingle: false
              };
              bestBounds = bounds;
            }
            
            if (score < 5) break;
          }
          
          if (minScore < 5) break;
        }
        
        if (bestPosition) {
          positions[card.id] = bestPosition;
          if (bestBounds) {
            placedBounds.push(bestBounds);
          }
        }
      }
    }
  }
  
  return positions;
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
  const [cardPositions, setCardPositions] = useState({});
  
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

  const worldScale = useMemo(() => {
    const firstVis = Object.values(markerVisibility)[0];
    if (firstVis?.distance) {
      return Math.max(0.4, Math.min(1.2, 150 / firstVis.distance));
    }
    return 1;
  }, [markerVisibility]);

  useEffect(() => {
    if (!cards || selectedCards.length === 0) {
      setCardPositions({});
      return;
    }
    
    const selectedCardObjects = cards.filter(c => selectedCards.includes(c.id));
    const newPositions = computeRingPositions(
      selectedCardObjects,
      cards,
      markerVisibility,
      worldScale
    );
    
    setCardPositions(newPositions);
  }, [selectedCards, cards, markerVisibility, worldScale]);

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

  const handleMarkerClick = useCallback((clickedCards) => {
    const cardsArray = Array.isArray(clickedCards) ? clickedCards : [clickedCards];
    
    resetAutoRotateTimer();
    
    const allSelected = cardsArray.every(c => selectedCards.includes(c.id));
    
    if (allSelected) {
      setSelectedCards(prev => prev.filter(id => !cardsArray.some(c => c.id === id)));
      if (cardsArray.some(c => c.id === focusedCard)) {
        setFocusedCard(null);
      }
    } else {
      setSelectedCards(prev => {
        const newSelected = [...prev];
        for (const card of cardsArray) {
          if (!newSelected.includes(card.id)) {
            newSelected.push(card.id);
          }
        }
        return newSelected;
      });
      const firstNew = cardsArray.find(c => !selectedCards.includes(c.id));
      if (firstNew) {
        setFocusedCard(firstNew.id);
      }
    }
  }, [resetAutoRotateTimer, focusedCard, selectedCards]);

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

  const staggerInfo = {};
  const cardsByStarKey = {};
  
  for (const card of selectedCardObjects) {
    const vis = markerVisibility[card.id];
    if (!vis?.screenPos) continue;
    
    const key = `${Math.round(vis.screenPos.x)}_${Math.round(vis.screenPos.y)}`;
    if (!cardsByStarKey[key]) cardsByStarKey[key] = [];
    cardsByStarKey[key].push(card.id);
  }
  
  for (const key of Object.keys(cardsByStarKey)) {
    const ids = cardsByStarKey[key];
    ids.forEach((id, idx) => {
      staggerInfo[id] = { index: idx, total: ids.length };
    });
  }

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

        {selectedCardObjects.map((card, index) => {
          const position = cardPositions[card.id];
          const stagger = staggerInfo[card.id] || { index: 0, total: 1 };
          
          return (
            <PopupCard
              key={card.id}
              card={card}
              visibilityData={markerVisibility}
              position={position}
              anchor={position?.anchor || 'top-left'}
              onClose={handleClosePopup}
              onFocus={handleFocusCard}
              isFocused={focusedCard === card.id}
              zIndex={1000 + index}
              staggerIndex={stagger.index}
              totalInGroup={stagger.total}
              worldScale={worldScale}
              collisionScale={position?.scale || 1}
            />
          );
        })}

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