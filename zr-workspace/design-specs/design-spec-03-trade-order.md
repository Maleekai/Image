# Design Spec: Trade Order Module

> **Source**: OKX iOS App
> **Analyzed**: 2026-03-04
> **Flows Covered**: 016_Sell_crypto, 019_Buying_a_crypto, 022_Converting_tokens
> **Screenshots Analyzed**: 16 (086-111, 120-123)

---

## 1. Information Architecture

```
Trade Entry (from Buy/Sell button or Trade tab)
├── Order Form
│   ├── Buy/Sell Toggle
│   ├── Order Type Selector (Limit/Market/Stop-Limit)
│   ├── Price Input (for Limit/Stop)
│   ├── Amount Input (with unit toggle)
│   ├── Quick Percentage Buttons (25%/50%/75%/100%)
│   ├── TP/SL Settings (expandable)
│   └── Order Summary
├── Order Confirmation
│   ├── Order Details Review
│   ├── TP/SL Configuration
│   ├── Risk Disclosure
│   └── Confirm / Cancel
├── Order Result
│   ├── Success State
│   └── Error State
└── Convert (Simple Trade)
    ├── From/To Token Selector
    ├── Amount Input
    └── Rate Preview
```

---

## 2. Screen-by-Screen Analysis

### Screen 086-089: Sell Crypto (Light Mode)

**Purpose**: Limit/Market sell order placement with TP/SL support

**Layout Structure**:
- **Nav bar**: "USDT/USDC" dropdown + "+0.01%" change badge + settings icon + more (three dots)
- **Order book sidebar**: Left third of screen showing compressed order book (asks red, bids green)
- **Order form**: Right two-thirds
  - Buy/Sell toggle tabs at top
  - Order type tabs: "Limit | Market | Stop | TP/SL" (OKX has advanced types)
  - Available balance display: "Avbl 302.62 USDC"
  - Price input: text field with +/- stepper buttons, "USDC" unit label
  - Amount input: text field with unit toggle
  - Slider: Visual percentage slider (0-100%)
  - "Sell USDT" full-width button (red for sell)
  - Open orders section below

### Screen 088: Order Confirmation Modal

**Purpose**: Pre-trade review with TP/SL configuration

**Layout Structure**:
- **Modal overlay** (covers ~80% screen from bottom):
  - Header: "Order confirmation" + Close (X) button
  - Pair: "Sell USDT/USDC" (Sell in red text)
  - Order details table:
    - Order price: "0.9996 USDC"
    - Amount: "1.0004 USDT"
    - Type: "Limit"
  - **TP/SL Section** (expandable with chevron):
    - Take profit checkbox + trigger price input + execution type dropdown
    - Stop loss checkbox + trigger price input + execution type dropdown
  - "Don't show again" checkbox
  - "Confirm" full-width black button

**Component Inventory**:

| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Buy/Sell Toggle | Segmented Control | Top of form | Buy (green bg) / Sell (red bg) | Full width, 2 segments |
| Order Type Tabs | Text Tabs | Below toggle | Limit/Market/Stop/TP-SL | Underline active |
| Price Input | Numeric Input | Form body | Empty / Focused / Filled | +/- stepper buttons on sides |
| Amount Input | Numeric Input | Below price | Empty / Focused / Filled | Unit toggle (BTC/USDT) |
| Percentage Slider | Slider | Below amount | 0% to 100% | Tick marks at 25/50/75/100 |
| Available Balance | Text | Above inputs | Shows available | "Avbl 302.62 USDC" format |
| Place Order Button | CTA | Bottom | Buy (green) / Sell (red) / Disabled (gray) | Full width |
| Confirmation Modal | Bottom Sheet | Overlay | Open / Closed | ~80% height |
| TP/SL Accordion | Expandable Section | In confirmation | Collapsed / Expanded | Chevron toggle |
| Stepper (+/-) | Icon Button Pair | Price input sides | Default / Pressed / Disabled | Adjusts price by tick size |

### Screen 103-111: Buying a Crypto

**Purpose**: Buy order flow from amount entry to confirmation

**Layout**: Same as sell but with green "Buy" styling and different field ordering

**Key Observations**:
- Quick buy mode: Large amount input with currency dropdown (USDC/USDT)
- Amount in fiat mode: Type how much USD worth to buy
- Confirmation shows estimated quantity + fees
- Success screen: Animated checkmark + order details + "View Order" CTA

---

## 3. Reusable Component Library

