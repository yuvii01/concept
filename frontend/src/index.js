// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './store.js'; // Ensure this path is correct
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider >
     <App />
  // </Provider>
);
