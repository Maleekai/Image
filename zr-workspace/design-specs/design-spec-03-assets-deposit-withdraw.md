# Design Spec 03: Assets, Deposit, Withdraw, Transfer & History Module
> Source: OKX iOS | Flows: 032-036 | Deep Analysis: 2026-03-04

---

## 1. Module Overview

The Assets module manages portfolio overview, fund deposits (on-chain), inter-account transfers, and transaction history. OKX uses an Exchange/Wallet dual-mode architecture with a clean, card-based portfolio display.

---

## 2. Screen-by-Screen Pixel Specifications

### Screen 2.1: Assets Overview

**Layout Zones**:
| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Status Bar | 0px | 47px | System status |
| Page Title | 60px | 48px | "Assets" 32px bold |
| Exchange/Wallet Toggle | 108px | 36px | Segmented control |
| Total Value | 150px | 80px | Large balance + today's change |
| Allocation Bar | 240px | 6px | Gradient segmented bar |
| Action Buttons | 260px | 80px | Deposit \| Withdraw \| Transfer \| History \| Analysis |
| Allocation Detail | 350px | auto | Collapsible sections |
| Asset List | ~500px | scroll | Individual asset rows |
| Tab Bar | Bottom | 83px | 5-tab navigation |

**Total Value Display**:
- Label: "Total" 14px #8C8C8C
- Amount: 40px Bold monospace, #1A1A1A
- Eye icon: 24×24px to toggle visibility (mask → *****)
- Today's change: 14px, #00B15E (positive) or #FF3B30 (negative), with ↑/↓ icon

**Allocation Bar**:
- Width: 358px (16px margins)
- Height: 6px
- Border radius: 3px
- Gradient fill: Blue #5B7AFF to Purple #9F8FFF (multi-segment for asset types)

**Action Button Row** (horizontal scroll):
- 5 circular icon buttons: Deposit \| Withdraw \| Transfer \| History \| Analysis
- Each: 82×44px pill shape, bg #F3F3F3, radius 12px
- Icon: 20px, centered above label
- Label: 13px medium, #1A1A1A
- Gap: 8px between buttons

**Allocation Detail Sections**:
```
[●] Funding Account                    $12,345.67
    (14px #8C8C8C label)               (16px bold right-aligned)

[●] Trading Account                     $8,234.56
[●] Earn Account                        $3,456.78
```
- Color dots: 8px circle, full-height left indicator
  - Funding: #5B7AFF (blue)
  - Trading: #9F8FFF (purple)
  - Earn: #22C55E (green)
- USD value below in 13px gray

**Asset Row** (72px):
```
┌──────────────────────────────────────────────────┐
│ [40px Icon] Bitcoin            0.5 BTC           │
│             BTC               $33,617.25          │
└──────────────────────────────────────────────────┘
```
- Icon: 40px circular
- Name: 16px bold #1A1A1A
- Symbol: 13px #8C8C8C
- Balance: 16px bold right-aligned
- USD value: 13px #8C8C8C right-aligned
- Divider: 1px #EEEEEE, 20px left margin

**Dust Filter**: "Hide balances < $10" toggle switch, bottom of list

### Screen 2.2: Deposit (On-chain)

**Step 1 — Asset Selection**:
- Search input: 44px, bg #F3F3F3, radius 12px, magnifying glass icon
- Popular assets: horizontal chips (USDT, BTC, ETH, USDC)
- Asset list: icon + name + full name, 64px rows

**Step 2 — Network Selection**:
- Radio button list:
```
┌──────────────────────────────────────────────────┐
│ ○ Tron (TRC-20)                                  │
│   Fee: Free · Arrival: ~2 min · 1 confirmation    │
├──────────────────────────────────────────────────┤
│ ○ Ethereum (ERC-20)                               │
│   Fee: ~$2.50 · Arrival: ~5 min · 12 confirmations│
├──────────────────────────────────────────────────┤
│ ○ Bitcoin Network                                 │
│   Fee: ~$5.00 · Arrival: ~30 min · 3 confirmations│
└──────────────────────────────────────────────────┘
```
- Radio: 24px circle, selected: #000000 fill with white dot
- Network name: 16px bold
- Details: 13px #8C8C8C (fee, arrival, confirmations)
- Row height: 72px with 16px padding

**Step 3 — QR Code & Address**:
- QR code: centered, 160×160px, black on white
- Address: monospace 13px, bg #F5F5F5, padding 12px, radius 8px
- Copy button: "Copy" pill, bg #000000, text #FFFFFF, 32px height, radius 16px
- Share button: outline style, 32px height