| Component | Description | Used In | Props/Variants | ZR Applicability |
|-----------|-------------|---------|----------------|------------------|
| Buy/Sell Toggle | Green/Red segmented control | Trade form | `{side: 'buy'|'sell', onChange}` | Direct use + add cooling-off trigger |
| Order Type Selector | Tabs for Limit/Market/Stop | Trade form | `{types[], active, onSelect}` | Modify: Limit/Market/Stop-Limit for ZR |
| Stepper Input | Numeric input with +/- buttons | Price/amount | `{value, step, min, max, unit, onChange}` | Direct use |
| Percentage Selector | Quick % buttons or slider | Amount section | `{percents: [25,50,75,100], active, onSelect}` | Direct use + add ZR risk color |
| Order Confirmation | Bottom sheet with order review | Trade flow | `{orderDetails, onConfirm, onCancel}` | Modify: Add SFC risk disclosure + exchange badge |
| TP/SL Accordion | Expandable take-profit/stop-loss | Confirmation | `{tpEnabled, slEnabled, values, onChange}` | Skip for ZR v1 (advanced feature) |
| Order Result | Success/Error state | Post-trade | `{status, orderDetails, onViewOrder}` | Direct use + add ZR calm feedback |

---

## 4. Key Interaction Patterns

### 4.1 Order Flow (OKX: 3 steps)
1. Fill order form (price, amount, type)
2. Tap "Buy/Sell" -> Confirmation modal appears
3. Review + Tap "Confirm" -> Order submitted

### 4.2 Price Input Efficiency
- Type price manually in input field
- Use +/- stepper to adjust by tick size
- Tap price in order book sidebar -> Auto-fill price
- "Market" type -> Price field disabled, shows "Market Price"

### 4.3 Amount Input Methods
- Direct amount input (in base currency, e.g., "0.5 BTC")
- Unit toggle to switch to quote currency (e.g., "$33,617 USDT")
- Percentage slider/buttons: 25%, 50%, 75%, 100% of available balance
- "Max" shortcut -> 100% of available

---

## 5. ZR Adaptation Recommendations

### 5.1 Direct Adoption
- Buy/Sell color coding (green/red) and toggle pattern
- Stepper input with +/- for price
- Percentage quick buttons for amount
- 3-step order flow (form -> confirm -> result)

### 5.2 Modifications
- **Add Cooling-Off Period**: For orders > 20% of portfolio, show 30s countdown modal before allowing confirmation
- **Add Exchange Badge**: Show "Executed on HashKey" in confirmation modal
- **Add SFC Risk Disclosure**: Mandatory text in confirmation: "Virtual assets are highly volatile..."
- **Simplify Order Types**: Limit + Market + Stop-Limit only (no TP/SL accordion in v1)
- **Remove sidebar order book**: ZR uses full-width order form (simpler for mobile)

### 5.3 ZR Antifragile Elements
1. **Cooling-off period (30s)**: Large order > 20% of portfolio triggers mandatory wait
2. **Frequency alert**: If daily trades > 3, show gentle "You've been active today" notice
3. **Loss-averaging warning**: If buying asset already down > 10%, show warning
4. **Calm confirmation UI**: Green checkmark with slow, deliberate animation (not celebratory)

---

## 7. v0 Generation Hints

### Trade Page Layout
```
┌──────────────────────────────────────┐
│ Status Bar                           │
├──────────────────────────────────────┤
│ [<] BTC/USDT  [HashKey]    [Chart]  │ Nav with exchange badge
├──────────────────────────────────────┤
│ [    Buy    ] [    Sell    ]         │ Buy/Sell toggle (green/red)
├──────────────────────────────────────┤
│ [Limit ▾]  [Market]  [Stop-Limit]   │ Order type selector
├──────────────────────────────────────┤
│ Price                                │
│ [-] [  67,234.50  USDT  ] [+]      │ Price stepper input
├──────────────────────────────────────┤
│ Amount                               │
│ [  0.5000    BTC ▾ ]                │ Amount input + unit toggle
├──────────────────────────────────────┤
│ [25%] [50%] [75%] [100%]           │ Quick percentage
├──────────────────────────────────────┤
│ Avbl: 15,000.00 USDT               │
│ Estimated: ≈ 0.2232 BTC            │
│ Fee: ≈ 10.09 USDT (0.1%)           │
│ Exchange: HashKey                    │
├──────────────────────────────────────┤
│ ⚠ Virtual assets involve risk        │ SFC disclosure
├──────────────────────────────────────┤
│ [      Buy BTC      ]               │ Full-width CTA (green)
└──────────────────────────────────────┘
```

---

*Generated by ZR Competitive Design Analysis Skill v1.0*
