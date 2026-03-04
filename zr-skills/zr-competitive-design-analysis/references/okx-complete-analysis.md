# OKX iOS App — Complete Design Analysis
> Source: 429 screenshots across 74 Mobbin Flows | Analyzed: 2026-03-04

---

## 1. App Architecture Overview

### Bottom Tab Navigation (5 tabs)
| Tab | Icon | Function |
|-----|------|----------|
| OKX | Logo | Home/Menu hub — shortcuts, manage assets, trade entries, grow |
| Discover | Compass | Market discovery, rankings, analytics, news articles |
| Trade | Chart | Spot/margin/futures/options trading with chart + order book |
| Grow | Seedling | Earn, Loan, Jumpstart, Structured Products |
| Assets | Wallet | Portfolio overview, deposit/withdraw, transfer, trading history |

### Dual-Mode Architecture: Exchange vs. Wallet
OKX operates two parallel product lines toggled via a top-level **Exchange / Wallet** segmented control:
- **Exchange**: Traditional CEX (spot, derivatives, earn, P2P)
- **Wallet**: Web3 self-custody (DeFi, NFT, DApps, on-chain swaps)

This dual architecture is a critical observation — ZR Securities can adapt this to **Exchange / Brokerage** separation.

---

## 2. Design System Tokens (Extracted from Screenshots)

### Color Palette
| Token | Hex (approx) | Usage |
|-------|-------------|-------|
| Background Primary | #FFFFFF | Main content area (light mode) |
| Background Secondary | #F5F5F5 | Cards, section backgrounds |
| Background Dark | #121212 | Trading charts, dark sections |
| Text Primary | #000000 / #1A1A1A | Headlines, values |
| Text Secondary | #8E8E93 | Labels, captions, timestamps |
| Text Tertiary | #C7C7CC | Placeholders, disabled states |
| Accent Green (Rise/Buy) | #00D084 / #34C759 | Positive changes, buy buttons, success |
| Accent Red (Fall/Sell) | #FF3B30 / #FF453A | Negative changes, sell buttons, errors |
| Accent Lime (Badges) | #C8FF00 / #CCFF00 | "New", "Bonus", "Popular" badges |
| Accent Teal | #00CED1 / #17A2B8 | QR frames, links, info highlights |
| Accent Purple | #AF52DE | Loan module highlights |
| CTA Primary | #000000 | Primary buttons (black rounded pill) |
| CTA Disabled | #E5E5EA | Disabled buttons |
| Divider | #F0F0F0 | List separators |
| Card Border | #E5E5EA | Card outlines |

### Typography
| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Display | 28-32px | Bold | Balance totals, hero headlines |
| H1 | 24px | Bold | Screen titles ("Log in", "Transfer") |
| H2 | 20px | Semibold | Section headers |
| H3 | 17px | Semibold | Card titles |
| Body | 15px | Regular | Content text, descriptions |
| Caption | 13px | Regular | Timestamps, secondary info |
| Overline | 11px | Medium | Badge text, tab labels |
| Mono | 15-28px | Medium | Prices, amounts, addresses (monospace) |

### Spacing & Layout
- Base grid: 4px
- Content padding: 16px horizontal
- Section gap: 24px
- Card padding: 16px
- List row height: 56-64px
- Button height: 52px (primary), 36px (secondary)
- Tab bar height: 49px + 34px safe area = 83px
- Nav bar height: 44px
- Status bar: 59px (Dynamic Island)

### Border Radius
- Buttons: 26px (full pill shape)
- Cards: 12px
- Input fields: 8px
- Modals/sheets: 16px top corners
- Badges: 4-6px
- Avatars: 50% (circle)

---

## 3. Flow-by-Flow Analysis

### Flows 001-002: Onboarding & Account Verification
**Screens observed**: Splash/loading (OKX logo with hand-drawn animated border), Sign up page, Phone verification (6-digit OTP), Country/region selection (searchable bottom sheet), Terms agreement (checkbox + links to ToS, Risk Disclosure, Privacy Policy)

**Key patterns**:
- Minimal white background, large bold headlines ("Sign up", "Enter your phone code")
- Single-focus forms — one input per screen (progressive disclosure)
- OTP input: 6 separate boxes with auto-advance
- Resend timer: countdown in gray text
- Country search: Bottom sheet with searchable list, unavailable regions grayed out
- Social login options: Google, Apple, Telegram — circular icon buttons
- Black "Next" button (disabled when form incomplete, enabled when valid)
- Help icon (?) top-right on every onboarding screen

