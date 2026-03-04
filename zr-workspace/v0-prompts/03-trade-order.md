# Trade Order — ZR Securities Trading App

## Context
The Trade Order page enables users to execute buy/sell orders with configurable order types (Limit/Market/Stop-Limit), quantity, and price. SFC regulatory requirements include risk disclaimers and cooling-off periods for large orders. This page is critical for compliance and user protection.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Success: #34A853 (buy)
- Danger: #EA4335 (sell)
- Warning: #FBBC04 (alerts)
- Neutral: #5F6368 (secondary text)
- Background: #FFFFFF
- Surface: #F8F9FA
- Disabled: #D3D3D3

**Typography:**
- Inter: labels, inputs, buttons
- JetBrains Mono: prices, amounts, fees

**Spacing:** 8px grid

## Page Layout

```
[Header - 56px]
  └─ Close button | "New Order" title

[Buy/Sell Toggle - 44px]
  └─ Segmented control, 2 buttons

[Order Type Selector - 36px]
  └─ Tabs [Limit][Market][Stop-Limit]

[Form Section - fluid]
  └─ Price input (56px with +/- buttons)
  └─ Amount input (56px with unit toggle)
  └─ Quick percentage buttons (44px row)

[Order Summary Card - 120px]
  └─ Estimated total | Fee | Exchange badge

[Place Order Button - 52px]
  └─ Full-width, green/red

[Modals]
  └─ Cooling-off modal (if order > 20% portfolio)
  └─ SFC risk disclaimer modal (confirmation)
```

## Components

### Header
- **Dimensions:** 56px height
- **Layout:**
  - Close button (24px icon, top-left, tap dismisses page)
  - Title: "New Order" (center, Inter 16px bold)
  - Right padding: 16px (balances close button)
- **Background:** #FFFFFF with 1px bottom border #E8EAED

### Buy/Sell Toggle
- **Type:** Segmented control, 2 buttons
- **Dimensions:** Full width minus 32px padding, 44px height
- **Styling:**
  - Buy button: #34A853 background when active, white text
  - Sell button: #EA4335 background when active, white text
  - Inactive: #F8F9FA background, #5F6368 text
  - Border radius: 8px
  - Gap: 8px between buttons
- **Behavior:** Toggle direction; disables opposite-direction inputs

### Order Type Selector
- **Type:** Tab buttons [Limit][Market][Stop-Limit]
- **Dimensions:** Full width, 36px height
- **Styling:**
  - Inactive: transparent, #5F6368 text, Inter 12px
  - Active: underline #1A73E8, #1A73E8 text
- **Behavior:**
  - Limit: Show price input (enabled), amount input (enabled)
  - Market: Show amount input (enabled), price input (hidden/disabled with "Market Price" label)
  - Stop-Limit: Show both price inputs (trigger + limit), amount input

### Price Input Group
- **Dimensions:** 56px height, full width
- **Layout:**
  - Minus button: 36px × 36px, left, Inter 14px bold, #1A73E8
  - Price field: flex-grow, JetBrains Mono 16px, center-aligned, editable
  - Plus button: 36px × 36px, right, Inter 14px bold, #1A73E8
- **Border:** 1px #E8EAED, border radius 8px
- **Padding:** 8px horizontal (around buttons)
- **Behavior:**
  - +/- buttons adjust price by 50 USDT (or 0.1% for small prices)
  - Disabled for Market orders (show "Market Price" placeholder)
  - On input change, recalculate order summary

### Amount Input Group
- **Dimensions:** 56px height, full width
- **Layout:**
  - Amount field: flex-grow, JetBrains Mono 16px, left-aligned, editable
  - Unit toggle: 60px right side, Inter 10px bold, segmented [BTC][USDT]
- **Border:** 1px #E8EAED, border radius 8px
- **Padding:** 12px
- **Behavior:**
  - Toggle between asset amount (BTC) and fiat amount (USDT)
  - On amount change, recalculate estimated total
  - Unit toggle converts values intelligently

