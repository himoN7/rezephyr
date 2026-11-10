# Pack ReZephyr release artifacts
# Version: v1.0.0-beta.3 (Build 4)
# Usage: pwsh eng/Pack-Release.ps1

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Out = Join-Path $Root "artifacts"
New-Item -ItemType Directory -Force -Path $Out | Out-Null

Write-Host "Root: $Root"
Write-Host "Out:  $Out"

Push-Location $Root
try {
  node tests/harness/run-all.mjs
  if ($LASTEXITCODE -ne 0) { throw "tests failed" }

  $maui = Join-Path $Root "platforms/maui/ReZephyr.Maui/ReZephyr.Maui.csproj"
  dotnet pack $maui -c Release -o $Out
  if ($LASTEXITCODE -ne 0) { throw "maui pack failed" }

  $avalonia = Join-Path $Root "platforms/avalonia/ReZephyr.Avalonia/ReZephyr.Avalonia.csproj"
  if (Test-Path $avalonia) {
    dotnet pack $avalonia -c Release -o $Out
  }

  Push-Location (Join-Path $Root "platforms/react")
  try {
    npm pack --pack-destination $Out
  } finally {
    Pop-Location
  }

  $tokenZip = Join-Path $Out "rezephyr-tokens-v1.0.0-beta.3.zip"
  if (Test-Path $tokenZip) { Remove-Item $tokenZip -Force }
  Compress-Archive -Path @(
    (Join-Path $Root "tokens/tokens.json"),
    (Join-Path $Root "tokens/tokens.css"),
    (Join-Path $Root "tokens/tokens.schema.json"),
    (Join-Path $Root "LICENSE"),
    (Join-Path $Root "NOTICE")
  ) -DestinationPath $tokenZip

  Write-Host "`nArtifacts:"
  Get-ChildItem $Out | ForEach-Object { Write-Host " - $($_.Name)" }
} finally {
  Pop-Location
}
