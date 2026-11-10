// ReZephyr tokens — Kotlin / Compose-ready package (JVM Maven)
// Version: v1.0.0-beta.3 (Build 4)
package com.himpire.rezephyr

object ReZephyrInfo {
    const val Name = "ReZephyr"
    const val Version = "1.0.0-beta.3"
    const val Build = 4
    const val Attribution =
        "Design system: ReZephyr by Hamed Rezaei Aderyani (Himo / himoN7) · Himpire — https://github.com/himoN7/rezephyr"
}

/** Density-independent pixel sizes (apply as `.dp` in Compose). */
object RZSpace {
    const val s4 = 4
    const val s8 = 8
    const val s12 = 12
    const val s16 = 16
    const val s20 = 20
    const val s24 = 24
    const val s32 = 32
    const val s40 = 40
    const val s48 = 48
}

object RZRadius {
    const val r8 = 8
    const val r12 = 12
    const val r16 = 16
    const val r20 = 20
    const val r24 = 24
    const val r28 = 28
}

object RZControl {
    const val buttonPrimary = 52
    const val buttonGhost = 50
    const val field = 46
    const val touchMin = 44
    const val margin = 20
}

/** ARGB packed colors — use `Color(RZColorsLight.Violet)` in Compose. */
object RZColorsLight {
    const val Violet = 0xFF4924ACL
    const val VioletTint = 0xFFECE7FAL
    const val OnViolet = 0xFFFFFFFFL
    const val Page = 0xFFF2F1F7L
    const val Card = 0xFFFFFFFFL
    const val CardAlt = 0xFFF7F6FBL
    const val Separator = 0xFFE4E2ECL
    const val Text = 0xFF16141FL
    const val TextSecondary = 0xFF6E6A7CL
    const val TextTertiary = 0xFFA29EB0L
    const val Heart = 0xFFFF2D55L
    const val Warning = 0xFFD98A00L
    const val Danger = 0xFFE5383BL
    const val Info = 0xFF2E86DEL
    const val Success = 0xFF6E8F12L
    const val Lime = 0xFFB9D334L
}

object RZColorsDark {
    const val Violet = 0xFF9C84F2L
    const val VioletTint = 0xFF2A2345L
    const val OnViolet = 0xFF120E22L
    const val Page = 0xFF0C0B12L
    const val Card = 0xFF1A1824L
    const val CardAlt = 0xFF221F2EL
    const val Separator = 0xFF2E2B3BL
    const val Text = 0xFFF4F3F8L
    const val TextSecondary = 0xFFA7A3B5L
    const val TextTertiary = 0xFF6F6B7EL
    const val Heart = 0xFFFF4D6DL
    const val Warning = 0xFFFFB938L
    const val Danger = 0xFFFF6B6BL
    const val Info = 0xFF5AA9F0L
    const val Success = 0xFFB9D334L
    const val Lime = 0xFFCFE45AL
}

object RZPetal {
    const val Activity = 0xFFFF8A3DL
    const val Consistency = 0xFF9DBF1FL
    const val Load = 0xFFFFB020L
    const val Cardio = 0xFFFF2D55L
    const val Recovery = 0xFF6D4AE0L
}

object RZZone {
    const val Rest = 0xFFA9B4C8L
    const val Warm = 0xFFB9D334L
    const val Fat = 0xFFFFC53DL
    const val Cardio = 0xFFFF8A3DL
    const val Peak = 0xFFFF2D55L
}
