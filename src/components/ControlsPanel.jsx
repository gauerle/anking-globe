import React, { useState, useMemo } from 'react';
import { getImageUrl } from '../utils/api';

function ControlsPanel({ 
  cards, 
  selectedCards,
  onToggleCard, 
  onOpenAll,
  onCloseAll,
  onOpenAdmin
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = useMemo(() => {
    if (!searchTerm) return cards;
    const term = searchTerm.toLowerCase();
    return cards.filter(card => 
      card.name.toLowerCase().includes(term) ||
      card.location.toLowerCase().includes(term) ||
      card.title?.toLowerCase().includes(term) ||
      card.university?.toLowerCase().includes(term)
    );
  }, [cards, searchTerm]);

  const openCount = selectedCards?.length || 0;

  return (
    <div className="controls-panel">
      {/* Manage Button */}
      <button className="manage-button" onClick={onOpenAdmin}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        Manage
      </button>

      {/* Members Dropdown */}
      <div className="dropdown-container">
        <button 
          className="dropdown-trigger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <span className="dropdown-trigger-text">
            {openCount === 0 
              ? 'Members' 
              : `${openCount} Card${openCount > 1 ? 's' : ''} Open`}
          </span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
          >
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-search">
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
            
            <div className="dropdown-actions">
              <button className="dropdown-action-btn" onClick={onOpenAll}>
                Open All
              </button>
              <button className="dropdown-action-btn" onClick={onCloseAll}>
                Close All
              </button>
            </div>

            <div className="dropdown-list">
              {filteredCards.length === 0 ? (
                <div className="dropdown-empty">No members found</div>
              ) : (
                filteredCards.map(card => {
                  const isCardOpen = selectedCards?.includes(card.id);
                  return (
                    <button
                      key={card.id}
                      className={`dropdown-item ${isCardOpen ? 'active' : ''}`}
                      onClick={() => onToggleCard(card.id)}
                    >
                      <div className={`checkbox-icon ${isCardOpen ? 'checked' : ''}`}>
                        {isCardOpen && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        )}
                      </div>
                      <div className="dropdown-item-avatar">
                        <img 
                          src={getImageUrl(card.image)} 
                          alt={card.name}
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.name)}&background=9333ea&color=fff&size=36`;
                          }}
                        />
                      </div>
                      <div className="dropdown-item-info">
                        <span className="dropdown-item-name">{card.name}</span>
                        <span className="dropdown-item-location">
                          {card.university ? `${card.university} · ` : ''}{card.location}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ControlsPanel;
