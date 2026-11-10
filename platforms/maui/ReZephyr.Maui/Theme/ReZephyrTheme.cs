using ReZephyr.Maui.Resources.Styles;

namespace ReZephyr.Maui.Theme;

/// <summary>
/// Registers the <b>ReZephyr</b> Design System into any .NET MAUI app.
/// Standalone tokenized package. Resource keys use the <c>ReZephyr*</c> prefix.
/// </summary>
public static class ReZephyrTheme
{
    /// <summary>
    /// Merges ReZephyr colors and styles into the application resource dictionary.
    /// Call once from your <c>App</c> constructor or <c>MauiProgram</c>.
    /// </summary>
    public static void Apply(Application application)
    {
        ArgumentNullException.ThrowIfNull(application);
        application.Resources ??= new ResourceDictionary();

        if (IsApplied(application.Resources))
            return;

        application.Resources.MergedDictionaries.Add(new ReZephyrColors());
        application.Resources.MergedDictionaries.Add(new ReZephyrStyles());
    }

    /// <summary>Creates a merged dictionary for manual insertion.</summary>
    public static ResourceDictionary CreateMergedDictionary()
    {
        var root = new ResourceDictionary();
        root.MergedDictionaries.Add(new ReZephyrColors());
        root.MergedDictionaries.Add(new ReZephyrStyles());
        return root;
    }

    public static bool IsApplied(ResourceDictionary resources)
    {
        if (resources.ContainsKey("ReZephyrVioletLight"))
            return true;

        foreach (var md in resources.MergedDictionaries)
        {
            if (md.ContainsKey("ReZephyrVioletLight"))
                return true;
        }

        return false;
    }
}
