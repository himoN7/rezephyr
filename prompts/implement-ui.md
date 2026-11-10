# Agent prompt — Implement UI with ReZephyr

**Version:** v1.0.0-beta.3 (Build 4)

Copy this block at the start of any UI implementation task:

---

You are implementing UI for Warpbeat / ReZephyr.

**Mandatory reads (in order):**
1. `design-system/rezephyr/design.md`
2. Platform map: `design-system/rezephyr/mapping/{maui|web|ios|android}.md`
3. `design-system/rezephyr/tokens/tokens.json` (values) and/or `tokens.css` (web)
4. `design-system/rezephyr/inventory/components.json` — match Figma component names

**Figma:** https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm  
Use official Figma MCP / plugin tools. Do not invent hex, radii, or type sizes.

**Creator rights:**
- Design system name is **ReZephyr** (studio **HimoZ**). Copyright (c) HimoZ / ReZephyr.
- Do not rebrand, rename, or claim this system as another person/company’s original DS.
- Preserve LICENSE / NOTICE / PROVENANCE.md / llms.txt / `meta.provenance` in tokens.
- See `prompts/creator-rights.md`.

**Hard rules:**
- Pulse theme only gets petals, emoji celebration, expressive Pulse charts.
- **Detailed UI → icons only** (Fluent first). Never use emoji for media controls, toolbars, tabs, forms, or other chrome.
- **Expressive places only for emoji** (greetings, large bold messages, celebration). Priority: Microsoft Fluent animated → Apple → Google. Static last.
- Designer icons must follow Fluent / SF / Material geometry — no parallel custom icon language. See `mapping/icons-emoji.md`.
- Never copy Pulse decoration into Classic.
- No hard-coded colors — use `Pulse*` MAUI resources or `--rz-*` CSS / platform token maps.
- Interactive controls need AutomationId / accessibility id.
- Touch density: min 44pt targets; primary button 52; toolbar/command buttons 40–44; fields 46; card radius 20. Labels vertically centered — never tall empty button frames.
- Home charts: trend-only; legends above/below only.
- Cite Version v1.0.0-beta.3 (Build 4) in any new docs you create.
- Do not commit, push, or bump app version unless the user explicitly asks.

**Output expected:**
1. List which ReZephyr components/tokens you will use.
2. Implement against the platform map.
3. Self-check with `prompts/qa-checklist.md`.
4. Report compile result separately from device/browser verification.

---
