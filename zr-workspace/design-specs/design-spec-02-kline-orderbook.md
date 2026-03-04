# Design Spec: K-line & Order Book Module

> **Source**: OKX iOS App
> **Analyzed**: 2026-03-04
> **Flows Covered**: 014_Trade_(Exchange), 015_Crypto_detail
> **Screenshots Analyzed**: 14 (073-085)

---

## 1. Information Architecture

```
Crypto Detail Entry (from market row tap)
├── Chart Tab (default)
│   ├── Price Header (current price + 24h stats)
│   ├── Candlestick / Line Chart
│   ├── Time Period Selector
│   ├── Technical Indicators
│   └── Fullscreen Mode
├── Overview Tab
│   ├── Market Stats (MCap, Vol, Supply)
│   ├── About Section
│   └── Related News
├── Data Tab
│   ├── Trading Data (Taker buy/sell volume bar chart)
│   ├── Premium (USDT/USDC premium line chart)
│   └── Arbitrage (funding rates table)
├── Trade Tab
│   ├── Product Selector (Spot/Margin/Perpetual/Expiry/Options)
│   └── Quick Trade Entry
├── Bots Tab
│   └── Automated trading strategies
└── Copy Tab
    └── Recommended traders to copy
```

---

## 2. Screen-by-Screen Analysis

### Screen 082-083: Crypto Detail - Chart View

**Purpose**: Primary decision-making screen with price chart and market depth

**Layout Structure**:
- **Nav bar** (44px): Back arrow (left) + "BTC/USDT" dropdown (left-center) + price & change% below name + Star (right) + Share (right)
- **Tab bar** (36px): "Chart | Overview | Data | Trade | Bots | Copy" horizontal scroll tabs
- **Chart area** (~45% viewport):
  - Candlestick chart with green (up) and red (down) candles
  - Time period pills below chart: "Time | 1m | 5m | 15m | 1H | 4H | 1D | 1W | 1M | More"
  - Volume bars overlaid at bottom of chart
  - Crosshair tooltip on touch: Date, Open, High, Low, Close, Volume
- **Order Book / Trades toggle** (36px): Segmented control
- **Order Book section**: 
  - Split layout: Asks (red) top, Bids (green) bottom
  - Columns: Price | Amount | [Depth bar visualization]
  - Spread indicator row between asks and bids
  - Depth bars fill from right edge, proportional to volume
- **Bottom action bar** (56px + safe area): Two buttons "Buy" (green) | "Sell" (red) 50/50 split

**Component Inventory**:

| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Pair Header | Text + Dropdown | Nav bar | Default / Dropdown open | Pair name with triangle, price below in green/red |
| Detail Tabs | Horizontal Scroll Tabs | Below nav | Active (bold + underline) / Inactive | 6 tabs, only 5 visible |
| Candlestick Chart | Interactive Chart | Center | Normal / Crosshair / Pinch-zoom | ~45% viewport height |
| Time Period Pills | Horizontal Scroll | Below chart | Active (filled) / Inactive | "Time" = custom, plus preset intervals |
| Order Book | Split List | Below chart | Buy/Sell split / Full buy / Full sell | 5 levels each side default |
| Depth Bar | Progress Fill | Order book rows | Variable width based on volume | Green fill (bids), Red fill (asks) |
| Spread Row | Text | Between asks/bids | Positive spread | Shows spread value + percentage |
| Buy/Sell Buttons | CTA Pair | Bottom fixed | Default / Pressed / Loading | Full width 50/50 split |

**Data Fields**:

| Field | Format | Update Frequency | Source |
|-------|--------|-----------------|--------|
| Current Price | "$63,796.3" mono, large | Real-time tick | WebSocket |
| 24h Change | "+0.98%" green/red | Real-time | Computed |
| Candlestick OHLCV | Open/High/Low/Close/Volume per candle | Per interval | REST + WS |
| Order Book Levels | Price / Amount / Depth | Real-time (100ms) | WebSocket |
| Spread | "5.50 (0.008%)" | Computed from L1 | Real-time |

