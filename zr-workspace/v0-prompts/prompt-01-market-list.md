# Market List Page -- ZR Securities Trading App

> This prompt generates a mobile-first React component for the ZR Securities (卓锐证券) trading app.

## Context
You are building a mobile-first crypto/securities trading app for ZR Securities (卓锐证券), a Hong Kong SFC-licensed multi-market broker. The app supports crypto, stocks, forex, and commodities trading across multiple exchanges (HashKey, Bullish, OSL, VDX).

Brand identity: Professional, trustworthy, "sober not pleasurable" -- prioritizes clarity and user protection over flashy animations.

**OKX Competitive Analysis Applied**: Adopted OKX's 3-tier tab hierarchy, sort popover, and pull-to-refresh patterns. Enhanced with sparklines (OKX weakness), exchange badges (ZR multi-exchange), and asset-class switcher (ZR innovation).

## Design System Tokens

### Colors (CSS Variables)
```css
.dark {
  --bg-primary: #0A0A0F;
  --bg-secondary: #12121A;
  --bg-tertiary: #1C1C28;
  --text-primary: #FFFFFF;
  --text-secondary: #8E8E9A;
  --text-tertiary: #4A4A5A;
  --brand-blue: #1A73E8;
  --success: #00C853;
  --danger: #FF1744;
  --warning: #FFB300;
  --border: #1E1E2E;
}
```

### Typography
- Font: Inter (Google Fonts) for UI, JetBrains Mono for prices/numbers
- H1: 28px/bold, H2: 22px/semibold, H3: 18px/semibold
- Body: 15px/regular, Caption: 13px/regular
- Prices: JetBrains Mono 15px medium

### Spacing: 4px base grid (4, 8, 12, 16, 24, 32)
### Border Radius: 8px (small), 12px (medium), 16px (large)

## Screen Specifications
- Viewport: 390 x 844px (iPhone 15 Pro)
- Safe area top: 44px (status bar), bottom: 34px
- Tab bar: 83px total (49px + 34px safe)

## Page Layout (top to bottom, pixel-precise)

### Zone 1: Status Bar (44px)
- iOS-style: Time "9:41" left, signal/wifi/battery right
- Background: bg-primary

### Zone 2: Navigation Bar (44px)
- Left: ZR logo icon (24x24) + "ZR Securities" text (18px semibold)
- Right: Search icon (24px, tap -> search overlay) + Notification bell icon (24px)
- Background: bg-primary

