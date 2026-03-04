# Market & Discovery Module Analysis Guide

## What to Focus On

### Information Hierarchy
Crypto trading apps handle massive data density. For market list screens, pay attention to:

1. **Sort dimensions**: Price, 24h change, volume, market cap — what's the default? What can users toggle?
2. **Category tabs**: Favorites, Hot, Gainers, Losers, New Listings — tab order reveals product priorities
3. **Search behavior**: Autocomplete? Recent searches? Search scope (name, symbol, contract)?
4. **List item density**: How many data points per row? What's truncated vs. shown?

### ZR-Specific Considerations

ZR Securities shows **multiple asset classes** (stocks, crypto, forex, commodities) in a single app. This means:

- **Market switcher**: How to switch between Crypto / Stock / Forex views? Tab bar? Segmented control? Drawer?
- **Mixed watchlist**: Users may want BTC, AAPL, and EUR/USD in one favorites list
- **Exchange indicator**: Each crypto is traded on a specific exchange (HashKey/Bullish/OSL/VDX) — where to show this?
- **Trading hours**: Stocks have market hours, crypto is 24/7, forex has sessions — how to indicate tradability?

### Component Patterns to Extract

| Pattern | What to Look For | ZR Adaptation |
|---------|-----------------|---------------|
| Price ticker | Real-time update animation, color coding | Same, but add asset type icon |
| Sparkline | Mini chart in list row | Same |
| Category pills | Horizontal scroll tabs | Add asset class as top-level |
| Sort controls | Dropdown vs tap-to-sort column headers | Same |
| Search bar | Fixed vs scroll-away, filter chips | Add asset class filter |
| Empty state | No favorites yet, no results | Same |

### Key Metrics to Note

- How many items visible without scrolling (information density)
- Time to first meaningful interaction (search → result)
- Number of taps from market list → place order

### SFC Compliance Notes for Market Module

- Risk disclosure must be visible for virtual asset products
- Must clearly distinguish between licensed and non-licensed products
- Price data source must be attributable
- Disclaimer about past performance required near any performance data
