# [Maintainer] Swift checks on Windows / WSL

**Version:** v1.0.0-beta.3 (Build 4)  
**Scope:** Local notes for Hamed’s Windows/WSL setup — **not** a public consumer guide.

Public SwiftUI map: `mapping/ios.md` + `tokens/generated/RZTokens.swift`.  
Public previews: `previews/` (any OS with a browser).

## Short answer (this machine)

| Goal | Windows | WSL |
|------|---------|-----|
| Compile **token stubs** (`RZTokens.swift`) | Possible with Swift for Windows | Possible with Swift on Linux |
| Run **SwiftUI** native UI | **No** — SwiftUI is Apple-only | **No** |
| Run iOS Simulator | **No** | **No** |
| Visual check of ReZephyr | Use `previews/index.html` (Web / Apple-framed HTML) | Same, or WSLg browser |

## What you *can* do on Windows/WSL

1. **Token contract** — `node tests/harness/run-all.mjs --platform=ios`
2. **Swift toolchain (optional)** — Swift for Windows / Swift in WSL for CLI token checks (not UI)
3. **Visual Apple-framed UI** — `previews/index.html` → **Apple** tab

## What requires a Mac

- SwiftUI / UIKit apps, Xcode previews, iOS Simulator / device

## Linux UI (related)

GTK/Qt maps stay public in `mapping/linux.md`. WSL+WSLg is a local convenience only.
