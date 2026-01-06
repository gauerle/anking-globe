import React, { useState, useMemo } from 'react';

function ControlsPanel({ 
  cards = [],
  groups = [],
  selectedCards = [],
  visibleCardIds = null,
  autoRotate,
  onAutoRotateChange,
  onToggleCard,
  onToggleCardVisibility,
  onOpenAll,
  onCloseAll,
  onManageClick,
  isEmbedMode
}) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({});
  const [isAllMembersExpanded, setIsAllMembersExpanded] = useState(false);

  const visibleSet = useMemo(() => {
    if (visibleCardIds === null) return new Set(cards.map(c => c.id));
    return visibleCardIds;
  }, [visibleCardIds, cards]);

  const isAllMembersVisible = useMemo(() => {
    return cards.length > 0 && cards.every(card => visibleSet.has(card.id));
  }, [cards, visibleSet]);

  const isAllMembersPartiallyVisible = useMemo(() => {
    const visibleCount = cards.filter(card => visibleSet.has(card.id)).length;
    return visibleCount > 0 && visibleCount < cards.length;
  }, [cards, visibleSet]);

  const getGroupMembers = (group) => {
    return cards.filter(card => group.memberIds?.includes(card.id));
  };

  const isGroupFullyVisible = (group) => {
    const members = getGroupMembers(group);
    return members.length > 0 && members.every(card => visibleSet.has(card.id));
  };

  const isGroupPartiallyVisible = (group) => {
    const members = getGroupMembers(group);
    const visibleCount = members.filter(card => visibleSet.has(card.id)).length;
    return visibleCount > 0 && visibleCount < members.length;
  };

  const toggleGroupExpanded = (groupId) => {
    setExpandedGroups(prev => ({ ...prev, [groupId]: !prev[groupId] }));
  };

  const toggleAllMembersVisibility = () => {
    const allVisible = isAllMembersVisible;
    cards.forEach(card => {
      if (allVisible) {
        if (visibleSet.has(card.id)) onToggleCardVisibility?.(card.id);
      } else {
        if (!visibleSet.has(card.id)) onToggleCardVisibility?.(card.id);
      }
    });
  };

  // Toggle all members of a group (and uncheck All Members if checking a specific group)
  const toggleGroupVisibility = (group) => {
    const members = getGroupMembers(group);
    const allVisible = isGroupFullyVisible(group);
    
    // If we're showing a specific group, hide all members first
    if (!allVisible && isAllMembersVisible) {
      cards.forEach(card => {
        if (visibleSet.has(card.id)) onToggleCardVisibility?.(card.id);
      });
    }
    
    members.forEach(card => {
      if (allVisible) {
        if (visibleSet.has(card.id)) onToggleCardVisibility?.(card.id);
      } else {
        if (!visibleSet.has(card.id)) onToggleCardVisibility?.(card.id);
      }
    });
  };

  if (isEmbedMode) return null;

  return (
    <>
      <button className="controls-toggle" onClick={() => setIsPanelOpen(!isPanelOpen)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>

      {isPanelOpen && (
        <div className="controls-panel">
          <h3>Settings</h3>
          
          <div className="control-item">
            <label className="toggle-label">
              <span>Auto Rotate</span>
              <div className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={autoRotate} 
                  onChange={(e) => onAutoRotateChange?.(e.target.checked)}
                />
                <span className="toggle-slider"></span>
              </div>
            </label>
          </div>

          <div className="control-divider"></div>

          <div className="dropdown-actions" style={{ marginBottom: '12px' }}>
            <button className="dropdown-action-btn" onClick={onOpenAll}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Show Cards
            </button>
            <button className="dropdown-action-btn" onClick={onCloseAll}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
              Hide Cards
            </button>
          </div>

          <div className="control-divider"></div>

          <div className="groups-section">
            <div className="section-label">Groups</div>
            
            {/* All Members Group */}
            <div className="group-dropdown">
              <div className="group-header" onClick={() => setIsAllMembersExpanded(!isAllMembersExpanded)}>
                <div className="group-checkbox-wrapper" onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={isAllMembersVisible}
                    ref={el => { if (el) el.indeterminate = isAllMembersPartiallyVisible; }}
                    onChange={toggleAllMembersVisibility}
                  />
                </div>
                <span className="group-label-text">All Members</span>
                <span className="group-count">({cards.length})</span>
                <svg 
                  width="14" height="14" viewBox="0 0 24 24" 
                  fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: isAllMembersExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginLeft: 'auto' }}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </div>
              
              {isAllMembersExpanded && (
                <div className="group-members">
                  {cards.map(card => (
                    <label key={card.id} className="member-checkbox-item">
                      <input
                        type="checkbox"
                        checked={visibleSet.has(card.id)}
                        onChange={() => onToggleCardVisibility?.(card.id)}
                      />
                      <span className="member-label-text">{card.name}</span>
                      {selectedCards.includes(card.id) && (
                        <span className="card-open-indicator">â—</span>
                      )}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Custom Groups */}
            {groups.map(group => {
              const members = getGroupMembers(group);
              const isExpanded = expandedGroups[group.id];
              const fullyVisible = isGroupFullyVisible(group);
              const partiallyVisible = isGroupPartiallyVisible(group);
              
              return (
                <div key={group.id} className="group-dropdown">
                  <div className="group-header" onClick={() => toggleGroupExpanded(group.id)}>
                    <div className="group-checkbox-wrapper" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={fullyVisible}
                        ref={el => { if (el) el.indeterminate = partiallyVisible; }}
                        onChange={() => toggleGroupVisibility(group)}
                      />
                    </div>
                    <span className="group-label-text">{group.name}</span>
                    <span className="group-count">({members.length})</span>
                    <svg 
                      width="14" height="14" viewBox="0 0 24 24" 
                      fill="none" stroke="currentColor" strokeWidth="2"
                      style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginLeft: 'auto' }}
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                  
                  {isExpanded && (
                    <div className="group-members">
                      {members.length === 0 ? (
                        <div className="empty-group">No members</div>
                      ) : (
                        members.map(card => (
                          <label key={card.id} className="member-checkbox-item">
                            <input
                              type="checkbox"
                              checked={visibleSet.has(card.id)}
                              onChange={() => onToggleCardVisibility?.(card.id)}
                            />
                            <span className="member-label-text">{card.name}</span>
                            {selectedCards.includes(card.id) && (
                              <span className="card-open-indicator">â—</span>
                            )}
                          </label>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="control-divider"></div>

          <button className="manage-btn" onClick={onManageClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Manage Members
          </button>
        </div>
      )}
    </>
  );
}

export default ControlsPanel;