# Trade Order Page -- ZR Securities Trading App

> This prompt generates the trading order form with buy/sell toggle, order types, and the antifragile cooling-off modal.

## Context
This is the highest-stakes interaction screen in the app. Every design decision affects whether users make good or bad trades. ZR's "sober not pleasurable" principle is most critical here.

**OKX Competitive Analysis Applied**: Adopted Buy/Sell segmented toggle (DA-007), 3-step order flow (DA-008), quick percentage buttons (DA-009), and tap-price-to-fill (DA-006). **ZR Innovation**: Added 30-second cooling-off period for large orders (IO-001), trade frequency alert (IO-002), and SFC risk disclosure in confirmation (DD-009).

## Page Layout (top to bottom)

### Zone 1: Navigation Bar (44px)
- Left: Back arrow + "BTC/USDT" (18px semibold)
- Center: Exchange badge "HashKey" pill
- Right: Chart mini-icon (tap to go to symbol detail)

### Zone 2: Buy/Sell Toggle (48px)
- Full-width segmented control, 2 segments, mx-16, rounded-xl
- "Buy" segment: When active -> bg-success, white text, 15px semibold
- "Sell" segment: When active -> bg-danger, white text, 15px semibold
- Inactive: bg-secondary, text-secondary
- Smooth transition 200ms
- **From OKX 086**: Same green/red convention, same position

### Zone 3: Mini Order Book (120px, optional)
- Compact 5-level order book on the left side (50% width)
- Right side: Mini price chart (sparkline or simplified candlestick)
- Tap any price level -> fills price input (DA-006)
- Separated by thin border line

### Zone 4: Order Type Selector (36px)
- Horizontal tabs: `[Limit] [Market] [Stop-Limit]`
- Active tab: brand-blue text + underline
- Inactive: text-secondary
- **From OKX**: Same 3 types, simplified from OKX's 4+ types (DD-008)

### Zone 5: Price Input (56px)
- Label "Price (USDT)" top-left, 13px text-secondary
- Input field: bg-tertiary, rounded-lg, 15px JetBrains Mono
- Increment/decrement buttons on right side (+ / - icons, 44x44 touch targets)
- For Market orders: Show "Market Price" text, input disabled with gray background
- For Stop-Limit: Additional trigger price input below

### Zone 6: Amount Input (56px)
- Label "Amount (BTC)" top-left, 13px text-secondary
- Input field: same style as price
- Unit toggle button right side: "BTC" / "USDT" switchable
- Below: Available balance text "Available: 15,000.00 USDT" (13px, text-secondary)

### Zone 7: Quick Percentage Row (36px)
- 4 pill buttons: `[25%] [50%] [75%] [100%]`
- Each: bg-secondary, rounded-lg, px-12, 13px text-secondary
- Active (selected): bg-brand-blue/20, text-brand-blue, border brand-blue
- Tap fills amount as percentage of available balance
- **From OKX 086**: Same pattern, same position (DA-009)

### Zone 8: Order Summary (variable height, ~80px)
- Estimated total: "Total: ~$10,085.18 USDT" (15px mono)
- Trading fee: "Fee: ~$10.09 (0.1%)" (13px, text-secondary)
- Exchange: "Via HashKey" with exchange badge
- Divider line above

### Zone 9: Place Order Button (52px)
- Full-width, rounded-xl, mx-16
- Buy mode: bg-success, text "Buy BTC" white 16px semibold
- Sell mode: bg-danger, text "Sell BTC" white 16px semibold
- Disabled state: bg-secondary, text-tertiary (when inputs incomplete)

## Confirmation Bottom Sheet (triggered on Place Order tap)
```
┌──────────────────────────────────────┐
│ ─── (drag handle, 40x4, rounded)    │
│                                       │
│ Confirm Buy Order          (H3 18px) │
│ ──────────────────────────────────── │
│ Pair:        BTC/USDT       (15px)   │
│ Type:        Limit                    │
│ Side:        Buy                      │
│ Price:       $67,234.50    (mono)     │
│ Amount:      0.15 BTC      (mono)     │
│ Total:       $10,085.18    (mono)     │
│ Fee:         $10.09 (0.1%)            │
│ Exchange:    [HashKey badge]          │
│ ──────────────────────────────────── │
│ ⚠ Risk Disclosure:         (warning) │
│ Virtual assets are highly volatile.  │
│ You may lose all of your investment. │
│ ──────────────────────────────────── │
│ [Cancel]        [Confirm Buy]        │
│  (outlined)      (bg-success)         │
└──────────────────────────────────────┘
```
- **DD-009**: Enhanced confirmation with SFC risk disclosure + exchange badge + fee breakdown (OKX doesn't have risk disclosure in confirmation)

## Cooling-Off Modal (IO-001, ZR INNOVATION)
**Triggered when**: Order amount > 20% of portfolio value

```
┌──────────────────────────────────────┐
│                                       │
│    ⚠ Large Order Alert     (H2 22px) │
│    (warning icon, #FFB300)            │
│                                       │
│    This order represents 32% of      │
│    your total portfolio.              │
│                                       │
│    ── Risk Statistics ──              │
│    • 67% of similar-sized orders     │
│      result in losses                 │
│    • Your 30-day win rate: 42%       │
│    • Current market volatility: High │
│                                       │
│    ┌────────────────────────────┐    │
│    │  [====          ] 28s      │    │
│    │  Please wait before        │    │
│    │  confirming                 │    │
│    └────────────────────────────┘    │
│                                       │
│    [Cancel]    [Proceed Anyway]       │
│     (full)      (disabled until 0s)   │
│                                       │
└──────────────────────────────────────┘
```
- 30-second countdown timer with animated progress bar
- "Proceed Anyway" button DISABLED until timer reaches 0
- Cancel button always active
- Background overlay: bg-black/60
- Modal: bg-secondary, rounded-2xl, mx-24, p-24
- Progress bar: h-4, rounded-full, bg-warning with animation

## Mock Data
```javascript
const tradePageData = {
  pair: "BTC/USDT",
  exchange: "HashKey",
  currentPrice: 67234.50,
  availableBalance: { usdt: 15000.00, btc: 0.5 },
  fee: 0.001, // 0.1%
  minOrder: 0.0001, // BTC
  portfolioTotal: 50000, // for cooling-off threshold
};
```

## Interactions
- **Toggle Buy/Sell**: Switches button colors and labels, recalculates available balance
- **Select order type**: Shows/hides relevant input fields (Market hides price input)
- **Tap percentage button**: Fills amount as % of available balance
- **Tap +/- on price**: Increment/decrement by tick size ($0.50 for BTC)
- **Tap Place Order**: If amount > 20% portfolio -> Show cooling-off modal, else -> Show confirmation sheet
- **Cooling-off timer**: Counts down from 30, enables "Proceed" at 0
- **Confirm**: Shows success state with calm checkmark animation (IO-007, no confetti)

## States
- [x] Buy mode (green theme)
- [x] Sell mode (red theme)
- [x] Limit / Market / Stop-Limit order type views
- [x] Confirmation bottom sheet
- [x] Cooling-off modal with countdown
- [x] Success state (calm checkmark)
- [x] Disabled state (incomplete inputs)

## Technical Constraints
Same as prompt-01. Timer uses setInterval for countdown. Bottom sheet uses CSS transform + transition for slide-up animation.

---

*Generated by ZR v0 Prompt Generator Skill v1.0 -- Based on OKX flows 016_Sell_crypto, 019_Buying_a_crypto*