**ZR adaptation**: Add SFC-required risk disclosure earlier in flow. Add "Which exchange do you want to trade on?" step.

### Flows 003-009: Home, Rewards, Referral, Notifications, Messages, Search, Articles
**Screens observed**: Home hub (menu with icon grids for shortcuts/assets/trade/grow), Reward center with mystery boxes, Referral program, Notification center (tabs: All/System/Promo with filter pills), Messages inbox, Global search with trending topics, Article detail (rich text with embedded charts)

**Key patterns**:
- **Home hub (OKX tab)**: User avatar + masked email at top, "Verified" badge, 4 customizable shortcuts, icon grids for Manage Assets (Buy/Sell/Deposit/Withdraw/P2P) and Trade (Convert/Spot/Margin/Futures/Options/Bots/Copy/Demo), Grow section below
- **Notifications**: Category tabs with unread counts, filter pills for date range, swipe-to-delete on individual notifications
- **Search**: Full-screen overlay, trending searches as chips, recent searches with clear-all, real-time results as-you-type
- **Articles**: Full-width hero images, reading time estimate, share button, related articles carousel

**ZR adaptation**: Home hub needs multi-market section (Crypto/Stocks/Forex/Commodities tabs). Notification categories should include market alerts per asset class.

### Flows 010-013: Market Discovery, Favorites, Switching/Sorting Crypto
**Screens observed**: Discover page with trading pair rankings (live data tables), Market opportunity lists with 24h change, Favorites management (add/remove stars, reorder), Currency filter dropdown (searchable modal for base currency selection), Sort controls on column headers

**Key patterns**:
- **Discover page**: Horizontal category tabs (Opportunities/Rankings/Market Data), data-dense tables with live updating prices
- **Market data tables**: Columns — Pair | Price | 24h Change% — tappable column headers for sort direction
- **Favorites**: Star icon toggle, drag-to-reorder in edit mode, "Edit" button top-right
- **Currency filter**: Bottom sheet modal with search, popular currencies as chips, full alphabetical list below
- **Data visualization**: Mini sparkline charts in some list rows, green/red coloring for change direction

**ZR adaptation**: Need multi-market tabs above crypto-specific tabs. Exchange badge per pair. Market hours indicator for non-24/7 assets.

### Flow 014: Trade (Exchange) — Core Trading Screen
**Screens observed**: Full trading interface with candlestick chart, order book, order form, order confirmation modal

**Key patterns**:
- **Chart area** (~40% screen height): Candlestick chart with MA overlays (MA7, MA30), time period tabs (15m/1h/4h/1D/More), hide toggle for minimizing chart
- **Order book** (right panel): Split buy/sell with depth bars (green bids, red asks), price levels with amounts, spread indicator at center
- **Order form** (left panel below chart): Buy/Sell toggle (green/maroon), order type dropdown (Limit/Market/Stop), price input, amount input with percentage quick-buttons
- **Order confirmation modal**: Centered overlay with order details (pair, type, price, amount), TP/SL expandable section, "Don't show again" checkbox, Confirm button
- **Status indicators**: Red notification dot on top bar, real-time price tooltip on chart crosshair

**ZR adaptation**: Add exchange routing indicator (which exchange executes this). Implement cooling-off modal for large orders (>20% portfolio). TP/SL should be more prominent per antifragile principles.

### Flows 015-017: Crypto Detail, Sell, Action Options
**Screens observed**: Crypto detail with price display and chart, Sell flow with amount input, Action options bottom sheet (buy/sell/convert/deposit/withdraw/transfer shortcuts per asset)

**Key patterns**:
- **Crypto detail**: Large current price (28px mono), 24h change badge (colored pill), OHLCV row, chart with time period selector, action buttons at bottom
- **Action options**: Bottom sheet triggered by "..." button, grid of quick actions specific to the selected crypto asset
- **Sell flow**: Amount input with available balance display, market/limit toggle, custom numeric keypad

### Flows 018-021: P2P Trading, Buying, Orders, P2P Profile
**Screens observed**: P2P marketplace with vendor listings, Buy crypto flow, Order details with status tracking, P2P user profile with ratings

**Key patterns**:
- **P2P marketplace**: Buy/Sell tabs, currency selector (fiat), payment method filter, vendor cards showing: username + rating + trade count, price, min/max amount, available quantity, green "Buy" button
- **P2P vendor card**: Trust indicators (online status, completion rate, avg release time), payment method badges
- **Order tracking**: Status badge at top (Pending/Completed/Cancelled), step-by-step timeline, countdown timer for payment window
- **P2P profile**: Avatar + username, stats (total trades, completion rate, avg time), verification badges

