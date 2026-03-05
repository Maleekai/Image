# AI Cognitive Companion — ZR Securities Trading App

## Context
The AI Cognitive Companion (IO-002) is ZR's decision-support dashboard that helps users make informed trading decisions. Unlike Binance's AI Hub which actively recommends assets (compliance risk), ZR's companion presents neutral market intelligence — sentiment indicators, event calendars, and portfolio analytics — without directional advice. This respects SFC regulatory requirements while providing genuine decision support.

Inspired by Binance's Opportunity/Calendar/Portfolio three-tab AI Hub, but redesigned for compliance and ZR's multi-market context.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- AI accent: #7C4DFF (purple, for AI-generated content badges)
- Success: #34A853 / Danger: #EA4335 / Warning: #FBBC04
- Neutral: #5F6368 / Background: #FFFFFF / Surface: #F8F9FA
- AI card bg: #F3E8FF (light purple tint)

**Typography:**
- Inter: headings, labels, body
- JetBrains Mono: numbers, data

**Spacing:** 8px grid

## Page Layout

```
[Header - 56px]
  └─ Back arrow | "Market Intelligence" | AI badge ✦

[Three-Tab Navigation - 44px]
  └─ [Insights] [Calendar] [My Portfolio]

[Tab Content - fluid, scrollable]
  └─ Content varies by tab (see below)

[Bottom Tab Bar - 83px]
```

## Tab 1: Insights (市场洞察)

### Market Sentiment Card (80px)
- **Identical to Market Sentiment Card in 01-market-list.md**
- Shows: Mkt Cap | 24h Volume | Fear & Greed gauge

