# OKX iOS Earn/Grow Module - Design Specification
## Competitive Analysis for ZR Securities

**Analysis Date:** March 2026
**Platform:** iOS (iPhone)
**Viewport:** 390px width (iPhone 12/13 standard)
**Status Bar Height:** 47px

---

## 1. Module Overview - Earn/Grow Ecosystem

The OKX Earn/Grow module provides users with multiple passive income generation strategies across cryptocurrency assets. The ecosystem comprises four primary screens:

1. **Grow Hub** - Dashboard and product discovery
2. **Structured Products List** - Curated yield-bearing products catalog
3. **Structured Product Detail** - In-depth product information and transaction flows
4. **Loan/Convert** - Multi-asset conversion and borrowing interface

### Core Value Proposition
- **APY Display**: Prominent annual percentage yield on all products
- **Risk Tiering**: Visual indicators for product safety classification
- **Multi-Asset Support**: USDT, USDC, BTC, ETH, OKB, LTC, XRP, BCH portfolio
- **Frictionless Onboarding**: Single-tap subscription to yield products
- **Real-time Balance Tracking**: Live equity value updates

---

## 2. Screen-by-Screen Pixel Specifications

### SCREEN 1: Grow Hub (136.png, 137.png, 138.png)

#### Navigation Header
- **Y Position:** 0px - 47px
- **Height:** 47px
- **Content:** Status bar with time (9:41), signal, WiFi, battery
- **Font:** SF Pro Display, 14px, regular, #000000

#### Back Button & Navigation
- **Position:** X: 12px, Y: 52px
- **Icon:** Left chevron, 24x24px
- **Color:** #000000
- **Tap Area:** 44x44px minimum

#### Page Indicator / Tabs
- **Y Position:** 72px - 92px
- **Height:** 20px
- **Content:** Underline tabs (currently selected tab has full black bar)
- **Selected Bar:** X: 16px, Width: 235px, Height: 2px, Color: #000000
- **Inactive Tabs:** 235px width segment, Light gray indicators

#### Hero Headline
- **Y Position:** 102px
- **Font:** SF Pro Display Bold
- **Font Size:** 32px
- **Font Weight:** 700
- **Color:** #000000
- **Text:** "Open Wise to transfer"
- **Line Height:** 38px

#### Countdown Timer
- **Y Position:** 135px
- **Font:** SF Pro Display, 18px, regular
- **Color:** #666666 (primary gray)
- **Color (highlight):** #10B981 (emerald green)
- **Text:** "Pay within 12:18s" (green highlight on time)

#### Merchant Card
- **Y Position:** 170px - 235px
- **Height:** 65px
- **Background:** #F5F5F5 (light gray)
- **Border Radius:** 12px
- **Padding:** 16px
- **Content:** Merchant name left-aligned, action buttons right
- **Font:** SF Pro Display, 16px, 600 weight, #000000

#### Merchant Name
- **Font Size:** 16px
- **Font Weight:** 600
- **Color:** #000000
- **Text Example:** "globalexchangecol"

#### Action Buttons (Phone/Chat)
- **Phone Button:** Circle, 40x40px, Border: 1px #DEDEDE, Icon: phone outline
- **Chat Button:** Rounded pill, 48px height, Background: #000000, Text: "Chat", 14px white
- **Gap Between:** 12px
- **Position:** Right: 16px

