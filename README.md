# ReZephyr

Tokenized design system — Apple HIG clarity with Fluent light, depth, and motion.

**Version:** v1.0.0-beta.3 (Build 4)  
**GitHub:** https://github.com/himoN7/rezephyr  
**Figma:** https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm  

**Slogan:** Design system made for human and AI

![ReZephyr cover](./brand/cover/rezephyr-cover.png)

Logo: [`brand/ReZephyr-128.svg`](./brand/ReZephyr-128.svg) · Cover assets: [`brand/`](./brand/)

## MAUI

Tokenized library: [`platforms/maui/`](./platforms/maui/) → **`ReZephyr.Maui`**

```csharp
ReZephyrTheme.Apply(this);
```

## Simulated platform tests

```bash
npm test                 # contract + web + maui + ios + android
npm run test:maui
```

## Start here

| File | Role |
|------|------|
| [design.md](./design.md) | Design bible — principles, tokens, components |
| [AUDIT.md](./AUDIT.md) | Completeness audit |
| [tokens/tokens.json](./tokens/tokens.json) | Numeric source of truth |
| [tokens/tokens.css](./tokens/tokens.css) | Web / preview CSS variables |
| [inventory/components.json](./inventory/components.json) | Figma component inventory |
| [prompts/](./prompts/) | AI agent prompts & checklists |
| [mapping/](./mapping/) | MAUI · Web · iOS · Android maps |
| [mapping/icons-emoji.md](./mapping/icons-emoji.md) | Icons vs expressive emoji |
| [figma/FIGMA_GITHUB_SYNC.md](./figma/FIGMA_GITHUB_SYNC.md) | Tokens Studio ↔ GitHub automation |

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

**MAUI** — see [`platforms/maui/README.md`](./platforms/maui/README.md) and [`mapping/maui.md`](./mapping/maui.md).

## Agents

Paste or `@` the prompt in `prompts/implement-ui.md` before implementing UI. Run `prompts/qa-checklist.md` before claiming done.
