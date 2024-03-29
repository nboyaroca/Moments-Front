import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './application/Router';
import './index.css';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router />);

reportWebVitals();
