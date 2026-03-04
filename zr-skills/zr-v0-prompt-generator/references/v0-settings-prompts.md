# v0 Prompt Guide: Settings, Security & Profile Module

> Source: OKX Flows 056-073 | Extracted from full OKX analysis
> Pixel Data: design-spec-08-settings-security.md | Device: 390×844px (iPhone 14)

## OKX Extracted Design Tokens (Settings/Security)
| Token | Value | Usage |
|-------|-------|-------|
| bg-page | #FFFFFF | Page background |
| bg-banner-overlay | rgba(0,0,0,0.3) | Promotional banner |
| text-header-tab | 16px weight 600, #000 | Header tabs |
| text-search | 16px weight 400, #999 | Search placeholder |
| text-menu-label | 13px weight 500, #000 | Menu item labels |
| text-action-label | 11px weight 500 | Action button labels |
| icon-menu | 32×32px | Menu grid icons |
| icon-action | 24×24px | Action buttons |
| avatar | 52px diameter | Profile circle |
| action-btn | 68px wide, 56px tall | Action button containers |
| promo-card | 80px height, 12px radius | Feature promotion |
| tab-nav | 56px height | Tab navigation |
| search-bar | 44px height, rounded | Search input |
| accent-orange | #F7931A | Icon accents |
| safe-area | 44px top, 34px bottom | iOS safe areas |

## Key Screens to Generate

### Screen 1: Settings Hub
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Settings" title center
2. **Profile card** (80px): Avatar (48px circle) + user name + masked email + "Verified ✓" badge
3. **Settings groups** (scrollable sections):

```
Group 1: Account
├── Identity Verification → KYC status page
├── Trading Fee Tier → Fee tier display
├── Connected Accounts → Social login management
└── Switch Account → Account list

Group 2: Preferences
├── Language → Picker (bottom sheet)
├── Default Currency → HKD/USD/BTC selector
├── Appearance → Light/Dark/System toggle
└── Haptic Feedback → Toggle switch

Group 3: Security
├── Change Password → Form
├── Two-Factor Authentication → 2FA setup
├── Anti-Phishing Code → Setup/edit
├── Device Management → Device list
└── Biometric Login → Toggle switch

Group 4: Notifications
├── Push Notifications → Granular toggles
├── Email Notifications → Toggle
└── SMS Notifications → Toggle

Group 5: About
├── Help Center → FAQ + chat support
├── Terms of Service → Legal text
├── Privacy Policy → Legal text
├── Risk Disclosure → Legal text (ZR-specific)
└── App Version → "v1.0.0 (Build 123)"
```

**Each row**: Icon (20px) | Label (15px) | Chevron right (>) or Toggle switch | 56px height

**OKX Pattern**: Settings uses grouped sections with headers, toggle switches for preferences, chevron indicators for drill-down pages.

### Screen 2: Security Center
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Security" title
2. **Security score card** (100px): Circular progress indicator (green/amber/red based on enabled features), "Security Level: High/Medium/Low"
3. **Feature shortcuts** (80px): 4 icon buttons — Password / 2FA / Anti-Phishing / Devices
4. **Security settings list**:
   - Each row: Feature name | Status (Enabled ✓ green / Not set ⚠ amber) | Chevron
   - Rows: Password, Email 2FA, Phone 2FA, Authenticator App, Anti-Phishing Code, Login Protection, Withdrawal Whitelist

**OKX Pattern**: Feature shortcuts at top for quick access, toggle-based security settings, device management list. ZR adds security score visualization.

### Screen 3: Notification Settings
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Notifications" title
2. **Master toggle**: "Allow Notifications" toggle at top
3. **Category sections** (grouped toggles):

```
Transactions
├── Deposit confirmed → Toggle
├── Withdrawal processed → Toggle
└── Transfer completed → Toggle

Trading
├── Order filled → Toggle
├── Order partially filled → Toggle
├── Stop-loss triggered → Toggle
└── Margin call → Toggle

Market Alerts
├── Price alerts → Toggle
├── Significant moves (>5%) → Toggle
└── Market hours (for stocks/forex) → Toggle (ZR-unique)

System
├── Security alerts → Toggle (always on, non-dismissible)
├── Maintenance notices → Toggle
└── Promotional → Toggle
```

**OKX Pattern**: Per-category granular toggles with push/email/SMS channel selection. ZR adds market hours alerts for non-24/7 asset classes.

### Screen 4: Help Center
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Help" title
2. **Search bar** (36px): Magnifying glass + "Search for help..." placeholder
3. **FAQ categories**: Card grid (2 columns) — Getting Started / Trading / Assets / Security / Account
4. **Popular questions**: List with chevrons
5. **Contact support**: Chat bubble icon + "Chat with us" button (brand blue outline)

**OKX Pattern**: Search bar, FAQ category cards, popular questions, chat support entry point. ZR adds regulatory FAQ section for SFC-specific queries.

## Mock Data

```javascript
const settingsMock = {
  user: {
    name: "Yu Bo",
    email: "ma***ai@zr.hk",
    verified: true,
    kycLevel: "Advanced",
    feeTier: "VIP 1",
  },
  security: {
    score: 85,
    level: "High",
    features: [
      { name: "Password", enabled: true },
      { name: "Email 2FA", enabled: true },
      { name: "Phone 2FA", enabled: true },
      { name: "Authenticator", enabled: false },
      { name: "Anti-Phishing", enabled: false },
      { name: "Biometric", enabled: true },
    ],
  },
  preferences: {
    language: "繁體中文",
    currency: "HKD",
    appearance: "system",
    hapticFeedback: true,
  },
};
```

## ZR Differentiation
- Security score visualization (not in OKX)
- Market hours notification toggle for stocks/forex
- SFC Risk Disclosure in legal section
- Regulatory FAQ section in Help Center
- Exchange-specific settings (per-exchange API status, trading limits)
