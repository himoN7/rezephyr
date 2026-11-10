# Consuming ReZephyr

**Version:** v1.0.0-beta.3 (Build 4)  
**License:** [ReZephyr Attribution License](./LICENSE) — use freely **with credit** to **Hamed Rezaei Aderyani / Himo / himoN7 / Himpire / ReZephyr**.  
**Full guide:** [GUIDE.md](./GUIDE.md)

Required credit line:

```text
Design system: ReZephyr by Hamed Rezaei Aderyani (Himo / himoN7) · Himpire
https://github.com/himoN7/rezephyr
```

## Quick options

| How | Best for |
|-----|----------|
| **GitHub NuGet** `ReZephyr.Maui` / `ReZephyr.Avalonia` | .NET apps (recommended) |
| **nuget.org** (same IDs) | Public NuGet when published |
| **GitHub npm** `@himoN7/rezephyr-react` | React / TypeScript |
| GitHub Release `.nupkg` / `.tgz` | Offline / CI without registry |
| Copy `tokens/tokens.css` | Any web / Tauri |
| Copy generated stubs | Flutter, Swift, Kotlin |

## NuGet (MAUI / Avalonia)

### GitHub Packages

1. Create a classic PAT (or use `gh auth token`) with `read:packages` (and `repo` if private).
2. Add the source once:

```bash
dotnet nuget add source "https://nuget.pkg.github.com/himoN7/index.json" \
  --name github-himoN7 \
  --username himoN7 \
  --password YOUR_GITHUB_TOKEN \
  --store-password-in-clear-text
```

3. Install:

```bash
dotnet add package ReZephyr.Maui --version 1.0.0-beta.3 --source github-himoN7
dotnet add package ReZephyr.Avalonia --version 1.0.0-beta.3 --source github-himoN7
```

Packages: https://github.com/himoN7?tab=packages

### nuget.org

When published to nuget.org:

```bash
dotnet add package ReZephyr.Maui --version 1.0.0-beta.3
dotnet add package ReZephyr.Avalonia --version 1.0.0-beta.3
```

### Apply (MAUI)

```csharp
using ReZephyr.Maui.Theme;
ReZephyrTheme.Apply(this);
```

## React / TypeScript

### GitHub Packages

```bash
# .npmrc
@himoN7:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

npm install @himoN7/rezephyr-react@1.0.0-beta.3
```

### From git / local

```bash
npm install github:himoN7/rezephyr#v1.0.0-beta.3
# or copy platforms/react into your monorepo
```

```ts
import { RzButton, RZControl } from "@himoN7/rezephyr-react";
```

Also link [`tokens/tokens.css`](./tokens/tokens.css).

## Web / Tauri / static

```html
<link rel="stylesheet" href="tokens/tokens.css" />
<html data-theme="light">
```

## Flutter

Copy [`tokens/generated/rz_tokens.dart`](./tokens/generated/rz_tokens.dart):

```dart
theme: rzTheme(brightness: Brightness.light),
```

## Kotlin / Compose Multiplatform

Copy `tokens/generated/RZTokens.kt` + `RZTheme.cmp.kt` into `commonMain`.

## Avalonia

Copy `platforms/avalonia/ReZephyr.Avalonia` tokens + AXAML theme, or project-reference the stub project.

## Attribution checklist

- [ ] Credit line in README or About
- [ ] Keep `ReZephyr*` / `--rz-*` / `RZ*` names (or document product aliases without claiming DS authorship)
- [ ] Do not republish as another design system under your brand

See [PROVENANCE.md](./PROVENANCE.md) and [llms.txt](./llms.txt).
