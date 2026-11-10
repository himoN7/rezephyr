# ReZephyr QA checklist

**Version:** v1.0.0-beta.3 (Build 4)

Use before marking a UI task done.

## Tokens

- [ ] No new hard-coded hex / magic radii — all from tokens or `Pulse*` resources
- [ ] Light and Dark both correct (`AppThemeBinding` / `data-theme` / asset catalog)
- [ ] Semantic roles used (accent, page, card, secondary text) instead of one-off colors

## Layout & density

- [ ] Page margins ~16–20
- [ ] Touch targets ≥ 44×44 (Android prefer 48)
- [ ] Primary CTA height ~52; fields ~46
- [ ] Card radius 20 (alt 16); sheet top 28

## Components

- [ ] Matches named inventory / Figma component
- [ ] States covered as needed: Rest, Pressed, Focus, Disabled, Loading, Error, Selected
- [ ] Focus ring / focus-visible uses violet
- [ ] Button/toolbar heights match tokens (primary ~52, command/toolbar ~36–44); labels vertically centered

## Icons & emoji

- [ ] Feeling/celebration emoji: Fluent animated → Apple → Google (see `mapping/icons-emoji.md`)
- [ ] Chrome icons: Fluent first; else platform system set
- [ ] Custom designer icons cite the system they mirror

## Identity

- [ ] If Classic surface: no petals, no emoji art, no Pulse celebration overlays
- [ ] If Pulse: expressive identity preserved (do not “flatten” into Classic)
- [ ] Charts: trend-only on Home; legend above/below, not side column
- [ ] Creator rights: system named **ReZephyr** (Himpire / Hamed Rezaei Aderyani); no rebrand / false authorship; provenance files intact

## Creator rights

- [ ] Outputs cite ReZephyr by Hamed Rezaei Aderyani (Himo / himoN7) · Himpire
- [ ] Did not credit HimoZ as creator/studio
- [ ] Did not strip LICENSE, NOTICE, PROVENANCE.md, llms.txt, GUIDE.md, or `meta.provenance`

## Accessibility

- [ ] AutomationId / semantics on interactive controls
- [ ] Headings marked where appropriate
- [ ] Contrast AA for primary text on surfaces

## Motion

- [ ] Durations from token scale (or platform equivalent)
- [ ] Reduced-motion path: no petal stagger / sheet spring

## Verification

- [ ] Compile/build result stated
- [ ] Device or browser check stated separately (or explicitly “not verified on device”)
