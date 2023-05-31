import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// StrictMode removed to end page-load doubling for viewcounter