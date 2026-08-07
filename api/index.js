// Vercel serverless entry — re-exports the Express app.
// Vercel maps /api/* to this function via vercel.json rewrites.
import app from '../backend/app.js';

export default app;
