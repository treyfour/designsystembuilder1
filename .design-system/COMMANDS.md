# Design System Commands — Quick Reference

Keep this open in Cursor or print it out. These are the patterns Claude Code recognizes.

---

## Capture Commands

### New Reference
```
New reference from [URL]
New reference from this screenshot
New reference from this image
```
→ Claude will ask your intent (extract design language / capture component / inspiration)

### Named Capture  
```
Capture this as [name]
Save this reference as ref-[source]-[component]
```
→ Creates reference file with your specified name

### Targeted Extraction
```
Extract colors from this
Extract typography from this
Pull the spacing system from this
```
→ Parses specific tokens and proposes additions to your system

---

## Build Commands

### Reference-Based
```
Reference: [name]. Build [component description]
Reference: stripe-pricing. Build a 3-tier pricing section
Using ref-linear-dashboard, create a sidebar nav
```
→ Reads the named reference + your SYSTEM.md, then generates

### System-Based
```
Build [component] using our design system
Create a testimonial carousel with our tokens
Make a hero section following our system
```
→ Uses your tokens/patterns, asks if no pattern exists

### Exact Recreation
```
Build this exactly
Recreate this pixel-perfect
Match this design precisely
```
→ Pixel-perfect mode (will ask for screenshot if not attached)

---

## System Commands

### View System
```
Show me our design system
What tokens do we have?
Summarize SYSTEM.md
List our references
What patterns are defined?
```

### Modify System
```
Add [color/font/spacing] to the system
Update the primary color to [value]
Remove ref-[name]
```

### Initialize
```
Initialize design system
Set up design system for this project
Bootstrap the design tokens
```
→ Creates starter SYSTEM.md with prompts to fill in

---

## Workflow Examples

### Scenario: Found a landing page you love

1. Paste URL into Cursor
2. Say: "New reference from this"
3. Claude asks intent → say "Extract the design language"
4. Claude creates reference file, proposes token additions
5. Confirm which tokens to add
6. Later: "Reference: [name]. Build a hero section for my SaaS"

### Scenario: Have a Figma frame to implement

1. Export frame as PNG, paste into Cursor
2. Say: "New reference from this screenshot"
3. Claude asks intent → say "I want to build this exactly"
4. Claude analyzes and generates code matching the design

### Scenario: Quick component using existing system

1. Say: "Build a feature grid with 3 columns using our design system"
2. Claude reads SYSTEM.md, generates with your tokens
3. If missing tokens needed, Claude asks before proceeding

### Scenario: Building a pattern library

1. Build a component as above
2. Claude asks: "Should I save this as a pattern?"
3. Say yes → saved to patterns/ folder
4. Next time: "Use the feature-grid pattern for this section"

---

## Flags & Modifiers

Add these to any command for specific behavior:

| Flag | Effect |
|------|--------|
| `--full` | Extract/capture everything |
| `--colors-only` | Only extract colors |
| `--type-only` | Only extract typography |
| `--component:[name]` | Focus on specific component |
| `--no-tokens` | Don't propose token additions |
| `--pattern` | Save result as reusable pattern |
| `--minimal` | Minimal version, fewer effects |
| `--expressive` | More animation/visual interest |

Example: `New reference from [URL] --colors-only`

---

## Quick Token Reference

While building, reference tokens like this:

```
"Use brand-primary for the CTA"
"Apply heading2 text style"
"Use space-6 gap between cards"
"rounded-lg corners on the cards"
```

Claude will map these to your SYSTEM.md values.

---

## Troubleshooting

**Claude isn't following my design system**
→ Say: "Read SYSTEM.md and confirm my tokens"

**Generated code doesn't match reference**
→ Say: "Compare the output to ref-[name] and fix the differences"

**Need to see what's available**
→ Say: "List all references and patterns"

**Token doesn't exist**
→ Claude should ask — if it doesn't, say: "Check if [token] exists before using it"

---

## Pro Tips

1. **Name references descriptively**: `ref-stripe-pricing` beats `ref-001`
2. **Capture early, reference often**: Build your library as you browse
3. **Combine references**: "Mix ref-linear-nav with ref-notion-content"
4. **Iterate on patterns**: "Update the card pattern to include hover states"
5. **Keep SYSTEM.md updated**: It's your source of truth