**Warning Banners**:
- Minimum deposit: "Minimum deposit: 1 USDT" — 13px, bg #FFF8E1 (amber tint), text #F59E0B
- Memo required: "This address requires a Memo/Tag" — bg #FFEBEE (red tint), text #EF4444, icon ⚠
- Height: 44px, radius 8px, padding 12px

### Screen 2.3: Transfer Between Accounts

**From/To Selectors**:
```
┌─ FROM ──────────────────────────────────────────┐
│ [Dropdown ▼] Funding Account                     │
│ Available: 10,000.00 USDT                        │
└──────────────────────────────────────────────────┘
         [↕ Swap Direction Button 44px]
┌─ TO ────────────────────────────────────────────┐
│ [Dropdown ▼] Trading Account                     │
│                                                   │
└──────────────────────────────────────────────────┘
```
- Dropdown: bg #F5F5F5, 56px height, radius 12px, chevron ▼ right
- Opens: Bottom sheet with account type list
- Available balance: 13px #8C8C8C below From
- Swap button: 44px circle, bg #F0F0F0, ↕ arrows icon

**Asset Selector**: Token icon + "USDT ▼" dropdown, 44px height
**Amount Input**: 56px height, large 28px monospace, "Max" link teal #17A2B8
**Confirm Button**: full width, 52px, bg #000000 (or brand color), radius 12px

### Screen 2.4: Deposit & Trading History

**Filter Tabs**: All \| Deposits \| Withdrawals \| Transfers (36px height, underline active)
**Status Filter Pills**: Completed \| Pending \| Failed — horizontal chips, 28px height

**Transaction Row** (72px):
```
┌──────────────────────────────────────────────────┐
│ [↓ Icon] Deposit BTC                   +0.5 BTC  │
│          Bitcoin Network · 6/6 ✓       $33,617.25 │
│          Mar 3, 10:15                   Completed │
└──────────────────────────────────────────────────┘
```
- Direction icon: 24px circle, green ↓ (deposit), red ↑ (withdraw)
- Type + Asset: 16px bold
- Network + Confirmations: 13px #8C8C8C
- Timestamp: 12px #8C8C8C
- Amount: 16px bold, green (+) or red (-)
- USD value: 13px #8C8C8C
- Status badge:
  - Completed: bg #E8F5E9, text #22C55E
  - Pending: bg #FFF8E1, text #F59E0B + "3/6" confirmations
  - Failed: bg #FFEBEE, text #EF4444

**Transaction Detail** (on tap expand):
- TX Hash: monospace 12px, tappable → block explorer
- Confirmations: "6/6 confirmed"
- Created/Confirmed timestamps
- Network fee
- Copy TX hash button

**Empty State**: Centered illustration + "No transactions yet" + "Start Trading" CTA

### Screen 2.5: Order History

**Filter Tabs**: All \| Spot \| Margin \| Futures (36px, underline)
**Date Range**: Calendar icon + "Last 7 days" dropdown
**Export**: "Export CSV" text button, top-right, 14px teal

**Order Row** (64px):
```
┌──────────────────────────────────────────────────┐
│ Buy BTC/USDT           Limit     $67,234.50     │
│ 0.15 BTC · Filled 100%          Mar 4, 14:30    │
└──────────────────────────────────────────────────┘
```
- Side indicator: green left border (buy) or red left border (sell), 3px width
- Pair: 16px bold
- Order type: 13px #8C8C8C
- Price: 16px mono, right-aligned
- Amount + fill %: 13px #8C8C8C
- Timestamp: 12px #8C8C8C

---

## 3. Complete Component Library

### Asset Display Components
| Component | Dimensions | Colors | States | Notes |
|-----------|-----------|--------|--------|-------|
| Total Value | auto × 48px | 40px bold mono #1A1A1A | Visible/Masked | Eye toggle |
| Allocation Bar | 358×6px | Gradient #5B7AFF→#9F8FFF | Default | Multi-segment |
| Account Row | 358×48px | Dot colored + amount bold | Collapsed/Expanded | Category indicators |
| Asset Row | 390×72px | Icon 40px + name + balance | Default/Hidden (dust) | 20px left divider |
| Dust Filter | 358×44px | Toggle switch | On/Off | "Hide < $10" |

