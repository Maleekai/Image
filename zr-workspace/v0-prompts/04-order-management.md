# Order Management — ZR Securities Trading App

## Context
The Order Management page provides a comprehensive view of all user orders (open, filled, cancelled) with filtering, sorting, and cancellation capabilities. Users can track order status, fill percentage, and execution details across multiple exchanges.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Success: #34A853 (buy/filled)
- Danger: #EA4335 (sell/cancelled)
- Warning: #FBBC04 (partial/pending)
- Neutral: #5F6368 (secondary text)
- Background: #FFFFFF
- Surface: #F8F9FA
- Disabled: #D3D3D3
- Status open: #1A73E8
- Status partial: #FBBC04
- Status pending: #D3D3D3

**Typography:**
- Inter: labels, status badges, metadata
- JetBrains Mono: prices, amounts, order IDs

**Spacing:** 8px grid

## Page Layout

```
[Header - 56px]
  └─ "Orders" title | Settings icon

[Tab Bar - 36px]
  └─ [Open][Filled][Cancelled][All] (sticky)

[Filter Row - 44px]
  └─ Pair selector | Exchange filter | Date range

[Order List - fluid]
  └─ Order cards (88px each, scrollable)

[Empty State - centered, if no orders]
  └─ Illustration (80px) + message + "Start Trading" button

[Bottom Tab Bar - 83px]
  └─ 5 navigation items
```

## Components

### Header
- **Dimensions:** 56px height
- **Layout:**
  - Title "Orders" (left, Inter 16px bold)
  - Settings icon (24px, right, tap opens settings/preferences)
- **Background:** #FFFFFF with 1px bottom border #E8EAED
- **Padding:** 16px

### Tab Bar
- **Type:** Segmented tabs [Open][Filled][Cancelled][All]
- **Dimensions:** 36px height, full width, sticky below header
- **Styling:**
  - Inactive: transparent, #5F6368 text, Inter 12px medium
  - Active: underline #1A73E8 (2px), #1A73E8 text
  - Padding: 0 16px per tab
  - Gap: 16px between tabs
- **Behavior:** Tap to filter orders by status; counts badge on each tab (blue background, 10px height, Inter 9px)
- **Count badges:**
  - Open: number of open orders
  - Filled: total filled orders (last 30 days)
  - Cancelled: total cancelled orders (last 30 days)
  - All: total orders

### Filter Row
- **Dimensions:** 44px height, full width, sticky below tabs
- **Layout (3 sections, horizontally scrollable):**
  - Pair selector: dropdown, Inter 12px, "All Pairs" placeholder
  - Exchange filter: dropdown, Inter 12px, "All Exchanges" placeholder
  - Date range: picker, Inter 12px, "Last 30 Days" placeholder
- **Styling:**
  - Background: #F8F9FA
  - Border: 1px #E8EAED, border radius 6px
  - Height: 32px each
  - Padding: 8px 12px
  - Text color: #5F6368
  - Focused: blue border #1A73E8
- **Behavior:**
  - Dropdowns show list of options (modal or popover)
  - Date range picker shows calendar (or date range input)
  - Filters apply immediately (no "Apply" button)
  - Show active filter count badge if >1 filter applied

### Order Card
- **Dimensions:** 88px height, 16px margin horizontal/bottom, border radius 8px
- **Background:** #FFFFFF with 1px border #E8EAED
- **Layout:**
  - Left border: 4px, color-coded (green for buy, red for sell)
  - Content area: 16px padding
  - 3-row layout inside:
    - Row 1: Pair name (left) | Order type (right)
    - Row 2: Price (left) | Amount (right)
    - Row 3: Fill % (left, progress bar) | Exchange badge (center) | Cancel button (right)
