# Reference: Sileent Homepage

> **Source:** https://www.sileent.com/
> **Captured:** 2026-02-16
> **Intent:** Extract design language + Capture components

---

## Overview

Sileent is a next-gen AI content studio with an ultra-dark, cinematic aesthetic. The design is the **polar opposite of Aura** — bold, immersive, dramatic, and high-contrast. This is editorial luxury meets creative agency, with full-screen video, minimal overlay UI, and a distinctive numbered navigation system.

**Aesthetic:** Cinematic, bold, dark, high-end editorial, luxury creative agency

---

## Visual Reference

![Reference Image](images/sileent-homepage.png)

---

## Extracted Design Language

### Colors

| Role | Value | Notes |
|------|-------|-------|
| Page Background | `#000000` | Pure black, cinematic |
| Text Primary | `#FFFFFF` | Pure white, maximum contrast |
| Text Secondary | `#B3B3B3` | Light gray for secondary text |
| Overlay Background | `rgba(0, 0, 0, 0.3)` | Subtle dark overlay on UI elements |
| Logo Pattern | `#FFFFFF` | Checkered pattern in white |

**Color System Notes:**
- **Monochromatic black & white** — No color palette, pure grayscale
- **Ultra-high contrast** — #000000 to #FFFFFF
- **Cinematic darkness** — Relies on video/imagery for visual interest
- **No brand colors** — Intentionally colorless, letting content shine
- **Elegant restraint** — Maximum sophistication through minimal palette

**System Type:** Dark theme, monochromatic, cinematic

**Added to tokens?** [ ] No — Stored in reference only (separate from Aura system)

---

### Typography

| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Logo | Modern Sans (likely Neue Haas Grotesk or similar) | ~16px | 400 (Regular) | "Sileent" with checkered icon |
| Project Title | Modern Sans | ~48-56px | 400 (Regular) | "Salmo Ranch" — large, bold presence |
| Navigation Labels | Modern Sans | ~18-20px | 400 (Regular) | "Work, Lab, About, Contact" |
| Navigation Numbers | Modern Sans | ~12px | 400 (Regular) | "006, 012, 002, 003" — distinctive system |
| Center Number | Modern Sans | ~24px | 300 (Light) | "002" — centered, prominent |
| Grid Toggle | Modern Sans | ~16px | 400 (Regular) | Top right UI element |

**Typography Notes:**
- Likely using **Neue Haas Grotesk, Helvetica Neue, or Aktiv Grotesk** — clean, modern grotesque
- **No bold weights** — Everything is regular or light, very elegant
- **Large sizes for impact** — Project titles are massive
- **Numbered system** — Every navigation item has a number prefix
- **Consistent weight** — Minimal variation, mostly regular (400)
- **Letter spacing** — Appears to use tight letter spacing for titles

**Typography Philosophy:**
Elegant restraint. No heavy weights, no decorative fonts. Pure typographic hierarchy through size and placement.

**Added to tokens?** [ ] No — Stored in reference only (separate from Aura system)

---

### Spacing & Layout

| Element | Value | Notes |
|---------|-------|-------|
| Full-screen layout | 100vw × 100vh | Immersive viewport |
| Logo position | Top-left, ~32px padding | Anchored position |
| Navigation position | Bottom-left, ~32px padding | Overlay on content |
| Project title position | Bottom-right, ~32px padding | Large breathing room |
| Center number | Top-center, ~32px from top | Centered alignment |
| Grid toggle | Top-right, ~32px padding | Minimal UI element |
| UI padding | ~32px | Consistent edge spacing |

**Layout Notes:**
- **Full-bleed immersive** — Content fills entire viewport
- **Fixed UI overlay** — Navigation and controls float over content
- **Corner positioning** — UI anchored to corners (TL, TR, BL, BR, TC)
- **Minimal spacing** — Just 32px from edges
- **No grid/container** — Pure full-screen experience
- **Overlay architecture** — Interface doesn't compete with content

**Added to tokens?** [ ] No — Stored in reference only (separate from Aura system)

---

## Component Patterns

### 1. Numbered Navigation System

**Structure:**
```
[Number] [Label]
006 Work
012 Lab
002 About
003 Contact
```

**Key characteristics:**
- Each navigation item prefixed with a 3-digit number
- Numbers appear to be design elements, not sequential
- Clean, editorial feel
- Small number, larger label
- Bottom-left positioning
- Minimal styling, maximum clarity

