---
name: zr-competitive-design-analysis
description: Competitive design analysis skill for crypto/securities trading apps. Analyzes competitor screenshots (OKX, Binance, etc.) and outputs structured design specification documents covering information architecture, component inventory, interaction patterns, and ZR Securities adaptation recommendations. MANDATORY TRIGGERS — use this skill whenever analyzing competitor app screenshots, creating design-spec documents, reviewing competitor UI/UX patterns, extracting reusable components from competitor apps, or comparing design approaches across crypto trading platforms. Also trigger when the user mentions "竞品分析", "设计规范", "design spec", "competitor analysis", "交互分析", or references OKX/Binance screenshots.
---

# ZR Competitive Design Analysis Skill

> **Purpose**: Transform classified competitor screenshots into structured, actionable design specification documents that feed directly into v0 prompt generation and Figma design workflows.

---

## Context

ZR Securities (卓锐证券) is building a multi-market crypto/securities trading app for the Hong Kong market. The competitive analysis is based on:

- **OKX iOS**: 429 screenshots classified into 74 Mobbin Flow folders
- **Binance iOS**: 1811 screenshots classified into 248 Mobbin Flow folders
- **GitHub repo**: Screenshots are at `OKX_iOS/` and `Binance_iOS/` with numbered folder naming (`001_Onboarding`, `002_Verifying_account`, etc.)

### ZR Securities Differentiators (Always Consider These)

1. **Multi-market broker**: Stocks + Crypto + Forex + Commodities (not pure crypto exchange)
2. **Multi-exchange architecture**: Users bind to one of HashKey, Bullish, OSL, or VDX
3. **Hong Kong SFC compliance**: Strict regulatory requirements
4. **Scale**: ~100K users target
5. **Brand**: Primary blue #1A73E8

---

## Workflow

### Step 1: Identify Module Scope

Map the user's request to one of these analysis modules:

| Module | OKX Flows | Binance Flows | Priority |
|--------|-----------|---------------|----------|
| 行情列表 Market List | 003, 010-013, 015 | 006, 007-008, 011-020 | P0 |
| K线与盘口 K-line & Order Book | 014-017 | 021-030 | P0 |
| 交易下单 Trade Order | 014, 016, 019, 022 | 031-050 | P0 |
| 委托管理 Order Management | 020, 036 | 051-060 | P0 |
| 资产管理 Assets | 032, 039 | 061-080 | P0 |
| 充值提币 Deposit/Withdraw | 033-035 | 081-100 | P1 |
| 开户注册 Onboarding | 001-002, 060 | 001-005 | P1 |
| 安全设置 Security & Settings | 058, 068-069 | 101-120 | P2 |
| Web3/DeFi | 037-055 | 121-180 | P2 |
| 社交/Copy Trading | 024, 021 | 181-200 | P3 |
| Earn/理财 | 026-031 | 201-230 | P3 |

### Step 2: Screenshot Analysis Protocol

For each screenshot, extract the following in a structured format:

```
### Screen [number]: [Screen Name]
**Purpose**: One-line description of what this screen does
**Layout Structure**:
- Top zone (status bar + nav): [description]
- Content zone: [description]
- Bottom zone (tab bar / action area): [description]

**Component Inventory**:
| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| ... | ... | ... | ... | ... |

**Data Fields**:
| Field | Format | Update Frequency | Source |
|-------|--------|-----------------|--------|
| ... | ... | ... | ... |

**Interaction Behaviors**:
- Tap [element] → [action/navigation]
- Swipe [direction] → [action]
- Long press [element] → [action]

**Visual Design Notes**:
- Color usage, typography, spacing observations
- Dark/light mode differences if visible
```

### Step 3: Output Document Structure

Every design-spec document MUST follow this exact template:

```markdown
# Design Spec: [Module Name]
> Source: [OKX/Binance] iOS App | Analyzed: [date] | Flows: [flow numbers]

## 1. Information Architecture
[Mermaid diagram showing page hierarchy]

## 2. Screen-by-Screen Analysis
[Detailed analysis per Step 2 protocol]

## 3. Reusable Component Library
| Component | Description | Used In | Props/Variants | ZR Applicability |
|-----------|-------------|---------|----------------|-----------------|
| ... | ... | ... | ... | ... |

## 4. Interaction Pattern Summary
### Navigation Patterns
### Data Display Patterns
### Input & Form Patterns
### Feedback & Confirmation Patterns
### Gesture Patterns

## 5. Design Strengths & Weaknesses
### Strengths (直接借鉴)
### Weaknesses (改进机会)
### Missing Features (创新机会)

## 6. ZR Securities Adaptation Recommendations
### Direct Adoption (直接采用)
[Patterns to keep as-is, with rationale]

### Modification Required (需要调整)
[Patterns that need changes for ZR's multi-market/multi-exchange/compliance context]

### New Design Needed (需要新设计)
[Areas where ZR's unique requirements demand original design]

### Compliance Considerations (合规要求)
[SFC-specific design requirements for this module]

## 7. v0 Generation Hints
[Key layout descriptions, component specs, and interaction behaviors formatted as notes that will be consumed by the v0-prompt-generator skill]
```

### Step 4: Cross-Reference with Strategy Skill

