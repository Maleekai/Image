# Home Dashboard — ZR Securities Trading App

## Context
The Home Dashboard is the first screen users see after login. It serves as a personalized command center combining quick actions, market overview, announcements, and exchange status. Unlike Binance's social-first Home (Binance Square) or OKX's discovery-focused approach, ZR's Home is data-first and action-oriented — optimized for users who want to quickly check their portfolio, scan market conditions, and act.

Inspired by OKX's customizable quick-entry grid (DA-012), Binance's Fear & Greed integration (IO-008), and ZR's multi-exchange transparency principle (P3).

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Success: #34A853 / Danger: #EA4335 / Warning: #FBBC04
- Neutral: #5F6368 / Background: #FFFFFF / Surface: #F8F9FA
- Exchange: HashKey #2962FF / Bullish #00BFA5 / OSL #FF6D00 / VDX #7C4DFF

**Typography:**
- Inter: headings, labels, body
- JetBrains Mono: numbers, prices, data

**Spacing:** 8px grid, 16px container padding

## Page Layout

```
[Status Bar - 47px]

[Header Zone - 56px]
  └─ Avatar (32px) | "Good morning, {Name}" | 🔔 Notification bell (badge) | 🔍 Search icon

[Portfolio Summary Card - 100px]
  └─ Total Assets value | 24h P&L | Quick action pills

[Quick Actions Grid - 80px] (DA-012)
  └─ 4 customizable slots (Deposit/Trade/Earn/Heatmap)

[Market Session Banner - 36px] (IO-005)
  └─ "NYSE ● Open | HKEX ● Closed | Crypto 24/7"

[Market Sentiment Card - 80px] (IO-008)
  └─ Fear & Greed gauge | Mkt Cap | 24h Volume

[Exchange Status Row - 48px] (IO-007 mini)
  └─ 4 inline dots: HashKey ● | Bullish ● | OSL ○ | VDX ●

[Watchlist Preview - variable]
  └─ Top 5 favorites with mini sparklines

[Announcements Section - variable]
  └─ 2-3 announcement cards

[Bottom Tab Bar - 83px]
  └─ [首页●] [行情] [交易] [资产] [更多]
```

## Components

### Header Zone (56px)
- **Left:** User avatar (32px circle, tap → Profile/Settings page)
- **Center:** Greeting text — "Good morning, {firstName}" (Inter 16px, dynamic by time: 早上好/下午好/晚上好)
- **Right:**
  - Search icon (24px, tap → Search overlay page)
  - Notification bell (24px, red badge with unread count, tap → Notifications page)

