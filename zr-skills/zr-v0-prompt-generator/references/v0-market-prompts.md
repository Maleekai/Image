# v0 Prompt Guide: Market & Discovery Module

> Source: OKX Flows 003, 010-013, 015 | Extracted from full OKX analysis
> Pixel Data: design-spec-01-market-discovery.md, design-spec-05-home-navigation.md

## OKX Extracted Design Tokens (Market/Home)
| Token | Value | Usage |
|-------|-------|-------|
| bg-primary | #FFFFFF | Page background (light mode) |
| bg-dark | #000000 / #1A1A1A | Dark mode backgrounds |
| text-primary | #000000 | Main text |
| text-secondary | #808080 / #999999 | Secondary labels |
| color-green | #00B366 / #22C55E | Buy/positive values |
| color-red | #FF3B30 / #EF4444 | Sell/negative values |
| color-lime | #C8FF00 / #84FF00 | Bonus badges, highlights |
| tab-bar-height | 83px (includes safe area) | Bottom navigation |
| nav-bar-height | 44px | Top navigation |
| market-row-height | 64px | Market list item |
| crypto-card | 358×84pt | Asset card in home |
| icon-standard | 24px | Standard icons |
| touch-target | 44×44px minimum | All interactive |
| tab-crossfade | 300ms | Tab switching animation |
| nav-slide | 400ms | Navigation transition |
| tap-feedback | 0.05 alpha | Button tap opacity |
| gray-scale | #F5F5F5, #E0E0E0, #CCCCCC, #999999, #666666 | 5 gray shades |
> OKX Patterns: Discover page with horizontal category tabs (Opportunities/Rankings/Market Data), data-dense tables with live updating prices, mini sparkline charts in list rows, green/red coloring for change direction, star icon toggle for favorites, drag-to-reorder in edit mode, bottom sheet modal with search for currency filter.

## Key Screens to Generate

### Screen 1: Market List (Home)
This is the primary landing screen. Must show:

**Layout zones (top to bottom)**:
1. **Status bar area** (59px): Dynamic Island safe area
2. **Navigation bar** (44px): "Markets" title left-aligned, search icon + notification bell right
3. **Asset class switcher** (44px): Segmented control `[Crypto] [Stocks] [Forex] [Commodities]` — ZR unique
4. **Category tabs** (36px): Horizontal scroll `Favorites | Hot | Gainers | Losers | Volume | New`
5. **Sort header** (32px): `Name | Price | 24h Change ▼` — tappable for sort direction
6. **Market list** (remaining): Scrollable list of market rows
7. **Tab bar** (83px): `Home | Markets | Trade | Assets | More`

**Market row component** (64px height):
```
┌─────────────────────────────────────┐
│ [Icon] BTC/USDT        ↑ 2.34%    │
│         $67,234.50   Vol 1.2B      │
│         [Exchange: HashKey]         │
│         [Sparkline ────────]        │
└─────────────────────────────────────┘
```

**Mock data** — use realistic crypto pairs:
```javascript
const mockMarketData = [
  { symbol: "BTC/USDT", price: 67234.50, change: 2.34, volume: "1.2B", exchange: "HashKey" },
  { symbol: "ETH/USDT", price: 3456.78, change: -1.12, volume: "890M", exchange: "HashKey" },
  { symbol: "SOL/USDT", price: 178.92, change: 5.67, volume: "456M", exchange: "Bullish" },
  // ... more pairs
];
```

### Screen 2: Search
- Full-screen search overlay
- Search input with auto-focus
- Recent searches (chips)
- Trending searches
- Real-time results as user types
- Results show same market row component

### Screen 3: Market Filters
- Bottom sheet with filter options
- Filter by: Exchange, Asset class, Market cap range, Volume range
- "Apply" and "Reset" buttons

## ZR-Unique Components for Market Module

### Asset Class Switcher
```
This is THE key differentiator from OKX/Binance (crypto-only).
- Segmented control with 4 segments
- Active segment: filled with Brand Blue #1A73E8
- Inactive: transparent with gray text
- Switching should animate the list content (cross-fade)
- Each class may have different column headers
  (e.g., Stocks show "Market Cap" instead of "24h Volume")
```

### Exchange Badge
```
Small badge showing which exchange handles this pair:
- Position: Below or beside the pair name
- Size: 12px text in a rounded pill
- Colors: Each exchange has a brand color
  - HashKey: #2962FF
  - Bullish: #00BFA5
  - OSL: #FF6D00
  - VDX: #7C4DFF
```

## OKX Component Patterns (Extracted) — Apply to ZR Market Module

### Favorites Management (OKX Flows 011-013)
- Star icon toggle on each market row (tap to add/remove)
- Favorites tab as first in category tabs
- Edit mode: drag handles for reorder, "Edit" button top-right
- Empty favorites state: illustration + "Add your first favorite" CTA

### Sort Controls (OKX Flow 013)
- Tappable column headers: Name | Price | 24h Change
- Sort indicator: ▲/▼ arrow on active column
- Cycle: Default → Ascending → Descending → Default

### Currency Filter (OKX Flow 012)
- Bottom sheet modal with search input at top
- Popular currencies as horizontal chips (USDT, BTC, ETH, HKD)
- Full alphabetical list below
- Selected currency highlighted with checkmark

### Search Overlay (OKX Flows 007-009)
- Full-screen overlay triggered by search icon
- Auto-focus on search input
- Trending searches as chips
- Recent searches with "Clear all" link
- Real-time results as-you-type with debounce
- Results use same market row component