**Interaction Behaviors**:
- Tap pair name dropdown -> Show pair switcher bottom sheet
- Tap time period pill -> Switch chart timeframe (smooth re-render)
- Touch and hold chart -> Show crosshair with OHLCV tooltip
- Pinch chart -> Zoom in/out on time axis
- Pan chart -> Scroll through historical data
- Tap order book price level -> Auto-fill that price in trade form
- Tap "Buy" -> Navigate to trade page with Buy pre-selected
- Tap "Sell" -> Navigate to trade page with Sell pre-selected
- Swipe between Chart/Overview/Data/Trade tabs
- Tap Star -> Toggle favorite

### Screen 073-079: Trade Detail View

**Purpose**: BTC/USDT trading detail with multi-product access

**Layout Structure** (Dark mode):
- Same nav header as Chart view
- "Chart | Overview | Data | Trade | Bots | Copy" tabs
- **Trade tab content**:
  - Section headers: "Spot", "Margin", "Perpetual", "Expiry", "Options"
  - Each section lists available products with:
    - Star (favorite) + Pair name + Product badge (e.g., "Perp", "10x")
    - Price + Change% aligned right
  - Options section has special "BTC Simple options" card with market price

**Visual Design Notes (OKX Dark Mode)**:
- Background: Pure black #000000 (OLED-optimized)
- Card backgrounds: #1A1A1A
- Text primary: #FFFFFF
- Text secondary: #8C8C8C
- Green (positive/buy): #00B07C (OKX green, slightly teal)
- Red (negative/sell): #F6465D
- Tab indicator: White underline 2px
- Chart candles: Green body + wick for up, Red body + wick for down
- Order book depth bars: Semi-transparent green/red fills (~20% opacity)
- Spread area: Slightly different bg shade to separate asks from bids

---

## 3. Reusable Component Library

| Component | Description | Used In | Props/Variants | ZR Applicability |
|-----------|-------------|---------|----------------|------------------|
| Candlestick Chart | Interactive K-line chart with OHLCV | Symbol detail | `{data, timeframe, indicators[], onCrosshair}` | Direct use (simplify indicator set) |
| Order Book | Split ask/bid depth display | Symbol detail, Trade page | `{asks[], bids[], levels, onPriceSelect}` | Direct use + add exchange badge |
| Time Period Selector | Horizontal pill selection | Chart area | `{periods[], active, onSelect}` | Direct use |
| Pair Header | Nav with pair name dropdown + live price | Detail pages | `{pair, price, change, isFavorite}` | Modify: add exchange badge |
| Depth Bar | Horizontal fill bar in order book | Order book rows | `{percent, side: 'ask'|'bid'}` | Direct use |
| Detail Tabs | 6-tab horizontal scroll | Symbol detail | `{tabs[], activeTab}` | Modify: Remove Bots/Copy for ZR v1 |
| Buy/Sell CTA | Fixed bottom dual button | Symbol detail | `{buyLabel, sellLabel, onBuy, onSell}` | Direct use |

---

## 4. Interaction Pattern Summary

### 4.1 Chart Interactions
- **Crosshair on touch-hold**: Displays OHLCV data at touched point
- **Pinch-to-zoom**: Adjusts time density on chart
- **Pan**: Horizontal scroll through history
- **Time period switch**: Smooth chart re-render with new candle data
- **Landscape mode**: Double-tap or rotation enters fullscreen chart (not visible in screenshots but standard)

### 4.2 Order Book Interactions
- **Tap price level**: Auto-fills price in trade order form
- **Tap layout toggle**: Switch between split/buy-only/sell-only views
- **Real-time updates**: Levels flash briefly on change (green flash for new bid, red for new ask)

### 4.3 Navigation
- **Tab switching**: Swipe or tap between Chart/Overview/Data/Trade/Bots/Copy
- **Back navigation**: Arrow returns to market list
- **Dropdown pair switch**: Tap pair name to switch without going back

---

## 5. Design Strengths & Weaknesses

### Strengths
1. **6-tab detail view** (Chart/Overview/Data/Trade/Bots/Copy): Comprehensive without leaving the page -> **Adopt 4 tabs for ZR** (Chart/Overview/Trade/Orders)
2. **Dark mode for trading screens**: Reduces eye strain, standard in industry -> **Adopt as default**
3. **Depth bar visualization**: Intuitive volume representation in order book -> **Adopt directly**
4. **Spread indicator**: Clear mid-price/spread display -> **Adopt directly**
5. **Price tapping in order book**: Efficient price filling for orders -> **Adopt directly**