### Portfolio Summary Card (100px)
- **Background:** White card, 12px radius, 1px border #E8E8E8
- **Content:**
  - "Total Assets" label (Inter 12px, #9AA0A6)
  - Value: "HK$1,234,567" (JetBrains Mono 28px bold) + eye icon toggle (mask ●●●●●●)
  - 24h P&L: "+HK$12,345 (+1.02%)" (JetBrains Mono 14px, #34A853 green)
  - Quick pills row: [Deposit] [Withdraw] [Transfer] — 28px height, border pills, 8px gap
- **Tap:** Navigate to Assets page

### Quick Actions Grid (DA-012, 80px)
- **Layout:** 4 slots, horizontal, 80px × 64px each, center-aligned
- **Per slot:**
  - Icon: 32px, brand blue circle background
  - Label: Inter 11px, #333333, below icon
- **Default slots:** [Deposit 充值] [Trade 交易] [Earn 理财] [Heatmap 热力图]
- **Edit mode:** Long-press → shake animation → drag to reorder → tap X to remove → "+" to add from menu
- **Available actions:** Deposit, Withdraw, Trade, Earn, Heatmap, Convert, History, Settings, AI Companion, Referral

### Market Session Banner (IO-005, 36px)
- **Background:** #F8F9FA, full width, 8px padding
- **Layout:** Horizontal scroll, items separated by " | "
- **Per market:**
  - Status dot: 8px circle — green (#34A853) = Open, gray (#BDBDBD) = Closed, orange (#FBBC04) = Pre/Post market
  - Market name: Inter 11px — "NYSE", "HKEX", "LSE", "Crypto"
  - Status text: Inter 11px — "Open", "Closed", "Pre-Market", "24/7"
- **Mock data:**
  - NYSE ● Open (9:30am-4:00pm ET)
  - HKEX ● Closed (opens 9:30am HKT)
  - Crypto 🟢 24/7
  - Forex ● Open (Mon-Fri 24h)

### Market Sentiment Card (IO-008, 80px)
- **Identical to Market Sentiment Card in 01-market-list.md**
- 3 columns: Total Mkt Cap | 24h Volume | Fear & Greed gauge
- Compact version: gauge is 48px diameter (smaller than market list version)

### Exchange Status Row (IO-007 mini, 48px)
- **Background:** White card, 8px radius, 1px border #F0F0F0
- **Layout:** 4 items in row, equal spacing
- **Per exchange:**
  - Logo: 16px
  - Name: Inter 10px
  - Status dot: 6px (green/orange/red)
  - Latency: JetBrains Mono 9px (#9AA0A6)
- **Mock:**
  - HashKey ● 45ms | Bullish ● 62ms | OSL ○ Maint | VDX ● 38ms
- **Tap:** Navigate to AI Companion → Insights tab (full Exchange Health)

### Watchlist Preview (variable)
- **Section header:** "Watchlist" (Inter 14px bold) + "See All →" link (12px, #1A73E8)
- **Layout:** Top 5 favorites from user's watchlist
- **Per row (56px):**
  - Token icon 28px
  - Name/Symbol (Inter 13px / 11px gray)
  - Mini sparkline 40×20px (green/red based on 24h change) — DA-013
  - Price (JetBrains Mono 13px)
  - Change badge (JetBrains Mono 11px, green/red pill)
- **Empty state:** "Add favorites from Market page" + CTA button
- **Tap row:** Navigate to Symbol Detail

### Announcements Section (variable)
- **Section header:** "Announcements" (Inter 14px bold) + "All →" link
- **Layout:** Vertical stack, max 3 cards
- **Per card (72px):**
  - Left: Category icon (24px) — 🔔 System / 📊 Market / 🏛️ Regulatory / 🎉 Promotion
  - Center: Title (Inter 13px bold) + Description (Inter 11px, #757575, 1 line max)
  - Right: Time ago (Inter 10px, #9AA0A6) — "2h ago"
- **Tap card:** Navigate to announcement detail or external link
- **Types:**
  - System: Maintenance, updates
  - Market: Market events, new listings
  - Regulatory: SFC notices
  - Promotion: Fee discounts (never misleading, compliance-first)

### Bottom Tab Bar (83px)
- **Standard ZR 5-tab bar as defined in 00-design-system.md**
- Home tab is active (filled icon, #1A73E8 label)

## Antifragile Design Principles Integration

### Emotion Concentration Label (Module 3, Principle 2)
- Announcements that contain market predictions or emotion-heavy language display a small label:
  - "📊 Fact-based" (blue pill) or "⚡ Contains opinion" (orange pill)
- This prevents users from making impulsive decisions based on emotional announcements

### Daily Activity Awareness
- If user has made 3+ trades today, the Trade quick action shows a subtle amber border
- Tooltip on tap: "You've made {N} trades today. Frequent trading may increase losses."
- This implements Antifragile Principle 1 at the home screen level

## Mock Data

```typescript
interface HomeDashboard {
  user: {
    firstName: string;
    avatarUrl: string;
    unreadNotifications: number;
  };
  portfolio: {
    totalValue: number;
    currency: 'HKD' | 'USD' | 'BTC';
    change24h: { value: number; percent: number };
  };
  quickActions: Array<{
    id: string;
    icon: string;
    label: string;
    route: string;
  }>;
  marketSessions: Array<{
    market: string;
    status: 'open' | 'closed' | 'pre-market' | 'post-market' | '24/7';
    hours: string;
  }>;
  exchangeStatus: Array<{
    name: string;
    status: 'active' | 'degraded' | 'offline';
    latencyMs: number;
    color: string;
  }>;
  watchlist: Array<{
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    sparklineData: number[];
    exchange: string;
  }>;
  announcements: Array<{
    id: string;
    category: 'system' | 'market' | 'regulatory' | 'promotion';
    title: string;
    description: string;
    timeAgo: string;
    emotionScore: number; // 0-100
    factScore: number; // 0-100
  }>;
}
```

## Interaction States

### Loading
- Skeleton cards with shimmer animation for all sections

### No Exchange Connected
- Portfolio card shows "Connect an exchange to get started" + CTA
- Watchlist shows empty state

### All Exchanges Offline
- Exchange Status Row all red dots
- Warning banner at top: "All exchanges are currently experiencing issues"

### Night Mode Greeting
- After 10pm: "Good evening, {name}. Markets will be here tomorrow. 🌙"
- Subtle nudge aligned with Antifragile principle (don't encourage late-night trading)

## Implementation Notes
- Greeting: Use `new Date().getHours()` — 5-11: 早上好, 12-17: 下午好, 18-22: 晚上好, 23-4: 夜深了
- Market sessions: Calculate based on timezone + market calendar
- Quick actions: Persist order in localStorage
- Watchlist: Pull from user favorites, limit to 5
- Announcements: Fetch latest 3 from API

## Competitive Reference
- **OKX Home:** Exchange/Wallet toggle + market data table + announcements — clean but no personalization
- **Binance Home:** Social-first (Binance Square) + promotional banners — too noisy
- **ZR Differentiator:**
  1. Market Session Banner (IO-005) — neither OKX nor Binance shows multi-market hours
  2. Exchange Status mini-row (IO-007) — unique to ZR
  3. Antifragile nudges (daily trade awareness) — no competitor does this
  4. Customizable quick actions (DA-012) — inspired by OKX but with ZR-specific actions
  5. Emotion/Fact labels on announcements — Transparent Trust Protocol integration

## v0 Screenshot References
Upload these screenshots alongside this prompt for visual reference:
- OKX Home: `OKX_iOS/056_Menu_Hub/` (menu grid layout reference)
- OKX Home: `OKX_iOS/057_Customize_menu/` (customizable grid reference)
- Binance Home: `Binance_iOS/006_Home/` (home layout reference — use as anti-pattern, too social)
