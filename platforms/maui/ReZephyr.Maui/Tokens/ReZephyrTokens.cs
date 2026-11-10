namespace ReZephyr.Maui.Tokens;

/// <summary>
/// ReZephyr Design System numeric tokens (C#).
/// Version: v1.0.0-beta.3 (Build 4). Mirrors tokens/tokens.json.
/// </summary>
public static class ReZephyrTokens
{
    public const string Name = "ReZephyr";
    public const string Version = "1.0.0-beta.3";
    public const int Build = 4;

    public static class Space
    {
        public const double S4 = 4;
        public const double S8 = 8;
        public const double S12 = 12;
        public const double S16 = 16;
        public const double S20 = 20;
        public const double S24 = 24;
        public const double S32 = 32;
        public const double S40 = 40;
        public const double S48 = 48;
    }

    public static class Radius
    {
        public const double R8 = 8;
        public const double R12 = 12;
        public const double R16 = 16;
        public const double R20 = 20;
        public const double R24 = 24;
        public const double R28 = 28;
        public const double Pill = 999;
    }

    public static class Control
    {
        public const double ButtonPrimary = 52;
        public const double ButtonGhost = 50;
        public const double ButtonSecondary = 44;
        public const double Field = 46;
        public const double Chip = 36;
        public const double IconButton = 44;
        public const double TouchMin = 44;
        public const double PageMargin = 20;
    }

    public static class Type
    {
        public const double Display = 34;
        public const double Title = 28;
        public const double Section = 20;
        public const double Headline = 17;
        public const double Body = 15;
        public const double Button = 16;
        public const double Label = 14;
        public const double Caption = 12;
        public const double Overline = 11;
    }

    public static class Motion
    {
        public const uint InstantMs = 100;
        public const uint FastMs = 200;
        public const uint NormalMs = 300;
        public const uint SlowMs = 500;
        public const uint EmphasisMs = 700;
    }

    public static class Opacity
    {
        public const double Disabled = 0.38;
        public const double Pressed = 0.08;
        public const double Scrim = 0.45;
    }

    /// <summary>XAML resource key roots (append Light/Dark for theme pairs).</summary>
    public static class Keys
    {
        public const string Violet = "ReZephyrViolet";
        public const string VioletTint = "ReZephyrVioletTint";
        public const string OnViolet = "ReZephyrOnViolet";
        public const string PageBackground = "ReZephyrPageBackground";
        public const string Card = "ReZephyrCard";
        public const string CardAlt = "ReZephyrCardAlt";
        public const string Separator = "ReZephyrSeparator";
        public const string TextPrimary = "ReZephyrTextPrimary";
        public const string TextSecondary = "ReZephyrTextSecondary";
        public const string TextTertiary = "ReZephyrTextTertiary";
        public const string Heart = "ReZephyrHeart";
        public const string Warning = "ReZephyrWarning";
        public const string Danger = "ReZephyrDanger";
        public const string Info = "ReZephyrInfo";
        public const string Success = "ReZephyrSuccess";
        public const string Lime = "ReZephyrLime";
    }
}
