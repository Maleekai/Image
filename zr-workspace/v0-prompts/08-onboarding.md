# Onboarding Flow — ZR Securities Trading App

## Context
The Onboarding flow guides new users through account creation, exchange selection, identity verification, and login. The flow spans 5 screens: Welcome, Sign Up, OTP verification, KYC (Know Your Customer), and Login for returning users. Each screen is designed to minimize friction while ensuring SFC compliance.

## Design System
- **Brand Color**: #1A73E8 (blue)
- **Typographic Scale**:
  - 24px bold (screen titles)
  - 16px regular (body text)
  - 14px gray (helper text)
  - 12px gray (small text/badges)
- **Spacing**: 16px base unit
- **Iconography**: 44px (social buttons), 56px (input boxes for OTP)
- **Border Radius**: 24px (pill buttons), 8px (cards), 4px (inputs)
- **Background**: White (#FFFFFF), optional light gradient overlay on splash screen
- **Primary CTA**: 52px height pill button, brand blue background, 16px white text, 24px border-radius

## Page Layout - SCREEN 1: Welcome

### Background
- Full screen, white or subtle gradient (light blue 0.05 opacity overlay optional)
- Centered content, max-width 480px

### Logo Zone (100px)
- ZR Securities logo (80px × 80px) centered
- Below: Tagline "Multi-Market Trading, One App" (16px gray, centered, 20px below logo)

### Content Zone (120px)
- Title: "Welcome to ZR Securities" (24px bold, centered)
- Subtitle: "Trade crypto, stocks, forex, and commodities in one platform" (14px gray, centered, line-height 1.5)

### Primary CTA Zone (120px)
- Sign Up button (52px height):
  - Background: brand blue (#1A73E8)
  - Text: "Create Account" (16px bold white)
  - Border-radius: 24px
  - Full width with 32px padding left/right
  - Hover: darker blue #1557B0
  - Tap action: navigate to Sign Up screen

### Secondary CTA Zone (56px)
- Log In button (52px height):
  - Background: white
  - Border: 2px #DDD
  - Text: "Log In" (16px gray)
  - Border-radius: 24px
  - Full width with 32px padding left/right
  - Tap action: navigate to Login screen

### Social Login Zone (80px)
- Divider text: "Or continue with" (12px gray, centered with 8px horizontal lines)
- Social button row (2 centered buttons, 8px gap):
  - Google button (44px × 44px circle):
    - Background: white, border 1px #DDD
    - Icon: Google G logo (24px)
    - Tap to initiate Google OAuth
  - Apple button (44px × 44px circle):
    - Background: white, border 1px #DDD
    - Icon: Apple logo (24px black)
    - Tap to initiate Apple OAuth
- Hover state: background #F5F5F5

### SFC Badge Zone (32px)
- Centered at bottom:
  - Icon: shield (16px)
  - Text: "SFC Licensed Broker" (12px gray)
  - Pill background: #F0F0F0, 8px padding, 16px border-radius

### Spacing
- 24px top padding
- 48px bottom padding (footer area)

---

## Page Layout - SCREEN 2: Sign Up

### Header Zone (48px)
- Back button (24px left arrow, tap returns to Welcome)
- "Sign Up" text (18px bold, left-aligned)
- No close button (back button available)

### Input Section - Phone/Email Toggle (64px)
- Toggle pills: [Phone] [Email] (12px text, 8px padding)
- Default: Phone selected (blue background + white text)
- Inactive: #F0F0F0 background, gray text
- Tap to switch input method

### Country Code Selector (56px)
- Only visible if Phone selected
- Left icon: flag emoji or flag SVG (24px)
- Country code display: "+852" (14px bold)
- Tap to open country selector modal:
  - Search input (filter by country name or code)
  - Popular countries at top (Hong Kong, China, US, UK, Singapore)
  - Full list below with flags + country name + code
  - Tall 60vh modal with scroll
  - Tap country to select and close modal
  - Badge "Popular" for top 5

### Phone/Email Input (56px)
- Placeholder: "Phone number" or "Email address" (14px)
- 16px padding, 1px border #DDD
- Focus state: border 2px brand blue
- Number keyboard (mobile) if phone selected
- Email keyboard (mobile) if email selected
- Real-time validation:
  - Phone: 8-15 digits (format variations accepted)
  - Email: standard RFC5322
- Validation icon right side (12px gray ✓ or red ✗)

### Exchange Selection Section (variable height)
- Label: "Select Your Exchange" (14px bold, 16px margin-top)
- Instruction: "Choose the trading platform you want to use" (12px gray)
- 4 radio button options (56px height each, 16px padding, 8px gap):
  - **HashKey**:
    - Icon: HashKey logo (32px)
    - Name: "HashKey" (14px bold)
    - Description: "Full market coverage" (12px gray)
    - Radio: left-aligned
  - **Bullish**:
    - Icon: Bullish logo (32px)
    - Name: "Bullish" (14px bold)
    - Description: "EOS ecosystem trading" (12px gray)
  - **OSL**:
    - Icon: OSL logo (32px)
    - Name: "OSL" (14px bold)
    - Description: "Crypto to fiat on/off ramps" (12px gray)
  - **VDX**:
    - Icon: VDX logo (32px)
    - Name: "VDX" (14px bold)
    - Description: "Derivatives and margin trading" (12px gray)
- Selected state: blue border (2px), blue background tint #F0F7FF
- Only 1 exchange selectable

### Terms & Conditions (48px)
- Checkbox + text (12px gray):
  - "I agree to the Terms of Service and Privacy Policy"
  - Links underlined, tappable (open in modal or new screen)
- Checkbox must be checked before Next button enables
- Required field indicator: red asterisk * before label

### Next Button Zone (56px)
- Button (52px height, 32px padding left/right):
  - Text: "Next" (16px bold)
  - Disabled state: gray background + gray text (opacity 0.5)
  - Enabled state: brand blue background + white text
  - Tap action: validate inputs, show error toast if invalid, navigate to OTP screen

### Bottom Spacing
- 16px padding below

---

## Page Layout - SCREEN 3: OTP Verification

### Header Zone (48px)
- Back button (24px left arrow, tap returns to Sign Up)
- "Verify Account" text (18px bold, left-aligned)

### Content Zone (variable height)
- Title: "Verify Your Phone" or "Verify Your Email" (16px bold, centered)
- Subtitle: "Enter the 6-digit code we sent to +852 9876 5432" or "...to y***@example.com" (12px gray, centered, masked number/email)
- 24px below title

### OTP Input Zone (120px)
- 6 input boxes (56px × 56px each):
  - Background: white
  - Border: 2px #DDD
  - Border-radius: 8px
  - Gap between boxes: 8px
  - Font: 20px bold monospace
  - Text alignment: center
  - Focus state: border 2px brand blue
  - Typing auto-advances to next box
  - Delete/backspace goes to previous box
  - Accept numeric input only
  - Blue cursor indicator in active box (blinking)
  - Filled boxes show digit only (no placeholder after filled)

### Resend Section (64px)
- Text: "Didn't receive the code?" (12px gray, centered)
- Below: Resend controls (12px)
  - If timer > 0: "Resend in 57s" (gray text, centered, countdown updates)
  - If timer = 0: "Resend Code" link (brand blue, tappable)
- Resend button enables after 60 seconds
- User can manually tap earlier (shows error: "Please wait before requesting new code")

### Auto-Submit
- When all 6 digits entered, automatically submit OTP
- Show loading spinner after auto-submit
- Validation happens server-side
- If invalid: show error toast "Invalid code, please try again"
- If valid: auto-advance to next screen (KYC) after 500ms fade

### Error Handling (32px)
- Invalid code message (red text, 12px): "Invalid code. Please try again or request a new one."
- Shows below resend section
- Auto-clears when user starts typing new code

### Bottom Spacing
- 16px padding below

---

## Page Layout - SCREEN 4: KYC (Know Your Customer)

### Header Zone (48px)
- Back button (24px left arrow, tap returns to OTP, shows warning: "You'll lose progress")
- "Identity Verification" text (18px bold, left-aligned)

### Progress Indicator (40px)
- 3 step pills in horizontal line:
  - Step 1: "Basic Info" (checkmark icon + text, green if completed, blue if active, gray if pending)
  - Step 2: "ID Upload" (checkmark/upload icon + text, states as above)
  - Step 3: "Selfie" (camera icon + text, states as above)
- Connecting line between steps (1px, color matches state)
- 16px padding left/right

### SFC Disclosure Banner (56px)
- Background: amber/orange (#FEF3C7)
- Border-left: 4px orange (#F59E0B)
- 16px padding
- Icon: info circle (16px orange)
- Text: "SFC regulations require identity verification. Your personal data is encrypted and secured." (12px #92400E)
- Close button (X, 16px) to dismiss (toggleable)

### Form Content Area (variable height)
- Shows fields for current step:

#### Step 1: Basic Info
- Full Name field (56px):
  - Label: "Full Name" (12px gray, required asterisk)
  - Input: 16px padding, 1px #DDD border, focus blue
  - Placeholder: "As shown in ID document"

- Date of Birth field (56px):
  - Label: "Date of Birth" (12px gray, required asterisk)
  - Input: date picker, format DD/MM/YYYY
  - Placeholder: "01/01/1990"
  - Validation: must be 18+ years old

- Nationality field (56px):
  - Label: "Nationality" (12px gray, required asterisk)
  - Dropdown: country selector (flag + name)
  - Search input for country
  - Default: user's inferred location (optional)

- Residential Address field (56px):
  - Label: "Residential Address" (12px gray, required asterisk)
  - Input: free text, 16px padding
  - Validation: address format check

- Occupation field (56px):
  - Label: "Occupation" (12px gray, required asterisk)
  - Dropdown: predefined list (Employee, Self-employed, Business Owner, Student, Retired, Other)

- PEP Disclosure checkbox (32px):
  - Checkbox + text: "I am not a Politically Exposed Person (PEP)"
  - Red asterisk (required)
  - Info button (?) shows tooltip: "Persons with prominent political roles or close family members"

- Next Step button (52px):
  - Disabled if any required field empty
  - Enabled: brand blue, "Next"
  - Saves data and advances to Step 2 (ID Upload)

#### Step 2: ID Upload
- ID Type selector (56px):
  - Label: "Identification Type" (12px gray, required asterisk)
  - Radio options (40px height each):
    - Passport
    - HKID (Hong Kong ID Card)
    - Driving License
    - Mainland ID Card
  - Icon + name for each

- Document Upload Zone (120px):
  - Background: #F5F5F5, border: 2px dashed #DDD, border-radius 8px
  - Centered content:
    - Icon: document/upload (32px)
    - Text: "Upload ID" (14px gray)
    - Subtext: "PNG, JPG, PDF (max 5MB)" (12px gray)
    - Tap to open file picker or drag-drop
  - After upload shows:
    - Thumbnail (80px × 60px) with filename
    - Replace button (12px underlined link)

- Instructions (32px, gray box):
  - "Make sure all corners are visible and text is legible"
  - Numbered list (12px):
    1. "Full document is visible"
    2. "Lighting is good"
    3. "No reflections or glare"

- Next Step button (52px):
  - Disabled until document uploaded
  - Enabled: brand blue, "Next"
  - Saves upload and advances to Step 3 (Selfie)

#### Step 3: Selfie
- Instruction text (24px gray, centered):
  - "Take a selfie with your ID" (14px)
  - "Make sure your face is clearly visible" (12px gray)

- Camera Capture Zone (200px):
  - Background: black or camera feed
  - Centered frame guide (oval outline, dashed, 120px wide)
  - Below: instruction "Position face in oval" (12px gray/white)
  - Take Photo button (44px circle, bottom center):
    - Background: white
    - Icon: camera (24px blue)
  - Tap opens camera with live preview

- After capture shows:
  - Thumbnail (120px × 120px) of selfie
  - Retake button (12px underlined link)

- Consent checkbox (32px):
  - Checkbox + text: "I confirm this is my genuine selfie" (12px)
  - Required to submit

- Submit button (52px):
  - Text: "Complete Verification" (16px bold white)
  - Disabled until selfie captured + consent checked
  - Enabled: brand blue
  - Tap submits all KYC data
  - Loading state shows spinner (3-5s processing)

### Processing State (after submit)
- Modal overlay (center screen):
  - Spinner animation (24px)
  - Text: "Verifying your identity..." (14px gray)
  - After 3-5s success: auto-advances to next screen (Account created success)

### Bottom Spacing
- 16px padding below

---

## Page Layout - SCREEN 5: Login

### Header Zone (optional, minimal)
- No header bar (full screen intent)

### Logo Zone (100px)
- ZR Securities logo (80px × 80px) centered
- 24px below logo

### Content Zone (120px)
- Title: "Welcome Back" (24px bold, centered)
- Subtitle: "Log in to your account" (14px gray, centered)

### Input Section - Phone/Email Toggle (64px)
- Toggle pills: [Phone] [Email] (12px text, 8px padding)
- Default: Phone selected (blue background + white text)
- Inactive: #F0F0F0 background, gray text
- Tap to switch input method

### Country Code Selector (56px)
- Only visible if Phone selected
- Left icon: flag emoji (24px)
- Country code: "+852" (14px bold)
- Tap to open modal (same as Sign Up screen)
- Modal: countries with flags, search, popular at top

### Phone/Email Input (56px)
- Placeholder: "Phone number" or "Email address"
- 16px padding, 1px #DDD border
- Focus: border 2px brand blue
- Number/email keyboard on mobile
- Real-time validation (gray ✓ or red ✗ icon)

### Next Button (52px)
- Text: "Next" (16px bold white)
- Background: brand blue
- Border-radius: 24px
- Full width with 32px padding left/right
- Disabled if input invalid or empty
- Enabled: darker blue hover state

### Social Login Section (80px)
- Divider: "Or continue with" (12px gray, centered with 8px lines)
- Social buttons (44px circles, 8px gap):
  - Google (white bg, border #DDD, Google G icon)
  - Apple (white bg, border #DDD, Apple icon)
- Hover: background #F5F5F5

### Sign Up Link (32px)
- Centered text: "Don't have an account?" (12px gray)
- "Sign Up" link (12px brand blue, underlined)
- Tap navigates to Sign Up screen (Screen 2)

### Forgot Password Link (32px)
- Centered text: "Forgot password?" (12px brand blue, underlined)
- Tap opens password recovery flow (separate flow, not detailed here)

### SFC Badge Zone (32px)
- Same as Welcome screen:
  - Shield icon (16px)
  - "SFC Licensed Broker" (12px gray)
  - Pill: #F0F0F0 bg, 16px border-radius

### Bottom Spacing
- 16px padding below

---

## Components

### Toggle Pills
```
<div class="toggle-pills">
  <button class="pill active">Phone</button>
  <button class="pill">Email</button>
</div>
```

### Country Code Selector
```
<button class="country-selector">
  <span class="flag-icon">🇭🇰</span>
  <span class="code">+852</span>
  <svg class="chevron" />
</button>

<!-- Modal (triggered on tap) -->
<div class="country-modal">
  <input type="search" placeholder="Search countries..." />
  <div class="popular-countries">
    <!-- popular items -->
  </div>
  <div class="country-list">
    <!-- full list -->
  </div>
</div>
```

### Radio Option (Exchange Selection)
```
<label class="radio-option">
  <input type="radio" name="exchange" value="hashkey" />
  <div class="option-content">
    <img class="exchange-logo" src="hashkey.svg" />
    <div class="option-text">
      <div class="option-name">HashKey</div>
      <div class="option-description">Full market coverage</div>
    </div>
  </div>
</label>
```

### OTP Input Box
```
<input
  type="text"
  maxLength="1"
  inputMode="numeric"
  class="otp-box"
  ref={otpRef}
  onChange={handleOTPChange}
  onKeyDown={handleKeyDown}
/>
```

### Step Progress Indicator
```
<div class="progress-steps">
  <div class="step completed">
    <span class="step-number">✓</span>
    <span class="step-label">Basic Info</span>
  </div>
  <div class="step-line completed"></div>
  <div class="step active">
    <span class="step-number">2</span>
    <span class="step-label">ID Upload</span>
  </div>
  <div class="step-line pending"></div>
  <div class="step pending">
    <span class="step-number">3</span>
    <span class="step-label">Selfie</span>
  </div>
</div>
```

### File Upload Zone
```
<div class="upload-zone">
  <input type="file" accept="image/*,.pdf" id="file-input" />
  <label for="file-input" class="upload-label">
    <svg class="upload-icon" />
    <div class="upload-text">Upload ID</div>
    <div class="upload-subtext">PNG, JPG, PDF (max 5MB)</div>
  </label>
</div>
```

### CTA Button (Primary)
```
<button class="btn-primary">
  Create Account
</button>
```

### CTA Button (Secondary)
```
<button class="btn-secondary">
  Log In
</button>
```

---

## Mock Data

```typescript
interface Country {
  code: string;
  name: string;
  phoneCode: string;
  flag: string;
  popular: boolean;
}

interface Exchange {
  id: 'hashkey' | 'bullish' | 'osl' | 'vdx';
  name: string;
  logo: string;
  description: string;
}

interface SignUpData {
  phone?: string;
  email?: string;
  countryCode: string;
  exchange: string;
  termsAccepted: boolean;
}

interface KYCData {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  address: string;
  occupation: string;
  isPEP: boolean;
  idType: 'passport' | 'hkid' | 'license' | 'mainland-id';
  idDocument: File;
  selfie: File;
}

const mockCountries: Country[] = [
  {
    code: 'HK',
    name: 'Hong Kong',
    phoneCode: '+852',
    flag: '🇭🇰',
    popular: true,
  },
  {
    code: 'CN',
    name: 'China',
    phoneCode: '+86',
    flag: '🇨🇳',
    popular: true,
  },
  {
    code: 'US',
    name: 'United States',
    phoneCode: '+1',
    flag: '🇺🇸',
    popular: true,
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    phoneCode: '+44',
    flag: '🇬🇧',
    popular: true,
  },
  {
    code: 'SG',
    name: 'Singapore',
    phoneCode: '+65',
    flag: '🇸🇬',
    popular: true,
  },
  {
    code: 'JP',
    name: 'Japan',
    phoneCode: '+81',
    flag: '🇯🇵',
    popular: false,
  },
  // ... more countries
];

const mockExchanges: Exchange[] = [
  {
    id: 'hashkey',
    name: 'HashKey',
    logo: 'https://assets.example.com/hashkey.svg',
    description: 'Full market coverage',
  },
  {
    id: 'bullish',
    name: 'Bullish',
    logo: 'https://assets.example.com/bullish.svg',
    description: 'EOS ecosystem trading',
  },
  {
    id: 'osl',
    name: 'OSL',
    logo: 'https://assets.example.com/osl.svg',
    description: 'Crypto to fiat on/off ramps',
  },
  {
    id: 'vdx',
    name: 'VDX',
    logo: 'https://assets.example.com/vdx.svg',
    description: 'Derivatives and margin trading',
  },
];

const mockOccupations = [
  'Employee',
  'Self-employed',
  'Business Owner',
  'Student',
  'Retired',
  'Other',
];

const mockIDTypes = [
  { value: 'passport', label: 'Passport', icon: 'passport' },
  { value: 'hkid', label: 'HKID (Hong Kong ID Card)', icon: 'id-card' },
  { value: 'license', label: 'Driving License', icon: 'license' },
  { value: 'mainland-id', label: 'Mainland ID Card', icon: 'id-card' },
];
```

## Interaction Requirements

### Screen 1: Welcome
1. Sign Up button → Navigate to Screen 2 (Sign Up)
2. Log In button → Navigate to Screen 5 (Login)
3. Google button → Initiate Google OAuth flow
4. Apple button → Initiate Apple OAuth flow
5. Social login on success → Auto-complete KYC if available, otherwise → Screen 2
6. SFC badge → Opens info modal about licensing (optional)

### Screen 2: Sign Up
1. Phone/Email toggle → Switch input method and country code visibility
2. Country code tap → Open country modal with search and selection
3. Phone/Email input → Real-time format validation
4. Exchange radio → Single selection only
5. Terms checkbox → Must check before Next enables
6. Next button → Validate inputs:
   - Phone: 8-15 digits (country-specific validation)
   - Email: RFC5322 format
   - Exchange: must select 1
   - Terms: must be checked
   - If valid: Save data (localStorage/session), navigate to Screen 3
   - If invalid: Show error toast per field

### Screen 3: OTP Verification
1. Back button → Return to Screen 2, show warning dialog
2. OTP input boxes → Auto-advance on digit entry, backspace goes back
3. Auto-submit → When all 6 digits entered
4. Invalid OTP → Show error, allow retry, don't clear boxes
5. Resend button → Only enables after 60s countdown
   - Send new code, reset countdown
   - Max resends: 3 (after 3, show "Contact support" message)
6. Valid OTP on success → Auto-advance to Screen 4 after 500ms fade

### Screen 4: KYC
1. Back button → Return to Screen 3 with confirmation dialog
2. Step progress → Visual indicator of current step
3. Basic Info step:
   - All fields required
   - DOB validation: must be 18+ years old
   - Next button saves step, advances to step 2
4. ID Upload step:
   - File upload triggers file picker or drag-drop
   - File validation: image/PDF, max 5MB
   - Show thumbnail after upload
   - Replace button allows re-upload
   - Next button saves upload, advances to step 3
5. Selfie step:
   - Camera button opens native camera
   - Live preview with frame guide
   - Take photo snaps picture
   - Retake allows new photo
   - Consent checkbox required before submit
   - Submit button sends all KYC data to server
   - Loading state for 3-5s
   - Success: auto-navigate to next screen (or show success modal)
6. Error handling: Show field-level errors, prevent submit if invalid

### Screen 5: Login
1. Phone/Email toggle → Switch input method
2. Country code tap → Open country modal
3. Phone/Email input → Real-time validation
4. Next button → Validate input format:
   - If valid: Send OTP, navigate to OTP verification screen
   - If invalid: Show error (red border, error message)
5. Google/Apple buttons → Initiate OAuth
6. Sign Up link → Navigate to Screen 2
7. Forgot Password link → Navigate to password recovery flow (optional detail)

---

## Constraints

- All phone/email validations must support international formats
- Country selector modal max-height 60vh with scroll
- OTP auto-submit must happen exactly when 6th digit entered
- OTP can be resent max 3 times (rate limiting)
- KYC document upload max 5MB, supported formats: JPG, PNG, PDF
- KYC selfie must pass basic face detection (liveness check)
- All KYC data must be encrypted before server submission
- Onboarding must be completable in < 5 minutes
- Mobile: full-width layout, 320px minimum
- Desktop: constrain to max 480px width (mobile view, centered on screen)
- All forms must validate in real-time (show errors as user types)
- Form data must persist in session storage during multi-step flows
- Back button from any step shows warning: "You'll lose progress"
- Social login (Google/Apple) must auto-populate available fields
- SFC badge must always be visible (footer or floating)
- All required fields marked with red asterisk (*)
- Error messages must be specific and actionable
- Success states must show clear confirmation before navigation
- Maximum 3 failed KYC attempts before requiring manual review
- Onboarding flow must support resumption if user closes mid-flow
- All requests must timeout after 30s with user-friendly error message
- Exchange selection is immutable after signup (cannot change after account creation)
- Terms of Service and Privacy Policy links must open in modal (not new tab on mobile)
