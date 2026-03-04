# ZR Securities Design System
> Version: 1.0 | Date: 2026-03-04 | v0.dev Compatible
> Derived from: OKX竞品分析 + ZR设计决策文档

---

## Colors

### Primary
| Token | Hex | Usage |
|-------|-----|-------|
| `brand-blue` | #1A73E8 | Primary CTA, active tabs, links, focused inputs |
| `brand-blue-hover` | #4A90D9 | Hover/pressed state |
| `brand-blue-dark` | #1557B0 | Active/selected state |
| `brand-blue-bg` | #E8F0FE | Light blue backgrounds, selected row |

### Semantic
| Token | Hex | Usage |
|-------|-----|-------|
| `success` / `buy` / `rise` | #00C853 | Buy buttons, positive changes, deposits |
| `error` / `sell` / `fall` | #FF1744 | Sell buttons, negative changes, errors |
| `warning` | #FFB300 | Amber warnings, pending status |
| `info` | #29B6F6 | Info badges, QR frames, help |

### Neutral (Light Mode)
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | #FFFFFF | Main content background |
| `bg-secondary` | #F5F5F5 | Cards, section backgrounds |
| `bg-tertiary` | #EEEEEE | Input field backgrounds |
| `text-primary` | #212121 | Headlines, values, primary text |
| `text-secondary` | #757575 | Labels, captions |
| `text-tertiary` | #BDBDBD | Placeholders, disabled text |
| `border` | #E0E0E0 | Input borders, card outlines |
| `divider` | #F0F0F0 | List separators |

### Neutral (Dark Mode)
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary-dark` | #121212 | Main content background |
| `bg-secondary-dark` | #1E1E1E | Cards, section backgrounds |
| `bg-tertiary-dark` | #2C2C2C | Input field backgrounds |
| `text-primary-dark` | #FFFFFF | Headlines, values |
| `text-secondary-dark` | #B0B0B0 | Labels, captions |
| `text-tertiary-dark` | #666666 | Placeholders, disabled |
| `border-dark` | #333333 | Borders |
| `divider-dark` | #222222 | Separators |

### Exchange Brand Colors
| Token | Hex | Background | Usage |
|-------|-----|-----------|-------|
| `exchange-hashkey` | #2962FF | #E8EEFF | HashKey badge |
| `exchange-bullish` | #00BFA5 | #E0F7F0 | Bullish badge |
| `exchange-osl` | #FF6D00 | #FFF3E0 | OSL badge |
| `exchange-vdx` | #7C4DFF | #EDE7F6 | VDX badge |

### Asset Class Colors (ZR Unique)
| Token | Hex | Usage |
|-------|-----|-------|
| `asset-crypto` | #FF9500 | Crypto section indicators |
| `asset-stocks` | #1A73E8 | Stocks section indicators |
| `asset-forex` | #00BFA5 | Forex section indicators |
| `asset-commodities` | #FFB300 | Commodities section indicators |

---

## Typography

| Style | Size | Weight | Line Height | Font | Usage |
|-------|------|--------|-------------|------|-------|
| Display | 28px | Bold (700) | 34px | SF Pro Display | Portfolio totals, hero values |
| H1 | 24px | Bold (700) | 30px | SF Pro Display | Screen titles |
| H2 | 20px | Semibold (600) | 26px | SF Pro Text | Section headers |
| H3 | 17px | Semibold (600) | 22px | SF Pro Text | Card titles, tab labels |
| Body | 15px | Regular (400) | 22px | SF Pro Text | Content text |
| Caption | 13px | Regular (400) | 18px | SF Pro Text | Timestamps, secondary info |
| Overline | 11px | Medium (500) | 16px | SF Pro Text | Badge text, tab bar labels |
| Mono-L | 28px | Medium (500) | 34px | SF Mono | Large price display |
| Mono-M | 15px | Regular (400) | 20px | SF Mono | Prices, amounts, addresses |
| Mono-S | 13px | Regular (400) | 18px | SF Mono | Order book prices, fees |

**v0.dev替代字体**: Inter (headers), JetBrains Mono (prices/numbers)

---

## Spacing

Base unit: **4px**

| Token | Value | Usage |
|-------|-------|-------|
| `sp-xs` | 4px | Tight spacing, icon-text gaps |
| `sp-sm` | 8px | Component internal padding |
| `sp-md` | 12px | Input internal padding, small gaps |
| `sp-lg` | 16px | Standard padding, content margins |
| `sp-xl` | 24px | Section gaps, modal padding |
| `sp-2xl` | 32px | Large section separators |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Buttons, inputs, small cards |
| `radius-md` | 12px | Cards, product tiles |
| `radius-lg` | 16px | Modals, bottom sheets (top corners) |
| `radius-pill` | 26px | Primary CTA buttons, badges |
| `radius-full` | 50% | Avatars, status dots |

---

## Shadows (Light Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `elevation-1` | 0 1px 3px rgba(0,0,0,0.08) | Floating headers, subtle lift |
| `elevation-2` | 0 4px 12px rgba(0,0,0,0.12) | Cards, dropdowns |
| `elevation-3` | 0 8px 24px rgba(0,0,0,0.16) | Modals, bottom sheets |

---

## Layout Constants

| Token | Value | Usage |
|-------|-------|-------|
| `status-bar` | 59px | Dynamic Island safe area |
| `nav-bar` | 44px | Top navigation bar |
| `tab-bar` | 83px | Bottom tab bar (49px + 34px safe area) |
| `content-padding` | 16px | Horizontal content margins |
| `row-height-sm` | 44px | Compact list rows |
| `row-height-md` | 56px | Standard list rows |
| `row-height-lg` | 64px | Market/asset list rows |
| `btn-height-primary` | 52px | Primary CTA buttons |
| `btn-height-secondary` | 36px | Secondary/filter buttons |
| `input-height` | 48px | Text inputs |
| `icon-sm` | 20px | Small icons (menu, inline) |
| `icon-md` | 24px | Standard icons (nav, action) |
| `icon-lg` | 32px | Large icons (menu grid) |
| `touch-target` | 44px × 44px | Minimum tap area (Apple HIG) |

---

## Animation Timing

| Token | Value | Easing | Usage |
|-------|-------|--------|-------|
| `anim-fast` | 150ms | ease-out | Button press feedback |
| `anim-normal` | 300ms | ease-in-out | Tab switch, fade transitions |
| `anim-slow` | 400ms | ease-in-out | Page transitions, sheet slide |
| `tap-opacity` | 0.05 alpha change | linear | Touch feedback on tappable elements |

---

## Core Component Specifications

### Button
```
Primary:   52px H × full-width, bg brand-blue, text white, radius 26px (pill)
Buy:       52px H × full-width, bg #00C853, text white, radius 26px
Sell:      52px H × full-width, bg #FF1744, text white, radius 26px
Disabled:  52px H × full-width, bg #E5E5EA, text #BDBDBD, radius 26px
Secondary: 36px H × auto-width, bg transparent, border 1px #E0E0E0, text #212121, radius 8px
Icon:      44px × 44px circle, bg transparent, icon 24px
```

### Input Field
```
Standard:  full-width × 48px H, bg #F5F5F5, border 1px #E0E0E0, radius 8px
Focused:   border 2px brand-blue, bg white
Error:     border 2px #FF1744, helper text red
Amount:    full-width × 56px H, font Mono-L 28px, "Max" link right, unit toggle
OTP:       6 boxes × 56px × 56px each, 8px gap, 8px radius
           Active: 2px border brand-blue, animated cursor
           Empty:  1px border #E0E0E0
