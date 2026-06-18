# RemoteRecruit — Home Page

A pixel-faithful, fully responsive recreation of the RemoteRecruit "Features" home page from the
provided Figma file, built as a real React application.

**Live demo:** https://remoterecruit.netlify.app/
**Repo:** _add your GitHub URL here after pushing_

## Tech stack

- **React 18** (via Vite 5) — component-based architecture, one component per visual section
- **Tailwind CSS 3** — utility-first styling, custom theme tokens for the brand palette
- **lucide-react** — lightweight icon set (search, checkmarks, social icons, arrows, etc.)
- **@fontsource/poppins** — self-hosted Poppins font files (no external Google Fonts request,
  which keeps the page fully functional offline and avoids a render-blocking third-party request)
- No animation library — scroll reveals are driven by a ~30-line `useReveal` hook built on
  `IntersectionObserver`, kept dependency-free for a smaller bundle and faster load

## Project structure

```
src/
  components/
    Navbar.jsx          sticky header, mobile menu
    Hero.jsx             top banner with gradient + wave divider
    FeatureSection.jsx   reusable alternating text/graphic layout
    JobBoardMockup.jsx    "Global Reach" feature graphic
    MembershipMockup.jsx  "Fee-Free Forever" feature graphic
    ProfileMockup.jsx     "Showcase Your Talent" feature graphic
    DashboardMockup.jsx   full app screenshot used in the CTA section
    CTASection.jsx        "Help is only a few clicks away" band
    FAQ.jsx                "Common Questions" accordion
    Pricing.jsx            Free vs Premium plan cards
    Footer.jsx
    ScrollToTop.jsx
    Reveal.jsx             scroll-reveal wrapper (fade + slide up)
    Avatar.jsx / Logo.jsx / RRMark.jsx   small shared visual primitives
  hooks/
    useReveal.js          IntersectionObserver hook behind Reveal.jsx
  App.jsx
  main.jsx
  index.css
```

## Setup

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

Requires Node 18+.

## Design fidelity notes

- Colors, gradients, spacing, type sizes, and copy were taken directly from the Figma export
  (layer-by-layer CSS spec) and cross-checked against exported screenshots of every section,
  for both the desktop and the responsive breakpoints.
- Breakpoints: the layout collapses to a single column under `lg` (1024px) for feature sections
  and the CTA, and the dashboard mockup progressively hides its side columns (filters, then nav)
  on `md`/`sm` to stay legible on phones.

## Known deviations from the design (intentional)

- **Placeholder avatars.** The original Figma file uses a still image of a copyrighted animated
  film character as a stand-in for testimonial headshots ("Felonious Gru"). Those images aren't
  reproduced here — generic gradient initials avatars are used instead. The mock names/copy are
  kept since the brief explicitly calls for mock data in places like this.
- **Sticky navbar.** In the Figma file the header only exists on top of the hero. Here it's a
  `position: fixed` bar that goes from transparent to a frosted dark panel on scroll, so the
  logo and "Sign Up" CTA stay reachable on a page this long. Visual style (logo, link styling,
  pill button) matches the original.
- **FAQ accordion.** The design shows all three answers expanded at once; here they're collapsible
  (first one open by default) since that's the standard, more scannable pattern for a longer FAQ
  list and was an easy place to add a genuine interactive element.
- **Mockup graphics are real markup, not images.** The "Let's Find Work" dashboard, the profile
  card, and the membership card are built with actual HTML/CSS/SVG rather than embedded screenshots.
  This was a deliberate choice for performance (no large raster assets to lazy-load, smaller
  payload, crisp at any pixel density) and to avoid shipping a static screenshot that doesn't
  resize gracefully on mobile.

## Functional requirements checklist

- [x] React + Tailwind, component-based
- [x] Responsive desktop / tablet / mobile
- [x] Scroll-triggered fade-up reveals on every section (`prefers-reduced-motion` respected)
- [x] Hover/transition states on all interactive elements (nav links, buttons, FAQ rows, social icons)
- [x] Mock data for the "Common Questions" section
- [x] Scroll-to-top button (appears after ~600px of scroll)
- [x] No external image assets to lazy-load — all graphics are CSS/SVG, so there's nothing
      heavy blocking first paint; if real product screenshots are swapped in later, add
      `loading="lazy"` to those `<img>` tags
- [x] Accessibility: semantic landmarks, visible focus rings, `aria-label`/`aria-expanded` on
      interactive controls, alt text via `role="img"`/`aria-label` on avatar placeholders,
      skip-to-content link, decorative shapes marked `aria-hidden`

## Lighthouse (production build, local run)

| Category       | Score |
|-----------------|-------|
| Performance      | 99   |
| Accessibility    | 100  |
| Best Practices   | 100  |
| SEO              | 100  |

(Run `npm run build && npm run preview`, then audit `http://localhost:4173` with Chrome
DevTools → Lighthouse, or the `lighthouse` CLI, to reproduce.)

## Deploying

**Vercel**
```bash
npm i -g vercel
vercel        # first deploy, follow prompts (framework preset: Vite)
vercel --prod
```

**Netlify**
```bash
npm run build
# drag-and-drop the dist/ folder at app.netlify.com, or:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## Known issues / limitations

- The Figma file was view-only, so exact pixel values were derived from the exported CSS spec
  and reference screenshots rather than live inspection in Figma's dev mode; spacing should be
  within a few pixels of the source on standard breakpoints.
- The FAQ section's "More Questions" button and the nav's "Home / Features / Pricing / F.A.Q"
  links point to in-page anchors; there's no separate FAQ/pricing page since the brief scope is
  the single home page.
