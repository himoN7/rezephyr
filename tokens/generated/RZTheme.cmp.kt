// ReZephyr — Compose Multiplatform theme stub
// Version: v1.0.0-beta.3 (Build 4)
// Shares color/space objects with RZTokens.kt; use in commonMain.

package designsystem.rezephyr

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

private val LightScheme = lightColorScheme(
    primary = RZColorsLight.Violet,
    onPrimary = RZColorsLight.OnViolet,
    background = RZColorsLight.Page,
    surface = RZColorsLight.Card,
    onBackground = RZColorsLight.Text,
    onSurface = RZColorsLight.Text,
    error = RZColorsLight.Danger,
    outline = RZColorsLight.Separator,
)

private val DarkScheme = darkColorScheme(
    primary = RZColorsDark.Violet,
    onPrimary = RZColorsDark.OnViolet,
    background = RZColorsDark.Page,
    surface = RZColorsDark.Card,
    onBackground = RZColorsDark.Text,
    onSurface = RZColorsDark.Text,
    error = RZColorsDark.Danger,
    outline = RZColorsDark.Separator,
)

val RZShapes = Shapes(
    small = RoundedCornerShape(8.dp),
    medium = RoundedCornerShape(12.dp),
    large = RoundedCornerShape(20.dp),
    extraLarge = RoundedCornerShape(28.dp),
)

@Composable
fun ReZephyrTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    MaterialTheme(
        colorScheme = if (darkTheme) DarkScheme else LightScheme,
        shapes = RZShapes,
        content = content,
    )
}

/** Accent fill for primary actions outside Material defaults. */
val Color.Companion.ReZephyrAccent: Color
    get() = RZColorsLight.Violet
