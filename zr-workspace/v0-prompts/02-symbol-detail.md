# Symbol Detail (K-line) — ZR Securities Trading App

## Context
The Symbol Detail page displays comprehensive trading information for a single asset, including real-time price, OHLCV data, candlestick chart with multiple timeframes, and live order book. This is the gateway to placing trades.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Success: #34A853 (up/buy)
- Danger: #EA4335 (down/sell)
- Neutral: #5F6368 (secondary text)
- Chart up: #34A853
- Chart down: #EA4335
- Order book asks: #EA4335
- Order book bids: #34A853
- Background: #FFFFFF
- Surface: #F8F9FA

**Typography:**
- Inter: headings, labels
- JetBrains Mono: prices, OHLCV, order book prices

**Spacing:** 8px grid

## Page Layout

```
[Navigation Bar - 56px]
  └─ Back arrow | Symbol name | Star (watchlist) | Share

[Price Header - 80px]
  └─ Current price (28px, mono, color-coded)
  └─ 24h change badge (12px)
  └─ OHLCV row (4 columns, 14px)

[Chart Area - 312px (40% viewport)]
  └─ Candlestick chart placeholder
  └─ Time period tabs [15m][1H][4H][1D][1W][1M]
  └─ Fullscreen icon (top-right)

[Order Book Toggle - 36px]
  └─ Segmented [Order Book][Trades]

[Order Book / Trades View - 200px]
  └─ Asks (red, top, inverted)
  └─ Bids (green, bottom)
  └─ Depth percentage bars

[Action Bar - 56px]
  └─ Buy button (50%, green)
  └─ Sell button (50%, red)
```

## Components

### Navigation Bar
- **Dimensions:** 56px height
- **Layout:**
  - Back arrow (24px icon, left, tap to go back)
  - Symbol name (flex-grow, center, Inter 16px bold)
  - Star icon (24px, right, toggles watchlist, filled if added)
  - Share icon (24px, right)
- **Background:** #FFFFFF with 1px bottom border #E8EAED
- **Behavior:** Star toggles watchlist; Share opens native share dialog

### Price Header
- **Dimensions:** 80px height, 16px padding
- **Current Price:**
  - Size: JetBrains Mono 28px bold
  - Color: #34A853 if up, #EA4335 if down
  - Format: 2 decimal places (e.g., "28,456.75")
- **24h Change Badge:**
  - Size: 24px height, Inter 12px
  - Background: #34A853 if positive, #EA4335 if negative
  - Color: white
  - Format: "+5.42% (↑1250.00)" or "-2.15% (↓600.00)"
  - Border radius: 4px
  - Padding: 4px 8px
