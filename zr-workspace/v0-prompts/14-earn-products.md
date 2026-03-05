# Earn / Structured Products — ZR Securities Trading App

## Context
The Earn page provides access to SFC-approved yield products (DD-012) including fixed-term deposits, structured products, and recurring investment plans. Unlike Binance's extensive DeFi/CeFi Earn catalog (180+ products), ZR offers a curated, compliance-first selection with mandatory risk tiering, SFC approval badges, and the Recurring Plan Simulator (DA-016) that helps users understand dollar-cost averaging through historical backtesting.

Inspired by OKX Grow Hub (design-spec-06), Binance Earn (staking, savings, DCA), and ZR's Antifragile principle of "sober over pleasurable".

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Earn accent: #00BFA5 (teal, for yield/APY highlights)
- Risk Low: #34A853 (green) / Risk Medium: #FBBC04 (amber) / Risk High: #EA4335 (red)
- SFC approved: #1EC989 (green badge)

**Typography:**
- Inter: headings, labels, body
- JetBrains Mono: APY, numbers, percentages

**Spacing:** 8px grid

## Page Layout

```
[Header - 56px]
  └─ Back arrow | "Earn" | Filter icon

[Total Earning Banner - 80px]
  └─ "Total Earning" HK$ value | Yesterday's interest

[Product Type Tabs - 44px]
  └─ [All] [Fixed] [Flexible] [Structured] [Recurring]

[SFC Compliance Notice - 40px]
  └─ 🏛️ "All products SFC-approved. Capital at risk."

[Product List - scrollable]
  └─ Product cards

[Bottom Tab Bar - 83px]
```

## Components

