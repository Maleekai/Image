# Global Search — ZR Securities Trading App

## Context
The Global Search is a full-screen overlay that provides instant access to any asset, feature, or page in the app. It follows OKX's proven search pattern (DA-010): full-screen takeover, auto-focus input, real-time results with debounce. Extended for ZR's multi-asset, multi-exchange context with trending topics and recent searches.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Background: #FFFFFF / Surface: #F8F9FA
- Search bg: #F0F0F0 (input field)
- Trending: #EA4335 (hot badge)

**Typography:**
- Inter: headings, labels, body
- JetBrains Mono: prices, numbers

**Spacing:** 8px grid

## Page Layout

```
[Status Bar - 47px]

[Search Header - 56px]
  └─ Search input (auto-focus) | Cancel button

[Search Content - fluid]
  ├─ [Before typing] Recent Searches + Trending
  └─ [While typing] Live Results (debounce 300ms)
```

## Components

### Search Header (56px)
- **Search Input:** 48px height, #F0F0F0 bg, 24px radius pill, 16px left padding
  - Placeholder: "Search coins, stocks, forex..." (Inter 14px, #9AA0A6)
  - Auto-focus on mount (keyboard appears immediately)
  - Clear button (X, 20px) appears when text entered
- **Cancel:** "Cancel" text button (Inter 14px, #1A73E8), tap → dismiss overlay

### Before Typing: Recent Searches
- **Section header:** "Recent" (Inter 13px bold, #757575) + "Clear All" link (Inter 12px, #9AA0A6)
- **Layout:** Horizontal pill chips, wrap to 2 rows max
- **Per chip (32px):**
  - Text: Inter 12px, #333333
  - X icon: 12px, right side, tap → remove this search
- **Max:** 10 recent searches
- **Mock:** BTC, AAPL, ETH/USDT, Gold, EUR/USD, NVDA, SOL

### Before Typing: Trending
- **Section header:** "Trending 🔥" (Inter 13px bold)
- **Layout:** Numbered list, 10 items max
- **Per row (48px):**
  - Rank number: JetBrains Mono 14px bold (#1A73E8 for top 3, #757575 rest)
  - Token icon: 24px
  - Symbol: Inter 13px bold
  - Name: Inter 11px, #757575
  - Price: JetBrains Mono 12px, right
  - Change: JetBrains Mono 11px, green/red pill, right
- **Data:** Server-side trending based on search volume + price movement

### Live Results (during typing)
- **Debounce:** 300ms after last keystroke
- **Sections:** Results grouped by category with dividers
- **Categories (in order):**
  1. **Assets** (coins, stocks, forex, commodities)
  2. **Pages** (Deposit, Withdraw, Earn, Settings, etc.)

#### Asset Result Row (64px)
- Icon: 36px
- Left: Symbol (Inter 14px bold) + Name (Inter 11px, #757575)
- Badge: Asset class pill (10px) — "Crypto" / "Stock" / "Forex" / "Commodity"
- Exchange badge: (10px pill, color-coded) — shows which exchange has this asset
- Right: Price (JetBrains Mono 13px) + Change (JetBrains Mono 11px, green/red)
- Tap → Symbol Detail page

#### Page Result Row (48px)
- Icon: 24px (feature icon, gray)
- Label: "Deposit" / "Withdraw" / "Settings" / "AI Companion" etc. (Inter 14px)
- Description: "充值资产到您的账户" (Inter 11px, #9AA0A6)
- Tap → Navigate to that page

### No Results State
- Icon: 🔍 (48px, gray)
- Text: "No results for '{query}'" (Inter 14px, #757575)
- Suggestion: "Try searching for a coin symbol (BTC), stock ticker (AAPL), or currency pair (EUR/USD)"

## Mock Data

```typescript
interface SearchResult {
  assets: Array<{
    symbol: string;
    name: string;
    assetClass: 'crypto' | 'stock' | 'forex' | 'commodity';
    exchange: string;
    price: number;
    change24h: number;
    iconUrl: string;
  }>;
  pages: Array<{
    id: string;
    label: string;
    description: string;
    icon: string;
    route: string;
  }>;
}

const mockTrending = [
  { rank: 1, symbol: 'BTC', name: 'Bitcoin', price: 67234, change: 2.34 },
  { rank: 2, symbol: 'ETH', name: 'Ethereum', price: 3456, change: 1.52 },
  { rank: 3, symbol: 'SOL', name: 'Solana', price: 142, change: -1.23 },
  { rank: 4, symbol: 'NVDA', name: 'Nvidia', price: 875, change: -2.31 },
  { rank: 5, symbol: 'AAPL', name: 'Apple', price: 192, change: 0.82 },
];

const mockPages = [
  { id: 'deposit', label: 'Deposit', description: '充值资产', icon: '↓', route: '/deposit' },
  { id: 'withdraw', label: 'Withdraw', description: '提币', icon: '↑', route: '/withdraw' },
  { id: 'earn', label: 'Earn', description: '理财产品', icon: '📈', route: '/earn' },
  { id: 'settings', label: 'Settings', description: '设置', icon: '⚙️', route: '/settings' },
  { id: 'ai', label: 'AI Companion', description: '市场智能', icon: '✦', route: '/ai' },
  { id: 'heatmap', label: 'Heatmap', description: '市场热力图', icon: '🗺️', route: '/heatmap' },
];
```

## Interaction States

### Loading
- Spinner below search input during debounce

### Error
- "Search unavailable. Try again." + retry

## Implementation Notes
- Full-screen overlay with slide-up animation (300ms)
- Auto-focus with keyboard on mount
- Debounce search API calls (300ms)
- Store recent searches in localStorage (max 10)
- Trending: refresh every 5 minutes from API
- Fuzzy matching: search by symbol, name, or alias

## Competitive Reference
- **OKX Search:** Full-screen overlay with trending + recent + live results — proven pattern
- **Binance Search:** Similar but includes social content (posts, creators) — ZR skips social
- **ZR Differentiator:** Multi-asset search (crypto + stocks + forex + commodities in one), page search (navigate to features directly)