**ZR adaptation**: P2P not applicable for SFC-licensed broker. However, the vendor trust rating pattern is useful for exchange quality indicators.

### Flows 022-025: Convert, Trading Bots, Copy Trading, Options
**Screens observed**: Token conversion interface, Trading bots marketplace with performance charts, Copy trading with vouchers/promotions, Options chain (professional + traditional views)

**Key patterns**:
- **Convert**: Simple swap interface — From/To fields with asset selectors, swap direction button, estimated output, one-tap convert
- **Trading bots**: Bot marketplace cards showing: bot name, strategy type, runtime duration, ROI%, max drawdown, followers count, green line performance charts
- **Copy trading**: Lead trader cards with PnL graphs, follower count, copy button, promotional voucher cards (lime green)
- **Options**: Professional view (Greeks table: Strike/Positions/Delta/Bid/Ask), Traditional view (simpler call/put selector with price direction arrows)

**ZR adaptation**: Convert is applicable. Trading bots/copy trading could be Phase 2 features. Options UI is reference for future derivatives module.

### Flows 026-031: Grow (Earn, Loans, Jumpstart, Structured Products)
**Screens observed**: Earn hub with tab navigation (Earn/Loan/Jumpstart), Simple Earn products with APR display, Structured products (Snowball/Dual Investment/Seagull/Shark Fin), Loan application forms, Jumpstart project listings

**Key patterns**:
- **Earn hub**: Three tabs at top, search bar, quick-access icon grid (Simple Earn/Structured Products/On-chain Earn), "Yesterday's profit" and "Total profit" summary, "Auto-earn" promotional card
- **Product cards**: Asset icon + name, APR percentage (large, right-aligned), "Bonus" badge in lime, risk level indicator (Low Risk/Higher Returns filter tabs), duration (3 days/7 days selector buttons)
- **Structured products**: Product type tabs (Snowball/Dual Investment/Seagull/Shark Fin), hero illustration, countdown timer for subscription window, APR range (e.g., "3.00% ~ 13.00%"), "Learn more" inline education
- **Loan interface**: Dark-themed input form, collateral dropdown, amount with numeric keypad, APR badge, order notes field
- **Jumpstart**: Project cards with dark backgrounds, statistics (Total views, Cumulative amount, Projects listed), project detail with verified badges

**ZR adaptation**: Earn products applicable for crypto portion. Structured products need SFC approval. Loan products need regulatory review. Jumpstart model could work for new token listings.

### Flows 032-036: Assets, Deposit, Transfer, History
**Screens observed**: Asset portfolio with Exchange/Wallet tabs, individual asset detail, On-chain deposit with QR code, Transfer between accounts form, Deposit/trading history with filters

**Key patterns**:
- **Assets overview**: Exchange/Wallet toggle at top, total holdings in USD (large display), individual asset rows (icon, name, balance, USD value), "Balance less than 10 USD" filter for dust
- **Deposit**: Network selector (radio buttons with fee/arrival time), QR code display (centered, 160px), address with copy button, minimum deposit amount warning, memo/tag requirement (red warning if needed)
- **Transfer**: From/To account selectors (Funding/Trading/Earn dropdowns), asset selector, amount input with "Max" link (blue), confirm button
- **History**: Filter tabs (All crypto/Date/Status), transaction rows with type, amount (green positive/red negative), timestamp, empty state illustration when no records

**ZR adaptation**: Assets overview needs multi-asset class aggregation. Deposit flow essentially same for crypto. Transfer between ZR accounts and exchange accounts. History needs exchange attribution.

### Flows 037-055: Web3 Wallet (Keyless, NFT, DeFi, DApps, Marketplace)
**Screens observed**: Keyless wallet home, wallet creation (password setup, loading state), NFT gallery, NFT sell/listing form, Marketplace browsing, Inscription/Runes, DeFi portfolio, Discover DApps, Trending DApps, Cryptopedia (educational), Events/campaigns

