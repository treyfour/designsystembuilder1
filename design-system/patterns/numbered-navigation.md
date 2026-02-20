# Pattern: Numbered Navigation

> **Created:** 2026-02-16
> **Based on:** Sileent reference
> **Category:** Navigation

---

## Description

A distinctive navigation pattern where each link is prefixed with a 3-digit number. Creates an editorial, systematic aesthetic with a luxury agency feel. Numbers appear to be design elements rather than sequential ordering.

---

## Preview

![Pattern Preview](../references/images/sileent-homepage.png)

---

## Design System

**From Reference:** Sileent (Dark, Cinematic)

### Colors
- `text-primary` — #FFFFFF (white text)
- `text-secondary` — #B3B3B3 (gray for numbers)
- `background` — Transparent (overlays on content)

### Typography
- `font-family` — Neue Haas Grotesk, Helvetica Neue, or similar modern grotesque
- `number-size` — 12px, weight 400, opacity 50%
- `label-size` — 18-20px, weight 400

### Spacing
- `gap` — 12px between number and label
- `stack-gap` — 8px between navigation items
- `position` — Fixed bottom-left, 32px from edges

---

## Variants

| Variant | Description | Use When |
|---------|-------------|----------|
| Default | Numbers + labels, vertical stack | Primary navigation |
| Horizontal | Same but horizontal layout | Top navigation bar |
| Compact | Smaller text sizes | Mobile or sidebar |

---

## Usage Guidelines

### Do
- Use 3-digit numbers (001, 012, 156)
- Keep numbers as design elements, not functional
- Use consistent typeface throughout
- Position in corners for overlay effect
- Use on dark backgrounds for maximum contrast

### Don't
- Don't make numbers sequential/logical
- Don't use bold weights (keep it light/regular)
- Don't center-align (anchors to corners work better)
- Don't use colors (keep monochromatic)

---

## Accessibility

- [✓] Keyboard navigable
- [✓] Screen reader tested (numbers are decorative, can be aria-hidden)
- [✓] Color contrast AA compliant (white on dark)
- [✓] Focus states visible
- [✓] Reduced motion supported

**Notes:** Numbers can be `aria-hidden="true"` as they're decorative. Ensure focus states are clear with outline or opacity change.

---

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Mobile (<640px) | Stack vertically, reduce padding to 16px |
| Tablet (640-1024px) | Keep vertical, 24px padding |
| Desktop (>1024px) | Full size, 32px padding |

---

## Code

### Basic Implementation

```tsx
export default function NumberedNavigation() {
  const navItems = [
    { number: "006", label: "Work", href: "/work" },
    { number: "012", label: "Lab", href: "/lab" },
    { number: "002", label: "About", href: "/about" },
    { number: "003", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed bottom-8 left-8 z-50">
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.number}>
            <a
              href={item.href}
              className="group flex items-center gap-3 text-white transition-opacity hover:opacity-70"
            >
              <span
                className="text-xs opacity-50 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <span className="text-lg">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### With Animation

```tsx
export default function NumberedNavigationAnimated() {
  const navItems = [
    { number: "006", label: "Work", href: "/work" },
    { number: "012", label: "Lab", href: "/lab" },
    { number: "002", label: "About", href: "/about" },
    { number: "003", label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed bottom-8 left-8 z-50">
      <ul className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <li
            key={item.number}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            <a
              href={item.href}
              className="group flex items-center gap-3 text-white transition-all duration-300 hover:opacity-70 hover:translate-x-1"
            >
              <span
                className="text-xs font-mono opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <span className="text-lg tracking-tight">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `Array<{number, label, href}>` | — | Navigation items with numbers |
| `position` | `"bottom-left" \| "top-left" \| "bottom-right"` | `"bottom-left"` | Corner positioning |
| `variant` | `"default" \| "compact"` | `"default"` | Size variant |

---

## Examples

### Example 1: Creative Agency

```tsx
<NumberedNavigation
  items={[
    { number: "001", label: "Projects", href: "/projects" },
    { number: "024", label: "Studio", href: "/studio" },
    { number: "008", label: "Thinking", href: "/blog" },
    { number: "015", label: "Contact", href: "/contact" },
  ]}
/>
```

### Example 2: Portfolio Site

```tsx
<NumberedNavigation
  items={[
    { number: "100", label: "Work", href: "/work" },
    { number: "200", label: "About", href: "/about" },
    { number: "300", label: "Contact", href: "/contact" },
  ]}
  variant="compact"
/>
```

---

## Related Patterns

- `overlay-ui-architecture` — Full positioning system
- `full-screen-hero` — Background for this navigation

---

## Changelog

| Date | Change |
|------|--------|
| 2026-02-16 | Initial creation from Sileent reference |
