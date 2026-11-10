# Agent prompt — Review UI against ReZephyr

**Version:** v1.0.0-beta.3 (Build 4)

---

Review the changed UI against ReZephyr.

**Read:** `design-system/rezephyr/design.md`, the relevant `mapping/*.md`, and `prompts/qa-checklist.md`.

**Report format:**
1. **Verdict:** Pass / Pass with nits / Fail
2. **Token violations:** hard-coded colors, wrong radii, missing dark mode
3. **Identity violations:** Classic polluted with Pulse, or Pulse stripped of identity
4. **Component gaps:** missing states, wrong density, chart legend issues
5. **A11y gaps:** missing AutomationIds / semantics / contrast
6. **Required fixes:** ordered list (do not invent new brand colors)

Do not approve “close enough” hex. Values must match `tokens.json` / `PulseColors.xaml`.

---
