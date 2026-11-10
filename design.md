# ReZephyr Design System

**Version:** v1.0.0-beta.3 (Build 4)  
**Figma:** https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm (HimoZ)  
**Tokens:** `tokens/tokens.json` · `tokens/tokens.css`  
**Studio / library name:** ReZephyr.

---

## 1. Purpose

ReZephyr is the tokenized, multi-platform design system that expresses Warpbeat’s **Pulse** visual identity and is reusable for other products that want the same Apple HIG + Fluent 2 hybrid language.

Agents and humans must treat this folder as the **implementation source of truth**. Figma is the visual authority; `tokens.json` is the numeric authority; platform maps translate tokens into code.

---

## 2. Principles

1. **Apple clarity + Fluent light** — Clear hierarchy, large titles, sheets and docks where they aid mobile; soft elevation, acrylic where the platform supports it, purposeful motion.
2. **One composition** — Screens read as one idea, not a dashboard of competing cards. Prefer trend-only home charts with short legends above/below.
3. **Feeling vs chrome** — **Icons** for all detailed UI (toolbars, media controls, forms, nav, lists, sheets). Animated **emoji** only in expressive places (greetings, large bold messages, celebration, empty-state warmth). Emoji may replace an icon **only** in those expressive moments — never in dense chrome. Never decorate Classic with Pulse petals/emoji. See `mapping/icons-emoji.md`.
4. **Emoji priority (animated first)** — When an expressive emoji is needed:
   1. **Microsoft Fluent animated emoji** (primary)
   2. **Apple** animated / Memoji-style emoji if Fluent has no match
   3. **Google** Noto / animated emoji if neither Fluent nor Apple has a match  
   Static emoji is a last resort when no animated asset exists. Do not invent custom cartoon mascots in place of this stack.
5. **Icon priority** — Prefer **Microsoft Fluent icons** (Filled for chrome; Regular only when contrast/weight requires it). If a Fluent glyph is unavailable for the platform or package, use that platform’s system icon set (SF Symbols on iOS, Material Symbols on Android, Segoe Fluent on Windows). **Designer-created icons** must be drawn from those systems’ geometry, optical size, and metaphor — not a parallel custom icon language.
6. **Tokens first** — No hard-coded hex/radii in new UI. Use CSS vars, MAUI `Pulse*` resources, or platform token maps.
7. **Control heights** — Buttons and toolbars use `controlHeights` from `tokens.json` (primary **52**, ghost/secondary **44–50**, toolbar/command **40–44**, icon button **44**). Labels are vertically centered; never stretch text buttons into tall empty frames.
8. **Density** — `Touch` (44pt min) for phone; `Compact` for desktop/sidebar density.
9. **Accessibility** — Contrast ≥ WCAG AA for text on surfaces; focus rings use `--rz-border-focus` / violet; interactive targets ≥ 44×44 on Touch.

---

## 3. Brand & naming

| Layer | Name | Use |
|-------|------|-----|
| Product theme | Pulse | Warpbeat UI switch (vs Classic) |
| Design system | ReZephyr | Tokens, Figma library, docs, agent prompts |
| Studio | HimoZ / ReZephyr | Figma ownership |

Do **not** invent alternate Re+ marketing names in UI copy. Pulse remains the user-facing theme name inside Warpbeat.

---

## 4. Color

### Brand

| Token | Light | Dark | Role |
|-------|-------|------|------|
| violet | `#4924AC` | `#9C84F2` | Primary accent, CTAs, links |
| lime | `#B9D334` | `#CFE45A` | Logo companion, positive energy |
| onViolet | `#FFFFFF` | `#120E22` | Text/icons on accent fills |

### Surfaces & text

| Token | Light | Dark |
|-------|-------|------|
| page | `#F2F1F7` | `#0C0B12` |
| card | `#FFFFFF` | `#1A1824` |
| cardAlt | `#F7F6FB` | `#221F2E` |
| separator | `#E4E2EC` | `#2E2B3B` |
| text | `#16141F` | `#F4F3F8` |
| textSecondary | `#6E6A7C` | `#A7A3B5` |
| textTertiary | `#A29EB0` | `#6F6B7E` |

### Status & data

heart / warning / danger / info / success + matching tint surfaces — see `tokens.json`.

### Petals (Pulse-only decoration)

activity `#FF8A3D` · consistency `#9DBF1F` · load `#FFB020` · cardio `#FF2D55` · recovery `#6D4AE0`

### HR zones

