// Vercel Serverless Function — handles all gallery operations
// GET    /api/gallery  → list photos
// POST   /api/gallery  → upload photo (requires PIN)
// DELETE /api/gallery  → delete photo (requires PIN)

import { put, del, list } from '@vercel/blob';

const PIN = process.env.GALLERY_PIN;
const INDEX_KEY = 'photos/index.json';

// Allow both GitHub Pages and Vercel origins
const ALLOWED_ORIGINS = [
  'https://vcall405.github.io',
  'https://vcalldeal.vercel.app',
];

function setCors(req, res, method) {
  const origin = req.headers.origin || '';
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', `${method}, OPTIONS`);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

async function readIndex() {
  try {
    const { blobs } = await list({ prefix: INDEX_KEY });
    if (!blobs.length) return [];
    const response = await fetch(`${blobs[0].url}?v=${Date.now()}`);
    if (!response.ok) return [];
    return await response.json();
  } catch {
    return [];
  }
}

async function writeIndex(photos) {
  await put(INDEX_KEY, JSON.stringify(photos), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
  });
}

export default async function handler(req, res) {
  const method = req.method;

  // CORS preflight
  if (method === 'OPTIONS') {
    setCors(req, res, 'GET, POST, DELETE');
    return res.status(200).end();
  }

  // ── GET: list all photos ────────────────────────────────────────────────
  if (method === 'GET') {
    setCors(req, res, 'GET');
    const photos = await readIndex();
    return res.json(photos);
  }

  // ── POST: upload a photo ────────────────────────────────────────────────
  if (method === 'POST') {
    setCors(req, res, 'POST');

    const { pin, src, uploadedAt } = req.body || {};

    if (!pin || pin !== PIN) {
      return res.status(403).json({ error: 'PIN incorrecto' });
    }

    const match = typeof src === 'string'
      ? src.match(/^data:image\/(\w+);base64,(.+)$/)
      : null;

    if (!match) {
      return res.status(400).json({ error: 'Imagen inválida' });
    }

    const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
    const buffer = Buffer.from(match[2], 'base64');
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    try {
      const blob = await put(`photos/${id}.${ext}`, buffer, {
        access: 'public',
        contentType: `image/${match[1]}`,
      });

      const photo = {
        id,
        src: blob.url,
        uploadedAt: uploadedAt || new Date().toLocaleDateString('es-US', {
          year: 'numeric', month: 'long', day: 'numeric',
        }),
      };

      const photos = await readIndex();
      photos.push(photo);
      await writeIndex(photos);

      return res.json(photo);
    } catch (err) {
      console.error('Upload error:', err);
      return res.status(500).json({ error: 'Error al guardar la foto' });
    }
  }

  // ── DELETE: remove a photo ──────────────────────────────────────────────
  if (method === 'DELETE') {
    setCors(req, res, 'DELETE');

    const { pin, id, src } = req.body || {};

    if (!pin || pin !== PIN) {
      return res.status(403).json({ error: 'PIN incorrecto' });
    }

    try {
      if (src) await del(src);
      const photos = await readIndex();
      await writeIndex(photos.filter((p) => p.id !== id));
      return res.json({ ok: true });
    } catch (err) {
      console.error('Delete error:', err);
      return res.status(500).json({ error: 'Error al eliminar la foto' });
    }
  }

  res.status(405).end();
}
