const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const PIN = process.env.GALLERY_PIN || '0961';
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const DATA_FILE = path.join(__dirname, 'photos.json');
const API_BASE = process.env.API_BASE_URL || 'https://gallery.vcallia.com';

// Create uploads directory if it doesn't exist
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

app.use(cors({
  origin: [
    'https://vcall405.github.io',
    'http://localhost:5173',
  ],
}));

app.use(express.json({ limit: '15mb' }));

// Serve uploaded images as static files
app.use('/uploads', express.static(UPLOADS_DIR));

function loadPhotos() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function savePhotos(photos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(photos, null, 2));
}

// GET /api/photos — returns all photos
app.get('/api/photos', (req, res) => {
  res.json(loadPhotos());
});

// POST /api/upload — saves a photo (requires PIN)
app.post('/api/upload', (req, res) => {
  const { pin, src, uploadedAt } = req.body;

  if (pin !== PIN) {
    return res.status(403).json({ error: 'PIN incorrecto' });
  }

  // src is a base64 data URL: "data:image/jpeg;base64,..."
  const match = src.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!match) {
    return res.status(400).json({ error: 'Imagen inválida' });
  }

  const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
  const buffer = Buffer.from(match[2], 'base64');
  const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const filename = `${id}.${ext}`;

  fs.writeFileSync(path.join(UPLOADS_DIR, filename), buffer);

  const photo = {
    id,
    src: `${API_BASE}/uploads/${filename}`,
    uploadedAt: uploadedAt || new Date().toLocaleDateString('es-US', {
      year: 'numeric', month: 'long', day: 'numeric',
    }),
  };

  const photos = loadPhotos();
  photos.push(photo);
  savePhotos(photos);

  res.json(photo);
});

// DELETE /api/photos/:id — deletes a photo (requires PIN)
app.delete('/api/photos/:id', (req, res) => {
  const { pin } = req.body;

  if (pin !== PIN) {
    return res.status(403).json({ error: 'PIN incorrecto' });
  }

  const photos = loadPhotos();
  const idx = photos.findIndex((p) => p.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Foto no encontrada' });
  }

  const [photo] = photos.splice(idx, 1);
  const filename = path.basename(photo.src);
  const filePath = path.join(UPLOADS_DIR, filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  savePhotos(photos);
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Gallery API running on port ${PORT}`);
});
