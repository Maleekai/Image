# OKX iOS Settings/Security Module Design Specification
## ZR Securities Competitive Analysis

**Document Date:** March 2026
**Analysis Scope:** Settings, Security, User Center, Trading Fee Tier modules
**Device Target:** iOS (iPhone viewport: 390px width)

---

## 1. Module Overview

The OKX iOS application implements a sophisticated Settings/Security ecosystem comprising four primary modules:

- **Menu Hub (056):** Primary navigation entry point and quick-access shortcuts
- **Settings (058):** Main configuration page with account management
- **User Center/Security (068):** Identity verification, profile management, trading tier status
- **DApp Discovery (062):** Rewards center and ecosystem exploration interface

### Navigation Architecture
- **Hierarchy:** Bottom tab bar → User center → Settings/Security tabs
- **Primary Entry:** "More" menu icon (⋯) in wallet interface or profile icon in header
- **Navigation Pattern:** Left-aligned back button (<) for stack-based navigation

---

## 2. Screen-by-Screen Pixel Specifications

### 2.1 Menu Hub (056_Menu) - Profile Entry Point

**Screen Dimensions:** 390px width × 844px height (iPhone 14 standard)
**Safe Area Insets:** 44px top (status bar), 34px bottom (home indicator)

#### Layout Zones:

| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Status Bar | 0px | 44px | Time (9:41), signal, battery |
| Tab Navigation | 44px | 56px | NFT / Crypto / Drops tabs |
| Search Bar | 100px | 44px | Rounded search input, magnifying glass icon |
| Promotional Banner | 156px | 220px | Rounded rectangle (12px radius), gradient overlay (navy→transparent), text overlay |
| Menu Grid | 400px | 300px | 4-column grid with action items |
| Home Indicator | 810px | 34px | Rounded rectangle bar |

#### Typography:
- **Header Tabs:** SF Pro Display, 16px, weight 600, #000
- **Search Placeholder:** SF Pro Display, 16px, weight 400, #999
- **Menu Labels:** SF Pro Display, 13px, weight 500, #000
- **Menu Icon Size:** 32px × 32px

#### Colors:
- **Background:** #FFFFFF (pure white)
- **Secondary Text:** #B3B3B3 (light gray)
- **Accent:** #F7931A (orange for icons)
- **Banner Overlay:** #000000 with 30% opacity

---

### 2.2 Settings Main View (058_Settings) - Wallet Dashboard

**Screen Dimensions:** 390px width × 844px height
**Safe Area Insets:** 44px top, 34px bottom

#### Layout Zones:

| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Status Bar | 0px | 44px | Hamburger menu, Exchange/Wallet tabs, search, notifications |
| Account Header | 44px | 90px | Avatar (52px diameter), wallet address, balance |
| Action Buttons | 134px | 60px | Send, Receive, Scan, History, More |
| Promotional Card | 194px | 80px | "Enjoy free giveaways" with rounded corner image |
| Asset Tabs | 274px | 40px | Crypto / NFTs / DeFi / Approvals |
| Asset Grid | 314px | 300px | Card-based layout with thumbnail images |
| Bottom Navigation | 810px | 34px | Home, Trade, Marketplace, DeFi, Discover tabs |

#### Action Buttons Specifications:
- **Container Height:** 56px
- **Button Width:** 68px
- **Icon Size:** 24px × 24px
- **Label Font:** SF Pro Display, 11px, weight 500
- **Spacing:** 8px between buttons (distributed across 390px width)
- **Icon Style:** Outline stroke, 2px weight

#### Colors:
- **Balance Text:** #000000, SF Pro Display Bold 24px
- **Address Text:** #666666, 12px
- **Label Text:** #000000, 11px

---

### 2.3 User Center / Security Tab (068_Security) - Profile Management

**Screen Dimensions:** 390px width × 844px height
**Safe Area Insets:** 44px top, 34px bottom

#### Layout Zones:

| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Header | 0px | 60px | Back button, "User center" title, profile menu icon |
| Profile Card | 60px | 120px | Avatar (80px), email, edit icon overlay |
| Tab Navigation | 180px | 44px | Profile / Security / Preferences / Notifications |
| Identity Section | 224px | 56px | "Identity verification" + "Verified" badge (green), chevron |
| Country Section | 280px | 56px | "Country/Region" with chevron |
| Fee Tier Section | 336px | 56px | "Trading fee tier" + "Lvl 1" badge, chevron |
| UID Section | 392px | 56px | "UID" + copy button, monospace value |
| Nickname Section | 448px | 56px | "Nickname" + @gmail.com display, chevron |
| Bio Section | 504px | 56px | "Bio" + "Add now" (red dot), chevron |
| Connected Accounts | 560px | 56px | "Connected accounts", chevron |

#### Tab Navigation Styling:
- **Font:** SF Pro Display, 14px, weight 500
- **Active Tab:** #000000, underline (2px solid, full width of text)
- **Inactive Tab:** #CCCCCC
- **Underline Position:** Bottom, 4px below text baseline

#### Verification Badge Styling:
- **Container:** 24px height × auto width
- **Background:** #F0FFFF (light cyan)
- **Border:** 1px solid #1EC989 (green)
- **Text:** #1EC989, SF Pro Display 12px weight 600
- **Padding:** 4px 12px
- **Border Radius:** 4px

