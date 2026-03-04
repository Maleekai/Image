# Assets, Deposit & Withdraw Module Analysis Guide

## What to Focus On

### Asset Overview Patterns
The portfolio/assets screen gives users a holistic view. Analyze:

1. **Total value display**: Fiat equivalent, hide balance option, currency selector
2. **Asset breakdown**: By coin, by type (spot/futures/earn), by exchange
3. **P&L display**: Unrealized, realized, daily, total — what granularity?
4. **Small balance handling**: Hide dust, convert small balances
5. **Asset actions**: Quick buttons (deposit, withdraw, transfer, trade) per asset

### Deposit Flow
1. **Network selection**: How networks are presented, default selection logic
2. **Address display**: QR code, copy button, share, address format validation
3. **Deposit confirmation**: Expected arrival time, minimum amount, network fee info
4. **Deposit history**: Status tracking, tx hash link, confirmation count

### Withdraw Flow
The highest-risk UX — mistakes here lose money. Analyze carefully:

1. **Address input**: Manual entry, address book, QR scan, recent addresses
2. **Address validation**: Format check, whitelist, new address cooling-off
3. **Network selection**: Fee comparison, arrival time, network status
4. **Amount input**: Available balance display, max button, fee deduction preview
5. **Security verification**: 2FA, email, SMS — how many steps?
6. **Confirmation screen**: Final review with all details before submission
7. **Withdraw status**: Pending, processing, completed, failed states

### ZR-Specific Considerations

- **Multi-exchange balances**: User's assets are on their bound exchange, but ZR shows aggregated view
- **Cross-asset portfolio**: Show crypto + stocks + forex in one portfolio view
- **Fiat on/off ramp**: HKD deposit/withdrawal through bank transfer (not just crypto)
- **Transfer between accounts**: Spot ↔ Margin ↔ Earn transfers
- **Tax reporting hints**: Hong Kong doesn't tax crypto gains for individuals, but professional traders may be taxed

### Component Patterns to Extract

| Pattern | What to Look For | ZR Adaptation |
|---------|-----------------|---------------|
| Balance card | Total value, hide button, currency toggle | Add multi-asset class aggregation |
| Asset row | Icon, name, balance, value, change | Add exchange badge, asset class icon |
| Network selector | List, recommended badge, fee display | Same, emphasize fee comparison |
| QR display | Size, share options, copy feedback | Same |
| Security modal | 2FA input, countdown, retry | Same, SFC may require additional verification |
| Status tracker | Step indicator, timeline | Same |

### Error Prevention Patterns

Pay special attention to how competitors prevent user errors in deposit/withdraw:

- **Wrong network warning**: "Sending to wrong network will result in permanent loss"
- **Memo/tag requirement**: "This address requires a memo. Missing memo = lost funds"
- **Minimum deposit**: Clear display of minimum deposit amount
- **Address format check**: Real-time validation as user types
- **Withdrawal whitelist**: Requiring pre-approved addresses

### SFC Compliance Notes for Assets Module

- Must clearly show which exchange holds the assets
- Asset segregation disclosure required
- Withdrawal to external wallets may require additional compliance checks
- Transaction records must be downloadable for audit
- Clear disclosure of custody arrangement
