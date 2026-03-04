# Design Spec: Market List & Discovery Module

> **Source**: OKX iOS App
> **Analyzed**: 2026-03-04
> **Flows Covered**: 003_Home_(Exchange), 008_Searching, 010_Discover, 011_Editing_favorites, 012_Switching_crypto, 013_Sorting_crypto
> **Screenshots Analyzed**: 36 (014-072)

---

## 1. Information Architecture

```
Market Entry
├── Home (Exchange) ← Default tab after onboarding
│   ├── Top Movers Carousel (horizontal scroll cards)
│   ├── Quick Actions Row (Buy, Sell, Convert, P2P)
│   └── Market List (scrollable)
├── Discover
│   ├── Category Banners (DeFi, GameFi, Layer2...)
│   ├── Trending Tokens
│   └── Market Opportunities
├── Search (fullscreen overlay)
│   ├── Recent Searches
│   ├── Trending
│   └── Results (All/Spot/Futures/Margin tabs)
├── Favorites
│   ├── Edit Mode (reorder, delete)
│   └── Add from search/market list
└── Market Filters & Sort
    ├── Category: All / Top / Layer1 / Layer2 / Meme / DeFi
    ├── Product: Crypto / Spot / Futures / Options
    └── Sort: Name / Turnover / Volume / Price / Change
```

---

## 2. Screen-by-Screen Analysis

### Screen 014-022: Home (Exchange)

**Purpose**: Primary entry point showing portfolio summary + quick market access

**Layout Structure**:
- **Top zone**: Status bar (9:41 format) + Nav bar with user avatar (left), "OKX" logo (center), scan/notification icons (right)
- **Content zone**: Scrollable vertical layout
  - Portfolio value card with hide toggle (eye icon)
  - Quick action buttons: Buy / Sell / Deposit / More
  - Top Movers horizontal carousel (3 cards visible, each with coin icon + name + price + change%)
  - Market List section with "Favorites / Markets / Copy trading" top tabs
  - Under Markets: "Crypto / Spot / Futures / Options" secondary tabs
  - Under Spot: "All / Top / Layer1 / Layer2 / Meme" category pills
  - Sort header: "Name / Turnover / Last price / Change" with toggle sort icons
- **Bottom zone**: Tab bar with 5 icons: OKX (home) | Discover | Trade (center, elevated) | Grow | Assets

**Component Inventory**:

| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Portfolio Value | Text + Toggle | Top card | Visible / Hidden (eye icon) | Large mono font, fiat value |
| Quick Actions | Icon Button Row | Below portfolio | Default / Pressed | 4 circular icons with labels |
| Top Movers Carousel | Horizontal ScrollView | Below actions | 3 cards visible | Each card: icon + name + price + sparkline + change% |
| Primary Tabs | Text Tabs | Above market list | Favorites / Markets / Copy | Bold active, underline indicator |
| Product Tabs | Text Tabs | Below primary | Crypto / Spot / Futures / Options | Underline active state |
| Category Pills | Horizontal Scroll | Below product tabs | Active (filled) / Default (text only) | "All / Top / Layer1 / Layer2 / Meme" + "Crypto" dropdown right-end |
| Sort Header | Tappable Row | Above list | Ascending / Descending / Neutral | Up/down arrow icons |
| Market Row | List Item | Market list | Default / Pressed | See detail below |
| Tab Bar | Fixed Bottom | Bottom | Active (filled icon) / Inactive (outline) | Trade icon is elevated circle with swap arrows |

**Market Row Detail (OKX pattern)**:
```
┌──────────────────────────────────────────┐
│ [Star] ETH / BTC  [10x]   0.05023       │
│         £17.7M              £2,389.30    │
│                              [-0.65%]    │
└──────────────────────────────────────────┘
```
- Left: Favorite star + Symbol pair name + leverage badge (green "10x")
- Center-left: Turnover volume (secondary text)
- Center-right: Last price (mono font, primary text) + fiat equivalent (secondary)
- Right: Change% in colored badge (green bg for +, red/pink bg for -)

**Data Fields**:

