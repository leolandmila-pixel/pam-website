# PAM Website — Claude & Team Rules

## Git Workflow

**Two branches only: `dev` and `main`**

- `dev` — all feature work and bug fixes land here first
- `main` — production only, auto-deploys to live site via Netlify

### Rules
- Never commit or push directly to `main`
- Never open a PR directly to `main` (only `dev` → `main` PRs are allowed)
- All feature branches must be created from `dev`
- All PRs must pass CI checks (build + lint) before merging

### Standard PR flow
1. Branch from `dev`: `git checkout -b feat/my-feature dev`
2. Make changes, commit, push
3. Open PR → `dev`
4. CI checks pass → merge to `dev`
5. When ready to go live → open PR from `dev` → `main`
6. CI checks pass → merge → Netlify auto-deploys

## Dual Remote — Always Push to Both

This repo has two remotes that must always stay in sync:

- `origin` → `Parental-Admin-Manager/pam-website` (org repo, source of truth)
- `personal` → `leolandmila-pixel/pam-website` (personal account, Netlify deploys from here)

After every merge, push to both:
```bash
git push origin main && git push personal main
git push origin dev && git push personal dev
```

Netlify only watches the `personal` remote — if you only push to `origin`, the live site will not update.

## Build

- Build command: `npm run build` (runs `next build` only — do not add `next export`)
- Publish directory: `.next`
- Node version: 22.x

## Tech Stack

- Next.js 16 (App Router)
- TypeScript / TSX
- Tailwind CSS v4
- Hosted on Netlify via `leolandmila-pixel/pam-website`

## Design Tokens

CSS custom properties defined in `app/globals.css`:
- `--wine` — primary brand colour
- `--tan` — warm background
- `--ink` — body text

## Key Conventions

- Feature pages live at `app/features/<name>/page.tsx`
- Images go in `public/` — reference as `/filename.png`
- Nav items defined in `components/Nav.tsx`
- All metadata defined in `app/metadata.ts` — update here first, not in individual pages
