# Convert & OTC — ZR Securities Trading App

## Context
The Convert & OTC page provides two fast-execution trading methods: instant token conversion (swap) and institutional OTC (over-the-counter) RFQ (Request for Quote). Unlike Binance's Convert which is a simple swap, or their P2P which is a C2C marketplace, ZR's approach replaces P2P with institutional OTC (DD-011) for compliance safety — avoiding the frozen card risks common in C2C trading.

Inspired by OKX's Convert interface (design-spec-07), Binance's Convert with rate locking, and ZR's OTC institutional model (DD-011).

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Convert accent: #7C4DFF (purple)
- Success: #34A853 / Danger: #EA4335

**Typography:**
- Inter: headings, labels
- JetBrains Mono: amounts, rates, prices

**Spacing:** 8px grid

## Page Layout

```
[Header - 56px]
  └─ Back arrow | "Convert" | Mode toggle

[Mode Toggle - 44px]
  └─ [Instant Convert] [OTC Request]

[Mode Content - fluid]
  └─ Content varies by mode (see below)

[Bottom Tab Bar - 83px]
```

## Mode 1: Instant Convert (Token Swap)

### From Section (120px)
- **Label:** "From" (Inter 12px, #757575)
- **Asset selector:** (56px, tap → asset picker bottom sheet)
  - Token icon (28px) + Symbol (Inter 16px bold) + chevron ▼
- **Amount input:** (56px, JetBrains Mono 24px)
  - Right: "Max" pill button
  - Below: Available balance (JetBrains Mono 12px, #9AA0A6) + "≈ HK$XX,XXX" (12px)

### Swap Direction Button (center, 44px)
- Circle: 44px, white, 1px border #E8E8E8, shadow
- Icon: ⇅ arrows (20px, #1A73E8)
- **Tap:** Swap From and To assets with 300ms rotation animation

### To Section (120px)
- **Label:** "To" (Inter 12px, #757575)
- Same asset selector layout
- **Amount display:** (56px, JetBrains Mono 24px, #34A853 green)
  - Calculated automatically based on rate
  - Below: "≈ HK$XX,XXX" (12px)

### Exchange Rate Display (48px)
- **Layout:** Center-aligned
- **Content:**
  - "1 BTC = 67,234 USDT" (JetBrains Mono 13px)
  - Refresh icon (16px, animated spin on tap)
  - "Rate locks in 30s" countdown (Inter 10px, #FBBC04 amber)
- **Rate lock:** 30-second countdown, auto-refreshes at 0

### Multi-Exchange Best Rate (IO-003 lite, 56px)
- **Background:** #F8F9FA, 8px radius
- **Layout:** 4 mini columns
- **Per exchange:**
  - Logo (12px) + name (Inter 9px)
  - Rate (JetBrains Mono 10px)
  - "Best" badge on lowest/best rate (#34A853 pill)
- **Note:** Shows which exchange provides the best swap rate

### Fee Breakdown (48px)
- **Layout:** 2 rows
  - "Network Fee: 0.0001 BTC (≈ HK$52)" (Inter 12px, #757575)
  - "Slippage: < 0.1%" (Inter 12px, #757575)
- **Total received:** "You receive: 67,200 USDT" (Inter 13px bold, #34A853)

### Convert Button (52px)
- **Text:** "Convert" (Inter 16px bold, white)
- **Background:** #1A73E8 (brand blue), pill shape
- **Disabled states:**
  - No amount → gray
  - Insufficient balance → gray + "Insufficient BTC" text
  - Rate expired → amber + "Refresh rate"

### Confirmation Modal (320px)
- **Header:** "Confirm Conversion"
- **Summary:**
  - From: 1.5 BTC (HashKey)
  - To: 100,851 USDT
  - Rate: 1 BTC = 67,234 USDT
  - Fee: 0.0001 BTC
  - Exchange: HashKey (badge)
  - Rate valid for: 28s countdown
- **SFC Disclaimer:** "Virtual asset values may fluctuate significantly" (Inter 10px, #EA4335)
- **Buttons:** [Cancel] [Confirm Convert]

## Mode 2: OTC Request (DD-011)

### OTC Intro Card (80px, shown first time only)
- **Background:** #F3E8FF (light purple)
- **Content:**
  - "🏦 OTC Trading" (Inter 14px bold)
  - "For large orders (>HK$100,000). Get competitive quotes from institutional market makers."
  - "Avoid slippage on large trades."
- **Dismiss:** "Got it" button

### RFQ Form (variable)
- **Direction toggle (44px):** [Buy] [Sell] segmented (green/red)
- **Asset selector (56px):** Same as Convert — icon + symbol + chevron
- **Amount input (56px):**
  - Input: JetBrains Mono 24px
  - Unit toggle: [BTC] [HKD] — switch between crypto and fiat amount
  - Minimum: "Min: HK$100,000" (Inter 10px, #9AA0A6)
- **Settlement method (72px):**
  - Radio options:
    - "Bank Transfer (T+1)" — recommended badge
    - "Crypto Settlement (T+0)"
- **Request Quote button (52px):** "Request Quote" (#7C4DFF purple, pill)

### Quote Response Card (200px)
- **Background:** White, 12px radius, 2px border #7C4DFF
- **Status:** "Quote received ✓" (green)
- **Content:**
  - "Buy 2.0 BTC" (Inter 16px bold)
  - Price: "$67,180 per BTC" (JetBrains Mono 20px bold)
  - Total: "HK$1,048,008" (JetBrains Mono 16px)
  - vs Market: "0.08% below spot" (#34A853 green) or "0.12% above spot" (#EA4335)
  - Valid for: "59s" countdown (amber)
  - Market maker: "Institutional Desk" (Inter 11px, #757575)
  - No fee: "Zero commission" (Inter 11px, #34A853)
- **Buttons:**
  - [Decline] (48px, border, gray)
  - [Accept Quote] (48px, #7C4DFF purple fill, white text, countdown showing)

### OTC History
- **Section header:** "Recent OTC Trades" + "View All →"
- **Per row (64px):**
  - Direction: "Buy BTC" or "Sell ETH" (13px bold, green/red)
  - Amount: "2.0 BTC @ $67,180" (12px)
  - Total: "HK$1,048,008" (JetBrains Mono 12px)
  - Status: "Settled" green / "Pending" amber / "Cancelled" gray
  - Date: "Mar 4, 2026" (10px, #9AA0A6)

## Asset Picker Bottom Sheet
- **Height:** 60% screen
- **Search input (48px):** "Search coins..." auto-focus
- **Sections:**
  - "Popular" — BTC, ETH, USDT, USDC (grid, 4 items)
  - "All Assets" — Scrollable list
- **Per asset row (56px):**
  - Icon (32px) + Name + Symbol
  - Balance: "1.5 BTC" (JetBrains Mono 12px, #757575)
  - Exchange badge

## Mock Data

```typescript
interface ConvertState {
  fromAsset: string;
  toAsset: string;
  amount: number;
  rate: number;
  rateExpiresIn: number; // seconds
  fee: number;
  estimatedReceive: number;
  bestExchange: string;
  exchangeRates: Array<{
    exchange: string;
    rate: number;
    isBest: boolean;
  }>;
}

interface OTCQuote {
  id: string;
  direction: 'buy' | 'sell';
  asset: string;
  amount: number;
  pricePerUnit: number;
  totalHKD: number;
  vsSpotPercent: number; // negative = below spot (good for buy)
  validForSeconds: number;
  settlementMethod: 'bank_transfer' | 'crypto';
  marketMaker: string;
}

const mockConvert: ConvertState = {
  fromAsset: 'BTC',
  toAsset: 'USDT',
  amount: 1.5,
  rate: 67234,
  rateExpiresIn: 30,
  fee: 0.0001,
  estimatedReceive: 100851,
  bestExchange: 'HashKey',
  exchangeRates: [
    { exchange: 'HashKey', rate: 67234, isBest: true },
    { exchange: 'Bullish', rate: 67228, isBest: false },
    { exchange: 'OSL', rate: 67240, isBest: false },
    { exchange: 'VDX', rate: 67245, isBest: false },
  ],
};
```

## Interaction States

### Loading
- Rate refresh spinner

### Rate Expired
- "Rate expired. Tap to refresh." + amber warning

### Quote Pending (OTC)
- "Requesting quote..." + loading dots animation (3-5 seconds)

### Quote Expired (OTC)
- Card grays out, "Quote expired. Request new quote."

### Success
- Green checkmark + "Conversion complete!" / "OTC trade executed!"
- Transaction ID + "View in History"

## Implementation Notes
- Rate lock: 30s countdown with visual timer
- Auto-refresh rate at expiry
- OTC minimum: HK$100,000 (enforce in validation)
- Quote timeout: 60s (server-side)
- Swap animation: ⇅ button rotates 180° on tap
- Multi-exchange rates: Sort by best rate, highlight winner

## Competitive Reference
- **OKX Convert:** Simple swap interface with rate locking — clean, effective
- **Binance Convert:** Similar + recurring option — rate lock timer
- **Binance P2P:** C2C marketplace — ZR explicitly avoids this (frozen card risk, DD-011)
- **ZR Differentiator:**
  1. Multi-exchange best rate display (IO-003 lite) — unique to multi-exchange model
  2. OTC institutional RFQ (DD-011) — replaces risky P2P with institutional quotes
  3. SFC risk disclaimer in confirmation — compliance visible
  4. "vs Market" comparison on OTC quotes — Transparent Trust Protocol

## v0 Screenshot References
Upload these screenshots alongside this prompt for visual reference:
- OKX: `OKX_iOS/014_Market_page_(expanded)/` — convert/swap reference
- Binance: `Binance_iOS/108_Spot_(Trade)/` — convert tab reference
- Binance: `Binance_iOS/125_P2P/` — P2P layout reference (for OTC comparison, but ZR doesn't do P2P)
