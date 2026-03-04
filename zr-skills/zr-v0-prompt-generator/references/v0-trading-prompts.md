# v0 Prompt Guide: Trading Module

> Source: OKX Flows 014-017, 022, 025 | Extracted from full OKX analysis
> OKX Patterns: Chart area ~40% screen height with MA overlays (MA7, MA30), time period tabs (15m/1h/4h/1D/More), order book split buy/sell with depth bars, order form with Buy/Sell toggle + order type dropdown + price/amount inputs + percentage quick-buttons, confirmation modal with TP/SL expandable section, convert interface with From/To swap.

## Key Screens to Generate

### Screen 1: Symbol Detail (K-line Page)
The core decision-making screen.

**Layout zones (top to bottom)**:
1. **Nav bar** (44px): Back arrow, "BTC/USDT" center, star icon (favorite), share icon
2. **Price header** (80px):
   - Current price large (28px mono, green/red based on direction)
   - 24h change badge: "+2.34% ↑" in rounded pill
   - Row: Open / High / Low / Volume in 4 columns
3. **Chart area** (40% viewport ~312px):
   - Candlestick chart (default) or Line chart toggle
   - Time period tabs: 1m | 5m | 15m | 1H | 4H | 1D | 1W | 1M
   - Fullscreen icon top-right
   - Technical indicator button bottom-left
4. **Order book + trades toggle** (36px): Segmented `[Order Book] [Trades]`
5. **Order book** (remaining before tab):
   - Split view: Asks (red, top) | Bids (green, bottom)
   - Each row: Price | Amount | Depth bar
   - Spread indicator in the middle
6. **Bottom action bar** (56px + safe area):
   - "Buy" button (green, 50% width)
   - "Sell" button (red, 50% width)

### Screen 2: Trade Order
The highest-stakes interaction screen.

**Layout zones**:
1. **Nav bar**: Back + "BTC/USDT" + asset class indicator
2. **Buy/Sell toggle** (44px): Green "Buy" / Red "Sell" segmented control
3. **Order type selector** (36px): `[Limit] [Market] [Stop-Limit]`
4. **Price input** (56px): "Price" label + input field + increment/decrement buttons
   - For Market orders: shows "Market Price" (disabled, gray)
5. **Amount input** (56px): "Amount" label + input field + unit toggle (BTC/USDT)
6. **Quick percentage row** (36px): `[25%] [50%] [75%] [100%]` pill buttons
7. **Order summary** (varies):
   - Estimated total
   - Trading fee
   - Exchange: [HashKey badge]
8. **Place Order button** (52px): Full-width, "Buy BTC" green or "Sell BTC" red
9. **Open orders preview** (optional): Collapsible section showing current open orders

**ZR Antifragile Elements**:
```
IF order amount > 20% of portfolio:
  Show cooling-off modal:
  ┌────────────────────────────────┐
  │  ⚠️ Large Order Alert          │
  │                                │
  │  This order represents 32%     │
  │  of your total portfolio.      │
  │                                │
  │  Historical data shows:        │
  │  • 67% of similar-sized orders │
  │    result in losses             │
  │  • Your 30-day win rate: 42%   │
  │                                │
  │  [Wait 28s...]                 │
  │  ─────────────────────         │
  │  [Cancel]  [Proceed Anyway]    │
  └────────────────────────────────┘
```

### Screen 3: Trade Confirmation
Modal/bottom sheet after tapping "Place Order":

```
┌──────────────────────────────────┐
│  Confirm Buy Order               │
│  ────────────────────────────    │
│  Pair:        BTC/USDT           │
│  Type:        Limit              │
│  Side:        Buy                │
│  Price:       $67,234.50         │
│  Amount:      0.15 BTC           │
│  Total:       $10,085.18         │
│  Fee:         $10.09 (0.1%)      │
│  Exchange:    HashKey             │
│  ────────────────────────────    │
│  ⚠️ Risk Disclosure:             │
│  Virtual assets are highly       │
│  volatile. You may lose all      │
│  of your investment.             │
│  ────────────────────────────    │
│  [Cancel]    [Confirm Buy]       │
└──────────────────────────────────┘
```

## Screen 4: Convert (Simple Swap)
OKX Flow 022 — Simple swap interface for token conversion.

**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Convert" title
2. **From field** (80px): Asset selector dropdown + amount input + "Max" link
3. **Swap button** (44px): Circular arrow icon (center, tappable to swap From/To)
4. **To field** (80px): Asset selector dropdown + estimated output (gray, calculated)
5. **Rate display** (36px): "1 BTC ≈ 67,234.50 USDT" with refresh icon
6. **Convert button** (52px): Brand blue, full-width, "Convert"

**OKX Pattern**: Simple From/To with swap direction button, one-tap convert. Very clean, minimal UI — good for beginner users. ZR should implement this as the "Simple Trade" mode for new users.

## OKX Component Patterns (Extracted) — Apply to ZR Trading Module

### Order Book Component (OKX Flow 014)
- Split view: Red asks (top, descending) | Green bids (bottom, ascending)
- Each row: Price (mono font) | Amount | Depth bar (colored background fill proportional to volume)
- Spread indicator in center gap: "Spread: 5.50 (0.008%)"
- Tap on price level → auto-fills order form price field
- Depth bars: Semi-transparent green/red fills from right edge

### Chart Component (OKX Flow 014-015)
- Candlestick chart default, line chart toggle
- MA overlays: MA7 (orange), MA30 (blue)
- Time period tabs: 15m | 1H | 4H | 1D | More (opens full list)
- Fullscreen icon top-right of chart
- Technical indicator button bottom-left
- Pinch-to-zoom, pan, crosshair on touch-and-hold with price/time tooltip
- OHLCV display row below chart header

### Order Confirmation Modal (OKX Flow 014)
- Center overlay with semi-transparent backdrop
- Order details in key-value rows
- TP/SL expandable section (chevron toggle)
- "Don't show again" checkbox (OKX has this — ZR should NOT have it per antifragile principles)
- Confirm button color matches side (green for buy, red for sell)
- Cancel text button below

## Mock Data for Trading

```javascript
const orderBookMock = {
  asks: [
    { price: 67280.00, amount: 1.234, total: 83027.52 },
    { price: 67275.50, amount: 0.567, total: 38145.21 },
    { price: 67271.00, amount: 0.890, total: 59851.19 },
    { price: 67268.50, amount: 2.100, total: 141263.85 },
    { price: 67265.00, amount: 0.345, total: 23206.43 },
  ],
  bids: [
    { price: 67270.00, amount: 2.345, total: 157738.15 },
    { price: 67265.50, amount: 0.890, total: 59866.30 },
    { price: 67260.00, amount: 1.567, total: 105394.42 },
    { price: 67255.50, amount: 0.432, total: 29054.38 },
    { price: 67250.00, amount: 3.210, total: 215872.50 },
  ],
  spread: "5.50 (0.008%)"
};

const chartMock = {
  pair: "BTC/USDT",
  currentPrice: 67274.50,
  change24h: 2.34,
  high24h: 67500.00,
  low24h: 65800.00,
  volume24h: "1.2B",
  exchange: "HashKey",
  timeframes: ["15m", "1H", "4H", "1D", "1W", "1M"],
};
```
