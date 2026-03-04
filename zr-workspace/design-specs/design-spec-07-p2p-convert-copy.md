# OKX iOS Design Specification
## Home/Navigation/Discover Module for ZR Securities Competitive Analysis

---

## 1. Module Overview

### Platform: iOS (iPhone)
- **Device**: iPhone 14 Pro (1125 x 2436px, 390 x 812pt @3x)
- **Status Bar Height**: 54pt (includes notch)
- **Safe Area**: Full width × variable height
- **Bottom Tab Bar Height**: 83pt (including safe area)

### Navigation Architecture
The OKX iOS app features a **5-tab bottom navigation** structure:
1. **OKX** (Home/Exchange) - Primary trading hub
2. **Discover** - Featured content, announcements, promotions
3. **Trade** (Primary action button) - Black circular button
4. **Grow** - Asset growth products (savings, farming)
5. **Assets** - Portfolio, deposits, withdrawals

### Screen Hierarchy
- **Primary**: Home Screen (Exchange) - Crypto/asset listings with filters
- **Secondary**: Notifications Center - Market alerts, updates, announcements
- **Tertiary**: Search Results - Filtered asset views
- **Supporting**: Referral/Promotions - User engagement features

---

## 2. Screen Specifications

### 2.1 Home Screen - Header Zone (Y: 0-180pt)

| Component | Position | Dimensions | Details |
|-----------|----------|-----------|---------|
| Status Bar | Y: 0-18pt | 390×18pt | System time, signal, wifi, battery |
| Menu Icon | Y: 36-56pt | 44×44pt | Left corner, hamburger (⋮⋮⋮) |
| **Tab Switcher** | Y: 36-68pt | 280×36pt | Exchange/Wallet toggle |
| Tab: Exchange | Y: 40-64pt | 120×24pt | Active: white bg, rounded pill |
| Tab: Wallet | Y: 40-64pt | 120×24pt | Inactive: gray text |
| Gift Icon | Y: 36-64pt, X: 290-310pt | 24×24pt | Rewards button |
| Chat Icon | Y: 36-64pt, X: 320-340pt | 24×24pt | With red unread dot badge |
| Filter Pills | Y: 70-100pt | 390×30pt | Favorites, Top, Hot, Gainers, New |
| Column Headers | Y: 105-125pt | 390×20pt | Listed, Listing date, Change/Price |

### 2.2 Home Screen - Crypto List (Y: 130-700pt)

**Card Format** (358×84pt, 16pt margins):
```
[Icon] TICKER / Network    Price        % Change
        (44×44pt)          (14pt bold)  (Green/Red pill)
```

