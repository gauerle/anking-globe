import React from 'react';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
