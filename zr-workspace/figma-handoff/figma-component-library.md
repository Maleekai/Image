# ZR Securities — Figma Component Library Reference
> Version: 1.0 | Date: 2026-03-05 | For: Figma建模参考

本文档定义所有Figma组件的命名规范、变体(Variants)、属性(Properties)和精确尺寸，用于在Figma中搭建Component Library。

---

## 命名规范 Naming Convention

```
层级: ZR / [Category] / [Component] / [Variant]
示例: ZR / Button / Primary / Default
      ZR / Badge / Exchange / HashKey
      ZR / Input / Text / Focused
```

---

## 1. Button 按钮

### 1.1 Button/Primary
| Property | Value |
|----------|-------|
| Height | 52px |
| Width | Fill container (full-width) |
| Border Radius | 26px (pill) |
| Font | SF Pro Text 17px Semibold / Inter 17px 600 |
| Text Color | #FFFFFF |
| Padding | 0 24px |
| Min Touch Target | 52 × 44px |

**Variants (Figma Component Property: `Style`):**

| Variant | Background | Text | 用途 |
|---------|-----------|------|------|
| Default | #1A73E8 | #FFFFFF | 主CTA（确认、下一步） |
| Buy | #00C853 | #FFFFFF | 买入 |
| Sell | #FF1744 | #FFFFFF | 卖出 |
| Disabled | #E5E5EA | #BDBDBD | 不可操作 |

**States (Figma Component Property: `State`):**

