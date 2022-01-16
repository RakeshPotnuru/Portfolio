import React from 'react';

import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return (
    <div id="loading-wrapper">
      <div id="loading-content"></div>
      <div id="loading-text">
        LOADING<span></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
