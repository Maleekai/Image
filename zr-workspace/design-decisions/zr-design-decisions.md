# ZR Securities -- Design Decision Document

> **Version**: 1.0 | **Date**: 2026-03-04 | **Author**: CPO
> **Based on**: OKX iOS full analysis (429 screenshots, 74 flows)

---

## 1. Direct Adoption (directly reusable from OKX)

| ID | Pattern | Source | Screens Applied | Rationale |
|----|---------|--------|-----------------|-----------|
| DA-001 | 3-tier tab hierarchy (Primary > Product > Category) | OKX Home 014-022 | Market List | Proven progressive filtering with high information density |
| DA-002 | Sort popover on column headers | OKX 069-072 | Market List | Minimal, non-modal, efficient |
| DA-003 | Full-screen search overlay with product tabs | OKX 044-047 | Search | Comprehensive search UX |
| DA-004 | Candlestick chart with time-period selector | OKX 082-083 | Symbol Detail | Industry standard, well-executed |
| DA-005 | Order book split view with depth bars | OKX 082-083 | Symbol Detail, Trade | Clear visualization of market depth |
| DA-006 | Tap order book price -> auto-fill trade form | OKX 086-089 | Trade Order | Reduces taps, efficient workflow |
| DA-007 | Buy/Sell green/red segmented toggle | OKX 086-089 | Trade Order | Universal color convention |
| DA-008 | 3-step order flow (form -> confirm -> result) | OKX 103-111 | Trade Order | Clear, predictable UX |
| DA-009 | Quick percentage buttons (25/50/75/100%) | OKX 086 | Trade Amount | Fast amount selection |
| DA-010 | Balance hide/show eye toggle | OKX 170-173 | Assets | Essential privacy feature |
| DA-011 | QR code + copy address for deposit | OKX 179-182 | Deposit | Standard crypto deposit UX |
| DA-012 | Network selector with recommended badge | OKX 179-180 | Deposit | Guides users to best choice |
| DA-013 | Multi-step onboarding with progress indicator | OKX 001-009 | Registration | Clear, focused flow |
| DA-014 | Favorite star toggle with haptic | OKX 061-064 | Market rows | Standard expectation |
| DA-015 | Pull-to-refresh on data lists | OKX global | All list pages | Essential for real-time data |

---

## 2. Differentiated Design (where ZR must differ)

| ID | Area | OKX Approach | ZR Approach | Rationale |
|----|------|-------------|-------------|-----------|
| DD-001 | Asset Classes | Crypto only (Spot/Futures/Options tabs) | **Multi-asset switcher**: [Crypto] [Stocks] [Forex] [Commodities] as top-level segmented control | ZR is multi-market broker, not pure crypto exchange |
| DD-002 | Exchange Identity | Single exchange (OKX) | **Exchange Badge** on every price/order/asset: Shows "HashKey" / "Bullish" / "OSL" / "VDX" | Multi-exchange transparency, SFC requirement |
| DD-003 | Color Mode | Light mode Home, Dark mode Trade | **Dark mode globally** as default | Professional trading aesthetic, consistency |
| DD-004 | Tab Bar | OKX/Discover/Trade/Grow/Assets (5 tabs) | **Markets/Trade/Orders/Assets** (4 tabs) | Simplified for ZR v1 scope, no DeFi/Earn |
| DD-005 | Market Row | No sparkline, no exchange info | **Add sparkline** (7-day) + **exchange badge** | Visual trend indicator + exchange transparency |
| DD-006 | Detail Tabs | Chart/Overview/Data/Trade/Bots/Copy (6) | **Chart/Info/Trade/Orders** (4 tabs) | Focused scope, no bots/copy trading in v1 |
| DD-007 | Fiat Currency | USD default | **HKD default** with USD/BTC toggle | Hong Kong market focus |
| DD-008 | Order Types | Limit/Market/Stop/TP-SL (complex) | **Limit/Market/Stop-Limit** (simplified) | Accessible for broader audience |
| DD-009 | Trade Confirmation | Simple confirmation modal | **Enhanced confirmation** with SFC risk disclosure + exchange badge + fee breakdown | Hong Kong SFC compliance |
| DD-010 | Assets View | Single exchange, account-type tabs | **Multi-exchange summary cards** + asset-class tabs | Multi-exchange portfolio overview |
| DD-011 | Withdrawal | Standard withdrawal flow | **Enhanced security**: Address whitelist + 24h cooling-off for new addresses | Hong Kong regulatory requirement |
| DD-012 | Registration | Email/Phone + KYC (ID + selfie) | **4-step flow**: Register -> KYC -> **Exchange Binding** -> Risk Assessment | Exchange binding is ZR-unique |