| Field | Format | Update Frequency | Source |
|-------|--------|-----------------|--------|
| Pair Name | "BTC / USDT" with slash | Static | Config |
| Leverage | "10x" / "5x" green badge | Static | Config |
| Last Price | 8 decimal places (BTC pairs) | Real-time WebSocket | Exchange API |
| Fiat Equivalent | "£2,389.30" with currency symbol | Real-time | Computed |
| Turnover/Volume | "£17.7M" abbreviated | Periodic (5s) | Exchange API |
| 24h Change | "-0.65%" with sign | Real-time | Computed |

**Interaction Behaviors**:
- Tap market row -> Navigate to Crypto Detail (015)
- Tap star icon -> Toggle favorite (with haptic feedback)
- Tap sort header column -> Toggle sort direction (asc/desc/neutral)
- Swipe left on row -> Quick action buttons (Trade, Alert)
- Pull down -> Refresh all prices
- Tap search icon -> Fullscreen search overlay (044)
- Tap category pill -> Filter list by category
- Scroll -> Lazy load more items, header collapses

**Visual Design Notes**:
- Light mode default on Home, Dark mode on Trade/Detail screens
- Change% badge: rounded rect, green (#00C853) positive, pink/red (#FF1744) negative
- Leverage badge: small green text, no background
- Font: System font (SF Pro), prices in monospace
- Row height: ~72px with generous padding
- No sparkline in market rows (unlike Binance)
- Tab bar: White bg, center Trade button is black circle with white swap icon

---

### Screen 044-047: Search

**Purpose**: Global search for crypto pairs across all products

**Layout Structure**:
- Search bar at top with auto-focus keyboard
- "Cancel" button right of search bar
- Below: Recent searches as horizontal chips
- Below: Trending searches as numbered list
- Results: Categorized with tabs "All / Spot / Futures / Margin / Earn / Bots"
- Each result row: Star + Symbol + pair + price + change%

**Component Inventory**:

| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Search Input | Text Input | Top | Empty / Active / Has text | Magnifier icon left, clear button right |
| Cancel Button | Text Button | Top right | Default / Pressed | Dismisses overlay |
| Recent Chips | Horizontal Scroll | Below search | Filled chips | Tap to search, X to remove |
| Trending List | Numbered List | Center | Static | 1-10 numbered, bold name + change% |
| Product Tabs | Segmented | Above results | Active tab underlined | All / Spot / Futures / etc |
| Result Row | List Item | Results area | Default / Pressed | Same as market row format |

**Interaction Behaviors**:
- Type text -> Instant filter (debounced 200ms)
- Tap recent chip -> Fill search and show results
- Tap trending item -> Navigate to detail
- Tap star in result -> Add to favorites
- Tap result row -> Navigate to detail

---

### Screen 069-072: Sorting & Filtering

**Purpose**: Sort market list by different dimensions

**Layout Structure**:
- Popover/dropdown from sort header
- Options: "Turnover" / "Volume" with sort direction toggles
- Each option has ascending/descending icon button

**Interaction Behaviors**:
- Tap "Name/Turnover" column header -> Show sort popover
- Select sort dimension -> List re-sorts with animation
- Tap outside popover -> Dismiss

---

## 3. Reusable Component Library

| Component | Description | Used In | Props/Variants | ZR Applicability |
|-----------|-------------|---------|----------------|------------------|
| Market Row | Price ticker row with star, pair, price, change badge | Home, Favorites, Search Results, Discover | `{pair, price, change, volume, isFavorite, leverage}` | Modify: Add exchange badge, asset class icon |
| Category Pills | Horizontal scroll tab filter | Home, Discover, Search | `{items[], activeIndex, onSelect}` | Modify: Add asset class as top level |
| Sort Header | Tappable column headers with sort indicators | Market list | `{columns[], sortBy, sortDir}` | Direct use |
| Search Bar | Input with icon, clear, cancel | Search overlay | `{placeholder, value, onChange, onCancel}` | Direct use |
| Price Badge | Colored change% pill | Market rows, cards, detail | `{value, size: 'sm'|'md'|'lg'}` | Direct use |
| Quick Action Grid | Circular icon buttons | Home | `{actions[{icon, label, onPress}]}` | Modify: Add multi-market actions |
| Top Movers Card | Mini price card in carousel | Home | `{coin, price, change, sparkline}` | Direct use |
| Tab Bar | Bottom navigation | Global | `{tabs[], activeTab}` | Modify: 5 tabs for ZR |
| Favorite Star | Toggle star icon | Market rows | `{isFavorite, onToggle}` | Direct use |
| Popover Sort | Dropdown sort options | Market list | `{options[], onSelect}` | Direct use |

---

## 4. Interaction Pattern Summary

### 4.1 Navigation Patterns
- **Tab-based primary nav**: 5-tab bottom bar (OKX/Discover/Trade/Grow/Assets)
- **Hierarchical drill-down**: Market list -> Crypto detail -> Trade
- **Fullscreen overlay**: Search covers entire screen with own nav
- **Contextual tabs**: Primary tabs (Favorites/Markets/Copy) switch content sections

### 4.2 Data Display Patterns
- **Three-column market row**: Name+Volume | Price | Change%
- **Color-coded directional data**: Green=positive, Red/Pink=negative, Gray=neutral
- **Abbreviated numbers**: "£17.7M", "1.2B" for large values
- **Dual-line price**: Primary price + fiat equivalent
- **Leverage badge**: Inline small green text badge

### 4.3 Input & Form Patterns
- **Search-as-you-type**: Debounced instant filtering
- **Chip-based recent searches**: Horizontal scrollable, removable

### 4.4 Feedback & Confirmation Patterns
- **Haptic on favorite toggle**: Subtle vibration
- **Sort animation**: Smooth list reordering

### 4.5 Gesture Patterns
- **Pull-to-refresh**: Standard iOS pull-to-refresh on market list
- **Horizontal scroll**: Category pills, top movers carousel
- **Swipe-to-action**: Left swipe on row reveals quick actions (not prominently used on OKX market)

---

## 5. Design Strengths & Weaknesses

### Strengths (directly reusable)
1. **3-tier tab hierarchy** (Primary > Product > Category): Clear progressive filtering -> **Adopt directly**
2. **Sort popover design**: Minimal, non-modal, dismiss on outside tap -> **Adopt directly**
3. **Search with product tabs**: Allows searching across Spot/Futures/Margin in one view -> **Adopt directly**
4. **Leverage badge inline**: Small unobtrusive indicator -> **Adopt for product-type indicators**
5. **Elevated center Trade button**: Creates visual hierarchy for most-used action -> **Adopt for tab bar**

### Weaknesses (improvement opportunities)
1. **No sparkline in market rows**: Binance shows mini charts; OKX only shows numbers -> **Add sparklines for ZR**
2. **No exchange indicator**: OKX is single-exchange so no need, but ZR multi-exchange requires this -> **Add exchange badge**
3. **Category pills are crypto-only**: No asset class switching -> **Need asset class switcher for ZR**
4. **Light mode only on Home**: Inconsistent - Trade screens are dark -> **ZR should default dark mode globally**
5. **Turnover default sort confusing**: Users may prefer Volume or Market Cap -> **Default to 24h Volume for ZR**

### Missing Features (innovation opportunity for ZR)
1. **Multi-asset class switcher**: No ability to see Stocks/Forex in same interface
2. **Cross-market watchlist**: Can't mix BTC + AAPL + EUR/USD in one favorites list
3. **Trading hours indicator**: No indication of whether an asset is currently tradeable
4. **Risk level indicator**: No visual indication of asset volatility/risk level
5. **Price alert inline**: No quick way to set price alert from market list

---

## 6. ZR Securities Adaptation Recommendations

### 6.1 Direct Adoption

| Pattern | Source | Rationale |
|---------|--------|-----------|
| 3-tier tab hierarchy | OKX Home | Proven progressive filtering; high information density handled well |
| Sort popover | OKX 013_Sorting | Minimal, efficient sort UI |
| Search overlay with product tabs | OKX 008_Searching | Full-screen search with categorized results |
| Favorite star toggle | OKX 011_Editing | Standard pattern users expect |
| Pull-to-refresh | OKX standard | Essential for real-time data apps |

### 6.2 Modification Required

| Pattern | Original (OKX) | ZR Version | Rationale |
|---------|----------------|------------|-----------|
| Category tabs | "All/Top/Layer1/Layer2/Meme" | "Favorites/Hot/Gainers/Losers/Volume/New" | ZR targets broader audience, simpler categories |
| Product tabs | "Crypto/Spot/Futures/Options" | **Asset Class Switcher** (Crypto/Stocks/Forex/Commodities) | ZR is multi-market broker |
| Market row | No exchange info | Add exchange badge (HashKey/Bullish/OSL/VDX) | Multi-exchange transparency |
| Market row | No sparkline | Add 7-day sparkline chart | Visual trend indication, learnt from Binance |
| Tab bar | OKX/Discover/Trade/Grow/Assets | Markets/Trade/Portfolio/Assets/More | Simplified for ZR's scope |
| Light mode default | Light on Home | Dark mode default globally | Professional trading aesthetic |

### 6.3 New Design Needed

| Requirement | Why New | Design Direction |
|-------------|---------|-----------------|
| Asset Class Switcher | No competitor has multi-asset in one app | Segmented control above category tabs: [Crypto][Stocks][Forex][Commodities] |
| Trading Hours Badge | Stocks have sessions, crypto 24/7 | Small indicator: green dot = open, gray = closed, with next open time |
| Cross-Asset Favorites | No competitor allows mixed asset watchlist | Favorites list with asset class icon prefix on each row |
| Risk Level Indicator | OKX shows no risk indication | Small volatility badge (Low/Med/High) based on 30-day realized vol |

### 6.4 Compliance Considerations

| SFC Requirement | Design Implication | Implementation |
|----------------|-------------------|----------------|
| Risk disclosure for virtual assets | Must show near price/performance data | Subtle banner at top of market list: "Virtual assets are high risk" |
| Licensed product distinction | Must differentiate licensed vs unlicensed | Only show SFC-licensed exchange products |
| Price data attribution | Data source must be clear | Small "Data: [Exchange Name]" text in sort header area |
| Past performance disclaimer | Near any change% data | Footer text in market list: "Past performance is not indicative of future results" |

---

## 7. v0 Generation Hints

### Layout Blueprint
```
┌──────────────────────────────────────┐ 390px
│ Status Bar (44px)                    │
├──────────────────────────────────────┤
│ Nav: [Logo] ZR Securities    [Q][Bell]│ 44px
├──────────────────────────────────────┤
│ [Crypto] [Stocks] [Forex] [Cmdty]   │ 40px - Asset Class Switcher
├──────────────────────────────────────┤
│ Favorites | Hot | Gainers | Losers..│ 36px - Category Tabs (h-scroll)
├──────────────────────────────────────┤
│ Name  | Price      | 24h Change ▼  │ 32px - Sort Header
├──────────────────────────────────────┤
│ [Icon] BTC/USDT   $67,234  [+2.3%] │ 72px - Market Row
│ [HK]  Vol: 1.2B   [sparkline]      │
├──────────────────────────────────────┤
│ [Icon] ETH/USDT   $3,456   [-1.1%] │ 72px
│ [HK]  Vol: 890M   [sparkline]      │
├──────────────────────────────────────┤
│ ... more rows ...                    │
├──────────────────────────────────────┤
│ [Markets] [Trade] [Orders] [Assets] │ 83px - Tab Bar
└──────────────────────────────────────┘
```

### Key Components for v0
- **Asset Class Switcher**: Segmented control, 4 segments, active = Brand Blue bg + white text, inactive = transparent + secondary text, 40px height, 12px horizontal padding
- **Market Row**: 72px height, 16px horizontal padding. Left: 32px coin icon circle + pair name (15px semibold) + exchange badge pill (10px, colored). Center: Price mono 15px + volume 13px gray. Right: Change% badge (rounded-md, 13px, green/red bg + white text) + sparkline (48x24px)
- **Exchange Badge**: 20px height pill, 8px horizontal padding, 10px font, rounded-full. Colors: HashKey=#2962FF, Bullish=#00BFA5, OSL=#FF6D00, VDX=#7C4DFF

### Interaction Specifications
- Tap row -> navigate to /symbol/[id]
- Tap star -> toggle favorite with optimistic UI update
- Tap sort column -> cycle asc/desc/default
- Pull down -> refresh with loading spinner
- Tap search icon -> show search overlay with autofocus
- Swipe between asset classes -> switch tab content

### Data Mock Requirements
- 20+ trading pairs with realistic prices (BTC ~$67K, ETH ~$3.4K, SOL ~$178)
- 24h change range: -8% to +12%
- Volume: "$100M" to "$2.5B"
- Exchange distribution: HashKey (60%), Bullish (20%), OSL (15%), VDX (5%)
- Sparkline: 7-day price array normalized to [0,1] range

---

*Generated by ZR Competitive Design Analysis Skill v1.0*
