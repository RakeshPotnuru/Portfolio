import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
