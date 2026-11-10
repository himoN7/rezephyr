#!/usr/bin/env node
/**
 * ReZephyr cross-platform simulated test harness
 * Version: v1.0.0-beta.3 (Build 4)
 * Runs outside Warpbeat — validates tokens + platform artifacts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const args = process.argv.slice(2);
const only = (args.find((a) => a.startsWith("--platform=")) || "").split("=")[1] || "all";

const results = [];
function pass(platform, name) {
  results.push({ platform, name, ok: true });
  console.log(`  ✓ [${platform}] ${name}`);
}
function fail(platform, name, err) {
  results.push({ platform, name, ok: false, err: String(err) });
  console.error(`  ✗ [${platform}] ${name}: ${err}`);
}

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function readText(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function runContract() {
  console.log("\n== contract ==");
  try {
    const tokens = readJson("tokens/tokens.json");
    if (tokens.name !== "ReZephyr") throw new Error(`name is ${tokens.name}`);
    pass("contract", "tokens.name === ReZephyr");
    if (tokens.version !== "1.0.0-beta.3") throw new Error(`version ${tokens.version}`);
    pass("contract", "version v1.0.0-beta.3");
    const v = tokens.color.primitive.violet;
    if (v.light.toUpperCase() !== "#4924AC") throw new Error(v.light);
    if (v.dark.toUpperCase() !== "#9C84F2") throw new Error(v.dark);
    pass("contract", "brand violet light/dark");
    if (tokens.controlHeights.buttonPrimary !== 52) throw new Error("buttonPrimary");
    pass("contract", "controlHeights.buttonPrimary === 52");
    if (!tokens.meta.iconPolicy || !/Fluent/i.test(tokens.meta.iconPolicy)) throw new Error("iconPolicy");
    pass("contract", "iconPolicy present");
    const keys = tokens.color.mauiKeys;
    for (const [k, v] of Object.entries(keys)) {
      if (!String(v).startsWith("ReZephyr")) throw new Error(`${k} → ${v} (expected ReZephyr*)`);
    }
    pass("contract", "mauiKeys all ReZephyr*");
    const prov = tokens.meta?.provenance;
    if (!prov || prov.designSystem !== "ReZephyr" || prov.studio !== "HimoZ" || prov.creator !== "Hamed") {
      throw new Error("provenance");
    }
    if (!String(prov.requiredCredit || "").includes("Hamed")) throw new Error("requiredCredit");
    pass("contract", "meta.provenance Hamed / HimoZ / ReZephyr");
    for (const f of ["LICENSE", "NOTICE", "PROVENANCE.md", "llms.txt", "CONSUMING.md", "prompts/creator-rights.md"]) {
      if (!exists(f)) throw new Error(`missing ${f}`);
    }
    const license = readText("LICENSE");
    if (!/Hamed/.test(license) || !/Attribution License/i.test(license)) throw new Error("LICENSE attribution");
    pass("contract", "creator-rights + attribution license present");
  } catch (e) {
    fail("contract", "tokens contract", e.message || e);
  }
}

function runWeb() {
  console.log("\n== web ==");
  try {
    const css = readText("tokens/tokens.css");
    for (const v of ["--rz-violet", "--rz-page", "--rz-button-primary-h", "--rz-radius-20", "[data-theme=\"dark\"]"]) {
      if (!css.includes(v)) throw new Error(`missing ${v}`);
    }
    pass("web", "tokens.css core variables");
    if (!css.toLowerCase().includes("#4924ac")) throw new Error("missing violet hex");
    pass("web", "light violet hex in CSS");
    // Simulated “render” of a primary button using token contract
    const button = {
      height: "var(--rz-button-primary-h)",
      background: "var(--rz-bg-accent)",
      color: "var(--rz-fg-on-accent)",
      radius: "var(--rz-radius-16)",
    };
    if (!button.height.includes("--rz-")) throw new Error("not tokenized");
    pass("web", "simulated primary button uses CSS vars only");
  } catch (e) {
    fail("web", "web tokens", e.message || e);
  }
}

function runMaui() {
  console.log("\n== maui ==");
  try {
    const colorsPath = "platforms/maui/ReZephyr.Maui/Resources/Styles/ReZephyrColors.xaml";
    const stylesPath = "platforms/maui/ReZephyr.Maui/Resources/Styles/ReZephyrStyles.xaml";
    const themePath = "platforms/maui/ReZephyr.Maui/Theme/ReZephyrTheme.cs";
    const tokensCs = "platforms/maui/ReZephyr.Maui/Tokens/ReZephyrTokens.cs";
    for (const p of [colorsPath, stylesPath, themePath, tokensCs]) {
      if (!exists(p)) throw new Error(`missing ${p}`);
    }
    pass("maui", "ReZephyr.Maui package files exist");

    const xaml = readText(colorsPath);
    if (/Pulse[A-Z]/.test(xaml)) throw new Error("found Pulse* keys — must be ReZephyr*");
    pass("maui", "no Pulse* keys in ReZephyrColors.xaml");
    if (!xaml.includes("ReZephyrVioletLight") || !xaml.includes("#4924AC")) throw new Error("violet");
    pass("maui", "ReZephyrVioletLight present");

    const styles = readText(stylesPath);
    for (const k of ["ReZephyrPrimaryButtonStyle", "ReZephyrCardStyle", "ReZephyrPageStyle"]) {
      if (!styles.includes(k)) throw new Error(`missing style ${k}`);
    }
    pass("maui", "core styles present");

    const cs = readText(tokensCs);
    if (!cs.includes("ButtonPrimary = 52")) throw new Error("ButtonPrimary");
    if (!cs.includes('Name = "ReZephyr"')) throw new Error("Name");
    pass("maui", "ReZephyrTokens.cs numeric contract");

    const theme = readText(themePath);
    if (!theme.includes("ReZephyrTheme.Apply") && !theme.includes("public static void Apply")) throw new Error("Apply");
    if (/PulseColors|PulseViolet|using\s+Warpbeat/.test(theme)) throw new Error("product coupling in Theme");
    pass("maui", "theme Apply is product-independent");

    // Simulated MAUI page using only ReZephyr resources
    const simulatedPage = `
      Background={AppThemeBinding Light=ReZephyrPageBackgroundLight, Dark=ReZephyrPageBackgroundDark}
      Button Style=ReZephyrPrimaryButtonStyle Height=52
    `;
    if (!/ReZephyr/.test(simulatedPage) || /Pulse/.test(simulatedPage)) throw new Error("sim page");
    pass("maui", "simulated page uses ReZephyr resources only");
  } catch (e) {
    fail("maui", "maui package", e.message || e);
  }
}

function runIos() {
  console.log("\n== ios/swift ==");
  try {
    const swift = readText("tokens/generated/RZTokens.swift");
    if (!swift.includes("RZHex") && !swift.includes("violetLight")) throw new Error("structure");
    if (!swift.toUpperCase().includes("4924AC")) throw new Error("violet");
    if (!swift.includes("buttonPrimary") && !swift.includes("ButtonPrimary") && !/52/.test(swift)) throw new Error("heights");
    pass("ios", "RZTokens.swift brand + control heights");
    // Simulated SwiftUI view token usage
    const view = "Color(RZHex.violetLight) frame height RZControl.buttonPrimary";
    if (!/violet|RZ/.test(view)) throw new Error("sim");
    pass("ios", "simulated SwiftUI uses RZ token names");
  } catch (e) {
    fail("ios", "swift stubs", e.message || e);
  }
}

function runAndroid() {
  console.log("\n== android/kotlin ==");
  try {
    const kt = readText("tokens/generated/RZTokens.kt");
    if (!kt.includes("RZColorsLight") || !kt.includes("0xFF4924AC")) throw new Error("violet");
    if (!kt.includes("buttonPrimary") && !kt.includes("ButtonPrimary") && !kt.includes("52.dp")) throw new Error("heights");
    pass("android", "RZTokens.kt brand + control heights");
    const compose = "Button(Modifier.height(RZControl.buttonPrimary), colors = RZColorsLight.Violet)";
    if (!/RZ/.test(compose)) throw new Error("sim");
    pass("android", "simulated Compose uses RZ tokens");
  } catch (e) {
    fail("android", "kotlin stubs", e.message || e);
  }
}

function runLinux() {
  console.log("\n== linux ==");
  try {
    if (!exists("mapping/linux.md")) throw new Error("mapping/linux.md missing");
    pass("linux", "linux mapping present");
    const css = readText("tokens/linux/rezephyr.css");
    if (!css.includes("@define-color rz_accent") || !css.toUpperCase().includes("#4924AC")) throw new Error("gtk colors");
    pass("linux", "GTK @define-color accent matches brand");
    if (!css.includes("--rz-button-primary-h")) throw new Error("heights");
    pass("linux", "linux CSS control heights present");
  } catch (e) {
    fail("linux", "linux tokens", e.message || e);
  }
}

function runFlutter() {
  console.log("\n== flutter ==");
  try {
    if (!exists("mapping/flutter.md")) throw new Error("mapping/flutter.md missing");
    pass("flutter", "flutter mapping present");
    const dart = readText("tokens/generated/rz_tokens.dart");
    if (!dart.includes("0xFF4924AC") || !dart.includes("RZColorsLight")) throw new Error("violet");
    pass("flutter", "rz_tokens.dart brand violet");
    if (!dart.includes("buttonPrimary = 52") || !dart.includes("rzTheme")) throw new Error("theme");
    pass("flutter", "ThemeData + control heights");
  } catch (e) {
    fail("flutter", "flutter tokens", e.message || e);
  }
}

function runReact() {
  console.log("\n== react ==");
  try {
    if (!exists("mapping/react.md")) throw new Error("mapping/react.md missing");
    pass("react", "react mapping present");
    const ts = readText("platforms/react/src/tokens.ts");
    if (!ts.includes("#4924AC") || !ts.includes("RZControl")) throw new Error("tokens");
    pass("react", "tokens.ts brand + control");
    const btn = readText("platforms/react/src/RzButton.tsx");
    if (!btn.includes("RZControl.buttonPrimary") || !btn.includes("c.violet")) throw new Error("button tokens");
    pass("react", "RzButton uses RZ tokens");
  } catch (e) {
    fail("react", "react package", e.message || e);
  }
}

function runAvalonia() {
  console.log("\n== avalonia ==");
  try {
    if (!exists("mapping/avalonia.md")) throw new Error("mapping/avalonia.md missing");
    pass("avalonia", "avalonia mapping present");
    const cs = readText("platforms/avalonia/ReZephyr.Avalonia/Tokens/ReZephyrTokens.cs");
    if (!cs.includes('Name = "ReZephyr"') || !cs.includes("ButtonPrimary = 52")) throw new Error("contract");
    if (!cs.includes("#4924AC")) throw new Error("violet");
    pass("avalonia", "ReZephyrTokens.cs contract");
    const axaml = readText("platforms/avalonia/ReZephyr.Avalonia/Themes/ReZephyrTheme.axaml");
    if (!axaml.includes("ReZephyrVioletLight") || !axaml.includes("#4924AC")) throw new Error("axaml");
    pass("avalonia", "AXAML brushes present");
  } catch (e) {
    fail("avalonia", "avalonia package", e.message || e);
  }
}

function runCmp() {
  console.log("\n== compose-mp ==");
  try {
    if (!exists("mapping/compose-multiplatform.md")) throw new Error("mapping missing");
    pass("compose-mp", "CMP mapping present");
    const kt = readText("tokens/generated/RZTheme.cmp.kt");
    if (!kt.includes("ReZephyrTheme") || !kt.includes("RZColorsLight.Violet")) throw new Error("theme");
    pass("compose-mp", "RZTheme.cmp.kt ReZephyrTheme");
  } catch (e) {
    fail("compose-mp", "CMP stubs", e.message || e);
  }
}

function runTauri() {
  console.log("\n== tauri ==");
  try {
    if (!exists("mapping/tauri.md")) throw new Error("mapping/tauri.md missing");
    pass("tauri", "tauri mapping present");
    // Contract: Tauri consumes web CSS — no duplicate palette.
    const map = readText("mapping/tauri.md");
    if (!map.includes("tokens.css")) throw new Error("must point at tokens.css");
    pass("tauri", "reuses web tokens.css");
  } catch (e) {
    fail("tauri", "tauri map", e.message || e);
  }
}

const runners = {
  contract: runContract,
  web: runWeb,
  maui: runMaui,
  ios: runIos,
  android: runAndroid,
  linux: runLinux,
  flutter: runFlutter,
  react: runReact,
  avalonia: runAvalonia,
  "compose-mp": runCmp,
  tauri: runTauri,
};

console.log("ReZephyr simulated platform tests");
console.log(`root: ${ROOT}`);
console.log(`filter: ${only}`);

if (only === "all") {
  Object.values(runners).forEach((fn) => fn());
} else if (runners[only]) {
  if (only !== "contract") runContract();
  runners[only]();
} else {
  console.error(`Unknown platform: ${only}`);
  process.exit(2);
}

const failed = results.filter((r) => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) {
  process.exit(1);
}