When generating Section 6 (ZR Adaptation), always cross-reference with the `zhuorui-securities-strategy` skill principles:

- **Antifragile Interaction**: Does any competitor pattern encourage irrational trading? Add cooling-off design.
- **Emotion Labeling**: Does the competitor label content with emotion/fact scores? Recommend it.
- **Transparent Trust**: Does the competitor provide strategy transparency? Enhance it.
- **Cognitive Companion**: Can content in this module serve as a "cognition ladder"?

Read the strategy skill at: `zr-skills/zhuorui-securities-strategy/` or the installed version.

---

## Analysis Quality Checklist

Before finalizing any design-spec document, verify:

- [ ] Every screenshot has been individually analyzed (not skipped)
- [ ] Mermaid information architecture diagram is accurate and complete
- [ ] Component inventory covers ALL visible UI elements
- [ ] Interaction behaviors include edge cases (empty states, error states, loading)
- [ ] ZR adaptation considers all 5 differentiators listed above
- [ ] Compliance section addresses Hong Kong SFC requirements specifically
- [ ] v0 generation hints are concrete enough for prompt engineering
- [ ] Cross-referenced with strategy skill principles

---

## Complete OKX Analysis (Full 74-Flow Coverage)

The comprehensive analysis of all 429 OKX screenshots across 74 Mobbin Flows is available at:

**`references/okx-complete-analysis.md`** — Contains:
- App architecture overview (5-tab navigation, Exchange/Wallet dual-mode)
- Extracted design system tokens (colors, typography, spacing, border radius)
- Flow-by-flow analysis of ALL 74 flows grouped by functional area:
  - Flows 001-002: Onboarding & Verification
  - Flows 003-009: Home, Rewards, Referral, Notifications, Search, Articles
  - Flows 010-013: Market Discovery, Favorites, Sorting
  - Flow 014: Core Trading Screen
  - Flows 015-017: Crypto Detail, Sell, Action Options
  - Flows 018-021: P2P Trading
  - Flows 022-025: Convert, Bots, Copy Trading, Options
  - Flows 026-031: Grow (Earn, Loans, Jumpstart, Structured Products)
  - Flows 032-036: Assets, Deposit, Transfer, History
  - Flows 037-055: Web3 Wallet (Keyless, NFT, DeFi, DApps)
  - Flows 056-058: Menu, Shortcuts, Settings
  - Flows 059-066: Profile Management
  - Flows 067-073: Security, Language, Notifications, Help, Legal
  - Flow 074: Login
- Complete component library (30+ components with variants)
- Interaction patterns summary
- Design strengths (8 items) & weaknesses (8 items)
- ZR adaptation recommendations per flow group

### How to Use the Complete Analysis

1. **For design-spec generation**: Read the relevant flow group from `okx-complete-analysis.md`, then use `templates/design-spec-template.md` to structure the output
2. **For v0 prompt generation**: Feed the extracted design tokens and component specs directly into the `zr-v0-prompt-generator` skill
3. **For Binance diff analysis**: Use OKX analysis as baseline, then compare with Binance screenshots for the same module

---

## Module-Specific Analysis Guides

For additional per-module guidance beyond the complete analysis:

- `references/market-analysis-guide.md` — Market list & discovery specific patterns
- `references/trading-analysis-guide.md` — Trading, order book, K-line specific patterns
- `references/asset-analysis-guide.md` — Assets, deposit/withdraw, portfolio patterns

---

## File Naming Convention

Output files go to `zr-workspace/design-specs/`:

```
design-spec-01-market-list.md
design-spec-02-kline-orderbook.md
design-spec-03-trade-order.md
design-spec-04-order-management.md
design-spec-05-assets.md
design-spec-06-deposit-withdraw.md
design-spec-07-onboarding.md
design-spec-08-binance-diff.md
```

---

## Example Output Fragment

Here's a brief example of the expected analysis quality:

```markdown
### Screen 082: Crypto Detail (BTC/USDT)
**Purpose**: Display real-time price, chart, and trading entry for a specific trading pair

**Layout Structure**:
- Top zone: Navigation bar with back arrow, pair name "BTC/USDT", star (favorite), share icon
- Content zone:
  - Price block: Current price (large, green/red), 24h change %, 24h high/low
  - Chart area: Candlestick chart ~40% screen height, time period tabs (1H/4H/1D/1W/1M)
  - Order book mini-view: 5 levels buy/sell with depth visualization
  - Recent trades: Scrollable list with time, price, amount
- Bottom zone: Fixed "Buy" (green) and "Sell" (red) buttons, full width split

**Component Inventory**:
| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Price Display | Text + Badge | Top of content | Rising (green), Falling (red), Neutral (gray) | Large font ~28pt |
| Candlestick Chart | Interactive Chart | Center | Multiple timeframes, pinch-to-zoom | Height ~40% viewport |
| Depth Bar | Progress Bar | Order book rows | Variable fill based on volume | Green (bid) / Red (ask) |
| Trade Button | CTA Button | Bottom fixed | Buy (green) / Sell (red) | Full width, 50/50 split |
```

---

**Version**: v1.0
**Last Updated**: 2026-03-04
**Maintainer**: ZR Securities Product Team