**Code reference:**
```tsx
<nav className="fixed bottom-8 left-8 z-50">
  <ul className="flex flex-col gap-2 text-white">
    <li>
      <a href="/work" className="group flex items-center gap-3">
        <span className="text-xs opacity-50 group-hover:opacity-100">006</span>
        <span className="text-lg group-hover:opacity-70">Work</span>
      </a>
    </li>
    <li>
      <a href="/lab" className="group flex items-center gap-3">
        <span className="text-xs opacity-50 group-hover:opacity-100">012</span>
        <span className="text-lg group-hover:opacity-70">Lab</span>
      </a>
    </li>
    <li>
      <a href="/about" className="group flex items-center gap-3">
        <span className="text-xs opacity-50 group-hover:opacity-100">002</span>
        <span className="text-lg group-hover:opacity-70">About</span>
      </a>
    </li>
    <li>
      <a href="/contact" className="group flex items-center gap-3">
        <span className="text-xs opacity-50 group-hover:opacity-100">003</span>
        <span className="text-lg group-hover:opacity-70">Contact</span>
      </a>
    </li>
  </ul>
</nav>
```

**Pattern saved?** [ ] Not yet — Can be saved to patterns/ if needed

---

### 2. Checkered Logo Pattern

**Structure:**
- Small checkered/grid pattern icon
- White on dark background
- Sits next to "Sileent" wordmark
- ~16px × 16px size

**Key characteristics:**
- Distinctive brand element
- Simple geometric pattern
- High contrast
- Minimal but memorable

**Implementation note:**
Could be SVG pattern or CSS background with gradient. Appears to be a 2×2 or 3×3 checkered grid.

---

### 3. Full-Screen Video/Image Background

**Structure:**
- 100vw × 100vh viewport coverage
- Black & white video/image content
- Grayscale treatment
- Cinematic aspect ratio

**Key characteristics:**
- Immersive, full-bleed
- No chrome, no borders
- Content IS the background
- UI overlays on top with minimal opacity
- Moody, atmospheric

**Code reference:**
```tsx
<section className="relative h-screen w-screen overflow-hidden bg-black">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale"
  >
    <source src="/videos/showreel.mp4" type="video/mp4" />
  </video>

  {/* UI Overlay */}
  <div className="absolute inset-0 z-10">
    {/* Logo, Nav, Project Title */}
  </div>
</section>
```

---

### 4. Overlay UI Architecture

**Structure:**
- Fixed positioning for all UI elements
- Transparent/minimal backgrounds
- White text on dark content
- Corner-anchored positioning

**Key characteristics:**
- **Logo:** Top-left
- **Center Number:** Top-center
- **Grid Toggle:** Top-right
- **Navigation:** Bottom-left
- **Project Title:** Bottom-right

**Layout pattern:**
```
[Logo]              [002]              [Grid]




[Work]                            [Project Title]
[Lab]
[About]
[Contact]
```

**Design Philosophy:**
UI is minimal and stays out of the way. Content (video/image) is the hero. Interface elements are just functional markers.

---

## Effects & Details

| Effect | Value/Description |
|--------|-------------------|
| Background | Pure black `#000000` or video/image |
| Text color | Pure white `#FFFFFF` |
| Opacity (numbers) | ~50% opacity, 100% on hover |
| Transitions | Smooth, ~200-300ms ease |
| Grayscale filter | `filter: grayscale(100%)` on video |
| Overlay | `rgba(0, 0, 0, 0.2-0.3)` for subtle darkening |
| No shadows | Clean, flat, no depth tricks |
| No borders | No visual separation needed |

**Visual Style:**
- **Brutalist minimalism** — No decoration, pure function
- **Cinematic darkness** — Moody, atmospheric, high-end
- **High contrast** — Black and white, nothing in between
- **Elegant simplicity** — Every element earns its place

---

## Usage Notes

- **Best for:** Creative agencies, video portfolios, luxury brands, editorial sites, cinematic experiences
- **Combine with:** Dark mode systems, video-heavy content, artistic portfolios
- **Avoid for:** E-commerce (too dark), SaaS products (needs more UI), corporate sites (too bold)
- **Aesthetic:** This is for brands that want to make a statement. Bold, confident, unapologetic.

**Comparison to Aura:**
| Aspect | Aura | Sileent |
|--------|------|---------|
| Color | Light (#FAFAFA) | Dark (#000000) |
| Palette | 10-shade neutrals | Pure B&W |
| Typography | Inter, clean hierarchy | Grotesque, flat hierarchy |
| Spacing | Generous whitespace | Minimal, edge-to-edge |
| Content | Card-based, structured | Full-screen, immersive |
| Vibe | Minimal, friendly, approachable | Cinematic, bold, luxury |

**These are opposite systems** — Use Aura for light/clean, Sileent for dark/bold.

---

## Generation History

<!-- Track what's been built from this reference -->

| Date | Component | Notes |
|------|-----------|-------|
| 2026-02-16 | Portfolio Website (Trevor Schulte) | Full portfolio rebuild using Sileent system — Pure black bg, numbered nav, overlay UI, full-screen immersive, project carousel with dots, checkered logo pattern |
