# Reference: Aura Homepage

> **Source:** https://www.aura.build/create
> **Captured:** 2026-02-16
> **Intent:** Extract design language

---

## Overview

Aura is an AI website builder with a clean, modern, minimal aesthetic. The design showcases exceptional use of whitespace, a sophisticated neutral color palette, and clean typography. Very Apple/Vercel-inspired with focus on simplicity and clarity.

---

## Visual Reference

![Reference Image](images/aura-homepage.png)

---

## Extracted Design Language

### Colors

| Role | Value | Notes |
|------|-------|-------|
| Page Background | `#FAFAFA` | Very light gray, subtle warmth |
| Card/Surface | `#FFFFFF` | Pure white for elevated surfaces |
| Primary Text | `#0A0A0A` | Near black for headlines |
| Secondary Text | `#737373` | Medium gray for body text, descriptions |
| Tertiary Text | `#A3A3A3` | Light gray for metadata (views, likes) |
| Border/Divider | `#E5E5E5` | Subtle borders on cards and inputs |
| Accent Blue | `#3B82F6` | Used sparingly in some template cards |
| Input Background | `#F5F5F5` | Slightly darker than page background |

**Color System Notes:**
- Extremely minimal palette
- Heavy reliance on neutral grays (50-900 scale)
- Color used very sparingly for accents
- High contrast between text and backgrounds for readability
- Sophisticated grayscale hierarchy

**Added to tokens?** [✓] Yes — 2026-02-16

---

### Typography

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Hero Headline | Modern Sans (Inter/SF Pro) | ~56-64px | 700 (Bold) | "Create beautiful designs" |
| Hero Subheading | Modern Sans | ~18px | 400 (Regular) | Gray color, good line height |
| Section Headers | Modern Sans | ~14px | 600 (Semibold) | "Trending", "Recently Featured" |
| Template Titles | Modern Sans | ~14px | 500 (Medium) | Black, clear hierarchy |
| Metadata/Stats | Modern Sans | ~13px | 400 (Regular) | Gray, small caps feel |
| Navigation | Modern Sans | ~14px | 500 (Medium) | Clean, minimal |

**Typography Notes:**
- Likely using Inter, SF Pro Display, or similar modern geometric sans
- Very clean type hierarchy with minimal variation
- Generous line heights and letter spacing
- Type scale appears to follow 1.25 or 1.33 ratio
- All text is crisp, highly legible

**Added to tokens?** [✓] Yes — 2026-02-16

---

### Spacing & Layout

| Element | Value | Notes |
|---------|-------|-------|
| Hero vertical padding | ~120px | Very generous top spacing |
| Hero to content gap | ~80px | Large breathing room |
| Section vertical spacing | ~64px | Between "Trending", "Recently Featured", etc. |
| Grid gap (cards) | ~20-24px | Consistent across all template grids |
| Card padding | ~16-20px | Internal card spacing |
| Max content width | ~1200-1280px | Centered container |
| Navigation height | ~64px | Clean, minimal header |

**Layout Notes:**
- 3-column grid for templates on desktop
- Responsive grid (appears to collapse to 2 or 1 column)
- Generous whitespace throughout
- Clear visual rhythm with consistent spacing scale
- Content well-centered with comfortable margins

**Added to tokens?** [✓] Yes — 2026-02-16

---

## Component Patterns

### Navigation Bar

**Structure:**
- Minimal horizontal navigation
- Left: Logo/brand
- Center: Main navigation links (CREATE, TEMPLATES, COMPONENTS, ASSETS, SKILLS, LEARN, PRICING, CHANGELOG)
- Right: Utility icons (theme toggle, user, search) + SIGN IN

**Key characteristics:**
- Very clean, text-based navigation
- Subtle text colors, no heavy styling
- Fixed/sticky positioning (appears to float)
- Minimal borders or backgrounds

---

### Hero Section

**Structure:**
- Centered content layout
- Large headline
- Subheading with description + CTA link
- Prominent search/input component below

**Key characteristics:**
- Maximum whitespace and breathing room
- Clear visual hierarchy through size and weight
- Call-to-action embedded naturally in copy
- Search bar as primary conversion element

---

### Template Card Grid

**Structure:**
- CSS Grid layout (3 columns)
- Card structure: Image preview + metadata footer
- Footer includes: title, author, stats (views, likes)

**Key characteristics:**
- Consistent card sizing and proportions
- Hover states (likely subtle scale or shadow)
- Clean image previews with good aspect ratio
- Minimal metadata, no clutter
- Tags/categories shown inline

---

### Search/Input Component

**Structure:**
- Large input field with placeholder
- Pills/tags for filters (Prompt Builder, Green & Pro, etc.)
- Icons integrated in pills
- Add button on right

**Key characteristics:**
- Rounded corners (medium radius)
- Light background (#F5F5F5)
- Clean, spacious internal padding
- Filter pills have subtle backgrounds

---

## Effects & Details

| Effect | Value/Description |
|--------|-------------------|
| Card Shadow | `0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)` — Very subtle |
| Border radius (cards) | `12px` — Medium, modern |
| Border radius (input) | `12px` — Matches cards |
| Border radius (pills) | `24px` — Fully rounded |
| Transitions | Likely 150-200ms ease — Subtle hover states |
| Hover states | Subtle lift or shadow increase on cards |

**Visual Style:**
- Flat design with subtle depth through shadows
- No heavy gradients or textures
- Focus on clarity and content
- Minimal decorative elements
- Sophisticated restraint

---

## Usage Notes

- **Best for:** Modern SaaS products, AI tools, design platforms, minimal marketing sites
- **Combine with:** Any dark mode patterns for contrast, component libraries for consistency
- **Avoid for:** Playful brands, high-energy consumer products (too minimal)
- **Aesthetic:** Apple-like, Vercel-like, Linear-like — clean, sophisticated, technical

---

## Generation History

| Date | Component | Notes |
|------|-----------|-------|
| — | — | — |