```

### Card
```
Standard:  full-width, bg white, radius 12px, padding 16px, shadow elevation-1
Merchant:  full-width × 140px, bg #F5F5F5, radius 12px, padding 16px
Product:   full-width × 80px, bg white, radius 12px, padding 16px
```

### Tab Bar (Bottom)
```
Height: 83px (49px bar + 34px safe area)
Items: 5 icons, distributed evenly
Active: brand-blue icon + label
Inactive: #BDBDBD icon + label
Icon: 24px, Label: 11px
```

### Navigation Bar
```
Height: 44px
Back: left arrow, 44×44px tap target
Title: center, 17px semibold
Actions: right side, 44×44px tap targets
```

### Bottom Sheet
```
Radius: 16px top corners
Handle: 36px × 4px, centered, 8px from top, #BDBDBD
Max height: 90% viewport
Animation: 400ms slide up
Overlay: rgba(0,0,0,0.5)
```

### Exchange Badge
```
Height: 20px, auto width
Radius: 10px (pill)
Font: 12px medium
Per-exchange:
  HashKey: bg #E8EEFF, text #2962FF
  Bullish: bg #E0F7F0, text #00BFA5
  OSL:     bg #FFF3E0, text #FF6D00
  VDX:     bg #EDE7F6, text #7C4DFF
```

### Asset Class Switcher (ZR Unique)
```
Height: 44px
Style: Segmented control, 4 segments
Active: bg brand-blue, text white, radius 8px
Inactive: bg transparent, text #757575
Transition: 300ms cross-fade
Segments: [加密] [股票] [外汇] [商品]
```

### Market Row
```
Height: 64px
Layout:
  Left: Asset icon 36×36px circle + Name + Symbol (below)
  Center: Sparkline mini chart (optional)
  Right: Price (15px mono) + Change badge (pill, green/red)
  Below name: Exchange badge (if applicable)
Tap: Navigate to symbol detail
```

### Order Book
```
Split view: Asks (red, top descending) | Spread | Bids (green, bottom ascending)
Row height: 28px
Columns: Price (mono 13px) | Amount | Depth bar
Depth bar: 20% opacity green/red, fills from right
Spread: centered, 13px mono, color #757575
Tap price → auto-fill order form
```

### Status Badge
```
Completed: bg #E8F5E9, text #2E7D32, icon ✓
Pending:   bg #FFF8E1, text #F57F17, icon ⏳
Failed:    bg #FFEBEE, text #C62828, icon ✗
Online:    12px circle, #00C853
Offline:   12px circle, #BDBDBD
```

### Cooling-Off Modal (ZR Innovation)
```
Trigger: order > 20% portfolio
Overlay: rgba(0,0,0,0.5)
Card: 320px width, radius 16px, padding 24px
Icon: ⚠️ 32px
Title: "大额订单提醒" 20px bold
Body: 15px regular, line-height 22px
Progress bar: brand-blue fill, 28s countdown
Buttons: [取消] secondary left, [继续交易] after countdown
No "不再提示" checkbox (反脆弱原则)
```

---

## Responsive Considerations

| Device | Width | Scale |
|--------|-------|-------|
| iPhone SE | 375px | Compact |
| iPhone 14 | 390px | Standard (primary target) |
| iPhone 14 Pro Max | 430px | Large |
| iPad Mini | 768px | Tablet (future) |

**Design target**: 390px width, 844px height (iPhone 14)

---

*v0.dev Usage: Import this entire document as context when generating any ZR component.*
*All dimensions are in pt (points). Multiply by device scale factor for px.*
