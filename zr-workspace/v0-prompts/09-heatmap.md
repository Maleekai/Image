# Multi-Asset Heatmap — ZR Securities Trading App

## Context
The Heatmap is a treemap visualization showing market performance across all asset classes (crypto, stocks, forex, commodities). Each rectangle represents an asset, sized by market cap and colored by 24h price change. This is a ZR innovation (IO-009) inspired by Binance's crypto-only heatmap, extended to cover multiple asset classes — a unique differentiator for ZR as a multi-market broker.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Gain gradient: #E8F5E9 (light, +0-2%) → #4CAF50 (medium, +2-5%) → #1B5E20 (strong, +5%+)
- Loss gradient: #FFEBEE (light, -0-2%) → #F44336 (medium, -2-5%) → #B71C1C (strong, -5%+)
- Neutral: #F5F5F5 (0% change)
- Text on dark bg: #FFFFFF
- Text on light bg: #000000

**Typography:**
- Inter: headings, labels
- JetBrains Mono: prices, percentages

**Spacing:** 2px gap between treemap rectangles

## Page Layout

```
[Header - 56px]
  └─ Back arrow | "Market Heatmap" | Time range selector

[Asset Class Switcher - 44px]
  └─ [All] [加密] [股票] [外汇] [商品] segmented control

[Legend Bar - 32px]
  └─ Color scale: -5%+ ... -2% ... 0% ... +2% ... +5%+

[Heatmap Canvas - flex (fill remaining)]
  └─ Treemap rectangles, sized by market cap

[Bottom Tab Bar - 83px]
```

## Components

### Header
- **Dimensions:** 56px height
- **Layout:**
  - Left: Back arrow 24px, tap → return to Market List
  - Center: "Market Heatmap" (Inter 16px bold)
  - Right: Time range dropdown [24h ▼] → options: 1h / 24h / 7d / 30d

### Asset Class Switcher
- Same as 01-market-list.md Asset Class Switcher
- **[All]** is default — shows combined treemap with section dividers