### Deposit/Withdraw Components
| Component | Dimensions | Colors | States | Notes |
|-----------|-----------|--------|--------|-------|
| Network Radio | 358×72px | ○ unselected ● selected (#000000) | Selected/Unselected | Fee + arrival info |
| QR Code Display | 160×160px | Black on white | Default | Centered |
| Address Display | 358×auto | Mono 13px, bg #F5F5F5 | Default/Copied | Copy + Share buttons |
| Warning Banner | 358×44px | Amber #FFF8E1 or Red #FFEBEE | Default | ⚠ icon + text |
| Copy Button | auto×32px | bg #000000, text #FFFFFF | Default/Copied | Pill shape, radius 16px |

### Transfer Components
| Component | Dimensions | Colors | States | Notes |
|-----------|-----------|--------|--------|-------|
| Account Dropdown | 358×56px | bg #F5F5F5, radius 12px | Default/Open | With available balance |
| Swap Direction | 44px circle | bg #F0F0F0 | Default/Tapped | ↕ arrows, rotates 180° |
| Amount Input (Large) | 358×56px | 28px monospace | Empty/Filled/Max | "Max" link teal |

### History Components
| Component | Dimensions | Colors | States | Notes |
|-----------|-----------|--------|--------|-------|
| Filter Tab | auto×36px | Active underline #000000 | Active/Inactive | Horizontal |
| Status Pill | auto×28px | Green/Amber/Red bg + text | Completed/Pending/Failed | |
| Transaction Row | 390×72px | Direction icon + amounts | Default/Expanded | Tap to expand |
| Order Row | 390×64px | Side color border (3px) | Default | Green buy / Red sell |
| TX Hash | 358×auto | Mono 12px #8C8C8C | Default/Copied | Tappable → explorer |
| Date Range Picker | auto×36px | Calendar icon + dropdown | Default/Open | "Last 7 days" |
| Export Button | auto×36px | Teal text 14px | Default | "Export CSV" |

---

## 4. Color Tokens (Assets-Specific)

| Token | Hex | Usage |
|-------|-----|-------|
| allocation-funding | #5B7AFF | Funding account indicator |
| allocation-trading | #9F8FFF | Trading account indicator |
| allocation-earn | #22C55E | Earn account indicator |
| deposit-icon | #22C55E | Green ↓ arrow |
| withdraw-icon | #EF4444 | Red ↑ arrow |
| status-completed | #22C55E on #E8F5E9 | Completed badge |
| status-pending | #F59E0B on #FFF8E1 | Pending badge |
| status-failed | #EF4444 on #FFEBEE | Failed badge |
| warning-amber-bg | #FFF8E1 | Minimum deposit warning |
| warning-red-bg | #FFEBEE | Memo required warning |
| qr-foreground | #000000 | QR code modules |
| address-bg | #F5F5F5 | Address display background |

---

## 5. Interaction Patterns

### Assets Overview
- Eye icon tap → toggle balance visibility (masked: *****)
- Account section tap → expand/collapse allocation detail
- Asset row tap → navigate to asset detail
- Dust filter toggle → show/hide small balances
- Pull to refresh → update all balances

### Deposit Flow
1. Tap "Deposit" → Asset selection screen
2. Select asset (or search) → Network selection
3. Select network → QR code + address display
4. Copy address or share
5. Warning banners appear contextually (minimum amount, memo)

### Transfer Flow
1. Tap "Transfer" → From/To account selectors
2. Select From account type (dropdown → bottom sheet)
3. Select To account type
4. Choose asset from dropdown
5. Enter amount (or "Max")
6. Tap "Confirm" → success confirmation

### History
- Tab filter → filter by transaction type
- Status pills → filter by status
- Tap row → expand transaction detail
- Tap TX hash → open block explorer
- Export CSV → download transaction report

---

## 6. ZR Securities Adaptation

### Direct Adoption
- Portfolio overview with total value + today's change
- Allocation bar with color-coded segments
- Action button row (circular icon pills)
- Deposit QR code display
- Network selection with fee/arrival info
- Transaction history list with status badges

### Modification Required
- **Account structure**: Replace Funding/Trading/Earn with ZR account types per exchange
- **Allocation bar**: Color-code by asset class (Crypto/Stocks/Forex/Commodities) + by exchange
- **Exchange badge**: Show which exchange holds each asset
- **Export CSV**: Add HK tax-friendly format (required for SFC reporting)
- **Transfer**: Support cross-exchange transfers (HashKey → Bullish, etc.)

### New Design Needed
- **Multi-Exchange Portfolio View**: Aggregated total + per-exchange breakdown
- **Cross-Exchange Transfer**: From [HashKey Funding] → To [Bullish Trading]
- **Asset Class Aggregation**: Total crypto + Total stocks + Total forex
- **Exchange Health Status**: Green/Amber/Red per exchange (API status, withdrawal enabled)
- **Regulatory Withdrawal Limits**: Progress bar showing daily limit used

### Compliance
- SFC daily withdrawal limits display with remaining balance
- Exchange-specific deposit addresses clearly labeled
- Mandatory withdrawal confirmation with 2FA
- Transaction history export for regulatory reporting

---

*Version: v2.0 (Deep Analysis) | Last Updated: 2026-03-04*
