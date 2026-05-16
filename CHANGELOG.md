# Changelog — The Gifted

All notable changes to this project are documented here.

---

## [1.0.0] — 2026-05-16 — Initial Release

### Added
- 15 levels across 6 visual themes
- 3 boss fights (level 5, 10, 15)
- 8 playable characters with anime-inspired designs
- Intro story screen with animated text reveal
- Character select screen with live animated previews
- Trap system: spikes, pendulums, fireballs, saw blades
- Crumbling platforms on select levels
- Player abilities: move, jump, dash, magic blast
- Boss minions on final level (5 minions, one-shot kill)
- 3-slot save system with auto-save
- Settings panel: music/SFX volume, track select
- 💡 Ideas panel with voting and delete own post
- Auto-ban system for NSFW / inappropriate content
- Full screen canvas with auto-resize
- Defined character body with two eyes, cape, armor, animations
- Portal door with stone archway on every level
- Score system (coins +10, level clear +60, boss kill +300)

### Fixed
- Character drift when keys released
- Level skip bug on portal entry
- Spacebar jumping while typing in idea panel
- ideaOpen variable declaration order crash
- Unicode characters causing page load failure
- Portal collision detection after floor-anchoring

### Performance
- Particle cap (40 max)
- Magic bolt cap (20 max)
- Trap particles throttled to every 8 frames
- Music disabled (was causing frame drops)
- Frame throttle on game loop
- Draw calls reduced across all render functions
