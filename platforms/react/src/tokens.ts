/**
 * ReZephyr tokens — React / TypeScript
 * Version: v1.0.0-beta.3 (Build 4)
 * Mirror of tokens/tokens.json — keep in sync.
 */

export const RZ_VERSION = "1.0.0-beta.3";
export const RZ_BUILD = 4;

export const RZSpace = {
  s4: 4,
  s8: 8,
  s12: 12,
  s16: 16,
  s20: 20,
  s24: 24,
  s32: 32,
  s40: 40,
  s48: 48,
} as const;

export const RZRadius = {
  r8: 8,
  r12: 12,
  r16: 16,
  r20: 20,
  r24: 24,
  r28: 28,
  pill: 999,
} as const;

export const RZControl = {
  buttonPrimary: 52,
  buttonGhost: 50,
  field: 46,
  touchMin: 44,
  margin: 20,
} as const;

export const RZColorsLight = {
  violet: "#4924AC",
  violetTint: "#ECE7FA",
  onViolet: "#FFFFFF",
  page: "#F2F1F7",
  card: "#FFFFFF",
  cardAlt: "#F7F6FB",
  separator: "#E4E2EC",
  text: "#16141F",
  textSecondary: "#6E6A7C",
  textTertiary: "#A29EB0",
  heart: "#FF2D55",
  warning: "#D98A00",
  danger: "#E5383B",
  info: "#2E86DE",
  success: "#6E8F12",
  lime: "#B9D334",
} as const;

export const RZColorsDark = {
  violet: "#9C84F2",
  violetTint: "#2A2345",
  onViolet: "#120E22",
  page: "#0C0B12",
  card: "#1A1824",
  cardAlt: "#221F2E",
  separator: "#2E2B3B",
  text: "#F4F3F8",
  textSecondary: "#A7A3B5",
  textTertiary: "#6F6B7E",
  heart: "#FF4D6D",
  warning: "#FFB938",
  danger: "#FF6B6B",
  info: "#5AA9F0",
  success: "#B9D334",
  lime: "#CFE45A",
} as const;

export const RZPetal = {
  activity: "#FF8A3D",
  consistency: "#9DBF1F",
  load: "#FFB020",
  cardio: "#FF2D55",
  recovery: "#6D4AE0",
} as const;

export const RZZone = {
  rest: "#A9B4C8",
  warm: "#B9D334",
  fat: "#FFC53D",
  cardio: "#FF8A3D",
  peak: "#FF2D55",
} as const;

export const RZMotion = {
  instant: 100,
  fast: 200,
  normal: 300,
  slow: 500,
  easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
} as const;

export type RZThemeMode = "light" | "dark";

export function rzColors(mode: RZThemeMode = "light") {
  return mode === "dark" ? RZColorsDark : RZColorsLight;
}

/** CSS custom-property map for inline style / CSS-in-JS. Prefer tokens.css for global theming. */
export function rzCssVars(mode: RZThemeMode = "light"): Record<string, string> {
  const c = rzColors(mode);
  return {
    "--rz-violet": c.violet,
    "--rz-bg-page": c.page,
    "--rz-bg-card": c.card,
    "--rz-bg-accent": c.violet,
    "--rz-fg-primary": c.text,
    "--rz-fg-secondary": c.textSecondary,
    "--rz-fg-on-accent": c.onViolet,
    "--rz-border-default": c.separator,
    "--rz-button-primary-h": `${RZControl.buttonPrimary}px`,
    "--rz-radius-16": `${RZRadius.r16}px`,
    "--rz-radius-20": `${RZRadius.r20}px`,
  };
}