### Weaknesses
1. **No technical indicators visible by default**: Users need to explicitly add MA, RSI etc -> **Show MA(7) + MA(25) by default for ZR**
2. **Chart area relatively small**: ~40% viewport -> **Make 45%+ for ZR, prominent fullscreen button**
3. **Lots of tabs**: 6 tabs is overwhelming for new users -> **Reduce to 4 for ZR: Chart/Info/Trade/Orders**
4. **No price alert button**: Can't set alerts from detail page -> **Add bell icon near price for quick alert**

### Missing Features for ZR
1. **Exchange execution indicator**: No indication of which exchange will fill the order
2. **Risk level for the asset**: No volatility indicator
3. **SFC risk disclosure**: Must be present near trade buttons

---

## 6. ZR Securities Adaptation Recommendations

### 6.1 Direct Adoption

| Pattern | Source | Rationale |
|---------|--------|-----------|
| Candlestick chart with time periods | OKX 082 | Industry standard, well-executed |
| Order book split view with depth bars | OKX 082-083 | Clear, efficient visualization |
| Tap order book -> fill price | OKX standard | Reduces taps to trade |
| Dark mode for trading | OKX 073-079 | Professional, reduces eye strain |
| Buy/Sell bottom CTA | OKX 082 | Clear call to action |

### 6.2 Modification Required

| Pattern | Original | ZR Version | Rationale |
|---------|----------|------------|-----------|
| 6 detail tabs | Chart/Overview/Data/Trade/Bots/Copy | Chart/Info/Trade/Orders (4 tabs) | Simpler for ZR v1 scope |
| Pair header | Pair name + price | Add exchange badge (e.g., "HashKey") | Multi-exchange transparency |
| Chart indicators | None by default | MA(7) + MA(25) default overlay | Helps new traders |
| Order book | No exchange info | Show "Executed on: HashKey" label | SFC compliance |

### 6.3 Compliance Considerations

| SFC Requirement | Design Implication | Implementation |
|----------------|-------------------|----------------|
| Execution venue disclosure | Must show which exchange fills orders | "Execution: HashKey Exchange" text near Buy/Sell buttons |
| Risk disclosure | Must show near trading actions | Subtle disclaimer above Buy/Sell: "Virtual assets involve significant risk" |
| Best execution | Must demonstrate best price | Show comparison: "Best price across your exchanges" |

---

## 7. v0 Generation Hints

### Layout Blueprint
```
┌──────────────────────────────────────┐ 390px
│ Status Bar (44px)                    │
├──────────────────────────────────────┤
│ [<] BTC/USDT ▾   [HashKey]  [★][↗] │ 52px - Nav with exchange badge
│     $67,234.50  +2.34%               │
├──────────────────────────────────────┤
│ Chart | Info | Trade | Orders        │ 36px - Tabs
├──────────────────────────────────────┤
│                                      │
│     [Candlestick Chart Area]         │ 280px (~36% viewport)
│     MA(7): 67,100  MA(25): 66,890   │
│                                      │
├──────────────────────────────────────┤
│ 1m  5m  15m  1H  4H  1D  1W  1M    │ 32px - Time periods
├──────────────────────────────────────┤
│ [Order Book]  [Recent Trades]        │ 32px - Toggle
├──────────────────────────────────────┤
│ Ask: 67,280.00  1.234  [====]       │
│ Ask: 67,275.50  0.567  [==]         │
│ Ask: 67,272.00  2.100  [======]     │
│ --- Spread: 5.50 (0.008%) ----------│
│ Bid: 67,270.00  2.345  [=======]    │
│ Bid: 67,265.50  0.890  [===]        │
│ Bid: 67,260.00  1.567  [=====]      │
├──────────────────────────────────────┤
│ ⚠ Virtual assets involve risk        │ 20px - Disclaimer
├──────────────────────────────────────┤
│ [  Buy BTC  ] [  Sell BTC  ]        │ 52px + 34px safe area
└──────────────────────────────────────┘
```

---

*Generated by ZR Competitive Design Analysis Skill v1.0*