---

## 3. Innovation Opportunities (where competitors are weak)

| ID | Opportunity | Why Competitors Miss It | ZR Solution | Impact |
|----|------------|------------------------|-------------|--------|
| IO-001 | Trading Cooling-Off Period | OKX/Binance optimize for max trading velocity | **30s mandatory wait** for orders > 20% of portfolio with risk stats | Antifragile: protects users from impulsive large trades |
| IO-002 | Trading Frequency Alert | Competitors encourage frequent trading (more fees) | **Gentle alert** when daily trades > 3: "You've been active today" | Promotes mindful trading behavior |
| IO-003 | Loss-Averaging Warning | No competitor warns about averaging down on losers | **Alert when buying** asset already down >10% in user's portfolio | Prevents common retail trap |
| IO-004 | Cross-Asset Favorites | No app mixes BTC + AAPL + EUR/USD in one watchlist | **Mixed watchlist** with asset-class icon prefix | Natural for multi-market users |
| IO-005 | Trading Hours Indicator | Crypto apps don't need this, stock apps have it | **Green dot** = tradeable now, **Gray** = market closed, with next open time | Essential for multi-asset app |
| IO-006 | Exchange Comparison in Onboarding | No competitor lets users choose their exchange | **Side-by-side exchange comparison** during registration (fees, pairs, features) | Empowers informed choice |
| IO-007 | Calm Trade Feedback | Competitors show celebratory confetti on trades | **Calm, deliberate confirmation** with slow checkmark animation | "Sober over Pleasurable" design principle |

---

## 4. Design Principles

1. **Sober over Pleasurable**: Every screen that touches money prioritizes clarity over delight. No confetti, no gamification, no dopamine tricks.
2. **Multi-Market Native**: Asset class switching feels as natural as tab switching. Users should never feel they're using a "crypto app that also does stocks."
3. **Exchange Transparent**: Users always know which exchange serves their trades. Exchange badges are present on every relevant screen.
4. **Compliance Visible**: Regulatory disclosures are integrated into the flow, not bolted on as afterthoughts. Risk disclosures appear naturally near decision points.
5. **Trust by Default**: Show data sources, execution venues, fee breakdowns proactively. Transparency builds trust.
6. **Antifragile Interaction**: Design patterns that protect users from their worst impulses during volatile markets. Cooling-off periods, frequency alerts, loss-averaging warnings.

---

## 5. Color System

| Token | Dark Mode | Light Mode | Usage |
|-------|-----------|------------|-------|
| Brand Blue | #1A73E8 | #1A73E8 | Primary actions, active states, brand identity |
| Background Primary | #0A0A0F | #FFFFFF | Main screen background |
| Background Secondary | #12121A | #F5F5F5 | Cards, elevated surfaces |
| Background Tertiary | #1C1C28 | #EEEEEE | Input fields, nested containers |
| Text Primary | #FFFFFF | #212121 | Main text, headings |
| Text Secondary | #8E8E9A | #757575 | Labels, captions |
| Text Tertiary | #4A4A5A | #BDBDBD | Placeholder, disabled text |
| Buy / Rise / Success | #00C853 | #00C853 | Positive price, buy buttons |
| Sell / Fall / Error | #FF1744 | #FF1744 | Negative price, sell buttons |
| Warning | #FFB300 | #FFB300 | Alerts, cooling-off, risk |
| Border | #1E1E2E | #E0E0E0 | Card borders, dividers |
| Exchange: HashKey | #2962FF | #2962FF | HashKey badge |
| Exchange: Bullish | #00BFA5 | #00BFA5 | Bullish badge |
| Exchange: OSL | #FF6D00 | #FF6D00 | OSL badge |
| Exchange: VDX | #7C4DFF | #7C4DFF | VDX badge |

---

## 6. Typography System

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 28px | Bold (700) | 34px | Page titles |
| H2 | 22px | Semibold (600) | 28px | Section titles |
| H3 | 18px | Semibold (600) | 24px | Card titles, nav |
| Body | 15px | Regular (400) | 22px | Body text, descriptions |
| Caption | 13px | Regular (400) | 18px | Labels, secondary info |
| Mono (Prices) | 15px | Medium (500) | 20px | All prices, amounts, numbers |
| Mono Large | 28px | Bold (700) | 34px | Hero price display |
| Sans: Inter | - | - | - | Primary font family |
| Mono: JetBrains Mono | - | - | - | Prices, addresses, codes |

---

*Generated by ZR Competitive Design Analysis + v0 Prompt Generator Skills v1.0*
