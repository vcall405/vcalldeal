import React, { useState, useRef, useEffect } from 'react';

const API_URL = 'https://vcalldeal-gallery.vercel.app';
const SECRET_PIN = '0961'; // client-side UX only; server validates too

function compressImage(file, maxWidth = 1400, quality = 0.78) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    img.src = url;
  });
}

export default function GalleryPage({ navigate }) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null); // index of open photo
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState(['', '', '', '']);
  const [pinError, setPinError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const fileInputRef = useRef(null);
  const pinRefs = [useRef(), useRef(), useRef(), useRef()];
  const confirmedPinRef = useRef(''); // holds PIN between modal confirm and file upload

  // Load photos from API on mount
  useEffect(() => {
    fetch(`${API_URL}/api/gallery`)
      .then((r) => r.json())
      .then(setPhotos)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Close lightbox on Escape / arrow keys
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight' && lightbox !== null) setLightbox((i) => Math.min(i + 1, photos.length - 1));
      if (e.key === 'ArrowLeft' && lightbox !== null) setLightbox((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, photos.length]);

  // Focus first PIN input when modal opens
  useEffect(() => {
    if (showPinModal) {
      setTimeout(() => pinRefs[0].current?.focus(), 100);
    }
  }, [showPinModal]);

  const handlePinChange = (value, idx) => {
    if (!/^\d*$/.test(value)) return;
    const next = [...pin];
    next[idx] = value.slice(-1);
    setPin(next);
    setPinError(false);
    if (value && idx < 3) pinRefs[idx + 1].current?.focus();
    // auto-submit when 4th digit filled
    if (value && idx === 3) {
      const full = [...next.slice(0, 3), value.slice(-1)].join('');
      if (full === SECRET_PIN) {
        confirmPin(full);
      } else {
        setPinError(true);
        setPin(['', '', '', '']);
        setTimeout(() => pinRefs[0].current?.focus(), 50);
      }
    }
  };

  const handlePinKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !pin[idx] && idx > 0) {
      pinRefs[idx - 1].current?.focus();
    }
    if (e.key === 'Enter') submitPin();
  };

  const submitPin = () => {
    const full = pin.join('');
    if (full === SECRET_PIN) {
      confirmPin(full);
    } else {
      setPinError(true);
      setPin(['', '', '', '']);
      setTimeout(() => pinRefs[0].current?.focus(), 50);
    }
  };

  const confirmPin = (full) => {
    confirmedPinRef.current = full;
    setShowPinModal(false);
    setPin(['', '', '', '']);
    setPinError(false);
    fileInputRef.current?.click();
  };

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setUploading(true);
    setUploadError(false);

    const newPhotos = [...photos];
    for (const file of files) {
      if (!file.type.startsWith('image/')) continue;
      const compressed = await compressImage(file);
      const uploadedAt = new Date().toLocaleDateString('es-US', {
        year: 'numeric', month: 'long', day: 'numeric',
      });

      try {
        const res = await fetch(`${API_URL}/api/gallery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pin: confirmedPinRef.current, src: compressed, uploadedAt }),
        });

        if (res.ok) {
          const photo = await res.json();
          newPhotos.push(photo);
        } else {
          setUploadError(true);
          break;
        }
      } catch {
        setUploadError(true);
        break;
      }
    }

    setPhotos(newPhotos);
    setUploading(false);
    confirmedPinRef.current = '';
    e.target.value = '';
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-40 bg-gray-950/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('#/')}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm font-semibold"
          >
            ← Inicio
          </button>
          <span className="text-gray-700">|</span>
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white">Isidra Cosme</span>
            <span className="hidden sm:inline text-xs font-semibold bg-amber-500 text-gray-950 px-2 py-0.5 rounded-full uppercase tracking-wide">Mis Viajes</span>
          </div>
        </div>

        <button
          onClick={() => { setPinError(false); setPin(['', '', '', '']); setShowPinModal(true); }}
          disabled={uploading}
          className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-gray-950 font-black text-sm px-4 py-2 rounded-xl transition-colors"
        >
          {uploading ? (
            <><span className="animate-spin">⏳</span> Subiendo...</>
          ) : (
            <><span>📷</span> Subir Fotos</>
          )}
        </button>
      </header>

      {/* ── HERO ── */}
      <section
        className="relative py-16 px-6 text-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="relative z-10">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2">Galería de Viajes</p>
          <h1 className="text-4xl md:text-5xl font-black mb-3">Mis Aventuras por el Mundo 🌊</h1>
          <p className="text-gray-300 text-lg">{photos.length} {photos.length === 1 ? 'foto' : 'fotos'} compartidas</p>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="px-4 py-12 max-w-7xl mx-auto">
        {uploadError && (
          <div className="mb-6 bg-red-900/40 border border-red-500/50 rounded-2xl p-4 text-red-300 text-sm text-center">
            ⚠️ Error al subir las fotos. Verifica tu conexión e intenta de nuevo.
          </div>
        )}

        {loading ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-xl font-semibold animate-pulse">Cargando fotos...</p>
          </div>
        ) : photos.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-7xl mb-6">🏝️</p>
            <p className="text-gray-400 text-xl font-semibold">Aún no hay fotos</p>
            <p className="text-gray-600 text-sm mt-2">Las fotos de viaje aparecerán aquí</p>
          </div>
        ) : (
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={photo.src}
                  alt={`Viaje ${idx + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-2xl flex items-end p-3">
                  <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    {photo.uploadedAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Prev */}
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i - 1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
            >
              ‹
            </button>
          )}
          <img
            src={photos[lightbox]?.src}
            alt="Foto viaje"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {/* Next */}
          {lightbox < photos.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((i) => i + 1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-2xl w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
            >
              ›
            </button>
          )}
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-xl w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          >
            ✕
          </button>
          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}

      {/* ── PIN MODAL ── */}
      {showPinModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={(e) => { if (e.target === e.currentTarget) { setShowPinModal(false); setPin(['', '', '', '']); }}}
        >
          <div className="bg-gray-900 border border-white/15 rounded-3xl p-8 w-full max-w-sm text-center shadow-2xl">
            <div className="text-5xl mb-4">🔐</div>
            <h2 className="text-xl font-black text-white mb-1">Acceso restringido</h2>
            <p className="text-gray-400 text-sm mb-8">Ingresa el PIN de 4 dígitos para subir fotos</p>

            {/* PIN inputs */}
            <div className="flex gap-3 justify-center mb-6">
              {pin.map((digit, idx) => (
                <input
                  key={idx}
                  id={`pin-${idx}`}
                  ref={pinRefs[idx]}
                  type="password"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePinChange(e.target.value, idx)}
                  onKeyDown={(e) => handlePinKeyDown(e, idx)}
                  className={`w-14 h-14 text-center text-2xl font-black rounded-xl border-2 bg-gray-800 text-white focus:outline-none transition-colors ${
                    pinError
                      ? 'border-red-500 bg-red-900/30'
                      : digit
                      ? 'border-amber-500 bg-gray-700'
                      : 'border-gray-600 focus:border-amber-500'
                  }`}
                />
              ))}
            </div>

            {pinError && (
              <p className="text-red-400 text-sm font-semibold mb-4">PIN incorrecto. Intenta de nuevo.</p>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => { setShowPinModal(false); setPin(['', '', '', '']); setPinError(false); }}
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 font-bold py-3 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={submitPin}
                disabled={pin.join('').length < 4}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-gray-950 font-black py-3 rounded-xl transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFiles}
      />

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 px-6 text-center mt-10">
        <p className="text-gray-600 text-xs">© 2025 Isidra Cosme · Galería de Viajes · inCruises</p>
      </footer>
    </div>
  );
}
