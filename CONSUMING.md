# Consuming ReZephyr

**Version:** v1.0.0-beta.3 (Build 4)  
**License:** [ReZephyr Attribution License](./LICENSE) — use freely **with credit** to **Hamed / HimoZ / ReZephyr**.

Required credit line:

```text
Design system: ReZephyr by Hamed / HimoZ
https://github.com/himoN7/rezephyr
```

## Quick options

| How | Best for |
|-----|----------|
| Git submodule / clone | Full tokens + maps + prompts |
| NuGet `ReZephyr.Maui` | .NET MAUI apps |
| npm / GitHub `platforms/react` | React / TypeScript |
| Copy `tokens/tokens.css` | Any web / Tauri |
| Copy generated stubs | Flutter, Swift, Kotlin, Avalonia |

## NuGet (MAUI)

From a GitHub Release asset (`.nupkg`) or local pack:

```bash
dotnet pack platforms/maui/ReZephyr.Maui/ReZephyr.Maui.csproj -c Release -o artifacts
dotnet add package ReZephyr.Maui --source ./artifacts
```

```csharp
using ReZephyr.Maui.Theme;
ReZephyrTheme.Apply(this);
```

## React / TypeScript

```bash
# from your app (path or git URL)
npm install github:himoN7/rezephyr#v1.0.0-beta.3
# or copy platforms/react into your monorepo
```

```ts
import { RzButton, RZControl } from "./path/to/platforms/react/src";
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
