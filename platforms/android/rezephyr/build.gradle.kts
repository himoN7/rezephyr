plugins {
    id("com.android.library")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
    id("maven-publish")
}

group = "com.himpire.rezephyr"
version = "1.0.0-beta.3"

android {
    namespace = "com.himpire.rezephyr"
    compileSdk = 35

    defaultConfig {
        minSdk = 24
        consumerProguardFiles("consumer-rules.pro")
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    buildFeatures {
        compose = true
    }
    publishing {
        singleVariant("release") {
            withSourcesJar()
        }
    }
}

dependencies {
    implementation(platform("androidx.compose:compose-bom:2024.10.01"))
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.foundation:foundation")
}

afterEvaluate {
    publishing {
        publications {
            create<MavenPublication>("release") {
                from(components["release"])
                groupId = "com.himpire.rezephyr"
                artifactId = "rezephyr-compose"
                version = project.version.toString()
                pom {
                    name.set("ReZephyr Compose")
                    description.set("ReZephyr design tokens for Jetpack Compose by Hamed Rezaei Aderyani / Himpire")
                    url.set("https://github.com/himoN7/rezephyr")
                    licenses {
                        license {
                            name.set("ReZephyr Attribution License")
                            url.set("https://github.com/himoN7/rezephyr/blob/main/LICENSE")
                        }
                    }
                    developers {
                        developer {
                            id.set("himoN7")
                            name.set("Hamed Rezaei Aderyani")
                            organization.set("Himpire")
                        }
                    }
                    scm {
                        url.set("https://github.com/himoN7/rezephyr")
                    }
                }
            }
        }
        repositories {
            maven {
                name = "GitHubPackages"
                url = uri("https://maven.pkg.github.com/himoN7/rezephyr")
                credentials {
                    username = System.getenv("GITHUB_ACTOR") ?: "himoN7"
                    password = System.getenv("GITHUB_TOKEN") ?: ""
                }
            }
        }
    }
}
