# Symbol Detail Page (K-line + Order Book) -- ZR Securities Trading App

> This prompt generates the coin/symbol detail page with candlestick chart, order book, and buy/sell action bar.

## Context
Same as prompt-01. This is the core decision-making screen where users analyze price action and market depth before trading.

**OKX Competitive Analysis Applied**: Adopted OKX's candlestick chart with time-period selector (DA-004), order book split view with depth bars (DA-005), and tap-order-book-price-to-autofill pattern (DA-006). Enhanced with exchange badge visibility and SFC-compliant risk disclosure near decision points.

## Design System Tokens
(Same as prompt-01)

## Page Layout (top to bottom)

### Zone 1: Navigation Bar (44px)
- Left: Back arrow icon (24px) -- navigates to /markets
- Center: Pair name "BTC/USDT" (18px semibold) + Exchange badge "HashKey" pill beside it
- Right: Star icon (favorite toggle, 24px) + Share icon (24px)
- Background: bg-primary

### Zone 2: Price Header (80px)
- Row 1: Current price "$67,234.50" (28px JetBrains Mono Bold, colored green if up, red if down)
- Row 1 right: Change badge "+2.34%" (rounded pill, bg-success/20 text-success or bg-danger/20 text-danger)
- Row 2: 4-column stats grid (13px caption, text-secondary labels, 13px mono values):
  - Open: $65,890.00 | High: $67,890.00 | Low: $65,234.00 | Vol: 1.2B

### Zone 3: Candlestick Chart Area (280px, ~33% viewport)
- Full-width candlestick chart rendered with Recharts
- Candle colors: success (#00C853) for bullish, danger (#FF1744) for bearish
- Time period tabs below chart: `15m | 1H | 4H | 1D | 1W | 1M` (text tabs, active has brand-blue underline)
- Default: 1D selected
- Background: bg-primary
- Grid lines: border color, subtle
- Fullscreen icon (top-right corner of chart, 20px)
- **From OKX 082-083**: Time period tabs in same position, same interaction pattern

### Zone 4: Order Book / Trades Toggle (36px)
- Segmented control: `[Order Book] [Recent Trades]`
- Active: brand-blue text + underline
- Inactive: text-secondary

### Zone 5: Order Book (remaining height before action bar)
**Split layout (two halves)**:
- Top half: Asks (sell orders) -- red/danger colored
- Bottom half: Bids (buy orders) -- green/success colored
- Middle: Spread indicator "$5.50 (0.008%)" in text-secondary

**Each order book row**:
```
Price (mono 13px)  |  Amount (mono 13px)  |  Depth bar (background fill)
```
- Ask rows: text-danger for price, depth bar bg-danger/10 fill from right
- Bid rows: text-success for price, depth bar bg-success/10 fill from right
- 10 levels shown for each side
- Tap on price row -> auto-fills trade form with that price (DA-006)
- **From OKX 082**: Same split layout, same depth bar visualization

**Recent Trades view** (shown when "Recent Trades" tab active):
```
Price  |  Amount  |  Time
```
- Each row colored by direction (green buy, red sell)
- 20 most recent trades

### Zone 6: Bottom Action Bar (56px + 34px safe area)
- Two buttons side by side, each 50% width:
  - "Buy" button: bg-success, white text, 16px semibold, rounded-lg
  - "Sell" button: bg-danger, white text, 16px semibold, rounded-lg
- Tapping navigates to /trade?symbol=BTC-USDT&side=buy (or sell)

## Mock Data
```javascript
const symbolData = {
  pair: "BTC/USDT", exchange: "HashKey",
  price: 67234.50, change: 2.34, changeAmt: 1534.50,
  open: 65890.00, high: 67890.00, low: 65234.00, volume: "1.2B",
};

// 30 candlesticks for 1D view
const candlestickData = [
  { time: "09:00", open: 65890, high: 66200, low: 65700, close: 66100 },
  { time: "10:00", open: 66100, high: 66500, low: 65900, close: 66400 },
  // ... 28 more candles
];

const orderBookData = {
  asks: [
    { price: 67280.00, amount: 1.234, total: 83027.52, depth: 0.45 },
    { price: 67275.50, amount: 0.567, total: 38145.21, depth: 0.35 },
    { price: 67272.00, amount: 2.100, total: 141271.20, depth: 0.78 },
    { price: 67268.00, amount: 0.890, total: 59868.52, depth: 0.42 },
    { price: 67265.00, amount: 1.500, total: 100897.50, depth: 0.55 },
    { price: 67261.50, amount: 0.345, total: 23205.22, depth: 0.18 },
    { price: 67258.00, amount: 3.200, total: 215225.60, depth: 1.00 },
    { price: 67255.00, amount: 0.678, total: 45598.89, depth: 0.32 },
    { price: 67252.00, amount: 1.100, total: 73977.20, depth: 0.48 },
    { price: 67250.00, amount: 0.450, total: 30262.50, depth: 0.22 },
  ],
  bids: [
    { price: 67245.00, amount: 2.345, total: 157689.53, depth: 0.72 },
    { price: 67240.00, amount: 0.890, total: 59843.60, depth: 0.42 },
    { price: 67235.00, amount: 1.567, total: 105377.25, depth: 0.58 },
    { price: 67230.00, amount: 3.200, total: 215136.00, depth: 1.00 },
    { price: 67225.00, amount: 0.456, total: 30654.60, depth: 0.22 },
    { price: 67220.00, amount: 1.890, total: 127045.80, depth: 0.65 },
    { price: 67215.00, amount: 0.234, total: 15728.31, depth: 0.12 },
    { price: 67210.00, amount: 2.100, total: 141141.00, depth: 0.75 },
    { price: 67205.00, amount: 0.567, total: 38105.24, depth: 0.28 },
    { price: 67200.00, amount: 1.345, total: 90384.00, depth: 0.52 },
  ],
  spread: { value: 5.00, percent: 0.007 },
};
```

## Interactions
- **Tap time period**: Switch chart data, active tab gets brand-blue underline
- **Tap Order Book / Trades toggle**: Switch between views with cross-fade
- **Tap order book price row**: Auto-fill trade form when navigating to trade (DA-006 from OKX)
- **Tap Buy button**: Navigate to /trade?symbol=BTC-USDT&side=buy
- **Tap Sell button**: Navigate to /trade?symbol=BTC-USDT&side=sell
- **Tap back arrow**: Navigate to /markets
- **Tap star**: Toggle favorite
- **Pinch chart** (optional): Zoom in/out on candlesticks

## States
- [x] Default populated (BTC/USDT with full data)
- [x] Loading (skeleton shimmer on chart + order book)
- [x] Dark mode default

## Technical Constraints
Same as prompt-01. Use Recharts for candlestick chart (ComposedChart with custom candle rendering via Bar + ErrorBar or custom shapes).

---

*Generated by ZR v0 Prompt Generator Skill v1.0 -- Based on OKX analysis of flows 015_Crypto_detail, 014_Trade*
