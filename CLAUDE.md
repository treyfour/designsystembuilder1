# Project: Design System Builder

## Overview

A Next.js portfolio site that uses a custom design system framework for capturing, storing, and generating UI from design references. The system supports multiple captured aesthetics and can apply them to any page.

## Tech Stack

- **Framework:** Next.js 16.1 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (using `@theme inline` in globals.css)
- **Images:** Next.js `<Image>` with Unsplash remote patterns configured in `next.config.ts`
- **No component library** — all components are hand-built following design system tokens

## Design System (`/design-system/`)

The design system lives in `design-system/` and follows a Capture → Store → Generate workflow:

- **`SYSTEM.md`** — Core system definition (principles, stack, quick stats)
- **`SKILL.md`** — AI behavior instructions for generating with the system
- **`COMMANDS.md`** — Command patterns for capturing and building
- **`tokens/`** — Design tokens as JSON (colors, typography, spacing)
- **`references/`** — Captured design languages from real sites
- **`patterns/`** — Reusable component patterns extracted from references

### Captured References

| Reference | File | Aesthetic |
|-----------|------|-----------|
| Aura | `references/ref-aura-homepage.md` | Light, minimal, Apple/Vercel-like. #FAFAFA bg, card-based, 12px radius, subtle shadows |
| Sileent | `references/ref-sileent-homepage.md` | Dark, cinematic, luxury. #000000 bg, full-screen immersive, overlay UI, numbered navigation |
| Cosmos | `references/ref-cosmos-discover.md` | Warm gallery, editorial. #F5F4F2 bg, 22-27px radius, no shadows, content-grid |

### Key Patterns

- **`patterns/numbered-navigation.md`** — 3-digit number prefixed nav (from Sileent)
- **`patterns/overlay-ui-architecture.md`** — Full-screen with corner-anchored UI (from Sileent)

## Pages Built

### Portfolio (`app/page.tsx`) — Cosmos style
- Warm off-white background (#F5F4F2), sticky top nav, pill category filters
- Project grid (9 projects) with filtering by category
- About view with experience timeline and capabilities
- Contact view with email CTA and social links
- Mobile bottom navigation bar
- Currently using the Cosmos reference design language

### Amazon Reimagined (`app/amazon/page.tsx`) — Cosmos style
- E-commerce layout styled with Cosmos warm gallery aesthetic
- Hero carousel with Unsplash photos and gradient overlay
- Product sections: Today's deals (6-col grid), Shop by category (5-col), Recommended (horizontal scroll), Recently viewed
- All product cards use real Unsplash photos via Next.js Image
- Promo banner, 4-column footer
- 22-27px card radius, no shadows, pill buttons, 75ms transitions

## CSS Architecture (`app/globals.css`)

Uses CSS custom properties mapped to Tailwind via `@theme inline`:
- `--background: #F5F4F2` (Cosmos warm white)
- `--surface: #E8E7E5` (cards, inputs)
- `--foreground: #0D0D0D` (text)
- `--text-secondary: #727170` / `--text-tertiary: #959392`
- Responsive `--page-padding`: 16px → 30px → 40px → 60px
- Header height: 82px

## Conventions

- All colors come from CSS custom properties — never hardcode hex in components
- Border radius: 22-27px for cards (Cosmos), 16px for inputs, 300px/full for pills
- Transitions: 75ms for color, 150ms standard, 300ms for transforms
- Typography: font-light (300) for display, font-medium (500) for labels, tight size range 12-24px
- Images: always use Next.js `<Image>` with `fill` + `object-cover` + proper `sizes` prop
- Animations: `animate-fade-in-up` with staggered `animationDelay` via inline styles

## Dev Server

```bash
npm run dev    # runs on localhost:3000
npm run build  # verify before committing
```
