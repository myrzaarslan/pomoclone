import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import Settings from './Settings.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'

const root = createRoot(document.querySelector('.timer-container'))
root.render(
  < App />  
);

const settings = createRoot(document.getElementById('settings-button'))
settings.render(
  < Settings />  
);