**Key patterns**:
- **Wallet home**: Avatar + masked email, "$0.00009998" balance display, 5 quick-action buttons (Send/Receive/Scan/History/More), Hot promotional banner, Crypto/NFTs/DeFi/Approvals tabs, NFT grid with "New" badges
- **Wallet creation**: Simple password-based keyless wallet, loading animation, educational "What's OKX Wallet?" content
- **NFT listing**: Image preview, set price input with ETH selector, expiration dropdown (7 days), fee breakdown, "You'll earn" calculation
- **Marketplace**: Collection cards with floor prices and verified badges, trending collections, category browsing
- **DeFi/DApps**: Portfolio value with chart, DApp category browsing, trending DApps with TVL display
- **Events**: Campaign cards with timelines, reward tiers, participation tracking, countdown timers

**ZR adaptation**: Web3 wallet not applicable for Phase 1 (SFC-regulated). However, DApp browser pattern useful for future integrations. Educational content (Cryptopedia) pattern excellent for ZR's cognitive companion system.

### Flows 056-058: Menu, Shortcuts, Settings
**Screens observed**: Main menu (profile card + icon grids for all features), Shortcut editing (drag-to-reorder, add/remove), Settings (language, currency, appearance, haptic feedback toggles)

**Key patterns**:
- **Menu**: Profile card at top (avatar, masked email, "Profile and settings" link, Verified badge), Customizable shortcuts (4 slots, edit pencil icon), Feature grids organized by category (Manage Assets, Trade, Grow)
- **Shortcut editing**: Drag handles on shortcut items, add (+) button for available shortcuts, section-based organization
- **Settings**: Toggle switches for preferences (dark mode, haptic feedback), dropdown selectors (language, default currency), grouped sections with headers

### Flows 059-066: Profile Management (Avatar, Identity, Country, Fees, Nickname, Bio, Accounts, Switch)
**Screens observed**: Profile picture editor, Identity verification status, Country/region change, Trading fee tier display, Nickname editing, Bio text editor, Connected social accounts, Account switching

**Key patterns**:
- **Profile**: User center with tabs, identity verification status with progress indicators
- **Fee tiers**: VIP tier display with volume thresholds, fee rates table (maker/taker), progress bar to next tier
- **Connected accounts**: Social login connections (Google/Apple/Telegram) with connect/disconnect toggles
- **Account switching**: Account list with current indicator, "Add account" option

### Flows 067-073: Logout, Security, Language, Notifications, Help, Terms, Privacy
**Screens observed**: Logout confirmation, Security center (2FA, anti-phishing, device management), Language picker, Notification settings (granular toggles), Help center (FAQ categories), Terms of service, Privacy policy

**Key patterns**:
- **Security**: Feature shortcuts at top, toggle-based security settings (2FA types, login protection), device management list
- **Notification settings**: Granular category toggles (Transactions/Trading/Market/Price Alerts/System), sub-toggles per category, push/email/SMS channel selection
- **Help center**: Search bar, FAQ category cards, popular questions, chat support entry point
- **Legal docs**: Full-text display with scroll, table of contents anchors

### Flow 074: Logging In
**Screens observed**: Login screen (Phone/Email tabs, country code selector, social login buttons), 2FA verification, biometric prompt

**Key patterns**:
- **Login form**: Tab toggle (Phone/Email/Sub-account), phone input with country code dropdown (+49 etc.), "Next" primary button, "Don't have an account? Sign up" link, Social login (Google/Apple/Telegram circular icons)
- **2FA**: Same OTP input pattern as registration (6 boxes)

---

## 4. Component Library (Extracted)

### Navigation Components
| Component | Variants | Usage |
|-----------|----------|-------|
| Bottom Tab Bar | 5 items, active indicator (filled icon) | Global navigation |
| Segmented Control | 2-4 segments, pill highlight | Exchange/Wallet, Buy/Sell, Call/Put |
| Horizontal Tab Bar | Scrollable, underline indicator | Category filtering |
| Back Button | Left arrow icon | Hierarchical navigation |
| Close Button | X icon | Modal/sheet dismiss |
| Bottom Sheet | Draggable, rounded top corners 16px | Filters, selectors, confirmations |

### Input Components
| Component | Variants | Notes |
|-----------|----------|-------|
| Text Input | Standard, with icon prefix, with clear button | 8px radius, 48px height |
| OTP Input | 6 separate boxes with auto-advance | Used in verification flows |
| Amount Input | With "Max" link, unit toggle, percentage quick-buttons | Financial inputs |
| Dropdown Selector | Arrow indicator, opens bottom sheet | Currency, network, account selectors |
| Search Bar | With magnifying glass icon, cancel button | Full-width, 36px height |
| Toggle Switch | iOS native style | Settings preferences |
| Checkbox | Square with checkmark fill | Terms agreement |

