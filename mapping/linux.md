# ReZephyr → Linux

**Version:** v1.0.0-beta.3 (Build 4)

ReZephyr tokens work on Linux through toolkit CSS/QML/theme layers. Prefer **system icons** (Adwaita / Freedesktop) when Fluent packages are unavailable; keep Fluent animated emoji for expressive moments only.

## Toolkit map

| Layer | Recommended stack | How to consume tokens |
|-------|-------------------|------------------------|
| GNOME / GTK4 | libadwaita | CSS variables from `tokens/tokens.css` or `tokens/linux/rezephyr.css` |
| KDE / Qt 6 | Qt Quick / QWidget | Map hex + sizes into `QPalette` / QML theme object |
| Cross-platform UI | Flutter Linux, Avalonia, Uno | Use shared token JSON; platform icon fallbacks |
| Web shell | Electron / Tauri / WebKitGTK | Link `tokens/tokens.css` directly |

## GTK / libadwaita

```css
/* See tokens/linux/rezephyr.css */
@define-color rz_accent #4924AC;
@define-color rz_page #F2F1F7;
```

```xml
<!-- Example: Adw.ApplicationWindow stylesheet -->
<style>
  window { background-color: @rz_page; }
  button.suggested-action { background-color: @rz_accent; min-height: 44px; border-radius: 16px; }
</style>
```

## Qt / QML

```qml
QtObject {
  readonly property color violet: "#4924AC"
  readonly property color page: "#F2F1F7"
  readonly property int buttonPrimary: 52
  readonly property int radiusCard: 20
}
```

## Icons on Linux

| Priority | Source |
|----------|--------|
| 1 | Microsoft Fluent icons (if packaged) |
| 2 | **Adwaita** / Freedesktop symbolic icons |
| 3 | Material Symbols (if already in the app) |

Designer icons must still follow Fluent / Adwaita geometry — no parallel custom language.

## Density

- Touch: min 44px targets (tablets / touch laptops)
- Compact: desktop pointer density; keep 8px grid

## Preview

Open `previews/index.html` (Web panel) for token visuals. For native GTK checks, load `tokens/linux/rezephyr.css` in a small Adwaita sample on Linux/WSL with a display (WSLg).
