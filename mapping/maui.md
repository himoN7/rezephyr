# ReZephyr → .NET MAUI (standalone)

**Version:** v1.0.0-beta.3 (Build 4)

## Package

**`ReZephyr.Maui`** lives at `platforms/maui/ReZephyr.Maui/` in https://github.com/himoN7/rezephyr.

- Design system name: **ReZephyr** (not Pulse, not Warpbeat)
- Resource keys: **`ReZephyr*Light` / `ReZephyr*Dark`**
- No dependency on Warpbeat

Pulse remains Warpbeat’s in-app theme name. New / independent MAUI apps should consume **ReZephyr.Maui** only.

## Apply

```csharp
using ReZephyr.Maui.Theme;

ReZephyrTheme.Apply(Application.Current!);
```

See `platforms/maui/README.md`.

## Color key map

| Token primitive | MAUI keys (append Light / Dark) |
|-----------------|----------------------------------|
| violet | `ReZephyrViolet` |
| violetTint | `ReZephyrVioletTint` |
| onViolet | `ReZephyrOnViolet` |
| page | `ReZephyrPageBackground` |
| card | `ReZephyrCard` |
| cardAlt | `ReZephyrCardAlt` |
| separator | `ReZephyrSeparator` |
| text | `ReZephyrTextPrimary` |
| textSecondary | `ReZephyrTextSecondary` |
| textTertiary | `ReZephyrTextTertiary` |
| heart / warning / danger / info / success / lime | `ReZephyr{Name}` |
| zoneRest…Peak | `ReZephyrZoneRest` … `ReZephyrZonePeak` (theme-stable) |
| petal* | `ReZephyrPetalActivity` … |

## Styles

`ReZephyrPageStyle` · `ReZephyrCardStyle` · `ReZephyrCardAltStyle` · `ReZephyrSectionTitleStyle` · `ReZephyrBodyStyle` · `ReZephyrCaptionStyle` · `ReZephyrPrimaryButtonStyle` · `ReZephyrSecondaryButtonStyle` · `ReZephyrGhostButtonStyle` · `ReZephyrDestructiveButtonStyle` · `ReZephyrEntryStyle`

## C#

```csharp
using ReZephyr.Maui.Tokens;
var h = ReZephyrTokens.Control.ButtonPrimary; // 52
```

## Example

```xml
<Button
    AutomationId="ReZephyrPrimaryCta"
    Style="{StaticResource ReZephyrPrimaryButtonStyle}"
    Text="Continue" />
```

## Warpbeat note

Warpbeat may continue to expose `Pulse*` resources as a **product theme alias**. That is Warpbeat-specific. The portable design system API is **ReZephyr***.
