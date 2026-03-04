# Onboarding / Registration Page -- ZR Securities Trading App

> This prompt generates the multi-step onboarding flow with registration, KYC, exchange binding, and risk assessment.

## Context
The onboarding flow is ZR's first impression. It must balance SFC compliance requirements with a smooth user experience. Unlike OKX (2-step: register + KYC), ZR has a 4-step flow that includes exchange binding (ZR unique) and risk assessment (SFC requirement).

**OKX Competitive Analysis Applied**: Adopted multi-step progress indicator (DA-013), email/phone registration pattern. Enhanced with 4 steps instead of 2 (DD-012): Register -> KYC -> Exchange Binding -> Risk Assessment. Added exchange comparison feature (IO-006).

## Page Layout -- Full-Screen Flow (no tab bar)

### Global: Progress Indicator (4px bar + step labels)
- Top of screen (below status bar): 4-segment progress bar
- Segments: `[1. Register] [2. Verify ID] [3. Exchanges] [4. Risk]`
- Active: brand-blue fill
- Completed: brand-blue fill + checkmark
- Upcoming: bg-tertiary

---

### Step 1: Register (Create Account)

**Layout**:
- Logo: ZR Securities logo centered (48px, mt-32)
- Heading: "Create Your Account" (H1 28px, center)
- Subheading: "Hong Kong SFC Licensed Broker" (15px, text-secondary, center)

**Form** (mx-16, mt-32):
- Email input: bg-tertiary, rounded-lg, 56px height, label "Email"
- Phone input: Country code dropdown (+852) + phone number input
- Password input: with show/hide toggle + strength indicator below
  - Strength bar: 4 segments (Weak=red, Fair=warning, Good=brand-blue, Strong=success)
  - Requirements text (13px): 8+ chars, 1 uppercase, 1 number, 1 special
- Confirm password input

**Agreement checkbox**:
- "I agree to the [Terms of Service] and [Privacy Policy]" (13px)
- Links in brand-blue

**CTA Button**: "Create Account" bg-brand-blue, full-width, 52px, rounded-xl
**Below**: "Already have an account? [Sign In]" (13px, center)

---

### Step 2: KYC (Verify Identity)

**Layout**:
- Heading: "Verify Your Identity" (H1 28px)
- Subheading: "Required by Hong Kong SFC regulations" (15px, text-secondary)
- Icon: Shield checkmark illustration (64px, centered)

**ID Type Selector** (3 large cards, vertical):
```
┌────────────────────────────────────┐
│ [ID icon]  Hong Kong ID Card       │
│            HKID Number             │
│            Recommended             │
├────────────────────────────────────┤
│ [Passport]  Passport               │
│             Any nationality         │
├────────────────────────────────────┤
│ [DL icon]   Driver's License       │
│             Hong Kong only          │
└────────────────────────────────────┘
```
- Each card: bg-secondary, rounded-xl, p-16, mb-8
- Selected: border-brand-blue (2px)

**After selection -- Document Upload**:
- Front photo upload area: Dashed border, 200px height, camera icon + "Upload Front"
- Back photo upload area: Same pattern
- Selfie upload: Camera icon + "Take a Selfie"
- Each upload: Tap to open camera/gallery (simulated)
- Progress indicator per upload
- Photo preview with retake option

**Form fields** (auto-filled from document where possible):
- Full name (as per ID)
- Date of birth
- ID number
- Residential address

**CTA**: "Submit Verification" bg-brand-blue, full-width

---

### Step 3: Exchange Binding (ZR UNIQUE -- IO-006)

**Layout**:
- Heading: "Choose Your Exchanges" (H1 28px)
- Subheading: "Connect to licensed exchanges to start trading" (15px, text-secondary)

**Exchange Comparison Cards** (vertical list):
```
┌────────────────────────────────────────┐
│ [HashKey logo]  HashKey Exchange       │
│ ──────────────────────────────────────│
│ Trading Fee: 0.1%  |  Pairs: 200+    │
│ Min Deposit: $10   |  HK Licensed ✓  │
│ ──────────────────────────────────────│
│ Features: Spot, Margin                │
│                                        │
│ [Connect HashKey]  ← brand-blue btn   │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│ [Bullish logo]  Bullish Exchange       │
│ ──────────────────────────────────────│
│ Trading Fee: 0.08% |  Pairs: 150+    │
│ Min Deposit: $50   |  HK Licensed ✓  │
│ ──────────────────────────────────────│
│ Features: Spot                        │
│                                        │
│ [Connect Bullish]                      │
└────────────────────────────────────────┘
```
- Each card: bg-secondary, rounded-xl, mx-16, mb-12, p-20
- Exchange badge color on left border (4px)
- Connected state: Green checkmark + "Connected" replacing button
- Must connect at least 1 exchange to proceed

