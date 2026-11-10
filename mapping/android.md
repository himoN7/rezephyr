# ReZephyr → Android / Jetpack Compose

**Version:** v1.0.0-beta.3 (Build 4)

## Theme

Define a Compose `ColorScheme` (and XML colors if needed) from `tokens.json`:

```kotlin
object RZColors {
    val VioletLight = Color(0xFF4924AC)
    val VioletDark = Color(0xFF9C84F2)
    val PageLight = Color(0xFFF2F1F7)
    val PageDark = Color(0xFF0C0B12)
    val CardLight = Color(0xFFFFFFFF)
    val CardDark = Color(0xFF1A1824)
    val TextPrimaryLight = Color(0xFF16141F)
    val TextPrimaryDark = Color(0xFFF4F3F8)
    // …full set in tokens.json
}

fun rzColorScheme(dark: Boolean) = if (dark) darkColorScheme(
    primary = RZColors.VioletDark,
    onPrimary = Color(0xFF120E22),
    background = RZColors.PageDark,
    surface = RZColors.CardDark,
    onBackground = RZColors.TextPrimaryDark,
    error = Color(0xFFFF6B6B),
) else lightColorScheme(
    primary = RZColors.VioletLight,
    onPrimary = Color.White,
    background = RZColors.PageLight,
    surface = RZColors.CardLight,
    onBackground = RZColors.TextPrimaryLight,
    error = Color(0xFFE5383B),
)
```

## Type

Use Material 3 type scale remapped to ReZephyr roles (Roboto / platform default — not Inter):

| Role | sp | Weight |
|------|----|--------|
| display | 34 | SemiBold |
| title | 28 | SemiBold |
| section | 20 | SemiBold |
| headline | 17 | SemiBold |
| body | 15 | Normal |
| label | 14 | SemiBold |
| caption | 12 | SemiBold |

## Shapes & sizes

```kotlin
val RZShapes = Shapes(
    small = RoundedCornerShape(8.dp),
    medium = RoundedCornerShape(12.dp),
    large = RoundedCornerShape(20.dp),
    extraLarge = RoundedCornerShape(28.dp),
)

val ButtonPrimaryHeight = 52.dp
val FieldHeight = 46.dp
val TouchMin = 44.dp
val PageMargin = 20.dp
```

## Components

| Figma | Compose |
|-------|---------|
| Button / Primary | `Button` / `FilledTonalButton` with primary colors, 52.dp |
| Chip | `FilterChip` selected → violet tint |
| Text Field | `OutlinedTextField` radius 12 |
| Switch | `Switch` with primary thumb/track |
| App Bar | `TopAppBar` / large title scaffold |
| Tab Bar | `NavigationBar` |
| Sheet | `ModalBottomSheet` shape = 28.dp top |
| Snackbar | `Snackbar` / toast tone colors |
| Data Grid | Lazy table / custom header row |
| Widget | Glance / App Widget using same color resources |
| Acrylic | `Modifier.blur` + translucent surface where API allows |

## Accessibility

- `Modifier.semantics { contentDescription = … }`
- Min touch 48.dp preferred on Android (Material); never below 44.dp
- Contrast: primary text on page/card must pass AA

## Warpbeat note

Android is the **primary validation platform** for Warpbeat. Measure performance claims on device; do not equate desktop algorithm timings with Android UI timings.