#### Form Section Header
- **Y Position:** 260px
- **Font:** SF Pro Display Bold
- **Font Size:** 18px
- **Weight:** 700
- **Color:** #000000
- **Text:** "Enter these details on"
- **Display:** Numbered badge (circle, 32x32px, #000000, white "1")

#### Form Input Fields
- **Y Position:** 300px - 600px
- **Field Height:** 44px each
- **Background:** White
- **Border:** 1px #E5E5E5
- **Border Radius:** 8px
- **Padding:** 12px 16px
- **Label Font:** SF Pro Display, 14px, 500, #A0A0A0
- **Value Font:** SF Pro Display, 16px, 600, #000000
- **Copy Icon:** 16x16px, positioned right: 12px

#### Form Fields Included
1. "You pay" - Amount display ($20.00)
2. "Account name" - Eliana Rivera Rodriguez
3. "Email" - multiplexfuentesdeingresos7@gmail.com
4. "Order ID" - 24051316402937

#### Warning Section
- **Y Position:** 410px
- **Title Font:** SF Pro Display, 14px, 600, #000000
- **Title:** "Reminder"
- **Body Font:** SF Pro Display, 14px, 400, #808080
- **Body Text:** Warning about crypto keywords in payment description
- **Line Height:** 20px
- **Max Width:** 343px

#### Fraud Alert Link
- **Font:** SF Pro Display, 14px, 400
- **Color:** #0066FF (blue)
- **Text Decoration:** Underline
- **Text:** "Make a report"

#### Action Section (Step 2)
- **Y Position:** 560px
- **Badge:** Numbered circle "2", #000000
- **Headline Font:** SF Pro Display, 20px, 700, #000000
- **Text:** "Tap I have paid to notify the seller"

#### Primary CTA Button
- **Y Position:** 660px
- **Height:** 48px
- **Background:** #000000
- **Border Radius:** 24px
- **Font:** SF Pro Display, 16px, 600, white
- **Text:** "I have paid"
- **Width:** 100% minus 32px margins

#### Secondary Link
- **Y Position:** 720px
- **Font:** SF Pro Display, 14px, 400, #A0A0A0
- **Text:** "How to pay?"
- **Text Decoration:** Dashed underline

---

### SCREEN 2: Structured Products List (145.png, 146.png)

#### Navigation Bar
- **Y Position:** 0px - 47px
- **Content:** Time, signal indicators, battery
- **Font:** System font, 14px

#### Header Section
- **Y Position:** 52px - 100px
- **Back Button:** Left chevron, 24x24px, #000000
- **Page Title:** "Funding", SF Pro Display Bold, 28px, #000000
- **Center Aligned**

#### Balance Display
- **Y Position:** 110px - 140px
- **Label:** "Equity value", 14px, 500, #808080
- **With Eye Icon:** 16x16px visibility toggle
- **Amount:** "18.93 USD", SF Pro Display Bold, 36px, #000000
- **Currency Selector:** "USD" dropdown, right-aligned

#### Action Grid (4 columns)
- **Y Position:** 150px - 210px
- **Grid:** 4 equal columns, 70px each
- **Gap:** 20px
- **Items:** Deposit, Withdraw, Transfer, History
- **Icon Size:** 32x32px
- **Label Font:** SF Pro Display, 12px, 500, #000000
- **Icon Color:** #000000

#### Filter/Search Row
- **Y Position:** 230px
- **Checkbox:** "Hide assets < 1 USD", 14px, 400, #666666
- **Right Icons:** Refresh (24x24px), Search (24x24px)
- **Height:** 44px

#### Asset List Header
- **Y Position:** 280px
- **Columns:** Name (40%), Available (30%), More (30%)
- **Font:** SF Pro Display, 12px, 400, #999999
- **Divider:** 1px #E5E5E5 below

#### Asset List Items
- **Item Height:** 56px
- **Padding:** 12px 16px
- **Background:** White
- **Border Bottom:** 1px #F0F0F0

#### Asset Icon
- **Size:** 36x36px
- **Border Radius:** 50%
- **Positioning:** X: 12px

#### Asset Name
- **Font:** SF Pro Display, 16px, 600, #000000
- **Position:** X: 60px, Y: 12px

#### Available Balance
- **Primary:** SF Pro Display, 16px, 600, #000000
- **Secondary:** SF Pro Display, 12px, 400, #B0B0B0
- **Position:** X: center-right, Y: 12px

#### More Menu
- **Icon:** Three dots (vertical), 20x20px
- **Position:** Right: 16px
- **Color:** #CCCCCC

#### Asset Colors
- **USDT:** #26A17B (emerald)
- **USDC:** #2775CA (blue)
- **BTC:** #F7931A (orange)
- **ETH:** #627EEA (indigo)
- **OKB:** #000000 (black)
- **LTC:** #345D9D (cobalt)
- **XRP:** #23292F (dark gray)
- **BCH:** #2DB500 (green)

#### Listing Sample
```
🟢 USDT         18.93
    $18.92

🔵 USDC             0
    (no secondary)

🟠 BTC              0

🟣 ETH              0

⚫ OKB              0

🔵 LTC              0

⚫ XRP              0

🟢 BCH              0
```

---

### SCREEN 3: Structured Product Detail (154.png, 155.png)

#### Profile Header Section
- **Y Position:** 47px - 120px
- **Background:** Dark gradient (black to dark gray)
- **Height:** 120px
- **Avatar:** Circular, 72x72px, blue background (#2563EB)
- **Initial:** White text "j"
- **Online Indicator:** Green dot, 12x12px, positioned bottom-right of avatar
- **Position X:** 16px center

#### User Identity
- **Y Position:** 100px
- **Email:** "jdo***@gmail.com", SF Pro Display Bold, 18px, #000000
- **Status:** "Online", SF Pro Display, 12px, #A0A0A0

#### Verification Badges
- **Y Position:** 130px
- **Flag Icon:** Indonesia
- **Text:** "Indonesia | Joined on: 05/03/2024", 12px, 400, #666666
- **Badges (green checkmarks):** ID verified, Mobile, Email
- **Badge Font:** 12px, 500, #10B981

#### Info Grid Section
- **Y Position:** 180px - 280px
- **Layout:** 2x2 grid
- **Grid Gap:** 24px horizontal, 32px vertical
- **Item Width:** 170px

#### Info Grid Items
```
Total completed orders    |  Completion rate (%)
0                         |  0.00%
(16px bold, #000000)      |  (16px bold, #000000)

Avg. payment time        |  Positive reviews (%)
0m 0s                    |  N/A
(16px bold, #000000)     |  (16px bold, #000000)
```

#### Info Item Label
- **Font:** SF Pro Display, 13px, 400, #999999
- **Line Height:** 20px
- **Margin Bottom:** 8px

#### Info Item Value
- **Font:** SF Pro Display Bold, 16px, 600, #000000
- **Line Height:** 24px

#### "More info" Link
- **Y Position:** 290px
- **Font:** SF Pro Display, 14px, 400, #666666
- **Icon:** Chevron right, 16x16px, #CCCCCC

#### Menu Section
- **Y Position:** 330px - 700px
- **Spacing:** 0px between items
- **Item Height:** 56px
- **Padding:** 16px

#### Menu Item Layout
- **Left Icon:** 24x24px, #000000
- **Label Font:** SF Pro Display, 16px, 500, #000000
- **Right Chevron:** 16x16px, #CCCCCC
- **Badge (New):** 44x24px, background #84FF00, text black, 10px bold, positioned top-right

#### Menu Items
1. "Payment" - Wallet icon
2. "Price alerts" - Bell icon (with "New" badge)
3. "Settings" - Gear icon (with "New" badge)
4. "Reviews" - Star icon
5. "Following/Blocked" - Flag icon
6. "Customer support" - Headphones icon
7. "Become a Super Merchant" - User badge icon
8. "P2P guide" - Question mark icon

#### Bottom Navigation Bar
- **Y Position:** 1440px - 1500px
- **Height:** 60px
- **Background:** White
- **Border Top:** 1px #F0F0F0
- **Items:** P2P, Orders, Ads, Chat, Profile
- **Icon Size:** 24x24px
- **Label Font:** SF Pro Display, 10px, 400, #999999
- **Active Item:** Highlighted, larger font weight
- **Profile Badge:** Red dot indicator (unread messages/notifications)

---

### SCREEN 4: Loan/Convert (158.png, 159.png)

#### Top Navigation Bar
- **Y Position:** 0px - 47px
- **Back Chevron:** X: 12px, 24x24px, #000000
- **Title:** "Convert", SF Pro Display Bold, 16px, #000000
- **Subtitle:** "Zero trading fees", gray text, 13px

#### Utility Icons (Top Right)
- **Position:** Right: 16px
- **Guide Icon:** 24x24px, #000000
- **History Icon:** 24x24px, #000000
- **Spacing:** 20px between icons

#### From Section
- **Y Position:** 80px - 160px
- **Label:** "From", SF Pro Display, 14px, 400, #999999

#### Asset Selection Dropdown
- **Width:** 100% minus 32px
- **Height:** 56px
- **Background:** #F5F5F5
- **Border Radius:** 12px
- **Padding:** 12px 16px
- **Icon:** Rounded green badge, 32x32px, USDT symbol white
- **Asset Name:** "USDT", SF Pro Display Bold, 18px, #000000
- **Dropdown Arrow:** Right-aligned, 16x16px

#### Available Balance
- **Font:** SF Pro Display, 12px, 400, #999999
- **Text:** "Available: 18.93 USDT"
- **Position:** Right-aligned above input field

#### Amount Input
- **Font:** SF Pro Display Bold, 28px
- **Color:** #000000
- **Placeholder:** "10"
- **Right-aligned**
- **Estimated Value:** "≈ $10.008498" in tooltip/dark label

#### Conversion Arrow
- **Y Position:** 180px
- **Icon:** Vertical arrows (up/down exchange), 32x32px, #000000
- **Center-aligned**

#### To Section
- **Y Position:** 220px - 300px
- **Label:** "To", SF Pro Display, 14px, 400, #999999

#### Destination Asset
- **Width:** 100% minus 32px
- **Height:** 56px
- **Background:** #F5F5F5
- **Border Radius:** 12px
- **Icon:** Orange circle badge, 32x32px, BTC symbol
- **Asset Name:** "BTC", SF Pro Display Bold, 18px, #000000
- **Dropdown Arrow:** Right-aligned

#### Converted Amount Display
- **Font:** SF Pro Display Bold, 28px, #000000
- **Text Example:** "0.00015856"
- **Right-aligned**

#### Exchange Rate Info
- **Y Position:** 320px
- **Font:** SF Pro Display, 12px, 400, #999999
- **Text:** "1 BTC ≈ 63,072.7973 USDT"
- **Loading Spinner:** Right side
- **Color:** #999999

#### Convert Button
- **Y Position:** 360px
- **Height:** 56px
- **Background:** #000000
- **Border Radius:** 28px
- **Text:** "Convert", SF Pro Display Bold, 16px, white
- **Width:** 100% minus 32px margins

#### Quick Amount Selector
- **Y Position:** 440px - 520px
- **Height:** 36px each row
- **Format:** Grid of numbered buttons (1-9, 0)
- **Grid:** 3 columns
- **Item Width:** 108px
- **Button Height:** 44px
- **Border:** 1px #E0E0E0
- **Border Radius:** 8px
- **Font:** SF Pro Display Bold, 18px, #000000
- **Gap:** 12px between items
- **Subtext:** T-9: Letter shortcuts (ABC, DEF, etc.)

#### Numeric Keypad Grid
```
[1]          [2 ABC]      [3 DEF]
[4 GHI]      [5 JKL]      [6 MNO]
[7 PQRS]     [8 TUV]      [9 WXYZ]
[.]          [0]          [X delete]
```

#### Delete Button
- **Icon:** X inside circle, 24x24px
- **Color:** #000000
- **Position:** Right side of 0 button

---

### SCREEN 5: Conversion Confirmation Modal (159.png detail)

#### Modal Container
- **Y Position:** 180px - 1200px (bottom sheet)
- **Height:** ~1020px
- **Background:** White
- **Border Radius:** 20px (top corners only)
- **Padding:** 24px

#### Close Button
- **Position:** Top-right, X: 16px from right
- **Size:** 24x24px
- **Color:** #999999
- **Icon:** X outline

#### Modal Title
- **Y Position:** 20px
- **Font:** SF Pro Display Bold, 24px, #000000
- **Text:** "Confirmation"
- **Text Alignment:** Center

#### Conversion Flow Visual
- **Y Position:** 80px - 160px
- **Layout:** Left asset | Arrow | Right asset
- **Asset Circles:** 72x72px, colored backgrounds
- **Asset Symbol:** White, 32x32px
- **Arrow:** 32x32px, centered, gray #CCCCCC
- **Asset Labels:** "From" / "To" text, 12px, #999999

#### From/To Display
- **From Amount:** "10 USDT", SF Pro Display Bold, 18px, #000000
- **To Amount:** "0.00015864 BTC", SF Pro Display Bold, 18px, #000000

#### You'll Receive Section
- **Y Position:** 220px
- **Label:** "You'll receive", SF Pro Display, 14px, #999999
- **Amount:** "0.00015864 BTC", SF Pro Display Bold, 32px, #000000

#### Transaction Details
- **Y Position:** 320px - 500px
- **Item Height:** 56px
- **Padding:** 16px 0

#### Detail Row Structure
- **Label Font:** SF Pro Display, 14px, 400, #999999
- **Value Font:** SF Pro Display Bold, 16px, #000000
- **Divider:** 1px #F0F0F0 between rows

#### Details Shown
1. **From account:** Funding 10 USDT
2. **Exchange rate:** 1 BTC ≈ 63,034.9766 USDT (with info icon)
3. **Transaction fee:** "Zero trading fees" (lime green badge #84FF00)

#### Info Icon
- **Size:** 16x16px
- **Color:** #999999
- **Tooltip:** Info about exchange rates

#### Fee Badge (Zero Fees)
- **Background:** #CCFF00 (lime/neon green)
- **Text:** "Zero trading fees", SF Pro Display Bold, 12px
- **Text Color:** #000000
- **Padding:** 6px 12px
- **Border Radius:** 4px

#### Primary CTA Button
- **Y Position:** 560px
- **Height:** 56px
- **Background:** #000000
- **Border Radius:** 28px
- **Text:** "Convert (9s)", SF Pro Display Bold, 16px, white
- **Width:** 100%
- **Timer Display:** Countdown in parentheses

---

## 3. Component Library

| Component | Type | Specs | Usage |
|-----------|------|-------|-------|
| **Primary Button** | CTA | 56px height, #000000 bg, 28px radius, SF Pro Bold 16px white | Conversion, payment confirmation, next steps |
| **Secondary Button** | CTA | 48px height, #000000 bg, 24px radius, SF Pro 16px white | Payment notification |
| **Text Input Field** | Form | 44px height, #FFFFFF bg, 1px #E5E5E5 border, 8px radius, SF Pro 16px | Amount entry, form fields |
| **Dropdown Select** | Form | 56px height, #F5F5F5 bg, 12px radius, SF Pro Bold 18px | Asset selection |
| **Asset Badge** | Icon | 36x36px, colored circle, white icon 20x20px | Asset identification |
| **Info Badge** | Label | 44x24px, #CCFF00 bg, SF Pro Bold 10px black | Feature highlights |
| **Numbered Badge** | Label | 32x32px, #000000 bg, white SF Pro Bold 16px | Step indicators |
| **Icon Button** | Interactive | 24x24px icon, 44x44px tap area, #000000 | Navigation, settings |
| **Tab Indicator** | Navigation | 2px black underline, 235px width | Page selection |
| **Modal** | Container | 20px border radius, white bg, 24px padding | Confirmations, dialogs |
| **Card** | Container | 12px radius, #F5F5F5 bg, 16px padding | Merchant info, product cards |
| **Merchant Pill** | Interactive | 48px height, #000000 bg, 24px radius, SF Pro 14px white | Call-to-action |
| **Verification Badge** | Status | 16x16px green checkmark, 12px SF Pro 500 text | Identity confirmation |
| **Numeric Keypad** | Input | 44x44px buttons, 1px #E0E0E0 border, 8px radius, 12px gap | Amount input |
| **List Item** | Container | 56px height, 16px padding, 1px #F0F0F0 divider | Asset listing, menu |
| **Bottom Navigation** | Navigation | 60px height, 5 items, 24x24px icons, 10px labels | Screen navigation |

---

## 4. Color Tokens

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| **Black** | #000000 | Primary text, buttons, icons |
| **White** | #FFFFFF | Backgrounds, text on dark |
| **Light Gray** | #F5F5F5 | Card backgrounds, inputs |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| **Emerald** | #10B981 | Success states, USDT, highlights |
| **Lime Green** | #84FF00 | Feature badges, zero fees |
| **Orange** | #F7931A | BTC identity, warning states |
| **Blue** | #2563EB | User avatars, USDC, primary links |
| **Indigo** | #627EEA | ETH identity |
| **Cobalt** | #345D9D | LTC identity |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| **Dark Gray** | #808080 | Secondary text labels |
| **Medium Gray** | #999999 | Tertiary text, placeholders |
| **Light Gray** | #CCCCCC | Dividers, inactive icons |
| **Very Light Gray** | #E5E5E5 | Input borders |
| **Pale Gray** | #DEDEDE | Button borders |
| **Off White** | #F0F0F0 | Row dividers |

### Asset-Specific Colors
| Asset | Hex | Usage |
|-------|-----|-------|
| USDT | #26A17B | Badge background |
| USDC | #2775CA | Badge background |
| BTC | #F7931A | Badge background |
| ETH | #627EEA | Badge background |
| OKB | #000000 | Badge background |
| LTC | #345D9D | Badge background |
| XRP | #23292F | Badge background |
| BCH | #2DB500 | Badge background |

---

## 5. Typography Scale

| Scale | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| **Display 1** | SF Pro Display | 36px | 700 | 42px | Large balance amounts |
| **Display 2** | SF Pro Display | 32px | 700 | 38px | Page headline |
| **Display 3** | SF Pro Display | 28px | 700 | 34px | Section titles |
| **Display 4** | SF Pro Display | 24px | 700 | 30px | Modal titles |
| **Headline** | SF Pro Display | 20px | 700 | 26px | Section headers |
| **Subheading 1** | SF Pro Display | 18px | 600 | 24px | Merchant name, asset name |
| **Subheading 2** | SF Pro Display | 16px | 600 | 22px | Form labels, menu items |
| **Body Large** | SF Pro Display | 16px | 500 | 22px | Primary body text |
| **Body** | SF Pro Display | 14px | 400 | 20px | Secondary text, labels |
| **Body Small** | SF Pro Display | 13px | 400 | 19px | Tertiary info |
| **Caption** | SF Pro Display | 12px | 400 | 18px | Small labels, timestamps |
| **Caption Bold** | SF Pro Display | 12px | 500 | 18px | Badge text |
| **Overline** | SF Pro Display | 10px | 500 | 15px | Badge labels, hints |

---

## 6. Interaction Patterns

### Product Discovery Flow
1. **Entry Point:** Grow Hub with asset balance display
2. **Navigation:** Swipeable tab indicators (currently 3 visible tabs)
3. **Product Display:** Horizontal scrolling cards or vertical list
4. **Information Hierarchy:** APY → Risk Level → Asset Class → Details

### Subscription Pattern
```
View Product → Learn Details → Input Amount →
Review Terms → Confirm → Get Payment Instructions →
Verify Payment Proof → Confirmation Receipt
```

### Payment Verification
- **Countdown Timer:** Green highlighted time remaining (12:18s format)
- **Merchant Contact:** Dual-action (phone + chat)
- **Multi-step Process:** Numbered badges (1, 2, 3)
- **Form Auto-population:** Order ID, amount, account name pre-filled
- **Proof Upload:** Image modal with file size limit (8MB JPG/PNG)
- **Action Confirmation:** Two-state button (I have paid / How to pay?)

### Asset Conversion Flow
- **Source Selection:** Dropdown with available balance display
- **Amount Input:** Large bold typography with estimated value tooltip
- **Exchange Display:** Visual arrow indicating conversion direction
- **Quick Selectors:** Numeric keypad for precise input
- **Confirmation Modal:** Bottom sheet with transaction summary
- **Execution:** Countdown timer on final button (9s remaining)

### Risk Disclosure Pattern
- **Warning Labels:** "Reminder" section with gray text explanation
- **Fraud Alert:** Underlined blue link for suspicious merchant reports
- **Information Icons:** Tooltips on exchange rates, fees, account details
- **Fee Transparency:** Prominent "Zero trading fees" badge in confirmation

### Real-time Updates
- **Balance Display:** Equity value with refresh icon (top-right)
- **Exchange Rates:** Auto-updating with spinner indicator
- **Timer Countdown:** Live updates on payment deadline
- **Status Indicators:** "Online" status, verification checkmarks

---

## 7. ZR Securities Adaptation Strategy

### 1. SFC Risk Compliance Integration

#### Mandatory Risk Disclaimers
```
Layout Zone: Top of product detail, Y: 50px
Height: 80-120px
Background: #FFF3CD (warning yellow)
Border: 1px #FFEAA7
Border Radius: 8px
Padding: 12px 16px

Font: SF Pro Display, 12px, 400, #856404
Icon: ⚠️ 16x16px (left)
Headline: "SFC Risk Notice", 12px 600 weight
Body: "This product carries risk. Review the Product Key Facts Sheet..."
Link: "View HKID terms" (underlined)
```

#### Multi-Product Risk Matrix
- **Low Risk:** Principal-protected notes (background: #D4EDDA, border: #C3E6CB)
- **Medium Risk:** Structured products with participation (background: #FFF3CD)
- **High Risk:** Leveraged yield, derivative-linked (background: #F8D7DA, border: #F5C6CB)

#### Investor Profile Gating
```
Before product subscription:
- Risk tolerance assessment (3 questions)
- Investment experience level selector
- Minimum holding period disclosure
- Counter-party risk explanation
```

### 2. Multi-Asset Yield Product Catalog

#### Product Card Extensions
```
Current: Asset type (single coin)
Extended: Multi-asset correlation display

Layout:
- Asset 1 (60% weight): 28px icon + 16px "60%"
- Asset 2 (30% weight): 20px icon + 12px "30%"
- Asset 3 (10% weight): 16px icon + 10px "10%"
- Total Spread: 96px width

Color coding: Warm gradient (orange → red) for risk concentration
```

#### Yield Mechanics Breakdown
```
Current: Simple APY display
Extended Tab: "Yield Breakdown"
  - Base yield: 4.5% (protocol generated)
  - Incentive boost: 2.1% (OKX promotion)
  - Fee deduction: -0.6% (custody, insurance)
  - Net APY: 6.0%

Visualization: Stacked bar chart, 200px width
```

### 3. Cognitive Companion Educational Content

#### In-Line Learning Zones (New Components)

##### A. Product Explainer Cards
```
Position: Below product title, Y: 180px
Height: 120px
Background: #F9F9F9
Border: 1px #E8E8E8
Border Radius: 12px

Layout:
- Title: "What's a Structured Note?", 14px 600
- 2-sentence explanation: 12px 400, #666
- CTA: "Learn more" blue link, 12px 500
- Icon: Animated lightbulb, 24x24px (right)

Trigger: User hovers on question mark icon next to APY
```

##### B. Risk Factor Explanation Modals
```
Trigger: Tap info icon next to "Risk Level"
Modal Size: Sheet, 80% height
Content Structure:
  - Close button (top-right)
  - Icon badge (colored circle, 48x48px)
  - Title: Risk factor name
  - What it means: 2-3 sentences, 14px
  - Real example: "If Bitcoin drops 20%..."
  - Related terms: 3-5 hashtags (blue links)

Button: "Invest" / "Learn more" (bottom)
```

##### C. Timeline Comparison Tool
```
Current: No visual of lock-up periods
New: Interactive timeline
  - Horizontal scrolling product cards
  - Y-axis: Time to maturity (1mo, 3mo, 6mo, 1yr)
  - Size: Card width represents APY (wider = higher)
  - Color: Risk gradient
  - Tap: Opens product detail

Dimensions: 340px width, 180px height
Position: Structured products list, Y: 400px
```

### 4. Visual Enhancements for Compliance

#### SFC Label System
```
Top-right corner of product cards:
- [CESL] Certified Exchange Settlement Label (12x12px badge)
- [RP] Regular Product (no special label)
- [SC] Structured Complexity (orange label)
- [HI] High Investor Suitability (green label)
```

#### Regulatory Footnotes
```
Below APY display:
Font: 10px, #999999
Text: "APY subject to market conditions. See terms."
Link: "Full terms & conditions" (blue, underlined)
```

#### Key Information Box (KIB) Integration
```
New screen: "Product Key Facts"
Access: "More info" link below product details
Layout:
  - 5-section accordion
  - Section 1: What is this? (description)
  - Section 2: What are the risks? (risk factors)
  - Section 3: What costs? (fee breakdown)
  - Section 4: How liquid is it? (redemption terms)
  - Section 5: Who should buy? (investor profile)

Font: Monospace 12px for legal clarity
Header: SF Pro Bold 14px
```

### 5. Earnings Transparency & Tracking

#### New "Earnings Dashboard" Screen

```
Tab: Insert between Grow hub and Structured Products
Position: Swipeable tab, Y: 72px

Content Grid (2-column):
  - Total earned this month: $245.82 (14px)
  - Yield source breakdown: Donut chart
  - Reinvestment toggle: On/Off switch
  - Next distribution: "March 15, 2026" (countdown)

Historical View: Scrollable table
  - Date | Product | Allocation | APY | Earned | Status
  - 03/01/2026 | Stable+ | $1,000 | 5.2% | $4.33 | Paid
  - 02/15/2026 | Crypto Mix | $500 | 12.1% | $5.05 | Pending

Export: "Download CSV" button (right-aligned, #0066FF)
```

### 6. Risk Disclosure Automation

#### Dynamic Warning System
```
Trigger Rules:
- First-time yield product buyer → Full SFC notice
- Switching to higher-risk product → Risk upgrade warning
- Over 50% concentrated in single asset → Concentration alert
- Product with <6mo liquidity → Lock-up reminder
- APY >10% → "Unusually high return" disclaimer

Warning Animation:
- Slide-in from top, 3-second duration
- Color matches risk level
- Tap to dismiss or expand
- Reappear on next session if not acknowledged
```

#### Consent Tracking
```
New database field per transaction:
- Timestamp of risk acknowledgment
- Specific risks user viewed
- Investment amount
- Product details snapshot
- User IP & device fingerprint
- Time spent reviewing docs (min 30s required)

Proof: Certificate generated on completion
  - PDF export: "Product Subscription Confirmation"
  - Includes acknowledgment + risk summary
  - Timestamp + digital signature
```

### 7. Comparative Product Display

#### New "Compare Products" Feature

```
Entry: Multi-select mode in structured products list
- Checkbox addition on each card
- "Compare (N selected)" floating button appears

Comparison View:
- Table layout with sticky left column (product names)
- Sortable columns: APY, Duration, Risk, Min invest, Fees
- Color-coded cells: Green (best) → Yellow (mid) → Red (worst)
- Footnotes: Detailed comparison notes
- CTA: "Subscribe to Selected" or "Subscribe to One"

Dimensions: Full screen, horizontal scroll on mobile
Font: 12px for data rows, 14px for headers
```

### 8. Mobile-First Compliance Updates

#### Sticky Compliance Footer
```
All product screens:
- Height: 48px (collapsed) / 160px (expanded)
- Background: #F5F5F5
- Always visible below CTA buttons
- Collapsed: "Risk disclosure (i)" link
- Expanded shows: Key risks, fees, redemption terms
```

#### QR Code Integration
```
Each product detail page:
- Bottom: QR code to full SFC-approved PDF
- Text: "Scan for complete terms"
- Generates unique tracking URL
  Format: https://zrsec.hk/product/{id}/docs/{timestamp}
  Allows regulatory audit trail
```

### 9. Cognitive Companion Features

#### A. "Invest Wisely" AI Advisor Module

```
Location: New tab in Grow hub, Y: 320px
Container: 100% width, 120px height, white bg

Question Prompt:
"How much should I allocate to yield products?"

Input Flow:
1. Tap card → Bottom sheet opens
2. "What's your investment goal?" (radio buttons)
   - Growth (aggressive)
   - Income (moderate)
   - Preservation (conservative)
3. "How long can you lock funds?" (slider)
   - 1 month to 3 years
4. AI returns: Recommended allocation % breakdown
   - "30% stable yield, 40% growth, 30% cash"
   - Links to matching products

Visualization: Pie chart, 160x160px
Colors: Match risk levels (green → orange → red)
```

#### B. Product Recommendation Engine

```
Smart Suggestions Cards:
Position: Grow hub, Y: 500px
Title: "Recommended for you"
Reasoning: "Based on your $18.93 USDT balance"

Card Layout (horizontal scroll):
- Product icon (rounded, 48x48px)
- Name: 14px bold
- Rationale: "Perfect for your risk level" (12px gray)
- APY: "6.2%" large
- "View details" link (blue)

Algorithm Inputs:
- Portfolio concentration
- Lock-up tolerance
- Risk appetite from KYC
- Historical returns
- Social proof (% investors in similar tier)
```

#### C. Earnings Explainer

```
Trigger: User taps "You'll receive X coins" in confirmation modal
Micro-lesson (3-step carousel):

Step 1: "Simple Breakdown"
- Icon: Calculator
- "You're getting 4.2% annual yield"
- Next button

Step 2: "How It Works"
- Icon: Flowchart
- "Your coins earn 0.35% monthly"
- Visual: $100 → $100.35 example

Step 3: "Next Steps"
- Icon: Calendar
- "First distribution: March 15"
- Action: "Subscribe" or "Ask more"

Design: Bottom sheet, 60% height, white
Font: Large (16px+) for clarity
Progress: 3 dots at bottom, auto-advance disabled
```

---

## Implementation Roadmap for ZR Securities

### Phase 1: Foundation (Weeks 1-2)
- Implement SFC risk notice component
- Add multi-asset portfolio display to Grow hub
- Create product comparison feature
- Build KIB modal structure

### Phase 2: Cognitive Enhancement (Weeks 3-4)
- Deploy "Invest Wisely" recommendation engine
- Create product explainer cards
- Build earnings dashboard
- Implement timeline comparison tool

### Phase 3: Compliance Automation (Weeks 5-6)
- Risk disclosure automation system
- Consent tracking database
- QR code integration for documentation
- Historical audit trail generation

### Phase 4: Refinement (Weeks 7-8)
- A/B testing of messaging (English/Cantonese)
- Regulatory review & sign-off
- Performance optimization
- User onboarding videos

---

## Design System Extensibility

### Component Additions Required
1. **Risk Badge Component** - 4 variants (low/med/high/extreme)
2. **Collapsible Info Section** - For compliance disclosure
3. **Timeline Chart** - For product duration visualization
4. **Earnings Graph** - For historical APY display
5. **Consent Checkbox** - Tracking compliance acceptance
6. **KYC Profile Indicator** - Risk tolerance display
7. **Education Modal** - Templated learning content
8. **Recommendation Card** - AI-suggested product

### Spacing Scale Additions
- **Compliance Margin:** 16px top/bottom for notices
- **Spacing Between Sections:** 24px (current 20px)
- **Disclosure Padding:** 12px (for warning boxes)

### New Font Weights
- **Legal Text:** 400 weight at 10px for fine print
- **Emphasis:** 600 weight for risk factors

---

**Document Version:** 1.0
**Last Updated:** March 2026
**Format:** Mobile-first, iOS 15+
**Next Review:** Upon regulatory requirements update