### AI Market Summary (variable, ~100px)
- **Background:** #F3E8FF (light purple), 12px border-radius, 16px padding
- **Badge:** "✦ AI Summary" pill (Inter 10px, #7C4DFF bg, white text, top-left)
- **Content:** 2-3 sentence natural language market summary
  - Example: "Market sentiment is in Fear territory (28), indicating caution. BTC holding above $67K support. ETF flows mixed with recent outflows. Multi-exchange spread narrowing — HashKey and Bullish within $6 on BTC."
- **Style:** Inter 13px, #333333, line-height 1.5
- **Footer:** "Updated 5 min ago" (Inter 10px, #9AA0A6)
- **Note: This is NEUTRAL observation, not advice. No "buy"/"sell" language.**

### Token Unlock Events (variable)
- **Card per event:** 72px height, white bg, 1px border #E8E8E8, 12px radius
- **Layout:**
  - Left: Token icon 32px + symbol
  - Center: "Unlocking X tokens (Y% of supply)" + date
  - Right: Impact badge: "High" (#EA4335) / "Medium" (#FBBC04) / "Low" (#34A853)
- **Progress bar:** below text, shows total unlocked vs locked (green/gray)
- **Max:** Show top 3, "View all →" link
- **Competitive ref:** Binance Token Unlock page (截图528.png)

### Exchange Health Status (IO-007)
- **4 cards, horizontal scroll, 120px × 80px each**
- **Per card:**
  - Exchange logo: 24px
  - Exchange name: Inter 12px bold
  - Status dot: 8px circle, green (#34A853) = "Active" / orange (#FBBC04) = "Degraded" / red (#EA4335) = "Offline"
  - Latency: "45ms" (JetBrains Mono 10px)
- **Mock:**
  - HashKey: ● Active, 45ms
  - Bullish: ● Active, 62ms
  - OSL: ○ Maintenance, —
  - VDX: ● Active, 38ms

## Tab 2: Calendar (事件日历)

### Monthly Calendar View (280px)
- Standard month grid, 7 columns (Mon-Sun)
- **Event indicators:** colored dots below date numbers
  - Purple dot: Token unlock
  - Blue dot: Earnings report / Economic data
  - Orange dot: Regulatory event
  - Green dot: Market open/close (for stocks/forex)
- **Today:** Circle highlight #1A73E8

### Event List (below calendar)
- **Per event row:** 56px height
  - Left: Date pill (48px width, "Mar 8", 12px, border 1px #E8E8E8)
  - Center: Event title (Inter 13px) + type badge (10px pill)
  - Right: Asset affected (icon 20px + symbol)
- **Example events:**
  - "SCR Token Unlock — 12.25% supply" (purple badge)
  - "US Non-Farm Payrolls" (blue badge)
  - "NYSE Market Close" (green badge)
  - "SFC Policy Review" (orange badge)

## Tab 3: My Portfolio (持仓分析)

### Portfolio Score Card (120px)
- **Background:** Gradient #F0F4FF → white
- **Content:**
  - Trader Profile: "Balanced Trader" (Inter 16px bold) — auto-generated label
  - Risk Distribution pie chart: 60px diameter
    - Low risk: blue segment (e.g. 60%)
    - Medium risk: green segment (e.g. 30%)
    - High risk: red segment (e.g. 10%)
  - Score: "72/100" (JetBrains Mono 24px bold, #1A73E8)
- **Competitive ref:** Binance Assets Report trader profile (IO-010)
- **Note: No product recommendations — just neutral analytics**

### 30-Day Performance Chart (200px)
- Line chart: portfolio value over 30 days
- Y axis: HKD value
- Benchmark line (optional): Hang Seng Index (dashed gray)
- Win rate badge: "30D Win Rate: 62%" (green pill)

### Asset Allocation Breakdown
- Horizontal stacked bar: Crypto(blue) | Stocks(green) | Forex(orange) | Commodities(purple)
- Below bar: legend with % and HKD value
- **Exchange distribution:** mini donut chart showing allocation across HashKey/Bullish/OSL/VDX

### Security Score (IO-004)
- **Ring progress chart:** 80px diameter
- **Score:** "85/100" center (JetBrains Mono 20px bold)
- **Improvement tips (below chart):**
  - ✅ 2FA enabled
  - ✅ Email verification
  - ⚠️ "Enable withdrawal whitelist" → CTA button
  - ⚠️ "Set up anti-phishing code" → CTA button
- **Progress bar:** 85% green fill

## Mock Data

```typescript
interface MarketIntelligence {
  sentiment: {
    fearGreedIndex: number; // 0-100
    fearGreedLabel: 'Extreme Fear' | 'Fear' | 'Neutral' | 'Greed' | 'Extreme Greed';
    marketCap: { value: number; change: number };
    volume24h: { value: number; change: number };
  };
  aiSummary: string;
  tokenUnlocks: Array<{
    symbol: string;
    amount: number;
    percentOfSupply: number;
    date: string;
    impact: 'high' | 'medium' | 'low';
  }>;
  exchangeHealth: Array<{
    name: string;
    status: 'active' | 'degraded' | 'offline';
    latencyMs: number;
    color: string; // brand color
  }>;
  portfolio: {
    traderProfile: string;
    riskScore: number;
    riskDistribution: { low: number; medium: number; high: number };
    winRate30d: number;
    securityScore: number;
  };
}
```

## Interaction States

### Loading
- Skeleton cards with purple shimmer (AI theme)

### No Data
- "Connect an exchange to see portfolio insights" + CTA

### Error
- "Unable to load market intelligence" + retry

## Implementation Notes
- Fear & Greed gauge: use SVG semicircle arc with animated needle
- AI summary: fetch from backend, display with typing animation on first load
- Exchange health: poll every 30s via WebSocket
- Calendar: use date-fns for date manipulation
- Security score: calculate client-side based on user's enabled security features

## Competitive Reference
- **Binance AI Hub (068-069):** Opportunity/Calendar/Portfolio three-tab, with AI-generated market summary and Fear & Greed gauge
- **ZR Differentiator:**
  1. Multi-exchange health status (IO-007) — Binance only shows its own status
  2. Multi-asset calendar (stocks/forex events alongside crypto) — Binance is crypto-only
  3. No directional recommendations — SFC compliant, neutral data presentation
  4. Security score visualization (IO-004) — neither Binance nor OKX has this
- **OKX:** No comparable AI/intelligence feature

## v0 Screenshot References
Upload these screenshots alongside this prompt for visual reference:
- Binance AI Hub: `Binance_iOS/068_Binance_AI_assistant/526.png` (Opportunity dashboard with Fear & Greed)
- Binance Token Unlock: `Binance_iOS/068_Binance_AI_assistant/528.png` (Token unlock detail)
