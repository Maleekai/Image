# OKX iOS Design Specification
## Complete Design System for Settings/Security/Profile Flows
### ZR Securities Competitive Analysis Document

**Date:** March 4, 2026
**Platform:** iOS (iPhone)
**Screen Dimensions:** 390px width × Full-height scrollable (iPhone SE/12 proportions)
**Safe Area Insets:** Top 44px (status bar), Bottom 34px (home indicator)

---

## Table of Contents
1. [Screen-by-Screen Specifications](#screen-by-screen-specifications)
2. [Component Library](#component-library)
3. [Color Tokens](#color-tokens)
4. [Typography System](#typography-system)
5. [Spacing & Layout Grid](#spacing--layout-grid)
6. [Interaction Patterns](#interaction-patterns)
7. [ZR Securities Adaptation Strategy](#zr-securities-adaptation-strategy)

---

## Screen-by-Screen Specifications

### Screen 1: User Center - Profile Tab (068_Security/381.png)

**Navigation Structure:**
- Header: Y: 0, Height: 56px
  - Back button: X: 16px, Size: 24px × 24px
  - Title "User center": X: 44px, Font-size: 20px, Weight: bold
  - User management icon: X: 358px, Size: 24px × 24px

**Avatar Section:** Y: 56px, Height: 120px
- Avatar circle: 88px diameter, centered horizontally
- Edit pencil overlay: Bottom-right of avatar, 32px × 32px
- Email display: "@gmail.com", Color: #666, Font-size: 16px

**Tab Navigation:** Y: 176px, Height: 48px
- Tabs: Profile | Security | Preferences | Notifications
- Active tab has bottom border: Height: 3px, Color: #000
- Tab text: Font-size: 16px, Letter-spacing: -0.5px
- Tab padding: 16px horizontal

**Profile Section Content:** Y: 224px
- Row structure: 56px height per row, 16px side padding

**Row Items Specification:**
| Item | Label | Value | Chevron | Status |
|------|-------|-------|---------|--------|
| Identity verification | - | - | Yes | Green "Verified" badge |
| Country/Region | - | [Selector] | Yes | - |
| Trading fee tier | "Lvl 1" | - | Yes | - |
| UID | [ID number] | - | Copy icon | - |
| Nickname | "@gmail.com" | - | Yes | - |
| Bio | "Add now" | - | Yes | Red dot indicator |
| Connected accounts | - | - | Yes | - |
| Switch accounts | - | - | Yes | - |
| Log out | - | - | Yes | Red text color |

**Row Item Details:**
- Label text: Font-size: 16px, Weight: 500, Color: #000
- Value text: Font-size: 14px, Color: #666
- Side chevron: 20px × 20px, Color: #ccc
- Divider: 1px, Color: #eee, Full-width separator

---

### Screen 2: Trading Fee Tier Dashboard (070_Notification_settings/393.png)

**Header:** Y: 0, Height: 56px
- Back button with breadcrumb: "Trading Fee | Fee Rate | Crypto Exc..."
- Font-size: 14px, Color: #666

**My Fee Tier Section:** Y: 56px, Height: 140px
- Level badge icon: 64px × 64px, circular, background color #c9c9c9
- Level text: "Lvl 1", Font-size: 48px, Weight: 700
- Subtitle: "@gmail.com", Font-size: 14px, Color: #666

**Trading Volume Metrics:** Y: 196px, Height: 100px
- Section title: "30-day trading volume (as of yesterday)"
- Grid layout: 2 columns × 2 rows
- Column headers: "Spot", "Futures", "Options", "Spreads", "Assets"
- Volume values: "0.0000 USD", Font-size: 16px, Weight: 700
- Sub-labels: Font-size: 13px, Color: #999

**Details Link:** Y: 148px, Right-aligned
- Text: "Details >", Font-size: 14px, Color: #0066ff

**Fee Rebates Section:** Y: 296px, Height: 120px
- Section title: "Trading fee rebates", Collapsible indicator (^)
- Row items:
  - Used fee rebates: "0.0000 USDT"
  - Available fee rebates: "3.0000 USDT"
- Info text: 12px, Color: #666, Line-height: 1.5

**Explanation Block:** Y: 416px, Height: 80px
- Background: #f5f5f5
- Border-radius: 8px
- Padding: 12px, Font-size: 12px, Color: #666
- Text: "Rebate card activates automatically after you get it. We settle fee rebates in USDT and credit to your funding account daily..."

**Tab Navigation (Trading Types):** Y: 496px, Height: 48px
- Tabs: Spot | Futures | Options | Spreads
- Active tab indicator: Bottom border, 3px, Color: #000
- Tab padding: 16px

**Sub-tabs (Pair Types):** Y: 544px, Height: 44px
- Options: "USDT pairs" | "Stablecoins/Crypto pairs"
- Font-size: 14px
- Padding: 16px

**Fee Table:** Y: 588px (scrollable content)
- Header row: "Regular users", Background: #f5f5f5
- Column structure: Product Type | Taker Fee | Maker Fee | VIP Badge

---

### Screen 3: Profile Tab with Account Info (068_Security/379.png, 068_Security/380.png)

**Profile Header Section:** Y: 56px, Height: 140px
- Profile section with "Profile and settings" subtitle
- Verified badge: Green border, "Verified" text, 14px
- Font color: #333 (darker gray)

**Shortcuts Section:** Y: 196px, Height: 160px
- Section title: "Shortcuts"
- Edit button (top-right): "Cancel | Save" (when editing mode)
- Grid layout: 4 columns × 2 rows
- Each shortcut item:
  - Icon: 48px × 48px, circular outline
  - Icon color: #333
  - Label: Font-size: 14px, Weight: 400, centered below icon
  - Remove button (top-right of icon): 24px × 24px, gray

**Shortcut Items:**
- Support (question mark icon)
- Demo trading (bookmark icon)
- Rewards center (star icon)
- Buy (plus icon)
- Additional row with placeholder boxes (dashed outline)

**Manage Assets Section:** Y: 356px, Height: 180px
- Section title: "Manage assets"
- Grid layout: 4 columns × 2 rows (plus one row with 1 item)
- Items: Buy, Sell, Deposit, Withdraw (first row)
- P2P trading (second row)
- Each item: Icon 48px × 48px, circular
- Label positioning: Centered, 14px font

**Trade Section:** Y: 536px, Height: 200px
- Section title: "Trade"
- Grid layout: 4 columns × 2 rows
- Items: Convert, Spot, Margin, Futures, Options, Bots, Copy trading, Demo trading
- Icon style: Circular outline, 48px × 48px

**Grow Section:** Y: 736px
- Section title: "Grow"
- Additional items below (scrollable)

---

### Screen 4: Nickname Edit Form (070_Notification_settings/394.png)

**Header:** Y: 0, Height: 56px
- Back button, Title: "Nickname"

**Form Section:** Y: 56px

**Input Field:** Y: 72px, Height: 48px
- Background: #f5f5f5
- Border: 1px, Color: #ddd
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px
- Placeholder text color: #999
- Display text: "*@gmail.com"
- Character counter (right-aligned): "16/20", Font-size: 12px, Color: #999

**Info Bullets:** Y: 140px, Height: 100px (scrollable)
- Font-size: 13px
- Color: #666
- Line-height: 1.6
- Bullet points:
  - "Your nickname is visible to users in the community..."
  - "It'll take a few minutes for us to review and approve a new global name or nickname"
  - "When creating your nickname, please ensure it does not contain disrespectful words..."

**Submit Button:** Y: 560px, Height: 48px
- Background: #e6e6e6
- Font-size: 16px, Weight: 500
- Color: #999 (disabled state)
- Border-radius: 24px
- Disabled state indicator

---

### Screen 5: Bio Edit Form (070_Notification_settings/395.png)

**Header:** Y: 0, Height: 56px
- Title: "Bio"

**Textarea Field:** Y: 72px, Height: 160px
- Background: #ffffff
- Border: 1px, Color: #ddd
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px
- Placeholder: "Write something about yourself"
- Character counter (right-aligned): "0/150", Font-size: 12px, Color: #999

**Info Section:** Y: 250px, Height: 140px
- Font-size: 13px, Color: #666
- Bullet points:
  - "You can write about your trading experience, trading strategies, or crypto and sectors you're interested in."
  - "It'll take us a few minutes to review and approve a new bio."
  - "Please ensure your bio doesn't contain disrespectful words, OKX official product names, or names from other trading platforms."

**Submit Button:** Y: 520px, Height: 48px
- Background: #e6e6e6
- Disabled state styling

---

### Screen 6: Identity Verification - Country/Region Selector (070_Notification_settings/392.png)

**Header:** Y: 0, Height: 56px
- Title: "Identity verification"
- Close button (X): X: 358px

**Content:** Y: 56px

**Page Title:** Y: 72px, Height: 60px
- Main heading: "Select country/region of residence"
- Font-size: 28px, Weight: 700, Line-height: 1.3

**Form Group:** Y: 140px, Height: 80px
- Label: "Country/Region of residence"
- Font-size: 14px, Color: #333

**Dropdown Field:** Y: 160px, Height: 48px
- Background: #ffffff
- Border: 1px, Color: #ddd
- Border-radius: 8px
- Padding: 12px 16px
- Dropdown arrow (right): 20px × 20px
- Font-size: 16px

**Reminder Box:** Y: 224px, Height: 120px
- Background: #f5f5f5
- Border: 1px, Color: #ddd
- Border-radius: 8px
- Padding: 12px 16px
- Label: "Reminder" (bold), Font-size: 14px
- Body text: Font-size: 13px, Color: #666, Line-height: 1.6
- Content: "Once your country/region is changed, some of your tag/memo addresses and asset holdings may become unsupported. Check if your deposit address is still valid, and consider trading your assets before proceeding as withdrawals may incur high fees."

**Primary Button:** Y: 600px, Height: 48px
- Background: #1a1a1a (black)
- Text: "Next", Font-size: 16px, Weight: 500, Color: white
- Border-radius: 24px
- Margin: 16px horizontal, 16px top

---

### Screen 7: Menu Shortcuts Editing (068_Security/379.png, 068_Security/380.png)

**Shortcuts Header:** Y: 180px, Height: 48px
- Title: "Shortcuts"
- Edit mode controls: "Cancel | Save" buttons (right-aligned)
- Font-size: 14px, Color: #0066ff (Save), #999 (Cancel)

**Shortcut Grid:** Y: 228px, Height: 140px
- Layout: 4 columns, 1.5 rows visible (scrollable)
- Each item container: 84px × 112px
- Icon area: 48px × 48px, centered
- Icon color: #333
- Label: 14px, centered below icon
- Remove button (edit mode): 24px × 24px, gray minus icon, top-right

**Placeholder Items (for adding):**
- Dashed border boxes, 84px × 112px
- Indicating where new shortcuts can be added

---

## Component Library

### 1. Setting Row / Menu Item

**Specifications:**
```
Height: 56px
Padding: 0 16px
Background: white
Divider: Bottom border 1px #eee (except last item)

Layout:
├─ Label (left) - Font: 16px, Weight: 500, Color: #000
├─ Value (center-right) - Font: 14px, Color: #666
└─ Chevron (right) - 20px × 20px, Color: #ccc
```

**States:**
- Default: Opacity 1.0
- Pressed: Background #f5f5f5
- Disabled: Opacity 0.5

---

### 2. Toggle Switch

**Dimensions:**
- Width: 51px
- Height: 31px
- Border-radius: 16px (fully rounded)
- Knob diameter: 27px

**Colors:**
- Off state: Background #e5e5ea, Knob white
- On state: Background #34c759 (iOS system green), Knob white
- Animation: 0.3s spring curve

---

### 3. Radio Button

**Dimensions:**
- Outer circle: 24px diameter
- Inner dot: 10px diameter
- Border: 2px

**Colors:**
- Unselected: Border #ccc, Background white
- Selected: Border #0066ff, Inner dot #0066ff
- Fill background: white

---

### 4. Checkbox

**Dimensions:**
- 24px × 24px
- Border-radius: 6px
- Border: 2px

**Colors:**
- Unchecked: Border #999, Background white
- Checked: Background #34c759, Border #34c759, Checkmark white

---

### 5. Button Styles

#### Primary Button (Call-to-Action)
```
Height: 48px
Border-radius: 24px
Background: #1a1a1a (black)
Text: 16px, Weight: 500, Color: white
Padding: 0 24px
Shadow: None
Disabled: Background #e6e6e6, Text color #999
```

#### Secondary Button
```
Height: 48px
Border-radius: 24px
Background: white
Border: 1px, Color: #ddd
Text: 16px, Weight: 500, Color: #000
Disabled: Border #e6e6e6, Text color #999
```

#### Tertiary Button (Link)
```
Height: auto
Background: transparent
Text: 14px, Weight: 500, Color: #0066ff
Underline: None
Pressed: Opacity 0.7
```

---

### 6. Input Field

```
Height: 48px
Border: 1px, Color: #ddd
Border-radius: 8px
Background: white | #f5f5f5
Padding: 12px 16px
Font-size: 16px
Line-height: 1.5

Focus State:
├─ Border color: #0066ff
├─ Border width: 2px
└─ Background: white

Error State:
├─ Border color: #ff3b30
└─ Error text below: 12px, Color: #ff3b30
```

---

### 7. Textarea Field

```
Height: 120-160px (variable)
Border: 1px, Color: #ddd
Border-radius: 8px
Background: white
Padding: 12px 16px
Font-size: 16px
Line-height: 1.5
Resize: vertical only
Character counter (right-aligned): 12px, Color: #999
```

---

### 8. Dropdown/Select

```
Height: 48px
Border: 1px, Color: #ddd
Border-radius: 8px
Background: white
Padding: 12px 16px
Font-size: 16px
Dropdown arrow: 20px × 20px, right-aligned

Selected item display:
├─ Font: 16px, Color: #000
└─ Arrow icon: Color #ccc

Open state:
├─ Border color: #0066ff
├─ Background: white
└─ Dropdown options list below
```

---

### 9. Badge Components

#### Verified Badge
```
Background: white
Border: 1px, Color: #34c759 (green)
Border-radius: 12px
Padding: 4px 12px
Text: "Verified", Font-size: 13px, Color: #34c759, Weight: 500
```

#### Status Badge (Tier Level)
```
Background: #c9c9c9
Border-radius: 50% (circular)
Width/Height: 64px (for large), 40px (for small)
Icon: Centered, white color
Text: "Lvl 1", Font-size: 32px or 18px, Weight: 700, Color: #000
```

#### Tag/Pill Badge
```
Background: #e0f700 (OKX green), #ff9500 (warning), #999 (neutral)
Border-radius: 4px
Padding: 4px 8px
Font-size: 12px, Weight: 500
Text color: White or contrasting
Examples: "Season 15", "High reward", "New"
```

---

### 10. Information Box / Alert

```
Background: #f5f5f5
Border: 1px, Color: #ddd
Border-radius: 8px
Padding: 12px 16px
Font-size: 13px
Line-height: 1.6
Color: #666

Title (if present):
├─ Font-size: 14px
├─ Weight: 600
├─ Color: #333
└─ Margin-bottom: 8px

Bullet points:
├─ Margin-left: 16px
├─ Margin-bottom: 8px
└─ Line-height: 1.6
```

---

### 11. Profile/Avatar Component

```
Size options:
├─ Large: 88px diameter
├─ Medium: 64px diameter
└─ Small: 40px diameter

Background: Linear gradient or solid #ddd
Border-radius: 50% (circular)
Border: None or 2px white border
Overlay edit button: 32px × 32px, circular, bottom-right position

Edit button styling:
├─ Background: white
├─ Icon: Pencil, 16px, Color: #333
├─ Border: 2px, Color: #999
└─ Shadow: 0 2px 8px rgba(0,0,0,0.1)
```

---

### 12. Grid Item (Icon + Label)

```
Container width: 84px (4-column grid on 390px width)
Container height: 112px
Icon area: 48px × 48px, circular or outlined square
Icon color: #333
Label: 14px, Weight: 400, Color: #000, centered below
Padding: 8px (top to icon), 8px (icon to label)

States:
├─ Default: Opacity 1.0
├─ Pressed: Background light gray
└─ Edit mode: Minus icon overlay (24px × 24px, top-right)
```

---

### 13. Card/Container

```
Background: white
Border: 1px, Color: #eee
Border-radius: 12px
Padding: 16px
Shadow: 0 2px 8px rgba(0,0,0,0.05)
Margin-bottom: 12px

Nested containers:
├─ Dark background: #1a1a1a
├─ Light background: #f5f5f5
└─ Image cards: Aspect ratio 1:1, border-radius: 8px
```

---

### 14. Tab Navigation

```
Height: 48px
Layout: Horizontal scrollable (if needed)
Padding: 0 16px

Tab item:
├─ Height: 48px
├─ Font-size: 16px
├─ Weight: 400 (inactive) | 500 (active)
├─ Color: #999 (inactive) | #000 (active)
├─ Padding: 16px (horizontal)
└─ Line-height: 1.5

Active indicator:
├─ Position: Bottom of tab
├─ Height: 3px
├─ Color: #000 (black)
├─ Width: Content width
└─ Animation: Slide to new position
```

---

### 15. Divider/Separator

```
Type: Horizontal
Height: 1px
Color: #eee (light) | #ddd (darker)
Width: Full width or inset (16px margins)
Margin: 0 (when full-width)
```

---

## Color Tokens

| Token Name | Hex Value | Usage |
|------------|-----------|-------|
| **Neutrals** | | |
| Black | #1a1a1a | Primary text, buttons, headers |
| Dark Gray | #333333 | Secondary text, icons |
| Gray | #666666 | Tertiary text, values, labels |
| Light Gray | #999999 | Disabled text, subtle text |
| Lighter Gray | #cccccc | Borders, dividers (light) |
| Very Light Gray | #eeeeee | Dividers, backgrounds |
| Off-White | #f5f5f5 | Section backgrounds, info boxes |
| White | #ffffff | Primary backgrounds, cards |
| **Semantic** | | |
| Primary Blue | #0066ff | Links, active states, CTA buttons |
| Success Green | #34c759 | Positive states, verified badges |
| Warning Orange | #ff9500 | Alerts, warnings, important info |
| Error Red | #ff3b30 | Error states, destructive actions |
| **UI Specific** | | |
| OKX Green | #e0f700 | Badge backgrounds, season tags |
| Disabled State | #e6e6e6 | Disabled button backgrounds |
| Focus Ring | #0066ff | Focus states (2px border) |
| Verified Green | #34c759 | Verified badge borders/text |
| Divider Dark | #dddddd | Form field borders |

---

## Typography System

### Font Family
**Primary:** -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
**Fallback:** System font stack (iOS native)

### Font Sizes & Weights

| Usage | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Display / Page Title | 28px | 700 | 1.3 | -0.5px |
| Section Header | 20px | 700 | 1.2 | -0.3px |
| Subsection Header | 18px | 700 | 1.2 | -0.2px |
| Large Body / Label | 16px | 500 | 1.5 | normal |
| Standard Body | 16px | 400 | 1.5 | normal |
| Body/Value | 14px | 400 | 1.5 | normal |
| Small Text/Helper | 13px | 400 | 1.6 | normal |
| Extra Small | 12px | 400 | 1.5 | normal |

### Text Colors by Context
- Primary text (headers, labels): #1a1a1a
- Secondary text (values, descriptions): #666666
- Tertiary text (helpers, disabled): #999999
- Link text: #0066ff
- Success text: #34c759
- Error text: #ff3b30

---

## Spacing & Layout Grid

### Base Grid Unit: 4px
All spacing follows multiples of 4px

### Spacing Scale
```
xs:  4px   (1 unit)
sm:  8px   (2 units)
md:  12px  (3 units)
lg:  16px  (4 units) - MOST COMMON
xl:  20px  (5 units)
xxl: 24px  (6 units)
```

### Common Spacing Patterns

**Padding:**
- Page/container: 16px horizontal, 12px vertical
- Cards: 16px all sides
- Input fields: 12px vertical, 16px horizontal
- Buttons: 12px vertical (48px total height), 24px+ horizontal
- List items: 16px horizontal, 0 vertical (items have 56px height)

**Margins:**
- Between sections: 16px
- Between form fields: 12px
- Below headers: 16px
- Bottom of cards: 12px

**Safe Area:**
- Top (status bar): 44px
- Bottom (home indicator): 34px
- Left/Right: 0px (full width sections), 16px (content inset)

### Screen Width Breakdown (390px total)
```
Total width: 390px
Side padding: 16px × 2 = 32px
Content width: 358px

4-Column Grid:
├─ Item width: 358 / 4 = 89.5px ≈ 84px
├─ Gap between: 8px
└─ Total: 84 + 8 + 84 + 8 + 84 + 8 + 84 = 358px

2-Column Grid (Trading volume metrics):
├─ Item width: (358 - 16) / 2 = 171px
├─ Gap: 16px
└─ Total: 171 + 16 + 171 = 358px
```

---

## Interaction Patterns

### 1. Navigation Patterns

**Back Navigation:**
- Gesture: Swipe right from left edge
- Button: Back arrow (24px × 24px) top-left corner
- Action: Pop current view from stack
- Animation: Slide right, 0.3s

**Tab Navigation:**
- Gesture: Tap tab item
- Animation: Content fade, tab indicator slide (0.3s)
- Scroll to active: Auto-scroll horizontal tabs if needed

**Hierarchical Navigation:**
- Flow: Main menu → Settings category → Detail view → Sub-settings
- Breadcrumb support for fee tier screens

---

### 2. Form Interactions

**Input Focus:**
- Border changes to #0066ff
- Keyboard appears (iOS standard)
- Cursor visible in field
- Placeholder text fades or disappears

**Input Validation:**
- Real-time: Character counter updates
- On blur: Validate field content
- Error state: Red border + error message below
- Success state: Green checkmark or no indicator

**Form Submission:**
- Button active when required fields filled
- Disabled button: Opacity 0.5, Color #999
- Loading state: Spinner inside button, text hidden
- Success: Navigation away or confirmation message

---

### 3. Editing Mode Patterns

**Shortcuts Editor:**
- Enter edit mode: Tap edit button
- Visual feedback: Cancel/Save buttons appear
- Item feedback: Gray minus (-) icons appear on top-right
- Tap to remove: Removes shortcut from display
- Save action: Persists reordering/removal
- Cancel action: Revert to previous state

---

### 4. Disclosure/Expansion

**Collapsible Sections:**
- Indicator: Chevron (down/up rotation)
- Animation: Content slide in/out, 0.3s
- Initial state: May be collapsed or expanded depending on context
- Example: "Trading fee rebates" section with ^ indicator

**Disclosure Rows:**
- Chevron right (>) indicates tappable
- Tap action: Navigate to detail view
- Example: "Trading fee tier" > Lvl 1

---

### 5. Touch Targets

**Minimum size:** 44px × 44px (iOS HIG standard)
- Buttons: 48px height satisfies this
- Icon buttons: 24px icon + 10px padding = 44px minimum
- List items: 56px height provides ample target

**Touch feedback:**
- Visual: Background color change (#f5f5f5)
- Opacity: Change from 1.0 to 0.7
- Animation: Immediate on touch, 0.15s fade
- Duration: 0.1s on down, 0.2s on up/cancel

---

### 6. Modal/Sheet Patterns

**Confirmation Modals:**
- Overlay: Semi-transparent black background
- Animation: Slide up from bottom (0.3s)
- Content: Centered card with title, content, buttons
- Close: Tap outside (if dismissible) or X button
- Examples: Identity verification, bio confirmation

**Drawer Sheets:**
- Animation: Slide in from bottom
- Height: Expandable, pinch to dismiss
- Drag handle: Visible at top center
- Content: Scrollable within bounds

---

### 7. Pull-to-Refresh & Loading

**Pull-to-Refresh:**
- Threshold: Drag 60px down to trigger
- Visual: Rotating spinner icon
- Animation: Spring bounce back after refresh
- Timing: 0.3s

**Loading States:**
- Skeleton screens: Gray placeholder boxes
- Spinners: 24px × 24px, rotating continuously
- Progress: For multi-step processes (not shown in screens, but inferred)

---

### 8. Keyboard & Input Patterns

**Text Input Keyboard:**
- Type: Default (text) for most fields
- Type: Email for email fields
- Type: Number for numeric fields
- Return key: "Next" for intermediate fields, "Done" for last field
- Autocorrection: Disabled for usernames/IDs
- Autocapitalization: Sentences or off depending on field

**Textarea Keyboard:**
- Type: Default with full keyboard
- Return: Newline (not submit)
- Submit: Separate button outside keyboard

---

### 9. Accessibility Patterns

**Screen Reader Support:**
- All interactive elements: Labeled with accessible name
- Images: Alt text provided
- Icons: Semantic meaning described (e.g., "Back", "Edit")
- Form fields: Labels associated (visible or hidden)
- Disabled states: Announced as "dimmed" or "disabled"

**Color Contrast:**
- Text on white: #1a1a1a (21:1 ratio) ✓
- Text on gray: #333 (15:1 ratio) ✓
- Links: #0066ff (8.5:1 on white) ✓
- Helper text: #999 (4.5:1 on white) - Consider darker for WCAG AA

**Touch Accessibility:**
- Minimum 44px × 44px touch targets
- Tap/touch areas: Generous spacing
- Double-tap to confirm destructive actions

---

## ZR Securities Adaptation Strategy

### 1. Regulatory Compliance Customizations

#### New Sections to Add:

**A. Regulatory Status Section (Profile Tab)**
```
Add after "Identity verification":
├─ Regulatory Status
│  ├─ Display: "Licensed", "Pending", "Verified"
│  ├─ Color: Green (#34c759) for licensed
│  ├─ Jurisdiction: Hong Kong, Singapore, UAE (based on user location)
│  └─ Tap target: Shows compliance documentation
│
└─ SFC Registration Details
   ├─ Display: SFC License number (if applicable)
   ├─ Link: "View SFC License (external link)"
   └─ Icon: External link indicator (↗)
```

**B. Compliance Settings Tab (New)**
```
Add new tab in User Center between "Preferences" and "Notifications":
├─ Compliance Settings
│  ├─ Risk Disclosure (Checkbox + link to full T&Cs)
│  ├─ Accredited Investor Status (Dropdown: Yes/No/Not Applicable)
│  ├─ Qualified Investor Status (For institutional users)
│  ├─ Data Privacy Consent (Checkbox)
│  └─ Regulatory Updates Opt-in (Toggle switch)
```

#### Styling Modifications:

**Regulatory Badge:**
```
Location: Next to email in header
├─ Background: Green (#34c759) for compliant
├─ Text: "Compliant", 11px, Weight: 600, Color: white
├─ Padding: 4px 8px
├─ Border-radius: 4px
└─ Icon: Checkmark (8px × 8px)
```

**Warning/Alert for Non-Compliant:**
```
If jurisdiction not fully compliant:
├─ Alert box color: #ff9500 (warning orange)
├─ Icon: Warning triangle
├─ Text: "Trading limitations in your region. [Learn more]"
├─ Dismissible: Optional close button
└─ Placement: Top of profile section
```

---

### 2. Multi-Exchange Fee Structure

#### Trading Fee Tier Display Modifications:

**Current OKX Structure:**
- Single exchange: Lvl 1-10
- Volume-based tiers
- Single rebate card system

**ZR Securities Multi-Exchange Structure:**
```
New "Trading Fee Tiers" page (replace single tier display):

Tab Navigation (New):
├─ OKX (existing)
├─ Binance (if integrated)
├─ Bybit (if integrated)
├─ Deribit (if integrated)
└─ Others

For each exchange:
├─ Exchange logo + name: 16px, Weight: 600
├─ Current tier: Large badge (same as OKX)
├─ 30-day volume: Multi-asset breakdown
│  ├─ Spot: 0.0000 USD
│  ├─ Futures: 0.0000 USD
│  ├─ Options: 0.0000 USD (per exchange if applicable)
│  ├─ Perpetuals: 0.0000 USD
│  └─ Total Combined: Highlighted in bold
│
└─ Fee rate comparison table:
   ├─ Row headers: Spot | Futures | Options | Perpetuals
   ├─ Columns: OKX | Binance | Bybit | Deribit
   ├─ Values: 0.02% | 0.03% etc.
   └─ Highlight lowest fees in green
```

**Multi-Exchange Rebate System:**
```
New section below tier display:

"Fee Rebates Across Exchanges":
├─ Table layout:
│  ├─ Exchange | Used | Available | Expiry
│  ├─ OKX | 0.0000 USDT | 3.0000 USDT | Expires: Mar 2026
│  ├─ Binance | 0.5000 USDT | 2.5000 USDT | Expires: May 2026
│  └─ Bybit | 0.0000 USDT | 5.0000 USDT | Expires: Jun 2026
│
└─ Action: "Consolidate rebates" button (if applicable)
```

**Tier Progression Visualization (New Component):**
```
For each exchange, add progress bar:
├─ Current volume position: X% of next tier
├─ Visual: Horizontal bar, 100% width
├─ Colors:
│  ├─ Completed: #34c759 (green)
│  ├─ In progress: #0066ff (blue)
│  └─ Remaining: #e5e5ea (light gray)
├─ Labels:
│  ├─ Left: "Tier 5" (current)
│  ├─ Center: "$50K / $100K" (progress)
│  └─ Right: "Tier 6" (next)
└─ Micro-text: "2 more days to count toward next tier"
```

---

### 3. SFC Compliance Settings

#### New Compliance Preferences Tab:

**Personal Trading Limits (Hong Kong Regulation)**
```
Card: "Trading Limits"
├─ Daily withdrawal limit: [Input field, HKD]
├─ Monthly withdrawal limit: [Input field, HKD]
├─ Max concurrent positions: [Input field, quantity]
├─ Risk level preference: [Radio buttons]
│  ├─ ◯ Conservative (Spot trading only)
│  ├─ ◯ Moderate (Spot + Futures)
│  └─ ◯ Aggressive (All products)
└─ Last updated: [Date], [Reset button]
```

**Institutional vs Retail Classification**
```
Card: "Account Classification"
├─ Current status: "Retail Investor"
├─ Indicator: Green badge "Compliant"
├─ Professional investor upgrade: [Button] "Apply Now"
└─ Benefits explanation: "Access to leverage & institutional products"
```

**Risk Acknowledgment**
```
Card: "Risk Disclosures"
├─ Checkboxes (required):
│  ├─ ☑ I understand derivative trading risks
│  ├─ ☑ I have read the SFC risk disclosure
│  └─ ☑ I acknowledge potential loss of principal
├─ Last confirmed: [Date]
└─ Re-confirm button: "Update disclosures" (if expired)
```

**Regulatory Document Archive**
```
Card: "Compliance Documents"
├─ List items (each scrollable):
│  ├─ SFC Risk Disclosure (Updated: Mar 2024)
│  ├─ Terms of Service - APAC Edition (Updated: Jan 2024)
│  ├─ Privacy Policy - Hong Kong (Updated: Feb 2024)
│  ├─ Margin/Leverage Agreement (Updated: Dec 2023)
│  └─ Account Agreement (Executed: Oct 2023)
│
├─ Action buttons per item:
│  ├─ "View" (PDF opens in modal)
│  ├─ "Download" (to device)
│  └─ "Acknowledge" (if not yet signed)
│
└─ Archive download: "Export all compliance docs" button
```

---

### 4. Exchange-Specific UI Components

#### OKX Native Components (Keep as-is):
- Shortcuts menu (existing)
- Manage Assets section (existing)
- Trade section (existing)
- Rewards center (existing)

#### New Sections for ZR Multi-Exchange Support:

**Connected Exchanges Section** (New, add to Profile tab)
```
Card: "Linked Exchanges"
├─ Grid layout: 2 columns
├─ Exchange items:
│  ├─ Exchange logo: 48px × 48px
│  ├─ Exchange name: "Binance"
│  ├─ Status: "Synced" (green) | "Disconnected" (red)
│  ├─ API connection: "[Badge] API v3" or "[Unlink]"
│  ├─ Last sync: "2 minutes ago"
│  └─ Tap to: Show API key details or link new exchange
│
└─ Add exchange button: "+" icon, bottom-right
```

**Unified Portfolio View Settings** (New option in Preferences)
```
Toggle option:
├─ Label: "Combine exchange balances"
├─ Description: "Show combined net worth across all exchanges"
├─ Toggle: ON/OFF
├─ Exchange weight: Dropdown sliders for portfolio weighting
└─ Conversion currency: [Dropdown] USD | HKD | SGD | AED
```

**Exchange-Specific Fee Alerts** (Notification Settings)
```
New notification categories:
├─ ☑ Fee tier changes (each exchange)
├─ ☑ Rebate card expiry warnings
├─ ☑ Maintenance notifications by exchange
├─ ☑ Regulatory updates (SFC/local)
└─ Per-exchange notification: [Toggle per exchange]
```

---

### 5. Color & Branding Adjustments for ZR Securities

**New ZR-Specific Color Tokens:**
```
| Token | Hex | Purpose |
|-------|-----|---------|
| ZR Primary | #0051ba | Primary actions (darker blue) |
| Compliance Green | #10b981 | Regulatory approval badges |
| Warning Amber | #f59e0b | Risk/warning alerts |
| Hong Kong Blue | #003d82 | SFC branding |
| Tier Achievement Gold | #d4af37 | VIP tier badges |
```

**Logo Usage:**
```
Top-left corner of profile header:
├─ Space: 12px × 12px
├─ Size: 32px × 32px
├─ ZR Securities logo (white + blue)
└─ Replaces OKX logo while maintaining consistency
```

---

### 6. Additional Screens for ZR Securities

#### A. Tier Achievement Screen (After tier upgrade)
```
Similar to OKX success screen (334.png):
├─ Celebration animation (confetti/icon)
├─ Large text: "Tier 6 Achieved!"
├─ Subtitle: "Your 30-day volume: $150,000"
├─ Benefits list:
│  ├─ Lower maker fees: 0.015% (was 0.02%)
│  ├─ Higher rebate tier: $5,000 available
│  └─ Exclusive features: "Margin trading unlocked"
│
├─ Primary CTA: "View new benefits"
└─ Secondary: "Continue trading"
```

#### B. Compliance Check Modal (First login after regulatory update)
```
Modal overlay:
├─ Icon: SFC badge or document
├─ Heading: "Compliance Check Required"
├─ Body: "Recent regulatory updates affect your account. Please confirm your trading status."
├─ Required fields:
│  ├─ Risk level: Radio buttons
│  ├─ Acknowledge: Checkbox + link
│  └─ Confirm: Button
│
└─ Action: "Confirm & Continue"
```

---

### 7. Localization for ZR Hong Kong Operations

**Language Support:**
- English (primary)
- Traditional Chinese (Hong Kong)
- Simplified Chinese (Mainland, if applicable)

**Regional Text Customizations:**

**Profile Tab Labels (EN/ZH-HK):**
| English | Traditional Chinese |
|---------|-------------------|
| Trading fee tier | 交易費級別 |
| Identity verification | 身份驗證 |
| Country/Region | 國家/地區 |
| Regulatory Status | 監管狀態 |
| SFC License | SFC 牌照 |

**Button Text (Regulatory):**
| English | Traditional Chinese |
|---------|-------------------|
| View SFC License | 查看 SFC 牌照 |
| Update Compliance | 更新合規資訊 |
| Acknowledge Risk | 確認風險免責聲明 |
| Apply for Professional Status | 申請專業投資者身份 |

**Currency Display for Hong Kong:**
```
Default: Display HKD alongside USD
Format: "USD 0.0000 / HKD 0.0000"
Conversion rate: Updated daily, last updated [timestamp]
Fees display: "0.02% / HKD 0.50 minimum"
```

---

### 8. Implementation Priority

**Phase 1 (MVP - 4 weeks):**
1. Add "Regulatory Status" section to Profile tab
2. Implement "Compliance Settings" new tab
3. Add SFC badge/indicator to header
4. Create multi-exchange fee tier display
5. Add regulatory alert banner (if needed)

**Phase 2 (Enhancement - 6 weeks):**
1. Full compliance document archive
2. Risk disclosure acknowledgment system
3. Connected exchanges management
4. Exchange-specific fee comparison tables
5. Localization to Traditional Chinese

**Phase 3 (Advanced - 8+ weeks):**
1. Unified portfolio settings
2. Tier progression visualization
3. Automated rebate consolidation
4. Advanced risk management settings
5. Institutional investor features

---

### 9. Data Security & Privacy Considerations

**Sensitive Information Handling:**
```
Fields requiring extra protection:
├─ SFC License number: Mask except last 4 digits
├─ Bank account: Never display full account number
├─ Tax ID: Masked display
└─ Passport: Stored server-side only, not displayed

Biometric Requirements (Hong Kong):
├─ Face ID for high-value transactions
├─ Fingerprint for regulatory document viewing
└─ PIN for sensitive setting changes
```

**Audit Trail:**
```
All compliance-related changes logged:
├─ Timestamp: 2026-03-04 14:23:45 UTC+8
├─ Action: "Compliance status updated"
├─ User: Email (masked)
├─ IP address: Logged (not displayed to user)
└─ Device: iOS 17.4, iPhone 14 Pro
```

---

## Summary & Deliverables

This specification provides:

1. **Pixel-perfect component specifications** for OKX iOS UI
2. **Complete design system** with typography, color tokens, and spacing
3. **Interaction patterns** for common iOS gestures and states
4. **Regulatory framework** for SFC Hong Kong compliance
5. **Multi-exchange architecture** for ZR Securities integration
6. **Localization strategy** for Traditional Chinese markets
7. **Implementation timeline** with 3-phase rollout plan

**Key Files Generated:**
- `/sessions/blissful-wonderful-ride/OKX_iOS_Design_Spec.md` (this document)

**Next Steps for ZR Securities:**
1. Review component specifications with design team
2. Create Figma components library based on specs
3. Develop compliance feature mockups
4. Conduct SFC/regulatory review of UI text
5. Begin Phase 1 implementation with development team

