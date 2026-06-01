# PAM Marketing Website

The marketing site for **PAM — Parental Admin Manager**: an app that helps modern families carry the mental load without burning out. Built around our founders' story and the "calm by design" brand voice.

Live URL: _coming soon_

---

## Stack

- **[Next.js 15](https://nextjs.org/)** (App Router, Turbopack dev server)
- **React 19**
- **Tailwind v4** + custom CSS tokens in [app/globals.css](app/globals.css) (wine palette, Instrument Serif + Inter)
- **TypeScript**
- Hosted on Vercel (planned)

No client component libraries beyond a few lightweight Radix primitives.

---

## Local development

```bash
# 1. Install
npm install

# 2. Run the dev server (Turbopack, port 3001)
npm run dev

# Open http://localhost:3001
```

Other scripts:

```bash
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint
```

---

## Project structure

```
app/
├── page.tsx              # Home — hero, phone showcase, "day in the life" timeline, testimonials
├── about/                # Founders story + values
├── stories/              # Real Mums Real Stories — blog/articles index
├── contact/              # Contact form (TODO: wire to Ortto / n8n)
├── faq/                  # FAQ with category filter
├── layout.tsx            # Root layout (fonts, nav, footer)
├── globals.css           # Wine palette, typography, component CSS
├── metadata.ts           # Per-route SEO metadata
├── sitemap.ts            # Sitemap generation
├── robots.ts             # Robots config
└── structured-data.ts    # JSON-LD for organisation + product

components/
├── Nav.tsx               # Sticky pill nav
├── Footer.tsx
├── PhoneShowcase.tsx     # Floating phone with rotating screens
├── FoundingListForm.tsx  # Email capture (waitlist)
├── ContactForm.tsx       # Contact form
└── FaqList.tsx           # Accordion + filter pills

public/                   # Static assets — phone screenshots, hero video, logo
lib/                      # Small utilities (e.g. cn helper)
```

---

## Brand tokens (quick reference)

| Token            | Hex       | Use                            |
|------------------|-----------|--------------------------------|
| `--wine`         | `#6D0015` | Primary brand colour           |
| `--wine-deep`    | `#4A0010` | Darker accents, gradients      |
| `--blush`        | `#AF686B` | Highlights, secondary accents  |
| `--blush-soft`   | `#F1DBDC` | Soft backgrounds, halos        |
| `--cream`        | `#FFFBF8` | Page background                |
| `--ink`          | `#31364A` | Body text                      |
| `--tan`          | `#C5A085` | Earthy accent                  |

Fonts:
- **Display:** `Instrument Serif` (headings, italic emphasis in wine)
- **Body:** `Inter`

---

## Contributing

We work in branches and merge via PR. The repo owner (**Doug**) controls all merges to `main`.

```bash
# 1. Create a branch off main
git checkout main && git pull
git checkout -b feat/your-feature-name

# 2. Make changes, commit often
git add <files>
git commit -m "feat: brief description"

# 3. Push the branch
git push -u origin feat/your-feature-name

# 4. Open a PR on GitHub
gh pr create
```

### Branch naming

- `feat/...` — new features or sections
- `fix/...` — bug fixes
- `chore/...` — tooling, deps, refactors
- `content/...` — copy, asset, or page-content updates

### Pull request expectations

- Run `npm run lint` before pushing
- Include before/after screenshots for any visual change
- Keep PRs focused — one logical change per PR where possible
- Tag Doug as reviewer; he merges

### What lives outside this repo

- Final design source: Figma
- iOS app: [`pam-mobile`](https://github.com/Parental-Admin-Manager/pam-mobile)
- Backend / functions: [`pam-backend`](https://github.com/Parental-Admin-Manager/pam-backend), [`pam-functions`](https://github.com/Parental-Admin-Manager/pam-functions)
- Admin panel: [`pam-admin-panel`](https://github.com/Parental-Admin-Manager/pam-admin-panel)

---

## TODO (not yet wired)

- Email capture (`FoundingListForm`) → Ortto audience or n8n webhook
- Contact form → email backend / Ortto
- Replace gradient placeholders in "A day in the life" timeline with real photos
- Stories/blog content (currently dummy copy)
- Hook up Vercel deployment

---

© 2026 PAM. Made in Australia.
