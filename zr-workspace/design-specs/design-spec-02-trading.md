# Design Spec 02: Trading Module (K-line, Order Book, Order Entry, Convert, Options)
> Source: OKX iOS | Flows: 014-017, 022, 025 | Deep Analysis: 2026-03-04

---

## 1. Module Overview

The Trading module is the revenue-critical interface where users execute orders. OKX implements a dense, professional-grade trading screen with candlestick charts, order books, order forms, and confirmation modals. This spec covers spot trading, selling, token conversion, and options trading.

**Screens Covered**: Core trading screen (chart + order book + order form), pair selector, order confirmation modal, sell flow, crypto action options, convert/swap interface, options chain, simple options.

---

## 2. Screen-by-Screen Pixel Specifications

### Screen 2.1: Core Trading Screen (Spot)

**Layout Zones**:
| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Status Bar | 0px | 47px | System status |
| Nav Bar | 47px | 44px | Back \| "BTC/USDT" pair name \| Star \| Share |
| Pair Selector Row | 91px | 36px | Market type tabs: Spot \| Margin \| Futures |
| Chart Area | 127px | ~40% viewport | Candlestick + MA overlays + volume |
| Chart Controls | ~540px | 32px | 15m \| 1h \| 4h \| 1D \| More \| Indicators \| Settings |
| Order Book / Order Form | ~572px | ~45% viewport | Split: Left=Order Form, Right=Order Book |
| Bottom CTA | Bottom-83px | 56px | Fixed Buy/Sell buttons |
| Tab Bar | Bottom | 83px | 5-tab navigation |

### Screen 2.2: Chart Component (Detail)

