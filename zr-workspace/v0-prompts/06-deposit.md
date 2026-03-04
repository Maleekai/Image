# Deposit Page — ZR Securities Trading App

## Context
The Deposit page enables users to add funds to their trading account across multiple cryptocurrencies, networks, and exchanges. Users select a coin, choose the deposit network, and receive a wallet address with QR code. The page provides critical safety warnings about network selection and deposit requirements.

## Design System
- **Brand Color**: #1A73E8 (blue)
- **Typographic Scale**:
  - 18px bold (page title)
  - 14px regular (section labels)
  - 12px gray (helper text)
  - 13px monospace (wallet address)
- **Spacing**: 16px base unit
- **Iconography**: 24px (action icons), 160px × 160px (QR code)
- **Border Radius**: 8px (cards), 4px (inputs)
- **Alert Colors**:
  - Red #EF4444 (critical warnings)
  - Orange #F59E0B (info notices)
  - Green #22C55E (success states)

## Page Layout

### Header Zone (64px)
- Left: Back button (24px left arrow) + "Deposit" (18px bold)
- Right: Help icon (24px, opens FAQ modal)
- Background: White, border-bottom 1px #E8E8E8

### Title Section (48px)
- "Deposit [Asset]" (18px bold if pre-selected, else "Deposit Funds")
- Subtitle: "Choose network and address to receive funds"
- 16px padding, left-aligned

### Coin Selector Section (variable height, hidden if pre-selected)
- Label: "Select Coin" (14px bold)
- Search input (48px height):
  - Placeholder: "Search coins..."
  - 16px padding, 1px border #DDD
  - Focus state: border 2px brand blue
- Popular coins grid (below search):
  - 3 columns on mobile, 5 on tablet
  - Per coin card (80px × 100px):
    - Icon 44px centered
    - Name 12px centered
    - Code/ticker 10px gray centered
    - Tap to select (blue outline highlight)
  - 8px gap between cards
- Show top 12 coins: BTC, ETH, USDT, USDC, BNB, XRP, ADA, SOL, AVAX, DOGE, SHIB, LINK

### Network Selector Section (80px + grid height)
- Label: "Select Network" (14px bold)
- Instructions: "Choose the network that matches your source" (12px gray)
- Network option cards (80px height, 16px padding):
  - Left: Radio button (20px circle, blue when selected)
  - Center:
    - Network name (14px bold, e.g., "Bitcoin Network")
    - Fee display (12px gray, "Fee: 0.0005 BTC")
    - Arrival time (12px gray, "~ 10-30 min")
  - Right: "Recommended" badge (if fastest/cheapest, 8px pill, green background)
  - Border: 1px #DDD, selected state 2px brand blue
- Per coin, show 3 network options (e.g., for BTC: BTC/Lightning/BSC bridge)
- 8px gap between cards

### QR Code Display (200px)
- Centered, white background card (200px × 200px, 8px radius)
- QR code: 160px × 160px, black on white
- Below QR: coin name + network (12px gray)
- Card shadow: 0 2px 8px rgba(0,0,0,0.1)

### Address Display Zone (80px)
- Background: #F5F5F5, 16px padding, 8px radius
- Label: "Deposit Address" (12px gray)
- Address row (56px):
  - Monospace address text (13px, word-break: break-all)
  - Copy button (24px, blue icon, text "Copy")
  - Share button (24px, icon only, gray)
- Below address (12px gray): "Address generated for Bitcoin Network"
- Hover copy button: background #E3F2FD

