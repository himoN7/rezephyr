# ReZephyr → .NET MAUI (Warpbeat Pulse)

**Version:** v1.0.0-beta.3 (Build 4)

## Sources in app

| ReZephyr | Warpbeat |
|----------|----------|
| `tokens.json` color.primitive | `Warpbeat/Resources/Styles/PulseColors.xaml` |
| C# helpers | `Warpbeat/Services/Pulse/PulseTokens.cs` |
| Shared styles | `PulseCardStyle`, `PulseCardAltStyle`, `PulseSectionTitleStyle`, `PulseCaptionStyle`, … |

Always use `AppThemeBinding` with `*Light` / `*Dark` pairs. Never hard-code hex in Pulse pages.

## Color key map

| ReZephyr primitive | MAUI keys (Light / Dark) |
|--------------------|--------------------------|
| violet | `PulseVioletLight` / `PulseVioletDark` |
| violetTint | `PulseVioletTintLight` / `PulseVioletTintDark` |
| onViolet | `PulseOnVioletLight` / `PulseOnVioletDark` |
| lime | `PulseLimeLight` / `PulseLimeDark` |
| limeText | `PulseLimeTextLight` / `PulseLimeTextDark` |
| limeTint | `PulseLimeTintLight` / `PulseLimeTintDark` |
| page | `PulsePageBackgroundLight` / `PulsePageBackgroundDark` |
| card | `PulseCardLight` / `PulseCardDark` |
| cardAlt | `PulseCardAltLight` / `PulseCardAltDark` |
| separator | `PulseSeparatorLight` / `PulseSeparatorDark` |
| text | `PulseTextPrimaryLight` / `PulseTextPrimaryDark` |
| textSecondary | `PulseTextSecondaryLight` / `PulseTextSecondaryDark` |
| textTertiary | `PulseTextTertiaryLight` / `PulseTextTertiaryDark` |
| heart | `PulseHeartLight` / `PulseHeartDark` |
| heartTint | `PulseHeartTintLight` / `PulseHeartTintDark` |
| warning | `PulseWarningLight` / `PulseWarningDark` |
| danger | `PulseDangerLight` / `PulseDangerDark` |
| info | `PulseInfoLight` / `PulseInfoDark` |
| success | `PulseSuccessLight` / `PulseSuccessDark` |
| zoneRest | `PulseZoneRest` |
| zoneWarm | `PulseZoneWarmUp` |
| zoneFat | `PulseZoneFatBurn` |
| zoneCardio | `PulseZoneCardio` |
| zonePeak | `PulseZonePeak` |
| petal* | `PulsePetalActivity` … `PulsePetalRecovery` |

## Layout & controls

```xml
<!-- Primary CTA -->
<Button
    AutomationId="PulsePrimaryCta"
    HeightRequest="52"
    MinimumHeightRequest="44"
    CornerRadius="16"
    FontSize="16"
    FontAttributes="Bold"
    Background="{AppThemeBinding Light={StaticResource PulseVioletLight}, Dark={StaticResource PulseVioletDark}}"
    TextColor="{AppThemeBinding Light={StaticResource PulseOnVioletLight}, Dark={StaticResource PulseOnVioletDark}}" />

<!-- Card -->
<Border Style="{StaticResource PulseCardStyle}">
  ...
</Border>
```

- Page background → `PulsePageBackground*`
- Section titles → `PulseSectionTitleStyle` (20 / Bold)
- Margins → prefer 16–20; align with `--rz-margin` (20)
- Touch targets → `MinimumHeightRequest="44"` / `MinimumWidthRequest="44"`
- Icons → Fluent **Filled** for chrome; emoji only for Pulse feeling moments

## Navigation patterns

| Figma | MAUI approach |
|-------|---------------|
| Nav Bar / Large Title | Custom header on Pulse pages (`Shell.NavBarIsVisible="False"` + large title label) |
| Tab Bar / Floating Dock | Shell tabs or custom bottom bar with safe area |
| Sheet / Bottom | `CommunityToolkit` popup / modal page with radius 28 top |
| Acrylic | Platform blur where available; else opaque card |

## Charts

Use Pulse chart controls only. Home = trend-only + legend above/below. Do not add side legend columns.

## Classic guard

Files under Classic presentation must not reference `PulsePetal*`, Fluent emoji celebration overlays, or Pulse-only chart art. Shared ViewModels OK; shared decorative visuals not OK.

## Accessibility

Set `AutomationId` on every Button, Entry, Picker, CheckBox, Switch, and nav item. Prefer `SemanticProperties` for headings and live regions.
