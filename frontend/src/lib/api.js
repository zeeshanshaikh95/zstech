/**
 * API client.
 *
 * In dev, Vite proxies /api → http://localhost:5000 (see vite.config.js).
 * In production, Vercel/Netlify route /api/* to the Express app (see
 * vercel.json / netlify.toml).
 *
 * If the API is unreachable (e.g. static GitHub Pages hosting), we fall back
 * to the shared site data module so the site still renders fully.
 */
import siteData from '../../../backend/data/siteData.js';

const API_BASE = import.meta.env.VITE_API_URL ?? '';

async function request(path, options) {
  const res = await fetch(`${API_BASE}${path}`, options);
  if (!res.ok) throw new Error(`API ${res.status} on ${path}`);
  return res.json();
}

export async function getSiteData() {
  try {
    const payload = await request('/api/data');
    return payload.data ?? siteData;
  } catch {
    // Offline / static hosting — use the bundled copy (single source of truth).
    return siteData;
  }
}

export async function postContact({ name, email, message }) {
  try {
    const payload = await request('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    return payload;
  } catch (err) {
    // API unavailable — still acknowledge the message so UX isn't broken.
    return { ok: true, offline: true, error: err.message };
  }
}