### Quick Percentage Buttons
- **Dimensions:** 44px height (5 pill buttons in row)
- **Labels:** 25% | 50% | 75% | 100%
- **Styling:**
  - Background: #F8F9FA
  - Text: Inter 12px bold, #1A73E8
  - Border radius: 20px (pill shape)
  - Padding: 8px 16px
  - Gap: 8px between buttons
  - Tap feedback: 10% opacity
- **Behavior:**
  - Calculates amount based on % of available balance
  - Updates amount input and order summary
  - Disabled if balance unknown

### Order Summary Card
- **Dimensions:** 120px height, full width, 16px padding
- **Background:** #F8F9FA, border radius 8px
- **Layout (3 rows):**
  - Row 1: "Estimated Total" (Inter 12px) | Value (JetBrains Mono 14px bold, #1A73E8)
  - Row 2: "Fee" (Inter 12px) | Value (JetBrains Mono 12px, #5F6368)
  - Row 3: "Exchange" (Inter 12px) | Badge (hashkey/bullish/osl/vdx, 20px height)
- **Gap:** 12px between rows
- **Calculation:**
  - Estimated Total = Price × Amount (for Limit) or spot price × Amount (for Market)
  - Fee = Estimated Total × 0.001 (0.1% taker fee)
  - Final Total = Estimated Total + Fee

### Place Order Button
- **Dimensions:** 52px height, full width
- **Styling:**
  - Buy orders: #34A853 background, white text
  - Sell orders: #EA4335 background, white text
  - Border radius: 8px
  - Font: Inter 14px bold
  - Disabled state: #D3D3D3 background, #9AA0A6 text
- **Behavior:**
  - Validates all fields (price, amount > 0)
  - Triggers cooling-off modal if order > 20% portfolio
  - Otherwise shows SFC risk disclaimer modal
  - Disabled if validation fails

### Cooling-Off Modal
- **Trigger:** Order value > 20% of estimated portfolio
- **Dimensions:** 320px wide, centered on screen
- **Header:** "Order Risk Check" (Inter 14px bold)
- **Content:**
  - Warning icon (28px, #FBBC04)
  - Message: "This order exceeds 20% of your estimated portfolio. Please review before proceeding."
  - Stats display (2 rows):
    - Order value: "HK$2,450,000" (JetBrains Mono 12px)
    - Portfolio: "~HK$12,000,000" (JetBrains Mono 12px)
  - Countdown: Large "28s" timer (JetBrains Mono 24px, #EA4335)
  - Timer text: "Auto-cancel in 28 seconds" (Inter 10px, #5F6368)
- **Buttons (2 columns, 44px height):**
  - "Wait" (left, #F8F9FA background, #1A73E8 text)
  - "Proceed" (right, #EA4335 background, white text)
- **Behavior:**
  - Countdown starts immediately (28 seconds)
  - If 28s expires, modal closes without action
  - Tap "Wait" to close modal, stay on page
  - Tap "Proceed" to show SFC risk disclaimer modal

### SFC Risk Disclaimer Modal
- **Dimensions:** Full screen overlay with 320px centered card
- **Header:** "Risk Acknowledgement" (Inter 14px bold)
- **Content:**
  - Disclaimer text (Inter 12px, #5F6368):
    ```
    "You understand that crypto asset trading carries high risk
    including potential total loss of principal. By proceeding,
    you acknowledge that you have read and accepted the SFC
    risk disclosure and disclaimer."
    ```
  - Checkbox (12px): "I have read and accepted the disclaimer"
  - Links: "View Full Terms" (Inter 11px, #1A73E8, underline)
- **Buttons (2 columns, 44px height):**
  - "Cancel" (left, #F8F9FA background, #5F6368 text)
  - "Confirm Order" (right, #34A853/#EA4335 matching order, white text)
  - Disabled until checkbox is ticked
- **Behavior:**
  - Checkbox required to enable "Confirm Order"
  - Tap "View Full Terms" opens full terms in new page
  - Tap "Cancel" closes modal, return to order form
  - Tap "Confirm Order" submits order (success toast, navigate to Order Management)

## Mock Data

```typescript
interface OrderFormState {
  direction: 'buy' | 'sell';
  orderType: 'limit' | 'market' | 'stop-limit';
  price: number | null;
  triggerPrice?: number | null;
  amount: number | null;
  amountUnit: 'asset' | 'fiat';
  symbol: string;
  exchange: 'HashKey' | 'Bullish' | 'OSL' | 'VDX';
}

interface OrderSummary {
  estimatedTotal: number;
  fee: number;
  finalTotal: number;
  feePercent: number;
}

interface PortfolioStats {
  totalValue: number; // HK$ equivalent
  currentBalance: number;
  orderValue: number;
  percentOfPortfolio: number;
}

const mockInitialOrder: OrderFormState = {
  direction: 'buy',
  orderType: 'limit',
  price: 28456.75,
  amount: 1.25,
  amountUnit: 'asset',
  symbol: 'BTC/USDT',
  exchange: 'HashKey'
};

const mockOrderSummary: OrderSummary = {
  estimatedTotal: 35570.9375,
  fee: 35.57,
  finalTotal: 35606.5075,
  feePercent: 0.1
};

const mockPortfolioStats: PortfolioStats = {
  totalValue: 12000000, // HK$12M
  currentBalance: 50000, // HK$50K available
  orderValue: 2450000, // HK$2.45M (10.2% of portfolio)
  percentOfPortfolio: 10.2
};

const mockExchangeRates = {
  'BTC/USDT': 28456.75,
  'ETH/USDT': 3456.80,
  'SOL/USDT': 142.35,
  'AAPL': 192.50,
  'TSLA': 245.75,
  'EUR/USD': 1.0892,
  'GOLD': 2087.45
};

const mockOrderTypeConfig = {
  limit: {
    showPrice: true,
    showTrigger: false,
    priceLabel: 'Limit Price',
    priceHint: 'Enter your desired price'
  },
  market: {
    showPrice: false,
    showTrigger: false,
    priceLabel: 'Market Price',
    priceHint: 'Will execute at best available price'
  },
  'stop-limit': {
    showPrice: true,
    showTrigger: true,
    priceLabel: 'Limit Price',
    triggerLabel: 'Trigger Price',
    priceHint: 'Price to execute limit order',
    triggerHint: 'Price to activate the order'
  }
};
```

## Interaction Requirements

1. **Buy/Sell Toggle:** Switch direction; updates button colors in action section.
2. **Order Type:** Switching order types shows/hides price inputs appropriately.
3. **+/- Buttons:** Increment/decrement price by fixed amount; recalculate summary.
4. **Amount Input:** Support both asset and fiat units; toggle with unit button.
5. **Quick % Buttons:** Calculate amount based on available balance; update summary.
6. **Real-time Summary:** Update estimated total, fee, and final total as user types.
7. **Validation:**
   - Price and amount must be > 0
   - Amount must not exceed available balance
   - Price must be reasonable (within ±50% of last price)
8. **Place Order Logic:**
   - If order > 20% portfolio → Show cooling-off modal
   - Otherwise → Show SFC risk disclaimer
9. **Cooling-off:** 28-second countdown; auto-cancel if expired
10. **Disclaimer:** Checkbox required; "View Full Terms" opens SFC docs
11. **Success:** Submit order → Show success toast → Navigate to Order Management (Open Orders tab)

## Constraints

- Viewport: 390px width
- Font: Inter (UI), JetBrains Mono (numbers)
- Styling: Tailwind CSS only
- Modals: Centered, semi-transparent overlay (60% opacity)
- Keyboard: Numeric keyboard for price/amount inputs
- Accessibility: ARIA labels for toggle switches, form fields
- Validation: Real-time error states (red border + message below field)
- Exchange badges: Colored pills (HashKey=blue, Bullish=purple, OSL=orange, VDX=green)
- Fee calculation: Always 0.1% taker fee (maker fees can be configured)
- Max decimals: Prices (8dp), amounts (8dp), fees (4dp)
- Safe area: 16px padding all sides, 83px bottom for tab bar clearance
