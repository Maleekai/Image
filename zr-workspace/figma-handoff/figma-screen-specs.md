# ZR Securities — Figma 逐屏布局规格
> Version: 1.0 | Date: 2026-03-05 | 对应原型: prototypes/00-08.html

所有页面基于 **390 × 844px** (iPhone 14) 视窗。每屏提供精确的Frame层级结构、Auto Layout配置和组件引用。

---

## 通用Frame设置

```
Frame: iPhone 14 (390 × 844)
├── StatusBar (390 × 59, 固定顶部, Dynamic Island)
├── Content (390 × auto, 可滚动)
└── TabBar (390 × 83, 固定底部)
    ├── Bar区域: 49px
    └── SafeArea: 34px
```

**Content可用高度**: 844 − 59 − 83 = **702px**

---

## Screen 01: 行情列表 Market List

**Figma Page**: `01 — Market List`
**原型参考**: `prototypes/01-market-list.html`

### Frame层级
```
iPhone 14 (390 × 844)
├── StatusBar (390 × 59)
│
├── AssetClassSwitcher (358 × 44, padding 16px horizontal)
│   ├── Segment "加密" (auto × 36, active: bg #1A73E8, text white)
│   ├── Segment "股票" (auto × 36, inactive: text #757575)
│   ├── Segment "外汇" (auto × 36)
│   └── Segment "商品" (auto × 36)
│   └── Container: bg #F5F5F5, radius 8px, padding 4px, gap 4px
│
├── CategoryTabs (390 × 36, horizontal scroll)
│   ├── Tab "自选" (auto, active: underline #1A73E8)
│   ├── Tab "热门" (auto)
│   ├── Tab "涨幅" (auto)
│   ├── Tab "跌幅" (auto)
│   ├── Tab "成交量" (auto)
│   └── Tab "新上线" (auto)
│   └── Style: 14px Medium, padding 0 12px each, gap 0
│
├── SortHeader (390 × 44, bg #F5F5F5)
│   ├── "名称" (flex, left, 12px Semibold #757575)
│   ├── "价格" (100px, right-align, 12px Semibold)
│   └── "24h涨跌" (80px, right-align, 12px Semibold)
│
├── MarketList (390 × auto, scrollable)
│   └── MarketRow × N (390 × 64 each)
│       ├── Icon (36 × 36, circle, left 16px)
│       ├── TextGroup (flex)
│       │   ├── Name (15px Bold #212121)
│       │   ├── Symbol (13px Regular #757575)
│       │   └── ExchangeBadge (component instance)
│       ├── Price (15px Mono #212121, right-align)
│       └── ChangeBadge (pill, 13px, green/red)
│       └── Separator: 1px #F0F0F0, left-inset 68px
│
└── TabBar (390 × 83, 行情 tab active)
```

### 关键间距
- AssetClassSwitcher 距 StatusBar: 0px (紧贴)
- CategoryTabs 距 Switcher: 0px
- SortHeader 距 Tabs: 0px
- MarketRow 内部: icon-to-text 12px, text-to-price 8px
- Content padding horizontal: 16px (列表行内)

---

## Screen 02: 币种详情 Symbol Detail

**Figma Page**: `02 — Symbol Detail`
**原型参考**: `prototypes/02-symbol-detail.html`

### Frame层级
```
iPhone 14 (390 × 844)
├── StatusBar (390 × 59)
│
├── NavBar (390 × 44)
│   ├── BackArrow (44 × 44 tap target, left)
│   ├── PairTitle center: "BTC/USDT" (17px Semibold)
│   ├── ExchangeBadge (HashKey, right of title)
│   └── StarIcon (44 × 44, right, 收藏)
│
├── PriceHeader (390 × 80, padding 16px)
│   ├── CurrentPrice (28px Mono Bold #212121)
│   ├── PriceChange (15px Mono, green/red, "▲ +2.34%")
│   └── VolumeRow: "24h Vol: 1,234.5 BTC" (13px #757575)
│
├── ChartArea (390 × 240)
│   ├── TimePeriodTabs (horizontal, 36px)
│   │   └── [1H] [4H] [1D] [1W] [1M] [ALL]
│   │       Active: text #1A73E8, underline
│   │       Inactive: text #757575
│   └── CandlestickChart (390 × 200)
│       └── Figma: 使用矩形模拟K线柱 + 线条
│
├── OrderBook (390 × 200, split view)
│   ├── AsksSection (top half, 红色系)
│   │   └── Row × 5: Price(13px Mono) | Amount | DepthBar(20% opacity red)
│   ├── SpreadRow (center, 13px Mono #757575)
│   └── BidsSection (bottom half, 绿色系)
│       └── Row × 5: Price | Amount | DepthBar(20% opacity green)
│   └── Row height: 28px each
│
├── ActionButtons (390 × 52, padding 16px, gap 12px)
│   ├── BuyButton (flex, 52px, bg #00C853, "买入")
│   └── SellButton (flex, 52px, bg #FF1744, "卖出")
│
└── TabBar (390 × 83, 行情 tab active)
```

