# QPIC Studio — React Website

Converted from Figma (`qpic-media-web`) into a React + Vite site.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + React Router (4 routes: `/`, `/productions`, `/media`, `/about`)
- **External CSS is the primary styling system** — one `.css` file per component/page (`Home.jsx` + `Home.css`, etc.)
- Tailwind is installed but only used for a few small utilities; `preflight` is disabled so it never fights the external CSS
- Design tokens (colors, type scale, spacing, shadows) centralized in `src/styles/variables.css`
- Scroll-reveal animation via a small `useReveal` hook + IntersectionObserver, respecting `prefers-reduced-motion`
- Fully responsive: desktop, tablet (≤1024px), and mobile (≤767px) breakpoints on every page

## Structure

```
src/
├── components/
│   ├── Navbar/          → sticky glass nav, active-route highlighting
│   └── ContactForm/      → shared form, used inline on every page AND as the "Contact Us" popup modal
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Productions/
│   └── Media/
├── hooks/useReveal.js
└── styles/ (variables.css, global.css, responsive.css)
```

## Important note on assets

- **Home** and **About Us** use the *actual* images pulled directly from your Figma file via the Figma MCP connection (hero visuals, team photos, brand logos). These asset URLs are hosted temporarily by Figma's API and **expire after about 7 days** — before then, download them and swap in local files under `src/assets/` for a production deploy.
- **Productions** and **Media** are much larger frames (16,000px+ and 23,000px+ tall) that exceeded what the Figma tool could return as full design code in one pull. I was only able to retrieve a visual screenshot reference for these two, not the exact per-layer assets/specs. I rebuilt their layout, sections, and copy to closely match what's in the screenshots (service list, "Our Work" project cards, testimonial, free-audit form), but the imagery on those two pages is **placeholder gradients**, not your real photos/thumbnails.

**To finish Productions and Media at full accuracy**, the cleanest path is to let me pull those two frames section-by-section (I can target the individual sub-frames instead of the whole 16k/23k px page at once) — just say the word and I'll continue.
