# Reference: Cosmos Discover

> **Source:** https://www.cosmos.so/discover
> **Captured:** 2026-02-19
> **Intent:** Extract design language

---

## Overview

Cosmos is a minimalist, content-centric digital gallery / visual bookmarking platform. The design emphasizes imagery with restrained UI chrome — an editorial, gallery-like aesthetic with generous whitespace. Supports both light and dark modes. Resembles Are.na, refined Pinterest, and contemporary art platforms. Content-first, no decorative elements.

---

## Extracted Design Language

### Colors

| Role | Value | Notes |
|------|-------|-------|
| Background (Light) | `#F5F4F2` | Warm off-white, not pure white |
| Background (Dark) | `#0D0D0D` | Near-black |
| Text Primary (Light) | `#0D0D0D` | High contrast on light |
| Text Primary (Dark) | `#FFFFFF` | Pure white on dark |
| Text Secondary (Light) | `#727170` | Muted warm gray |
| Text Secondary (Dark) | `#AAAAAA` | Muted neutral gray |
| Surface (Light) | `#E8E7E5` | Cards, inputs — warm gray |
| Surface (Dark) | `#242424` | Cards, inputs — dark gray |
| Border (Light) | `#E8E7E5` | Matches surface |
| Border (Dark) | `#242424` | Matches surface |
| Tertiary (Light) | `#959392` | Disabled, metadata |
| Tertiary (Dark) | `#696968` | Disabled, metadata |
| Button Primary (Light) | `#0D0D0D` | Black buttons on light |
| Button Hover (Light) | `#292929` | Slightly lighter on hover |
| Button Primary (Dark) | `#FFFFFF` | White buttons on dark |
| Button Hover (Dark) | `#C2C2C2` | Slightly dimmed on hover |
| Focus Ring | `rgb(59 130 246 / 0.5)` | Blue accent for accessibility |

**Color Philosophy:** Warm neutrals in light mode (not pure grays — has a subtle warm/beige undertone). Monochromatic with no brand accent colors in the UI.

**Added to tokens?** [ ] No

### Typography

| Element | Font | Size | Weight | Line Height | Notes |
|---------|------|------|--------|-------------|-------|
| Display | GT Super Display | — | 300 | — | Serif display, used sparingly |
| Primary UI | Favorit | — | 400-500 | — | Custom sans-serif, clean geometric |
| Heading XL | Favorit | 24px | 300 | 28px | Section titles at 500px+ |
| Heading Large | Favorit | 22px | 300 | 26px | Below 500px |
| Heading Medium | Favorit | 14px | 500 | 18px | Section labels |
| Heading Small | Favorit | 13px | 500 | 16px | Sub-labels |
| Body | Favorit | 14px | 400 | 17-18px | Default text |
| Metadata | Favorit | 12px | 400 | 15px | Timestamps, counts |
| Username | Favorit | 13-16px | 400 | — | Ellipsis overflow |
| Nav (Desktop) | Favorit | 14px | 500 | 18px | Navigation links |
| Nav (Mobile) | Favorit | 13px | 500 | 16px | Smaller on mobile |
| Button | Favorit | 13px | 500 | — | All buttons |

**Type Philosophy:** Tight hierarchy. Weights are light (300) for display, regular (400) for body, medium (500) for labels/navigation. No bold weights used. Sizes stay in a narrow 12-24px range.

**Added to tokens?** [ ] No

### Spacing & Layout

| Element | Value | Notes |
|---------|-------|-------|
| Page padding (mobile) | 16px | < 500px |
| Page padding (tablet) | 30px | 500-833px |
| Page padding (desktop) | 40px | 834-1279px |
| Page padding (XL) | 60px | 1280px+ |
| Section gap (mobile) | 40px | Vertical between sections |
| Section gap (desktop) | 60px | 500px+ |
| Card gap (mobile) | 16px | Between grid items |
| Card gap (desktop) | 30px | 500px+ |
| Header height (mobile) | 78px | Sticky |
| Header height (desktop) | 82px | Sticky |
| Max container width | 3170px | Very wide, content-driven |
| Card width (mobile) | 166-260px | Responsive |
| Card width (desktop) | 300-460px | Varies by breakpoint |
| Component spacing | 12-20px | Internal element gaps |

