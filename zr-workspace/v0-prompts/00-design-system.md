# Design System Components — ZR Securities Trading App

## Context
You are building a mobile-first crypto/securities trading app for ZR Securities (卓锐证券), a Hong Kong SFC-licensed multi-market broker. The app supports crypto, stocks, forex, and commodities trading across multiple exchanges (HashKey, Bullish, OSL, VDX). Brand color: #1A73E8 (blue).

## Design System
### Colors
```css
:root {
  --brand-blue: #1A73E8;
  --brand-blue-hover: #4A90D9;
  --brand-blue-dark: #1557B0;
  --brand-blue-bg: #E8F0FE;
  --success: #00C853;
  --error: #FF1744;
  --warning: #FFB300;
  --info: #29B6F6;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F5F5;
  --bg-tertiary: #EEEEEE;
  --text-primary: #212121;
  --text-secondary: #757575;
  --text-tertiary: #BDBDBD;
  --border: #E0E0E0;
  --divider: #F0F0F0;
}
```

### Typography
- Font: Inter (headers), JetBrains Mono (numbers/prices)
- Display: 28px bold, H1: 24px bold, H2: 20px semibold, H3: 17px semibold
- Body: 15px regular, Caption: 13px regular, Overline: 11px medium
- Prices always use monospace font

### Spacing: 4px base. XS:4, S:8, M:12, L:16, XL:24, 2XL:32
### Radius: sm:8px, md:12px, lg:16px, pill:26px, full:50%

## Components to Build

### 1. Primary Button
- Height: 52px, full-width, bg var(--brand-blue), text white, radius 26px (pill)
- Variants: Buy (#00C853), Sell (#FF1744), Disabled (#E5E5EA text #BDBDBD)
- Touch feedback: 0.05 opacity change on press
- Font: 17px semibold

### 2. Secondary Button
- Height: 36px, auto-width, bg transparent, border 1px var(--border), text var(--text-primary), radius 8px
- Active: border var(--brand-blue), text var(--brand-blue)

### 3. Text Input
- Height: 48px, full-width, bg var(--bg-secondary), border 1px var(--border), radius 8px, padding 0 12px
- Focused: border 2px var(--brand-blue), bg white
- Error: border 2px var(--error)
- Label: 13px caption above, 4px gap

### 4. Amount Input (Financial)
- Height: 56px, large mono font 28px, "Max" link right side in blue, unit toggle
- Below: available balance display, helper text

### 5. OTP Input
- 6 boxes, each 56×56px, radius 8px, 8px gap between
- Active box: 2px border var(--brand-blue), animated cursor 2×30px blue
- Filled: 1px border var(--border), centered digit 20px mono
- Empty: 1px border var(--border)
- Auto-advance on digit entry

### 6. Bottom Tab Bar
- Height: 83px (49px bar + 34px safe area)
- 5 items evenly distributed: 首页, 行情, 交易, 资产, 更多
- Active: var(--brand-blue) icon + label
- Inactive: #BDBDBD icon + label
- Icons: 24px, Labels: 11px

### 7. Navigation Bar
- Height: 44px, bg white
- Back button: left arrow, 44×44px tap target
- Title: center, 17px semibold
- Action buttons: right, 44×44px each

### 8. Market Row
- Height: 64px, full-width, padding 0 16px
- Left: Asset icon 36×36px circle + Name 15px bold + Symbol 13px gray below
- Right: Price 15px mono + Change badge (pill shape, green positive / red negative, 13px)
- Below name: Exchange badge (optional)

### 9. Exchange Badge
- Height: 20px, auto-width, radius 10px (pill), 12px text medium
- HashKey: bg #E8EEFF text #2962FF
- Bullish: bg #E0F7F0 text #00BFA5
- OSL: bg #FFF3E0 text #FF6D00
- VDX: bg #EDE7F6 text #7C4DFF

### 10. Asset Class Switcher
- Height: 44px, 4 segments: [加密] [股票] [外汇] [商品]
- Active: bg var(--brand-blue), text white, radius 8px
- Inactive: bg transparent, text #757575
- Transition: 300ms ease-in-out

### 11. Card
- bg white, radius 12px, padding 16px, shadow 0 1px 3px rgba(0,0,0,0.08)

### 12. Bottom Sheet
- Radius 16px top corners
- Handle: 36×4px centered, 8px from top, #BDBDBD
- Overlay: rgba(0,0,0,0.5)
- Slide up animation 400ms

### 13. Status Badges
- Completed: bg #E8F5E9 text #2E7D32
- Pending: bg #FFF8E1 text #F57F17
- Failed: bg #FFEBEE text #C62828
- Height: 24px, radius 12px, padding 0 8px, 12px text

### 14. Empty State
- Centered: illustration placeholder (gray circle 80px) + title 17px semibold + description 15px gray + CTA button

## Mock Data
```typescript
const exchanges = [
  { id: "hashkey", name: "HashKey", color: "#2962FF", bg: "#E8EEFF", status: "active" },
  { id: "bullish", name: "Bullish", color: "#00BFA5", bg: "#E0F7F0", status: "active" },
  { id: "osl", name: "OSL", color: "#FF6D00", bg: "#FFF3E0", status: "maintenance" },
  { id: "vdx", name: "VDX", color: "#7C4DFF", bg: "#EDE7F6", status: "coming_soon" },
];
```

## Constraints
- Use Tailwind CSS only (no custom CSS except CSS variables)
- Mobile-first, 390px viewport
- Inter font + JetBrains Mono for numbers
- Minimum touch target 44px
- No API calls, no localStorage — React state only
- Export each component individually
