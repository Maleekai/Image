# Withdraw Page -- ZR Securities Trading App

> This prompt generates the crypto withdrawal page with address input, security verification, and withdrawal summary.

## Context
Highest-security screen in the app. Multiple validation layers to prevent accidental or unauthorized withdrawals. New addresses have a 24-hour cooling-off period (DD-011, ZR regulatory requirement).

**OKX Competitive Analysis Applied**: Adopted OKX's withdrawal flow structure (address -> network -> amount -> confirm). Enhanced with enhanced security verification (DD-011), address whitelist, and explicit fee display.

## Page Layout

### Zone 1: Nav Bar (44px)
- Left: Back arrow
- Center: "Withdraw BTC" (18px semibold) with coin icon
- Right: History icon

### Zone 2: Address Input (80px)
- Label: "Recipient Address" (13px, text-secondary)
- Input: bg-tertiary, rounded-lg, full-width, 15px JetBrains Mono
- Right side icons: [Scan QR] [Address book]
- Below input: Real-time format validation
  - Valid: green checkmark + "Valid BTC address"
  - Invalid: red X + "Invalid address format"
  - New address: warning icon + "New address -- 24h review period may apply"

### Zone 3: Network Selector (80px)
- Same radio button pattern as Deposit page
- Each option shows withdrawal fee prominently:
```
○ Bitcoin (BTC)          Fee: 0.0001 BTC
  Estimated arrival: ~30 min
```

### Zone 4: Amount Input (100px)
- Label: "Amount" (13px, text-secondary)
- Input: bg-tertiary, rounded-lg, 15px JetBrains Mono
- "Max" button right side (text-brand-blue, 13px)
- Below input row: "Available: 1.5000 BTC" (13px, text-secondary)
- Below available: Fee preview (13px):
  ```
  Fee: 0.0001 BTC | You receive: 0.0999 BTC
  ```

### Zone 5: Exchange Source (40px) -- ZR UNIQUE
- "Withdrawing from: [HashKey badge] HashKey Exchange" (13px)
- bg-brand-blue/10, rounded-lg, mx-16

### Zone 6: Withdrawal Summary Card (variable)
- bg-secondary, rounded-xl, mx-16, p-16
```
Withdrawal Summary
─────────────────────────
To:       bc1q...xyz (truncated)
Network:  Bitcoin
Amount:   0.1000 BTC
Fee:      0.0001 BTC
Receive:  0.0999 BTC
Exchange: HashKey
─────────────────────────
```
- Labels: 13px text-secondary, values: 13px mono text-primary

### Zone 7: Withdraw Button (52px)
- "Withdraw 0.0999 BTC" full-width, bg-brand-blue, rounded-xl, mx-16
- Disabled until all inputs valid

## Security Verification Bottom Sheet (triggered after Withdraw tap)
Multi-step verification:

### Step 1: Email OTP
```
┌────────────────────────────────────┐
│ Security Verification    (1/2)     │
│                                     │
│ Email Verification                  │
│ Enter the code sent to             │
│ j***@gmail.com                     │
│                                     │
│ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐        │
│ │ │ │ │ │ │ │ │ │ │ │ │        │
│ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘        │
│                                     │
│ Resend code (58s)                  │
│                                     │
│ [Next]                              │
└────────────────────────────────────┘
```
- 6-digit OTP input with individual boxes (44x48 each)
- Auto-advance to next box on input
- Resend countdown timer

### Step 2: Phone/Authenticator
```
┌────────────────────────────────────┐
│ Security Verification    (2/2)     │
│                                     │
│ Phone Verification                  │
│ Enter the code sent to             │
│ +852 **** 1234                     │
│                                     │
│ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐        │
│ │ │ │ │ │ │ │ │ │ │ │ │        │
│ └─┘ └─┘ └─┘ └─┘ └─┘ └─┘        │
│                                     │
│ [Confirm Withdrawal]               │
└────────────────────────────────────┘
```

### Step 3: Success
- Checkmark animation (calm, deliberate -- IO-007)
- "Withdrawal Submitted" (H2)
- "Your withdrawal is being processed. You will receive a notification once complete." (body text)
- "Est. arrival: ~30 minutes"
- [View Details] [Done] buttons

## Mock Data
```javascript
const withdrawData = {
  coin: { symbol: "BTC", name: "Bitcoin", balance: 1.5 },
  networks: [
    { id: "btc", name: "Bitcoin (BTC)", fee: 0.0001, time: "~30 min" },
    { id: "erc20", name: "Ethereum (ERC20)", fee: 0.001, time: "~15 min" },
  ],
  exchange: "HashKey",
  userEmail: "j***@gmail.com",
  userPhone: "+852 **** 1234",
};
```

## Interactions
- **Type address**: Real-time format validation
- **Tap QR scan**: Open QR scanner overlay (simulated)
- **Tap Address book**: Show saved addresses bottom sheet
- **Tap Max**: Fill available balance minus fee
- **Select network**: Update fee and estimated time
- **Tap Withdraw**: Show security verification flow
- **Enter OTP digits**: Auto-advance, auto-submit on 6th digit
- **Confirm**: Show success with calm checkmark

## States
- [x] Default (empty inputs)
- [x] Filled inputs with valid address
- [x] Invalid address warning
- [x] New address warning (24h cooling-off)
- [x] Security verification step 1 (email)
- [x] Security verification step 2 (phone)
- [x] Success state
- [x] Disabled button (incomplete inputs)

---

*Generated by ZR v0 Prompt Generator Skill v1.0 -- Based on OKX withdrawal patterns + ZR security enhancements*
