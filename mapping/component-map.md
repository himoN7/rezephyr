# Component → platform map

**Version:** v1.0.0-beta.3 (Build 4)

| ReZephyr / Figma | MAUI | Web | iOS | Android |
|------------------|------|-----|-----|---------|
| Button / Primary | `Button` + Pulse violet fill | `.rz-btn-primary` | `RZPrimaryButtonStyle` | `Button` primary 52.dp |
| Button / Secondary | `Button` tint / border | outline btn | bordered | `OutlinedButton` |
| Button / Ghost | transparent `Button` | text btn | `.borderless` | `TextButton` |
| Button / Destructive | danger fill/text | danger btn | destructive role | error `Button` |
| Button / Icon | 44×44 image button | icon btn | toolbar item | `IconButton` |
| Chip / Filter | Border + tap | chip | `Button` capsule | `FilterChip` |
| Segmented Control | custom / toolkit | segment | `Picker` segmented | `SingleChoiceSegmentedButtonRow` |
| Text Field | `Entry` / `Border` | `.rz-field` | `TextField` | `OutlinedTextField` |
| Search Field | `SearchBar` / Entry | search input | `.searchable` | `DockedSearchBar` |
| Toggle / Switch | `Switch` | checkbox switch | `Toggle` | `Switch` |
| Checkbox / Radio | `CheckBox` / custom | input | `Toggle` style | `Checkbox` / `RadioButton` |
| Slider | `Slider` | range | `Slider` | `Slider` |
| Progress Linear/Circular | `ProgressBar` / `ActivityIndicator` | progress | `ProgressView` | `LinearProgressIndicator` / `Circular*` |
| List Row | `Grid` in CollectionView | list row | `Label` / `NavigationLink` | `ListItem` |
| Card / Metric | `Border` `PulseCardStyle` | `.rz-card` | rounded `RoundedRectangle` | `Card` / Surface |
| Nav Bar Large Title | custom header | sticky header | large title | large `TopAppBar` |
| App Bar | Shell / custom | top bar | inline nav | `TopAppBar` |
| Tab Bar | Shell tabs | tablist | `TabView` | `NavigationBar` |
| Floating Dock | custom bottom bar | dock | custom + safeArea | custom FAB bar |
| Sheet / Bottom | modal / toolkit | dialog sheet | `.sheet` detents | `ModalBottomSheet` |
| Action Sheet | `DisplayActionSheet` | menu sheet | `confirmationDialog` | modal sheet actions |
| Dialog / Alert | `DisplayAlert` | modal | `alert` | `AlertDialog` |
| Toast / Snackbar | toolkit toast | toast | banner | `Snackbar` |
| Acrylic Surface | platform blur | backdrop-filter | ultraThinMaterial | blur + translucent |
| Data Grid | CollectionView grid | table | rare | Lazy table |
| Petal / Bloom | Pulse controls only | SVG petals | Pulse-only | Pulse-only |
| Chart / Trend Area | Pulse charts | SVG/canvas | charts | charts |
| Score Badge | Pulse badge | badge | badge | badge |
| Widget Small/Medium | — | — | WidgetKit | App Widget / Glance |
| Empty State / Skeleton | custom | custom | custom | custom |

See `inventory/components.json` for the full Figma-facing list.
