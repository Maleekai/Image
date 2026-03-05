# Settings & Profile — ZR Securities Trading App

## Context
The Settings & Profile page is the "More" tab (fifth tab in bottom nav). It combines user profile management, security settings, notification preferences, compliance status, and account utilities. Inspired by OKX's Menu Hub (design-spec-08) but rebuilt for ZR's compliance-first, multi-exchange model. Integrates IO-004 (Security Score), IO-006 (Tax Export), and Transparent Trust Protocol principles from the strategy framework.

## Design System

**Colors:**
- Primary: #1A73E8 (brand blue)
- Success: #34A853 / Danger: #EA4335 / Warning: #FBBC04
- Security green: #1EC989
- Neutral: #5F6368 / Background: #FFFFFF / Surface: #F8F9FA

**Typography:**
- Inter: headings, labels, body
- JetBrains Mono: numbers, IDs

**Spacing:** 8px grid, 16px container padding

## Page Layout

```
[Header - 56px]
  └─ "More" title | Help icon (?)

[Profile Card - 100px]
  └─ Avatar | Name + Email | UID | Edit button

[Security Score Banner - 56px] (IO-004)
  └─ Score ring (48px) | "85/100" | "Improve →"

[Menu Sections - scrollable]
  ├─ Account & Security
  ├─ Trading Preferences
  ├─ Exchange Management
  ├─ Compliance & Reports (IO-006)
  ├─ Notifications (DA-011)
  ├─ General Settings
  └─ About & Support

[Bottom Tab Bar - 83px]
```

## Components

