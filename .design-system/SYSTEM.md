# Design System

> Last updated: [DATE]
> Stack: React/Next.js + Tailwind CSS + shadcn/ui

---

## Quick Reference

```
Colors:     See tokens/colors.json
Typography: See tokens/typography.json  
Spacing:    See tokens/spacing.json
References: [COUNT] captured in /references
Patterns:   [COUNT] defined in /patterns
```

---

## Design Principles

<!-- Define your design philosophy here. Examples: -->

1. **[Principle Name]** — [Description]
2. **[Principle Name]** — [Description]
3. **[Principle Name]** — [Description]

---

## Color Tokens

<!-- Summary of your color system. Full values in tokens/colors.json -->

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary` | — | Primary actions, key UI elements |
| `brand-secondary` | — | Secondary actions, accents |

### Neutral Scale
| Token | Value | Usage |
|-------|-------|-------|
| `neutral-50` | — | Lightest backgrounds |
| `neutral-900` | — | Darkest text |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `success` | — | Positive states |
| `warning` | — | Caution states |
| `error` | — | Error states |
| `info` | — | Informational states |

---

## Typography

<!-- Summary of your type system. Full values in tokens/typography.json -->

### Font Families
| Token | Font | Usage |
|-------|------|-------|
| `font-display` | — | Headlines, hero text |
| `font-body` | — | Body copy, UI text |
| `font-mono` | — | Code, technical content |

### Type Scale
| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | — | — | Captions, labels |
| `text-sm` | — | — | Secondary text |
| `text-base` | — | — | Body copy |
| `text-lg` | — | — | Lead paragraphs |
| `text-xl` | — | — | Section headers |
| `text-2xl` | — | — | Page headers |
| `text-3xl` | — | — | Hero text |

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
| — | — | `patterns/[name].md` |

---

## Active References

<!-- List captured design references -->

| Reference | Source | Type | Captured |
|-----------|--------|------|----------|
| — | — | — | — |

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

- [DATE]: [Decision description]
