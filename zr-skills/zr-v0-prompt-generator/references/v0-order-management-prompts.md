# v0 Prompt Guide: Order Management & History Module

> Source: OKX Flows 020, 035-036 | Extracted from full OKX analysis
> Pixel Data: design-spec-02-trading.md, design-spec-03-assets-deposit-withdraw.md

## OKX Extracted Design Tokens (Orders/History)
| Token | Value | Usage |
|-------|-------|-------|
| order-card-height | 88px | Order list item |
| order-border-buy | 3px left, #22C55E | Buy order indicator |
| order-border-sell | 3px left, #EF4444 | Sell order indicator |
| status-open | #2563EB | Open order badge |
| status-partial | #F59E0B (amber) | Partially filled badge |
| status-pending | #999999 | Pending badge |
| status-completed | #10B981 (green) | Completed badge |
| status-failed | #EF4444 | Failed badge |
| tx-row-height | 72px | Transaction history row |
| badge-radius | 12px | Status badge pill |
| filter-tab-height | 36px | Tab bar for filters |
| date-picker | 28px height | Status filter pills |

## Key Screens to Generate

### Screen 1: Open Orders
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Orders" title center
2. **Tab bar** (36px): `[Open] [Filled] [Cancelled] [All]`
3. **Filter row** (36px): Pair selector dropdown + Exchange filter (ZR-unique) + Date range
4. **Order list** (scrollable):
   - Each order card (88px):
     ```
     ┌─────────────────────────────────────┐
     │ Buy BTC/USDT         Limit          │
     │ Price: $67,234.50                   │
     │ Amount: 0.15 BTC    Filled: 0%     │
     │ [HashKey]  Mar 4 14:30   [Cancel]   │
     └─────────────────────────────────────┘
     ```
   - Color coding: Buy orders have green left border, Sell orders have red left border
   - Status badge: "Open" (blue), "Partially Filled" (amber), "Pending" (gray)
5. **Empty state**: Illustration + "No open orders" + "Start Trading" button

**OKX Pattern**: Filter tabs (All crypto/Date/Status), order rows with pair, type, price, amount, fill percentage, cancel button. ZR adds exchange badge per order.

### Screen 2: Order Detail
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Order Detail" title
2. **Order summary card** (160px):
   ```
   ┌────────────────────────────────────┐
   │ Buy BTC/USDT              [Open]   │
   │ ─────────────────────────────────  │
   │ Order Type:    Limit               │
   │ Price:         $67,234.50          │
   │ Amount:        0.15 BTC            │
   │ Filled:        0.05 / 0.15 BTC    │
   │ Fill %:        33.3%              │
   │ Total:         $10,085.18          │
   │ Fee:           $10.09 (0.1%)       │
   │ Exchange:      HashKey             │
   │ Created:       Mar 4, 14:30:25     │
   │ ─────────────────────────────────  │
   │ [Cancel Order]                     │
   └────────────────────────────────────┘
   ```
3. **Fill history** (if partially filled): List of individual fill events with timestamp, price, amount
4. **Related orders**: TP/SL linked orders if any

### Screen 3: Trade History
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Trade History" title
2. **Filter tabs** (36px): `[All] [Spot] [Margin] [Futures]` — ZR adds `[Stocks] [Forex]`
3. **Date range picker**: Calendar icon + "Last 7 days" dropdown
4. **Export button**: Top-right, "Export CSV" (for tax reporting — ZR compliance feature)
5. **History list** (scrollable):
   - Each row (64px): Pair icon | Side (Buy green/Sell red) + Pair | Price | Amount | Fee | Date
   - Tap row → order detail page
6. **Summary footer** (optional): Total trades, total volume, total fees for selected period

**OKX Pattern**: Filter tabs, date range picker, transaction rows with type/amount/timestamp. Green for deposits/buys, red for withdrawals/sells. Empty state illustration when no records.

### Screen 4: Deposit/Withdrawal History
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Transaction History" title
2. **Filter tabs** (36px): `[All] [Deposits] [Withdrawals] [Transfers]`
3. **Status filter pills** (28px): `Completed | Pending | Failed`
4. **Transaction list**:
   - Each row (72px):
     ```
     ┌─────────────────────────────────────┐
     │ ↓ Deposit BTC              +0.5 BTC │
     │   Bitcoin Network · HashKey          │
     │   Mar 3, 10:15    [Completed ✓]     │
     └─────────────────────────────────────┘
     ```
   - Status badges: Completed (green), Pending (amber with confirmations "3/6"), Failed (red)
5. **Transaction detail** (on tap): Full details with tx hash (tappable → block explorer), confirmations count, timestamps (created/confirmed), network fee

## Mock Data

```javascript
const ordersMock = {
  openOrders: [
    { id: "ORD001", pair: "BTC/USDT", side: "buy", type: "limit", price: 67234.50, amount: 0.15, filled: 0, exchange: "HashKey", createdAt: "2026-03-04T14:30:25Z" },
    { id: "ORD002", pair: "ETH/USDT", side: "sell", type: "limit", price: 3500.00, amount: 5.0, filled: 2.5, exchange: "HashKey", createdAt: "2026-03-04T12:15:00Z" },
  ],
  tradeHistory: [
    { pair: "BTC/USDT", side: "buy", price: 66890.00, amount: 0.1, fee: 6.69, exchange: "HashKey", executedAt: "2026-03-03T09:45:00Z" },
    { pair: "SOL/USDT", side: "sell", price: 180.50, amount: 50, fee: 9.03, exchange: "Bullish", executedAt: "2026-03-02T16:20:00Z" },
  ],
  transactions: [
    { type: "deposit", asset: "BTC", amount: 0.5, network: "Bitcoin", exchange: "HashKey", status: "completed", confirmations: "6/6", txHash: "abc123...def789", createdAt: "2026-03-03T10:15:00Z" },
    { type: "withdrawal", asset: "USDT", amount: 5000, network: "Tron (TRC-20)", exchange: "HashKey", status: "pending", confirmations: "3/6", txHash: "xyz456...uvw012", createdAt: "2026-03-04T08:00:00Z" },
  ],
};
```

## ZR Differentiation
- Exchange badge on every order (multi-exchange visibility)
- Multi-asset class trade history tabs (Spot/Stocks/Forex, not just crypto)
- CSV export for tax reporting (HK tax compliance)
- Cross-exchange order aggregation view
- Trade analytics summary (win rate, avg hold time) per antifragile "cognitive improvement verification"
