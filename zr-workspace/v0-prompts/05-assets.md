# Assets/Portfolio Page — ZR Securities Trading App

## Context
The Assets page displays the user's portfolio across multiple exchanges and asset classes (crypto, stocks, forex, commodities). It's the primary dashboard showing total value, P&L, and a detailed breakdown of holdings. Users can quickly access deposit, withdraw, transfer, and convert functions.

## Design System
- **Brand Color**: #1A73E8 (blue)
- **Typographic Scale**:
  - 28px bold (total value display)
  - 13px gray (labels)
  - 14px regular (secondary text)
  - 12px gray (metadata)
- **Spacing**: 16px base unit
- **Iconography**: 36px × 36px (asset icons), 24px × 24px (action icons)
- **Border Radius**: 8px
- **Card Shadow**: 0 1px 3px rgba(0,0,0,0.12)

## Page Layout

### Header Zone (64px)
- Left: "Assets" heading (18px bold)
- Center: Flex space
- Right: Eye icon (24px, hide balance toggle) + settings gear (24px)
- Background: White, border-bottom 1px #E8E8E8

### Total Value Card (120px)
- Full width, 16px padding
- Background gradient light gray (#F5F5F5)
- Content:
  - Label: "Total Assets" (13px, #666666)
  - Value: "HK$ 1,234,567.89" (28px, bold, #000)
  - Currency toggle pills: [HKD] [USD] [BTC] (12px, 8px padding, active=brand blue bg + white text)
  - P&L row: "+HK$ 12,345 (+1.02%)" (14px, #22C55E green)
- Bottom border accent 2px #22C55E

### Quick Actions Row (60px)
- Horizontal scroll, 16px padding, 12px gaps
- 4 buttons: [Deposit] [Withdraw] [Transfer] [Convert]
- Each: 56px height, rounded 8px, icon 20px + label 12px, border 1px #DDD, background white, hover state brand blue
- Layout: flex, justify-center

### Multi-Exchange Summary (variable height)
- Heading: "Exchanges" (14px gray)
- Card per exchange (64px height, 16px padding):
  - Left: exchange logo/icon 40px
  - Center: exchange name (14px bold) + status badge (8px pill, "Active" green | "Maintenance" orange)
  - Right: total balance (14px bold)
- Grid: 2 columns on mobile, 3 on tablet
- 8px gap between cards

### Asset Class Tabs (48px)
- Horizontal pill tabs: [All] [Crypto] [Stocks] [Forex] [Commodities]
- 12px padding, 8px gap
- Active: brand blue background + white text
- Inactive: #F0F0F0 background, #666 text
- Smooth scroll on mobile

### Asset List
- Per row: 64px height, 16px padding, 8px gaps
- Structure:
  - Asset icon: 36px × 36px, rounded 4px
  - Name column: 40px min-width, name (14px bold) + secondary info (12px gray)
  - Balance column: 80px, balance (14px) + change % (12px green/red)
  - Value column: 100px, "HK$ X,XXX.XX" (14px bold)
  - Exchange badge: 8px pill, #E8E8E8 background, 10px text
  - Right: chevron 16px (tap for detail)
- Row divider: 1px #F0F0F0
- Hover state: background #FAFAFA

### Filter/Sort Controls (48px)
- Bottom of header:
  - Left: Dropdown "Hide < $10" (12px text, icon)
  - Right: Sort dropdown (default: "Value descending")
- Background: white, border-top 1px #E8E8E8

### Bottom Spacing
- 16px padding below last asset row

## Components

### Total Value Display
```
<section class="total-value-card">
  <div class="label">Total Assets</div>
  <div class="value">HK$ 1,234,567.89</div>
  <div class="currency-toggle">
    <button class="active">HKD</button>
    <button>USD</button>
    <button>BTC</button>
  </div>
  <div class="pnl-row">
    <span class="gain">+HK$ 12,345 (+1.02%)</span>
  </div>
</section>
```

### Asset Row
```
<div class="asset-row">
  <img class="asset-icon" src="btc.svg" alt="Bitcoin" />
  <div class="asset-info">
    <div class="name">Bitcoin</div>
    <div class="code">BTC</div>
  </div>
  <div class="balance">
    <div class="amount">0.5000</div>
    <div class="change positive">+5.2%</div>
  </div>
  <div class="value">HK$ 250,000</div>
  <span class="exchange-badge">HashKey</span>
  <svg class="chevron" />
</div>
```

### Quick Action Button
```
<button class="action-button">
  <svg class="icon" />
  <span class="label">Deposit</span>
</button>
```

### Exchange Card
```
<div class="exchange-card">
  <img class="exchange-logo" src="hashkey.svg" />
  <div class="exchange-info">
    <div class="name">HashKey</div>
    <span class="status-badge active">Active</span>
  </div>
  <div class="exchange-balance">HK$ 800,000</div>
</div>
```

## Mock Data

```typescript
interface Portfolio {
  totalValue: {
    hkd: 1234567.89;
    usd: 157500;
    btc: 0.0321;
  };
  pnl24h: {
    hkd: 12345;
    percent: 1.02;
  };
  currency: 'HKD' | 'USD' | 'BTC';
}

interface Asset {
  id: string;
  name: string;
  code: string;
  type: 'crypto' | 'stock' | 'forex' | 'commodities';
  exchange: 'HashKey' | 'Bullish' | 'OSL' | 'VDX';
  icon: string;
  balance: number;
  valueHKD: number;
  valueBTC?: number;
  change24h: number;
  status: 'active' | 'maintenance';
}

interface ExchangeSummary {
  name: string;
  logo: string;
  status: 'active' | 'maintenance';
  totalBalanceHKD: number;
  assetCount: number;
}

const mockAssets: Asset[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    code: 'BTC',
    type: 'crypto',
    exchange: 'HashKey',
    icon: 'https://cryptoicons.org/o/btc.svg',
    balance: 0.5,
    valueHKD: 250000,
    valueBTC: 0.5,
    change24h: 5.2,
    status: 'active',
  },
  {
    id: 'eth',
    name: 'Ethereum',
    code: 'ETH',
    type: 'crypto',
    exchange: 'HashKey',
    icon: 'https://cryptoicons.org/o/eth.svg',
    balance: 5.25,
    valueHKD: 187500,
    valueBTC: 0.00969,
    change24h: 3.8,
    status: 'active',
  },
  {
    id: 'usdt',
    name: 'Tether',
    code: 'USDT',
    type: 'crypto',
    exchange: 'Bullish',
    icon: 'https://cryptoicons.org/o/usdt.svg',
    balance: 50000,
    valueHKD: 390625,
    valueBTC: 0.0161,
    change24h: 0.01,
    status: 'active',
  },
  {
    id: 'aapl',
    name: 'Apple Inc.',
    code: 'AAPL',
    type: 'stock',
    exchange: 'OSL',
    icon: 'https://assets.example.com/aapl.svg',
    balance: 100,
    valueHKD: 156250,
    change24h: -2.1,
    status: 'active',
  },
  {
    id: 'eurusd',
    name: 'EUR/USD',
    code: 'EURUSD',
    type: 'forex',
    exchange: 'VDX',
    icon: 'https://assets.example.com/eurusd.svg',
    balance: 50000,
    valueHKD: 390625,
    change24h: 1.5,
    status: 'active',
  },
];

const mockExchanges: ExchangeSummary[] = [
  {
    name: 'HashKey',
    logo: 'https://assets.example.com/hashkey.svg',
    status: 'active',
    totalBalanceHKD: 437500,
    assetCount: 2,
  },
  {
    name: 'Bullish',
    logo: 'https://assets.example.com/bullish.svg',
    status: 'active',
    totalBalanceHKD: 390625,
    assetCount: 1,
  },
  {
    name: 'OSL',
    logo: 'https://assets.example.com/osl.svg',
    status: 'active',
    totalBalanceHKD: 156250,
    assetCount: 1,
  },
  {
    name: 'VDX',
    logo: 'https://assets.example.com/vdx.svg',
    status: 'maintenance',
    totalBalanceHKD: 250000,
    assetCount: 1,
  },
];
```

## Interaction Requirements

1. **Currency Toggle**: Clicking HKD/USD/BTC recalculates all displayed values in real-time
2. **Hide Balance**: Eye icon toggles all numeric values to masked state (●●●●●●)
3. **Quick Actions**: Each button navigates to corresponding page (Deposit, Withdraw, Transfer, Convert)
4. **Asset Row Tap**: Opens asset detail page showing transaction history, charts, and advanced actions
5. **Asset Class Tabs**: Filter visible assets by category (click Crypto to show only crypto holdings)
6. **Hide Dust Filter**: Toggle checkbox hides assets < $10 value (default: off)
7. **Exchange Card Tap**: Shows exchange-specific holdings and settings
8. **Sort Dropdown**: Options include Value (desc/asc), Change % (desc/asc), Name (a-z)
9. **Pull-to-Refresh**: Pull down on asset list to refresh portfolio data from all exchanges
10. **Settings Icon**: Navigate to portfolio settings, notifications, risk preferences

## Constraints

- Minimum width: 320px (mobile)
- Recommended max-width: 480px (mobile), 768px (tablet), 1200px (desktop)
- Asset list scrolls independently of header (sticky header)
- All numeric values update in real-time from WebSocket feed
- Asset icons must load with fallback placeholder if unavailable
- Exchange status must reflect actual exchange status (check API every 30s)
- Total value calculation must include fees from all exchanges
- P&L calculation based on 24h price change weighted by balance
- Currency conversion rates updated every 5 minutes
- For hidden exchanges (maintenance), show status but gray out balance
- Maximum of 50 assets displayed per page (paginate or virtualize for performance)
- Support for up to 4 active exchanges displayed simultaneously
