// ReZephyr tokens — Flutter / Dart reference (copy into package / generate from tokens.json)
// Version: v1.0.0-beta.3 (Build 4)

import 'package:flutter/material.dart';

class RZSpace {
  static const double s4 = 4;
  static const double s8 = 8;
  static const double s12 = 12;
  static const double s16 = 16;
  static const double s20 = 20;
  static const double s24 = 24;
  static const double s32 = 32;
  static const double s40 = 40;
  static const double s48 = 48;
}

class RZRadius {
  static const double r8 = 8;
  static const double r12 = 12;
  static const double r16 = 16;
  static const double r20 = 20;
  static const double r24 = 24;
  static const double r28 = 28;
  static const double pill = 999;
}

class RZControl {
  static const double buttonPrimary = 52;
  static const double buttonGhost = 50;
  static const double field = 46;
  static const double touchMin = 44;
  static const double margin = 20;
}

class RZColorsLight {
  static const Color violet = Color(0xFF4924AC);
  static const Color violetTint = Color(0xFFECE7FA);
  static const Color onViolet = Color(0xFFFFFFFF);
  static const Color page = Color(0xFFF2F1F7);
  static const Color card = Color(0xFFFFFFFF);
  static const Color cardAlt = Color(0xFFF7F6FB);
  static const Color separator = Color(0xFFE4E2EC);
  static const Color text = Color(0xFF16141F);
  static const Color textSecondary = Color(0xFF6E6A7C);
  static const Color textTertiary = Color(0xFFA29EB0);
  static const Color heart = Color(0xFFFF2D55);
  static const Color warning = Color(0xFFD98A00);
  static const Color danger = Color(0xFFE5383B);
  static const Color info = Color(0xFF2E86DE);
  static const Color success = Color(0xFF6E8F12);
  static const Color lime = Color(0xFFB9D334);
}

class RZColorsDark {
  static const Color violet = Color(0xFF9C84F2);
  static const Color violetTint = Color(0xFF2A2345);
  static const Color onViolet = Color(0xFF120E22);
  static const Color page = Color(0xFF0C0B12);
  static const Color card = Color(0xFF1A1824);
  static const Color cardAlt = Color(0xFF221F2E);
  static const Color separator = Color(0xFF2E2B3B);
  static const Color text = Color(0xFFF4F3F8);
  static const Color textSecondary = Color(0xFFA7A3B5);
  static const Color textTertiary = Color(0xFF6F6B7E);
  static const Color heart = Color(0xFFFF4D6D);
  static const Color warning = Color(0xFFFFB938);
  static const Color danger = Color(0xFFFF6B6B);
  static const Color info = Color(0xFF5AA9F0);
  static const Color success = Color(0xFFB9D334);
  static const Color lime = Color(0xFFCFE45A);
}

class RZPetal {
  static const Color activity = Color(0xFFFF8A3D);
  static const Color consistency = Color(0xFF9DBF1F);
  static const Color load = Color(0xFFFFB020);
  static const Color cardio = Color(0xFFFF2D55);
  static const Color recovery = Color(0xFF6D4AE0);
}

class RZZone {
  static const Color rest = Color(0xFFA9B4C8);
  static const Color warm = Color(0xFFB9D334);
  static const Color fat = Color(0xFFFFC53D);
  static const Color cardio = Color(0xFFFF8A3D);
  static const Color peak = Color(0xFFFF2D55);
}

/// Material 3 ThemeData mapped to ReZephyr roles.
ThemeData rzTheme({required Brightness brightness}) {
  final dark = brightness == Brightness.dark;
  final c = dark ? RZColorsDark : RZColorsLight;
  final scheme = ColorScheme(
    brightness: brightness,
    primary: c.violet,
    onPrimary: c.onViolet,
    secondary: c.lime,
    onSecondary: dark ? const Color(0xFF120E22) : const Color(0xFF4F6B0E),
    error: c.danger,
    onError: c.onViolet,
    surface: c.card,
    onSurface: c.text,
  );

  return ThemeData(
    useMaterial3: true,
    brightness: brightness,
    colorScheme: scheme,
    scaffoldBackgroundColor: c.page,
    cardColor: c.card,
    dividerColor: c.separator,
    fontFamily: null, // platform default (Roboto / SF / Segoe)
    textTheme: TextTheme(
      displayLarge: TextStyle(fontSize: 34, fontWeight: FontWeight.w600, height: 40 / 34, color: c.text),
      headlineMedium: TextStyle(fontSize: 28, fontWeight: FontWeight.w600, height: 34 / 28, color: c.text),
      titleLarge: TextStyle(fontSize: 20, fontWeight: FontWeight.w600, height: 26 / 20, color: c.text),
      titleMedium: TextStyle(fontSize: 17, fontWeight: FontWeight.w600, height: 22 / 17, color: c.text),
      bodyMedium: TextStyle(fontSize: 15, fontWeight: FontWeight.w400, height: 22 / 15, color: c.text),
      labelLarge: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, height: 20 / 16, color: c.onViolet),
      labelMedium: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, height: 18 / 14, color: c.text),
      bodySmall: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, height: 16 / 12, color: c.textSecondary),
    ),
    filledButtonTheme: FilledButtonThemeData(
      style: FilledButton.styleFrom(
        minimumSize: const Size(0, RZControl.buttonPrimary),
        backgroundColor: c.violet,
        foregroundColor: c.onViolet,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(RZRadius.r16)),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: c.card,
      contentPadding: const EdgeInsets.symmetric(horizontal: RZSpace.s12),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(RZRadius.r12),
        borderSide: BorderSide(color: c.separator),
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(RZRadius.r12),
        borderSide: BorderSide(color: c.violet, width: 2),
      ),
    ),
    cardTheme: CardThemeData(
      color: c.card,
      elevation: 0,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(RZRadius.r20)),
      margin: EdgeInsets.zero,
    ),
    bottomSheetTheme: BottomSheetThemeData(
      backgroundColor: c.card,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(RZRadius.r28)),
      ),
    ),
  );
}
