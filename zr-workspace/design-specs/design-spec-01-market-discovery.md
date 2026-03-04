# Design Spec 01: Market & Discovery Module
> Source: OKX iOS | Flows: 003, 010-013, 015 | Deep Analysis: 2026-03-04

---

## 1. Module Overview

The Market & Discovery module is the primary entry point for price monitoring, asset discovery, and watchlist management. OKX implements this through the "Discover" tab with a data-dense, sortable table interface.

**Screens Covered**: Search results with multi-market tabs, Markets view (Favorites/Spot/Futures/Options), Crypto detail with chart, Edit favorites modal, Copy trading lead traders list, Announcements.

---

## 2. Screen-by-Screen Pixel Specifications

### Screen 2.1: Markets View — Favorites Tab

**Layout Zones**:
| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Status Bar | 0px | 47px | System status |
| Header Tab Nav | 47px | 48px | Favorites \| Markets \| Copy trading \| Search icon |
| Column Headers | 95px | 32px | Name ↕ \| Turnover ↕ \| Last price ↕ \| Change ↕ |
| Market List | 127px | ~1300px | Scrollable crypto rows |
| Tab Bar | Bottom | 83px | Home \| Discover \| Trade \| Grow \| Assets |

**Column Header Component**:
- Font: SF Pro Display, 12px, Medium weight, #999999
- Sort indicators: ↕ arrows (12px), right of text
- Tap area: 40px minimum height
- Active sort: #000000 text, single arrow direction

**Market Row Component** (64px height):
```
┌────────────────────────────────────────────────────┐
│ [40px Icon] BTC/USDT          £545.95M   $59,302.7 │  +0.40%  │
│             (13px gray)        turnover   (18px bold)│ [badge]  │
└────────────────────────────────────────────────────┘
```
- Row padding: 12px horizontal, 8px vertical
- Divider: 1px #EEEEEE below each item
- Icon: 40×40px, circular (border-radius: 50%)
- Pair name: 16px bold, #000000
- Subtitle (volume): 12px, #999999
- Price: 18px bold, #000000 (monospace numerals)
- Change badge:
  - Positive: bg #E8F5E9, text #22C55E, padding 6px 12px, radius 8px
  - Negative: bg #FFEBEE, text #EF4444, same dimensions
  - Min width: 50px

**Edit Button** (Pencil icon): 24×24px, #000000, top-right corner

### Screen 2.2: Markets View — Spot Tab with Leverage

**Additional Components vs Favorites**:

**Sub-tab Navigation** (below main tabs):
- Items: All \| Top \| Layer 1 \| Layer 2 \| Meme \| USDT ▼
- Active: black text + 2px underline
- Inactive: #999999, no underline
- Font: 14px, Medium weight
- Spacing: 16px between tabs

**Leverage Badge**:
- Format: "10x" or "5x"
- Color: #F59E0B (orange)
- Font: 12px bold
- Position: right of pair name, inline
- Padding: 2px 4px
- Border radius: 4px
- Background: optional #FEF3C7

**Data Examples** (with leverage):
| Pair | Leverage | Price | Change |
|------|----------|-------|--------|
| BTC/USDT | 10x | 66,967.7 | -0.36% |
| ETH/USDT | 10x | 3,449.41 | -0.16% |
| OKB/USDT | 10x | 64.14 | +2.29% |
| MATIC/USDT | 5x | 1.0249 | +1.30% |

### Screen 2.3: Search Results

**Search Input**:
- Height: 40px
- Background: #F0F0F0
- Border radius: 24px (full pill)
- Left icon: magnifying glass, 20px, 12px left padding
- Clear button: X icon, 20px, right side (appears on input)
- Font: 16px, #666666 (placeholder), #000000 (input)
- Cancel button: right of input, 14px, #000000

**Tab Navigation** (below search):
- Items: All \| Spot \| Futures \| Margin \| Earn \| Bots
- Active: "All" with 2px bottom border #000000
- Height: 36px
- Horizontal scrollable

