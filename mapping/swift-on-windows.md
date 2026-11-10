# Swift checks on Windows / WSL

**Version:** v1.0.0-beta.3 (Build 4)

## Short answer

| Goal | Windows | WSL |
|------|---------|-----|
| Compile **token stubs** (`RZTokens.swift`) | Possible with Swift for Windows | Possible with Swift on Linux |
| Run **SwiftUI** native UI | **No** — SwiftUI is Apple-only | **No** |
| Run iOS Simulator | **No** | **No** |
| Visual check of ReZephyr | Use `previews/index.html` (Web / Apple-framed HTML) | Same, or WSLg browser |

## What you *can* do on Windows/WSL

1. **Token contract** — already covered by `npm test` / `npm run test:ios` (validates `tokens/generated/RZTokens.swift`).
2. **Swift toolchain (optional)** — install [Swift for Windows](https://www.swift.org/install/windows/) or Swift in WSL to compile a tiny CLI that prints token constants (not UI).
3. **Visual Apple-framed UI** — `previews/index.html` → **Apple** tab (390×844 large-title / dock / sheet simulation).

## What requires a Mac

- SwiftUI / UIKit apps
- Xcode previews
- iOS Simulator / device

Alternatives: cloud Mac CI, remote Mac, or keep using the HTML Apple preview + real device later.

## Linux UI (related)

For desktop Linux apps (GTK/Qt), see `mapping/linux.md` — that *does* run on WSL with WSLg or a full Linux desktop.
