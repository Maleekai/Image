# Market List — ZR Securities Trading App

## Context
ZR Securities is a Hong Kong SFC-licensed multi-market broker. Users browse and filter tradeable assets across crypto, stocks, forex, and commodities. The Market List serves as the primary discovery and watchlist interface with real-time pricing.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Success: #34A853 (gains/buy)
- Danger: #EA4335 (losses/sell)
- Neutral: #5F6368 (secondary text)
- Background: #FFFFFF
- Surface: #F8F9FA

**Typography:**
- Inter: headings, labels, body text
- JetBrains Mono: prices, numbers, codes

**Spacing:** 8px grid
- Container padding: 16px
- Component gaps: 12px
- Row height: 64px

## Page Layout

```
[Header Area - 44px]
  └─ Asset Class Switcher (segmented control, 4 items)

[Sticky Category Tabs - 36px]
  └─ Horizontal scroll tabs

[Sort Header - 44px]
  └─ Name | Price | 24h Change (columns)

[Market List - fluid]
  └─ Market rows (64px each, scrollable)

[Bottom Tab Bar - 83px]
  └─ 5 navigation items
```

## Components

### Asset Class Switcher
- **Type:** Segmented control, 4 buttons
- **Labels:** 加密 | 股票 | 外汇 | 商品
- **Dimensions:** Full width, 44px height
- **Styling:**
  - Inactive: #F8F9FA background, #5F6368 text
  - Active: #1A73E8 background, white text
  - Border radius: 8px
  - Gap: 8px between buttons
- **Behavior:** Tap to filter asset classes

### Category Tabs
- **Types:** Favorites | Hot | Gainers | Losers | Volume | New
- **Dimensions:** 36px height, horizontal scroll
- **Styling:**
  - Inactive: transparent, #5F6368 text
  - Active: underline #1A73E8, #1A73E8 text
  - Font: Inter 14px medium
  - Padding: 12px horizontal
- **Behavior:** Horizontal scroll enabled, sticky at top

### Sort Header
- **Columns:** Name (flex) | Price (100px) | 24h Change (80px)
- **Dimensions:** 44px height, 16px padding
- **Styling:**
  - Background: #F8F9FA
  - Font: Inter 12px semibold
  - Text color: #5F6368
- **Behavior:** Tap columns to toggle sort ASC/DESC, show sort indicator (↑/↓)

### Market Row
- **Dimensions:** 64px height, 16px padding horizontal
- **Layout (left to right):**
  - Icon: 36px × 36px (crypto/stock/forex logo)
  - Name: flex-grow, Inter 14px bold
  - Exchange badge: 20px height, Inter 10px, #1A73E8 background, rounded 4px
  - Price: JetBrains Mono 14px, #000000
  - Change badge: 24px × 28px pill, red (#EA4335) or green (#34A853), white text, ±9.42%
  - Sparkline: 40px × 24px, green/red line chart
- **Separator:** 1px #F0F0F0 bottom
- **Behavior:** Tap to navigate to Symbol Detail page

### Bottom Tab Bar
- **Dimensions:** 83px height (including safe area)
- **Items:** 5 icons with labels
  - Markets (home icon)
  - Watchlist (star icon)
  - Trade (chart icon)
  - Orders (list icon)
  - Account (user icon)
- **Styling:**
  - Active: #1A73E8, icon + label
  - Inactive: #9AA0A6
  - Font: Inter 10px
  - Icon: 24px
- **Behavior:** Navigate to respective pages

## Mock Data

```typescript
interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  exchange: 'HashKey' | 'Bullish' | 'OSL' | 'VDX';
  assetClass: 'crypto' | 'stock' | 'forex' | 'commodity';
  icon: string; // logo URL
  price: number;
  change24h: number;
  sparklineData: number[];
}

const mockMarkets: MarketItem[] = [
  {
    id: 'btc',
    symbol: 'BTC',
    name: 'Bitcoin',
    exchange: 'HashKey',
    assetClass: 'crypto',
    icon: '/icons/btc.svg',
    price: 67234.50,
    change24h: 2.34,
    sparklineData: [65000, 65500, 66200, 66900, 67234]
  },
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    exchange: 'HashKey',
    assetClass: 'crypto',
    icon: '/icons/eth.svg',
    price: 3456.80,
    change24h: 1.52,
    sparklineData: [3400, 3420, 3440, 3456, 3456]
  },
  {
    id: 'sol',
    symbol: 'SOL',
    name: 'Solana',
    exchange: 'Bullish',
    assetClass: 'crypto',
    icon: '/icons/sol.svg',
    price: 142.35,
    change24h: -1.23,
    sparklineData: [145, 144, 143, 142, 142]
  },
  {
    id: 'aapl',
    symbol: 'AAPL',
    name: 'Apple',
    exchange: 'OSL',
    assetClass: 'stock',
    icon: '/icons/aapl.svg',
    price: 192.50,
    change24h: 0.87,
    sparklineData: [190, 191, 191.5, 192, 192.5]
  },
  {
    id: 'tsla',
    symbol: 'TSLA',
    name: 'Tesla',
    exchange: 'VDX',
    assetClass: 'stock',
    icon: '/icons/tsla.svg',
    price: 245.75,
    change24h: -2.15,
    sparklineData: [252, 250, 248, 246, 245]
  },
  {
    id: 'eurusd',
    symbol: 'EUR/USD',
    name: 'Euro/US Dollar',
    exchange: 'HashKey',
    assetClass: 'forex',
    icon: '/icons/eur.svg',
    price: 1.0892,
    change24h: 0.42,
    sparklineData: [1.0850, 1.0865, 1.0880, 1.0890, 1.0892]
  },
  {
    id: 'gold',
    symbol: 'GOLD',
    name: 'Gold Futures',
    exchange: 'OSL',
    assetClass: 'commodity',
    icon: '/icons/gold.svg',
    price: 2087.45,
    change24h: 3.21,
    sparklineData: [2020, 2040, 2060, 2075, 2087]
  }
];
```

## Interaction Requirements

1. **Asset Class Filter:** Tap switcher to show only selected asset class. Persist selection.
2. **Category Filter:** Tap tab to sort/filter markets (Favorites pulls from watchlist, Hot by volume, Gainers/Losers by 24h change, Volume by trade volume, New by listing date).
3. **Sorting:** Tap Name/Price/24h Change header to toggle sort direction. Show ↑/↓ indicator.
4. **Pagination:** Load markets on scroll (infinite scroll or pagination).
5. **Row Tap:** Navigate to Symbol Detail page with selected symbol.
6. **Refresh:** Pull-to-refresh to update prices.
7. **Tab Bar:** Tapping tab bar items navigates to respective pages.

## Constraints

- Viewport: 390px width (mobile-first design)
- Max list height: Dynamic (full screen minus tab bar)
- Font: Inter (body), JetBrains Mono (numbers)
- Styling: Tailwind CSS only
- No images: Use SVG placeholders for logos
- Accessibility: ARIA labels for asset class and sort indicators
- Performance: Virtual scrolling for 100+ market rows
- Real-time: Price updates every 5 seconds (mock websocket)
