# Level Design Notes — The Gifted

## Overview

15 levels total. Boss every 5 levels. Death-run style traps throughout.

---

## Level Themes

| Theme | Levels | Visual Style |
|-------|--------|-------------|
| Dark / Purple | 1–5, 8 | Night sky, castle, purple platforms |
| Forest / Green | 6 | Trees, green platforms |
| Sky / Blue | 4, 7 | Stars, blue platforms |
| Lava / Orange | 6, 8–10 | Magma, red platforms |
| Crystal / Indigo | 11 | Deep cave, indigo glow |
| Void / Pink | 12–15 | Black void, magenta glow |

---

## Level List

| # | Name | Theme | Boss | Traps |
|---|------|-------|------|-------|
| 1 | Dark Courtyard | Dark | No | Spikes, Pendulum |
| 2 | Haunted Bridges | Dark | No | Spikes, Fireballs |
| 3 | Crumbling Spire | Dark | No | Spike, Pendulum, Fireball |
| 4 | Death Run I | Sky | No | Spikes ×8, Pendulums ×3, Fireball |
| 5 | Boss: Shadow Knight | Dark | ✅ | Spikes, Pendulum |
| 6 | Enchanted Forest | Forest | No | Spikes, Pendulum, Fireball, Saw |
| 7 | Sky Fortress | Sky | No | Spikes, Fireballs ×2, Pendulum, Saw |
| 8 | Lava Descent | Lava | No | Crumble, Pendulums ×2, Fireball, Saw |
| 9 | Death Run II | Lava | No | Spikes ×9, Pendulums ×3, Fireball, Saw |
| 10 | Boss: Magma Warlord | Lava | ✅ | Spikes, Pendulum, Fireball |
| 11 | Crystal Depths | Crystal | No | Spikes, Pendulums ×2, Fireball, Saws ×2 |
| 12 | Void Bridges | Void | No | Spikes ×8, Pendulums ×3, Fireballs ×2, Saws ×2 |
| 13 | Inferno Spire | Lava | No | Spike, Pendulum, Fireball, Saw |
| 14 | Death Run FINAL | Void | No | Spikes ×10, Pendulums ×3, Fireballs ×2, Saws ×2 |
| 15 | Boss: Shadow Lord | Void | ✅ | Spikes, Pendulum, Fireball, Saw + 5 Minions |

---

## Trap Types

### Spike
- Static floor trap
- Positioned at y=408 (floor level)
- 30px damage on contact

### Pendulum
- Swings on a rope from a fixed anchor point
- Configurable length, speed, starting angle
- 20px damage on contact with ball

### Fireball
- Moves horizontally back and forth
- Configurable speed and range
- 15px damage on contact

### Saw Blade
- Moves horizontally, spins visually
- Faster than fireball
- 25px damage on contact

---

## Boss Design

### Shadow Knight (Level 5)
- HP: 200 | Speed: 2.0 (angry: 3.2)
- Fires 2 bolts normally, 5 when below 50% HP
- Charges at player when angry

### Magma Warlord (Level 10)
- HP: 280 | Speed: 2.0 (angry: 3.2)
- Same pattern as Shadow Knight but more HP
- More aggressive charge frequency

### Shadow Lord (Level 15) — FINAL BOSS
- HP: 400 | Speed: 2.0 (angry: 3.2)
- Spawns 5 minions at start (one-shot with Z blast)
- Minions patrol, shoot, and deal contact damage
- Most complex arena with 6 platforms
