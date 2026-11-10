// swift-tools-version: 5.9
// ReZephyr Swift Package — Version: v1.0.0-beta.3 (Build 4)
// Copyright (c) Hamed Rezaei Aderyani (Himo / himoN7) / Himpire / ReZephyr
import PackageDescription

let package = Package(
    name: "ReZephyr",
    platforms: [
        .iOS(.v15),
        .macOS(.v12),
        .tvOS(.v15),
        .watchOS(.v8)
    ],
    products: [
        .library(name: "ReZephyr", targets: ["ReZephyr"])
    ],
    targets: [
        .target(
            name: "ReZephyr",
            path: "platforms/swift/Sources/ReZephyr"
        )
    ]
)
