/**
 * ReZephyr primary button — React reference
 * Version: v1.0.0-beta.3 (Build 4)
 */
import type { ButtonHTMLAttributes, CSSProperties } from "react";
import { RZControl, RZRadius, rzColors, type RZThemeMode } from "./tokens.js";

export type RzButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mode?: RZThemeMode;
  variant?: "primary" | "ghost";
};

export function RzButton({
  mode = "light",
  variant = "primary",
  style,
  disabled,
  children,
  ...rest
}: RzButtonProps) {
  const c = rzColors(mode);
  const primary = variant === "primary";
  const base: CSSProperties = {
    height: primary ? RZControl.buttonPrimary : RZControl.buttonGhost,
    minHeight: RZControl.touchMin,
    padding: "0 20px",
    border: primary ? "0" : `1px solid ${c.separator}`,
    borderRadius: RZRadius.r16,
    background: primary ? c.violet : "transparent",
    color: primary ? c.onViolet : c.text,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: "20px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.38 : 1,
    fontFamily: '"Segoe UI", "Segoe UI Variable", system-ui, sans-serif',
    ...style,
  };

  return (
    <button
      type="button"
      disabled={disabled}
      data-automation-id="rz-button-primary"
      style={base}
      {...rest}
    >
      {children}
    </button>
  );
}
