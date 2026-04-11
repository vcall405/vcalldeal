import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import IsidraApp from './IsidraApp';
import GalleryPage from './GalleryPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<IsidraApp />} />
        <Route path="/galeria" element={<GalleryPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