---

## Screen 03: 交易下单 Trade Order

**Figma Page**: `03 — Trade Order`
**原型参考**: `prototypes/03-trade-order.html`

### Frame层级
```
iPhone 14 (390 × 844, scrollable)
├── StatusBar (390 × 59)
│
├── Header (390 × 56)
│   ├── CloseButton (44 × 44, X icon, left)
│   └── Title "新订单" (center, 17px Semibold)
│
├── BuySellSwitcher (358 × 44, padding 16px)
│   ├── "买入" (flex, active: bg #00C853, text white)
│   └── "卖出" (flex, inactive: bg #F5F5F5, text #757575)
│
├── OrderTypeTabs (358 × 36, padding 16px)
│   └── [限价] [市价] [止损限价] (underline style)
│
├── FormSection (358 × auto, padding 16px, gap 16px)
│   ├── PriceInput (component: Input/Price)
│   │   ├── Label "限价" (13px #757575)
│   │   └── [−] [price field] [+]
│   ├── AmountInput (component: Input/Amount)
│   │   ├── Label "数量" (13px #757575)
│   │   └── [amount field] [BTC|USDT toggle]
│   ├── QuickPercentRow (gap 8px)
│   │   └── [25%] [50%] [75%] [100%] pill buttons
│   └── AvailableBalance "可用: 50,000 USDT" (13px #757575)
│
├── OrderSummary (358 × 120, component: Card/Summary)
│   ├── Row: "预估总额" | "$35,570.94" (Mono Bold)
│   ├── Row: "手续费 (0.1%)" | "$35.57" (Mono)
│   └── Row: "执行交易所" | [HashKey Badge]
│
├── PlaceOrderButton (358 × 52, full-width)
│   └── "买入 BTC" (bg #00C853) / "卖出 BTC" (bg #FF1744)
│
├── SFCDisclaimer (358 × auto, 13px #757575, center)
│   └── "虚拟资产价格波动剧烈，您可能损失全部投资"
│
└── [No TabBar — modal page]

--- Overlay Modals ---

CoolingOffModal (component: Modal/CoolingOff)
├── 320 × auto, centered
├── WarningIcon 32px
├── Title + body text
├── Stats rows
├── CountdownBar + Timer text
└── [取消] [继续交易] buttons

SFCRiskModal (component: Modal/Confirm)
├── 320 × auto, centered
├── Title + disclaimer text
├── Checkbox + terms link
└── [取消] [确认下单] buttons
```

---

## Screen 04: 委托管理 Order Management

**Figma Page**: `04 — Order Management`
**原型参考**: `prototypes/04-order-management.html`

### Frame层级
```
iPhone 14 (390 × 844)
├── StatusBar (390 × 59)
│
├── NavBar (390 × 44)
│   └── Title "委托管理" (center, 17px Semibold)
│
├── OrderTabs (390 × 44, padding 16px)
│   ├── "当前委托 (3)" (active, underline #1A73E8)
│   ├── "历史委托" (inactive)
│   └── "成交记录" (inactive)
│   └── Count badge: 13px mono, in tab label
│
├── FilterRow1: AssetClassChips (390 × 36, horizontal scroll, padding 16px)
│   └── [全部] [加密] [股票] [外汇] [商品]
│       Active: bg #1A73E8, text white
│       Inactive: bg #F5F5F5, text #757575
│
├── FilterRow2: ExchangeChips (390 × 36, horizontal scroll, padding 16px)
│   └── [全部] [HashKey] [Bullish] [OSL] [VDX]
│       Active: 各交易所品牌色bg, text white
│       Inactive: bg #F5F5F5, text #757575
│
├── OrderList (390 × auto, scrollable, padding 16px, gap 12px)
│   └── OrderCard × N (component: Row/Order)
│       ├── LeftBorder 3px (green=buy, red=sell)
│       ├── Header: PairName + OrderTypePill + ExchangeBadge
│       ├── Details: Price | Amount | Turnover
│       ├── FillProgressBar (component: Progress/FillBar)
│       ├── Footer: Timestamp + CancelButton
│       └── 点击展开 → OrderDetailModal
│
└── TabBar (390 × 83, 交易 tab active)

--- Overlay ---
CancelModal (component: Modal/Confirm variant)
OrderDetailModal (component: Modal/BottomSheet)
```

---

## Screen 05: 资产总览 Assets

**Figma Page**: `05 — Assets`
**原型参考**: `prototypes/05-assets.html`

