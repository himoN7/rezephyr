# ReZephyr → Flutter / Dart

**Version:** v1.0.0-beta.3 (Build 4)

## Consume tokens

Copy [`tokens/generated/rz_tokens.dart`](../tokens/generated/rz_tokens.dart) into your Flutter package (or generate from `tokens.json`).

```dart
import 'rz_tokens.dart';

MaterialApp(
  theme: rzTheme(brightness: Brightness.light),
  darkTheme: rzTheme(brightness: Brightness.dark),
  themeMode: ThemeMode.system,
  home: const Scaffold(/* … */),
);
```

## Roles → Flutter

| ReZephyr | Flutter |
|----------|---------|
| `bg.page` | `scaffoldBackgroundColor` / `ColorScheme.surface` companion |
| `bg.accent` | `ColorScheme.primary` |
| `fg.onAccent` | `ColorScheme.onPrimary` |
| Button / Primary | `FilledButton` height **52** |
| Field | `TextField` + `InputDecoration` radius **12** |
| Card | `Card` radius **20** |
| Sheet | `showModalBottomSheet` top radius **28** |
| Chip | `FilterChip` selected → violet tint |
| Icons (detailed UI) | Fluent icons package if available; else Material Symbols |
| Expressive emoji | Fluent animated → Apple → Google (static last) |

## Density

- Touch: min **44** logical px (`RZControl.touchMin`)
- Primary button: **52**
- Keep 8px grid (`RZSpace.s8`)

## Platforms

Same `ThemeData` for Android, iOS, Web, Windows, macOS, and Linux. Prefer platform system icons when Fluent is not packaged.

## Charts

Trend-only home charts; petal / zone colors from `RZPetal` / `RZZone`. Legend above or below the plot.
