# Design System & Shared Components -- ZR Securities Trading App

> This prompt generates the foundational design system: layout shell, navigation, shared components, and design tokens.

## Context
This is the base layer that all 8 page-level prompts depend on. It establishes the mobile shell (iPhone 15 Pro frame), tab bar, navigation bar, status bar, and all shared reusable components.

**OKX Analysis Codified**: Color system derived from OKX dark mode analysis. Typography matches OKX's hierarchy. Tab bar pattern adopted (DA-005 elevated trade icon). All ZR-unique components (asset class switcher, exchange badge, cooling-off timer, risk disclosure) defined here.

## Design Tokens (Complete)

### Colors
```css
:root {
  --brand-blue: #1A73E8;
  --brand-blue-light: #4A90D9;
  --brand-blue-dark: #1557B0;
  --success: #00C853;
  --success-light: rgba(0, 200, 83, 0.15);
  --danger: #FF1744;
  --danger-light: rgba(255, 23, 68, 0.15);
  --warning: #FFB300;
  --warning-light: rgba(255, 179, 0, 0.15);
}
.dark {
  --bg-primary: #0A0A0F;
  --bg-secondary: #12121A;
  --bg-tertiary: #1C1C28;
  --text-primary: #FFFFFF;
  --text-secondary: #8E8E9A;
  --text-tertiary: #4A4A5A;
  --border: #1E1E2E;
  --border-light: #2A2A3A;
}
```

### Exchange Colors
```css
:root {
  --exchange-hashkey: #2962FF;
  --exchange-bullish: #00BFA5;
  --exchange-osl: #FF6D00;
  --exchange-vdx: #7C4DFF;
}
```

### Typography Scale
| Token | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| --text-h1 | 28px | 700 | 34px | Inter |
| --text-h2 | 22px | 600 | 28px | Inter |
| --text-h3 | 18px | 600 | 24px | Inter |
| --text-body | 15px | 400 | 22px | Inter |
| --text-caption | 13px | 400 | 18px | Inter |
| --text-small | 11px | 400 | 14px | Inter |
| --text-mono | 15px | 500 | 20px | JetBrains Mono |
| --text-mono-lg | 28px | 700 | 34px | JetBrains Mono |

### Spacing (4px grid)
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
```

### Border Radius
```
--radius-sm: 8px
--radius-md: 12px
--radius-lg: 16px
--radius-xl: 20px
--radius-full: 9999px
```

## Shared Components

### 1. MobileShell (Container)
- Centers content in a 390x844px frame on desktop
- bg-secondary behind frame, bg-primary for frame
- Rounded-3xl on desktop with subtle shadow
- Full viewport on actual mobile devices
- Contains: StatusBar (top) + Content (middle, flex-1) + TabBar (bottom)

### 2. StatusBar (44px)
- Fixed top, z-50
- Left: Time "9:41" (14px semibold)
- Right: Signal + WiFi + Battery icons (16px)
- Static display (no real-time updates needed for prototype)

### 3. NavBar (44px)
- Variants: "page" (with title) | "detail" (with back button + title + actions)
- Props: title, showBack, rightActions[], onBack
- Back arrow: ChevronLeft icon, 24px, touch target 44x44
- Title: 18px semibold, center-aligned
- Right actions: array of icon buttons

### 4. TabBar (83px = 49px bar + 34px safe area)
- 4 tabs: Markets | Trade | Orders | Assets
- Each tab: icon (24px) + label (10px) stacked vertically
- Active: brand-blue icon + text
- Inactive: text-tertiary icon + text
- Background: bg-secondary, border-t border-color
- Trade tab: slightly larger icon or emphasized
- Uses Next.js Link for navigation

### 5. ExchangeBadge
- Props: exchange ("HashKey" | "Bullish" | "OSL" | "VDX"), size ("sm" | "md")
- sm: height 18px, px-6, text-[10px]
- md: height 22px, px-8, text-[12px]
- Colors mapped from --exchange-* tokens
- White text, rounded-full
- Display: inline-flex, items-center

### 6. PriceDisplay
- Props: value, decimals, size ("sm" | "md" | "lg"), colored
- Font: JetBrains Mono
- sm: 13px, md: 15px, lg: 28px
- Formats with commas: "$67,234.50"
- colored: green if context is positive, red if negative

### 7. ChangeBadge
- Props: value (number, percentage), size ("sm" | "md")
- Positive: bg-success/15, text-success
- Negative: bg-danger/15, text-danger
- Zero: bg-secondary, text-secondary
- Rounded-md, px-6, py-1
- Format: "+2.34%" or "-1.12%"
- Prefix "+" for positive, "-" for negative

### 8. Sparkline
- Props: data (number[]), color ("success" | "danger"), width, height
- SVG polyline, no axes or labels
- Stroke-width: 1.5px
- Normalized to fill available space
- Green if last > first, red if last < first

### 9. AssetClassSwitcher
- Props: activeClass, onChange
- 4 segments: Crypto | Stocks | Forex | Commodities
- Container: bg-secondary, rounded-xl, p-2, mx-16
- Active: bg-brand-blue, text-white, rounded-lg
- Inactive: transparent, text-secondary
- Transition: 200ms ease

### 10. RiskDisclosure
- Props: variant ("banner" | "inline" | "modal")
- banner: Full-width, bg-warning/10, border-l-4 border-warning, px-16, py-8
- inline: Small text with warning icon, 11px, text-secondary
- modal: Center-aligned warning card for confirmation sheets
- Text: "Virtual assets are highly volatile. You may lose all of your investment."

### 11. SegmentedControl
- Props: options[], activeIndex, onChange
- Container: bg-secondary, rounded-xl, p-2
- Active segment: bg-brand-blue (or custom bg), text-white, rounded-lg
- Inactive: transparent, text-secondary
- Equal width segments

### 12. BottomSheet
- Props: open, onClose, title, children
- Overlay: bg-black/60, z-40
- Sheet: bg-secondary, rounded-t-3xl, z-50
- Drag handle: 40x4, bg-tertiary, rounded-full, center, mt-8
- Title: 18px semibold, mx-16, mt-16
- Slide-up animation from bottom
- Tap overlay or drag down to dismiss

### 13. CoinIcon
- Props: symbol ("BTC" | "ETH" | ...), size (32 | 40)
- Rounded-full, bg-tertiary
- Displays first 1-2 letters of symbol
- Color: mapped from a static hash of symbol name
- Font: 14px bold, centered

## Mock Data Schema (shared across all pages)
```typescript
interface TradingPair {
  id: string;
  symbol: string;
  pair: string;
  price: number;
  change: number;
  volume: string;
  exchange: "HashKey" | "Bullish" | "OSL" | "VDX";
  sparkline: number[];
  assetClass: "crypto" | "stocks" | "forex" | "commodities";
}