### Frame层级
```
iPhone 14 (390 × 844)
├── StatusBar (390 × 59)
│
├── NavBar (390 × 44)
│   ├── Title "资产" (left, 17px Semibold)
│   └── EyeIcon (44 × 44, right, 隐藏余额toggle)
│
├── TotalValueCard (358 × 100, padding 16px)
│   ├── Label "总资产估值" (13px #757575)
│   ├── CurrencyToggle [HKD] [USD] [BTC] (chips, right of label)
│   ├── TotalValue (28px Mono Bold, "HK$ 1,234,567.89")
│   │   └── Hidden state: "HK$ ••••••"
│   └── PnLRow: "+$12,345.67 (+1.2%)" (15px, green/red)
│
├── QuickActions (358 × 64, 4 icons in row, padding 16px)
│   ├── 充值 (icon + label, 44 × 44)
│   ├── 提币 (icon + label)
│   ├── 划转 (icon + label)
│   └── 兑换 (icon + label)
│   └── Each: icon 24px, label 11px, gap 4px, centered
│
├── ExchangeSummary (358 × auto, 2-column grid, padding 16px, gap 12px)
│   └── ExchangeCard × 4 (each ~170 × 80)
│       ├── ExchangeBadge (top-left)
│       ├── StatusDot (online/offline, 8px)
│       └── Value (17px Mono Bold)
│
├── AssetTabs (390 × 36)
│   └── [全部] [加密] [股票] [外汇] [商品]
│
├── SortRow (358 × 28, padding 16px)
│   ├── SortDropdown "按市值 ▾" (left)
│   └── DustFilter "隐藏小额 (<$10)" toggle (right)
│
├── AssetList (390 × auto, scrollable)
│   └── AssetRow × N (component: Row/Asset)
│
└── TabBar (390 × 83, 资产 tab active)
```

---

## Screen 06: 充值 Deposit

**Figma Page**: `06 — Deposit`
**原型参考**: `prototypes/06-deposit.html`

### 3-Step Flow (每步一个Figma Frame)

#### Step 1: 选择币种
```
iPhone 14 (390 × 844)
├── StatusBar (390 × 59)
├── NavBar: "充值" + BackArrow
├── SearchInput (358 × 48, padding 16px)
├── CoinGrid (358 × auto, 4-column, gap 12px, padding 16px)
│   └── CoinCell × 8 (each ~80 × 80)
│       ├── Icon (36 × 36, circle, centered)
│       ├── Symbol (13px Bold, centered)
│       └── Name (11px #757575, centered)
│       └── Tap → Step 2
└── [No TabBar]
```

#### Step 2: 选择网络
```
├── NavBar: "选择网络" + BackArrow
├── SelectedCoinHeader (358 × 56)
│   └── Icon + Name + Symbol
├── NetworkList (358 × auto, gap 8px, padding 16px)
│   └── NetworkOption × 3 (358 × 72 each)
│       ├── RadioButton (left)
│       ├── NetworkName (15px Bold) + "推荐" badge (optional)
│       ├── Details: fee | arrival time | confirmations
│       └── Active: border 2px #1A73E8
└── Notices: warning cards ×2 (component: Card/Notice)
```

#### Step 3: 充值地址
```
├── NavBar: "充值 BTC" + BackArrow
├── QRCodeFrame (160 × 160, centered, component: QR Code Frame)
├── AddressDisplay (358 × auto)
│   ├── Label "充值地址" (13px #757575)
│   ├── Address (13px Mono, word-break)
│   └── ActionRow: [复制] [分享] buttons
├── NoticeCards × 4 (component: Card/Notice, warning/error variants)
│   ├── 最低充值金额 (amber)
│   ├── 确认次数 (amber)
│   ├── 充错网络警告 (red)
│   └── 智能合约警告 (amber)
```

---

## Screen 07: 提币 Withdraw

**Figma Page**: `07 — Withdraw`
**原型参考**: `prototypes/07-withdraw.html`

### 4-Step Flow

#### Step 1: 填写表单
```
├── NavBar: "提币" + BackArrow
├── ProgressBar (3-step: 填写 → 邮箱验证 → 手机验证)
├── AddressInput (358 × 48)
│   ├── Input with placeholder
│   ├── ValidationIcon (right, spinner → ✓/✗)
│   └── ActionIcons: [QR扫描] [地址簿]
├── NetworkSelector (358 × 44)
│   └── [Bitcoin] [Lightning] segmented
├── AmountInput (component: Input/Amount)
│   ├── "全部" max button (right)
│   └── Available balance display below
├── FeePreview (component: Card/Summary)
│   ├── 网络手续费
│   └── 实际到账金额
├── WarningNotice (red, component: Card/Notice)
└── SubmitButton "提交提币" (52px, primary)
```

