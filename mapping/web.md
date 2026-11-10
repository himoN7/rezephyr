# ReZephyr → Web / CSS

**Version:** v1.0.0-beta.3 (Build 4)

## Consume tokens

```html
<link rel="stylesheet" href="/design-system/rezephyr/tokens/tokens.css" />
<html data-theme="light"> <!-- or "dark" -->
```

All values are `var(--rz-*)`. Prefer semantic aliases (`--rz-bg-accent`, `--rz-fg-primary`) over primitives when styling UI chrome.

## Starter classes (copy patterns, don’t invent colors)

```css
.rz-page {
  background: var(--rz-bg-page);
  color: var(--rz-fg-primary);
  font: var(--rz-type-body);
  font-family: var(--rz-font);
}

.rz-card {
  background: var(--rz-bg-card);
  border-radius: var(--rz-radius-20);
  padding: var(--rz-space-16);
  box-shadow: var(--rz-elevation-card);
}

.rz-btn-primary {
  height: var(--rz-button-primary-h);
  min-height: var(--rz-touch-min);
  padding: 0 var(--rz-space-20);
  border: 0;
  border-radius: var(--rz-radius-16);
  background: var(--rz-bg-accent);
  color: var(--rz-fg-on-accent);
  font: var(--rz-type-button);
  transition: background var(--rz-duration-fast) var(--rz-ease-standard),
    opacity var(--rz-duration-fast) var(--rz-ease-standard);
}
.rz-btn-primary:disabled {
  opacity: var(--rz-opacity-disabled);
}
.rz-btn-primary:focus-visible {
  outline: var(--rz-stroke-thick) solid var(--rz-border-focus);
  outline-offset: 2px;
}

.rz-field {
  height: var(--rz-field-h);
  border: var(--rz-stroke-thin) solid var(--rz-border-default);
  border-radius: var(--rz-radius-12);
  background: var(--rz-bg-card);
  color: var(--rz-fg-primary);
  padding: 0 var(--rz-space-12);
  font: var(--rz-type-body);
}
.rz-field:focus {
  border-color: var(--rz-border-focus);
  outline: none;
  box-shadow: 0 0 0 2px var(--rz-bg-accent-tint);
}

.rz-sheet {
  background: var(--rz-bg-card);
  border-radius: var(--rz-radius-28) var(--rz-radius-28) 0 0;
  box-shadow: var(--rz-elevation-sheet);
}
.rz-scrim {
  background: rgba(0, 0, 0, var(--rz-opacity-scrim));
}
```

## HTML preview

Interactive / marketing samples live at `docs/rezephyr-design-sample.html`. Keep CSS vars in that file aligned with `tokens.css` when changing brand values.

## Density

- Touch: min 44px targets, primary button 52px.
- Compact: reduce vertical padding; keep 8px grid; never go below 32px for pointer-primary desktop controls without an explicit Compact variant.

## Charts (web)

SVG/Canvas charts: use petal / zone CSS vars. Legend above or below the plot. No competing detail/trend modes on Home-style surfaces.
