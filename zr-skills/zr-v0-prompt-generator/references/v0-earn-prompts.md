# v0 Prompt Guide: Earn & Grow Module

> Source: OKX Flows 026-031 | Extracted from full OKX analysis

## Key Screens to Generate

### Screen 1: Earn Hub
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Earn" title center, search icon right
2. **Portfolio summary card** (100px):
   - "Yesterday's Profit" (13px gray) → "+HK$ 234.56" (20px green)
   - "Total Earned" (13px gray) → "HK$ 12,345.67" (20px bold)
   - "Auto-earn" toggle switch with description
3. **Quick access grid** (80px): 4 icon buttons — Simple Earn / Structured / On-chain / Staking
4. **Product tabs** (36px): `[All] [Flexible] [Fixed] [Structured]`
5. **Product list** (scrollable):
   - Each product card (80px):
     ```
     ┌─────────────────────────────────────┐
     │ [Icon] USDT Simple Earn    APR 5.2% │
     │         Flexible · Low Risk         │
     │         Min: 1 USDT  [Subscribe]    │
     └─────────────────────────────────────┘
     ```

**OKX Pattern**: Three tabs (Earn/Loan/Jumpstart), search bar, quick-access icon grid, APR displayed prominently. Product cards show asset icon, APR (large, right-aligned), "Bonus" badge in lime, risk level, duration selectors.

### Screen 2: Product Detail (Simple Earn)
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "USDT Simple Earn" title
2. **APR display** (80px): "5.20%" large (28px bold green), "Estimated Annual Percentage Rate" caption
3. **Product info card**:
   - Type: Flexible / Fixed term selector buttons (3d/7d/14d/30d/90d)
   - Risk level: "Low Risk" badge (green outline)
   - Min subscription: "1 USDT"
   - Interest accrual: "T+1"
   - Redemption: "Instant" or "T+1" based on type
4. **Amount input** (56px): Input field + "Max" link (teal) + available balance display
5. **Estimated earnings card**:
   ```
   ┌────────────────────────────────────┐
   │ Estimated Daily Earnings           │
   │ ≈ 0.14 USDT                       │
   │ Based on current APR               │
   └────────────────────────────────────┘
   ```
6. **Subscribe button**: Brand blue, full-width, 52px, "Subscribe"
7. **Disclaimer**: "Past performance does not guarantee future results. Virtual asset investments carry risk." (11px gray)

**OKX Pattern**: APR percentage large and right-aligned, "Bonus" badge in lime for promoted products, duration selector buttons, "Learn more" inline education. ZR adds SFC-required risk disclaimer.

### Screen 3: Structured Products (P2 Priority)
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Structured Products" title
2. **Product type tabs** (36px): `[Dual Investment] [Snowball] [Shark Fin]`
3. **Product cards** (120px each):
   ```
   ┌────────────────────────────────────┐
   │ BTC Dual Investment                │
   │ ┌──────────────────────────────┐  │
   │ │ APR Range: 3.00% ~ 13.00%   │  │
   │ └──────────────────────────────┘  │
   │ Settlement: 7 days                │
   │ Target Price: $68,000             │
   │ Subscription ends in: 02:34:56   │
   │ [Subscribe]                       │
   └────────────────────────────────────┘
   ```
4. **Education section**: "What is Dual Investment?" expandable card with illustration

**OKX Pattern**: Product type tabs, hero illustrations, countdown timers for subscription windows, APR ranges, "Learn more" inline education. Structured products need SFC approval for ZR.

### Screen 4: My Earnings Portfolio
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "My Earnings" title
2. **Summary card** (100px): Total subscribed value + daily earnings + unrealized gains
3. **Active positions list**:
   - Each row: Asset icon + product name | Subscribed amount | Current APR | Earnings to date
4. **History tab**: Past redemptions with final earnings

## Mock Data

```javascript
const earnMock = {
  summary: {
    yesterdayProfit: 234.56,
    totalEarned: 12345.67,
    totalSubscribed: 50000,
    currency: "HKD",
  },
  products: [
    { asset: "USDT", type: "Simple Earn", term: "Flexible", apr: 5.2, risk: "Low", minAmount: 1, bonus: false },
    { asset: "BTC", type: "Simple Earn", term: "Fixed 30d", apr: 3.8, risk: "Low", minAmount: 0.001, bonus: true },
    { asset: "ETH", type: "Simple Earn", term: "Flexible", apr: 4.1, risk: "Low", minAmount: 0.01, bonus: false },
    { asset: "USDT", type: "Dual Investment", term: "7d", aprRange: [3.0, 13.0], risk: "Medium", targetPrice: 68000 },
  ],
  activePositions: [
    { asset: "USDT", product: "Simple Earn Flexible", amount: 15000, apr: 5.2, earned: 123.45, startDate: "2026-02-15" },
    { asset: "BTC", product: "Simple Earn Fixed 30d", amount: 0.5, apr: 3.8, earned: 0.00052, startDate: "2026-02-20" },
  ],
};
```

## ZR Differentiation
- SFC-mandated risk disclaimers on every product page
- Structured products may require additional regulatory approval badges
- Multi-asset earn (not just crypto — potential for stock lending, forex carry in future phases)
- "Cognitive Companion" educational content per antifragile principles: explain risks before showing APR
- Auto-earn recommendations based on user's risk profile (linked to KYC questionnaire)
