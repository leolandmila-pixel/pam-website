# PAM Website — Claude & Team Rules

## Git Workflow

**Two branches only: `dev` and `main`**

- `dev` — all feature work and bug fixes land here first
- `main` — production only, auto-deploys to live site via Netlify

### Rules
- All feature branches must be created from `dev`
- Feature branches merge into `dev` via a normal PR (CI must pass: build + lint)
- `dev` → `main` does **not** go through a GitHub PR — merge `dev` into `main` locally and push directly to both remotes (see below). This was a deliberate change from the original PR-gated flow once repo access was sorted out; there is no CI gate on this step, so run `npm run build` locally before pushing to `main`.
- There's a dedicated worktree for `main` at `C:/Users/ashle/pam-main-worktree` (a second checkout of this same repo) — `main` can't be checked out in this primary working directory while that worktree has it checked out, so do the `dev` → `main` merge from there.

### Standard flow
1. Branch from `dev`: `git checkout -b feat/my-feature dev`
2. Make changes, commit, push, open PR → `dev`, CI passes, merge
3. When ready to go live:
   ```bash
   cd C:/Users/ashle/pam-main-worktree
   git fetch origin && git merge origin/main --ff-only
   git merge origin/dev --no-ff -m "Merge dev into main: <summary>"
   npm run build   # must pass before pushing
   git push origin main && git push personal main
   ```

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

`dev` has drifted between the two remotes before (PRs into `dev` only update `origin` unless you also run `git push personal dev`) — check `git log personal/dev..origin/dev` occasionally and push `dev` to `personal` too if it's behind, so a future `dev` → `main` merge isn't accidentally missing work.

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
