//--- Import de fonction React ---
import React from 'react';
import ReactDOM from 'react-dom/client';

//--- Import de composants ---
import App from './Components/App';

//--- Import du SASS général du site ---
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
