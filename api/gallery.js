import { put, del, list } from '@vercel/blob';

const SECRET_PIN = '0961';

function validatePin(pin) {
  return pin === SECRET_PIN;
}

let photosCache = [];

async function loadPhotos() {
  try {
    const { blobs } = await list({ prefix: 'photo-' });
    photosCache = blobs
      .filter(b => b.pathname.startsWith('photo-') && !b.pathname.endsWith('.json'))
      .map(b => {
        const matches = b.pathname.match(/photo-(.+?)--(.+?)\.jpg$/);
        if (matches) {
          return {
            id: matches[1],
            uploadedAt: decodeURIComponent(matches[2]),
            src: b.downloadUrl,
          };
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
    return photosCache;
  } catch (err) {
    console.error('Failed to load photos:', err);
    return [];
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const photos = await loadPhotos();
      return res.status(200).json(photos);
    } catch (err) {
      console.error('GET error:', err);
      return res.status(500).json({ error: 'Failed to fetch photos' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { pin, src, uploadedAt } = req.body;

      if (!validatePin(pin)) {
        return res.status(401).json({ error: 'Invalid PIN' });
      }

      if (!src || !uploadedAt) {
        return res.status(400).json({ error: 'Missing src or uploadedAt' });
      }

      const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const fileName = `photo-${id}--${encodeURIComponent(uploadedAt)}.jpg`;

      const blob = await put(fileName, Buffer.from(src.split(',')[1], 'base64'), {
        access: 'public',
        contentType: 'image/jpeg',
      });

      const photo = {
        id,
        uploadedAt,
        src: blob.url,
      };
      photosCache.unshift(photo);

      return res.status(200).json(photo);
    } catch (err) {
      console.error('POST error:', err);
      return res.status(500).json({ error: 'Failed to upload photo' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { pin, id } = req.body;

      if (!validatePin(pin)) {
        return res.status(401).json({ error: 'Invalid PIN' });
      }

      if (!id) {
        return res.status(400).json({ error: 'Missing photo ID' });
      }

      const { blobs } = await list({ prefix: `photo-${id}--` });
      if (blobs.length > 0) {
        await del(blobs[0].pathname);
      }

      photosCache = photosCache.filter(p => p.id !== id);

      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('DELETE error:', err);
      return res.status(500).json({ error: 'Failed to delete photo' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
