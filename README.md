# ReZephyr

Tokenized design system — Apple HIG clarity with Fluent light, depth, and motion.

**Version:** v1.0.0-beta.3 (Build 4)  
**GitHub:** https://github.com/himoN7/rezephyr  
**Figma:** https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm  

**Slogan:** Design system made for human and AI  
**Creator:** Hamed Rezaei Aderyani (Himo / himoN7) · **Brand:** Himpire  
**License:** [ReZephyr Attribution License](./LICENSE) — use with credit · [`GUIDE.md`](./GUIDE.md) · [`NOTICE`](./NOTICE) · [`PROVENANCE.md`](./PROVENANCE.md) · [`llms.txt`](./llms.txt) · [`CONSUMING.md`](./CONSUMING.md)

```text
Design system: ReZephyr by Hamed Rezaei Aderyani (Himo / himoN7) · Himpire
https://github.com/himoN7/rezephyr
```

Full human + AI guide: [`GUIDE.md`](./GUIDE.md). Products may *use* ReZephyr. Do **not** rebrand it or claim authorship. (“HimoZ” is only a Figma workspace label.)

![ReZephyr cover](./brand/cover/rezephyr-cover.png)

Logo: [`brand/ReZephyr-128.svg`](./brand/ReZephyr-128.svg) · Cover assets: [`brand/`](./brand/)

## Platforms

| Stack | Artifact |
|-------|----------|
| **MAUI** | NuGet `ReZephyr.Maui` |
| **Avalonia** | NuGet `ReZephyr.Avalonia` |
| **Tokens (multi)** | NuGet `ReZephyr.Tokens` (JSON/CSS/Swift/Kotlin/Dart sources) |
| **Android / Compose** | Maven `com.himpire.rezephyr:rezephyr-compose` |
| **SwiftUI** | SPM product `ReZephyr` (root `Package.swift`) |
| **Flutter** | pub path `platforms/flutter/rezephyr` |
| **React / TypeScript** | npm `@himoN7/rezephyr-react` |
| **Web / CSS** | [`tokens/tokens.css`](./tokens/tokens.css) |
| **Linux GTK** | [`tokens/linux/rezephyr.css`](./tokens/linux/rezephyr.css) |
| **Tauri** | [`mapping/tauri.md`](./mapping/tauri.md) (reuses web/React) |

Install: [`CONSUMING.md`](./CONSUMING.md) · Packages: https://github.com/himoN7?tab=packages

```csharp
ReZephyrTheme.Apply(this); // MAUI
```

## Simulated platform tests

```bash
npm test                 # all platforms
npm run test:maui
npm run test:flutter
npm run test:react
```

## Visual previews

See [`previews/README.md`](./previews/README.md) — Web and Apple-framed HTML simulations using `tokens.css`.

## Start here

| File | Role |
|------|------|
| [GUIDE.md](./GUIDE.md) | Full human + AI guide (start here) |
| [design.md](./design.md) | Design bible — principles, tokens, components |
| [AUDIT.md](./AUDIT.md) | Completeness audit |
| [tokens/tokens.json](./tokens/tokens.json) | Numeric source of truth |
| [tokens/tokens.css](./tokens/tokens.css) | Web / preview CSS variables |
| [inventory/components.json](./inventory/components.json) | Figma component inventory |
| [prompts/](./prompts/) | AI agent prompts & checklists |
| [mapping/](./mapping/) | Public platform maps (MAUI · Web · React · Flutter · Avalonia · CMP · Tauri · iOS · Android · Linux) |
| [previews/](./previews/) | Web + Apple-framed HTML simulations |
| [mapping/icons-emoji.md](./mapping/icons-emoji.md) | Icons vs expressive emoji |
| [figma/FIGMA_GITHUB_SYNC.md](./figma/FIGMA_GITHUB_SYNC.md) | Tokens Studio ↔ GitHub automation |

Maintainer-only local notes (not public product guides) live under [`dev/`](./dev/) and must not be treated as consumer documentation.

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
