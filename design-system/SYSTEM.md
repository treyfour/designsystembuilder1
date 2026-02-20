# Design System

> Last updated: 2026-02-16
> Stack: React/Next.js + Tailwind CSS + shadcn/ui

---

## Quick Reference

```
Colors:     10 neutral shades, 2 brand colors, 4 semantic sets — See tokens/colors.json
Typography: Inter/SF Pro system fonts, 6-level type scale — See tokens/typography.json
Spacing:    Tailwind-compatible scale (4px base) — See tokens/spacing.json
References: 2 captured in /references (Aura [light], Sileent [dark])
Patterns:   2 defined in /patterns (numbered-navigation, overlay-ui-architecture)
```

---

## Design Principles

<!-- Define your design philosophy here as you build. Examples from Aura reference: -->

1. **Sophisticated Minimalism** — Generous whitespace, restrained color, maximum clarity
2. **Content-First Hierarchy** — Clear visual rhythm through size, weight, and spacing
3. **Subtle Depth** — Flat design with gentle shadows and elevation

---

## Color Tokens

<!-- Summary of your color system. Full values in tokens/colors.json -->

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | `#3B82F6` | Primary actions, key UI elements, focus states |
| `brand-secondary` | `#6366F1` | Secondary actions, accents |

### Neutral Scale
| Token | Value | Usage |
|-------|-------|-------|
| `neutral-50` | `#FAFAFA` | Page backgrounds |
| `neutral-100` | `#F5F5F5` | Input backgrounds, muted surfaces |
| `neutral-200` | `#E5E5E5` | Borders, dividers |
| `neutral-400` | `#A3A3A3` | Tertiary text, metadata |
| `neutral-500` | `#737373` | Secondary text |
| `neutral-700` | `#404040` | Headings |
| `neutral-900` | `#0A0A0A` | Maximum contrast, primary text |

### Surface Colors
| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#FAFAFA` | Page background |
| `card` | `#FFFFFF` | Card/elevated surfaces |
| `muted` | `#F5F5F5` | Muted sections |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `success` | `#22C55E` | Positive states, confirmations |
| `warning` | `#F59E0B` | Caution states, alerts |
| `error` | `#EF4444` | Error states, destructive actions |
| `info` | `#3B82F6` | Informational states, tips |

---

## Typography

<!-- Summary of your type system. Full values in tokens/typography.json -->

### Font Families
| Token | Font | Usage |
|-------|------|-------|
| `font-display` | Inter / SF Pro Display | Headlines, hero text |
| `font-body` | Inter / SF Pro Display | Body copy, UI text |
| `font-mono` | SF Mono / Consolas | Code, technical content |

### Type Scale
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px | 1.5 | Captions, metadata |
| `text-sm` | 14px | 1.5 | Secondary text, labels |
| `text-base` | 16px | 1.5 | Body copy |
| `text-lg` | 18px | 1.625 | Lead paragraphs |
| `text-xl` | 20px | 1.375 | Section headers |
| `text-2xl` | 24px | 1.375 | Page headers |
| `text-3xl` | 30px | 1.25 | Large headings |
| `text-4xl` | 36px | 1.25 | Hero headings |
| `text-5xl` | 48px | 1.0 | Display text |
| `text-6xl` | 60px | 1.0 | Large hero text |

### Font Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasis |
| `font-semibold` | 600 | Subheadings |
| `font-bold` | 700 | Headlines |

---

## Spacing Scale

<!-- Summary of your spacing system. Full values in tokens/spacing.json -->

| Token | Value | Common Usage |
|-------|-------|--------------|
| `space-1` | 4px | Tight internal padding |
| `space-2` | 8px | Icon gaps, compact spacing |
| `space-3` | 12px | Form element spacing |
| `space-4` | 16px | Standard padding |
| `space-6` | 24px | Section padding |
| `space-8` | 32px | Large gaps |
| `space-12` | 48px | Section margins |
| `space-16` | 64px | Page sections |

---

## Component Patterns

<!-- List your defined patterns here -->

| Pattern | Description | Reference |
|---------|-------------|-----------|
| numbered-navigation | Editorial navigation with 3-digit number prefixes | `patterns/numbered-navigation.md` (Sileent) |
| overlay-ui-architecture | Full-screen immersive layout with corner-anchored UI | `patterns/overlay-ui-architecture.md` (Sileent) |

---

## Active References

<!-- List captured design references -->

| Reference | Source | Type | Captured |
|-----------|--------|------|----------|
| ref-aura-homepage | https://www.aura.build/create | Design Language Extract [Light System] | 2026-02-16 |
| ref-sileent-homepage | https://www.sileent.com/ | Design Language + Components [Dark System] | 2026-02-16 |

---

## Tailwind Config Overrides

```javascript
// Add to tailwind.config.js to use your tokens

module.exports = {
  theme: {
    extend: {
      colors: {
        // Generated from tokens/colors.json
      },
      fontFamily: {
        // Generated from tokens/typography.json
      },
      spacing: {
        // Generated from tokens/spacing.json
      },
    },
  },
};
```

---

## Notes & Decisions

<!-- Log important design decisions here -->

- **2026-02-16**: Initial token population from Aura reference — Established sophisticated minimal aesthetic with clean neutrals, Inter typography, generous spacing
- **2026-02-16**: Added Sileent reference as separate dark/cinematic system — Pure B&W monochromatic, numbered navigation, overlay UI patterns. Stored separately from Aura (not mixed)