**Typography**:
- Ticker: 16pt **600 bold** black
- Network: 13pt regular #999999
- Price: 14pt regular black
- Change %: 14pt **600 bold**, green (#00B366) or red (#FF3B30)
- Background pill: 24×28pt, light alpha color

### 2.3 Home Screen - "View More" Button (Y: 710-750pt)
- Dimensions: 358×48pt
- Style: White background, 1pt #CCCCCC border
- Text: "View more", 16pt **600 bold**, center
- Border radius: 24pt

### 2.4 Home Screen - Announcements (Y: 760-1200pt)
- Title: "Announcements", 18pt **700 bold**
- Cards: ~100-140pt tall each
- Icon: 44×44pt colored circle
- Title: 14pt **600 bold**
- Description: 13pt #666666
- Timestamp: 12pt #999999

### 2.5 Home Screen - Bottom Tab Bar (Y: 1348-2436pt)

| Tab | Icon | Label | Position | Badge |
|-----|------|-------|----------|-------|
| OKX | House | "OKX" | Left 30pt | Green dot |
| Discover | Clock | "Discover" | 110pt | None |
| Trade | Arrow | Black circle (60×60pt) | Center | Primary CTA |
| Grow | Gear | "Grow" | 240pt | None |
| Assets | Wallet | "Assets" | 310pt | None |

- Icon size: 24×24pt
- Label: 10pt regular
- Tab height: 83pt (total with safe area)
- Trade button: 60×60pt black circle, centered above bar

### 2.6 Notifications Center (Y: 0-1000pt)

**Header** (Y: 0-68pt):
- Back arrow (24×24pt, left 16pt)
- Title: "Notifications", 20pt **700 bold**, centered
- Settings icon (24×24pt, right 16pt)
- Download icon (24×24pt, right 50pt)

**Filter Tabs** (Y: 68-108pt):
- All (Active: border pill style, 1pt #000000)
- Transactions, General updates, Market updates, Web3
- 14pt text, 8pt vertical padding, 12pt horizontal padding
- Border radius: 16pt pill style

**Notification Cards** (Y: 120+):
- Section header: 16pt **700 bold** (e.g., "Today")
- Icon: 44×44pt circular
- Title: 14pt **600 bold**
- Timestamp: 12pt #999999 (right aligned)
- Subtitle: 13pt #666666
- Unread dot: 8×8pt red (#FF3B30)
- Card height: ~70pt
- Card margin: 16pt horizontal, 12pt vertical

**Modal Dialog** ("Mark as read"):
- Dimensions: 280×160pt, centered
- Border radius: 12pt
- Title: "Mark as read", 20pt **700 bold**
- Body: 14pt #666666
- Button: 48×48pt black (#000000), white text, border radius 8pt
- Shadow: 0.3 alpha deep drop shadow

### 2.7 Referral Screen Header
- Back arrow (24×24pt, left 16pt)
- Title: "Referral", 20pt **700 bold**
- Info icon (24×24pt, right 16pt)

### 2.8 Referral - Link/Code Boxes (Y: 360-490pt)
- Dimensions: 358×60pt each
- Border: 1pt #E5E5E5
- Background: White
- Border radius: 8pt
- Label: 14pt #666666
- Content: 14pt monospace (or 18pt **600 bold** for code)
- Copy icon: 24×24pt right aligned

### 2.9 Referral - Share Buttons (Y: 520-600pt)
- Title: "Share to", 16pt **700 bold**
- 5 buttons in row: Contact, WhatsApp, X, QR Code, More
- Button size: 56×56pt
- Icon: 28×28pt white, centered
- Label: 12pt regular black, below button
- Border radius: 16pt
- Spacing: 12pt between buttons

---

## 3. Component Library

### Button Types

| Type | Size | Background | Border | Text | Use |
|------|------|-----------|--------|------|-----|
| Primary CTA | 358×48pt | #000000 | None | 16pt **600** white | Main actions |
| Tab Active | Variable×28pt | Transparent | 1pt #000000 | 14pt **600** black | Active filter |
| Tab Inactive | Variable×28pt | Transparent | None | 14pt regular #CCCCCC | Inactive |
| Icon | 44×44pt | Transparent | None | 24×24pt icon | Header/action |
| Pill | 56-88×36pt | Light alpha | None | 12-14pt | Filters, share |
| Circle | 60×60pt | #000000 | None | 28×28pt white icon | Trade button |
| Secondary | 358×48pt | White | 1pt #CCCCCC | 16pt **600** black | Alternative |

### Cards

| Type | Size | Background | Border | Shadow | Use |
|------|------|-----------|--------|--------|-----|
| Crypto | 358×84pt | White | None | Light 0.1α | List items |
| Announcement | 358×90pt | White | None | Light 0.1α | News |
| Modal | 280×160pt | White | None | Deep 0.3α | Dialogs |
| Referral | 358×60pt | White | 1pt #E5E5E5 | None | Forms |

---

## 4. Color Palette

### Primary
| Token | Hex | Use |
|-------|-----|-----|
| Black | #000000 | Primary text, buttons |
| White | #FFFFFF | Backgrounds |
| Green | #00B366 | Positive, gains, CTA |
| Red | #FF3B30 | Negative, losses, alerts |

### Grays
| Token | Hex | Use |
|-------|-----|-----|
| Dark Gray | #333333 | Secondary text |
| Medium Gray | #666666 | Tertiary text |
| Light Gray | #999999 | Disabled, timestamps |
| Very Light Gray | #CCCCCC | Borders, inactive |
| Background | #F5F5F5 | Input backgrounds |
| Border | #E5E5E5 | Card borders |

### Crypto Brand Colors
- Polygon (MATIC): #8247E5
- Ripple (XRP): #23292F
- Solana (SOL): #9945FF
- Dogecoin (DOGE): #C9A227
- Bitcoin (BTC): #F7931A
- Ethereum (ETH): #627EEA

---

## 5. Typography

### Font Family
- Primary: -apple-system (San Francisco)
- Fallback: Helvetica Neue, system-ui
- Monospace: SF Mono

### Type Scale

| Name | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| H1 | 32pt | 700 | 40pt | Page titles |
| H2 | 20pt | 700 | 28pt | Screen titles |
| H3 | 18pt | 700 | 24pt | Section headers |
| H4 | 16pt | 700 | 22pt | Card titles |
| Body Large | 16pt | 400 | 22pt | Primary text |
| Body Regular | 14pt | 400 | 20pt | Standard text |
| Body Small | 13pt | 400 | 18pt | Secondary info |
| Caption | 12pt | 400 | 16pt | Timestamps |
| Label | 12pt | 600 | 16pt | Field labels |
| Overline | 10pt | 600 | 14pt | Tab labels |

---

## 6. Interaction Patterns

### Tab Navigation (Exchange/Wallet)
- **Trigger**: Tap tab
- **Animation**: Cross-fade, 300ms
- **Visual**: Active = black text + border pill, Inactive = gray text
- **Duration**: Persists until changed

### Bottom Navigation (5-tab bar)
- **Trigger**: Tap any tab
- **Animation**: Slide in from bottom, 400ms
- **Active Indicators**: Green dot badge (OKX), black icon
- **Trade Button**: Center black circle scales slightly

### Notification Badge
- **Trigger**: New notification
- **Visual**: Red dot (8×8pt #FF3B30) on chat icon
- **Tap**: Navigate to Notifications Center

### Filter Pills (Search)
- **Default**: Gray background, black text
- **Active**: Black background OR black border
- **Behavior**: Toggle on tap, horizontal scroll
- **Live**: Real-time filtering, no spinner

### Crypto Card
- **Tap**: Navigate to detail
- **Visual Feedback**: Light dark overlay (0.05α), ~100ms
- **Swipe**: (Optional) Left for buy/sell

### "View More" Button
- **Trigger**: Tap
- **Behavior**: Paginate (+20 items), append to list
- **Animation**: Fade in with 50ms stagger

### Announcement Card
- **Tap**: Navigate to full detail
- **Unread**: Red dot indicator, subtle background tint
- **After Read**: Dot disappears

### Modal Dialog
- **Appearance**: Slide up 300ms, dim background (0.4α black)
- **Dismiss**: Tap outside or button
- **Locked**: No swipe-to-dismiss

### Notification Center Tabs
- **Switch**: Scroll horizontally, fade content
- **Reset**: Scroll position to top
- **Mark as Read**: Swipe left or modal confirm
- **Delete**: Swipe left option

---

## 7. ZR Securities Adaptations

### 7.1 Multi-Asset Home
Replace crypto-only view with tabbed interface:
```
Tabs: | Stocks | ETFs | Crypto | Watchlist |
```

Add asset class badges per card:
- "STOCK" (blue), "ETF" (green), "CRYPTO" (orange)
- 8pt label, 4pt padding
- Additional columns: Market Cap, PE Ratio, Dividend Yield (optional)

### 7.2 Exchange Hours Status
Location: Below header tabs

```
NYSE: Open (2h 15m left)
NASDAQ: Open
London: Closed (Opens 8:00 AM)
```

- Height: 84-120pt
- Background: Status-colored (green for open, gray for closed, blue for pre-market)
- Text: 13pt + 12pt subtext
- Icon: 8pt status dot
- Tap: Expand to market calendar modal
- Info icon: Market hours details

### 7.3 Personalized Watchlist
Add section below announcements:
```
My Watchlist                          Edit
AAPL    $189.50    +1.23%
MSFT    $423.15    -0.45%
TSLA    $256.89    +3.67%
GOLD    $2,051     -1.12%
```

- 18pt **700 bold** title
- 358×70pt cards (same as asset cards)
- Edit button: 44×24pt "Edit" 14pt
- Reorder: Long-press drag handle
- Tap: Navigate to detail

### 7.4 Portfolio Overview Header
Alternative or companion to watchlist:
```
Portfolio
Total Value: $125,450.32
Day Change: +$2,340.12 (+1.87%)
Week Change: -$5,200.00 (-3.99%)
```

- 100-120pt height
- Subtle gradient or white with border
- Tappable: Full portfolio breakdown modal
- Real-time updates (every 5s)

### 7.5 Market News/Economic Calendar
Replace "Announcements" section:
```
Market News & Events                  All
🔴 HIGH IMPACT - US Fed Interest Rate Decision (Today)
Expected: 5.25-5.50% | Previous: 5.25-5.50%

⚠️  MODERATE - EuroZone GDP Growth (Today)
Expected: 0.1% | Previous: 0.1%
```

- Impact badge: 🔴 red / ⚠️ orange / 🟢 green / 🔵 blue
- Height: 85-110pt per event
- Tap: Full details + countdown timer

### 7.6 Price Alerts in Notifications
Add filter tab in Notifications Center:
```
Filters: | All | Transactions | General | Market Hours | Price Alerts | News |
```

Price Alert Card:
```
Alert: AAPL Above Target              10:45 AM
Set price: $185.00
Current: $189.50 ✓ (Triggered)
Action: [Buy] [Dismiss]
```

Status icons:
- ✓ Triggered (green checkmark)
- ⏳ Pending (hourglass)
- ✗ Missed (red X)

### 7.7 Sector/Industry Grouping
Add collapsible headers to asset list:
```
TECHNOLOGY (Expanded)                 ▼
AAPL    $189.50    +1.23%
MSFT    $423.15    -0.45%
GOOGL   $139.82    +2.14%

FINANCE (Collapsed)                   ▶
HEALTHCARE (Collapsed)                ▶
```

- Header: 14pt **600 bold**, background #F5F5F5
- Chevron: 16×16pt
- Animation: 300ms slide in

### 7.8 Market Settings
Add to Settings page:
- Preferred Market Hours Display (All / Primary only / US only)
- Default Asset Class (Stocks / Crypto)
- Price Update Frequency (Real-time / 15-min / End-of-day)
- Show Economic Calendar (Toggle)
- Enable Price Alerts (Toggle)
- Notify on Market Open/Close (Toggle)

---

## 8. Design Principles

1. **Information Hierarchy**: Prices and changes prominent
2. **Scannable**: Tabs, pills, and horizontal scroll for multiple assets
3. **Responsive Feedback**: All interactions include visual feedback
4. **Consistent Spacing**: 16pt and 12pt margins throughout
5. **Semantic Colors**: Green = positive/action, Red = negative/warning
6. **Touch-Friendly**: Minimum 44pt targets
7. **Modular**: Reusable buttons, cards, inputs
8. **Real-time**: Updates without loading spinners
9. **Accessible**: High contrast, readable text, accessible targets

---

**Version**: 1.0  
**Updated**: March 4, 2026  
**Platform**: iOS 15+  
**Device**: iPhone 390pt width (all models)  
**Reference**: 1125×2436px (iPhone 14 Pro)
