import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeSiteProtection } from './utils/siteProtection'

// Initialize site protection on mount
document.addEventListener('DOMContentLoaded', () => {
  initializeSiteProtection();
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
