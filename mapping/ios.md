# ReZephyr → iOS / SwiftUI

**Version:** v1.0.0-beta.3 (Build 4)

## Color assets

Create an asset catalog (or Swift constants) mirroring `tokens.json` light/dark pairs:

```swift
enum RZColor {
    static let violet = Color("RZViolet")           // #4924AC / #9C84F2
    static let page = Color("RZPage")               // #F2F1F7 / #0C0B12
    static let card = Color("RZCard")
    static let textPrimary = Color("RZTextPrimary")
    static let textSecondary = Color("RZTextSecondary")
    static let separator = Color("RZSeparator")
    static let heart = Color("RZHeart")
    // petals & zones — see tokens.json
}
```

Prefer `Color("…")` assets with Any Appearance / Dark Appearance over hard-coded hex in views.

## Type

Map to Dynamic Type where possible; design sizes are the **default** Large content size:

| Role | Approx UIFont | Design size |
|------|---------------|-------------|
| Display | `.largeTitle` bold | 34 |
| Title | `.title1` | 28 |
| Section | `.title3` | 20 |
| Headline | `.headline` | 17 |
| Body | `.body` | 15–17 |
| Caption | `.caption1` | 12 |

Font: SF Pro. Do not ship Inter on iOS.

## Controls

| Figma | SwiftUI |
|-------|---------|
| Button / Primary | `Button` + `.buttonStyle(RZPrimaryButtonStyle())` — height 52, corner 16, violet fill |
| Text Field | `TextField` in rounded rect, height ≥ 46, radius 12 |
| Toggle | system `Toggle` tinted with violet |
| Segmented | `Picker(.segmented)` or custom chip row |
| Tab Bar | `TabView` — filled SF Symbols for chrome |
| Sheet | `.sheet` / `.presentationDetents` — top radius ~28 |
| Action Sheet | `confirmationDialog` |
| Nav Large Title | `.navigationBarTitleDisplayMode(.large)` |
| Widget | WidgetKit; colors from same asset catalog |

## Layout

- Horizontal padding: 16–20
- Touch: 44pt minimum
- Safe area: respect home indicator; floating docks need extra bottom inset (~88 design)

## Materials

```swift
.background(.ultraThinMaterial) // acrylic analogue on bars/docks
```

Fallback: opaque `RZColor.card.opacity(0.92)`.

## Motion

Use `withAnimation(.easeInOut(duration: 0.3))` for standard. Respect Reduce Motion: disable petal stagger.

## Pulse-only

Petal bloom, celebration emoji overlays, and expressive Pulse charts are optional product features — gate them behind the Pulse identity; never treat them as required system chrome.
