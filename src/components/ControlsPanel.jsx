import React, { useState } from 'react';

function ControlsPanel({ 
  cards = [],
  selectedCards = [],
  autoRotate,
  onAutoRotateChange,
  onToggleCard,
  onOpenAll,
  onCloseAll,
  onManageClick,
  isEmbedMode
}) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (isEmbedMode) return null;

  return (
    <>
      {/* Settings Toggle Button */}
      <button className="controls-toggle" onClick={() => setIsPanelOpen(!isPanelOpen)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </button>

      {/* Settings Panel */}
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

          {/* Member Dropdown */}
          <div className="control-item dropdown-section">
            <button 
              className="dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>Members ({cards.length})</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="member-dropdown">
                <div className="dropdown-actions">
                  <button className="dropdown-action-btn" onClick={onOpenAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    Show All
                  </button>
                  <button className="dropdown-action-btn" onClick={onCloseAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                    Hide All
                  </button>
                </div>
                
                <div className="member-list">
                  {cards.map(card => (
                    <button
                      key={card.id}
                      className={`member-item ${selectedCards.includes(card.id) ? 'selected' : ''}`}
                      onClick={() => onToggleCard?.(card.id)}
                    >
                      <span className="member-name">{card.name}</span>
                      <span className="member-location">{card.location}</span>
                      {selectedCards.includes(card.id) && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="control-divider"></div>

          {/* Manage Members Button */}
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
