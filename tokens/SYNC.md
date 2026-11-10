# Keeping tokens in sync

**Version:** v1.0.0-beta.3 (Build 4)

## Authority order

1. **`tokens.json`** — numeric / semantic source of truth for ReZephyr
2. **Figma variables** — visual authority (file `QPBlsyhp2HMSmNFvyovOmm`)
3. **`tokens.css`** — web / HTML previews
4. **`Warpbeat/Resources/Styles/PulseColors.xaml`** — MAUI runtime (must match primitives)
5. Platform maps under `mapping/` — documentation only

## When changing a color or size

1. Edit `tokens.json`.
2. Mirror into `tokens.css` (`--rz-*`).
3. Mirror into `PulseColors.xaml` Light/Dark keys (and `PulseTokens.cs` if it exposes the value).
4. Update Figma variables to the same hex / number.
5. Update `docs/rezephyr-design-sample.html` `:root` if it still has a local copy.
6. Note the change in PR description; do not bump `ApplicationVersion` unless releasing.

## Drift checks (manual)

| Check | Command / action |
|-------|------------------|
| Violet light | `#4924AC` in tokens.json, tokens.css, PulseColors, Figma |
| Page dark | `#0C0B12` everywhere |
| Zone warm | MAUI key is `PulseZoneWarmUp` (not Warm) |
| Zone fat | MAUI key is `PulseZoneFatBurn` |