| State | Change |
|-------|--------|
| Default | 如上 |
| Hover | opacity 0.9 或 bg shift (Default→#4A90D9, Buy→lighten, Sell→lighten) |
| Pressed | opacity 0.95, scale 0.98 |
| Loading | 居中 spinner 20px + text hidden |

### 1.2 Button/Secondary
| Property | Value |
|----------|-------|
| Height | 36px |
| Width | Hug contents |
| Border Radius | 8px |
| Border | 1px #E0E0E0 |
| Background | transparent |
| Font | SF Pro Text 13px Medium / Inter 13px 500 |
| Text Color | #212121 |
| Padding | 0 16px |

**States:**
- Default: border #E0E0E0, text #212121
- Active: border #1A73E8, text #1A73E8, bg #E8F0FE
- Disabled: border #F0F0F0, text #BDBDBD

### 1.3 Button/Icon
| Property | Value |
|----------|-------|
| Size | 44 × 44px |
| Border Radius | 22px (circle) |
| Background | transparent |
| Icon Size | 24px |
| Icon Color | #212121 (default), #1A73E8 (active) |

---

## 2. Input 输入框

### 2.1 Input/Text
| Property | Value |
|----------|-------|
| Height | 48px |
| Width | Fill container |
| Border Radius | 8px |
| Background | #F5F5F5 |
| Border | 1px #E0E0E0 |
| Font | SF Pro Text 15px Regular / Inter 15px 400 |
| Text Color | #212121 |
| Placeholder Color | #BDBDBD |
| Padding | 0 12px |
| Label | 13px Caption, 4px gap above |

**States:**
- Default: bg #F5F5F5, border 1px #E0E0E0
- Focused: bg #FFFFFF, border 2px #1A73E8
- Error: bg #FFFFFF, border 2px #FF1744, helper text red below
- Disabled: bg #F5F5F5, text #BDBDBD

### 2.2 Input/Amount (Financial)
| Property | Value |
|----------|-------|
| Height | 56px |
| Font | SF Mono 28px Medium / JetBrains Mono 28px 500 |
| Right Element | "Max" link (13px #1A73E8) + unit toggle |
| Below | Available balance 13px #757575 |

### 2.3 Input/OTP
| Property | Value |
|----------|-------|
| Box Size | 56 × 56px each |
| Count | 6 boxes |
| Gap | 8px |
| Border Radius | 8px |
| Font | SF Mono 20px Bold / JetBrains Mono 20px 700 |
| Text Align | Center |

**States per box:**
- Empty: border 1px #E0E0E0
- Active: border 2px #1A73E8, animated cursor (2 × 30px blue line)
- Filled: border 1px #E0E0E0, digit centered

### 2.4 Input/Price (with +/- steppers)
| Property | Value |
|----------|-------|
| Height | 56px |
| Layout | [−] [price field] [+] |
| Stepper Size | 36 × 36px |
| Price Font | JetBrains Mono 16px, center-aligned |
| Border | 1px #E0E0E0, radius 8px |

---

## 3. Navigation 导航

### 3.1 Nav/TopBar
| Property | Value |
|----------|-------|
| Height | 44px |
| Background | #FFFFFF |
| Border Bottom | 1px #F0F0F0 (optional) |
| Shadow | elevation-1 (optional) |

**Slots:**
- Left: Back arrow (24px icon, 44×44 tap target)
- Center: Title (17px Semibold)
- Right: Action icons (each 44×44 tap target)

### 3.2 Nav/TabBar (Bottom)
| Property | Value |
|----------|-------|
| Height | 83px (49px bar + 34px safe area) |
| Background | #FFFFFF |
| Border Top | 1px #F0F0F0 |
| Items | 5, evenly distributed |

**Item Structure:**
- Icon: 24px
- Label: 11px Medium
- Gap: 4px (icon to label)

**Tab Names:** 首页 | 行情 | 交易 | 资产 | 更多

**States:**
- Active: icon + label = #1A73E8
- Inactive: icon + label = #BDBDBD

---

## 4. Badge 标签

### 4.1 Badge/Exchange
| Property | Value |
|----------|-------|
| Height | 20px |
| Width | Hug contents |
| Border Radius | 10px (pill) |
| Font | 12px Medium |
| Padding | 0 8px |

**Variants (Property: `Exchange`):**

| Exchange | Background | Text Color |
|----------|-----------|------------|
| HashKey | #E8EEFF | #2962FF |
| Bullish | #E0F7F0 | #00BFA5 |
| OSL | #FFF3E0 | #FF6D00 |
| VDX | #EDE7F6 | #7C4DFF |

### 4.2 Badge/Status
| Property | Value |
|----------|-------|
| Height | 24px |
| Border Radius | 12px |
| Font | 12px Medium |
| Padding | 0 8px |

**Variants (Property: `Status`):**

| Status | Background | Text | Icon |
|--------|-----------|------|------|
| Completed | #E8F5E9 | #2E7D32 | ✓ |
| Pending | #FFF8E1 | #F57F17 | ⏳ |
| Failed | #FFEBEE | #C62828 | ✗ |
| Online | 12px circle #00C853 | — | — |
| Offline | 12px circle #BDBDBD | — | — |

### 4.3 Badge/Change (Price Change)
| Property | Value |
|----------|-------|
| Height | 24px |
| Border Radius | 12px (pill) |
| Font | JetBrains Mono 13px Medium |
| Padding | 0 8px |

**Variants:**
- Positive: bg #00C853, text #FFFFFF, prefix "+"
- Negative: bg #FF1744, text #FFFFFF, prefix "−"
- Neutral: bg #F5F5F5, text #757575

### 4.4 Badge/AssetClass
| Property | Value |
|----------|-------|
| Same structure as Exchange badge |

| Class | Color | Label |
|-------|-------|-------|
| Crypto | #FF9500 | 加密 |
| Stocks | #1A73E8 | 股票 |
| Forex | #00BFA5 | 外汇 |
| Commodities | #FFB300 | 商品 |

---

## 5. Card 卡片

### 5.1 Card/Standard
| Property | Value |
|----------|-------|
| Background | #FFFFFF |
| Border Radius | 12px |
| Padding | 16px |
| Shadow | 0 1px 3px rgba(0,0,0,0.08) |

### 5.2 Card/Summary (Order/Asset)
| Property | Value |
|----------|-------|
| Background | #F5F5F5 |
| Border Radius | 8px |
| Padding | 16px |
| Row Gap | 12px |
| Label Font | 13px Regular #757575 |
| Value Font | 15px Mono Medium #212121 |

### 5.3 Card/Notice (Warning)
| Property | Value |
|----------|-------|
| Border Radius | 8px |
| Padding | 12px 16px |
| Icon | 16px, left |
| Text | 13px Regular |
| Border Left | 4px solid |

**Variants (Property: `Severity`):**

| Severity | Background | Border | Text | Icon Color |
|----------|-----------|--------|------|------------|
| Info | #E8F0FE | #1A73E8 | #212121 | #1A73E8 |
| Warning | #FFF8E1 | #FFB300 | #212121 | #FFB300 |
| Error | #FFEBEE | #FF1744 | #212121 | #FF1744 |
| Success | #E8F5E9 | #00C853 | #212121 | #00C853 |

---

## 6. List Row 列表行

### 6.1 Row/Market
| Property | Value |
|----------|-------|
| Height | 64px |
| Padding | 0 16px |
| Separator | 1px #F0F0F0 bottom |

**Layout:**
```
┌─────────────────────────────────────────┐
│ [Icon 36×36] Name 15px bold    Price 15px mono│
│              Symbol 13px gray   ▲+2.34% pill │
│              [Exchange Badge]              │
└─────────────────────────────────────────┘
```

### 6.2 Row/Asset
| Property | Value |
|----------|-------|
| Height | 64px |
| Padding | 0 16px |

**Layout:**
```
┌─────────────────────────────────────────┐
│ [Icon 36×36] Name 15px bold    Value $XX mono│
│              Balance 13px gray  ▲+2.34%      │
│              [Exchange Badge]              │
└─────────────────────────────────────────┘
```

### 6.3 Row/Order
| Property | Value |
|----------|-------|
| Min Height | 80px |
| Padding | 12px 16px |
| Border Left | 3px solid (green=buy, red=sell) |
| Border Radius | 8px |
| Background | #FFFFFF |
| Shadow | elevation-1 |

**Layout:**
```
┌───────────────────────────────────────────┐
│▌ BTC/USDT  [限价买入 pill]  [Exchange Badge]│
│▌ Price: 67,234.50    Amount: 0.5 BTC       │
│▌ [████████░░] 60% filled    成交额: $33,617│
│▌ 2026-03-05 14:30            [取消] button  │
└───────────────────────────────────────────┘
```

---

## 7. Switcher 切换器

### 7.1 Switcher/AssetClass
| Property | Value |
|----------|-------|
| Height | 44px |
| Segments | 4: 加密 / 股票 / 外汇 / 商品 |
| Active Segment | bg #1A73E8, text #FFFFFF, radius 8px |
| Inactive Segment | bg transparent, text #757575 |
| Transition | 300ms ease-in-out |
| Container | bg #F5F5F5, radius 8px, padding 4px |

### 7.2 Switcher/BuySell
| Property | Value |
|----------|-------|
| Height | 44px |
| Segments | 2: 买入 / 卖出 |
| Buy Active | bg #00C853, text #FFFFFF |
| Sell Active | bg #FF1744, text #FFFFFF |
| Inactive | bg #F5F5F5, text #757575 |

### 7.3 Switcher/OrderType
| Property | Value |
|----------|-------|
| Height | 36px |
| Type | Tab underline style |
| Tabs | 限价 / 市价 / 止损限价 |
| Active | text #1A73E8, underline 2px #1A73E8 |
| Inactive | text #757575 |

---

## 8. Modal 模态框

### 8.1 Modal/BottomSheet
| Property | Value |
|----------|-------|
| Border Radius | 16px (top-left, top-right only) |
| Handle | 36 × 4px, centered, 8px from top, #BDBDBD |
| Max Height | 90% viewport |
| Overlay | rgba(0,0,0,0.5) |
| Animation | 400ms slide up, ease-in-out |
| Padding | 24px (content area) |

### 8.2 Modal/CoolingOff (ZR创新)
| Property | Value |
|----------|-------|
| Width | 320px |
| Border Radius | 16px |
| Padding | 24px |
| Overlay | rgba(0,0,0,0.5) |

**Structure:**
```
┌────────────────────────────────┐
│        ⚠️ (32px icon)         │
│    大额订单提醒 (20px bold)    │
│                                │
│  此订单占您总资产的 X%          │
│  历史数据: Y% 同等规模亏损     │
│  您近30天胜率: Z%              │
│                                │
│  ┌──────── Progress Bar ─────┐ │
│  │████████████░░░░░░░░░░░░░░│ │
│  └───────────────────────────┘ │
│         28秒 (24px mono red)   │
│                                │
│  [取消]secondary  [继续交易]   │
│                                │
│  ⚠ 无"不再提示"选项(反脆弱)   │
└────────────────────────────────┘
```

### 8.3 Modal/Confirm (SFC Risk)
| Property | Value |
|----------|-------|
| Width | 320px |
| Border Radius | 16px |
| Padding | 24px |

**Structure:**
```
┌────────────────────────────────┐
│  风险确认 (17px Semibold)      │
│                                │
│  虚拟资产交易存在高风险...     │
│  (15px Regular, line-height 22)│
│                                │
│  ☐ 我已阅读并接受风险披露      │
│  [查看完整条款] (link blue)    │
│                                │
│  [取消]       [确认下单]       │
│  secondary    primary/buy/sell │
└────────────────────────────────┘
```

---

## 9. Progress 进度

### 9.1 Progress/StepIndicator (KYC)
| Property | Value |
|----------|-------|
| Steps | 3 |
| Layout | Horizontal, evenly spaced |
| Step Circle | 28px diameter |
| Connector Line | 1px, between circles |

**Step States:**
- Completed: circle #00C853, text #00C853, line #00C853, icon ✓
- Active: circle #1A73E8, text #1A73E8, line #E0E0E0
- Pending: circle #E0E0E0, text #BDBDBD, line #E0E0E0

### 9.2 Progress/FillBar (Order)
| Property | Value |
|----------|-------|
| Height | 4px |
| Border Radius | 2px |
| Track | #F0F0F0 |
| Fill | #00C853 (buy) / #FF1744 (sell) |

### 9.3 Progress/Countdown (Cooling-off)
| Property | Value |
|----------|-------|
| Height | 6px |
| Border Radius | 3px |
| Track | #F0F0F0 |
| Fill | #1A73E8 (brand blue) |
| Duration Text | JetBrains Mono 24px, #FF1744 |

---

## 10. Misc 其他

### 10.1 Divider
- Height: 1px, color #F0F0F0, full-width

### 10.2 Empty State
```
┌────────────────────────────────┐
│        [80px gray circle]      │
│                                │
│    暂无数据 (17px Semibold)    │
│    描述文字 (15px #757575)     │
│                                │
│       [CTA Button]             │
└────────────────────────────────┘
```

### 10.3 Toast Notification
| Property | Value |
|----------|-------|
| Height | 44px |
| Border Radius | 8px |
| Position | Top center, 16px from status bar |
| Background | #212121 (dark) |
| Text | 13px #FFFFFF |
| Icon | 16px left (✓ green / ✗ red / ⚠ amber) |
| Duration | 3s auto-dismiss |

### 10.4 QR Code Frame
| Property | Value |
|----------|-------|
| Size | 160 × 160px |
| Border | 2px #29B6F6 (info blue) |
| Border Radius | 12px |
| Padding | 8px |

### 10.5 SFC Compliance Banner
| Property | Value |
|----------|-------|
| Background | #FEF3C7 (amber) |
| Border Left | 4px #F59E0B |
| Padding | 12px 16px |
| Icon | ⓘ 16px #92400E |
| Text | 13px #92400E |
| Close | X icon 16px, right |

---

## Figma建模建议 Modeling Tips

1. **使用 Auto Layout**: 所有组件用 Auto Layout 搭建，确保响应式缩放
2. **Variables**: 导入 `figma-design-tokens.json` 创建 Color / Spacing / Radius 变量集
3. **Component Properties**: 每个组件设置 Boolean (show/hide slots) + Instance Swap (icon slots) + Variant (style/state)
4. **Naming**: 按 `ZR / Category / Component / Variant` 命名，便于搜索和实例替换
5. **Base Components**: 先建 _Base 内部组件（如 _IconSlot, _TextSlot），再组合成面向使用的组件
6. **Preferred Values**: 对 spacing 和 radius 设置 preferred values，限制设计师只能选择token值

---

*Reference: zr-design-system.md + zr-design-decisions.md + prototypes/*.html*