**Candlestick Chart**:
- Background: #1A1A1A (dark mode default for trading)
- Height: ~40% viewport (~340px on iPhone 15 Pro)
- MA overlays: MA7 line (orange #F59E0B), MA30 line (blue #5B7AFF)
- Green candles: #22C55E (body + wick)
- Red candles: #EF4444 (body + wick)
- Grid lines: #333333, subtle
- Volume bars below candles: green/red matching candle direction

**Timeframe Tabs**:
- Items: 15m \| 1h \| 4h \| 1D \| More ▼
- Active: bg #000000, text #FFFFFF, radius 4px
- Inactive: transparent bg, text #999999
- Height: 32px per tab
- Spacing: 4px gap between tabs

**Chart Controls** (right side):
- Indicators dropdown: text "Indicators" + ↓ chevron
- Settings icon: 3 horizontal lines
- Fullscreen icon: expand arrows, top-right corner

**OHLCV Display Row**:
- Position: below chart header
- Format: O: 67,234 H: 67,500 L: 65,800 C: 67,274 V: 1.2B
- Font: 11px mono, #999999 labels, #FFFFFF values

### Screen 2.3: Order Book Component

**Layout** (right panel, ~45% width):
- **Asks (sell)**: Red rows, top section, descending order
- **Spread indicator**: Center, "Spread: 5.50 (0.008%)" in #999999
- **Bids (buy)**: Green rows, bottom section, ascending order

**Each Row** (20px height):
```
Price (mono 13px)  |  Amount (13px)  |  [Depth Bar]
67,280.00          |  1.234          |  ████████░░░░
```
- Depth bar: semi-transparent fill from right edge
  - Bids: rgba(34, 197, 94, 0.15) (#22C55E at 15% opacity)
  - Asks: rgba(239, 68, 68, 0.15) (#EF4444 at 15% opacity)
- Price column: monospace, 13px
  - Ask prices: #EF4444
  - Bid prices: #22C55E
- Amount column: #FFFFFF (dark mode), 13px
- Display: 5-10 levels each side
- **Tap on price level** → auto-fill order form price field

### Screen 2.4: Order Form Component

**Layout** (left panel, ~55% width):

**Buy/Sell Toggle**:
- Two segments: "Buy" (green #22C55E bg) \| "Sell" (red #EF4444 bg)
- Active: solid color bg, white text bold 16px
- Inactive: transparent bg, gray text
- Height: 36px, radius 8px
- Full width of panel

**Order Type Dropdown**:
- Current: "Limit" with ▼ chevron
- Opens: Bottom sheet with Limit \| Market \| Stop-Limit \| TP/SL
- Height: 36px
- Font: 14px medium

**Price Input**:
- Label: "Price" (12px, #999999)
- Input: 48px height, bg #F3F3F3 (light) or #2C2C2C (dark)
- Font: 16px monospace
- +/- stepper buttons: left/right, 32×32px, #E5E7EB border
- Radius: 8px

**Amount Input**:
- Label: "Amount (BTC)" (12px, #999999)
- Input: 48px height, same style as price
- "Max" link: right side, teal #17A2B8, 14px
- Available balance display below: "Available: 10,000 USDT" in 12px gray

**Percentage Quick Buttons**:
- Layout: [25%] [50%] [75%] [100%] — 4 equal buttons
- Height: 28px
- Background: #F0F0F0, radius 4px
- Active: #000000 bg, white text
- Font: 12px medium
- Gap: 4px between buttons

**Total Display**:
- "Total ≈ $10,085.18" — 14px, #999999
- Updates on price × amount change

### Screen 2.5: Order Confirmation Modal

**Overlay**: Semi-transparent black backdrop (rgba(0,0,0,0.5))

**Modal Card**:
- Width: 90% screen (max 358px)
- Background: #FFFFFF
- Border radius: 16px
- Padding: 20px
- Shadow: 0 8px 24px rgba(0,0,0,0.16)

**Content**:
- Close (X): top-right, 24×24px
- Title: "Confirm Order" 18px bold, centered
- Detail rows (key-value pairs):
  - Label: 14px, #999999, left-aligned
  - Value: 14px bold, #000000, right-aligned
  - Row height: 36px
  - Fields: Pair, Side, Type, Price, Amount, Total, Fee

**TP/SL Section**:
- Expandable with chevron toggle
- Chevron rotates 180° on expand
- Fields: Take Profit price, Stop Loss price
- Animation: 200ms ease-in-out height transition

**"Don't show again" Checkbox**:
- 24×24px + label 14px
- OKX has this — **ZR should NOT** (per antifragile principles)

**Confirm Button**:
- Full width, 52px
- Buy: bg #22C55E, text "Confirm Buy" white bold
- Sell: bg #EF4444, text "Confirm Sell" white bold
- Radius: 12px

**Cancel**: Text button below, 14px, #999999

### Screen 2.6: Sell Flow

**Asset Selection**:
- List of owned assets with icon + name + balance
- Row height: 64px
- Search input at top (same as market search)

**Amount Input Screen**:
- Large amount display: 28-40px bold monospace, centered
- Available balance: 14px gray below
- Numeric keypad: system keyboard or custom
- "Max" link: teal, 14px, right of balance display
- Market/Limit toggle: segmented control 36px

**Price Review**:
- Estimated price: 20px bold
- Estimated total: 20px bold
- Fee breakdown: 12px gray

### Screen 2.7: Convert Interface (Token Swap)

**Layout Zones**:
| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Nav Bar | 47px | 44px | Back \| "Convert" \| Info |
| From Field | 120px | 80px | Asset dropdown + Amount input |
| Swap Button | 200px | 44px | Circular ⇄ arrow (center) |
| To Field | 244px | 80px | Asset dropdown + Estimated output |
| Rate Display | 340px | 36px | "1 BTC ≈ 67,234.50 USDT" + refresh |
| Convert CTA | Bottom-120px | 52px | Brand color, full width |

**From/To Fields**:
- Asset selector: Token icon (32px) + name + ▼ chevron, left side
- Amount input: right-aligned, large 24px monospace
- Background: #F5F5F5, radius 12px, padding 16px
- "Max" link: 14px teal, right of From field

**Swap Direction Button**:
- Circular, 44px diameter
- Icon: ⇄ or ↕ arrows, 20px
- Background: #F0F0F0
- Border: 1px #E5E7EB
- Tap → swap From/To assets
- Animation: 180° rotation, 300ms

**Rate Display**:
- Format: "1 BTC ≈ 67,234.50 USDT"
- Font: 14px, #666666
- Refresh icon: right side, 20px, tappable
- Rate locked timer: 30-second countdown when rate is fetched

### Screen 2.8: Options Chain

**Chain Selector**: BTC \| ETH buttons (36px, active: bold + dark bg)
**Expiry Tabs**: Date buttons "03/26/2024", active: 2px black border, radius 6px
**Filter Row**: "All strikes ▼" \| "All types ▼" \| "Mark price ↕" \| "Change ↕"

**Options Row** (56px):
- Strike price: 16px bold, left
- Type: "Call" or "Put", 12px
- Mark price: 16px bold, monospace
- Change: color-coded badge (same as market)
- Greeks (expandable): Delta, Gamma, Theta, Vega — 11px mono

### Screen 2.9: Simple Options

**Product Cards** (88px):
- Background: #F0F0F0, border 1px #EEEEEE, radius 12px, padding 12px
- Token icon: 48×48px, circular (BTC: #F97316, ETH: #6366F1)
- Title: 16px bold
- Subtitle: "Current BTC price is $66,968.6" 12px gray
- Chevron: right arrow, right side

---

## 3. Complete Component Library

### Trading-Specific Components
| Component | Dimensions | Colors | States | Interaction |
|-----------|-----------|--------|--------|-------------|
| Buy/Sell Toggle | full width × 36px | Buy: #22C55E; Sell: #EF4444 | Active/Inactive | Tap to switch side |
| Order Type Selector | full × 36px | bg #F0F0F0, text #000000 | Dropdown | Opens bottom sheet |
| Price Input w/Stepper | full × 48px | bg #F3F3F3 | Default/Focus/Error | +/- buttons on sides |
| Amount Input w/Max | full × 48px | bg #F3F3F3 + teal "Max" | Default/Focus/Filled | Max auto-fills balance |
| % Quick Buttons | 4× equal × 28px | #F0F0F0 / #000000 active | Default/Active | 25/50/75/100% |
| Order Book Row | full × 20px | Green bid / Red ask + depth | Default/Tapped | Tap fills price |
| Spread Indicator | full × 16px | #999999 text | Default | Shows bid-ask spread |
| Candlestick Chart | full × 40%vh | Dark #1A1A1A bg | Multiple timeframes | Pinch/pan/crosshair |
| Confirmation Modal | 90% × auto | #FFFFFF, radius 16px | Open/Closed | Animated fade-in |
| Swap Direction Btn | 44px circle | #F0F0F0 bg | Default/Tapped | 180° rotate animation |
| Rate Display | full × 36px | #666666 text | Default/Refreshing | Timer countdown |
| Greeks Display | full × 60px | 11px mono text | Collapsed/Expanded | Mini Delta/Gamma/Theta/Vega |
| Options Row | full × 56px | Color per change | Default/Tapped | Strike/Type/Price/Change |

### Button Specifications
| Type | Height | Background | Text | Radius | Shadow |
|------|--------|-----------|------|--------|--------|
| Primary CTA | 52px | #007AFF or side-color | White 16px bold | 12px | 0 4px 12px rgba |
| Buy CTA | 52px | #22C55E | White 16px bold | 12px | None |
| Sell CTA | 52px | #EF4444 | White 16px bold | 12px | None |
| Secondary | 48px | Transparent | #000000 16px medium | 12px | 1px border #E5E7EB |
| Quick % | 28px | #F0F0F0 / #000000 | 12px medium | 4px | None |
| Icon Button | 44×44px | Transparent | #000000 icon | 8px | None |

---

## 4. Color Tokens (Trading-Specific)

| Token | Hex | Usage |
|-------|-----|-------|
| buy-green | #22C55E | Buy buttons, bid prices, positive candles |
| buy-green-bg | rgba(34,197,94,0.15) | Order book bid depth bars |
| sell-red | #EF4444 | Sell buttons, ask prices, negative candles |
| sell-red-bg | rgba(239,68,68,0.15) | Order book ask depth bars |
| cta-primary | #007AFF | Convert button, primary actions |
| chart-bg | #1A1A1A | Chart background |
| chart-grid | #333333 | Chart grid lines |
| ma7-color | #F59E0B | MA7 overlay line |
| ma30-color | #5B7AFF | MA30 overlay line |
| input-bg-dark | #2C2C2C | Dark mode input fields |
| stepper-border | #E5E7EB | +/- button borders |

---

## 5. Interaction Patterns

### Order Entry Flow
1. Select pair (from market list or pair selector)
2. Choose Buy/Sell via toggle
3. Select order type (Limit/Market/Stop-Limit)
4. Enter price (Limit) — or tap order book price level to auto-fill
5. Enter amount — or use 25/50/75/100% quick buttons
6. Review total and fee estimate
7. Tap Buy/Sell CTA
8. Confirmation modal appears with order details
9. Confirm → success toast / Cancel → dismiss

### Convert Flow
1. Select "From" asset via dropdown
2. Enter amount (or tap "Max")
3. Select "To" asset via dropdown
4. View estimated output and rate
5. Rate locked with 30-second countdown
6. Tap "Convert" CTA
7. Success confirmation

### Chart Interaction
- **Pinch zoom**: horizontal zoom on time axis
- **Pan**: horizontal scroll through time
- **Touch and hold**: crosshair appears with price/time tooltip
- **Timeframe switch**: instant chart data refresh
- **Indicator toggle**: add/remove MA overlays
- **Fullscreen**: expand chart to full viewport

---

## 6. ZR Securities Adaptation

### Direct Adoption
- Chart component (candlestick + MA overlays + volume)
- Order book with depth bars and tap-to-fill-price
- Buy/Sell toggle with green/red coloring
- Percentage quick buttons for amount
- Convert/swap interface
- Confirmation modal layout

### Modification Required
- **Exchange Routing**: Add "Via HashKey" indicator on confirmation modal
- **Fee breakdown**: Itemize: Trading fee + SFC regulatory fee + Network fee
- **TP/SL**: Make more prominent (not hidden in expandable) per antifragile principles
- **"Don't show again"**: REMOVE from confirmation — always show for compliance
- **Order type**: Add "Best Execution" routing across exchanges

### New Design Needed
- **Cooling-off Modal**: 30-second countdown for orders >20% of portfolio
  - Timer: circular countdown animation
  - Body: "This order represents X% of your portfolio. Take a moment to review."
  - CTA disabled until timer completes
- **Risk Level Indicator**: Show volatility badge on pair header
- **Trading Level Gate**: If user lacks verification for margin/options → show upgrade modal
- **Multi-Exchange Best Price**: Show price comparison across HashKey/Bullish/OSL/VDX

### Compliance
- SFC risk disclosure before first leverage trade
- Mandatory confirmation for all derivative orders
- Fee transparency with regulatory fee itemization
- KYC level verification for margin/futures/options access

---

*Version: v2.0 (Deep Analysis) | Last Updated: 2026-03-04*
