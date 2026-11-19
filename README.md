# ZS Tech — agency website

Websites that actually work. A fast React site for ZS Tech, a web design and
development studio in Hyderabad.

## Stack

- **Frontend:** React 18 + Vite, hand-written CSS (no UI framework)
- **Content:** `backend/data/siteData.js` — one shared source of truth
- **Optional API:** Express (`backend/`) with a Netlify/Vercel wrapper

The frontend imports the site content directly and renders it synchronously, so
the site is fully static and instant on GitHub Pages. No data fetch, no
preloader.

## Structure

```
frontend/
  index.html              fonts, meta, favicon, JSON-LD
  src/
    App.jsx               page composition
    index.css             design system + all styles
    components/           Navbar, Hero, Services, Work, Social, FAQ, Contact…
    hooks/useCounter.js   stat counter
    context/              toast notifications
backend/
  data/siteData.js        services, projects, social plans, testimonials, contact
  routes/                 GET /api/data, POST /api/contact (optional)
```

## Commands

```bash
npm install       # install workspaces
npm run dev       # frontend + optional API
npm run dev:web   # frontend only, http://localhost:5173
npm run build     # production build → frontend/dist
npm run preview   # preview the built site
```

## Deployment

GitHub Pages deploys automatically on every push to `main` via
`.github/workflows/deploy.yml` (builds `frontend/dist`).

A custom domain is linked later by adding a `CNAME` file to the published
output (or via the repository's Pages settings).

## Notes

- The contact form opens WhatsApp with the message pre-filled, so enquiries
  work without a server. The email address is always available as a fallback.
- `POST /api/contact` on the Express backend exists for non-static hosting but
  is not required by the site.
