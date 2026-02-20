# Design System for Claude Code

A lightweight, flexible system for capturing design references and generating pixel-perfect UI with Claude Code.

---

## Quick Start

1. Copy the `.design-system/` folder into your project root
2. Open `SYSTEM.md` and fill in your base tokens (or capture your first reference to populate them)
3. Start building with commands like:
   - `New reference from [URL/screenshot]`
   - `Build [component] using our design system`
   - `Reference: [name]. Build [description]`

See `COMMANDS.md` for the full command reference.

---

## Folder Structure

```
.design-system/
├── SKILL.md              # Instructions for Claude Code (how it should behave)
├── SYSTEM.md             # Your active design system (edit this!)
├── COMMANDS.md           # Command cheat sheet
├── tokens/
│   ├── colors.json       # Color tokens
│   ├── typography.json   # Typography tokens
│   └── spacing.json      # Spacing, radius, shadows
├── references/
│   ├── _template.md      # Template for new captures
│   └── images/           # Screenshot storage
└── patterns/
    └── _template.md      # Template for component patterns
```

---

## How It Works

### 1. Capture
Find a design you like → paste URL or screenshot → Claude analyzes and creates a structured reference file with extracted colors, typography, spacing, and component patterns.

### 2. Store  
Extracted tokens go into your `tokens/*.json` files. References live in `references/`. Reusable components become patterns in `patterns/`.

### 3. Generate
When you ask Claude to build UI, it reads your `SYSTEM.md` first, applies your tokens consistently, and references any captured designs you point to.

---

## Key Principles

**Ask, don't assume** — Claude always clarifies your intent before acting. "What do you want to do with this reference?" comes before any extraction.

**Tokens are truth** — All generated code maps back to your defined tokens. If a token is missing, Claude asks before inventing values.

**Capture once, reference forever** — Every design reference becomes a reusable asset you can mix, match, and build from.

---

## Customization

### Stack Defaults
The system defaults to React/Next.js + Tailwind + shadcn/ui. To change:

1. Edit `SKILL.md` → "Stack Defaults" section
2. Update your generation preferences

### Token Structure
The provided token files follow a semantic structure. Adapt as needed:

- Add categories to `colors.json` (e.g., brand-specific palettes)
- Extend `typography.json` with custom text styles
- Modify `spacing.json` semantic spacing for your grid

### Patterns
Start with the `_template.md` and build your library. Good first patterns:
- Cards (product, testimonial, feature)
- Navigation (header, sidebar, mobile)
- Forms (login, signup, contact)
- Sections (hero, features, pricing, CTA)

---

## Team Usage (Future)

When you're ready to share:

1. Move `.design-system/` to its own repo
2. Add as a git submodule or package
3. Reference in each project's root
4. Update `SKILL.md` path references accordingly

---

## Tips

- **Keep SYSTEM.md current** — It's what Claude reads first
- **Name references clearly** — `ref-stripe-pricing` > `ref-001`
- **Capture liberally** — Build your inspiration library as you browse
- **Combine references** — "Mix ref-linear-nav with ref-notion-content"
- **Review generated code** — Claude gets close, but designer eyes catch details

---

## Troubleshooting

**Claude ignores my tokens**
→ Make sure `SYSTEM.md` has populated values, not placeholders

**Colors don't match reference**
→ Check if you confirmed token extraction after capture

**Missing patterns**
→ After building a component, say "Save this as a pattern"

**Need to reset**
→ Delete unwanted reference files, update `SYSTEM.md` summaries

---

## Version

v1.0 — Initial release

Built for Claude Code in Cursor/Windsurf.
