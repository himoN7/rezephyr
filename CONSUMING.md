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

| Package | Registry |
|---------|----------|
| `ReZephyr.Maui` | GitHub NuGet / nuget.org |
| `ReZephyr.Avalonia` | GitHub NuGet / nuget.org |
| `ReZephyr.Tokens` | GitHub NuGet (JSON/CSS/Swift/Kotlin/Dart sources) |
| `com.himpire.rezephyr:rezephyr-compose` | GitHub Maven |
| `@himoN7/rezephyr-react` | GitHub npm |
| **ReZephyr** (SPM) | Swift Package Manager via git tag |
| **rezephyr** (Flutter) | Git path dependency |

Packages: https://github.com/himoN7?tab=packages

## NuGet (.NET)

```bash
dotnet nuget add source "https://nuget.pkg.github.com/himoN7/index.json" \
  --name github-himoN7 \
  --username himoN7 \
  --password YOUR_GITHUB_TOKEN \
  --store-password-in-clear-text

dotnet add package ReZephyr.Maui --version 1.0.0-beta.3 --source github-himoN7
dotnet add package ReZephyr.Avalonia --version 1.0.0-beta.3 --source github-himoN7
dotnet add package ReZephyr.Tokens --version 1.0.0-beta.3 --source github-himoN7
```

```csharp
using ReZephyr.Maui.Theme;
ReZephyrTheme.Apply(this);
```

## Android / Jetpack Compose (Maven)

```kotlin
repositories {
  maven {
    url = uri("https://maven.pkg.github.com/himoN7/rezephyr")
    credentials {
      username = "YOUR_GITHUB_USERNAME"
      password = System.getenv("GITHUB_TOKEN")
    }
  }
}
dependencies {
  implementation("com.himpire.rezephyr:rezephyr-compose:1.0.0-beta.3")
}
```

```kotlin
import com.himpire.rezephyr.RZColorsLight
import com.himpire.rezephyr.RZControl
```

## Swift (SPM)

```swift
dependencies: [
  .package(url: "https://github.com/himoN7/rezephyr.git", from: "1.0.0-beta.3")
]
// product: ReZephyr
```

```swift
import ReZephyr
Color.rzViolet()
```

## Flutter

```yaml
dependencies:
  rezephyr:
    git:
      url: https://github.com/himoN7/rezephyr.git
      path: platforms/flutter/rezephyr
      ref: v1.0.0-beta.3
```

```dart
import 'package:rezephyr/rezephyr.dart';
MaterialApp(theme: rzTheme(brightness: Brightness.light));
```

## React / TypeScript (npm)

```bash
# .npmrc
@himoN7:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN

npm install @himoN7/rezephyr-react@1.0.0-beta.3
```

## Web / Tauri / static

```html
<link rel="stylesheet" href="tokens/tokens.css" />
<html data-theme="light">
```

## Attribution checklist

- [ ] Credit line in README or About
- [ ] Keep `ReZephyr*` / `--rz-*` / `RZ*` names (or document product aliases without claiming DS authorship)
- [ ] Do not republish as another design system under your brand

See [PROVENANCE.md](./PROVENANCE.md) and [llms.txt](./llms.txt).
