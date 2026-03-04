# OKX iOS Design System Specifications
## For ZR Securities Competitive Analysis & Adaptation

---

## 1. Module Overview: Onboarding/Login Flows

### Current OKX Journey Architecture
OKX employs a **multi-stage onboarding** with light/dark mode duality:
1. **Splash Screens** (001-003): Dark, minimalist branding with animated transitions
2. **Email Verification** (010-011): Light theme with code entry and numeric keypad
3. **Main Dashboard** (413-414): Dark trading interface with product discovery

### Key Characteristics
- **Splash Phase**: Heavy animation (loading states, grid effects)
- **Verification Phase**: Light background for accessibility during critical security steps
- **Post-Login**: Dark trading interface (reduced eye strain for 24/7 trading)
- **No visible KYC/Compliance steps** in sampled flow - suggests deferred or separate journey

---

## 2. Screen-by-Screen Pixel Specifications

### Screen 001: Splash/Loading Screen (1125 × 2436)
| Element | Specification |
|---------|---------------|
| Background | Solid black #000000 |
| Logo Icon | 60×60px, centered at X:562, Y:780 |
| Logo Style | White pixelated grid pattern (QR-code aesthetic) |
| Progress Bar | Y:2360px, height:12px, width:~900px, color: white |
| Safe Area | 20px margins (L/R), 44px top, 34px bottom |

### Screen 002: Animated Transition (1125 × 2436)
| Element | Specification |
|---------|---------------|
| Background | Black #000000 with white gridlines |
| Animation Type | 3D mesh tunnel/waveform distortion |
| Grid Style | White lines, 2px thickness, perspective depth |
| Progress Indicator | Y:2380px, white horizontal bar |
| Duration | Estimated 2-3 second fade-out transition |

### Screen 003: Brand Logo Screen (1125 × 2436)
| Element | Specification |
|---------|---------------|
| Background | Solid black #000000 |
| Status Bar | 44px height, white icons and time |
| Logo | White modular squares, ~290×90px, centered |
| Version Text | "v6.65.0" at Y:2340px, #FFFFFF, 12px, regular |
| Progress Bar | Y:2400px, height:12px |

### Screen 010: Email Code Verification (1125 × 2436)
| Element | Y Position | Dimensions | Colors | Details |
|---------|-----------|-----------|--------|---------|
| **Status Bar** | 0-44px | Full width | #FFFFFF bg | Time: 9.41, icons (R) |
| **Back Button** | 60px | 44×44px | #000000 | Left arrow, tap target: 60×60px |
| **Help Button** | 60px | 44×44px | #000000 | Circle with "?", tap target: 60×60px |
| **Title** | 180px | ~900×60px | #000000 text | "Enter your email code", 34px, bold, SF Pro Display |
| **Subtitle** | 270px | ~900×50px | #333333 text | "We've sent the code to jdoe.mobbin1@gmail.com", 16px regular |
| **Code Input Row** | 380px | 6×56px boxes | Border: #1A73E8 (2px) focused, #E0E0E0 (1px) empty | Border-radius: 8px, gap: 8px |
| **Code Cursor** | 380px | 2×30px | #1A73E8 | Animated blue cursor in active box |
| **Resend Text** | 530px | ~300×20px | #B0B0B0 | "Resend (57s)", 14px regular, disabled state |
| **Primary Button** | 650px | 1061×56px | #E8E8E8 bg, #999999 text | "Next", 18px bold, border-radius: 28px, disabled |
| **Divider** | 750px | Full width | #F0F0F0 | 1px line |
| **Done Link** | 920px | Auto | #000000 | "Done", 16px, right-aligned |
| **Keypad** | 1000-1400px | 3×3 grid + 0 + ⌫ | #FFFFFF buttons on #F5F5F5 bg | Button size: ~170×80px, border-radius: 12px, 8px gap |
| **Keypad Font** | 1000-1400px | - | #000000 text | Numbers: 28px bold, Letters: 12px regular |

