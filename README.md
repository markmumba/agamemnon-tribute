# Agamemnon — King of Mycenae

A cinematic tribute website to Agamemnon, the legendary High King of Mycenae and Commander of the Achaean forces at Troy. Inspired by the 2025 film *The Odyssey*.

## Overview

An immersive, scroll-driven storytelling experience that chronicles Agamemnon's life through six chapters:

- **The Man** — His cursed bloodline and rise to power
- **The War** — The oath that launched a thousand ships
- **The Sacrifice** — Iphigenia at Aulis
- **The Siege** — Ten years of war at Troy
- **The Fall** — Murder at the hands of Clytemnestra
- **The Legacy** — Three thousand years of memory

Each chapter features a cinematic homepage section with parallax stacking, leading to a dedicated detail page with deeper narrative content.

## Features

- Parallax scroll stacking with sticky sections
- Video backgrounds from the film
- Scroll-triggered reveal animations
- Reading progress indicator on detail pages
- Chapter-to-chapter navigation
- Film grain texture overlay for ancient aesthetic
- Fully static — no API, no database

## Tech Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4** (CSS-only theme config)
- **Framer Motion** (scroll animations, viewport detection)
- **TypeScript**

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Obsidian | `#0a0a0a` | Background |
| Marble | `#f5f0e8` | Primary text |
| Gold | `#c9a84c` | Accents, headings |
| Blood | `#c41e1e` | Sacrifice section |
| Parchment | `#d4c5a0` | Body text |

## Typography

- **Cinzel** — Serif headings (roman inscription feel)
- **Cormorant Garamond** — Body text (elegant, readable)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

All 11 routes are statically generated.
