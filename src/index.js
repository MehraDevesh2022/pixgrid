import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <ContextProvider>
      <App />
  </ContextProvider>
  </Router>
);