### Color Legend Bar
- **Dimensions:** 32px height, full width, 16px padding
- **Layout:** Horizontal gradient bar with 5 labels:
  - "-5%+" (far left, #B71C1C) | "-2%" | "0%" (center, #9E9E9E) | "+2%" | "+5%+" (far right, #1B5E20)
- **Bar:** 8px height, rounded 4px, continuous gradient from red → gray → green

### Heatmap Canvas (Treemap)
- **Algorithm:** Squarified treemap layout
- **Rectangle sizing:** Proportional to market cap
- **Rectangle minimum:** 48px × 32px (smaller assets grouped into "Others")
- **Rectangle content (for large enough cells):**
  - Symbol: Inter 12px bold, white or black (auto-contrast)
  - Price change: JetBrains Mono 11px, white or black, "±X.XX%"
  - For very large cells (>120px wide): also show price and mini sparkline
- **Coloring:** Based on change percentage using the gain/loss gradient
- **Section dividers (when [All] selected):**
  - Thin 2px white line between asset class sections
  - Section label: "Crypto" / "Stocks" / "Forex" / "Commodities" (Inter 10px, top-left of section, semi-transparent white bg)
- **Behavior:**
  - Tap rectangle → navigate to Symbol Detail page
  - Long press → tooltip with full name, price, change, volume
  - Pinch to zoom (on tablet)

### Multi-Asset Layout (when [All] is selected)
```
┌─────────────────────────────────────────────┐
│ 加密 Crypto                                  │
│ ┌──────────┬──────┬────┬────┬──┬──┬──┬──┐   │
│ │   BTC    │ ETH  │SOL │BNB │XR│AD│DO│..│   │
│ │ +2.34%   │+1.52%│-1.2│+0.8│  │  │  │  │   │
│ └──────────┴──────┴────┴────┴──┴──┴──┴──┘   │
├─────────────────────────────────────────────┤
│ 股票 Stocks                                  │
│ ┌─────────┬───────┬─────┬────┬──────┐       │
│ │  AAPL   │ MSFT  │NVDA │TSLA│ ...  │       │
│ │ +0.82%  │+1.15% │-2.3%│+3.1│      │       │
│ └─────────┴───────┴─────┴────┴──────┘       │
├─────────────────────────────────────────────┤
│ 外汇 Forex          │ 商品 Commodities       │
│ ┌────┬────┬────┐    │ ┌─────┬────┬───┐      │
│ │EUR/│GBP/│JPY/│    │ │Gold │Oil │Slv│      │
│ │USD │USD │USD │    │ │+0.3%│-1.2│+0.│      │
│ └────┴────┴────┘    │ └─────┴────┴───┘      │
└─────────────────────────────────────────────┘
```

## Mock Data

```typescript
interface HeatmapItem {
  symbol: string;
  name: string;
  assetClass: 'crypto' | 'stock' | 'forex' | 'commodity';
  marketCap: number; // for sizing
  change24h: number; // for coloring
  price: number;
  exchange: 'HashKey' | 'Bullish' | 'OSL' | 'VDX';
}

const mockHeatmap: HeatmapItem[] = [
  { symbol: 'BTC', name: 'Bitcoin', assetClass: 'crypto', marketCap: 1320000000000, change24h: 2.34, price: 67234, exchange: 'HashKey' },
  { symbol: 'ETH', name: 'Ethereum', assetClass: 'crypto', marketCap: 415000000000, change24h: 1.52, price: 3456, exchange: 'HashKey' },
  { symbol: 'SOL', name: 'Solana', assetClass: 'crypto', marketCap: 62000000000, change24h: -1.23, price: 142, exchange: 'Bullish' },
  { symbol: 'BNB', name: 'BNB', assetClass: 'crypto', marketCap: 88000000000, change24h: 0.85, price: 580, exchange: 'OSL' },
  { symbol: 'AAPL', name: 'Apple', assetClass: 'stock', marketCap: 3100000000000, change24h: 0.82, price: 192.5, exchange: 'VDX' },
  { symbol: 'MSFT', name: 'Microsoft', assetClass: 'stock', marketCap: 2800000000000, change24h: 1.15, price: 415.3, exchange: 'VDX' },
  { symbol: 'NVDA', name: 'Nvidia', assetClass: 'stock', marketCap: 2200000000000, change24h: -2.31, price: 875.2, exchange: 'VDX' },
  { symbol: 'EUR/USD', name: 'Euro/US Dollar', assetClass: 'forex', marketCap: 100000000000, change24h: 0.12, price: 1.0856, exchange: 'VDX' },
  { symbol: 'XAU', name: 'Gold', assetClass: 'commodity', marketCap: 50000000000, change24h: 0.31, price: 2345.6, exchange: 'VDX' },
];
```

## Interaction States

### Loading
- Gray skeleton rectangles pulsing

### Error
- "Unable to load heatmap data" + retry button

### Time Range Change
- Animate color transitions when switching between 1h/24h/7d/30d

## Implementation Notes
- Use recharts Treemap or d3.treemap for layout
- Ensure minimum touch target 44px for accessibility
- Pre-calculate layout on data fetch, animate on time range change
- Performance: Limit to top 50 assets per class when [All] selected

## Competitive Reference
- **Binance Heatmap (103_Heatmap):** Crypto-only treemap, color-coded by change
- **ZR Differentiator:** Multi-asset class sections in one unified heatmap — crypto, stocks, forex, commodities side by side
- **OKX:** No heatmap feature

## v0 Screenshot References
Upload these screenshots alongside this prompt for visual reference:
- Binance: `Binance_iOS/103_Heatmap/` (any 2 screenshots)
- For general treemap reference: search "stock market heatmap finviz" for traditional finance examples
