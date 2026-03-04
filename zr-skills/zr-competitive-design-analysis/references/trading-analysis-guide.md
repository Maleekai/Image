# Trading Module Analysis Guide

## What to Focus On

### Order Flow UX
The trading screen is the highest-stakes screen in any trading app. Every extra tap = potential slippage. Analyze:

1. **Order types available**: Market, Limit, Stop-Limit, OCO, Trailing Stop — how are they presented?
2. **Input efficiency**: Keypad vs. slider vs. percentage buttons for amount
3. **Confirmation flow**: Pre-trade summary → confirm → result. How many steps?
4. **Quick trade**: One-tap or widget-based trading shortcuts
5. **Price input**: Manual entry vs. tap from order book vs. last price fill

### K-line & Chart Analysis
Charts are the core decision-making tool. Focus on:

1. **Chart types**: Candlestick, line, bar, area — how to switch?
2. **Time periods**: Available intervals and how they're presented
3. **Technical indicators**: How many? How to add/remove? Overlay vs. subplot?
4. **Drawing tools**: Trendlines, Fibonacci, rectangles — toolbar design
5. **Landscape mode**: Does it exist? How to enter? What additional info shows?
6. **Chart interaction**: Pinch zoom, pan, crosshair, data tooltip on touch

### Order Book Patterns
1. **Depth display**: Number of levels, depth visualization (bars vs. gradient)
2. **Precision**: Decimal places, aggregation options
3. **Update frequency**: Visual indication of real-time updates
4. **Tap behavior**: Tap price level → fill in order form?

### ZR-Specific Considerations

- **Exchange routing**: User's order goes to their bound exchange — show exchange name on trade screen?
- **Multi-market order forms**: Crypto spot vs. stock order forms have different fields (lot size, board lot, trading currency)
- **Pre-trade risk checks**: SFC requires suitability assessment for complex products
- **Leverage warning**: If futures/margin available, prominent risk disclosure needed
- **Order confirmation**: SFC may require explicit confirmation for certain order types

### Component Patterns to Extract

| Pattern | What to Look For | ZR Adaptation |
|---------|-----------------|---------------|
| Order type selector | Tabs, dropdown, segmented control | Add market-specific types |
| Amount input | Keypad, slider, % buttons, USDT/BTC toggle | Add lot-size constraints for stocks |
| Buy/Sell toggle | Color coding, tab position | Same, add "antifragile" cooling-off for large orders |
| Order book | Split view, depth bars, price levels | Same |
| Trade confirmation | Modal, full screen, bottom sheet | Enhanced with risk disclosure |
| Position summary | P&L display, unrealized/realized | Multi-market aggregate |

### Antifragile Design Integration

Per the ZR strategy toolkit, trading screens MUST implement:
- **Cooling-off period**: 30s mandatory wait for orders > 20% of portfolio
- **Frequency alert**: Warning when daily trades > 3
- **Loss-averaging warning**: Alert when adding to losing position (>10% down)
- **Emotion indicator**: If current market volatility is extreme, show calming UI elements

### SFC Compliance Notes for Trading Module

- Client suitability assessment required before first trade in virtual assets
- Best execution obligation — must show execution venue
- Real-time order status required
- Trade confirmation must include all material terms
- Risk disclosures for leveraged/derivative products