### Profile Card (100px)
- **Background:** White card, 12px radius
- **Layout:**
  - Left: Avatar (64px circle, camera overlay for edit)
  - Center:
    - Full name (Inter 16px bold)
    - Email/phone (Inter 12px, #757575, masked: m***@example.com)
    - UID: "UID: ZR-2850173" (JetBrains Mono 10px, #9AA0A6) + copy icon
  - Right: "Edit" pill button (28px, border, #1A73E8)
- **Tap Edit:** Navigate to Profile Edit page (name, avatar, phone, email)
- **Verification badge:** ✅ "Verified" (green #1EC989 pill) next to name if KYC complete

### Security Score Banner (IO-004, 56px)
- **Background:** Gradient #F0FFF4 → #FFFFFF, 8px radius
- **Layout:**
  - Left: Mini ring progress (48px diameter, #1EC989 fill, "85" center)
  - Center: "Security Score: 85/100" (Inter 13px bold) + "2 items to improve" (Inter 11px, #FBBC04)
  - Right: "Improve →" (Inter 12px, #1A73E8)
- **Tap:** Navigate to Security Detail (full IO-004 view in AI Companion → Portfolio tab)

### Menu Sections

Each section has a header (Inter 12px bold, #9AA0A6, uppercase, 8px bottom margin) and rows:

#### Section 1: Account & Security
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | 🔒 | Password | "Change →" | Password change flow |
| 2 | 📱 | Two-Factor Authentication | Toggle (green if on) | 2FA setup/disable |
| 3 | 🔑 | Biometric Login | Toggle | Face ID / Touch ID |
| 4 | 📧 | Email Verification | "✅ Verified" green | Verify/change email |
| 5 | 📱 | Phone Verification | "✅ Verified" green | Verify/change phone |
| 6 | 🛡️ | Anti-Phishing Code | "Set up" amber | Set/change code |
| 7 | 📋 | Withdrawal Whitelist | Toggle | Enable address whitelist |
| 8 | 🔐 | API Key Management | "→" | API key CRUD |
| 9 | 📱 | Login Activity | "→" | Device list + sessions |

#### Section 2: Trading Preferences
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | 📊 | Default Order Type | "Limit" dropdown | Select default |
| 2 | 💰 | Display Currency | "HKD" dropdown | HKD/USD/BTC/CNY |
| 3 | 📈 | Chart Style | "Candlestick" | Candlestick/Line/Area |
| 4 | 🔴🟢 | Price Color Convention | "Green Up" | Green↑Red↓ or Red↑Green↓ |
| 5 | ⚡ | Quick Trade Confirmation | Toggle | Skip confirmation for small orders |
| 6 | 🧊 | Cooling-off Period | "On (28s)" | Enable/disable, adjust threshold |

#### Section 3: Exchange Management
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | 🏦 | Connected Exchanges | "3 Active" | Exchange list with status |
| 2 | 💎 | Fee Tier | "VIP 1" | Fee schedule per exchange (DD-010) |
| 3 | 🔄 | Default Exchange | "HashKey" | Set preferred execution venue |
| 4 | 📊 | Exchange Fees Comparison | "→" | Side-by-side fee table (DD-010) |

#### Exchange Fees Comparison Page (DD-010)
- **Table layout:**
  - Columns: Exchange | Maker Fee | Taker Fee | Withdrawal Fee
  - Rows: HashKey, Bullish, OSL, VDX
  - Highlight: Lowest fee per column in green
  - User's current tier highlighted with blue border
- **Fee tiers:** Expandable section showing VIP tier requirements

#### Section 4: Compliance & Reports (IO-006)
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | 🪪 | KYC Status | "✅ Verified" | View/update documents |
| 2 | 📋 | SFC Compliance | "Active" green | Compliance dashboard |
| 3 | 📊 | Transaction Report | "Export →" | Date range → CSV/PDF export |
| 4 | 🧾 | Tax Summary | "2025-26 →" | Annual tax report (IO-006) |
| 5 | 📑 | Monthly Holdings Report | "Feb 2026 →" | Monthly snapshot PDF |
| 6 | 🔍 | Audit Log | "→" | Detailed activity log |

#### Tax Summary Page (IO-006)
- **Header:** "Tax Report — FY 2025-26"
- **Summary card:**
  - Total realized gains: HK$XX,XXX
  - Total fees paid: HK$X,XXX
  - Number of transactions: XXX
- **Export buttons:**
  - [Export CSV] — for tax software import
  - [Export PDF] — formatted report
- **Disclaimer:** "This report is for reference only. Consult a tax professional for filing."

#### Section 5: Notifications (DA-011)
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | 🔔 | Push Notifications | Toggle (master) | Enable/disable all |
| 2 | 📈 | Price Alerts | Toggle | Customizable alerts |
| 3 | 💰 | Order Updates | Toggle | Fill/cancel notifications |
| 4 | 🏦 | Deposit/Withdraw | Toggle | Deposit confirmed, etc. |
| 5 | 📢 | Announcements | Toggle | System announcements |
| 6 | 🛡️ | Security Alerts | "Always On" (locked) | Cannot be disabled |
| 7 | 📊 | Market Sentiment | Toggle | Fear & Greed changes |

#### Section 6: General Settings
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | 🌓 | Appearance | "Light" | Light/Dark/System |
| 2 | 🌐 | Language | "English" | EN/繁中/简中/日本語 |
| 3 | 💱 | Region | "Hong Kong" | Display, affects compliance |
| 4 | 🔒 | Privacy | "→" | Data usage, analytics opt-out |

#### Section 7: About & Support
| Row | Left Icon | Label | Right | Tap Action |
|-----|-----------|-------|-------|------------|
| 1 | ❓ | Help Center | "→" | FAQ + support articles |
| 2 | 💬 | Contact Support | "→" | Chat/email support |
| 3 | 📜 | Terms of Service | "→" | Legal documents |
| 4 | 🔐 | Privacy Policy | "→" | Privacy documents |
| 5 | 📋 | Regulatory Disclosures | "→" | SFC disclosures |
| 6 | ℹ️ | About ZR Securities | "v1.0.0" | Version, licenses |
| 7 | 🚪 | Log Out | Red text | Confirmation modal |

### Menu Row Component (56px)
- **Left:** Icon (24px) + Label (Inter 14px)
- **Right:** Value text (Inter 13px, #757575) or Toggle or Chevron (>)
- **Divider:** 1px #F0F0F0, inset 56px from left
- **Active state:** Highlight #F5F5F5 on press

### Transparent Trust Protocol Integration
- **Privacy section** includes: "Your data belongs to you. Export or delete anytime."
- **Audit Log** shows every action with timestamps (login, trade, withdrawal, settings change)
- **Data Export:** One-tap export of all user data (GDPR-style)
- **Analytics Opt-out:** Toggle to disable behavioral tracking

## Mock Data

```typescript
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  uid: string;
  kycStatus: 'verified' | 'pending' | 'expired';
  securityScore: number;
  securityItems: Array<{
    label: string;
    enabled: boolean;
    required: boolean;
  }>;
  connectedExchanges: Array<{
    name: string;
    status: 'active' | 'maintenance';
    feeTier: string;
  }>;
  preferences: {
    currency: string;
    language: string;
    appearance: 'light' | 'dark' | 'system';
    priceColorConvention: 'green-up' | 'red-up';
    defaultOrderType: string;
    coolingOffEnabled: boolean;
  };
  notifications: Record<string, boolean>;
}
```

## Interaction States

### Loading
- Skeleton rows with shimmer

### KYC Expired
- Profile card shows amber warning: "ID document expired — update required"
- KYC row shows "⚠️ Update Required" in amber

### Error
- "Unable to load settings" + retry

## Implementation Notes
- Profile edit: Inline editing with save/cancel
- Toggle switches: Spring animation (damping 0.8, stiffness 150)
- Security score: Calculate client-side from enabled features
- Export: Generate CSV/PDF server-side, download via browser
- Dark mode: Use CSS variables or Tailwind dark: prefix
- Log Out: Clear session, navigate to Welcome screen

## Competitive Reference
- **OKX Menu Hub:** Grid of icons + list of settings — functional but dense
- **Binance Settings:** Extensive (250+ settings items) — overwhelming
- **ZR Differentiator:**
  1. Security Score Banner (IO-004) — gamified security improvement
  2. Tax Export (IO-006) — HK tax compliance built-in
  3. Exchange Fees Comparison (DD-010) — unique to multi-exchange model
  4. Transparent Trust Protocol integration — privacy and data controls
  5. Cooling-off preference toggle — Antifragile principle user control
  6. Always-on security alerts — cannot be disabled (user safety first)

## v0 Screenshot References
Upload these screenshots alongside this prompt for visual reference:
- OKX: `OKX_iOS/056_Menu_Hub/` — menu layout reference
- OKX: `OKX_iOS/058_Settings/` — settings list reference
- OKX: `OKX_iOS/068_User_center_(Security_tab)/` — security tab reference
