# Withdraw Page — ZR Securities Trading App

## Context
The Withdraw page allows users to transfer funds from their trading account to external wallets. Users input a destination address, select the network, specify an amount, and confirm withdrawal through multi-step security verification (Email OTP → Phone OTP → Confirm). The page emphasizes address validation and fee transparency.

## Design System
- **Brand Color**: #1A73E8 (blue)
- **Typographic Scale**:
  - 18px bold (page title)
  - 14px regular (section labels)
  - 12px gray (helper text)
  - 13px monospace (addresses)
- **Spacing**: 16px base unit
- **Iconography**: 24px (action icons), 20px (input icons)
- **Border Radius**: 8px (cards), 4px (inputs)
- **Validation Colors**:
  - Green #22C55E (valid address)
  - Red #EF4444 (invalid address)
  - Orange #F59E0B (warning)

## Page Layout

### Header Zone (64px)
- Left: Back button (24px left arrow) + "Withdraw" (18px bold)
- Right: History icon (24px, opens withdrawal history modal)
- Background: White, border-bottom 1px #E8E8E8

### Title Section (48px)
- "Withdraw [Asset]" (18px bold if pre-selected, else "Withdraw Funds")
- Subtitle: "Send funds to external wallet"
- 16px padding, left-aligned

### Address Input Section (100px)
- Label: "Recipient Address" (14px bold)
- Input zone:
  - Text input (80px height, 14px font):
    - Placeholder: "Paste wallet address"
    - Monospace font, word-break: break-all
    - 16px padding, 1px border #DDD
    - Focus state: border 2px brand blue
  - Right side (2 icons, 24px each, in input):
    - QR scan button (camera icon, blue)
    - Address book button (contact icon, gray)
  - Real-time validation indicator (right of input):
    - Invalid: red circle ✗
    - Valid: green circle ✓
    - Pending: spinner
- Below input (12px gray): Validation message:
  - If valid: "✓ Address verified for Bitcoin"
  - If invalid: "✗ Invalid address format"
  - If pending: "Validating address..."
- Error message (red text, 12px) if format incorrect

### Network Selector Section (80px + grid height)
- Label: "Select Network" (14px bold)
- Instructions: "Choose the network matching recipient's wallet" (12px gray)
- Network option cards (80px height, 16px padding):
  - Left: Radio button (20px circle, blue when selected)
  - Center:
    - Network name (14px bold)
    - Fee prominent (12px bold, "0.0001 BTC" red text)
    - Arrival time (12px gray, "~ 30-60 min")
  - Right: "Fastest" or "Cheapest" badge (if applicable, 8px pill, green or orange)
  - Border: 1px #DDD, selected state 2px brand blue
- Fee in red to emphasize cost
- 8px gap between cards

