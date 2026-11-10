# ReZephyr → .NET MAUI

**Version:** v1.0.0-beta.3 (Build 4)

## Package

**`ReZephyr.Maui`** — `platforms/maui/ReZephyr.Maui/`

- Resource keys: **`ReZephyr*Light` / `ReZephyr*Dark`**
- Apply with `ReZephyrTheme.Apply(application)`

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
| zoneRest…Peak | `ReZephyrZoneRest` … `ReZephyrZonePeak` |
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
