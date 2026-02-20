# Pattern: Overlay UI Architecture

> **Created:** 2026-02-16
> **Based on:** Sileent reference
> **Category:** Layout

---

## Description

A full-screen immersive layout where UI elements are positioned in fixed corners, overlaying video or image content. Creates a cinematic, minimal interface that doesn't compete with content. Perfect for portfolios, creative agencies, and video-heavy sites.

---

## Preview

![Pattern Preview](../references/images/sileent-homepage.png)

---

## Design System

**From Reference:** Sileent (Dark, Cinematic)

### Layout Grid

```
[Top-Left]        [Top-Center]        [Top-Right]
    Logo              Number              Grid




[Bottom-Left]                      [Bottom-Right]
  Navigation                       Project Title
```

### Positioning
- All elements use `position: fixed`
- Z-index layering: Content (0), Overlay (10), UI (50)
- Consistent padding from edges: 32px desktop, 16px mobile

### Colors
- UI text: White (#FFFFFF)
- Overlay background: `rgba(0, 0, 0, 0.3)` optional
- Content: Full-screen video/image

---

## Variants

| Variant | Description | Use When |
|---------|-------------|----------|
| Default | All 5 anchor points active | Full homepage |
| Minimal | Only logo + navigation | Inner pages |
| Video | With video background | Showreels, hero sections |
| Image | With static image | About pages, case studies |

---

## Usage Guidelines

### Do
- Keep UI minimal and out of the way
- Use high-contrast text (white on dark)
- Position elements in corners
- Let content fill entire viewport
- Use subtle transitions on hover

### Don't
- Don't add backgrounds to UI elements
- Don't center UI elements (breaks the system)
- Don't use too many UI elements
- Don't add borders or dividers
- Don't compete with content visually

---

## Accessibility

- [✓] Keyboard navigable
- [✓] Screen reader accessible
- [✓] Color contrast AA compliant
- [✓] Focus states visible
- [✓] Video has pause/play controls

**Notes:** Ensure video can be paused for accessibility. Provide alternative navigation if needed.

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Reduce padding to 16px, stack bottom elements |
| Tablet (640-1024px) | 24px padding, maintain layout |
| Desktop (>1024px) | Full 32px padding, all anchors active |

---

## Code

### Basic Implementation

```tsx
export default function OverlayUIArchitecture({
  children,
  videoSrc,
}: {
  children?: React.ReactNode;
  videoSrc?: string;
}) {
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Full-Screen Background */}
      {videoSrc ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale opacity-90"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-black" />
      )}

      {/* UI Overlay Layer */}
      <div className="absolute inset-0 z-10">
        {/* Top Left - Logo */}
        <div className="fixed top-8 left-8">
          <Logo />
        </div>

        {/* Top Center - Number */}
        <div className="fixed top-8 left-1/2 -translate-x-1/2">
          <span className="text-2xl text-white font-light">002</span>
        </div>

        {/* Top Right - Grid Toggle */}
        <div className="fixed top-8 right-8">
          <button className="text-white text-sm hover:opacity-70 transition-opacity">
            Grid
          </button>
        </div>

        {/* Bottom Left - Navigation */}
        <div className="fixed bottom-8 left-8">
          <NumberedNavigation />
        </div>

        {/* Bottom Right - Project Title */}
        <div className="fixed bottom-8 right-8">
          <h1 className="text-5xl text-white font-light">Salmo Ranch</h1>
        </div>

        {/* Optional: Custom Children */}
        {children}
      </div>
    </section>
  );
}
```

### With Scroll Progress

```tsx
"use client";

import { useEffect, useState } from "react";

export default function OverlayUIWithProgress({ videoSrc }: { videoSrc: string }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover grayscale opacity-90"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/20 z-50">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10">
        {/* UI Elements */}
      </div>
    </section>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoSrc` | `string` | — | Video source URL |
| `imageSrc` | `string` | — | Image source URL (alternative to video) |
| `showProgress` | `boolean` | `false` | Show scroll progress bar |
| `grayscale` | `boolean` | `true` | Apply grayscale filter to content |

---

## Examples

### Example 1: Video Portfolio

```tsx
<OverlayUIArchitecture videoSrc="/videos/showreel.mp4">
  <div className="fixed top-8 left-8">
    <Logo />
  </div>
  <div className="fixed bottom-8 right-8">
    <h1 className="text-6xl text-white">Creative Studio</h1>
  </div>
</OverlayUIArchitecture>
```

### Example 2: Case Study Hero

```tsx
<OverlayUIArchitecture imageSrc="/images/case-study-hero.jpg">
  <div className="fixed bottom-8 left-8">
    <span className="text-sm text-white opacity-50">Case Study 001</span>
  </div>
  <div className="fixed bottom-8 right-8">
    <h1 className="text-5xl text-white">Redesigning Finance</h1>
  </div>
</OverlayUIArchitecture>
```

---

## Related Patterns

- `numbered-navigation` — Navigation component for this system
- `full-screen-hero` — Background video/image component

---

## Changelog

| Date | Change |
|------|--------|
| 2026-02-16 | Initial creation from Sileent reference |
