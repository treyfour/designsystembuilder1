# Design System Skill

This skill governs how Claude Code captures, stores, and generates UI from design references. The system prioritizes **asking over assuming** and **consistency through tokens**.

---

## Core Behaviors

### 1. Always Read SYSTEM.md First

Before any design-related task, read `.design-system/SYSTEM.md` to understand:
- Active color, typography, and spacing tokens
- Current component patterns
- Project-specific rules or constraints

If `SYSTEM.md` doesn't exist or is empty, prompt the user to initialize it or capture their first reference.

### 2. Ask, Don't Assume

When the user provides a URL, screenshot, or image:

**Always ask:**
> "What's your intent with this reference?"
> 1. **Extract the design language** — Pull colors, typography, spacing into your system
> 2. **Capture a specific component** — Document a pattern for reuse
> 3. **Loose inspiration** — Reference the vibe without extracting tokens

Only proceed after clarification. Never assume intent.

### 3. Token Discipline

**When a required token is missing:**

For high-impact tokens (colors, typography):
- **Ask first**: "This needs a [token type] we don't have defined. Want me to add `[suggested-name]: [suggested-value]` to your system?"
- Wait for confirmation before proceeding

For lower-impact tokens (spacing, sizing, borders):
- **Suggest inline**: Generate with a reasonable value and flag it
- Example: `/* TODO: Consider adding to tokens — gap-18 used here */`

**Never invent unflagged token values.** All design decisions should trace back to `SYSTEM.md`.

---

## Commands & Patterns

The user may invoke the system in several ways. Recognize these patterns:

### Capture Commands

| User Says | Action |
|-----------|--------|
| "New reference from [URL/image]" | Analyze and ask intent (see above) |
| "Capture this as [name]" | Create reference file with specified name |
| "Extract colors/typography from this" | Parse and propose token additions |
| "Reference: [name]. What do we have?" | Read and summarize the named reference |

### Build Commands

| User Says | Action |
|-----------|--------|
| "Reference: [name]. Build [component]" | Read reference + SYSTEM.md, then generate |
| "Build [component] using our design system" | Read SYSTEM.md + relevant patterns, then generate |
| "Build this exactly" | Pixel-perfect recreation (ask for screenshot if not provided) |

### System Commands

| User Says | Action |
|-----------|--------|
| "Show me our design system" | Summarize SYSTEM.md tokens and patterns |
| "Add [token] to the system" | Update appropriate tokens/*.json file |
| "Initialize design system" | Create SYSTEM.md with starter structure |

---

## File Operations

### Creating a Reference

When capturing a new reference:

1. Create file at `.design-system/references/ref-[source]-[component].md`
2. Use the template structure from `references/_template.md`
3. If images are involved, save to `references/images/` with matching naming
4. Ask if tokens should be extracted to `tokens/*.json`

### Updating Tokens

Token files are JSON. When adding new tokens:

1. Read the existing file
2. Add the new token with a clear, semantic name
3. Write back the complete file
4. Update SYSTEM.md if it references token counts or summaries

### Creating Patterns

When the user builds something reusable:

1. Ask: "Should I save this as a pattern for future use?"
2. If yes, create `.design-system/patterns/[pattern-name].md`
3. Include: description, use cases, token dependencies, example code

---

## Generation Guidelines

When generating UI code:

### Stack Defaults
- **Framework**: React with Next.js patterns
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui as base, customized to match tokens
- **Responsive**: Mobile-first, responsive by default

### Quality Standards
- All colors must map to tokens (use CSS variables or Tailwind config)
- Typography must use defined scales
- Spacing should follow the defined scale (allow flexibility but flag deviations)
- Components should be accessible (proper ARIA, keyboard nav, focus states)

### When Referencing a Capture
1. Read the reference file completely
2. Identify which aspects to apply (layout, color treatment, typography, spacing, effects)
3. Translate those aspects through your token system
4. Generate code that captures the reference's essence while maintaining system consistency

### Avoid
- Generic AI aesthetics (see frontend-design skill)
- Hardcoded color/spacing values without token mapping
- Assumptions about content or structure without asking
- Over-engineering simple requests

---

## Conversation Patterns

### Starting a Design Session

When the user begins design work, proactively:
1. Confirm you've read SYSTEM.md
2. Note any recent references that might be relevant
3. Ask clarifying questions before generating

### During Generation

- Narrate your token choices: "Using `primary-600` for the CTA, `neutral-100` for the card background..."
- Flag any deviations: "The reference uses 18px gap which isn't in our scale—I'm using `gap-4` (16px). Want me to add `gap-18` to the system?"
- Offer alternatives: "I can make this more minimal or more expressive—preference?"

### After Generation

- Ask if this should become a pattern
- Note any tokens that were suggested inline
- Offer to refine specific aspects

---

## Integration with Frontend-Design Skill

This system works alongside the frontend-design skill. When generating:

1. **Tokens provide constraints** — Colors, typography, spacing are defined
2. **Frontend-design provides creativity** — Within those constraints, make bold aesthetic choices
3. **References provide direction** — The captured reference guides the overall feel

The goal: systematic consistency + creative excellence.
