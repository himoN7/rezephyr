# ReZephyr → Avalonia (.NET desktop)

**Version:** v1.0.0-beta.3 (Build 4)

Cross-platform desktop UI (Windows, Linux, macOS) without MAUI. Reuses the same ReZephyr hex + control heights.

## Consume

```xml
<!-- App.axaml -->
<Application.Resources>
  <ResourceInclude Source="avares://YourApp/Themes/ReZephyrTheme.axaml" />
</Application.Resources>
```

```csharp
using ReZephyr.Avalonia.Tokens;

button.Height = ReZephyrTokens.Control.ButtonPrimary;
```

Package stubs: [`platforms/avalonia`](../platforms/avalonia/).

## Map

| ReZephyr | Avalonia |
|----------|----------|
| Page / Card | `Background` brushes `ReZephyrPage*` / `ReZephyrCard*` |
| Accent | `ReZephyrViolet*` |
| Button primary | `Button` Height **52**, CornerRadius **16** |
| Field | `TextBox` Height **46**, radius **12** |
| Sheet | flyout / dialog top radius **28** |
| Icons | Fluent Avalonia / Segoe Fluent Icons; Linux → Adwaita fallback |

## vs MAUI

| | MAUI | Avalonia |
|--|------|----------|
| Primary mobile | Yes | No |
| Linux desktop native | Limited | Strong |
| Token keys | `ReZephyr*` XAML | Same naming in AXAML |

Do not invent a second brand palette — keep brushes synced with `tokens.json`.
