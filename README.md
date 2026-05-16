# ⚔️ The Gifted

> *"You have been chosen by the people of this nation to protect them from the evil in the cave."*

A browser-based fantasy platformer built with pure HTML5 Canvas and JavaScript. No libraries, no frameworks — just code.

---

## 🎮 Play the Game

**[▶ Play Now](https://yourusername.github.io/the-gifted)**

Or open `index.html` in any modern browser (Chrome recommended).

---

## 🕹️ Controls

| Key | Action |
|-----|--------|
| Arrow Keys / WASD | Move |
| Up / W / Space | Jump |
| Shift | Dash |
| Z | Magic Blast |

---

## 📖 Story

An ordinary person, gifted with unnatural powers of magic, speed, and strength, is chosen by the people to protect the nation from a great evil lurking deep within the cave. Battle through 15 levels of increasing danger, defeat powerful bosses every 5 levels, and survive deadly death-run traps.

---

## 🗂️ Project Structure

```
the-gifted/
├── index.html          # The entire game (self-contained)
├── README.md           # This file
├── CHANGELOG.md        # Version history
├── .gitignore          # Git ignore rules
│
├── src/                # Future: split JS source files
│   └── (reserved for refactor)
│
├── assets/             # Future: external assets
│   ├── sprites/        # Character / tile art
│   ├── sounds/         # Music and SFX files
│   └── fonts/          # Custom fonts
│
├── docs/               # Design documents
│   ├── LEVELS.md       # Level design notes
│   ├── CHARACTERS.md   # Character descriptions
│   └── ROADMAP.md      # Planned features
│
└── scripts/            # Utility scripts
    └── build.sh        # Future build/deploy script
```

---

## ✨ Features

- **15 levels** across 5 unique themes (Dark Courtyard, Enchanted Forest, Sky Bridges, Volcanic Descent, Crystal Depths, Void Realm)
- **3 boss fights** (Shadow Knight at level 5, Magma Warlord at level 10, Shadow Lord at level 15)
- **8 playable characters** — original anime-inspired styles
- **Trap system** — spikes, pendulum balls, fireballs, spinning saw blades
- **Crumbling platforms** on select levels
- **Dash, magic blast, and jump** abilities
- **Save system** — 3 manual save slots + auto-save on level completion
- **💡 Ideas panel** — submit and vote on game suggestions
- **Settings** — music/SFX volume, track selection
- **Ban system** — automatic content moderation on idea posts

---

## 🚀 Deployment

### GitHub Pages (recommended)
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your game will be live at `https://yourusername.github.io/the-gifted`

### Netlify Drop
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the entire `the-gifted` folder onto the page
3. Get an instant live URL

### itch.io
1. Zip the project folder
2. Upload to [itch.io](https://itch.io) as an HTML game
3. Check "This file will be played in the browser"

---

## 🛠️ Development

The game is currently a single self-contained HTML file. To make changes:

1. Open `index.html` in a code editor (VS Code recommended)
2. Edit and save
3. Refresh in Chrome to test
4. Commit and push to GitHub

### Recommended VS Code Extensions
- **Live Server** — auto-refresh on save
- **Prettier** — code formatting

---

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md)

---

## 🗺️ Roadmap

See [docs/ROADMAP.md](docs/ROADMAP.md)

---

## 📄 License

This project is open source. Feel free to learn from it, fork it, and build your own version!