interface OrderBookLevel {
  price: number;
  amount: number;
  total: number;
  depth: number; // 0-1 normalized
}

interface Order {
  id: string;
  pair: string;
  exchange: string;
  type: "Limit" | "Market" | "Stop-Limit";
  side: "Buy" | "Sell";
  price: number;
  amount: number;
  filled: number;
  total: number;
  time: string;
  status: "open" | "filled" | "cancelled";
}

interface Asset {
  coin: string;
  name: string;
  balance: number;
  value: number;
  change: number;
  exchange: string;
}
```

## File Structure
```
app/
  layout.tsx          -- RootLayout with fonts, dark mode, metadata
  page.tsx            -- Redirect to /markets
  markets/page.tsx    -- Market list page (prompt-01)
  symbol/[id]/page.tsx -- Symbol detail page (prompt-02)
  trade/page.tsx      -- Trade order page (prompt-03)
  orders/page.tsx     -- Order management page (prompt-04)
  assets/page.tsx     -- Assets overview page (prompt-05)
  deposit/page.tsx    -- Deposit page (prompt-06)
  withdraw/page.tsx   -- Withdraw page (prompt-07)
  onboarding/page.tsx -- Onboarding flow (prompt-08)
  globals.css         -- All CSS tokens

components/
  layout/
    mobile-shell.tsx  -- iPhone frame container
    status-bar.tsx    -- iOS status bar simulation
    nav-bar.tsx       -- Top navigation bar
    tab-bar.tsx       -- Bottom tab bar
  shared/
    exchange-badge.tsx
    price-display.tsx
    change-badge.tsx
    sparkline.tsx
    risk-disclosure.tsx
    coin-icon.tsx
  ui/
    segmented-control.tsx
    bottom-sheet.tsx
  market/
    asset-class-switcher.tsx
    category-tabs.tsx
    market-row.tsx
    search-overlay.tsx
  trading/
    candlestick-chart.tsx
    order-book.tsx
    cooling-off-modal.tsx

lib/
  utils.ts            -- cn helper, formatPrice, formatChange
  mock-data.ts        -- All mock data centralized
```

---

*Generated by ZR v0 Prompt Generator Skill v1.0 -- Foundation for all page prompts*
