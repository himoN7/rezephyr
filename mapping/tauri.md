# ReZephyr → Tauri (Rust shell + web UI)

**Version:** v1.0.0-beta.3 (Build 4)

Tauri is worth it when you want a **small native desktop shell** with a web frontend. ReZephyr does **not** need a separate Rust token dialect — reuse web tokens.

## Consume

1. Frontend: React/TS (`platforms/react`) **or** plain HTML + [`tokens/tokens.css`](../tokens/tokens.css).
2. Shell: Rust/Tauri for windowing, filesystem, OS integration only.

```html
<link rel="stylesheet" href="tokens/tokens.css" />
<html data-theme="light">
```

```ts
import { RzButton, RZControl } from "@rezephyr/react";
```

## Why this stack

| Layer | Owns |
|-------|------|
| ReZephyr CSS / React | Look & feel, components, motion |
| Tauri | Window chrome, menus, deep OS APIs |
| Linux GTK CSS | Optional native dialogs — see [`linux.md`](./linux.md) |

## Icons

Same web rules: Fluent SVG / system icons for detailed UI; animated emoji only for expressive moments.

## Not in scope

Do not port hex values into Rust `const`s unless a native egui/iced UI is intentional. Prefer one web theme source of truth.
