import React from 'react';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner">
        <svg viewBox="0 0 50 50">
          <circle 
            cx="25" 
            cy="25" 
            r="20" 
            fill="none" 
            stroke="url(#gradient)" 
            strokeWidth="4"
            strokeDasharray="80, 200"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="loading-text">Loading 3D Globe...</div>
    </div>
  );
}

export default LoadingScreen;
