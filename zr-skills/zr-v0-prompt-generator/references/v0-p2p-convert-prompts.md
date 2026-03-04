# v0 Prompt Guide: P2P Trading, Convert & Copy Trading Module

> Source: OKX Flows 018-024 | Extracted from full OKX analysis
> Pixel Data: design-spec-07-p2p-convert-copy.md | Device: 390px width

## OKX Extracted Design Tokens (P2P/Convert/Copy)
| Token | Value | Usage |
|-------|-------|-------|
| bg-page | #FFFFFF | Light mode page background |
| bg-card | #F5F5F5 | Merchant/trader cards |
| bg-dark | #1F1F1F | Dark headers, CTAs |
| color-buy-green | #22C55E / #1ABE5B | Buy buttons |
| color-lime | #7EFF00 / #84FF00 | Diagram accents, highlights |
| color-success | #10B981 | Online status indicator |
| color-blue-link | #2563EB | Max link, info actions |
| text-price | 20px weight 700, #000000 | Merchant price display |
| text-merchant | 16px weight 600, #000000 | Merchant name |
| text-stats | 13px weight 400, #999999 | Transaction count, completion rate |
| text-limit | 12px weight 400, #808080 | Order limit, availability |
| input-value | 44px weight 300, #CCCCCC | Amount input placeholder |
| merchant-card | ~360×140px, 12px radius, 16px padding | Merchant listing card |
| merchant-avatar | 40×40px circular | Merchant profile image |
| buy-btn-small | 56×40px, 8px radius, #22C55E | Per-card buy button |
| payment-badge | 24-40px height, 6px radius | Payment method pills |
| modal-dialog | ~280×300px, 16px radius, 24px padding | Confirmation/alert modal |
| modal-overlay | rgba(0,0,0,0.5) | Modal backdrop |
| checkbox | 20×20px, 4px radius | Agreement checkbox |
| status-dot | 12×12px circle | Online/offline indicator |
| cta-full | full-width × 60px, 20px radius | Primary action pill |

## Key Screens to Generate

### Screen 1: P2P Marketplace
**Layout zones**:
1. **Header tabs** (Y:100, H:48px): "Buy"/"Sell" toggle, currency selector dropdown (e.g., "IDR")
2. **Currency filter** (Y:148, H:44px): "USDT" with dropdown chevron
3. **Merchant card stack** (Y:200+, scrollable):
   - Each card (140px):
     ```
     ┌─────────────────────────────────────────────────┐
     │ [Avatar 40px] Merchant Name    [Rating/Status]  │
     │               104 txns • 99.17% • 👍 99.66%     │
     │                                                  │
     │ Rp 16,123  (20px bold)                          │
     │ Available 110 USDT                               │
     │ Limit 100,000-1,773,530 IDR                     │
     │ [Bank transfer] [DANA] [BCA] [Sea Bank]         │
     │                                     [BUY 56×40] │
     └─────────────────────────────────────────────────┘
     ```

### Screen 2: P2P Order Detail
**Layout zones**:
1. **Header** (Y:0, H:64px): Back, USDT icon, "Buy USDT", unit price "$1.056", countdown "00:39s"
2. **Amount input** (Y:64, H:140px): Rounded card with "Amount"/"Quantity" tabs, input "0.00" with currency dropdown, "Max" link blue, helper "Order limit: $20.00 - $20.01", output "You receive 0.00 USDT"
3. **Payment method** (Y:210, H:80px): "Payment method" label + "Wise" selected with badge "2"
4. **Maker info** (Y:300, H:240px): Payment window "15 mins", merchant profile with verified badge, green dot "Online", trading terms text
5. **CTA** (Y:550, H:60px): Black pill "Buy USDT with 0 fees"

### Screen 3: Token Convert (Simple Swap)
**Layout zones**:
1. **Nav bar** (44px): Back arrow, "Convert" title
2. **From field** (80px): Asset selector + amount input + "Max" (blue)
3. **Swap button** (44px): Circular arrow icon, tappable
4. **To field** (80px): Asset selector + estimated output (gray)
5. **Rate display** (36px): "1 BTC ≈ 67,234.50 USDT" + refresh icon
6. **Convert button** (52px): Brand blue full-width

### Screen 4: Copy Trading / Trader Cards
**Layout zones**:
1. **Trader discovery**: Cards with trader avatar, username, verified badge
2. **Performance metrics**: ROI %, PnL, followers count, win rate
3. **Copy button**: "Copy" CTA per trader card
4. **Institutional modal**: "This is an institutional user" alert with checkbox + Cancel/Continue buttons

## Mock Data

```javascript
const p2pMock = {
  merchants: [
    { name: "globalexchangecol", avatar: "gc.png", txns: 104, completion: 99.17, rating: 99.66, price: 16123, currency: "IDR", available: 110, asset: "USDT", limit: [100000, 1773530], methods: ["Bank transfer", "DANA", "BCA", "Sea Bank"], status: "online" },
    { name: "cryptomaster_hk", avatar: "cm.png", txns: 892, completion: 99.85, rating: 99.92, price: 7.82, currency: "HKD", available: 5000, asset: "USDT", limit: [500, 50000], methods: ["FPS", "Bank transfer", "Wise"], status: "online" },
  ],
  convertPairs: [
    { from: "BTC", to: "USDT", rate: 67234.50, fee: "0%" },
    { from: "ETH", to: "USDT", rate: 3456.78, fee: "0%" },
  ],
  traders: [
    { name: "AlphaTrader", roi: 234.5, pnl: 125000, followers: 1234, winRate: 72, verified: true },
    { name: "SteadyGains", roi: 89.2, pnl: 45000, followers: 567, winRate: 81, verified: false },
  ],
};
```

## ZR Securities Adaptation
- **OTC Desk**: Replace merchant cards with dealer cards (firm logo, credit ratings, settlement methods, RFQ flows)
- **Multi-Exchange Convert**: Show venue routing split (e.g., "HashKey 40% | Bullish 35%"), per-exchange rates, execution strategy pills (Immediate/Smart Route/VWAP/TWAP)
- **Institutional Block Trading**: Minimum order sizes, counterparty credit display, RFQ response windows
- **Social Trading**: Adapt copy trading with performance metrics (Sharpe ratio, max drawdown), position sync controls, risk limits
- **Payment Methods**: Wire transfer, SWIFT, DLT settlement (T+0) for institutional users