### Display Components
| Component | Variants | Notes |
|-----------|----------|-------|
| Price Display | Large mono font, color-coded (green/red) | 28px for primary, 15px for secondary |
| Change Badge | Pill shape, +/- prefix, % suffix | Green (rise), Red (fall) |
| Asset Row | Icon + name + balance + value + change | 56-64px height, full-width |
| Card | White bg, 12px radius, 16px padding | Used for products, features |
| Status Badge | Small pill, colored background | "New" (lime), "Bonus" (lime), "Verified" (outline), "Online" (green dot) |
| Empty State | Centered illustration + heading + description | When no data available |
| QR Code Display | Centered, 160px, with copy button below | Deposit addresses |
| Countdown Timer | HH:MM:SS format, teal colored | Subscription windows |
| Progress Bar | Filled bar with percentage | Fee tier progress, loading |
| Sparkline | Inline mini chart in list rows | Price trend indicator |

### Action Components
| Component | Variants | Notes |
|-----------|----------|-------|
| Primary Button | Black bg, white text, full-width, 52px, pill shape | "Next", "Confirm", "Buy" |
| Success Button | Green bg | "Buy" actions |
| Danger Button | Red bg | "Sell" actions |
| Disabled Button | Gray bg (#E5E5EA) | Form incomplete |
| Icon Button | 44px circle, outlined style | Quick actions (Send, Receive, Scan) |
| Link Text | Teal/blue colored, no underline | "Max", "Learn more", "Sign up" |
| FAB/Shortcut Grid | 4-per-row icon circles with labels | Home menu feature access |

### Feedback Components
| Component | Variants | Notes |
|-----------|----------|-------|
| Confirmation Modal | Centered overlay, X close, detail rows, Confirm button | Order confirmation |
| Toast | Top of screen, auto-dismiss | Success/error messages |
| Loading State | Centered icon + "Loading..." text | Wallet loading, data fetch |
| Skeleton | Gray shimmer blocks | Content loading placeholder |

---

## 5. Interaction Patterns Summary

### Navigation
- **Tab switching**: Instant content swap, no animation
- **Back navigation**: Left arrow, swipe-from-left-edge
- **Sheet presentation**: Slides up from bottom, draggable to dismiss
- **Modal presentation**: Fade-in overlay with centered card
- **Deep linking**: From notification → specific order/asset

### Data Interaction
- **Pull to refresh**: Standard iOS pull-down
- **Sort**: Tap column header to cycle asc/desc
- **Filter**: Horizontal pill buttons, bottom sheet for complex filters
- **Search**: Full-screen overlay, debounced live results
- **Infinite scroll**: List pagination with loading indicator

### Trading-Specific
- **Chart interaction**: Pinch zoom, pan, crosshair on touch-and-hold, time period switching
- **Order book tap**: Tap price level → auto-fill order form price
- **Quick percentage**: 25%/50%/75%/100% buttons for amount selection
- **Swap direction**: Circular arrow button to swap From/To assets
- **Confirmation flow**: Review → Modal → Confirm → Success toast

### Gestures
- **Swipe left on notification**: Delete action
- **Long press on asset**: Quick action menu
- **Drag to reorder**: Shortcuts customization
- **Pinch to zoom**: Chart interaction

---

## 6. OKX Design Strengths

1. **Progressive disclosure**: One input per screen in onboarding — reduces cognitive load
2. **Consistent component library**: Same card, button, input patterns everywhere
3. **Dual-mode (Exchange/Wallet)**: Clean separation of CEX and Web3 products
4. **Customizable shortcuts**: Users personalize their home menu
5. **Structured product education**: "Learn more" and "What are Structured Products?" inline
6. **P2P trust indicators**: Completion rate, avg release time build trust
7. **Empty states**: Always show illustration + helpful text, never blank
8. **Comprehensive notification settings**: Per-category, per-channel granularity

## 7. OKX Design Weaknesses

1. **Information density on Trade screen**: Chart + order book + order form competing for space
2. **No cooling-off mechanism**: Large orders go through with just a confirmation modal
3. **Emotion-blind**: No labeling of market sentiment or content emotion concentration
4. **Dark/light inconsistency**: Most screens light, but trading and loan screens randomly dark
5. **Accessibility concerns**: Some touch targets appear < 44px in dense areas
6. **No risk education at point of trade**: Risk disclosure only in legal docs, not in trading flow
7. **No multi-market support**: Pure crypto — no stocks, forex, commodities
8. **Dust management limited**: Only "hide < 10 USD" option, no convert-dust feature visible
