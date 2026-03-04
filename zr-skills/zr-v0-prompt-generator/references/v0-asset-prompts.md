# v0 Prompt Guide: Assets, Deposit & Withdraw Module

## Key Screens to Generate

### Screen 1: Assets Overview (Portfolio)
The "dashboard" screen for user's holdings.

**Layout zones (top to bottom)**:
1. **Nav bar** (44px): "Assets" title, eye icon (hide balance toggle), settings gear
2. **Total value card** (120px):
   - "Total Assets" label (13px, gray)
   - Total value in HKD (28px, bold): "HK$ 1,234,567.89"
   - Currency toggle: HKD / USD / BTC
   - 24h P&L: "+HK$ 12,345 (+1.02%)" green
   - Quick actions row: [Deposit] [Withdraw] [Transfer] [Convert] — icon + text buttons
3. **Asset class tabs** (36px): `[All] [Crypto] [Stocks] [Forex] [Commodities]` — ZR unique
4. **Asset list** (remaining):
   - Each row: Icon | Name + Symbol | Balance | Value + P&L%
   - Sorted by value descending by default
   - Group by exchange option

**ZR-Unique: Multi-Exchange Summary**
```
┌────────────────────────────────────┐
│ Your Exchanges                     │
│ ┌──────────┐ ┌──────────┐        │
│ │ HashKey   │ │ Bullish  │        │
│ │ $45,678  │ │ $12,345  │        │
│ │ ●Active  │ │ ○Inactive│        │
│ └──────────┘ └──────────┘        │
└────────────────────────────────────┘
```

### Screen 2: Deposit Crypto
Safety-critical screen — must prevent errors.

**Layout zones**:
1. **Nav bar**: Back + "Deposit BTC"
2. **Coin selector** (if not pre-selected): Search + popular coins grid
3. **Network selector** (80px):
   - Radio button list of networks
   - Each option: Network name | Fee | Estimated arrival time
   - Recommended badge on cheapest/fastest
4. **Address display** (200px):
   - QR code (center, 160x160px)
   - Address text (mono font, selectable, with copy button)
   - "Share Address" button
5. **Important notices** (varies):
   - Minimum deposit amount
   - Required confirmations
   - Memo/tag requirement (if applicable, RED warning)
   - "Depositing to wrong network = permanent loss" warning
6. **Deposit history button**: Links to deposit history

### Screen 3: Withdraw Crypto
Highest-security screen. Multiple validation layers.

**Layout zones**:
1. **Nav bar**: Back + "Withdraw BTC"
2. **Address input** (80px):
   - Text input with scan QR button + address book button
   - Real-time format validation indicator
3. **Network selector** (80px): Same as deposit but shows withdrawal fee prominently
4. **Amount input** (100px):
   - Input field with "Max" button
   - Available balance display
   - Fee preview: "Fee: 0.0001 BTC | You receive: 0.0999 BTC"
5. **Memo/Tag input** (56px): Only shown if required by network
6. **Summary card** (varies):
   ```
   ┌──────────────────────────────┐
   │ Withdrawal Summary           │
   │ To:       bc1q...xyz         │
   │ Network:  Bitcoin            │
   │ Amount:   0.1000 BTC         │
   │ Fee:      0.0001 BTC         │
   │ Receive:  0.0999 BTC         │
   │ Exchange: HashKey             │
   └──────────────────────────────┘
   ```
7. **Withdraw button** (52px): "Withdraw 0.0999 BTC"
8. **Security verification** (triggered after tap):
   - Step 1: Email OTP
   - Step 2: Phone SMS OTP (or Authenticator)
   - Step 3: Confirm

### Screen 4: Transaction History
**Layout**:
- Filter tabs: `[All] [Deposits] [Withdrawals] [Transfers]`
- Date range picker
- Each row: Icon | Type + Coin | Amount | Status badge (Pending/Completed/Failed) | Date
- Tap row → detail page with tx hash, confirmations, timestamps

## Mock Data

```javascript
const portfolioMock = {
  totalValue: { hkd: 1234567.89, usd: 158456.78, btc: 2.357 },
  dailyPnl: { amount: 12345, percent: 1.02 },
  assets: [
    { coin: "BTC", name: "Bitcoin", balance: 1.5, value: 100851.75, change: 2.34, exchange: "HashKey" },
    { coin: "ETH", name: "Ethereum", balance: 12.5, value: 43209.75, change: -1.12, exchange: "HashKey" },
    { coin: "USDT", name: "Tether", balance: 15000, value: 15000, change: 0, exchange: "Bullish" },
  ]
};
```
