#!/bin/bash
# scripts/build.sh — The Gifted deploy helper

echo "⚔️  The Gifted — Build Script"
echo "================================"

# Check that index.html exists
if [ ! -f "index.html" ]; then
  echo "❌ Error: index.html not found. Run from project root."
  exit 1
fi

# Get file size
SIZE=$(wc -c < index.html)
echo "✓ index.html found ($SIZE bytes)"

# Check git status
if git rev-parse --git-dir > /dev/null 2>&1; then
  BRANCH=$(git branch --show-current)
  echo "✓ Git repo on branch: $BRANCH"
  
  # Show uncommitted changes
  CHANGES=$(git status --short | wc -l)
  if [ "$CHANGES" -gt "0" ]; then
    echo "⚠  $CHANGES uncommitted change(s):"
    git status --short
    echo ""
    read -p "Commit and push? (y/n): " CONFIRM
    if [ "$CONFIRM" = "y" ]; then
      read -p "Commit message: " MSG
      git add -A
      git commit -m "$MSG"
      git push
      echo "✅ Pushed to GitHub!"
      echo ""
      echo "🌐 Your game will be live in ~1 minute at:"
      REMOTE=$(git remote get-url origin 2>/dev/null)
      echo "   GitHub Pages: check your repo Settings > Pages"
    fi
  else
    echo "✓ Nothing to commit — repo is clean"
    read -p "Push anyway? (y/n): " PUSH
    if [ "$PUSH" = "y" ]; then
      git push
      echo "✅ Pushed!"
    fi
  fi
else
  echo "⚠  Not a git repo yet."
  echo ""
  echo "To set up git, run:"
  echo "  git init"
  echo "  git add -A"
  echo "  git commit -m 'Initial commit'"
  echo "  git remote add origin https://github.com/YOURUSERNAME/the-gifted.git"
  echo "  git push -u origin main"
fi

echo ""
echo "Done! ⚔️"