### Screen 011: Code Entry Progress (1125 × 2436)
| Element | Change from 010 |
|---------|-----------------|
| Code Input Row | "711" filled, cursor at 4th position (focused state) |
| Resend Timer | "Resend (33s)" - countdown updated |
| Button State | Still disabled (#E8E8E8) - requires full 6-digit code |

### Screen 413: Trading Dashboard (1125 × 2436)
| Element | Y Position | Dimensions | Colors | Details |
|---------|-----------|-----------|--------|---------|
| **Status Bar** | 0-44px | Full width | White icons on #1A1A1A | Time, signal, battery |
| **Header** | 44-160px | Full width | #1A1A1A bg | Ticker "BTC/USDT", change "-0.12%", timeframe buttons |
| **Ticker Info** | 80-100px | ~300×40px | White text, #FF6B6B text | "BTC/USDT" dropdown, 20px bold |
| **Price Change** | 100-130px | ~150×30px | #FF6B6B | "-0.12%", 16px bold |
| **Timeframe Buttons** | 160px | ~80×40px each | #FFFFFF text, #2A2A2A bg | "15m", "1h", "4h", "1D", "More" dropdown |
| **Chart Area** | 200-550px | Full width | #1A1A1A bg, grid #333333 | Candlestick chart: green (#00C853), red (#FF4444) |
| **Moving Averages** | 200-550px | - | MA7: #FFD700, MA30: #FFA500 | Line overlays on chart |
| **Price Labels** | 200-550px | ~80×30px | #FFFFFF | Right axis pricing, 12px regular |
| **Time Labels** | 500-550px | ~80×25px | #666666 | Bottom axis timestamps, 12px regular |
| **Buy Button** | 550px | ~220×56px | #00C853 bg, white text | "Buy", 18px bold, border-radius: 8px |
| **Sell Button** | 550px | ~220×56px | #3A3A3A bg, white text | "Sell", 18px bold, border-radius: 8px |
| **Limit Order** | 620px | ~400×48px | #3A3A3A bg, white text | Dropdown with info icon, 16px regular |
| **Price Input** | 700px | ~400×56px | #2A2A2A bg, white text | "Price (USDT): 62,249.8", 18px, border-radius: 8px |
| **Info Text** | 760px | ~400×40px | #999999 | "Guarantee buying..." hint text, 13px regular |
| **Amount Input** | 820px | ~400×56px | #2A2A2A bg, white text | Placeholder "Amount", 18px, border-radius: 8px |
| **% Buttons** | 880px | 4×40px | #2A2A2A bg, white text | "0%", "25%", "50%", "75%", "100%", 14px, gap: 8px |
| **Total Display** | 960px | Full width | #FFFFFF | "Total" label with "USDT" unit, 16px regular |
| **Availability** | 1020px | Full width | #666666 | "Available 0 USDT", "Max buy 0 BTC", 14px |
| **CTA Button** | 1100px | Full width, 56px | #00C853 bg, white text | "Buy BTC", 18px bold, border-radius: 28px |
| **Price List** | 600-1300px | ~280×50px per row | Price: #FF6B6B, Amount: #FFFFFF | 2-column layout, 14px regular |
| **Bottom Nav** | 1420-1530px | Full width | Icons: #666666, active: white circle | OKX, Discover, Trade (active), Grow, Assets |

### Screen 414: Grow/Earn Products Screen (1125 × 2436)
| Element | Y Position | Dimensions | Colors | Details |
|---------|-----------|-----------|--------|---------|
| **Status Bar** | 0-44px | Full width | White icons on #1A1A1A | Time, signal, battery |
| **Tab Navigation** | 80-140px | Full width | #1A1A1A bg | "Earn" (active, white), "Loan", "Jumpstart" (gray), 18px bold |
| **Search Bar** | 160-220px | 1061×56px | #2A2A2A bg, #666666 text | Magnifying glass icon, placeholder "Search", border-radius: 24px |
| **Category Icons** | 280-380px | 3×80px circles | Border: #555555 (2px), bg: #1A1A1A | Simple Earn, Structured Products, On-chain Earn icons |
| **Category Labels** | 360px | ~200×30px | #FFFFFF | Icon labels, 16px bold, centered below icons |
| **Metrics Title** | 480px | ~300×30px | #FFFFFF | "Yesterday's profit 0 USD", 18px bold |
| **Metrics Subtitle** | 510px | ~300×20px | #999999 | "Total profit 0 USD", 14px regular |
| **Metrics Arrow** | 510px | 24×24px | #666666 | Right chevron, right-aligned |
| **Auto-earn Card** | 600-720px | Full width (1061×120px) | #2A2A2A bg, border: #444444 (2px) | Border-radius: 12px, padding: 20px |
| **Auto-earn Title** | 630px | ~300×30px | #FFFFFF | "Auto-earn" with icon, 18px bold |
| **Auto-earn Subtitle** | 660px | ~600×30px | #999999 | "Tap to start earning with your idle funds now", 14px regular |
| **Recommended Title** | 780px | ~300×40px | #FFFFFF | "Recommended", 24px bold |
| **USDT Card** | 850-1080px | ~480×230px | #1B7C5E bg | Border-radius: 12px, padding: 20px |
| **USDT Icon** | 880px | 48×48px | #00C853 | Tether logo in green circle |
| **USDT Label** | 900px | ~150×30px | #FFFFFF | "USDT", 20px bold |
| **USDT Disclaimer** | 920px | ~200×20px | #999999 | "New users only", 12px regular |
| **USDT APR Title** | 970px | ~100×20px | #999999 | "APR", 14px regular |
| **USDT APR Value** | 990px | ~150×60px | #FFFFFF | "30%", 48px bold |
| **USDT Term Label** | 1020px | ~100×20px | #999999 | "Term", 14px regular |
| **USDT Term Value** | 1040px | ~150×30px | #FFFFFF | "3 days", 18px regular |
| **USDC Card** | 850-1080px (right) | ~480×230px | #242424 bg | Border-radius: 12px, padding: 20px |
| **Bonus Badge** | 860px | ~100×36px | #00C853 bg, white text | "Bonus", 14px bold, border-radius: 18px, positioned top-right |
| **USDC APR** | 1000px | ~200×50px | #FFFFFF | "10% APR", 24px bold |
| **ETH Card** | 1100-1320px (right) | ~480×230px | #242424 bg | Similar layout to USDC |
| **ETH APR** | 1240px | ~250×50px | #FFFFFF | "12.39% APR", 24px bold |
| **Bottom Nav** | 1420-1530px | Full width | Icons: #666666, active: white circle | OKX, Discover, Trade, Grow (active), Assets |

---

## 3. Component Library

| Component | Dimensions | Colors | Border Radius | States |
|-----------|-----------|--------|---------------|--------|
| **Primary Button** | 1061×56px | Background: #00C853, Text: #FFFFFF | 28px | Default, Disabled (#E8E8E8 bg, #999999 text), Active (opacity: 0.9) |
| **Secondary Button** | 1061×56px | Background: #3A3A3A, Text: #FFFFFF | 28px | Default, Hover |
| **Small Button** | 170×80px (keypad) | Background: #FFFFFF, Text: #000000 | 12px | Default, Pressed (#F0F0F0), Active |
| **Code Input Box** | 56×56px | Border: 2px #1A73E8 (focused), 1px #E0E0E0 (empty) | 8px | Empty, Filled, Focused, Error |
| **Text Input** | 400×56px | Background: #2A2A2A, Border: none | 8px | Default, Focused (border: 1px #1A73E8), Filled |
| **Search Bar** | 1061×56px | Background: #2A2A2A, Icon: #666666 | 24px | Default, Focused, Active |
| **Dropdown** | ~400×48px | Background: #3A3A3A, Text: #FFFFFF | 8px | Default, Expanded, Disabled |
| **Card (Light)** | ~480×230px | Background: #1B7C5E (USDT), Border: none | 12px | Default, Hover (opacity: 0.9) |
| **Card (Dark)** | ~480×230px | Background: #242424, Border: none | 12px | Default, Hover (opacity: 0.9) |
| **Tab Button** | Full width | Text: #FFFFFF (active), #999999 (inactive) | 0px | Active (underline), Inactive, Hover |
| **Icon Button** | 44×44px | Icon: #FFFFFF or #000000 depending on bg | 0px | Default, Pressed (opacity: 0.7), Active |
| **Badge** | ~100×36px | Background: #00C853, Text: #FFFFFF | 18px | Default (bonus badges only) |
| **Info Icon** | 20×20px | Icon: #666666 | 0px | Default, Hover (opacity: 0.8) |
| **Percentage Button** | 40×40px | Background: #2A2A2A, Text: #FFFFFF | 4px | Default, Active (#1A73E8 bg) |
| **Bottom Nav Item** | 60×60px | Icon: #666666 (inactive), #FFFFFF (active) | 0px | Inactive, Active (white circle bg: #FFFFFF) |
| **Progress Bar** | 900×12px | Color: #FFFFFF | 6px | Default, animated |
| **Modal/Card Border** | Full card | Border: 2px #444444 (dark cards) | 12px | Default, Hover |

---

## 4. Color Tokens

| Token Name | Hex Value | RGB | Usage |
|-----------|-----------|-----|-------|
| **Primary Green** | #00C853 | (0, 200, 83) | Primary CTA buttons, active states, positive indicators |
| **Primary Blue** | #1A73E8 | (26, 115, 232) | Secondary actions, focused inputs, links (future ZR branding candidate) |
| **Positive Green** | #00C853 | (0, 200, 83) | Price increases, buy buttons, success states |
| **Negative Red** | #FF6B6B | (255, 107, 107) | Price decreases, sell indicators, losses |
| **Alternative Red** | #FF4444 | (255, 68, 68) | Candlestick bearish candles |
| **Dark Background** | #1A1A1A | (26, 26, 26) | Primary app background (trading interface) |
| **Card Dark** | #242424 | (36, 36, 36) | Secondary card backgrounds |
| **Input Dark** | #2A2A2A | (42, 42, 42) | Form inputs, search bars |
| **Button Disabled** | #E8E8E8 | (232, 232, 232) | Disabled button backgrounds |
| **Border Dark** | #3A3A3A | (58, 58, 58) | Secondary buttons, borders |
| **Border Subtle** | #444444 | (68, 68, 68) | Card borders, dividers |
| **Border Light** | #555555 | (85, 85, 85) | Icon borders |
| **Text Primary** | #FFFFFF | (255, 255, 255) | Main text on dark backgrounds |
| **Text Secondary** | #999999 | (153, 153, 153) | Secondary text, hints, disabled text |
| **Text Tertiary** | #666666 | (102, 102, 102) | Placeholders, helper text |
| **Text Muted** | #B0B0B0 | (176, 176, 176) | Disabled/countdown text |
| **Light Background** | #FFFFFF | (255, 255, 255) | Verification screen backgrounds |
| **Light Border** | #E0E0E0 | (224, 224, 224) | Input borders on light backgrounds |
| **Light Divider** | #F0F0F0 | (240, 240, 240) | Section dividers on light backgrounds |
| **Light Input** | #F5F5F5 | (245, 245, 245) | Keypad background, secondary elements |
| **Accent Gold/Orange** | #FFD700 | (255, 215, 0) | MA7 moving average line |
| **Accent Orange** | #FFA500 | (255, 165, 0) | MA30 moving average line |
| **Brand Teal (Earning)** | #1B7C5E | (27, 124, 94) | USDT card background, special product highlights |
| **Grid Gray** | #333333 | (51, 51, 51) | Chart grid lines |
| **Black** | #000000 | (0, 0, 0) | Splash screens, status bar |

---

## 5. Typography Scale

| Size | Weight | Font Family | Usage | Line Height |
|------|--------|-----------|-------|------------|
| **48px** | Bold | SF Pro Display | Large APR values, hero numbers | 56px |
| **34px** | Bold | SF Pro Display | Screen titles ("Enter your email code") | 40px |
| **28px** | Bold | SF Pro Display | Keypad numbers, large labels | 36px |
| **24px** | Bold | SF Pro Display | Section headings ("Recommended") | 32px |
| **20px** | Bold | SF Pro Display | Ticker names ("BTC/USDT"), ticker dropdown | 28px |
| **20px** | Regular | SF Pro Text | "USDT" currency labels | 28px |
| **18px** | Bold | SF Pro Display | Button text ("Next", "Buy"), form labels, card titles | 24px |
| **18px** | Regular | SF Pro Display | Input values, count-up text | 24px |
| **16px** | Regular | SF Pro Text | Body text, input placeholders, subtitles | 24px |
| **16px** | Bold | SF Pro Display | Tab names, smaller headings | 24px |
| **14px** | Regular | SF Pro Text | Helper text, secondary info, timestamps | 20px |
| **14px** | Bold | SF Pro Display | Percentage labels ("APR", "Term") | 20px |
| **12px** | Regular | SF Pro Text | Disclaimer text ("New users only"), version text | 16px |
| **12px** | Regular (Monospace) | SF Mono | Hex values in labels, codes | 16px |

**Font Family**: All text uses **SF Pro Display** (bold/semibold headers) or **SF Pro Text** (regular body), except where monospace is explicitly noted.

---

## 6. Interaction Patterns

### Email Verification Flow (010-011)
1. **Code Input Pattern**: 6-digit code entry
   - Auto-focus first box
   - Cursor visible as blue vertical line (#1A73E8)
   - Box border changes to blue on focus
   - Manual keypad input or system keyboard
   - Auto-advance to next box on digit entry
   - Filled boxes show gray border (#E0E0E0)

2. **Resend Timer**
   - Starts at 57 seconds
   - Counts down in real-time ("57s" → "33s")
   - Text color: #B0B0B0 (disabled state)
   - Clicking likely enables resend after timeout

3. **Button State Management**
   - Primary button disabled until 6 digits entered
   - Disabled styling: #E8E8E8 background, #999999 text
   - Likely enables with green (#00C853) on completion

4. **Numeric Keypad**
   - Standard phone layout (1-9, 0, delete)
   - Appears on screen (not system keyboard)
   - Tactile feedback expected on press
   - Delete button (⌫) removes rightmost digit

### Trading Dashboard Flow (413)
1. **Ticker Selection**
   - Dropdown arrow indicates selectable pairs
   - Change percentage in red for losses, likely green for gains
   - Animated candlesticks update in real-time

2. **Order Entry Pattern**
   - Buy/Sell toggle buttons (not radio buttons)
   - "Limit order" dropdown for order type
   - Price field pre-fills with current market price
   - Amount input with quick-select percentages (0%, 25%, 50%, 75%, 100%)
   - CTA button ("Buy BTC") disables if insufficient funds

3. **Price Book Interaction**
   - Scrollable list of price tiers
   - Red prices (sell side) and white amounts (quantity)
   - Tap to fill order input (inferred)

### Earn Products Flow (414)
1. **Tab Navigation**
   - Earn (active), Loan, Jumpstart
   - Likely swipe or tap to switch
   - Active tab shows white text, inactive gray

2. **Product Discovery**
   - Category icons with labels (Simple Earn, Structured, On-chain)
   - Tap to filter products
   - Bonus badges highlight promotional products

3. **Card Selection**
   - USDT card: highlighted with teal background
   - USDC/ETH: darker secondary cards
   - Tap card to view details or open subscription flow

---

## 7. ZR Securities Adaptation Strategy

### Regulatory & Compliance Layer Integration

#### 7.1 Mandatory KYC Module (Post-Email Verification)
**Placement**: Insert between current screen 011 (email code) and main dashboard (413)

**Flow Architecture**:
```
Email Verification (011)
    ↓
KYC Identity Check (NEW - 012a)
    ↓
Jurisdiction Selector (NEW - 012b)
    ↓
Compliance Acknowledgment (NEW - 012c)
    ↓
Trading Tier Selection (NEW - 012d)
    ↓
Main Dashboard (413)
```

#### 7.2 KYC Identity Check Screen (012a)
**Design Specifications**:

| Element | Specification |
|---------|---------------|
| **Background** | #FFFFFF (maintain light theme for document-heavy screens) |
| **Status Bar** | 44px, white icons |
| **Title** | "Complete your identity verification", 34px bold, #000000, Y: 120px |
| **Subtitle** | "SFC regulated. Verify to unlock trading.", 16px regular, #333333, Y: 160px |
| **Card 1: Personal Info** | 1061×180px, border: 2px #E8E8E8, border-radius: 12px, Y: 240px |
| **Card Content** | "Full Name", "Date of Birth", "Nationality", 16px regular, #000000 |
| **Card 2: Document** | 1061×180px, border: 2px #E8E8E8, border-radius: 12px, Y: 450px |
| **Document Types** | "Passport", "ID Card", "Driver's License" - selectable buttons (single choice) |
| **Upload Zone** | 1061×240px, border: 2px dashed #1A73E8, Y: 660px, center icon: upload arrow |
| **Upload Text** | "Drag files here or click to select", 16px regular, #1A73E8 |
| **CTA Button** | "Continue", 1061×56px, #1A73E8 bg, white text, 18px bold, border-radius: 28px, Y: 950px |
| **Back Button** | Y: 100px, 44×44px, left arrow |

**Color Adaptation for ZR**: Replace OKX green (#00C853) with ZR blue (#1A73E8) for all KYC-related CTAs to signal compliance/trust.

#### 7.3 Jurisdiction Selector Screen (012b)
**Design Specifications**:

| Element | Specification |
|---------|---------------|
| **Title** | "Select your jurisdiction", 34px bold, #000000, Y: 120px |
| **Subtitle** | "We operate in multiple jurisdictions. Select your region.", 16px regular, #333333, Y: 160px |
| **Search Bar** | 1061×56px, #F5F5F5 bg, border: 1px #E8E8E8, Y: 240px, border-radius: 8px |
| **Options List** | Scrollable, each ~1061×60px, Y: 320px onwards |
| **Option Item** | Checkbox (left, 24×24px), flag icon (16×16px), text "Hong Kong (SFC Regulated)" (16px, #000000) |
| **Option Item** | Checkbox (left), flag icon, text "Singapore (MAS)" (16px, #000000) |
| **Option Item** | Checkbox (left), flag icon, text "UAE (DFSA)" (16px, #000000) |
| **Selected State** | Checkbox: filled (#1A73E8), background: #F0F7FF (light blue tint) |
| **Unselected State** | Checkbox: empty, border: 1px #CCCCCC, background: #FFFFFF |
| **CTA Button** | "Next", 1061×56px, #1A73E8 bg, disabled until selected, Y: bottom - 100px |
| **SFC Badge** | "SFC Regulated" text, 12px bold, #00A86B, position: Y: 240px (right side of Hong Kong row) |

**Note**: Highlight "Hong Kong (SFC Regulated)" with green badge to comply with ZR's SFC status.

#### 7.4 Compliance Acknowledgment Screen (012c)
**Design Specifications**:

| Element | Specification |
|---------|---------------|
| **Title** | "Acknowledge compliance terms", 34px bold, #000000, Y: 120px |
| **Content Box** | 1061×320px, #F5F5F5 bg, border: 1px #E0E0E0, border-radius: 12px, Y: 220px |
| **Content Text** | Scrollable, 14px regular, #333333, line-height: 24px |
| **Checkbox 1** | 24×24px, empty border, Y: 580px, text: "I confirm I am not a politically exposed person (PEP)", 14px, #000000 |
| **Checkbox 2** | 24×24px, empty border, Y: 620px, text: "I accept the Terms of Service and Privacy Policy", 14px, #000000 |
| **Link** | "View full policy", 12px, #1A73E8, underlined, positioned after checkbox 2 |
| **Checkbox 3** | 24×24px, empty border, Y: 680px, text: "I declare my trading experience level (see below)", 14px, #000000 |
| **Experience Selector** | "Beginner" / "Intermediate" / "Expert", radio buttons, Y: 740px, 3 options |
| **CTA Button** | "Accept & Continue", 1061×56px, #1A73E8 bg, disabled until all checked, Y: bottom - 80px |
| **Secondary Button** | "Decline", 1061×56px, #E8E8E8 bg, #333333 text, Y: bottom - 150px |

**Interaction Pattern**: All checkboxes must be checked before CTA enables. Experience selector is mandatory.

#### 7.5 Trading Tier Selection Screen (012d)
**Design Specifications**:

| Element | Specification |
|---------|---------------|
| **Title** | "Select your trading tier", 34px bold, #000000, Y: 120px |
| **Subtitle** | "Choose features based on your verification level.", 16px regular, #333333, Y: 160px |
| **Tier Card 1** | 1061×240px, border: 2px #E8E8E8 (default), Y: 280px, border-radius: 12px |
| **Tier Card Selected** | Border: 2px #1A73E8, background: #F0F7FF |
| **Tier Icon** | 48×48px, #1A73E8 (when selected), Y: 300px (in card) |
| **Tier Name** | "Basic Trading", 20px bold, #000000, Y: 310px |
| **Tier Limits** | "Daily Limit: $5,000", "Monthly: $50,000", 14px regular, #666666, Y: 340px |
| **Tier Features** | "✓ Market Orders\n✓ Spot Trading", 14px regular, #000000, Y: 360px |
| **Tier Card 2** | "Advanced Trading", same structure, Y: 540px |
| **Tier Card 2 Limits** | "Daily: $50,000\nMonthly: $500,000", 14px, #666666 |
| **Tier Card 2 Features** | "✓ Limit Orders\n✓ Margin Trading\n✓ API Access", 14px, #000000 |
| **Tier Card 3** | "Professional Trading", Y: 800px |
| **Tier Card 3 Badge** | "Premium", 12px bold, #FFFFFF bg, #1A73E8, top-right corner, border-radius: 4px |
| **CTA Button** | "Confirm & Start Trading", 1061×56px, #1A73E8 bg, Y: bottom - 80px |

**Selection Behavior**: Radio button (single selection). Default to "Basic Trading". Highlight selected tier with blue border and light blue background.

#### 7.6 Integration Points with Existing Screens

**Screen 413 Modifications** (Main Trading Dashboard):
- Add jurisdiction indicator badge: small flag icon + text "Hong Kong SFC", 12px, gray (#999999), positioned near account icon (top-right)
- Add trading tier badge: "Basic | Advanced | Professional", 12px, gray, positioned below jurisdiction badge
- KYC status indicator: green checkmark if verified, amber warning if pending

**Bottom Navigation** (413, 414):
- No changes needed; maintains consistency

---

## 8. Implementation Guidelines for ZR Securities

### 8.1 Brand Color Mapping
| Element | OKX Color | ZR Color | Rationale |
|---------|-----------|---------|-----------|
| Primary CTA (Buy/Trade) | #00C853 (green) | #00C853 (keep) | Maintains UX convention for buy actions |
| Secondary CTA (Compliance/KYC) | #00C853 | #1A73E8 (blue) | Signals trust/compliance/regulatory adherence |
| Active States | #00C853 | #1A73E8 | Consistency with ZR brand |
| Positive Price Change | #00C853 | #00C853 (keep) | Universal market convention |
| Focus/Hover States | #1A73E8 | #1A73E8 (keep) | Standard web accessibility |

### 8.2 Typography Consistency
- Maintain SF Pro Display/Text family (compatible with iOS system fonts)
- For Chinese market: substitute with Apple SD Gothic Neo for CJK support
- Never reduce font sizes below 14px for body text (accessibility requirement for SFC)

### 8.3 Component Spacing
- Maintain 20px padding on all form fields
- Use 16px gaps between major sections (consistency with OKX)
- Code input boxes: 8px gap between boxes (DO NOT reduce)
- Bottom buttons: always 80px from screen bottom (safe area clearance)

### 8.4 Accessibility Standards
- All CTA buttons: minimum 56px height (Apple HIG)
- Focus states: 2px border with #1A73E8 on all interactive elements
- Text contrast: WCAG AA standard minimum 4.5:1 ratio
- KYC screens: light backgrounds (#FFFFFF) for document upload clarity
- Trading screens: dark backgrounds reduce eye strain (24/7 trading use)

### 8.5 Error State Patterns
- Form errors: red left border (4px) on input field, error text in #FF6B6B (12px, Y: +60px below input)
- Network errors: modal overlay with dark background, centered card, red icon, "Retry" button (#1A73E8)
- KYC rejection: full-screen card, red border (top 4px), rejection reason text, "Appeal" button (#1A73E8)

### 8.6 Loading States
- Reuse OKX animated grid pattern (screen 002) for compliance data processing
- Loading bar: 1px height, #1A73E8 color (instead of white)
- Skeleton loaders: #F0F0F0 placeholder cards with 1s pulse animation

### 8.7 Localization Considerations
- English/Chinese toggle: position in top-right corner (near account icon)
- Language pairs: EN ↔ ZH Simplified (Hong Kong market)
- Date formats: MM/DD/YYYY (US convention) or DD/MM/YYYY (EU) based on jurisdiction
- Currency symbols: always show currency code (USDT, USDC) before/after amounts

---

## 9. Screen Flow Diagram

```
Splash (001)
    ↓ [animated transition (002)]
    ↓ [brand splash (003)]
    ↓ [~3 second delay]
Email Code Entry (010-011)
    ↓ [6 digits entered, timer decrements]
    ↓ [Next button enables in green]
KYC Identity Verification (NEW 012a)
    ↓ [Document upload, personal info]
    ↓ [Form validation]
Jurisdiction Selection (NEW 012b)
    ↓ [Single jurisdiction picked]
    ↓ [Next button enables in blue]
Compliance Acknowledgment (NEW 012c)
    ↓ [All checkboxes ticked, experience selected]
    ↓ [Accept & Continue in blue]
Trading Tier Selection (NEW 012d)
    ↓ [One tier selected (default: Basic)]
    ↓ [Confirm & Start Trading]
Main Trading Dashboard (413)
    ↓ [Real-time chart, order entry, price book]
Product Discovery (414)
    ↓ [Earn tab, product cards, recommendations]
```

---

## 10. Design Tokens Summary (For Implementation)

### Spacing Scale
```
4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 40px, 48px, 56px, 64px
```

### Border Radius Scale
```
0px, 4px, 8px, 12px, 18px, 24px, 28px (buttons)
```

### Shadow System (if needed for future screens)
```
Subtle: 0 2px 8px rgba(0, 0, 0, 0.1)
Medium: 0 4px 16px rgba(0, 0, 0, 0.15)
Strong: 0 8px 32px rgba(0, 0, 0, 0.2)
```

### Opacity Scale
```
Hover: 90% opacity
Disabled: 60% opacity
Placeholder: 70% opacity
```

---

## 11. Files & Assets Required

### For OKX Design Recreation
- **Icons**: Trading (gear), Buy/Sell buttons, Navigation (house, clock, settings, folder)
- **Illustrations**: KYC document upload zone, checkmarks, flags (jurisdiction)
- **Animations**: Mesh grid tunnel (screen 002), loading pulse

### For ZR Adaptation
- **Logo**: ZR brand mark (replace OKX 003.png)
- **Compliance badges**: "SFC Regulated" label, "Verified" checkmark
- **Jurisdiction flags**: Hong Kong, Singapore, UAE (32×32px)
- **Trading tier icons**: Basic/Advanced/Professional badges

---

## 12. Compliance Notes

### SFC Regulatory Alignment
- All KYC data collection must be GDPR/PDPO compliant
- Jurisdiction selector must prominently display "SFC Regulated" for Hong Kong option
- Compliance acknowledgment text must cite SFC Guidelines (document reference required)
- Trading tier limits should align with SFC concentration limits (if applicable)

### Future Enhancements
1. **Dark mode toggle** in KYC screens (accessibility improvement)
2. **Multi-language support** for Compliance Acknowledgment
3. **Biometric authentication** (Face ID/Touch ID) for sensitive data entry
4. **Real-time compliance status** displayed on main dashboard (green/amber/red indicator)
5. **Webhook integration** for KYC provider (IDology, Onfido, etc.)

---

**Document Version**: 1.0
**Last Updated**: 2026-03-04
**Prepared For**: ZR Securities Competitive Analysis Team
**Source Analysis**: OKX iOS v6.65.0
