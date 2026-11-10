# ReZephyr Android / Compose (Maven)

**Version:** v1.0.0-beta.3 (Build 4)  
**Coordinates:** `com.himpire.rezephyr:rezephyr-compose:1.0.0-beta.3`

```kotlin
repositories {
  maven {
    url = uri("https://maven.pkg.github.com/himoN7/rezephyr")
    credentials {
      username = "YOUR_GITHUB_USERNAME"
      password = "YOUR_GITHUB_TOKEN" // read:packages
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
// Compose: Color(RZColorsLight.Violet) and RZControl.buttonPrimary.dp
```
