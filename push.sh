#!/usr/bin/env bash
# PAM Website — publish changes to the live site
# Usage: ./push.sh "your commit message"
# Run this from inside the pam-website folder.

set -e

COMMIT_MSG="${1}"

# ── 1. Make sure we're in the right place ────────────────────────────────────
if [ ! -f "next.config.ts" ]; then
  echo "❌  Run this script from inside the pam-website folder."
  exit 1
fi

# ── 2. Require a commit message ───────────────────────────────────────────────
if [ -z "$COMMIT_MSG" ]; then
  echo "Usage: ./push.sh \"describe what you changed\""
  exit 1
fi

# ── 3. Make sure we're on dev ─────────────────────────────────────────────────
CURRENT=$(git branch --show-current)
if [ "$CURRENT" != "dev" ]; then
  echo "⚠️  You're on '$CURRENT', switching to dev..."
  git checkout dev
fi

# ── 4. Stage everything, commit, push dev to both remotes ────────────────────
git add .
git commit -m "$COMMIT_MSG"
echo "✅  Committed: $COMMIT_MSG"

git push origin dev
git push personal dev
echo "✅  dev pushed to both remotes"

# ── 5. Merge dev → main, push to both remotes (triggers Netlify deploy) ──────
git checkout main
git merge --ff-only dev
git push origin main
git push personal main
echo "✅  main updated — Netlify is deploying now"

# ── 6. Go back to dev ready for the next change ──────────────────────────────
git checkout dev
echo ""
echo "🚀  Done! Live site will update in ~1 min: https://parentaladminmanager.com"
