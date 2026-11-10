# ReZephyr.Maui

**ReZephyr Design System** for .NET MAUI — fully tokenized, usable in **any** MAUI app.

**Version:** v1.0.0-beta.3 (Build 4)  
**Package:** `ReZephyr.Maui`  
**Keys:** `ReZephyr*` (not Pulse*, not Warpbeat-specific)

Pulse remains Warpbeat’s **in-app theme name**. This library is the portable **ReZephyr** design system.

## Install

Project reference (from this repo):

```xml
<ProjectReference Include="..\path\to\rezephyr\platforms\maui\ReZephyr.Maui\ReZephyr.Maui.csproj" />
```

Or pack locally:

```bash
dotnet pack platforms/maui/ReZephyr.Maui/ReZephyr.Maui.csproj -c Release
```

## Apply in any MAUI app

```csharp
using ReZephyr.Maui.Theme;

public partial class App : Application
{
    public App()
    {
        InitializeComponent();
        ReZephyrTheme.Apply(this);
        MainPage = new AppShell();
    }
}
```

Or in `App.xaml`:

```xml
<Application.Resources>
  <ResourceDictionary>
    <ResourceDictionary.MergedDictionaries>
      <styles:ReZephyrColors xmlns:styles="clr-namespace:ReZephyr.Maui.Resources.Styles;assembly=ReZephyr.Maui" />
      <styles:ReZephyrStyles xmlns:styles="clr-namespace:ReZephyr.Maui.Resources.Styles;assembly=ReZephyr.Maui" />
    </ResourceDictionary.MergedDictionaries>
  </ResourceDictionary>
</Application.Resources>
```

## Use tokens

```xml
<ContentPage Style="{StaticResource ReZephyrPageStyle}">
  <VerticalStackLayout Padding="{StaticResource ReZephyrPageMargin}" Spacing="{StaticResource ReZephyrSpace16}">
    <Label Text="Hello" Style="{StaticResource ReZephyrSectionTitleStyle}" />
    <Border Style="{StaticResource ReZephyrCardStyle}">
      <Label Text="Tokenized card" Style="{StaticResource ReZephyrBodyStyle}" />
    </Border>
    <Button Text="Continue"
            Style="{StaticResource ReZephyrPrimaryButtonStyle}"
            AutomationId="ReZephyrPrimaryCta" />
  </VerticalStackLayout>
</ContentPage>
```

```csharp
using ReZephyr.Maui.Tokens;

var h = ReZephyrTokens.Control.ButtonPrimary; // 52
```

## What’s included

| Asset | Role |
|-------|------|
| `ReZephyrColors` | Light/dark colors, space, radius, type, control heights |
| `ReZephyrStyles` | Page, card, type, button, entry styles |
| `ReZephyrTokens` | C# numeric constants |
| `ReZephyrTheme.Apply` | One-line registration |

Icons: Fluent / platform system icons for detailed UI. Animated emoji only in expressive places — see repo `mapping/icons-emoji.md`.

## Not Warpbeat

This package does **not** reference Warpbeat. Warpbeat may keep a Pulse-named alias layer for its own theme switch; new MAUI apps should use **ReZephyr** keys only.
