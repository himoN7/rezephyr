# Connect ReZephyr Figma ↔ GitHub

**Version:** v1.0.0-beta.3 (Build 4)  
**Figma file:** https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm  
**Token file for sync:** `figma/tokens.studio.json` (mirrors `tokens/tokens.json`)

## Why

Designers edit variables in Figma via **Tokens Studio**; engineers keep `tokens/tokens.json` as the numeric source of truth. GitHub is the bridge so neither side drifts silently.

## One-time setup (Tokens Studio → GitHub)

1. Install [Tokens Studio for Figma](https://tokens.studio/) in the ReZephyr file.
2. Open Tokens Studio → **Settings** → **Sync providers** → **Add** → **GitHub**.
3. Create a GitHub fine-grained PAT (or classic) with `contents: read/write` on the `rezephyr` design-system repo.
4. Configure:
   - **Repository:** `himoN7/rezephyr` (or the published repo URL)
   - **Branch:** `main`
   - **File path:** `figma/tokens.studio.json`
   - **Base URL:** leave default (`api.github.com`)
5. **Pull** from GitHub into Tokens Studio, then **Apply to document** / push variables into the Figma file `QPBlsyhp2HMSmNFvyovOmm`.
6. After design edits in Tokens Studio, **Push** to GitHub. Engineers merge and sync `tokens/tokens.json` if values changed (see `tokens/SYNC.md`).

## Engineering CI

`.github/workflows/validate-tokens.yml` validates `tokens/tokens.json` against `tokens/tokens.schema.json` on every push/PR.

## Authority order (do not invert)

1. `tokens/tokens.json` — product / code contract  
2. `figma/tokens.studio.json` — Tokens Studio sync payload (keep aligned)  
3. Figma variables in file `QPBlsyhp2HMSmNFvyovOmm` — visual editing  
4. Platform exports (`tokens.css`, Swift/Kotlin stubs, MAUI `PulseColors.xaml`)

## Code Connect (optional next)

Use Figma Code Connect to map top components (`Button / Primary`, `Sheet / Bottom`, `MediaControls`, …) to MAUI / web / Compose paths listed in `mapping/component-map.md`.