**Layout Philosophy:** Responsive masonry-style grid. Cards scale proportionally. Very generous max-width allows content to fill ultra-wide screens. Breakpoints at 500, 768, 834, 1024, 1280px.

**Added to tokens?** [ ] No

---

## Component Patterns

### Navigation Bar

**Structure:**
```
Mobile:  [Menu Icon]  ·····  [Search Icon]
Desktop: [Logo] [Explore] [Shop]  ·····  [Search Input 280-460px]  [Sign In] [Sign Up]
```

**Key characteristics:**
- Sticky positioning, solid background (not transparent)
- Height: 78px mobile, 82px desktop
- Search input expands on focus (500ms width transition)
- Clean separation — no borders, just background color

### Content Card (Cluster/Element)

**Structure:**
```
┌─────────────────────────┐
│                         │
│      Image/Media        │
│      (aspect ratio)     │
│                         │
│  ┌──┐                   │
│  │AV│ username · count  │  ← overlay at bottom
│  └──┘                   │
└─────────────────────────┘
```

**Key characteristics:**
- Border-radius: 22px mobile, 27px desktop (very rounded)
- No shadow — flat design, differentiated by rounded corners alone
- Image hover: subtle scale transform (300ms transition)
- Metadata overlay at bottom with avatar (32px circle) + username
- Z-index layering: bg(0), content(10), metadata(20)

### Search Input

**Key characteristics:**
- Height: 46-50px
- Border-radius: 16px
- Background: surface color (not transparent)
- 500ms width animation on focus
- Icon absolutely positioned right
- No visible border — uses background color differentiation

### Pill Buttons / Category Nav

**Key characteristics:**
- Horizontal scrolling row, scrollbar hidden
- Gap: 30px between items
- Font: 12-14px, weight 500
- Border-radius: 12-16px
- No shrink (flex-shrink: 0)

### Primary Button

**Key characteristics:**
- Fully rounded: border-radius 300px
- Height: 44px
- Padding: 18px horizontal
- Font: 13px, weight 500
- 75ms color transition (snappy)
- Inverts in dark mode (white bg → black text)

---

## Effects & Details

| Effect | Value/Description |
|--------|-------------------|
| Shadows | None — purely flat design |
| Border radius (cards) | 22-27px (very generous) |
| Border radius (inputs) | 16px |
| Border radius (buttons) | 300px (pill/capsule) |
| Transitions (standard) | 150ms cubic-bezier(0.4, 0, 0.2, 1) |
| Transitions (fast) | 75ms (button color changes) |
| Transitions (slow) | 300-500ms (image scale, search width) |
| Hover (text) | Secondary → Primary color shift |
| Hover (images) | Subtle scale transform |
| Hover (buttons) | Background color shift (darken/lighten) |
| Borders | 0.5-1px, same color as surface |
| Opacity | Disabled at 0.1 overlay |

---

## Usage Notes

- **Best for:** Visual portfolio grids, image galleries, content discovery interfaces, bookmarking tools
- **Combine with:** Sileent (for dark immersive sections), Aura (shares minimalist philosophy)
- **Avoid for:** Data-heavy dashboards, text-heavy editorial content, e-commerce product pages

**Key Differentiators from existing references:**
- **vs Aura:** Cosmos uses warm neutrals (#F5F4F2 vs #FAFAFA), larger border-radius (22-27px vs 12px), no shadows at all, and custom serif display font (GT Super)
- **vs Sileent:** Cosmos is content-grid focused vs full-screen immersive. Both share flat/shadowless aesthetic but Cosmos is warmer and more gallery-like

---

## Generation History

| Date | Component | Notes |
|------|-----------|-------|
| — | — | — |
