plugins {
    kotlin("jvm")
    `maven-publish`
}

group = "com.himpire.rezephyr"
version = "1.0.0-beta.3"

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(17))
    }
    withSourcesJar()
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            from(components["java"])
            groupId = "com.himpire.rezephyr"
            artifactId = "rezephyr-compose"
            version = project.version.toString()
            pom {
                name.set("ReZephyr Compose Tokens")
                description.set("ReZephyr design tokens for Kotlin/Compose apps by Hamed Rezaei Aderyani / Himpire")
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
