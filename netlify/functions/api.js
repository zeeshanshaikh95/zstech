// Netlify Function entry — wraps the Express app with serverless-http.
// netlify.toml redirects /api/* to /.netlify/functions/api/:splat.
import serverless from 'serverless-http';
import app from '../../backend/app.js';

export const handler = serverless(app);
