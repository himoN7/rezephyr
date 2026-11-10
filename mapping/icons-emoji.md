# Icons & animated emoji

**Version:** v1.0.0-beta.3 (Build 4)

## Core rule

| Surface | Use |
|---------|-----|
| **Detailed UI** (toolbars, media controls, forms, nav, lists, sheets, settings, charts chrome) | **Icons only** — never emoji |
| **Expressive places** (greetings, large bold messages, celebration, empty-state warmth, Pulse feeling moments) | **Animated emoji** allowed — may replace an icon only here |

Emoji must never be used as a substitute for chrome icons in dense or detailed controls (play/pause, share, settings, chevrons, tabs, command bars, media scrubbers, etc.).

---

## Animated emoji (expressive only)

Priority when an expressive emoji is needed:

| Priority | Source |
|----------|--------|
| 1 | **Microsoft Fluent animated emoji** |
| 2 | **Apple** animated / Memoji-class emoji (if Fluent has no match) |
| 3 | **Google** Noto / animated emoji (if Fluent and Apple lack a match) |
| Last | Static emoji from the same vendors |

Do not invent custom cartoon mascots. **Classic** never receives emoji celebration overlays.

### Allowed expressive examples

- Home greeting / “Good morning” hero
- Large success / celebration message
- Bold empty-state illustration moment
- Pulse petal / score celebration overlay

### Forbidden examples

- MediaControls transport buttons
- CommandBar / Toolbar actions
- Tab icons, nav icons, list accessories
- Form field affordances, split-button chevrons
- Chart legends as emoji (use color tokens + short text)

---

## Icons (detailed UI / chrome)

| Priority | Source |
|----------|--------|
| 1 | **Microsoft Fluent icons** — prefer **Filled** for chrome |
| 2 | Platform system icons if Fluent unavailable: SF Symbols (iOS), Material Symbols (Android), Segoe Fluent (Windows) |
| Designer-created | Must follow Fluent / SF / Material geometry, optical size, and metaphor — no parallel custom icon language |

### Media control glyph names (Fluent)

| Action | Fluent name (prefer) |
|--------|----------------------|
| Previous | `Previous24Filled` / `Previous20Filled` |
| Play | `Play24Filled` |
| Pause | `Pause24Filled` |
| Next | `Next24Filled` / `Next20Filled` |

---

## MAUI

Warpbeat Pulse uses Fluent Filled (MauiIcons / Fluent) for chrome. Keep celebration moments on the animated-emoji priority above.

## Agent checklist

- [ ] Detailed control → Fluent/system **icon**, not emoji
- [ ] Expressive greeting / large message → Fluent animated emoji first
- [ ] Custom glyph cites which system icon it mirrors
- [ ] Classic surface → no emoji artwork
