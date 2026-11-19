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

The site is served on the custom domain **zstech.space** (see
`frontend/public/CNAME`). DNS lives at Spaceship:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `zeeshanshaikh95.github.io` |

Remove the old Spaceship parking A records. In the repository, Pages →
Custom domain is `zstech.space` with **Enforce HTTPS** enabled.
`robots.txt` and `sitemap.xml` in `frontend/public` point at the domain.

## Notes

- The contact form opens WhatsApp with the message pre-filled, so enquiries
  work without a server. The email address is always available as a fallback.
- `POST /api/contact` on the Express backend exists for non-static hosting but
  is not required by the site.