#### List Row Styling:
- **Height:** 56px
- **Padding:** 16px horizontal, centered vertically
- **Divider:** #F5F5F5, 1px, 16px left inset
- **Font (Label):** SF Pro Display, 16px, weight 500, #000000
- **Font (Value):** SF Pro Display, 14px, weight 400, #999999
- **Chevron:** 24px × 24px, gray (#CCCCCC), right-aligned 16px from edge

---

### 2.4 Menu Hub Secondary View (068_Security - Image 2) - Quick Access Menu

**Screen Dimensions:** 390px width × 844px height

#### Layout Zones:

| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Profile Header | 0px | 100px | Avatar (56px), email, verification badge, edit icon |
| Shortcuts Section | 100px | 140px | 4 icon buttons (Support, Demo Trading, Rewards Center, Buy) |
| Manage Assets | 240px | 140px | 5 icon buttons (Buy, Sell, Deposit, Withdraw, P2P Trading) |
| Trade Section | 380px | 180px | 8 icon buttons (Convert, Spot, Margin, Futures, Options, Bots, Copy, Demo) |
| Grow Section | 560px | 100px | Footer section with grow opportunities |

#### Quick Access Button Specifications:
- **Container Width:** 88px
- **Container Height:** 120px
- **Icon Size:** 48px × 48px
- **Icon Style:** Outline stroke, 2px weight
- **Label Font:** SF Pro Display, 12px, weight 500, centered below icon
- **Spacing Between Items:** 12px horizontal gap
- **Rows:** 4 items per row, distributed evenly

#### Colors:
- **Icon Stroke:** #000000
- **Label:** #000000

---

### 2.5 DApp Discovery / Trading Tier (062_Trading_fee_tier) - Rewards & Ecosystem

**Screen Dimensions:** 390px width × 844px height

#### Layout Zones (Image 355):

| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Tab Navigation | 0px | 44px | DApp / Cryptopedia / Events tabs |
| Rewards Callout | 44px | 40px | "earn exciting rewards" text |
| App Grid | 84px | 110px | 4 app cards (Galxe, TaskOn, Zealy, SoQuest) |
| News Section | 194px | 120px | Horizontal scrolling news cards |
| FAQ Section | 314px | 280px | Expandable Q&A items with chevrons |
| Bottom Navigation | 810px | 34px | 5-item tab bar |

#### App Card Styling:
- **Width:** 88px
- **Height:** 110px
- **Icon Size:** 60px × 60px
- **Border Radius:** 16px
- **Title Font:** SF Pro Display, 11px, weight 500, centered below
- **Background:** Various brand colors (Galxe: #000000, TaskOn: #1FD4C9, Zealy: #D91E63, SoQuest: #C9A844)

#### FAQ Styling:
- **Container Height:** 60px (collapsed), expandable
- **Question Font:** SF Pro Display, 16px, weight 600, #000000
- **Divider:** 1px #E8E8E8, full width
- **Chevron:** Right-aligned, 20px × 20px

#### Colors:
- **Section Header:** #000000, 18px weight 700
- **Text:** #666666, 14px
- **Chevron:** #CCCCCC

---

#### Layout Zones (Image 356 - Cryptopedia):

| Zone | Y Position | Height | Content |
|------|-----------|--------|---------|
| Page Title | 44px | 60px | "OKX Cryptopedia" heading + description |
| Rewards Center | 104px | 60px | Icon + text, right chevron |
| Live Now Section | 164px | 280px | Multi-card carousel with badge labels |
| Tag Badges | 180px | 28px | "Season 15" (lime), "High reward" (lime) |

#### Reward Card Styling:
- **Width:** 340px (near-full screen)
- **Height:** 160px
- **Border Radius:** 12px
- **Icon (Circular):** 80px diameter, right-aligned
- **Title Font:** SF Pro Display, 16px, weight 700, white
- **Description Font:** SF Pro Display, 14px, weight 400, light gray
- **Background:** Dark gradient (navy→black)

#### Action Button (Go →):
- **Width:** 80px
- **Height:** 40px
- **Border Radius:** 20px
- **Background:** #CCFF00 (lime)
- **Text:** #000000, SF Pro Display 14px weight 600
- **Position:** Right-aligned, 16px margin

---

## 3. Component Library

### 3.1 Navigation Components

| Component | Dimensions | Styling | Usage |
|-----------|-----------|---------|-------|
| Back Button | 44px × 44px | Left-aligned, hit area 44×44 | Screen navigation, full-screen tappable |
| Chevron Right | 20px × 20px | Outline stroke #CCCCCC | Menu items, expandable rows |
| Tab Bar (5 items) | Full width × 60px | Outline icons, centered labels | Main navigation |
| Secondary Tabs | Auto width × 44px | Text-based, underline indicator | Profile/Security/Preferences |
| Hamburger Menu | 24px × 24px | 3-line stroke | Left header alignment |

### 3.2 Form Components

| Component | Dimensions | Styling | Usage |
|-----------|-----------|---------|-------|
| Toggle Switch | 51px × 31px | Rounded pill, green when active | Settings rows |
| Text Input | 340px × 44px | Rounded 8px, border #EFEFEF | Search, form fields |
| Dropdown Row | Full width × 56px | Label + value + chevron | Selection inputs |
| Copy Button | 20px × 20px | Outline square icon | UID, values |
| Badge (Verified) | Auto × 24px | Green border, cyan background | Status indicators |

### 3.3 Card Components

| Component | Dimensions | Styling | Usage |
|-----------|-----------|---------|-------|
| Promotional Banner | 340px × 220px | Rounded 12px, overlay text | Hero promotion |
| Asset Card | 160px × 200px | Rounded 8px, thumbnail image | Grid layout |
| Profile Card | Full width × 120px | Avatar 80px, edit icon overlay | Header section |
| Quick Action Icon | 88px × 120px | Icon 48px, label below | Grid of actions |
| Reward Card | 340px × 160px | Rounded 12px, dark gradient | Featured content |

### 3.4 Badge & Status Components

| Component | Dimensions | Styling | Usage |
|-----------|-----------|---------|-------|
| Green Verified | 24px × auto | #1EC989 border, #F0FFFF bg | Identity status |
| Lime Tag | Auto × 28px | #CCFF00 bg, #000 text, 4px radius | Feature labels |
| Green Checkmark | 32px × 32px | Circular, solid green | Success states |
| Red Dot | 8px × 8px | Solid #E74C3C | Action indicators |
| Level Badge | 40px × auto | Gray text, right-aligned | Tier status (Lvl 1, etc.) |

---

## 4. Color Tokens

### Primary Colors
```
Primary Black:        #000000 (text, icons, primary actions)
Secondary Gray:       #666666 (secondary text)
Tertiary Gray:        #999999 (disabled, tertiary text)
Light Gray:           #CCCCCC (borders, inactive elements)
Lighter Gray:         #E8E8E8 (subtle dividers)
Lightest Gray:        #F5F5F5 (background dividers)
Pure White:           #FFFFFF (backgrounds)
```

### Accent Colors
```
Success Green:        #1EC989 (verification, positive actions)
Light Cyan:           #F0FFFF (badge backgrounds)
Lime Green:           #CCFF00 (promotional tags, CTAs)
Orange:               #F7931A (icons, accents)
Error Red:            #E74C3C (alerts, error states)
Dark Navy:            #000033 (gradient overlays)
```

### Brand Colors (App Icons)
```
Galxe:                #000000
TaskOn:               #1FD4C9 (cyan)
Zealy:                #D91E63 (magenta)
SoQuest:              #C9A844 (gold)
zkLink:               #000000 with flame gradient
Solana:               #1CC9EB (cyan)
```

---

## 5. Typography Scale

### Font Family
**Primary Font:** SF Pro Display (system font for iOS)

### Typographic Levels

| Level | Font Size | Weight | Line Height | Usage |
|-------|-----------|--------|-------------|-------|
| Display | 28px | 700 | 36px | Large headings |
| Heading 1 | 22px | 700 | 28px | Page titles, major sections |
| Heading 2 | 18px | 700 | 24px | Section headers |
| Heading 3 | 16px | 600 | 22px | List labels, form titles |
| Body 1 | 16px | 400 | 22px | Primary body text |
| Body 2 | 14px | 400 | 20px | Secondary body text |
| Label | 12px | 500 | 16px | Labels, tags |
| Caption | 11px | 500 | 14px | Small captions, tabs |
| Monospace | 12px | 400 | 16px | UID, values (SF Mono) |

### Specific Component Typography

**Balance Display:** SF Pro Display, 24px, weight 700, #000000
**Email/Address:** SF Pro Display, 12px, weight 400, #666666
**Tab Labels:** SF Pro Display, 14px, weight 500, active #000 / inactive #CCC
**Menu Items:** SF Pro Display, 16px, weight 500, #000000
**Secondary Menu:** SF Pro Display, 14px, weight 400, #999999

---

## 6. Interaction Patterns

### 6.1 Navigation Flows

#### Primary Flow: Menu → User Center → Security
1. **Trigger:** Tap profile icon (top right) OR tap "More" (⋯) button
2. **Animation:** Slide-in from bottom or push animation
3. **Breadcrumb:** Back button appears, styled as `<` (24px)
4. **Return:** Pop previous view, maintain scroll position

#### Secondary Flow: Profile Tab Selection
1. **Element:** Horizontal tab bar (Profile / Security / Preferences / Notifications)
2. **Animation:** Smooth underline transition (2px solid, 200ms)
3. **Content:** Fade-in new content below tabs (150ms)
4. **State:** Active tab text bold (#000), inactive (#CCC)

### 6.2 Settings Toggle Interaction

**Component:** iOS-style toggle switch (51px × 31px)
- **State - Off:** Gray background #E8E8E8, white circle left-aligned
- **State - On:** Green background #1EC989, white circle right-aligned
- **Animation:** Spring animation (damping: 0.8, stiffness: 150)
- **Touch Target:** 44px × 44px hit area, extends beyond visual bounds

### 6.3 List Row Interaction

**Component:** Full-width settings row (56px height)
- **Tap State:** Highlight background #F5F5F5 (100ms)
- **Chevron:** Rotate 45° on tap, reset on release
- **Haptic:** Subtle tap feedback (iOS medium impact)
- **Navigation:** Push new screen with back button

### 6.4 Badge/Verification Indicators

**Verified Badge Flow:**
1. **Display:** Green border + cyan background, right-aligned
2. **Tap:** Optional - show verification details in modal
3. **Status States:**
   - Verified: Green (#1EC989), solid border
   - Pending: Orange (#F7931A), dashed border
   - Unverified: Gray (#CCCCCC), dashed border

### 6.5 Card Interactions

**Promotional Banner:**
- **Tap:** Deep link to specific campaign
- **Visual Feedback:** 2% scale down (210, stiffness: 100)
- **Overlay:** Dark gradient fades in on tap (200ms)

**Quick Action Icons:**
- **Tap:** Navigate to action (Buy, Sell, Deposit, Withdraw)
- **Feedback:** Scale 0.95 on touch down, spring back
- **Label Display:** Fade in below icon (100ms)

**Reward Cards:**
- **Scroll:** Horizontal carousel with momentum
- **Tap:** Navigate to campaign details
- **Loading:** Skeleton placeholders (animated gradient)

---

## 7. ZR Securities Adaptation Strategy

### 7.1 Compliance Settings Module

**New Tab Addition:** Security/Compliance (alongside existing Profile/Security tabs)

#### Compliance Checklist Component:
```
Height: Auto (expandable sections)
Sections:
├─ KYC Status (Identity verification)
│  ├─ Full Name Verification: [Status Badge]
│  ├─ Government ID Verification: [Status Badge]
│  └─ Address Verification: [Status Badge]
├─ AML Screening
│  └─ Sanctions List Check: [Status Badge]
└─ Ongoing Monitoring
   └─ Transaction Monitoring: [Status Badge]
```

**Status Badge Colors:**
- Completed: Green (#1EC989)
- In Progress: Orange (#F7931A)
- Failed: Red (#E74C3C)
- Pending: Gray (#CCCCCC)

### 7.2 Exchange Configuration Panel

**Location:** Settings main view, new section "Exchange Configuration"

#### Configuration Options:
| Option | Type | Current State UI |
|--------|------|------------------|
| Trading Jurisdictions | Multi-select dropdown | Expandable list with checkmarks |
| Fiat Currency | Dropdown | Selected currency with flag icon |
| Reporting Currency | Dropdown | Selected for tax reporting |
| Settlement Currency | Dropdown | For P2P trading |
| KYC Tier | Read-only display | "Premium" with verified badge |

**Row Styling:** Identical to existing settings rows (56px × full width)

### 7.3 SFC Reporting Module

**New Accordion Section:** "Regulatory Reporting"

#### Report Types:
```
├─ Monthly Holdings Report
│  ├─ Status: [Generate] button
│  ├─ Last Generated: [Date]
│  └─ Download PDF
├─ Transaction Report (Custom Date Range)
│  ├─ From Date: [Picker]
│  ├─ To Date: [Picker]
│  └─ Generate: [Button]
└─ Tax Summary
   ├─ Realized Gains/Losses: $0.00
   ├─ Unrealized Gains/Losses: $0.00
   └─ Export to Tax Software: [Button]
```

**Button Styling:**
- **Primary (Generate):** 44px height, lime background (#CCFF00), rounded 22px
- **Secondary (Download):** 44px height, white border, text color black
- **Disabled:** Gray background (#E8E8E8), opacity 0.5

### 7.4 Security Score Visualization

**Dashboard Card:** Top of Settings view (above existing sections)

```
┌─────────────────────────────────────┐
│ Security Score: 92/100              │
│ ████████████████░░ Excellent        │
│                                     │
│ • 2FA Enabled: ✓                    │
│ • Hardware Wallet Connected: ✓      │
│ • API Keys Limited: ✓               │
│ • Whitelisted Addresses: ✓          │
│ • Password Strength: Strong ✓       │
│ → Review Security Recommendations   │
└─────────────────────────────────────┘
```

**Progress Bar Specifications:**
- **Container Height:** 8px
- **Filled Section:** Background #1EC989
- **Empty Section:** Background #E8E8E8
- **Border Radius:** 4px
- **Width:** Full card width minus padding (340px)
- **Animation:** Slide-in on page load (600ms, ease-out)

**Checklist Items:**
- **Font:** SF Pro Display, 13px, weight 500
- **Checkmark:** Green (#1EC989), 16px
- **Missing:** Red (#E74C3C), 16px exclamation

### 7.5 Restricted Jurisdictions Notice

**Location:** Top of Settings, below user profile card

```
┌─────────────────────────────────────┐
│ ⚠️  Geographic Restriction            │
│                                     │
│ Based on your location, certain     │
│ features are unavailable.           │
│ [Learn More] [Change Region]        │
└─────────────────────────────────────┘
```

**Styling:**
- **Background:** #FFF9E6 (light yellow)
- **Border:** 1px solid #F7931A (orange)
- **Border Radius:** 8px
- **Icon:** 16px warning triangle
- **Text:** SF Pro Display, 13px, #333333
- **Links:** Color #F7931A, weight 600

### 7.6 Transaction Limits Display

**New Row in Settings:** "Daily/Monthly Limits"

```
Daily Withdrawal Limit: $50,000 [Edit]
Monthly Trading Limit: $500,000 [Edit]
Level Required: Premium ✓
```

**Styling:**
- **Row Height:** 56px + expandable to 120px
- **Edit Button:** 44px × 44px, outline style, chevron right
- **Expansion:** Shows detailed breakdown with remaining limits

### 7.7 Audit Log Access

**New Section:** "Security Audit Log" (expandable accordion)

```
┌─────────────────────────────────────┐
│ 🔒 Security Audit Log               │
│                                     │
│ Mar 03, 2026 09:41 Login from iPhone│
│ Mar 03, 2026 08:15 Password Changed │
│ Mar 02, 2026 15:30 2FA Enabled      │
│ [View All Activity]                 │
└─────────────────────────────────────┘
```

**Log Entry Styling:**
- **Height:** 48px per entry
- **Date/Time:** SF Pro Display, 12px, #666666
- **Action:** SF Pro Display, 13px, #000000, bold
- **Device:** SF Pro Display, 11px, #999999
- **Divider:** 1px #E8E8E8

### 7.8 Identity Verification Enhanced Flow

**Current Component - Upgrade:**

```
Original:
├─ Identity verification
│  └─ Verified [green badge]

Enhanced for ZR:
├─ Identity verification
│  ├─ Status: Verified [green badge]
│  ├─ Document Type: Passport
│  ├─ Verified on: Feb 28, 2026
│  ├─ Expiry: Feb 28, 2027
│  └─ [Renew] [View Document]
```

**New Buttons:**
- **Renew:** 44px height, border style, orange text
- **View:** 44px height, filled lime (#CCFF00) background

### 7.9 API Key Management

**New Settings Section:** "API Keys & Integrations"

```
┌─────────────────────────────────────┐
│ Connected Applications              │
│                                     │
│ Tax Software Integration            │
│ ├─ Status: Active                   │
│ ├─ Last Sync: 2 hours ago           │
│ └─ [Disconnect] [Settings]          │
│                                     │
│ Trading Bot Integration             │
│ ├─ Status: Inactive                 │
│ └─ [Connect] [View API Docs]        │
│                                     │
│ [+ Add New Integration]             │
└─────────────────────────────────────┘
```

**Integration Card:**
- **Height:** 88px
- **Title Font:** SF Pro Display, 14px, weight 600
- **Status Font:** SF Pro Display, 12px, #666666
- **Buttons:** 32px height, outline style, 8px radius

### 7.10 Mobile Implementation Guidance

#### Screen Layout Adaptation:
- **Accordion Pattern:** Recommended for compliance sections (expandable on tap)
- **Modal Dialogs:** Use for confirmation of regulatory actions (100vh modal)
- **Bottom Sheet:** Preferred for date pickers, multi-select dropdowns
- **Loading States:** Skeleton screens with 1.5s animation duration

#### Haptic Feedback:
- **Light Impact:** Toggle switches, radio button selection
- **Medium Impact:** Form submission, significant state changes
- **Heavy Impact:** Error states, sensitive operations (require confirmation)

#### Accessibility:
- **Minimum Touch Target:** 44px × 44px (all interactive elements)
- **Contrast Ratio:** 4.5:1 for all text (WCAG AA compliance)
- **VoiceOver:** All sections labeled, buttons have descriptive titles
- **Dynamic Text:** Support for system text sizing (17px max)

---

## 8. Design Implementation Checklist for ZR Securities

### Phase 1: Core Settings Module Adaptation
- [ ] Add Compliance tab to User Center (match existing tab styling)
- [ ] Create KYC status checklist component
- [ ] Implement compliance badge system (3 states: completed/pending/failed)
- [ ] Add Security Score card (dashboard metric with progress bar)
- [ ] Create restricted jurisdiction notice component

### Phase 2: Regulatory Configuration
- [ ] Build Exchange Configuration panel (jurisdiction selection)
- [ ] Implement fiat/reporting currency dropdowns
- [ ] Add KYC tier display with verification badge
- [ ] Create reporting currency selector
- [ ] Add regulatory disclaimer toggle

### Phase 3: Reporting & Compliance
- [ ] Build SFC Reporting module with monthly/custom report generation
- [ ] Implement tax summary calculation display
- [ ] Create PDF export buttons (hooks to backend)
- [ ] Add date range picker for transaction reports
- [ ] Build report history/download manager

### Phase 4: Security Enhancements
- [ ] Create Transaction Limits display/editor
- [ ] Build Audit Log component with timestamp filters
- [ ] Implement API Key management section
- [ ] Add integration status indicators
- [ ] Create security recommendation engine

### Phase 5: Polish & Testing
- [ ] Validate color contrast (WCAG AA)
- [ ] Test all interactions on iOS 15+ (haptic feedback)
- [ ] Implement loading states for all async operations
- [ ] Add error handling UI (network, permission errors)
- [ ] Test on devices: iPhone SE (2nd gen), iPhone 14 Pro Max

---

## 9. Pixel-Perfect Spacing Reference

### Standard Padding/Margins
```
xs: 4px      (micro-spacing, icons)
sm: 8px      (tight spacing)
md: 12px     (item spacing)
lg: 16px     (standard padding)
xl: 20px     (section margins)
xxl: 24px    (major sections)
```

### Standard Gaps
```
Grid Column Gap: 12px
List Item Gap: 56px (height including divider)
Section Bottom Margin: 24px
Card Padding: 16px
Inset Padding: 16px (horizontal), 12px (vertical)
```

### Z-Index Stacking
```
Base: 0
Cards/Sections: 1
Modals: 10
Alerts/Toasts: 20
Loading Overlays: 30
```

---

## 10. Appendix: OKX Design Patterns Summary

### Consistent Patterns Across Screens
1. **Header Pattern:** Left back button + center title + right menu/icons (44px height)
2. **List Pattern:** 56px rows with dividers, chevrons right-aligned
3. **Tab Pattern:** Horizontal scrolling tabs with animated underline
4. **Button Pattern:** Rounded 22px, full-width at bottom or inline
5. **Badge Pattern:** Thin border with background color, right-aligned
6. **Icon Pattern:** 24px outline strokes, gray when inactive
7. **Modal Pattern:** Full-screen slide-up with rounded top corners
8. **Loading Pattern:** Skeleton screens with gradient animation
9. **Error Pattern:** Full-width banner with icon + dismiss button
10. **Success Pattern:** Centered checkmark + message + action button

### Recommended Font Weights
- Headers: 700 (bold)
- Labels/Tabs: 600 (semibold)
- Primary text: 500 (medium)
- Secondary text: 400 (regular)
- Values/Monospace: 400 (regular)

---

**End of Design Specification Document**

Version 1.0 | Prepared for ZR Securities | March 2026
