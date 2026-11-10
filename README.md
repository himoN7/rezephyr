# ReZephyr

Tokenized design system for Warpbeat **Pulse** (and reusable Apple HIG + Fluent 2 products).

**Version:** v1.0.0-beta.3 (Build 4)

## Start here

| File | Role |
|------|------|
| [design.md](./design.md) | Design bible — principles, tokens, components, Classic vs Pulse |
| [AUDIT.md](./AUDIT.md) | Completeness audit (DS lead) |
| [tokens/tokens.json](./tokens/tokens.json) | Numeric source of truth |
| [tokens/tokens.css](./tokens/tokens.css) | Web / preview CSS variables |
| [inventory/components.json](./inventory/components.json) | Figma component inventory |
| [prompts/](./prompts/) | AI agent prompts & checklists |
| [mapping/](./mapping/) | MAUI · Web · iOS · Android maps |
| [mapping/icons-emoji.md](./mapping/icons-emoji.md) | Icons vs expressive emoji |
| [figma/FIGMA_GITHUB_SYNC.md](./figma/FIGMA_GITHUB_SYNC.md) | Tokens Studio ↔ GitHub automation |

**Figma library:** https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm

## Naming

- **Pulse** — in-app theme name (vs Classic).
- **ReZephyr** — design-system / Figma library / docs name.

## Icons vs emoji

- **Detailed UI** (media controls, toolbars, forms, nav) → **Fluent / system icons only**.
- **Expressive places** (greetings, large bold messages, celebration) → animated emoji (Fluent → Apple → Google).

## Figma ↔ GitHub

See [figma/FIGMA_GITHUB_SYNC.md](./figma/FIGMA_GITHUB_SYNC.md). Sync file: `figma/tokens.studio.json`.

## Quick consume

**Web**

```html
<link rel="stylesheet" href="tokens/tokens.css" />
```

```css
.button-primary {
  background: var(--rz-bg-accent);
  color: var(--rz-fg-on-accent);
  border-radius: var(--rz-radius-16);
  height: var(--rz-button-primary-h);
  font: var(--rz-type-button);
}
```

**MAUI** — use existing `Pulse*` keys in Warpbeat `PulseColors.xaml`. See `mapping/maui.md`.

## Agents

Paste or `@` the prompt in `prompts/implement-ui.md` before implementing UI. Run `prompts/qa-checklist.md` before claiming done.