### Zone 3: Asset Class Switcher (40px) -- ZR UNIQUE
- Segmented control with 4 segments: `[Crypto] [Stocks] [Forex] [Commodities]`
- Active segment: Brand Blue (#1A73E8) background, white text, rounded-lg
- Inactive: transparent background, text-secondary
- Container: bg-secondary, rounded-xl, mx-16px
- Switching animates the list content via cross-fade
- **From OKX analysis**: OKX uses Product tabs (Crypto/Spot/Futures/Options) in the same position -- ZR replaces with asset-class level to serve multi-market users

### Zone 4: Category Tabs (36px)
- Horizontal scroll pills: `Favorites | Hot | Gainers | Losers | Volume | New`
- Active pill: text-primary + brand-blue underline (2px)
- Inactive: text-secondary, no underline
- Scroll with momentum, shows 4.5 items visible
- 16px left padding, 8px gap between pills
- **From OKX analysis**: OKX uses "All/Top/Layer1/Layer2/Meme" -- ZR simplifies to user-relevant categories

### Zone 5: Sort Header (32px)
- Three columns: `Name` (left) | `Price` (center-right) | `24h Change` (right)
- Tappable for sort direction toggle (neutral -> asc -> desc -> neutral)
- Active sort column shows small arrow icon (up or down)
- Text: 13px caption, text-secondary
- **From OKX analysis**: Adopted OKX sort popover design (minimal, non-modal)

### Zone 6: Market List (remaining height, scrollable)
- Each market row: 72px height, 16px horizontal padding
- Lazy loads more items on scroll
- Pull-to-refresh at top

### Zone 7: Tab Bar (83px, fixed bottom)
- 4 tabs: Markets (active) | Trade | Orders | Assets
- Active: brand-blue icon + text, Inactive: text-secondary
- Background: bg-secondary with top border (border color)
- 34px bottom safe area included

## Components

### Market Row (72px height)
```
Layout (flex, items-center, px-16, gap-12):
┌──────────────────────────────────────────┐
│ [32px Icon] BTC/USDT        $67,234.50  │
│  [HashKey]  Vol: 1.2B  [sparkline] +2.3%│
└──────────────────────────────────────────┘
```
- Left column (flex-1):
  - Row 1: Coin icon (32x32 rounded-full, bg-secondary with symbol letter) + Pair name (15px semibold, text-primary)
  - Row 2: Exchange badge pill + Volume text (13px, text-secondary)
- Right column (items-end):
  - Row 1: Price (15px JetBrains Mono, text-primary)
  - Row 2: Sparkline (48x20px SVG) + Change% badge
- Change badge: rounded-md, px-6 py-2, 13px bold
  - Positive: bg-success/20, text-success
  - Negative: bg-danger/20, text-danger

### Exchange Badge
- Small pill: height 18px, px-6, rounded-full
- Font: 10px bold, white text
- Colors per exchange:
  - HashKey: #2962FF
  - Bullish: #00BFA5
  - OSL: #FF6D00
  - VDX: #7C4DFF

### Asset Class Switcher
- Container: flex, bg-secondary, rounded-xl, p-2, mx-16
- Each segment: flex-1, text-center, py-6, rounded-lg, 13px semibold
- Active: bg-brand-blue, text-white, transition 200ms
- Inactive: bg-transparent, text-secondary

### Search Overlay (triggered by search icon tap)
- Full-screen overlay with bg-primary
- Top: Search input (autofocus) + Cancel button
- Below input: Recent searches as horizontal chips (bg-secondary, rounded-full)
- Below chips: Trending section (numbered list 1-10)
- Results: Same market row component, filtered in real-time (debounce 200ms)
- **From OKX analysis**: Adopted OKX's fullscreen search with All/Spot/Futures tab pattern

### Sparkline
- SVG polyline, 48x20px
- Stroke: success color if positive 24h, danger color if negative
- Stroke-width: 1.5px
- No axes, no labels, pure trend line
- Data: 7-day normalized price array

## Mock Data
```javascript
const mockMarketData = [
  { id: "btc-usdt", symbol: "BTC", pair: "BTC/USDT", price: 67234.50, change: 2.34, volume: "1.2B", exchange: "HashKey", sparkline: [0.3,0.35,0.4,0.38,0.5,0.55,0.6] },
  { id: "eth-usdt", symbol: "ETH", pair: "ETH/USDT", price: 3456.78, change: -1.12, volume: "890M", exchange: "HashKey", sparkline: [0.6,0.55,0.5,0.48,0.45,0.42,0.4] },
  { id: "sol-usdt", symbol: "SOL", pair: "SOL/USDT", price: 178.92, change: 5.67, volume: "456M", exchange: "Bullish", sparkline: [0.2,0.25,0.35,0.4,0.5,0.65,0.8] },
  { id: "bnb-usdt", symbol: "BNB", pair: "BNB/USDT", price: 598.34, change: 0.89, volume: "234M", exchange: "HashKey", sparkline: [0.4,0.42,0.44,0.43,0.45,0.46,0.48] },
  { id: "xrp-usdt", symbol: "XRP", pair: "XRP/USDT", price: 0.6234, change: -3.45, volume: "567M", exchange: "OSL", sparkline: [0.7,0.65,0.6,0.55,0.5,0.45,0.4] },
  { id: "ada-usdt", symbol: "ADA", pair: "ADA/USDT", price: 0.4567, change: 1.23, volume: "123M", exchange: "VDX", sparkline: [0.4,0.42,0.45,0.43,0.46,0.48,0.5] },
  { id: "doge-usdt", symbol: "DOGE", pair: "DOGE/USDT", price: 0.1234, change: 8.90, volume: "789M", exchange: "HashKey", sparkline: [0.1,0.15,0.2,0.3,0.5,0.7,0.9] },
  { id: "dot-usdt", symbol: "DOT", pair: "DOT/USDT", price: 7.89, change: -0.56, volume: "98M", exchange: "Bullish", sparkline: [0.5,0.48,0.47,0.46,0.45,0.44,0.43] },
  { id: "avax-usdt", symbol: "AVAX", pair: "AVAX/USDT", price: 38.56, change: 4.12, volume: "167M", exchange: "HashKey", sparkline: [0.3,0.35,0.4,0.45,0.55,0.6,0.65] },
  { id: "link-usdt", symbol: "LINK", pair: "LINK/USDT", price: 14.23, change: -2.34, volume: "87M", exchange: "OSL", sparkline: [0.6,0.55,0.5,0.48,0.45,0.4,0.38] },
];
```

## Interactions
- **Tap market row**: Navigate to /symbol/[id] (symbol detail page)
- **Tap star icon on row**: Toggle favorite (optimistic UI, haptic feedback)
- **Tap sort column header**: Cycle through asc/desc/neutral with smooth list reorder animation
- **Tap search icon**: Show fullscreen search overlay with autofocus
- **Pull down on list**: Refresh with loading spinner
- **Switch asset class**: Cross-fade animate list content
- **Horizontal scroll category pills**: Momentum scroll with 4.5 visible items
- **Swipe left on row**: Reveal "Trade" and "Alert" quick action buttons (from OKX analysis)

## States to Show
- [x] Default / populated state (20+ market pairs)
- [x] Loading skeleton (shimmer effect on rows)
- [x] Empty state ("No pairs found in this category")
- [x] Search active state
- [x] Dark mode (default and only mode for v1)

## Technical Constraints
- React functional component with hooks (useState, useEffect)
- Tailwind CSS utility classes only
- No external API calls -- use hardcoded mock data
- No localStorage -- React state only
- Lucide React for icons
- Mobile-first responsive, centered in desktop viewport as phone mockup
- All touch targets >= 44px
- JetBrains Mono font for all price/number displays

---

*Generated by ZR v0 Prompt Generator Skill v1.0 -- Based on OKX competitive analysis of 36 screenshots (flows 003, 008, 010-013)*
