# ReZephyr → Compose Multiplatform

**Version:** v1.0.0-beta.3 (Build 4)

One Compose UI for **Android, Desktop (JVM), iOS**, and (experimental) Web. Extends the Android Kotlin stubs — do not fork a second palette.

## Consume

| Artifact | Role |
|----------|------|
| [`tokens/generated/RZTokens.kt`](../tokens/generated/RZTokens.kt) | Colors, space, control heights (`commonMain`) |
| [`tokens/generated/RZTheme.cmp.kt`](../tokens/generated/RZTheme.cmp.kt) | `ReZephyrTheme { }` Material3 wrapper |

```kotlin
// commonMain
ReZephyrTheme {
    Button(
        onClick = { },
        modifier = Modifier.height(RZControl.buttonPrimary),
    ) { Text("Continue") }
}
```

## Targets

| Target | Notes |
|--------|-------|
| Android | Primary validation surface for product apps |
| Desktop JVM | Windows / Linux / macOS windowed apps |
| iOS | Requires Mac CI for native builds |
| Web (Canvas/Skiko) | Experimental — prefer React/CSS for marketing web |

## Icons

Fluent System Icons (Compose Multiplatform packages) first; else Material Icons. Expressive emoji only in celebration/greeting surfaces.

## Relation to Android map

[`mapping/android.md`](./android.md) remains valid for pure Android. Prefer this CMP map when sharing UI across desktop/iOS from `commonMain`.