### Amount Input Section (120px)
- Label: "Amount" (14px bold)
- Input row (56px height):
  - Left: Input field (14px, placeholder "0.0000")
    - 16px padding, 1px border #DDD
    - Focus state: border 2px brand blue
    - Number keyboard on mobile
  - Right: "Max" button (52px height, outlined border 1px #DDD, gray text, tappable)
- Fee preview row (48px):
  - Left text: "Network Fee:" (12px gray)
  - Right: "0.0001 BTC" (12px bold, red)
- Receive row (48px):
  - Left text: "You will receive:" (12px bold)
  - Right: "0.0999 BTC" (14px bold, green)
  - Recalculates in real-time as amount changes
- Balance row (32px, below):
  - "Available balance: 0.5000 BTC" (12px gray)
  - Tap to fill amount field

### Memo/Tag Input Section (80px, conditional)
- Only visible for coins with memo/tag requirement (XRP, EOS, etc.)
- Label: "Memo (required for XRP)" (14px bold)
- Input (56px height):
  - Placeholder: "Enter memo tag"
  - 16px padding, 1px border #DDD
  - Focus state: border 2px brand blue
- Note below (12px red): "Do not forget memo or funds will be lost"

### Withdrawal Summary Card (140px)
- Background: #F5F5F5, 16px padding, 8px radius
- Rows (32px each):
  - **To**: recipient address truncated (first 12 + last 8 chars, monospace 12px)
    - Full address shows on hover/tap (modal or expanded)
  - **Network**: "Bitcoin Network" (14px)
  - **Amount**: "0.0999 BTC" (14px bold)
  - **Fee**: "0.0001 BTC" (12px gray, red text)
  - **Total**: "0.1000 BTC" (14px bold, underlined)
  - **Exchange**: "HashKey" (12px gray, exchange badge)
- Divider: 1px #DDD between rows

### Withdraw Button Zone (64px)
- Primary button (52px height, 16px padding):
  - "Withdraw 0.0999 BTC" (14px bold white)
  - Background: brand blue (#1A73E8)
  - Disabled if: amount empty, address invalid, network not selected, memo missing
  - Hover state: darker blue #1557B0
  - Tap to proceed to verification flow

### Security Verification Flow (Fullscreen Modal/Step Sequence)

#### Step 1: Email OTP (320px height)
- Title: "Verify Email" (16px bold)
- Instructions: "We've sent a 6-digit code to y***@gmail.com" (12px gray)
- 6 input boxes (56px × 56px each):
  - Background: white, border 2px #DDD
  - 8px radius, 8px gap between boxes
  - Focus state: border 2px brand blue
  - Auto-advance to next box when digit entered
  - Blue cursor indicator in active box
  - Accept numeric input only
- Below boxes: "Didn't receive code?" (12px gray)
  - "Resend" link (12px blue, tappable)
  - Timer: "Resend in 57s" (12px gray, counts down)
- Next button (52px, disabled until all 6 digits filled)

#### Step 2: Phone OTP (same layout as email)
- Title: "Verify Phone" (16px bold)
- Instructions: "We've sent a 6-digit code to +852 ●●●●●●66" (12px gray)
- 6 input boxes (same specs as email)
- Resend timer
- Next button

#### Step 3: Confirm (320px height)
- Title: "Confirm Withdrawal" (16px bold)
- Summary card (80px):
  - Recipient address (monospace 12px, truncated)
  - Amount (14px bold)
  - Network (12px)
  - Fee (12px gray)
- Confirmation text (12px, #666):
  - "You're about to withdraw 0.0999 BTC"
  - "This action cannot be undone"
- 2 buttons (52px each, 8px gap):
  - "Cancel" (outlined border, gray text)
  - "Confirm" (solid brand blue)

### Success State (after confirmation)
- Modal/overlay (center screen):
  - Green checkmark icon (48px)
  - Title: "Withdrawal Submitted" (16px bold)
  - Message: "Your withdrawal has been submitted for processing. You'll receive a confirmation email shortly." (12px gray)
  - Transaction ID shown (12px monospace, selectable)
  - "View Status" button (52px, outlined blue)
  - "Back to Assets" button (52px, solid brand blue)

### Bottom Spacing
- 16px padding below

## Components

### Address Input with Validation
```
<div class="address-input-section">
  <label>Recipient Address</label>
  <div class="address-input-wrapper">
    <input
      type="text"
      placeholder="Paste wallet address"
      value={address}
      onChange={validateAddress}
    />
    <button class="scan-qr-button" onclick="openQRScanner()">
      <svg class="icon" />
    </button>
    <button class="address-book-button" onclick="openAddressBook()">
      <svg class="icon" />
    </button>
    <div class="validation-indicator" status={validationStatus} />
  </div>
  <div class="validation-message">{validationMessage}</div>
</div>
```

### Network Option with Fee Emphasis
```
<div class="network-option">
  <input type="radio" name="network" value="btc" />
  <div class="network-info">
    <div class="network-name">Bitcoin Network</div>
    <div class="fee-row">
      <span class="fee-label">Fee:</span>
      <span class="fee-amount">0.0001 BTC</span>
    </div>
    <div class="arrival-time">~ 30-60 minutes</div>
  </div>
  <span class="badge fastest">Fastest</span>
</div>
```

### Amount Input with Max Button
```
<div class="amount-input-section">
  <div class="amount-row">
    <input
      type="number"
      placeholder="0.0000"
      value={amount}
      onChange={updateAmount}
    />
    <button class="max-button" onclick="setMaxAmount()">Max</button>
  </div>
  <div class="fee-preview">
    <span>Network Fee:</span>
    <span class="fee-amount">0.0001 BTC</span>
  </div>
  <div class="receive-preview">
    <span>You will receive:</span>
    <span class="receive-amount">0.0999 BTC</span>
  </div>
</div>
```

### OTP Input
```
<div class="otp-verification">
  <h2>Verify Email</h2>
  <p>We've sent a 6-digit code to y***@gmail.com</p>
  <div class="otp-boxes">
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <input
        key={i}
        type="text"
        maxLength="1"
        inputMode="numeric"
        ref={otpRefs[i]}
        onChange={(e) => handleOTPChange(i, e.target.value)}
      />
    ))}
  </div>
  <div class="resend-section">
    <span>Didn't receive code?</span>
    {timer > 0 ? (
      <span>Resend in {timer}s</span>
    ) : (
      <button onclick="resendOTP()">Resend</button>
    )}
  </div>
</div>
```

### Withdrawal Summary
```
<div class="withdrawal-summary">
  <div class="summary-row">
    <span>To</span>
    <code class="address-truncated">1A1z7agoat...7agoat4ogyi</code>
  </div>
  <div class="summary-row">
    <span>Network</span>
    <span>Bitcoin Network</span>
  </div>
  <div class="summary-row">
    <span>Amount</span>
    <span class="bold">0.0999 BTC</span>
  </div>
  <div class="summary-row">
    <span>Fee</span>
    <span class="fee-amount">0.0001 BTC</span>
  </div>
  <div class="summary-divider"></div>
  <div class="summary-row">
    <span>Total</span>
    <span class="total-amount">0.1000 BTC</span>
  </div>
</div>
```

## Mock Data

```typescript
interface WithdrawalAddress {
  address: string;
  nickname?: string;
  network: string;
  coin: string;
  isFavorite: boolean;
  lastUsed?: string;
}

interface NetworkOption {
  id: string;
  name: string;
  coin: string;
  fee: string;
  feeInCrypto: number;
  feeCurrency: string;
  arrivalTime: string;
  badge?: 'Fastest' | 'Cheapest' | 'Recommended';
}

interface WithdrawalRequest {
  coin: string;
  amount: number;
  networkId: string;
  recipientAddress: string;
  memo?: string;
  estimatedFee: number;
  estimatedReceive: number;
}

const mockNetworksWithdraw: NetworkOption[] = [
  {
    id: 'btc-mainnet',
    name: 'Bitcoin Network',
    coin: 'BTC',
    fee: '0.0001 BTC',
    feeInCrypto: 0.0001,
    feeCurrency: 'BTC',
    arrivalTime: '30-60 minutes',
    badge: 'Fastest',
  },
  {
    id: 'btc-lightning',
    name: 'Lightning Network',
    coin: 'BTC',
    fee: '0.00001 BTC',
    feeInCrypto: 0.00001,
    feeCurrency: 'BTC',
    arrivalTime: '< 5 minutes',
    badge: 'Fastest',
  },
  {
    id: 'btc-bsc',
    name: 'Binance Smart Chain (WBTC)',
    coin: 'BTC',
    fee: '0.00005 BTC',
    feeInCrypto: 0.00005,
    feeCurrency: 'BTC',
    arrivalTime: '5-15 minutes',
    badge: 'Cheapest',
  },
];

const mockWithdrawalRequest: WithdrawalRequest = {
  coin: 'BTC',
  amount: 0.0999,
  networkId: 'btc-mainnet',
  recipientAddress: '1A1z7agoat4ogyitLwKWaszhAMxpSWHJf',
  estimatedFee: 0.0001,
  estimatedReceive: 0.0999,
};

const mockSavedAddresses: WithdrawalAddress[] = [
  {
    address: '1A1z7agoat4ogyitLwKWaszhAMxpSWHJf',
    nickname: 'My Ledger',
    network: 'Bitcoin Network',
    coin: 'BTC',
    isFavorite: true,
    lastUsed: '2025-03-01T10:30:00Z',
  },
  {
    address: '3J98t1WpEZ73CNmYviecrnyiWrnqRhWNLy',
    nickname: 'Hardware Wallet 2',
    network: 'Bitcoin Network',
    coin: 'BTC',
    isFavorite: false,
    lastUsed: '2025-02-28T15:45:00Z',
  },
];

const mockAddressValidation = {
  isValid: true,
  format: 'P2PKH',
  network: 'Bitcoin Network',
  message: '✓ Address verified for Bitcoin',
};

const mockOTPState = {
  emailSent: true,
  phoneSent: false,
  emailVerified: false,
  phoneVerified: false,
  emailResendCount: 0,
  phoneResendCount: 0,
  resendTimerEmail: 57,
  resendTimerPhone: 0,
};

const mockWithdrawalResponse = {
  txId: 'WD-20250304-ABC123DEF456',
  status: 'pending',
  coin: 'BTC',
  amount: 0.0999,
  recipient: '1A1z7agoat4ogyitLwKWaszhAMxpSWHJf',
  network: 'Bitcoin Network',
  fee: 0.0001,
  timestamp: new Date().toISOString(),
  estimatedArrival: new Date(Date.now() + 45 * 60 * 1000).toISOString(),
};
```

## Interaction Requirements

1. **Address Input**:
   - Accept text paste or QR camera scan
   - Real-time validation against blockchain standards
   - Show validation icon (green ✓ or red ✗) inline
   - Address book button opens saved addresses modal (favorites + recent)
   - Long-press to paste from clipboard on mobile

2. **Network Selection**:
   - Radio button single select
   - Fee updates dynamically based on network congestion
   - Display arrival time with network condition (fast/normal/slow)
   - Fastest/Cheapest badges help users choose
   - Update fee and receive amount when network changes

3. **Amount Input**:
   - Accept decimals up to 8 places
   - Max button fills field with available balance minus network fee
   - Real-time calculation of receive amount as user types
   - Show error if amount exceeds balance
   - Show error if amount below minimum (usually dust threshold)

4. **Fee Display**:
   - Must be in red to emphasize it's a cost
   - Update in real-time based on network congestion
   - Show both crypto amount and fiat equivalent
   - Display "Network Fee:" label clearly

5. **Memo/Tag Input**:
   - Only appear for coins that require it (XRP, EOS, etc.)
   - Validation: must be numeric or alphanumeric depending on coin
   - Red warning text: "Do not forget memo or funds will be lost"
   - Prevent submission if memo is empty and required

6. **Summary Review**:
   - Display truncated address with full address available on tap
   - Show all critical info: amount, network, fee, receive
   - Make it easy to review before verification step
   - Exchange name helps user confirm correct account

7. **Withdraw Button**:
   - Disabled state when: address invalid, amount empty/invalid, network not selected, memo missing (if required)
   - Loading state shows spinner during submission
   - Button text shows exact amount: "Withdraw 0.0999 BTC"
   - Tap opens verification modal (Email OTP)

8. **Email OTP Verification**:
   - 6 input boxes auto-focus and advance
   - Numeric input only
   - Auto-submit when all 6 digits entered
   - Resend button enables after 60s countdown
   - Show masked email address: y***@gmail.com
   - Previous step accessible via back button

9. **Phone OTP Verification**:
   - Same UX as email OTP
   - Show masked phone: +852 ●●●●●●66
   - Can resend independent of email
   - Both verifications must pass before confirm step

10. **Confirmation Step**:
    - Final review of withdrawal details
    - Clear warning: "This action cannot be undone"
    - Cancel returns to edit withdrawal details
    - Confirm submits withdrawal request
    - Show transaction ID in success state

11. **Success Feedback**:
    - Green checkmark animation (2-3s)
    - Transaction ID for user record
    - "View Status" button opens withdrawal status detail
    - "Back to Assets" returns to portfolio

## Constraints

- Address validation must work offline (regex) and online (blockchain API)
- Network selection must prevent sending to incompatible networks (validate coin-network pairing)
- OTP inputs must auto-focus next field on digit entry
- All 6 OTP digits must be filled before Next button enables
- Fee calculation must refresh every 10 seconds (network congestion updates)
- Recipient address must not be copyable/selectable during verification flow
- Withdrawal minimum/maximum amounts validated against blockchain limits
- Memo field only visible for coins in the memo-required list
- Address book can store max 20 saved addresses
- Recent addresses auto-removed after 90 days
- Estimated arrival time is informational only (not guaranteed)
- Once OTP verification starts, user must complete flow (no exit without cancel)
- Withdrawal success page must show transaction ID and link to block explorer
- Mobile: full-width layout, 320px minimum
- Desktop: constrain to max 480px width (mobile view) or expand to 768px (tablet)
- Network fee updates must not trigger form validation errors
- Decimal precision limited to 8 places (most blockchains)
- Maximum withdrawal amount checked against exchange limits + user tier
- Withdrawal disabled during exchange maintenance windows
