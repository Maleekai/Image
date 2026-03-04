# v0 Prompt Guide: Onboarding & Login Module

> Source: OKX Flows 001-002, 060, 074 | Extracted from full OKX analysis
> Pixel Data: design-spec-04-onboarding-login.md | Device: 1125×2436px (3x) / 375×812pt

## OKX Extracted Design Tokens (Onboarding)
| Token | Value | Usage |
|-------|-------|-------|
| bg-splash | #000000 | Splash/loading screens |
| bg-verification | #FFFFFF | Code entry, forms |
| text-title | #000000, 34px bold SF Pro Display | Screen headings |
| text-subtitle | #333333, 16px regular | Instruction text |
| input-border-active | #1A73E8, 2px | Focused code input box |
| input-border-default | #E0E0E0, 1px | Empty code input box |
| btn-primary-disabled | #E8E8E8 bg, #999999 text | Inactive CTA |
| btn-primary-active | #000000 bg, #FFFFFF text | Active CTA |
| btn-radius | 28px | Primary button pill shape |
| btn-height | 56px | Standard CTA height |
| keypad-btn | 170×80px, radius 12px, 8px gap | Numeric keypad buttons |
| keypad-number | 28px bold #000000 | Keypad digit font |
| code-box | 56×56px, radius 8px, gap 8px | 6-digit OTP input boxes |
| cursor | 2×30px #1A73E8, animated | Active code input cursor |
| resend-timer | 14px regular #B0B0B0 | "Resend (57s)" disabled state |

## Key Screens to Generate

### Screen 1: Welcome / Splash
**Layout zones**:
1. **Status bar** (59px): Dynamic Island safe area
2. **Hero area** (60% viewport): ZR Securities logo (centered), brand tagline "Multi-Market Trading, One App" in Chinese + English
3. **Action area** (bottom 30%):
   - "Sign Up" button: Brand blue #1A73E8, full-width, 52px height, pill shape (26px radius)
   - "Log In" button: Outlined style, full-width, 52px height
   - Social login row: Google + Apple circular icon buttons (44px each)
   - "Hong Kong SFC Licensed" badge (13px caption, gray)

**OKX Reference**: OKX uses animated hand-drawn border around logo, black "Next" CTA. ZR uses brand blue CTA, adds SFC badge.

### Screen 2: Sign Up (Phone/Email)
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Sign Up" title center
2. **Tab toggle** (36px): `[Phone] [Email]` segmented control
3. **Form area**:
   - Country code selector (dropdown, "+852" default for HK): Tap opens bottom sheet with searchable country list
   - Phone/email input: Full-width, 48px height, 8px radius, clear button right
   - **ZR-unique**: "Select Your Exchange" step — radio button list:
     ```
     ┌────────────────────────────────────┐
     │ Choose your trading exchange:      │
     │ ○ HashKey    — HK licensed         │
     │ ○ Bullish    — Global access       │
     │ ○ OSL        — Institutional grade │
     │ ○ VDX        — Coming soon (gray)  │
     └────────────────────────────────────┘
     ```
4. **Terms checkbox**: "I agree to the [Terms of Service], [Risk Disclosure], and [Privacy Policy]" — links in teal #17A2B8
5. **Next button**: Brand blue, full-width, 52px, disabled when form incomplete (gray #E5E5EA)

### Screen 3: OTP Verification
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Verify" title
2. **Instruction text**: "Enter the 6-digit code sent to +852 **** 1234" (15px body)
3. **OTP input** (Y:380px): 6 separate input boxes (56×56px each, 8px radius, 8px gap), auto-advance on digit entry. Active box: 2px border #1A73E8 with animated blue cursor (2×30px). Empty box: 1px border #E0E0E0
4. **Resend timer**: "Resend code in 58s" (13px, gray), becomes tappable teal link when timer reaches 0
5. **Help link**: "Didn't receive the code?" (13px, teal)

**OKX Pattern**: Identical 6-box OTP with auto-advance. This is industry standard — adopt directly.

### Screen 4: Identity Verification (KYC)
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Identity Verification" title
2. **Progress indicator**: 3-step horizontal stepper (Basic Info → ID Upload → Selfie)
3. **Form fields** (per step):
   - Step 1: Full name, Date of birth, Nationality, ID type dropdown
   - Step 2: ID front/back photo upload (camera + gallery options), dotted-border upload zones
   - Step 3: Selfie capture with face outline overlay
4. **SFC Disclosure banner** (top): Yellow/amber background, "As required by Hong Kong SFC regulations, identity verification is mandatory" (13px)
5. **Submit button**: Brand blue, full-width, 52px

### Screen 5: Login
**Layout zones**:
1. **Nav bar** (44px): Close (X) button right
2. **Logo area** (80px): ZR Securities logo, small
3. **Tab toggle** (36px): `[Phone] [Email]` — OKX also has Sub-account tab
4. **Form**: Country code + phone/email input (same as sign up)
5. **Next button**: Brand blue, full-width, 52px
6. **Social login**: Google + Apple circular buttons (44px)
7. **Footer**: "Don't have an account? [Sign Up]" (13px, teal link)

**OKX Pattern**: Login uses same tab toggle (Phone/Email/Sub-account), country code dropdown, social login (Google/Apple/Telegram). ZR drops Telegram, keeps Google + Apple.

## Mock Data

```javascript
const onboardingMock = {
  countries: [
    { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
    { code: "+86", name: "China", flag: "🇨🇳" },
    { code: "+1", name: "United States", flag: "🇺🇸" },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
    { code: "+81", name: "Japan", flag: "🇯🇵" },
  ],
  exchanges: [
    { id: "hashkey", name: "HashKey", status: "active", badge: "HK Licensed" },
    { id: "bullish", name: "Bullish", status: "active", badge: "Global" },
    { id: "osl", name: "OSL", status: "active", badge: "Institutional" },
    { id: "vdx", name: "VDX", status: "coming_soon", badge: "Coming Soon" },
  ],
  kycSteps: [
    { step: 1, label: "Basic Info", status: "current" },
    { step: 2, label: "ID Upload", status: "pending" },
    { step: 3, label: "Selfie", status: "pending" },
  ],
};
```

## OKX Patterns Adopted
- Single-focus forms (one input per screen) — progressive disclosure
- 6-box OTP with auto-advance and resend timer
- Social login as circular icon buttons
- Searchable country/region bottom sheet
- Black/brand CTA disabled when form incomplete

## ZR Differentiation
- Exchange selection step during sign-up (multi-exchange architecture)
- SFC regulatory disclosure banner in KYC flow
- SFC Licensed badge on welcome screen
- No Telegram social login (compliance)
- Mandatory KYC before any trading (SFC requirement)