### Important Notices Section (variable height)
- Heading: "Important" (14px bold)
- Stack of notice cards (12px text, 16px padding, 8px radius):

  **Notice 1 (orange/amber background #FEF3C7, #92400E text)**
  - Icon: info circle (16px)
  - Text: "Minimum deposit: 0.001 BTC (~HK$ 500)"
  - Text size: 12px

  **Notice 2 (orange background #FEF3C7, #92400E text)**
  - Icon: info circle (16px)
  - Text: "Requires [6] confirmations (~30 minutes)"
  - Text size: 12px

  **Notice 3 (red background #FEE2E2, #DC2626 text)**
  - Icon: alert triangle (16px)
  - Text: "Deposits sent to a wrong network will be lost permanently. Always verify network before sending."
  - Text size: 12px
  - Styling: bold background

  **Notice 4 (orange background #FEF3C7, #92400E text)**
  - Icon: info circle (16px)
  - Text: "Do not send from a smart contract address"
  - Text size: 12px

- 8px gap between notices

### Action Zone (56px)
- Full-width button: "Generate New Address" (52px height, outlined border 1px blue, text brand blue)
- OR
- If already generated, show: "Copy Address" (52px height, solid brand blue bg, white text)
- 16px padding, disabled state if no network selected

### Bottom Spacing
- 16px padding below

## Components

### Coin Selector Card
```
<div class="coin-card">
  <img class="coin-icon" src="btc.svg" alt="Bitcoin" />
  <div class="coin-name">Bitcoin</div>
  <div class="coin-code">BTC</div>
</div>
```

### Network Option
```
<div class="network-option">
  <input type="radio" class="network-radio" name="network" value="btc" />
  <div class="network-info">
    <div class="network-name">Bitcoin Network</div>
    <div class="network-details">
      <span>Fee: 0.0005 BTC</span>
      <span>~ 10-30 min</span>
    </div>
  </div>
  <span class="recommended-badge">Recommended</span>
</div>
```

### QR Code Card
```
<div class="qr-card">
  <canvas id="qr-code" width="160" height="160"></canvas>
  <div class="qr-subtitle">Bitcoin via Bitcoin Network</div>
</div>
```

### Address Display
```
<div class="address-section">
  <div class="address-label">Deposit Address</div>
  <div class="address-display">
    <code class="address-text">1A1z7agoat4ogyitLwKWaszhAMxpSWHJf</code>
    <button class="copy-button" onclick="copyAddress()">
      <svg class="icon" />
      Copy
    </button>
    <button class="share-button">
      <svg class="icon" />
    </button>
  </div>
  <div class="address-note">Address generated for Bitcoin Network</div>
</div>
```

### Notice Card
```
<div class="notice warning">
  <svg class="notice-icon" />
  <span class="notice-text">Minimum deposit: 0.001 BTC (~HK$ 500)</span>
</div>
```

## Mock Data

```typescript
interface Coin {
  id: string;
  name: string;
  code: string;
  icon: string;
  balance?: number;
}

interface Network {
  id: string;
  name: string;
  coinCode: string;
  fee: string;
  feeUSD: number;
  arrivalTime: string;
  recommended: boolean;
  confirmations: number;
}

interface DepositAddress {
  address: string;
  coin: string;
  network: string;
  generatedAt: string;
  expiresAt: string;
  status: 'active' | 'expired';
}

const mockCoins: Coin[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    code: 'BTC',
    icon: 'https://cryptoicons.org/o/btc.svg',
  },
  {
    id: 'eth',
    name: 'Ethereum',
    code: 'ETH',
    icon: 'https://cryptoicons.org/o/eth.svg',
  },
  {
    id: 'usdt',
    name: 'Tether',
    code: 'USDT',
    icon: 'https://cryptoicons.org/o/usdt.svg',
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    code: 'USDC',
    icon: 'https://cryptoicons.org/o/usdc.svg',
  },
  {
    id: 'bnb',
    name: 'Binance Coin',
    code: 'BNB',
    icon: 'https://cryptoicons.org/o/bnb.svg',
  },
  {
    id: 'xrp',
    name: 'Ripple',
    code: 'XRP',
    icon: 'https://cryptoicons.org/o/xrp.svg',
  },
  {
    id: 'ada',
    name: 'Cardano',
    code: 'ADA',
    icon: 'https://cryptoicons.org/o/ada.svg',
  },
  {
    id: 'sol',
    name: 'Solana',
    code: 'SOL',
    icon: 'https://cryptoicons.org/o/sol.svg',
  },
];

const mockNetworks: Network[] = [
  {
    id: 'btc-mainnet',
    name: 'Bitcoin Network',
    coinCode: 'BTC',
    fee: '0.0005 BTC',
    feeUSD: 25,
    arrivalTime: '10-30 minutes',
    recommended: true,
    confirmations: 6,
  },
  {
    id: 'btc-lightning',
    name: 'Lightning Network',
    coinCode: 'BTC',
    fee: '0.00001 BTC',
    feeUSD: 0.5,
    arrivalTime: '< 1 minute',
    recommended: false,
    confirmations: 1,
  },
  {
    id: 'btc-bsc',
    name: 'Binance Smart Chain (WBTC)',
    coinCode: 'BTC',
    fee: '0.00015 BTC',
    feeUSD: 7.5,
    arrivalTime: '5-15 minutes',
    recommended: false,
    confirmations: 3,
  },
  {
    id: 'eth-mainnet',
    name: 'Ethereum Network',
    coinCode: 'ETH',
    fee: '0.005 ETH',
    feeUSD: 15,
    arrivalTime: '15-45 minutes',
    recommended: true,
    confirmations: 12,
  },
  {
    id: 'eth-polygon',
    name: 'Polygon (MATIC)',
    coinCode: 'ETH',
    fee: '0.001 ETH',
    feeUSD: 3,
    arrivalTime: '2-10 minutes',
    recommended: false,
    confirmations: 256,
  },
  {
    id: 'usdt-ethereum',
    name: 'Ethereum Network (ERC-20)',
    coinCode: 'USDT',
    fee: '5 USDT',
    feeUSD: 5,
    arrivalTime: '15-45 minutes',
    recommended: false,
    confirmations: 12,
  },
  {
    id: 'usdt-tron',
    name: 'TRON (TRC-20)',
    coinCode: 'USDT',
    fee: '1 USDT',
    feeUSD: 1,
    arrivalTime: '5-30 minutes',
    recommended: true,
    confirmations: 19,
  },
];

const mockDepositAddress: DepositAddress = {
  address: '1A1z7agoat4ogyitLwKWaszhAMxpSWHJf',
  coin: 'BTC',
  network: 'Bitcoin Network',
  generatedAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  status: 'active',
};

const mockNotices = [
  {
    type: 'info',
    icon: 'info-circle',
    text: 'Minimum deposit: 0.001 BTC (~HK$ 500)',
  },
  {
    type: 'info',
    icon: 'info-circle',
    text: 'Requires 6 confirmations (~30 minutes)',
  },
  {
    type: 'warning',
    icon: 'alert-triangle',
    text: 'Deposits sent to a wrong network will be lost permanently. Always verify network before sending.',
  },
  {
    type: 'info',
    icon: 'info-circle',
    text: 'Do not send from a smart contract address',
  },
];
```

## Interaction Requirements

1. **Coin Selection**:
   - Tap coin card to select (highlight blue outline)
   - If pre-selected from route param, hide this section entirely
   - Search filters coins by name or code

2. **Network Selection**:
   - Radio button selection (single choice)
   - Recommended badge highlights fastest/cheapest option
   - Dynamic fee and arrival time display
   - Update QR and address when network changes

3. **QR Code**:
   - Tap to enlarge in fullscreen modal
   - Long-press to copy address
   - QR code valid for 24 hours (countdown timer in subtitle)

4. **Copy Address**:
   - Click copy button shows toast: "Address copied to clipboard" (green, 2s auto-dismiss)
   - Icon changes to checkmark briefly then reverts
   - Works on desktop and mobile

5. **Share Address**:
   - Click share button opens native share sheet on mobile
   - Desktop: opens email/message dialog
   - Shares address with context: "My BTC deposit address for Bitcoin Network"

6. **Generate New Address**:
   - Button visible if address expired or user wants fresh address
   - Shows loading spinner while generating
   - Refreshes QR and address display
   - Toast: "New address generated" (green, 2s auto-dismiss)

7. **Warning Interaction**:
   - Red warning card has checkbox: "I understand the risk"
   - Must check to enable deposit/continue flow
   - Checkbox required before next step

## Constraints

- QR code must be large enough to scan (minimum 160×160px)
- Address display must support copy on all platforms (fallback to manual selection)
- Network selection must validate coin compatibility (don't show Polygon for BTC)
- Fee display must update in real-time based on network congestion
- Minimum deposit validation must prevent users from submitting below threshold
- Address must not be visible/copyable if user hasn't enabled 2FA
- QR code regenerates if not scanned within 24 hours (security)
- All addresses must be checksummed and validated before display
- Mobile: full-width layout, 320px minimum
- Desktop: constrain to max 480px width (mobile view) or expand to 768px (tablet)
- Confirmation count badge must be accurate (synced with blockchain explorer)
- Network fees must refresh every 30 seconds if visible
- Expired address must show clear renewal option before user can proceed
- All sensitive data (full addresses) must be masked until user confirms they're ready to deposit