**CTA**: "Continue" (enabled when >= 1 exchange connected)

---

### Step 4: Risk Assessment (SFC Requirement)

**Layout**:
- Heading: "Investment Risk Assessment" (H1 28px)
- Subheading: "Required to determine suitable products for you" (15px, text-secondary)

**Questionnaire** (one question at a time, card-based):
```
Question 1 of 5

What is your investment experience with
virtual assets?

○ No experience
○ Less than 1 year
○ 1-3 years
○ More than 3 years
```
- Each option: bg-secondary, rounded-xl, p-16, mb-8
- Selected: border-brand-blue, bg-brand-blue/10
- Navigation: [Previous] [Next] at bottom

**Questions** (5 total):
1. Investment experience with virtual assets
2. Understanding of virtual asset risks
3. Current financial situation / income range
4. Investment objective (Growth / Income / Speculation)
5. Maximum acceptable loss tolerance (10% / 25% / 50% / 100%)

**Risk Profile Result**:
```
┌────────────────────────────────────────┐
│                                        │
│    Your Risk Profile                   │
│    ══════════════════                  │
│                                        │
│    [████████░░]  Moderate              │
│                                        │
│    You are classified as a             │
│    "Moderate Risk" investor.           │
│                                        │
│    Suitable Products:                  │
│    ✓ Spot Trading                      │
│    ✓ Major Cryptocurrencies            │
│    ✗ Margin Trading (requires upgrade) │
│    ✗ Derivatives                       │
│                                        │
│    [Start Trading]  ← bg-brand-blue    │
│                                        │
└────────────────────────────────────────┘
```
- Progress bar showing risk level (1-10 scale)
- Green checks for available products, red X for restricted
- "Start Trading" navigates to /markets

## Mock Data
```javascript
const onboardingData = {
  exchanges: [
    { id: "hashkey", name: "HashKey Exchange", fee: "0.1%", pairs: "200+", minDeposit: "$10", features: ["Spot", "Margin"], licensed: true, color: "#2962FF" },
    { id: "bullish", name: "Bullish Exchange", fee: "0.08%", pairs: "150+", minDeposit: "$50", features: ["Spot"], licensed: true, color: "#00BFA5" },
    { id: "osl", name: "OSL Exchange", fee: "0.12%", pairs: "80+", minDeposit: "$100", features: ["Spot", "OTC"], licensed: true, color: "#FF6D00" },
    { id: "vdx", name: "VDX Exchange", fee: "0.15%", pairs: "50+", minDeposit: "$200", features: ["Spot"], licensed: true, color: "#7C4DFF" },
  ],
  riskQuestions: [
    { q: "What is your investment experience with virtual assets?", options: ["No experience", "Less than 1 year", "1-3 years", "More than 3 years"] },
    { q: "How well do you understand the risks of virtual asset trading?", options: ["Not at all", "Basic understanding", "Good understanding", "Expert level"] },
    { q: "What is your annual income range?", options: ["Below HK$300K", "HK$300K-$800K", "HK$800K-$2M", "Above HK$2M"] },
    { q: "What is your primary investment objective?", options: ["Capital preservation", "Steady income", "Capital growth", "Speculation"] },
    { q: "What is the maximum loss you can tolerate?", options: ["Up to 10%", "Up to 25%", "Up to 50%", "I understand I may lose everything"] },
  ],
};
```

## Interactions
- **Step navigation**: Progress bar + Next/Previous buttons
- **Form validation**: Real-time inline validation (red border + error message)
- **Password strength**: Live update as user types
- **Exchange connect**: Simulated OAuth flow (button -> loading -> connected)
- **Risk questionnaire**: One question per card, swipe or button to advance
- **Final result**: Animated progress bar fill to risk level

## States
- [x] Step 1: Registration form (empty, filled, validated, errors)
- [x] Step 2: KYC document type selection + upload states
- [x] Step 3: Exchange cards (disconnected, connecting, connected)
- [x] Step 4: Questionnaire (question cards) + Risk profile result
- [x] All steps: Progress bar showing current position

---

*Generated by ZR v0 Prompt Generator Skill v1.0 -- Based on OKX flows 001_Onboarding + 002_Verifying + ZR innovations*
