# Design Spec: Deposit & Withdraw Module

> **Source**: OKX iOS App
> **Analyzed**: 2026-03-04
> **Flows Covered**: 033_Deposit_crypto, 034_Transferring_asset, 035_Deposit_history
> **Screenshots Analyzed**: 17 (179-195)

---

## 2. Screen-by-Screen Analysis

### Screen 179-182: Deposit Crypto

**Purpose**: Generate/display deposit address for receiving crypto

**Layout Structure**:
- **Nav bar**: Back + "Deposit" title
- **Coin Selector** (if not pre-selected): Search bar + popular coins grid (BTC, ETH, USDT, USDC displayed as circular icon buttons)
- **Network Selector**: After coin selection, show available networks
  - Each network: Network name + "Recommended" badge (if applicable)
  - Network details: Min deposit, Confirmations needed, Estimated arrival
- **Address Display Page**:
  - Selected coin + network summary at top
  - Large QR code (center, ~200x200px)
  - Address text below QR (mono font, truncated with "..." + copy icon)
  - "Copy Address" button (full width, outlined)
  - "Share" button
  - Warning notices section (red text for critical warnings):
    - "Send only [COIN] to this address"
    - "Minimum deposit: [amount]"
    - "Deposits require [N] network confirmations"
    - If memo/tag required: RED banner "A MEMO is required for this deposit"

**Component Inventory**:

| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Coin Search | Search + Grid | Step 1 | Empty / Results | Popular coins as circular icons |
| Network Card | Radio List | Step 2 | Selected / Unselected | "Recommended" badge |
| QR Code | Image | Center | Generated / Loading | ~200x200px |
| Address Display | Mono Text + Copy | Below QR | Default / Copied (toast feedback) | Truncated with full on tap |
| Copy Button | Outlined Button | Below address | Default / Copied (green check) | Full width |
| Warning Banner | Alert Card | Bottom | Info (yellow) / Critical (red) | For memo/tag requirements |
| Deposit History | Link Button | Bottom | Default | Navigates to history |

### Screen 187-195: Deposit History

**Purpose**: Track status of all deposits

**Layout**:
- Filter tabs: "All | Pending | Completed | Failed"
- Each entry: Coin icon + "Deposit [COIN]" + Amount + Status badge + Date
- Tap entry -> Detail page with:
  - Transaction hash (mono, tappable -> explorer)
  - Confirmations: "12/12 confirmed"
  - From address
  - Network
  - Timestamps (initiated, confirmed, credited)

---

## 5. ZR Adaptation

### Direct Adoption
- 3-step deposit flow: Select coin -> Select network -> Show QR + address
- QR code centered display with copy button
- Network comparison with recommended badge
- Warning banners for minimum amounts and memo requirements
- Deposit history with status tracking

### Modifications
- **Exchange Selection**: Before network, show which exchange to deposit to (HashKey/Bullish/etc)
- **Fee Comparison**: Show network fees side-by-side for informed choice
- **Estimated Arrival**: More prominent display of expected crediting time
- **SFC Compliance**: "Assets will be held in segregated custody at [Exchange]" disclosure

### Withdraw Additions (not fully captured in OKX screenshots)
- **Address Whitelist**: Only allow pre-approved withdrawal addresses
- **New Address Cooling-off**: 24h wait for newly added addresses (SFC requirement)
- **2FA Verification**: Multi-step security: Email OTP + Phone/Authenticator
- **Fee Preview**: Clear display of network fee vs. received amount
- **Withdrawal Limits**: Show daily/monthly limits with usage bar

---

## 7. v0 Generation Hints

### Deposit Layout
```
┌──────────────────────────────────────┐
│ Status Bar                           │
├──────────────────────────────────────┤
│ [<]     Deposit BTC                  │
├──────────────────────────────────────┤
│ Select Network                       │
│ ┌────────────────────────────────┐  │
│ │ ● Bitcoin (BTC)  Recommended   │  │
│ │   Min: 0.0001 BTC | ~30 min   │  │
│ ├────────────────────────────────┤  │
│ │ ○ ERC-20 (Ethereum)            │  │
│ │   Min: 0.001 BTC | ~15 min    │  │
│ └────────────────────────────────┘  │
├──────────────────────────────────────┤
│ Exchange: HashKey                    │
│ ┌────────────────────────────────┐  │
│ │        ┌────────────┐          │  │
│ │        │  QR CODE   │          │  │
│ │        │  200x200   │          │  │
│ │        └────────────┘          │  │
│ │  bc1qxy2kgdygjrsqtz...q4s    │  │
│ │  [     Copy Address     ]      │  │
│ │  [     Share Address    ]      │  │
│ └────────────────────────────────┘  │
├──────────────────────────────────────┤
│ ⚠ Send only BTC to this address     │
│ ⚠ Min deposit: 0.0001 BTC           │
│ ⚠ Requires 3 confirmations           │
├──────────────────────────────────────┤
│ Assets held at HashKey Exchange      │
│ under segregated custody             │
└──────────────────────────────────────┘
```

### Withdraw Layout
```
┌──────────────────────────────────────┐
│ Status Bar                           │
├──────────────────────────────────────┤
│ [<]     Withdraw BTC                 │
├──────────────────────────────────────┤
│ To Address                           │
│ [  Paste address...  ] [QR] [Book]  │
│ ✓ Valid Bitcoin address              │
├──────────────────────────────────────┤
│ Network                              │
│ ● Bitcoin | Fee: 0.0001 BTC | ~30m  │
├──────────────────────────────────────┤
│ Amount          Available: 1.5 BTC   │
│ [  0.1000  BTC  ]          [Max]    │
├──────────────────────────────────────┤
│ ┌─ Withdrawal Summary ────────────┐ │
│ │ Amount:   0.1000 BTC            │ │
│ │ Fee:      0.0001 BTC            │ │
│ │ Receive:  0.0999 BTC            │ │
│ │ Exchange: HashKey                │ │
│ └─────────────────────────────────┘ │
├──────────────────────────────────────┤
│ [   Withdraw 0.0999 BTC   ]        │ -> triggers 2FA
└──────────────────────────────────────┘
```

---

*Generated by ZR Competitive Design Analysis Skill v1.0*
