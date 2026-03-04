# Design Spec: Onboarding / Registration Module

> **Source**: OKX iOS App
> **Analyzed**: 2026-03-04
> **Flows Covered**: 001_Onboarding, 002_Verifying_account
> **Screenshots Analyzed**: 13 (001-013)

---

## 2. Screen-by-Screen Analysis

### Screen 001-009: Onboarding Splash & Registration

**Purpose**: First-time user experience - account creation and initial setup

**Layout Structure (OKX)**:
- **Screen 001**: App launch splash with OKX logo (black background, centered logo)
- **Screen 002-004**: Welcome carousel / feature highlights
  - Large illustration (center, ~50% viewport)
  - Headline text (bold, 24px)
  - Description text (secondary, 15px)
  - Page dots indicator
  - "Get started" CTA button (bottom, full width, black)
- **Screen 005-009**: Registration form
  - Step indicator at top
  - Email/Phone toggle
  - Input field with country code selector
  - "Continue" button
  - Terms & conditions checkbox
  - "Already have an account? Log in" link

**Component Inventory**:

| Component | Type | Position | States | Notes |
|-----------|------|----------|--------|-------|
| Logo Splash | Image | Center | Loading | 1-2 second display |
| Feature Carousel | PageView | Center | 3 slides with dots | Swipeable |
| Step Indicator | Progress Bar | Top | Step 1/2/3/4 | Linear progress |
| Email/Phone Toggle | Segmented | Form top | Email / Phone | Switches input type |
| Country Selector | Dropdown | Phone input | Closed / Open (modal list) | Flag + country code |
| Input Field | Text Input | Form | Empty / Focused / Valid / Error | Standard validation |
| CTA Button | Primary Button | Bottom | Default / Loading / Disabled | Full width |
| Terms Checkbox | Checkbox + Link | Below CTA | Unchecked / Checked | Links to T&C, Privacy |
| Login Link | Text Link | Bottom | Default / Pressed | "Already have account?" |

### Screen 010-013: Account Verification (KYC)

**Purpose**: Identity verification required by regulations

**Layout Structure (OKX)**:
- **Step 1**: Country/Region selection
  - Search bar at top
  - Alphabetical list of countries
  - Selected country -> Next
- **Step 2**: Personal information form
  - Full name (legal name)
  - Date of birth
  - ID type selector (Passport/ID card/Driver's license)
  - ID number
- **Step 3**: Document upload
  - Camera interface for ID photo (front + back)
  - Document guidelines illustration
  - "Take photo" button
- **Step 4**: Selfie/Liveness check
  - Face circle guide
  - Instructions: "Look at camera", "Turn head slowly"
  - Real-time feedback

---

## 5. ZR Adaptation

### Direct Adoption
- Multi-step form with progress indicator
- Email/Phone registration toggle
- Country/region selector with search
- Clean, focused single-input-per-step approach

### Modifications for ZR
- **Step 1**: Phone/Email registration (same as OKX)
- **Step 2**: KYC information (adapted for HK regulations)
  - HKID card number (primary ID for HK residents)
  - Passport for non-residents
  - Proof of address (utility bill, bank statement)
- **Step 3**: Exchange binding (ZR UNIQUE)
  - Select preferred exchange: HashKey / Bullish / OSL / VDX
  - Brief explanation of each exchange (fees, available pairs, features)
  - This is THE key differentiation from all competitors
- **Step 4**: Risk assessment questionnaire (SFC requirement)
  - Trading experience questions
  - Risk tolerance assessment
  - Virtual asset knowledge quiz
  - Result: suitable / unsuitable determination
- **Step 5**: Confirmation & Welcome
  - Summary of setup
  - Quick tutorial offer
  - First deposit CTA

### SFC Compliance Requirements
- **Suitability assessment**: Mandatory before trading virtual assets
- **Risk disclosure**: Must present and get acknowledgment
- **Professional investor check**: Different requirements for PI vs retail
- **Cooling-off period**: New accounts may have trading restrictions for first 7 days

---

## 7. v0 Generation Hints

### Onboarding Layout (Multi-step)
```
Step 1: Registration
┌──────────────────────────────────────┐
│ Status Bar                           │
├──────────────────────────────────────┤
│ ZR Securities Logo                   │
│                                      │
│ Create Your Account                  │
│ Start trading across multiple        │
│ markets and exchanges                │
├──────────────────────────────────────┤
│ [Email] [Phone]                      │ Toggle
├──────────────────────────────────────┤
│ Email Address                        │
│ [  your@email.com              ]     │
├──────────────────────────────────────┤
│ Password                             │
│ [  ••••••••              ] [👁]      │
│ 8+ chars, 1 uppercase, 1 number     │
├──────────────────────────────────────┤
│ Verification Code                    │
│ [  123456  ]    [Send Code 60s]      │
├──────────────────────────────────────┤
│ ☐ I agree to Terms of Service        │
│   and Privacy Policy                 │
├──────────────────────────────────────┤
│ [        Continue        ]           │
├──────────────────────────────────────┤
│ Already have an account? Log in      │
└──────────────────────────────────────┘

Step 3: Exchange Binding (ZR UNIQUE)
┌──────────────────────────────────────┐
│ Status Bar                           │
├──────────────────────────────────────┤
│ Step 3 of 4    ████████░░           │
├──────────────────────────────────────┤
│ Choose Your Exchange                 │
│ Select which licensed exchange       │
│ will execute your trades             │
├──────────────────────────────────────┤
│ ┌────────────────────────────────┐  │
│ │ ● HashKey Exchange             │  │
│ │   SFC Licensed | 150+ pairs    │  │
│ │   Fee: 0.1% maker / 0.15% taker│ │
│ │   ★ Most popular               │  │
│ └────────────────────────────────┘  │
│ ┌────────────────────────────────┐  │
│ │ ○ Bullish Exchange             │  │
│ │   SFC Licensed | 80+ pairs     │  │
│ │   Fee: 0.08% maker / 0.12%    │  │
│ └────────────────────────────────┘  │
│ ┌────────────────────────────────┐  │
│ │ ○ OSL Exchange                 │  │
│ │   SFC Licensed | 60+ pairs     │  │
│ └────────────────────────────────┘  │
│ ┌────────────────────────────────┐  │
│ │ ○ VDX Exchange                 │  │
│ │   SFC Licensed | 40+ pairs     │  │
│ └────────────────────────────────┘  │
├──────────────────────────────────────┤
│ [        Continue        ]           │
└──────────────────────────────────────┘
```

---

*Generated by ZR Competitive Design Analysis Skill v1.0*