#### Step 2-3: OTP验证 (邮箱/手机)
```
├── NavBar: "安全验证" + BackArrow
├── ProgressBar (step 2 or 3 active)
├── InstructionText (center)
│   └── "已发送验证码至 m***@zr.hk"
├── OTPInput (component: Input/OTP, 6 boxes)
├── ResendSection
│   ├── "未收到验证码？"
│   └── Countdown "60秒后重发" / "重新发送" link
└── [Auto-submit on 6th digit]
```

#### Step 4: 成功
```
├── SuccessIcon (64px green circle, centered)
├── Title "提币已提交" (20px Bold)
├── TransactionSummary (component: Card/Summary)
│   ├── 币种 + 数量
│   ├── 网络
│   ├── 地址 (truncated)
│   └── 预计到账
└── DoneButton "完成" (52px, primary)
```

---

## Screen 08: 开户流程 Onboarding

**Figma Page**: `08 — Onboarding`
**原型参考**: `prototypes/08-onboarding.html`

### 5-Screen Flow

#### Screen 1: Welcome
```
Frame (390 × 844, centered content)
├── Logo (80 × 80, centered, top 120px)
├── Tagline (16px #757575, centered)
├── FeatureCards × 3 (horizontal scroll or stacked)
│   └── Each: icon + title + description
├── CreateAccountButton (52px, primary, full-width -32px)
├── LoginButton (52px, secondary, full-width -32px)
├── SocialDivider "Or continue with" (line + text + line)
├── SocialButtons: [Google] [Apple] (44 × 44 circles, gap 8px)
└── SFCBadge (pill, bottom, shield icon + "SFC Licensed")
```

#### Screen 2: Sign Up
```
├── NavBar: BackArrow + "注册"
├── PhoneEmailToggle ([手机] [邮箱] pills)
├── CountryCodeSelector (+852, with flag, tap → modal)
├── PhoneInput (component: Input/Text)
├── ExchangeSelection (4 radio options)
│   └── Each: logo 32px + name + description + radio
│   └── Selected: border 2px #1A73E8, bg #E8F0FE tint
├── TermsCheckbox (12px, required asterisk)
└── NextButton (52px, primary, disabled until valid)
```

#### Screen 3: OTP
```
├── NavBar: BackArrow + "验证"
├── Title "验证您的手机" (16px Bold)
├── Subtitle (masked number, 13px #757575)
├── OTPInput (component: Input/OTP)
├── ResendSection (countdown / resend link)
└── [Auto-submit → KYC]
```

#### Screen 4: KYC (3 Sub-steps)
```
├── NavBar: BackArrow + "身份验证"
├── StepProgress (component: Progress/StepIndicator)
│   └── [基本信息] — [证件上传] — [风险评估]
├── SFCBanner (component: SFC Compliance Banner)
│
├── KYC Step 1/3: Basic Info
│   ├── IDTypeSelector (HKID / Passport radio)
│   ├── FullNameInput
│   ├── IDNumberInput
│   ├── DOBInput (date picker)
│   └── NextButton
│
├── KYC Step 2/3: Document Upload
│   ├── UploadZone × 3 (front / back / selfie)
│   │   └── Each: dashed border, icon, tap-to-upload
│   │   └── After upload: thumbnail + replace link
│   └── NextButton
│
├── KYC Step 3/3: Risk Assessment
│   ├── RiskOptions × 3 (radio cards)
│   │   ├── 保守型: low risk, green accent
│   │   ├── 稳健型: moderate, blue accent
│   │   └── 进取型: aggressive, red accent
│   ├── SFCComplianceNotice (13px #757575)
│   └── SubmitButton "完成验证"
```

#### Screen 5: Success
```
├── SuccessAnimation (green circle 80px, centered)
├── Title "注册成功" (24px Bold)
├── SelectedExchanges (badge list)
├── ReviewNotice "预计1-2个工作日完成审核" (13px #757575)
├── StatusCard (审核进度)
└── StartButton "开始探索" (52px, primary)
```

---

## Figma Page组织建议

```
Figma File: "ZR Securities — Mobile App"
├── 📄 Cover (项目封面)
├── 📄 Design System (Tokens + Components)
│   ├── Colors (swatches)
│   ├── Typography (type scale)
│   ├── Icons (icon set)
│   └── Components (所有组件 with variants)
├── 📄 01 — Market List
├── 📄 02 — Symbol Detail
├── 📄 03 — Trade Order
├── 📄 04 — Order Management
├── 📄 05 — Assets
├── 📄 06 — Deposit (3 frames)
├── 📄 07 — Withdraw (4 frames)
├── 📄 08 — Onboarding (5 frames)
└── 📄 Flows (Prototype连线)
```

**总Frame数**: ~20 frames (部分页面有多步流程)

---

*Source: v0-prompts/*.md + prototypes/*.html + zr-design-system.md + zr-design-decisions.md*