- **OHLCV Row (4 columns, equal width):**
  - Column layout: Label (Inter 10px, #5F6368) above Value (JetBrains Mono 12px bold)
  - Fields: Open | High | Low | Close (Volume in next row if needed)
  - Separator: 1px vertical #E8EAED between columns
  - Example: O: 28,234.50 | H: 68,900.00 | L: 27,500.00 | C: 28,456.75

### Chart Area
- **Dimensions:** 312px height (40% of viewport), full width
- **Candlestick Chart:**
  - Placeholder: light gray background (#F8F9FA) with axis lines
  - Up candles: #34A853, Down candles: #EA4335
  - Wicks: thin lines, matching candle color
  - Grid: light horizontal lines for price levels
  - Y-axis: prices (JetBrains Mono 10px)
  - X-axis: time labels (Inter 10px)
- **Time Period Tabs:**
  - Labels: 15m | 1H | 4H | 1D | 1W | 1M
  - Dimensions: 36px height, Inter 12px medium
  - Styling:
    - Inactive: transparent, #5F6368 text
    - Active: #1A73E8 background, white text, border radius 4px
  - Layout: horizontal scroll, bottom-right of chart
- **Fullscreen Icon:**
  - 24px icon, top-right corner of chart, tap to expand
  - Behavior: Opens full-screen chart view with enlarged candlesticks

### Order Book Toggle
- **Type:** Segmented control, 2 buttons
- **Labels:** Order Book | Trades
- **Dimensions:** Full width, 36px height
- **Styling:**
  - Inactive: #F8F9FA background, #5F6368 text
  - Active: #1A73E8 background, white text
  - Border radius: 8px
- **Behavior:** Toggle between order book and trade history views

### Order Book View
- **Dimensions:** 200px height (adjustable), full width
- **Layout:**
  - Asks (top, inverted list, red)
  - Divider: thin line, center (current price indicator)
  - Bids (bottom, green)
- **Ask Row (5 rows, 32px each):**
  - Price (JetBrains Mono 12px, #EA4335, right-aligned, 80px)
  - Amount (JetBrains Mono 11px, #5F6368, center, 70px)
  - Depth bar (red background, right-aligned, 40px max width)
  - Percentage (JetBrains Mono 10px, #5F6368, 30px)
- **Bid Row (5 rows, 32px each):**
  - Price (JetBrains Mono 12px, #34A853, left-aligned, 80px)
  - Amount (JetBrains Mono 11px, #5F6368, center, 70px)
  - Depth bar (green background, left-aligned, 40px max width)
  - Percentage (JetBrains Mono 10px, #5F6368, 30px)
- **Separator:** 2px border between asks and bids, light gray
- **Padding:** 8px horizontal, 4px vertical

### Trades View
- **Dimensions:** 200px height, full width
- **Row Layout (32px each, 6-8 rows):**
  - Timestamp (Inter 10px, #5F6368, left, 50px)
  - Price (JetBrains Mono 12px, left, 80px)
  - Amount (JetBrains Mono 11px, right, 70px)
  - Direction indicator: small triangle up (buy, green) or down (sell, red), 4px
- **Scroll:** vertical scroll within container

### Action Bar
- **Dimensions:** 56px height, full width, sticky bottom (above tab bar)
- **Layout:**
  - Buy button: 50% width, left, #34A853 background, white text
  - Sell button: 50% width, right, #EA4335 background, white text
- **Button Styling:**
  - Height: 44px (centered vertically in 56px area)
  - Font: Inter 14px bold
  - Border radius: 8px
  - Tap feedback: 10% opacity decrease
- **Behavior:** Tap to navigate to Trade Order page (pre-filled with symbol and direction)

## Mock Data

```typescript
interface OrderBookLevel {
  price: number;
  amount: number;
  depth: number; // 0-100 percentage
}

interface TradeRecord {
  id: string;
  timestamp: Date;
  price: number;
  amount: number;
  direction: 'buy' | 'sell';
}

const mockOrderBook = {
  asks: [
    { price: 28457.50, amount: 0.5234, depth: 45 },
    { price: 28458.75, amount: 0.8956, depth: 72 },
    { price: 28460.00, amount: 0.3421, depth: 25 },
    { price: 28461.25, amount: 1.2341, depth: 88 },
    { price: 28462.50, amount: 0.6789, depth: 52 }
  ],
  bids: [
    { price: 28456.25, amount: 0.9876, depth: 78 },
    { price: 28455.00, amount: 0.4567, depth: 35 },
    { price: 28453.75, amount: 1.1234, depth: 92 },
    { price: 28452.50, amount: 0.7654, depth: 60 },
    { price: 28451.25, amount: 0.5432, depth: 40 }
  ]
};

const mockTrades: TradeRecord[] = [
  {
    id: 'trade-1',
    timestamp: new Date(Date.now() - 2000),
    price: 28456.75,
    amount: 1.2341,
    direction: 'buy'
  },
  {
    id: 'trade-2',
    timestamp: new Date(Date.now() - 5000),
    price: 28455.50,
    amount: 0.5678,
    direction: 'sell'
  },
  {
    id: 'trade-3',
    timestamp: new Date(Date.now() - 8000),
    price: 28457.00,
    amount: 2.3456,
    direction: 'buy'
  },
  {
    id: 'trade-4',
    timestamp: new Date(Date.now() - 12000),
    price: 28454.25,
    amount: 0.8765,
    direction: 'sell'
  },
  {
    id: 'trade-5',
    timestamp: new Date(Date.now() - 15000),
    price: 28456.00,
    amount: 1.5432,
    direction: 'buy'
  },
  {
    id: 'trade-6',
    timestamp: new Date(Date.now() - 18000),
    price: 28453.50,
    amount: 0.3210,
    direction: 'sell'
  },
  {
    id: 'trade-7',
    timestamp: new Date(Date.now() - 22000),
    price: 28458.50,
    amount: 0.9999,
    direction: 'buy'
  },
  {
    id: 'trade-8',
    timestamp: new Date(Date.now() - 25000),
    price: 28452.00,
    amount: 1.8765,
    direction: 'sell'
  }
];

const mockSymbolDetail = {
  symbol: 'BTC/USDT',
  name: 'Bitcoin',
  exchange: 'HashKey',
  currentPrice: 28456.75,
  change24h: 5.42,
  change24hAmount: 1456.25,
  open: 27000.50,
  high: 68900.00,
  low: 27500.00,
  close: 28456.75,
  volume: 125670.543,
  isWatchlisted: false
};
```

## Interaction Requirements

1. **Navigation:** Back arrow returns to Market List. Star toggles watchlist (changes icon fill).
2. **Chart:** Tap time period tabs to update candlestick chart. Fullscreen icon opens expanded chart view.
3. **Order Book:** Toggle between order book and trades view. Order book updates in real-time (mock websocket every 500ms).
4. **Depth Bars:** Visual depth percentages (0-100) with bars proportional to max depth.
5. **Action Buttons:** Buy/Sell buttons navigate to Trade Order page with symbol and direction pre-filled.
6. **Refresh:** Pull-to-refresh updates price header, chart, and order book.
7. **Price Updates:** Mock real-time updates every 3 seconds (simulate websocket).

## Constraints

- Viewport: 390px width
- Font: Inter (labels), JetBrains Mono (prices/numbers)
- Styling: Tailwind CSS only
- Candlestick chart: SVG or canvas (lightweight placeholder acceptable)
- Order book max 10 levels (5 asks + 5 bids)
- Accessibility: ARIA labels for icon buttons, semantic HTML for tables
- Real-time: Simulate websocket updates for order book and trades
- Safe area: Tab bar clearance at bottom (83px)
