// ReZephyr tokens — Swift Package
// Version: v1.0.0-beta.3 (Build 4)
// Copyright (c) Hamed Rezaei Aderyani (Himo / himoN7) / Himpire / ReZephyr

import SwiftUI

public enum ReZephyrInfo {
    public static let name = "ReZephyr"
    public static let version = "1.0.0-beta.3"
    public static let build = 4
    public static let attribution =
        "Design system: ReZephyr by Hamed Rezaei Aderyani (Himo / himoN7) · Himpire — https://github.com/himoN7/rezephyr"
}

public enum RZSpace {
    public static let s4: CGFloat = 4
    public static let s8: CGFloat = 8
    public static let s12: CGFloat = 12
    public static let s16: CGFloat = 16
    public static let s20: CGFloat = 20
    public static let s24: CGFloat = 24
    public static let s32: CGFloat = 32
    public static let s40: CGFloat = 40
    public static let s48: CGFloat = 48
}

public enum RZRadius {
    public static let r8: CGFloat = 8
    public static let r12: CGFloat = 12
    public static let r16: CGFloat = 16
    public static let r20: CGFloat = 20
    public static let r24: CGFloat = 24
    public static let r28: CGFloat = 28
    public static let pill: CGFloat = 999
}

public enum RZControl {
    public static let buttonPrimary: CGFloat = 52
    public static let buttonGhost: CGFloat = 50
    public static let field: CGFloat = 46
    public static let touchMin: CGFloat = 44
    public static let margin: CGFloat = 20
}

public enum RZHex {
    public static let violetLight = "4924AC"
    public static let violetDark = "9C84F2"
    public static let pageLight = "F2F1F7"
    public static let pageDark = "0C0B12"
    public static let cardLight = "FFFFFF"
    public static let cardDark = "1A1824"
    public static let textLight = "16141F"
    public static let textDark = "F4F3F8"
    public static let textSecondaryLight = "6E6A7C"
    public static let textSecondaryDark = "A7A3B5"
    public static let separatorLight = "E4E2EC"
    public static let separatorDark = "2E2B3B"
    public static let heartLight = "FF2D55"
    public static let heartDark = "FF4D6D"
    public static let onVioletLight = "FFFFFF"
    public static let onVioletDark = "120E22"
    public static let petalActivity = "FF8A3D"
    public static let petalConsistency = "9DBF1F"
    public static let petalLoad = "FFB020"
    public static let petalCardio = "FF2D55"
    public static let petalRecovery = "6D4AE0"
}

public extension Color {
    init(rzHex: String) {
        let hex = rzHex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let r, g, b: UInt64
        switch hex.count {
        case 6:
            (r, g, b) = ((int >> 16) & 0xFF, (int >> 8) & 0xFF, int & 0xFF)
        default:
            (r, g, b) = (0, 0, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: 1
        )
    }

    static func rzViolet(dark: Bool = false) -> Color {
        Color(rzHex: dark ? RZHex.violetDark : RZHex.violetLight)
    }

    static func rzPage(dark: Bool = false) -> Color {
        Color(rzHex: dark ? RZHex.pageDark : RZHex.pageLight)
    }

    static func rzCard(dark: Bool = false) -> Color {
        Color(rzHex: dark ? RZHex.cardDark : RZHex.cardLight)
    }
}
