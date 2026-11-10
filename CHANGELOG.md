# Changelog

## v1.0.0-beta.3 (Build 4) — 2026-11-10

- **Creator identity corrected:** **Hamed Rezaei Aderyani**, **Himo**, **himoN7/Himon7**, **ReZephyr**, **Himpire** (HimoZ = Figma workspace only). Full human+AI [`GUIDE.md`](./GUIDE.md). Attribution License + provenance files.
- **Release packaging:** `eng/Pack-Release.ps1`, `.github/workflows/release.yml` — NuGet (MAUI, Avalonia), npm tarball, tokens zip.
- **Platform expansion (worth-it stacks beyond MAUI / web / Kotlin / Swift):**
  - **Flutter** — `tokens/generated/rz_tokens.dart` + `mapping/flutter.md` (`rzTheme`)
  - **React / TypeScript** — `platforms/react` (`@rezephyr/react` tokens + `RzButton`) + `mapping/react.md`
  - **Avalonia** — `platforms/avalonia` C#/AXAML desktop tokens + `mapping/avalonia.md`
  - **Compose Multiplatform** — `RZTheme.cmp.kt` + `mapping/compose-multiplatform.md`
  - **Tauri** — `mapping/tauri.md` (reuses web CSS / React; no duplicate palette)
- Simulated tests extended: flutter, react, avalonia, compose-mp, tauri.
- **`ReZephyr.Maui`** standalone MAUI library (`platforms/maui/`) — fully tokenized `ReZephyr*` keys, no Warpbeat dependency.
- Simulated cross-platform tests: `npm test` (contract, web, maui, ios, android, linux, + expansions).
- Initial public ReZephyr package: `design.md`, tokens JSON/CSS/schema, platform maps, AI prompts, inventory.
- Icon/emoji policy: detailed UI = Fluent/system icons; expressive places only for animated emoji (Fluent → Apple → Google).
- MediaControls in Figma library use Fluent-style icons (no emoji chrome).
- Normalized abnormal 100px control heights across CommandBar, SplitButton, Popover, Toolbar, etc.
- Tokens Studio sync file + GitHub Actions token validation.
- Completeness audit (`AUDIT.md`).
