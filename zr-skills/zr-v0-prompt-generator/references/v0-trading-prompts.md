# v0 Prompt Guide: Trading Module

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

## Mock Data for Trading

```javascript
const orderBookMock = {
  asks: [
    { price: 67280.00, amount: 1.234, total: 83027.52 },
    { price: 67275.50, amount: 0.567, total: 38145.21 },
    // 10 levels
  ],
  bids: [
    { price: 67270.00, amount: 2.345, total: 157738.15 },
    { price: 67265.50, amount: 0.890, total: 59866.30 },
    // 10 levels
  ],
  spread: "5.50 (0.008%)"
};
```
