import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IsidraApp from './IsidraApp';
import GalleryPage from './GalleryPage';

function Router() {
  const [page, setPage] = useState(
    window.location.hash === '#/galeria' ? 'gallery' : 'home'
  );

  useEffect(() => {
    const onHash = () => {
      setPage(window.location.hash === '#/galeria' ? 'gallery' : 'home');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (to) => {
    window.location.hash = to;
  };

  if (page === 'gallery') return <GalleryPage navigate={navigate} />;
  return <IsidraApp navigate={navigate} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
