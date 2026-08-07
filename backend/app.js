import express from 'express';
import cors from 'cors';

import dataRouter from './routes/data.js';
import contactRouter from './routes/contact.js';

const app = express();

// --- standard middleware ---
app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true }));

// --- API routes ---
app.use('/api/data', dataRouter);
app.use('/api/contact', contactRouter);

// --- health check ---
app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'zstech-api', uptime: process.uptime() });
});

// --- 404 for unknown API routes ---
app.use('/api', (req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' });
});

export default app;
