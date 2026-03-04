---
name: zr-v0-prompt-generator
description: Generate production-ready v0.dev prompts for ZR Securities crypto/securities trading app. Transforms competitive design specs into pixel-precise v0 prompts with ZR's design system, multi-market architecture, and SFC compliance baked in. MANDATORY TRIGGERS — use this skill whenever generating v0 prompts, creating React prototypes for ZR Securities, converting design specs into v0-compatible instructions, building interactive prototypes, or the user mentions "v0 prompt", "v0生成", "原型生成", "prototype generation", or "React prototype". Also trigger for updating existing v0 prompts based on design feedback.
---

# ZR v0 Prompt Generator Skill

> **Purpose**: Transform design-spec documents (from competitive analysis) + ZR business requirements into precise, pixel-level v0.dev prompts that generate production-quality React prototypes.

---

## Context

This skill is Phase 2 in the ZR Securities workflow:

```
Phase 1: Competitive Analysis → design-spec-*.md (done by zr-competitive-design-analysis skill)
Phase 2: Design Decisions + v0 Prompts (THIS SKILL)
Phase 3: v0.dev prototype generation (manual, using output from this skill)
```

### Input Requirements

Before using this skill, you should have:
1. `design-spec-*.md` files (from Phase 1 competitive analysis)
2. ZR business context (PRD, FRD, business flow documents)
3. The `zhuorui-securities-strategy` skill principles

### Output Files

This skill produces three categories of files:

```
zr-workspace/
├── design-decisions/
│   ├── zr-design-decisions.md        ← Master design decision document
│   └── zr-design-system.md           ← Complete design system specification
└── v0-prompts/
    ├── 00-design-system.md           ← v0 prompt: Global design system components
    ├── 01-market-list.md             ← v0 prompt: Market list page
    ├── 02-symbol-detail.md           ← v0 prompt: Symbol detail with K-line
    ├── 03-trade-order.md             ← v0 prompt: Trade order page
    ├── 04-order-management.md        ← v0 prompt: Order management
    ├── 05-assets.md                  ← v0 prompt: Assets/portfolio
    ├── 06-deposit.md                 ← v0 prompt: Deposit page
    ├── 07-withdraw.md                ← v0 prompt: Withdraw page
    └── 08-onboarding.md             ← v0 prompt: Onboarding flow
```

---

## Part 1: Design Decision Document

### Structure for `zr-design-decisions.md`

```markdown
# ZR Securities — Design Decision Document
> Version: [X.X] | Date: [YYYY-MM-DD] | Author: CPO

## 1. Direct Adoption (直接借鉴)
[Patterns from OKX/Binance to adopt directly]

| Decision ID | Pattern | Source | Screens Applied | Rationale |
|-------------|---------|--------|-----------------|-----------|
| DA-001 | [Pattern] | [OKX/Binance] | [Where] | [Why] |

## 2. Differentiated Design (差异化设计)
[Where ZR must differ due to multi-market/multi-exchange/compliance]

| Decision ID | Area | Competitor Approach | ZR Approach | Rationale |
|-------------|------|-------------------|-------------|-----------|
| DD-001 | [Area] | [How they do it] | [How we do it] | [Why different] |

## 3. Innovation Opportunities (创新机会)
[Where competitors are weak and ZR can excel]

| Decision ID | Opportunity | Why Competitors Miss It | ZR Solution | Impact |
|-------------|------------|------------------------|-------------|--------|
| IO-001 | [Gap] | [Reason] | [Our approach] | [User value] |

## 4. Design Principles (设计原则)
[Derived from strategy skill + competitive analysis]

1. **Sober over Pleasurable**: Every screen that touches money must prioritize clarity over delight
2. **Multi-market Native**: Asset class switching must feel as natural as tab switching
3. **Exchange Transparent**: Users must always know which exchange serves their trades
4. **Compliance Visible**: Regulatory disclosures integrated into flow, not bolted on
5. **Trust by Default**: Show data sources, execution venues, fee breakdowns proactively
```

---

## Part 2: Design System Specification

### Structure for `zr-design-system.md`

This document defines every visual and interactive token for the ZR app. It must be precise enough that v0 can generate consistent components.

