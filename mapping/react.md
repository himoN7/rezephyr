# ReZephyr → React / TypeScript

**Version:** v1.0.0-beta.3 (Build 4)

## Consume

1. Link CSS vars: `tokens/tokens.css` + `data-theme="light|dark"` on `<html>`.
2. Import JS tokens / components from [`platforms/react`](../platforms/react/).

```tsx
import { RzButton, RZControl, rzCssVars } from "../platforms/react/src";

<div style={rzCssVars("light")}>
  <RzButton>Primary</RzButton>
</div>
```

## Prefer

| Need | Use |
|------|-----|
| Global theming | `tokens.css` semantic vars (`--rz-bg-accent`, …) |
| Runtime / CSS-in-JS | `rzColors()` / `rzCssVars()` |
| Typed sizes | `RZControl`, `RZSpace`, `RZRadius` |
| Icons (detailed UI) | Fluent System Icons / SVG — not emoji |
| Expressive moments | Fluent animated emoji → Apple → Google |

## Components

| Figma | React pattern |
|-------|---------------|
| Button / Primary | `RzButton` or CSS `.rz-btn-primary` height **52** |
| Field | `<input>` / form control height **46**, radius **12** |
| Card | surface + radius **20** + elevation card |
| Sheet | dialog / drawer top radius **28** |

## Density

Touch min **44px**. Compact desktop may tighten padding; keep 8px grid.
