# ZS TECH — Full-Stack Agency Website

WE BUILD WEBSITES THAT WORK. A modular rebuild of the original single-file site into a
React (Vite + Tailwind) frontend with a Node.js (Express) API, deployed as a monorepo.

## Structure

```
.
├── frontend/               # React + Vite + Tailwind single-page app
│   ├── src/
│   │   ├── components/     # UI pieces (Header, Hero, Services, Work, Footer…)
│   │   ├── hooks/          # useTypewriter, useCounter, useTilt, useEasterEggs…
│   │   ├── context/        # ToastContext (global toast notifications)
│   │   ├── lib/            # api.js — API client with offline fallback
│   │   └── index.css       # Tailwind + design system
│   └── vite.config.js      # dev proxy: /api → localhost:5000
├── backend/                # Node.js + Express API
│   ├── server.js           # entry point (PORT 5000)
│   ├── app.js              # Express app (cors, express.json, routes)
│   ├── routes/             # GET /api/data, POST /api/contact
│   └── data/siteData.js    # single source of truth for all site content
├── api/index.js            # Vercel serverless wrapper (monorepo deploy)
├── netlify/functions/api.js# Netlify Functions wrapper (monorepo deploy)
├── vercel.json             # Vercel monorepo config
└── netlify.toml            # Netlify monorepo config
```

## Getting started

```bash
npm install          # installs both workspaces (frontend + backend)
npm run dev          # starts API (:5000) + web (:5173) together
```

- Frontend only: `npm run dev:web` — open http://localhost:5173
- Backend only: `npm run dev:api` — API at http://localhost:5000
- Production build: `npm run build` → `frontend/dist`

## API

| Method | Route          | Description                                        |
| ------ | -------------- | -------------------------------------------------- |
| GET    | `/api/data`    | Full site content (services, projects, stats…)     |
| POST   | `/api/contact` | Contact form → `{ name, email, message }`          |
| GET    | `/api/health`  | Health check                                       |

The frontend fetches `/api/data` on load. In dev, Vite proxies `/api/*` to Express. If the
API is unreachable (e.g. static hosting), the frontend falls back to the shared
`backend/data/siteData.js`, so the site always renders.

## Deployment

### Vercel (recommended, full-stack)
Import the repo — `vercel.json` builds the frontend and routes `/api/*` to the Express
app via `api/index.js`. One project serves both.

### Netlify (full-stack)
`netlify.toml` builds the frontend (`frontend/dist`) and serves the Express API through
`netlify/functions/api.js`. Deploy via the Netlify dashboard or CLI: `netlify deploy`.

### GitHub Pages (static only)
The `.github/workflows/deploy.yml` builds and deploys `frontend/dist`. Note: Pages cannot
run the Express API — the frontend automatically uses its offline fallback data, so the
site still works, but the contact form runs in "offline" mode.

## Easter eggs

- Press **Z** — rainbow mode 🌈
- Click the **ZS logo** 5 times — particle burst 🎉
