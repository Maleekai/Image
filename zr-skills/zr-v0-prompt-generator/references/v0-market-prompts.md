# v0 Prompt Guide: Market & Discovery Module

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