### Total Earning Banner (80px)
- **Background:** Gradient #E0F7F0 → #FFFFFF (teal to white)
- **Content:**
  - "Total Earnings" (Inter 12px, #5F6368)
  - Value: "HK$4,567.89" (JetBrains Mono 24px bold) + eye icon toggle
  - "Yesterday: +HK$12.34" (JetBrains Mono 12px, #00BFA5)
- **Tap:** Navigate to Earn History page

### Product Type Tabs (44px)
- **Style:** Horizontal scroll, pill tabs
- **Active:** #1A73E8 fill, white text
- **Inactive:** transparent, #757575 text
- **Tabs:**
  - **All:** All products
  - **Fixed:** Fixed-term deposits (7d, 30d, 90d, 180d)
  - **Flexible:** On-demand withdrawal
  - **Structured:** Principal-protected / dual currency
  - **Recurring:** Dollar-cost averaging plans (DA-016)

### SFC Compliance Notice (40px)
- **Background:** #FFF9E6 (light amber)
- **Icon:** 🏛️ (16px)
- **Text:** "All products are SFC-approved. Your capital is at risk." (Inter 11px, #5F6368)
- **Chevron:** "Learn more →" (Inter 11px, #1A73E8)

### Product Card — Fixed/Flexible (120px)
- **Background:** White, 12px radius, 1px border #E8E8E8
- **Layout:**
  - **Row 1:**
    - Asset icon (32px) + Asset name (Inter 14px bold) + "USDT" / "BTC" / "ETH"
    - SFC badge: "SFC ✓" (green #1EC989 pill, 10px)
    - Exchange badge (which exchange provides this product)
  - **Row 2:**
    - APY: "5.20%" (JetBrains Mono 28px bold, #00BFA5 teal)
    - "Est. APY" label (Inter 10px, #9AA0A6)
  - **Row 3:**
    - Term: "30 Days" pill (Inter 11px, border)
    - Min: "100 USDT" (Inter 11px, #757575)
    - Risk tier: colored dot + "Low Risk" / "Medium Risk" / "High Risk"
  - **Row 4 (DA-014 inline buttons):**
    - [Subscribe] pill button (28px, #1A73E8 fill, white text)
    - [Details] pill button (28px, border, #1A73E8 text)
- **Risk tier badge colors:**
  - 🟢 Low Risk: #E8F5E9 bg, #34A853 text
  - 🟡 Medium Risk: #FFF8E1 bg, #FBBC04 text
  - 🔴 High Risk: #FFEBEE bg, #EA4335 text

### Product Card — Structured (140px)
- Same base layout as Fixed/Flexible, plus:
- **Row 2 extra:** "Principal Protected" badge (blue #E8EEFF pill) or "Enhanced Yield" badge (amber)
- **Row 3 extra:** "Max Return: 12.5% / Min Return: 2.0%" (JetBrains Mono 11px)
- **Underlying:** "BTC/USDT Dual Currency" (Inter 11px, #757575)

### Product Card — Recurring Plan (140px, DA-016)
- **Layout:**
  - **Row 1:** Asset icon + "BTC Recurring Plan" + SFC badge
  - **Row 2:** "Historical Avg. Return" (Inter 10px) + "8.2% annualized" (JetBrains Mono 20px, #00BFA5)
  - **Row 3:** Frequency options: [Daily] [Weekly] [Monthly] pills
  - **Row 4:** [Start Plan] button + [Simulate →] text link (#1A73E8)
- **Simulate link:** Opens Recurring Plan Simulator (see below)

### Recurring Plan Simulator (DA-016, Full Page)
- **Header:** "DCA Simulator — {Asset}"
- **Input section (120px):**
  - Amount per period: Input (56px) + currency selector
  - Frequency: [Daily] [Weekly] [Bi-weekly] [Monthly] segmented
  - Start date: Date picker (default: 1 year ago)
  - End date: Today (fixed)
- **Results section:**
  - **Backtested Performance Chart (240px):**
    - Line chart: Portfolio value over time (blue line)
    - Benchmark: Lump sum at start (dashed gray line)
    - X-axis: Date, Y-axis: HKD value
    - Green fill area between DCA line and cost basis
  - **Summary cards (2 columns):**
    - Total invested: HK$XX,XXX
    - Current value: HK$XX,XXX (green if profit)
    - Return: +XX.X%
    - Avg. cost: $XX,XXX per BTC
    - Max drawdown: -XX.X%
    - vs. Lump Sum: "+XX% better" or "-XX% worse"
- **Disclaimer (red border):** "Past performance does not indicate future results. This is a historical simulation only."
- **CTA:** [Start This Plan] (52px, #1A73E8)

### Product Detail Page (scrollable)
- **Header:** Back arrow, product name, share icon
- **APY hero:** Large APY display (JetBrains Mono 36px, #00BFA5)
- **Key info grid (2×3):**
  - Term | Min Amount | Max Amount
  - Risk Tier | Exchange | SFC Status
- **Subscribe section:**
  - Amount input (56px) + "Max" button
  - Quick percentage: [25%] [50%] [75%] [100%] of available balance
  - Terms checkbox: "I understand the risks and have read the product terms"
  - [Subscribe] button (52px, #1A73E8, disabled until terms accepted)
- **Expected returns calculator:**
  - Input amount → show "Est. return after {term}: HK$X,XXX"
- **Risk disclosure section (expandable):**
  - SFC risk warning text
  - Product-specific risks
  - "This product is NOT a bank deposit and is NOT protected by HKDPB"
- **Similar products:** Horizontal scroll of 3 similar product cards

## Mock Data

```typescript
interface EarnProduct {
  id: string;
  asset: string;
  assetIcon: string;
  type: 'fixed' | 'flexible' | 'structured' | 'recurring';
  apy: number;
  term: string; // "30 Days", "Flexible", etc.
  minAmount: number;
  maxAmount: number;
  riskTier: 'low' | 'medium' | 'high';
  exchange: string;
  sfcApproved: boolean;
  principalProtected: boolean;
  currency: string;
}

const mockProducts: EarnProduct[] = [
  { id: 'e1', asset: 'USDT', type: 'fixed', apy: 5.2, term: '30 Days', minAmount: 100, maxAmount: 500000, riskTier: 'low', exchange: 'HashKey', sfcApproved: true, principalProtected: false, currency: 'USDT' },
  { id: 'e2', asset: 'USDT', type: 'flexible', apy: 2.8, term: 'Flexible', minAmount: 10, maxAmount: 1000000, riskTier: 'low', exchange: 'Bullish', sfcApproved: true, principalProtected: false, currency: 'USDT' },
  { id: 'e3', asset: 'BTC', type: 'structured', apy: 12.5, term: '14 Days', minAmount: 0.01, maxAmount: 10, riskTier: 'medium', exchange: 'HashKey', sfcApproved: true, principalProtected: true, currency: 'BTC' },
  { id: 'e4', asset: 'ETH', type: 'fixed', apy: 4.5, term: '90 Days', minAmount: 0.1, maxAmount: 100, riskTier: 'low', exchange: 'OSL', sfcApproved: true, principalProtected: false, currency: 'ETH' },
  { id: 'e5', asset: 'BTC', type: 'recurring', apy: 0, term: 'Ongoing', minAmount: 50, maxAmount: 50000, riskTier: 'medium', exchange: 'HashKey', sfcApproved: true, principalProtected: false, currency: 'HKD' },
];

interface DCASimulation {
  totalInvested: number;
  currentValue: number;
  returnPercent: number;
  avgCostBasis: number;
  maxDrawdown: number;
  vsLumpSum: number; // positive = DCA better
  chartData: Array<{ date: string; portfolioValue: number; costBasis: number; lumpSumValue: number }>;
}
```

## Interaction States

### Loading
- Skeleton cards with teal shimmer

### No Products Available
- "No products available for this category" + "Try another tab"

### Subscription Success
- Green checkmark animation
- "Successfully subscribed to {product}"
- "View in My Earn Portfolio →"

### Risk Warning (before first subscription)
- One-time SFC risk acknowledgment modal
- Checkbox: "I understand virtual assets carry high risk"
- Must accept before any subscription

## Implementation Notes
- APY: Display with 2 decimal places, use teal #00BFA5 for emphasis
- Risk tier: Color-code consistently across all products
- DCA Simulator: Use historical price data (mock with realistic BTC data)
- Chart: Use recharts LineChart with area fill
- SFC badge: Always visible on every product card
- Subscribe: Disable button until terms accepted + amount valid

## Competitive Reference
- **OKX Grow:** Multi-product Earn hub with DeFi/CeFi options — many products, less curation
- **Binance Earn:** 180+ products, complex categorization, promotional APY boost badges
- **ZR Differentiator:**
  1. SFC-approved badge on every product (DD-012) — compliance visible
  2. Risk tier color coding — instant risk assessment
  3. Recurring Plan Simulator (DA-016) — historical backtesting unique to ZR
  4. "Not a bank deposit" disclaimer — Transparent Trust Protocol
  5. Curated, not overwhelming — "Sober over pleasurable" principle

## v0 Screenshot References
Upload these screenshots alongside this prompt for visual reference:
- OKX: `OKX_iOS/136_Grow/` — Earn hub layout reference
- Binance: `Binance_iOS/120_Earn/` — Earn product cards reference
- Binance: `Binance_iOS/135_Recurring_buy/` — DCA/Recurring plan reference