rest `#A9B4C8` · warm `#B9D334` · fat `#FFC53D` · cardio `#FF8A3D` · peak `#FF2D55`

---

## 5. Typography

Scale (Figma uses Inter; platforms use system UI fonts):

| Role | Size / LH | Weight |
|------|-----------|--------|
| Display | 34 / 40 | 600 |
| Title | 28 / 34 | 600 |
| Section | 20 / 26 | 600 |
| Headline | 17 / 22 | 600 |
| Body | 15 / 22 | 400 |
| Button | 16 / 20 | 600 |
| Label | 14 / 18 | 600 |
| Caption | 12 / 16 | 600 |
| Overline | 11 / 14 | 600 |

Web: `var(--rz-type-*)`. MAUI: prefer existing `PulseSectionTitleStyle`, `PulseCaptionStyle`, etc.

---

## 6. Space, radius, control heights

**Space:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48  
**Radius:** 8 · 12 · 16 · 20 · 24 · 28 · pill  
**Primary button height:** 52 · Ghost 50 · Field 46 · Chip 36 · Touch min 44  
**Card radius:** 20 (primary) · 16 (alt) · Sheet top 28

Default page margin: **20**. Phone canvas reference: **390×844**.

---

## 7. Elevation & materials

| Level | CSS token | Use |
|-------|-----------|-----|
| Soft | `--rz-elevation-soft` | Hairline lift |
| Card | `--rz-elevation-card` | Metric cards |
| Float | `--rz-elevation-float` | FABs, floating dock |
| Sheet | `--rz-elevation-sheet` | Bottom sheets |

**Acrylic:** frosted overlay for nav bars / docks on platforms that support blur. Fallback: opaque `card` at 0.92 opacity.

---

## 8. Motion

| Token | ms |
|-------|----|
| instant | 100 |
| fast | 200 |
| normal | 300 |
| slow | 500 |
| emphasis | 700 |

Easing: standard `cubic-bezier(0.4, 0, 0.2, 1)`. Sheets prefer decelerate + soft spring. Respect `prefers-reduced-motion`: drop petal stagger and sheet spring; keep opacity fades only.

---

## 9. Components (must-match Figma)

Full inventory: `inventory/components.json`.

**Always implement with states:** Rest · Pressed · Focus · Hover (pointer) · Disabled · Loading · Error · Selected (where applicable).

**Core patterns**

- **Buttons** — Primary filled violet; Secondary outline/tint; Ghost text; Destructive danger; Icon 44×44.
- **Fields** — 46h, radius 12, focus ring 2px violet.
- **Segmented / Chips** — Selected uses violet tint fill + violet label.
- **Sheets** — Scrim 0.45, radius 28 top, grabber, detents.
- **Tab / Floating dock** — Safe-area aware; acrylic preferred.
- **Charts** — Trend-only on Home; legends above/below, never side columns that steal plot width.
- **Petals / Score badge** — Pulse identity only; never on Classic.

---

## 10. Classic vs Pulse

Classic and Pulse share data and navigation behavior. They **do not** share decorative identity.

Forbidden on Classic: Fluent emoji artwork, petals/flowers, expressive Pulse charts, Pulse celebration overlays.

Allowed on Classic: ordinary monochrome UI icons (not emoji).

---

## 11. Implementation map

| Platform | Guide |
|----------|--------|
| .NET MAUI | `mapping/maui.md` |
| Web / CSS | `mapping/web.md` |
| iOS / SwiftUI | `mapping/ios.md` |
| Android / Compose | `mapping/android.md` |
| Icons & emoji | `mapping/icons-emoji.md` |
| Agent prompts | `prompts/` |
| Cursor rule | `.cursor/rules/rezephyr-design-system.mdc` (repo root) |

---

## 12. Change control

1. Change values in `tokens/tokens.json` first.
2. Regenerate or hand-sync `tokens.css` and platform docs.
3. Update Figma variables to match.
4. Cite **Version: v1.0.0-beta.3 (Build 4)** (or current Warpbeat `ApplicationDisplayVersion` / `ApplicationVersion`) in any new docs.
5. Do not bump Warpbeat versions unless doing a deliberate release.

---

## 13. Agent quick contract

Before writing UI:

1. Read `design.md` + relevant `mapping/*.md`.
2. Use only ReZephyr / Pulse tokens — no inventing palette.
3. Match Figma component name from `inventory/components.json`.
4. Preserve Classic/Pulse separation.
5. Add AutomationIds / accessibility IDs on interactive controls.
6. Prefer compile-time bindings (`x:Bind` / typed styles) where the platform supports them.
