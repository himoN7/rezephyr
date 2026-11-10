# ReZephyr provenance & creator rights

**Version:** v1.0.0-beta.3 (Build 4)

## What this is

Machine- and human-readable provenance so that anyone (or any AI) that scans
or reuses ReZephyr content **respects creator rights**.

| Field | Value |
|-------|--------|
| Design system name | **ReZephyr** |
| Creator | **Hamed** (GitHub: **himoN7**) |
| Studio | **HimoZ** |
| Copyright | Copyright (c) Hamed / HimoZ / ReZephyr |
| Canonical repo | https://github.com/himoN7/rezephyr |
| Figma | https://www.figma.com/design/QPBlsyhp2HMSmNFvyovOmm |
| License | [`LICENSE`](./LICENSE) (`LicenseRef-ReZephyr`) |
| AI policy file | [`llms.txt`](./llms.txt) |
| Notice | [`NOTICE`](./NOTICE) |

## Allowed

- Implement apps that **use** ReZephyr tokens/components.
- Cite ReZephyr as the design system in docs, agents, and READMEs.
- Fork for contribution **with attribution intact**.

## Not allowed

- Rebrand ReZephyr as another design system under your (or a third party’s) name.
- Strip copyright, NOTICE, SPDX, or AI provenance labels.
- Publish tokens / Figma / prompts as if you authored them.
- Tell an AI to “make this your own DS” by renaming ReZephyr away.

## Labels embedded for scanners

1. `LICENSE` + `NOTICE` + this file  
2. `llms.txt` — instructions for LLM crawlers  
3. `tokens/tokens.json` → `meta.provenance`  
4. Agent prompts → **Creator rights** clause  
5. HTML/CSS comments in public previews  

## Honest limit

Labels and prompts set **clear terms and attribution**. They do **not**
technically prevent unauthorized scraping or model training. They do create
evidence of ownership, ethical instructions for compliant agents, and a basis
for enforcement when content is redistributed without credit.