**Section Results**:
- Section heading: "Spot", 14px bold
- "Show more" button: full width, outline, 44px height, border 1px #E5E7EB, radius 8px, text "Show more" 16px centered
- Bot results show APY: "+830.00% APY" in green

### Screen 2.4: Crypto Detail — Chart View (Dark Theme)

**Header Bar** (56px):
- Back arrow: 24×24px, left
- Pair name: center, 16px bold, #FFFFFF
- Star icon: right, 24×24px (filled = #FCD34D)
- Share icon: far right, 24×24px

**Price Display Area** (dark bg #1A1A1A):
- Large price: 48px bold, monospace, #FFFFFF
- USD equivalent: 14px, #999999
- 24h change: 14px, #EF4444 (red) or #22C55E (green)
- Badges row: "🔥 NO.4" (red bg), "Top" (orange), "Meme" (orange)
  - Badge: padding 4px 8px, radius 4px, font 11px bold

**Chart Controls** (32px height):
- Timeframe tabs: 15m \| 1h \| 4h \| 1D \| More ▼
- Active: black background, white text
- Inactive: dark gray
- MA indicators display: MA7 (yellow/orange text), MA30 (orange text)

**Chart Area** (~60% screen):
- Background: #1A1A1A
- Grid lines: #333333
- Candlestick green: #22C55E
- Candlestick red: #EF4444
- Volume bars: green/red matching candles

**OHLCV Row** (below chart header):
- 24h high, 24h low, 24h vol (crypto), 24h turnover (USDT)
- Font: 12px, #999999 labels, #FFFFFF values

**Bottom Action Bar**:
- "Trade" button: full width above tab bar, 56px, black bg, white text bold
- Secondary actions: Copy, Futures, Alerts, More — each 44×44px icon buttons

### Screen 2.5: Edit Favorites Modal

**Header**: Back arrow \| "Edit Favorites" 18px bold \| "Done" button 14px
**Sub-options**: Crypto \| Top \| Drag tabs

**Checkbox List Items** (56px height each):
- Checkbox: 24×24px, left aligned
  - Unchecked: #E5E7EB border, white fill
  - Checked: #000000 fill, white checkmark
- Pair text: 16px bold, #000000
- Drag handles: ↑ arrow (20px) + ≡ hamburger (20px), right side, #999999

**Bottom Section**:
- "Select all" checkbox: left, 24×24px
- "Remove (n)" button: right, #EF4444 (red)

### Screen 2.6: Favorites Selection Grid

**Crypto Selection Cards** (2-column grid):
- Card size: ~156×80px
- Background: #F0F0F0
- Border radius: 12px
- Padding: 8px
- Content: Pair name 16px bold + subtitle 12px gray
- Checkmark: bottom-right, 20×20px, black circle white checkmark

**Add Button**: full width, 48px, #000000 bg, #FFFFFF text 16px bold, radius 12px, margin 16px

### Screen 2.7: Options View

**Chain Selection**: BTC \| ETH buttons, 36px height
**Expiry Date Buttons**: "03/26/2024" format, active: 2px black border, inactive: gray text, padding 8px 12px, radius 6px
**Options Rows**: Strike price (bold) \| Type (Call/Put 12px) \| Mark price \| Change badge

### Screen 2.8: Copy Trading Lead Traders

**Highlight text**: Lime green/yellow-green #D4FF2F background on key phrases

**Trader Card** (120px):
- Border: 1px #E5E7EB, radius 12px, padding 16px, margin-bottom 12px
- Avatar: 48×48px, circular
- Name: 16px bold + "999/1,000" followers 12px gray
- ROI: 18px green (+96.28%)
- Gain: 12px green (+$253,458.44)
- Win rate: 12px gray (63.41%)
- Mini sparkline: 40px height, green uptrend line
- Copy button: "Copy", black bg, white text, radius 20px, padding 8px 16px, height 32px

---

## 3. Complete Component Library

### Navigation Components
| Component | Dimensions | Colors | States | Notes |
|-----------|-----------|--------|--------|-------|
| Tab Navigation | H: 36-48px | Active: #000000 + 2px underline; Inactive: #999999 | Active/Inactive | Horizontal scroll |
| Sub-tab Filter | H: 36px | Same as above | Active/Inactive | Horizontal scroll with category names |
| Column Sort Header | H: 32px, min touch 40px | #999999 text, ↕ arrows 12px | Default/Asc/Desc | Tappable per column |
| Search Input | 390×40px | bg: #F0F0F0, text: #666666, radius: 24px | Empty/Active/Filled | Cancel button appears |
| Back Button | 24×24px, touch 44×44px | #000000 (light) / #FFFFFF (dark) | Default | Left arrow icon |

### Data Display Components
| Component | Dimensions | Typography | Colors | Notes |
|-----------|-----------|-----------|--------|-------|
| Market Row | 390×64px | Name 16px bold, Volume 12px, Price 18px bold | Divider: #EEEEEE | Icon 40px circle |
| Change Badge | min 50px × 24px | 12px medium | Green: bg #E8F5E9 text #22C55E; Red: bg #FFEBEE text #EF4444 | 6px 12px padding, 8px radius |
| Leverage Badge | auto × 20px | 12px bold | #F59E0B orange | 2px 4px padding, 4px radius |
| Price Display (Large) | auto | 48px bold mono | #FFFFFF (dark) / #000000 (light) | With USD equivalent below |
| Sparkline | 80×40px | N/A | Green #22C55E line | Inline in list rows |
| Token Icon | 40-48px circle | N/A | Per-token brand color | Radius 50% |
| Trend Badge | auto × 20px | 11px bold | Red/Orange bg | "🔥 NO.4", "Top", "Meme" |
| Star (Favorite) | 24×24px, touch 44px | N/A | Unfilled: #999999 outline; Filled: #FCD34D | Immediate persistence |

### Interactive Components
| Component | Dimensions | Colors | States | Notes |
|-----------|-----------|--------|--------|-------|
| Checkbox | 24×24px, touch 44px | Unchecked: #E5E7EB border; Checked: #000000 fill | Checked/Unchecked | White checkmark on fill |
| Drag Handle | 20px × 2 icons | #999999 | Default | ↑ + ≡ icons, right side |
| Selection Card (Grid) | 156×80px | bg: #F0F0F0, radius: 12px | Selected/Unselected | 2-column grid |
| CTA Button | 390×48px | bg: #000000, text: #FFFFFF | Active/Disabled | Radius 12px, 16px bold |
| Outline Button | 390×44px | border: 1px #E5E7EB | Active/Hover | "Show more" style |
| Copy Button | auto×32px | bg: #000000, text: #FFFFFF | Active | Radius 20px, 8px 16px padding |
| Timeframe Tab | auto×32px | Active: black bg white text; Inactive: gray | Active/Inactive | Chart period selector |

---

## 4. Color Tokens (Precise Extraction)

| Token | Hex | Usage |
|-------|-----|-------|
| text-primary | #000000 | Headers, active states, pair names |
| text-body | #333333 | Body text, descriptions |
| text-secondary | #666666 | Placeholder input text |
| text-tertiary | #999999 | Labels, timestamps, inactive tabs |
| bg-surface | #FFFFFF | Primary backgrounds |
| bg-input | #F0F0F0 | Search inputs, selection cards |
| bg-subtle | #F5F5F5 | Secondary backgrounds |
| border-default | #E5E7EB | Card borders, outline buttons |
| border-divider | #EEEEEE | List row dividers |
| success-green | #22C55E | Positive change, gains, buy |
| success-bg | #E8F5E9 | Positive badge background |
| error-red | #EF4444 | Negative change, losses, sell |
| error-bg | #FFEBEE | Negative badge background |
| warning-orange | #F59E0B | Leverage badges, warnings |
| highlight-lime | #D4FF2F | Key phrase highlights |
| star-gold | #FCD34D | Favorited star fill |
| dark-bg | #1A1A1A | Chart background |
| dark-grid | #333333 | Chart grid lines |

---

## 5. Typography Scale

| Element | Size | Weight | Color | Line Height |
|---------|------|--------|-------|-------------|
| Large Price | 48px | Bold (700) | Context | 56px |
| Page Title | 28px | Bold (700) | #000000 | 34px |
| Section Heading | 18px | Bold (700) | #000000 | 24px |
| Card Title / Price | 18px | Bold (700) | #000000 | 24px |
| Pair Name / Row Title | 16px | Bold (600) | #000000 | 22px |
| Body / Input | 16px | Regular (400) | #333333 | 22px |
| Tab (Active) | 14px | Medium (500) | #000000 | 20px |
| Tab (Inactive) | 14px | Medium (500) | #999999 | 20px |
| Badge / Caption | 12px | Medium (500) | Context | 16px |
| Overline / Micro | 11px | Medium (500) | Context | 14px |

---

## 6. Interaction Patterns

### Navigation
- Tab switching: instant content swap, no animation
- Column sort: tap header → cycle Default → Ascending → Descending → Default
- Search: full-screen overlay, auto-focus, debounced live results (~300ms)
- Star favorite: immediate toggle, no confirmation modal

### Data Interaction
- Market row tap → navigate to crypto detail page
- Column header tap → sort list by that column
- "Show more" → load additional items in section
- Sub-tab filter → filter list by category (Layer 1, Meme, etc.)

### Favorites Management
- Star icon tap → add/remove from favorites (immediate)
- Pencil icon → open Edit Favorites modal
- In edit mode: checkbox select/deselect, drag to reorder
- "Done" → save changes, close modal

### Chart
- Pinch zoom, horizontal pan
- Crosshair on touch-and-hold with price/time tooltip
- Timeframe button tap → chart data refresh
- Indicators dropdown → add/remove MA overlays

---

## 7. ZR Securities Adaptation

### Direct Adoption (直接采用)
- Market row component layout and interaction
- Column sorting with arrow indicators
- Star favoriting with immediate persistence
- Search overlay with trending + recent
- Dark theme for chart view
- Drag-to-reorder favorites

### Modification Required (需要调整)
- **Tab structure**: Replace "Crypto \| Spot \| Futures \| Options" with "Crypto \| Stocks \| Forex \| Commodities" (multi-market)
- **Exchange badge**: Add per-pair exchange indicator (HashKey/Bullish/OSL/VDX)
- **Leverage badge**: Add SFC risk warning for margin-enabled pairs
- **Chart**: Add market hours overlay for non-24/7 assets (stocks, forex)
- **Price format**: Support multiple currencies (HKD, USD, BTC)

### New Design Needed (需要新设计)
- **Asset Class Switcher**: Segmented control above tabs — [Crypto] [Stocks] [Forex] [Commodities]
- **Market Hours Indicator**: Trading status badge (Open/Closed/Pre-market) for stocks/forex
- **Exchange Comparison View**: Same pair side-by-side across exchanges
- **Cross-Market Favorites**: Unified watchlist across asset classes

### Compliance (合规要求)
- SFC risk disclosure for leveraged products
- Trading hours display for regulated markets
- Exchange licensing badge per pair

---

## 8. v0 Generation Hints

**Key layout**: 5-zone vertical (Status→Nav→Tabs→Sort Header→Scrollable List→Tab Bar)
**Critical components to generate first**: Market Row, Change Badge, Search Input, Column Sort Header, Star Icon
**Design system CSS variables**: Use tokens from Section 4
**Mock data**: 8-10 realistic crypto pairs with varied changes (+/-)
**States to implement**: Default, Empty (no favorites), Search active, Sort active, Loading skeleton

---

*Version: v2.0 (Deep Analysis) | Last Updated: 2026-03-04*