```markdown
# ZR Securities Design System

## Colors
### Primary
- Brand Blue: #1A73E8
- Brand Blue Light: #4A90D9 (hover/pressed states)
- Brand Blue Dark: #1557B0 (active states)

### Semantic
- Success / Buy / Rise: #00C853
- Error / Sell / Fall: #FF1744
- Warning: #FFB300
- Info: #29B6F6

### Neutral (Light Mode)
- Background Primary: #FFFFFF
- Background Secondary: #F5F5F5
- Background Tertiary: #EEEEEE
- Text Primary: #212121
- Text Secondary: #757575
- Text Tertiary: #BDBDBD
- Border: #E0E0E0
- Divider: #F0F0F0

### Neutral (Dark Mode)
- Background Primary: #121212
- Background Secondary: #1E1E1E
- Background Tertiary: #2C2C2C
- Text Primary: #FFFFFF
- Text Secondary: #B0B0B0
- Text Tertiary: #666666
- Border: #333333
- Divider: #222222

## Typography
- Font Family: SF Pro (iOS), Roboto (Android), Inter (Web/v0)
- H1: 28px / Bold / Line-height 34px
- H2: 22px / Semibold / Line-height 28px
- H3: 18px / Semibold / Line-height 24px
- Body: 15px / Regular / Line-height 22px
- Caption: 13px / Regular / Line-height 18px
- Mono (prices): SF Mono / Roboto Mono / JetBrains Mono, 15px

## Spacing
- Base unit: 4px
- XS: 4px | S: 8px | M: 12px | L: 16px | XL: 24px | XXL: 32px

## Border Radius
- Small (buttons, inputs): 8px
- Medium (cards): 12px
- Large (modals, sheets): 16px
- Full (avatars, badges): 50%

## Shadows (Light Mode)
- Elevation 1: 0 1px 3px rgba(0,0,0,0.08)
- Elevation 2: 0 4px 12px rgba(0,0,0,0.12)
- Elevation 3: 0 8px 24px rgba(0,0,0,0.16)

## Component Tokens
[Define for each core component: Button, Input, Card, TabBar, NavBar, BottomSheet, etc.]
```

---

## Part 3: v0 Prompt Engineering

### v0 Prompt Structure

Every v0 prompt MUST follow this exact structure for best results:

```markdown
# [Page Name] — ZR Securities Trading App

## Context
You are building a mobile-first crypto/securities trading app for ZR Securities (卓锐证券),
a Hong Kong SFC-licensed multi-market broker. The app supports crypto, stocks, forex,
and commodities trading across multiple exchanges (HashKey, Bullish, OSL, VDX).

## Design System
[Include relevant subset of design system tokens]

## Page Layout
### Screen Dimensions
- Width: 390px (iPhone 15 Pro)
- Safe area top: 59px (Dynamic Island)
- Safe area bottom: 34px (Home indicator)
- Tab bar height: 83px (49px bar + 34px safe area)

### Layout Specification
[Precise zone-by-zone description]

## Components
[Each component with exact specs]

### Component: [Name]
- Position: [exact px or relative]
- Size: [width × height]
- Background: [color token]
- Border: [if any]
- Content: [what's inside]
- States: [default, active, disabled, loading, error]
- Interaction: [tap/swipe/long-press behavior]

## Mock Data
[Realistic trading data for rendering]

## Interaction Requirements
[Animations, transitions, gestures]

## Constraints
- Use Tailwind CSS only (no custom CSS)
- Mobile-first, 390px viewport
- Support both light and dark mode via CSS variables
- Use Inter font family
- All prices in monospace font
- Accessibility: minimum touch target 44px
- All text in English (default) with Chinese (zh-HK) as secondary

## What NOT to include
- No actual API calls
- No authentication logic
- No localStorage (use React state only)
```

### Module-Specific Prompt Guides

Read the appropriate reference file for module-specific prompt details:

- `references/v0-market-prompts.md` — Market list & discovery prompts
- `references/v0-trading-prompts.md` — Trading, K-line, order book prompts
- `references/v0-asset-prompts.md` — Assets, deposit, withdraw prompts

---

## v0 Iteration Tips

After initial generation, use these patterns in v0 chat to refine:

### Layout Adjustments
```
"Move the order book below the chart, not beside it"
"Make the chart area 45% of viewport height"
"Add 16px padding to the card container"
```

### Component Refinements
```
"The buy/sell buttons should be full-width, split 50/50, with rounded corners 8px"
"Add a subtle green/red gradient background to the order book rows based on volume"
"The price should animate (flash green/red) when it changes"
```

### State Variations
```
"Show me the empty state when user has no assets"
"Show the loading skeleton for the market list"
"Show the error state when network is unavailable"
"Add dark mode toggle in the top right"
```

### ZR-Specific Refinements
```
"Add an exchange badge (HashKey logo) next to the trading pair name"
"Add a market class switcher (Crypto | Stocks | Forex) as a segmented control above the list"
"Add SFC risk disclosure banner at the top of the trade confirmation modal"
"Add a 30-second cooling-off countdown for orders exceeding 20% of portfolio"
```

---

## Quality Checklist for v0 Prompts

Before finalizing any prompt:

- [ ] Viewport dimensions specified (390px width)
- [ ] All colors reference the design system tokens
- [ ] Typography specifications included
- [ ] Component spacing uses the 4px grid
- [ ] Touch targets are ≥ 44px
- [ ] Mock data is realistic (real crypto pairs, realistic prices)
- [ ] Both light and dark mode considered
- [ ] ZR differentiators included (multi-market, exchange badge, compliance)
- [ ] Antifragile principles applied where relevant
- [ ] Interaction behaviors are specific (not vague)
- [ ] Empty, loading, and error states defined

---

**Version**: v1.0
**Last Updated**: 2026-03-04
**Maintainer**: ZR Securities Product Team