- **Row 1:**
  - Pair: Inter 14px bold, #000000 (e.g., "BTC/USDT")
  - Order type: Inter 10px, background pill (#F8F9FA), #5F6368 text (e.g., "Limit")
- **Row 2:**
  - Price: JetBrains Mono 12px, #000000 (e.g., "28,456.75 USDT")
  - Amount: JetBrains Mono 12px, #5F6368 (e.g., "1.25 BTC")
- **Row 3:**
  - Fill %: Inter 11px bold, #5F6368 (e.g., "75% filled"), with progress bar below
  - Progress bar: 60px width, 4px height, background #E8EAED, filled portion colored (#34A853 for buy, #EA4335 for sell)
  - Exchange badge: 20px height, colored pill (HashKey=#1A73E8, Bullish=#9C27B0, OSL=#FF9800, VDX=#4CAF50), white text, Inter 9px bold
  - Cancel button: only visible for Open orders, 28px × 28px, #EA4335 background, white X icon, tap to cancel order
- **Status Badge (overlay, top-right corner):**
  - 20px × 20px, pill-shaped background
  - Status colors: Open=#1A73E8, Partial=#FBBC04, Pending=#D3D3D3
  - Text: Inter 9px bold, white
- **Behavior:**
  - Tap card body to open order details modal
  - Tap cancel button to cancel order (shows confirmation modal)

### Order Details Modal
- **Dimensions:** Full screen overlay, 340px centered card
- **Header:** Pair name + Status badge (top)
- **Content (scrollable):**
  - Order ID (JetBrains Mono 10px, copiable)
  - Type | Direction (grid 2 columns)
  - Price | Amount (grid 2 columns)
  - Fill % with detailed progress (e.g., "0.75 / 1.25 BTC filled")
  - Exchange badge
  - Created time (Inter 11px, #5F6368)
  - Filled time (if completed)
  - Fee details (e.g., "0.1% taker fee = 35.57 USDT")
- **Buttons:**
  - Close (top-right, X icon)
  - Cancel button (if Open status)
- **Styling:**
  - Scroll area: 280px height, white background
  - Border radius: 12px
  - Padding: 20px

### Cancel Order Modal
- **Trigger:** Tap cancel button on card
- **Dimensions:** 280px centered card
- **Content:**
  - Warning icon (24px, #EA4335)
  - Message: "Cancel Order?" (Inter 14px bold)
  - Details: "BTC/USDT Limit 28,456.75 - 1.25 BTC" (Inter 12px, #5F6368)
  - Confirmation: "This action cannot be undone." (Inter 11px, warning color)
- **Buttons (2 columns, 40px height):**
  - "Keep Order" (left, #F8F9FA background, #5F6368 text)
  - "Cancel Order" (right, #EA4335 background, white text)
- **Behavior:**
  - Tap "Keep Order" closes modal
  - Tap "Cancel Order" submits cancellation, removes card from list with fade animation, shows success toast

### Empty State
- **Trigger:** No orders in selected tab
- **Dimensions:** Centered on screen, 200px width
- **Layout:**
  - Illustration: 80px × 80px SVG (briefcase icon or trading chart)
  - Title: "No Orders Yet" (Inter 16px bold)
  - Message: "When you place your first order, it will appear here." (Inter 12px, #5F6368)
  - Button: "Start Trading" (44px height, #1A73E8 background, white text)
- **Behavior:** Tap "Start Trading" navigates to Market List or Trade Order page

### Empty Filter State
- **Trigger:** Filters applied but no matching orders
- **Message:** "No orders found. Try adjusting your filters." (Inter 12px, #5F6368)
- **Styling:** Centered, 12px padding

### Bottom Tab Bar
- **Dimensions:** 83px height (including safe area)
- **Items:** 5 icons with labels
  - Markets (home icon)
  - Watchlist (star icon)
  - Trade (chart icon)
  - Orders (list icon) ← active
  - Account (user icon)
- **Styling:**
  - Active: #1A73E8, icon + label
  - Inactive: #9AA0A6
  - Font: Inter 10px
  - Icon: 24px

## Mock Data

```typescript
interface Order {
  id: string;
  pair: string;
  symbol: string;
  direction: 'buy' | 'sell';
  orderType: 'limit' | 'market' | 'stop-limit';
  exchange: 'HashKey' | 'Bullish' | 'OSL' | 'VDX';
  price: number;
  amount: number;
  amountFilled: number;
  status: 'open' | 'partial' | 'filled' | 'cancelled' | 'pending';
  fillPercent: number;
  fee: number;
  createdAt: Date;
  filledAt?: Date;
  cancelledAt?: Date;
}

const mockOpenOrders: Order[] = [
  {
    id: 'ORD-2026-001',
    pair: 'BTC/USDT',
    symbol: 'BTC',
    direction: 'buy',
    orderType: 'limit',
    exchange: 'HashKey',
    price: 28456.75,
    amount: 1.25,
    amountFilled: 0.75,
    status: 'partial',
    fillPercent: 60,
    fee: 21.34,
    createdAt: new Date(Date.now() - 3600000),
    filledAt: undefined
  },
  {
    id: 'ORD-2026-002',
    pair: 'ETH/USDT',
    symbol: 'ETH',
    direction: 'sell',
    orderType: 'limit',
    exchange: 'Bullish',
    price: 3456.80,
    amount: 5.5,
    amountFilled: 0,
    status: 'open',
    fillPercent: 0,
    fee: 0,
    createdAt: new Date(Date.now() - 7200000)
  },
  {
    id: 'ORD-2026-003',
    pair: 'SOL/USDT',
    symbol: 'SOL',
    direction: 'buy',
    orderType: 'limit',
    exchange: 'OSL',
    price: 142.35,
    amount: 50,
    amountFilled: 0,
    status: 'pending',
    fillPercent: 0,
    fee: 0,
    createdAt: new Date(Date.now() - 1800000)
  }
];

const mockFilledOrders: Order[] = [
  {
    id: 'ORD-2026-004',
    pair: 'AAPL',
    symbol: 'AAPL',
    direction: 'buy',
    orderType: 'market',
    exchange: 'VDX',
    price: 192.50,
    amount: 10,
    amountFilled: 10,
    status: 'filled',
    fillPercent: 100,
    fee: 19.25,
    createdAt: new Date(Date.now() - 86400000),
    filledAt: new Date(Date.now() - 86395000)
  },
  {
    id: 'ORD-2026-005',
    pair: 'EUR/USD',
    symbol: 'EUR',
    direction: 'sell',
    orderType: 'limit',
    exchange: 'HashKey',
    price: 1.0892,
    amount: 5000,
    amountFilled: 5000,
    status: 'filled',
    fillPercent: 100,
    fee: 5.45,
    createdAt: new Date(Date.now() - 172800000),
    filledAt: new Date(Date.now() - 172790000)
  }
];

const mockCancelledOrders: Order[] = [
  {
    id: 'ORD-2026-006',
    pair: 'TSLA',
    symbol: 'TSLA',
    direction: 'buy',
    orderType: 'limit',
    exchange: 'OSL',
    price: 245.75,
    amount: 25,
    amountFilled: 0,
    status: 'cancelled',
    fillPercent: 0,
    fee: 0,
    createdAt: new Date(Date.now() - 259200000),
    cancelledAt: new Date(Date.now() - 259100000)
  }
];

const mockAllOrders = [
  ...mockOpenOrders,
  ...mockFilledOrders,
  ...mockCancelledOrders
];

const mockOrderTabCounts = {
  open: 3,
  filled: 15,
  cancelled: 8,
  all: 26
};

const mockExchangeColors = {
  'HashKey': '#1A73E8',
  'Bullish': '#9C27B0',
  'OSL': '#FF9800',
  'VDX': '#4CAF50'
};
```

## Interaction Requirements

1. **Tab Navigation:** Tap tabs to filter orders by status. Show count badges.
2. **Filtering:**
   - Pair selector: dropdown list (BTC, ETH, SOL, AAPL, TSLA, EUR/USD, GOLD, All)
   - Exchange filter: dropdown list (HashKey, Bullish, OSL, VDX, All)
   - Date range: preset options (Last 7 Days, Last 30 Days, Last 90 Days, All Time) or custom date picker
3. **Card Tap:** Opens order details modal with full order info.
4. **Cancel Button:** Shows confirmation modal; confirms cancellation and removes card.
5. **Empty State:** Show when no orders exist; "Start Trading" navigates to Market List.
6. **Empty Filter:** Show when filters return no results.
7. **Order Updates:** Real-time updates for fill %, status changes (simulate websocket).
8. **Refresh:** Pull-to-refresh updates order list and fills.
9. **Tab Bar:** Tapping items navigates to respective pages.
10. **Copy Order ID:** Long-press order ID in details modal to copy to clipboard.

## Constraints

- Viewport: 390px width
- Font: Inter (UI), JetBrains Mono (numbers/IDs)
- Styling: Tailwind CSS only
- Card colors: Buy=green left border, Sell=red left border (4px)
- Status badge colors: Open=#1A73E8, Partial=#FBBC04, Pending=#D3D3D3, Filled=#34A853, Cancelled=#EA4335
- Exchange badges: Colored pills with white text (HashKey=blue, Bullish=purple, OSL=orange, VDX=green)
- Progress bars: match order direction (buy=green, sell=red)
- Modals: centered, semi-transparent overlay (60% opacity)
- Animations: fade-in/out for card removal, 200ms duration
- Accessibility: ARIA labels for buttons, semantic HTML for lists
- Performance: Virtual scrolling for 100+ orders
- Real-time: Simulate websocket updates for status and fill changes
- Safe area: 16px padding all sides, 83px bottom for tab bar clearance
- Decimals: Prices (8dp), amounts (8dp), fees (4dp)
