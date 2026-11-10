# Agent prompt — Add a ReZephyr component

**Version:** v1.0.0-beta.3 (Build 4)

---

You are extending the ReZephyr design system with a new component.

**Steps:**
1. Confirm it does not already exist in `inventory/components.json` or Figma file `QPBlsyhp2HMSmNFvyovOmm`.
2. Design in Figma with variants for required **State** and **Density** (Touch|Compact).
3. Use only existing color / type / space / radius tokens — propose new tokens in `tokens.json` only if unavoidable, and document why.
4. Update:
   - `inventory/components.json`
   - relevant `mapping/*.md` (control → platform widget)
   - Figma library
5. Provide a minimal implementation snippet for the target platform(s).
6. Do not bump Warpbeat app version unless releasing.

**Component contract:**
- Name: `Category / Name` (e.g. `Button / Primary`)
- Properties: State, Density, and any Content (label, icon)
- Spec: height, padding, radius, type role, colors (semantic)
- A11y: role, focus, disabled semantics

---
