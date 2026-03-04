# ZR Securities — Design Decision Document
> Version: 1.0 | Date: 2026-03-04 | Author: 余博 (Maleekai) · CPO
> Source: OKX全量分析 (74 flows, 429 screenshots) + 8份像素级design-spec

---

## 1. Direct Adoption 直接借鉴

来自OKX的成熟模式，经验证可直接采用：

| ID | Pattern | Source | Screens Applied | Rationale |
|----|---------|--------|-----------------|-----------|
| DA-001 | 单焦点表单（每屏只有一个输入） | OKX Onboarding | 注册、验证、KYC | 降低认知负荷，OKX验证转化率更高 |
| DA-002 | 6位OTP输入框 (56×56px, 8px radius, 8px gap, auto-advance) | OKX Flow 002 | OTP验证 | 行业标准，用户已有肌肉记忆 |
| DA-003 | 底部Sheet模态 (16px顶部圆角, 可拖拽关闭) | OKX全局 | 筛选器、选择器、确认 | iOS原生体验，无学习成本 |
| DA-004 | 盘口分色深度条 (绿色bid/红色ask, 20%透明度填充) | OKX Flow 014 | K线交易页 | 直观显示深度，专业交易员已习惯 |
| DA-005 | 快捷百分比按钮 [25%][50%][75%][100%] | OKX Flow 014 | 下单表单 | 减少手动输入，减少错误 |
| DA-006 | 收藏星标 + 拖拽排序编辑模式 | OKX Flows 011-013 | 行情自选 | 标准自选管理模式 |
| DA-007 | 充值QR码居中160×160px + 地址复制按钮 | OKX Flow 033 | 充值页 | 清晰展示，防错误操作 |
| DA-008 | 网络选择器 (radio buttons + 费用 + 预计到账时间) | OKX Flow 033 | 充值/提币 | 帮助用户选择最优网络 |
| DA-009 | 空状态 (居中插画 + 标题 + 描述 + CTA) | OKX全局 | 所有列表空态 | 引导用户下一步操作，不留空白 |
| DA-010 | 搜索覆盖层 (全屏, 自动聚焦, 实时结果, debounce) | OKX Flows 007-009 | 全局搜索 | 标准移动端搜索模式 |
| DA-011 | 渐进式披露的通知设置 (按类别分组toggles) | OKX Flow 070 | 通知设置 | 用户可精细控制通知 |
| DA-012 | 可自定义快捷入口Grid (4个位置, 编辑模式) | OKX Flow 057 | 首页菜单 | 个性化首页体验 |

---

## 2. Differentiated Design 差异化设计

ZR因多市场/多交易所/合规要求必须不同：

| ID | Area | OKX Approach | ZR Approach | Rationale |
|----|------|-------------|-------------|-----------|
| DD-001 | 资产类别 | 纯加密货币 | 多资产类别切换: `[加密] [股票] [外汇] [商品]` | ZR是多市场经纪商，不是纯交易所 |
| DD-002 | 交易所标识 | 单交易所（OKX自身） | 每笔订单/资产旁显示交易所Badge (HashKey/Bullish/OSL/VDX) | 多交易所架构透明化 |
| DD-003 | 双模式架构 | Exchange / Wallet (CEX vs Web3) | Exchange / Brokerage (交易所 vs 经纪模式) | ZR不做Web3钱包，改为经纪服务 |
| DD-004 | KYC流程 | 延迟KYC（可先体验） | 强制KYC在交易前 (SFC合规) + 3步进度条 | 香港SFC要求必须先身份验证 |
| DD-005 | 注册流程 | 手机/邮箱 → OTP → Done | 手机/邮箱 → OTP → 选择交易所 → KYC → Done | ZR需要用户绑定具体交易所 |
| DD-006 | 风险披露 | 仅在法律文档中 | 交易确认弹窗中内嵌SFC风险提示 | SFC合规要求在交易触点披露风险 |
| DD-007 | CTA按钮颜色 | 黑色 (#000000) 为主CTA | 品牌蓝 (#1A73E8) 为主CTA | ZR品牌识别度，蓝色传递信任感 |
| DD-008 | 社交登录 | Google + Apple + Telegram | Google + Apple (无Telegram) | 合规考虑，Telegram在金融领域敏感 |
| DD-009 | 订单列表 | 按币对分组 | 按交易所 + 资产类别双重分组 | 用户需要跨交易所查看订单 |
| DD-010 | 手续费显示 | VIP等级制 | VIP等级 + 每交易所费率对比表 | 多交易所费率差异需透明展示 |
| DD-011 | P2P模式 | C2C商户市场 | OTC机构询价 (RFQ) + 大宗交易 | ZR面向机构和高净值用户 |
| DD-012 | Earn产品 | 多种DeFi/CeFi产品 | SFC批准的结构化产品 + 风险等级标注 | 合规限制，需SFC审批 |

---

## 3. Innovation Opportunities 创新机会

OKX/Binance的弱点 → ZR的差异化优势：

| ID | Opportunity | Why Competitors Miss It | ZR Solution | Impact |
|----|------------|------------------------|-------------|--------|
| IO-001 | 大额订单冷静期 | OKX只有确认弹窗，无延时 | 超过组合20%的订单: 28秒冷静倒计时 + 历史胜率数据 + "Wait/Proceed" | 减少冲动交易导致的亏损，符合反脆弱原则 |
| IO-002 | 认知伴侣内容 | OKX的教育内容与交易页分离 | 在交易确认页显示"相似行情下的历史表现"、"你的30天胜率" | 辅助决策而非阻碍决策 |
| IO-003 | 多交易所价格对比 | OKX只显示自身价格 | 下单时显示"HashKey: $67,234 | Bullish: $67,228 | OSL: $67,240" | 用户获得最优执行价，信任提升 |
| IO-004 | 安全评分可视化 | OKX安全设置是散列的toggle | 环形进度图 + 分数 (如85/100) + "提升建议" | 激励用户启用更多安全措施 |
| IO-005 | 市场时段感知 | OKX 24/7 无市场时段概念 | 股票/外汇展示市场状态: "NYSE ● 开盘中" / "🌙 盘后" | 多资产必须，防止用户在闭市时困惑 |
| IO-006 | 税务导出 | OKX无CSV导出 | 交易历史 + "导出CSV (税务申报)" 按钮 | 香港税务合规，高净值用户刚需 |
| IO-007 | 交易所健康状态 | OKX不显示系统状态 | 首页交易所卡片: "HashKey ●活跃 | Bullish ○维护中" | 透明化运营状态，降低用户焦虑 |
| IO-008 | 情绪感知通知 | OKX通知纯信息型 | 大幅波动时附加"当前市场恐慌指数: 28 (极度恐惧)" | 帮助用户理性判断，不跟风操作 |

---

## 4. Design Principles 设计原则

从战略框架 + 竞品分析推导出的5条核心设计原则：

### P1: 清醒优于愉悦 (Sober over Pleasurable)
每个涉及资金的页面，清晰度优先于视觉愉悦。不用动画掩盖信息，不用深色背景制造紧迫感。

**实践**: 交易确认弹窗必须列出完整信息 (币对、价格、数量、费用、交易所)，不允许"不再提示"选项。

### P2: 多市场原生 (Multi-Market Native)
资产类别切换必须如Tab切换一样自然，不能感觉像"附加功能"。

**实践**: 底部TabBar第二位是"行情"，进入后顶部有 `[加密] [股票] [外汇] [商品]` 平级切换器。

### P3: 交易所透明 (Exchange Transparent)
用户在任何时刻都必须知道哪个交易所在处理他们的交易。

**实践**: 订单详情、资产列表、交易确认中都显示交易所Badge。颜色编码: HashKey #2962FF, Bullish #00BFA5, OSL #FF6D00, VDX #7C4DFF。

### P4: 合规可见 (Compliance Visible)
监管披露融入流程，而不是藏在法律文档里。

**实践**: KYC前显示SFC警示Banner (amber bg); 交易确认弹窗底部显示"虚拟资产价格波动剧烈，您可能损失全部投资"; Earn产品页顶部显示SFC审批状态。

### P5: 默认信任 (Trust by Default)
主动展示数据来源、执行场所、费用明细。

**实践**: 行情页显示数据来源; 下单页显示"执行场所: HashKey"; 充值页显示"请仔细核对网络，充错网络=永久丢失"的红色警告。

---

## 5. Component Decisions 组件级决策

### 5.1 Primary CTA Button
```
OKX: 黑色 (#000000), 52px高, pill shape (26px radius)
ZR:  品牌蓝 (#1A73E8), 52px高, pill shape (26px radius)
     Buy场景: 绿色 (#00C853)
     Sell场景: 红色 (#FF1744)
     Disabled: 灰色 (#E5E5EA)
```

### 5.2 Bottom Tab Bar
```
OKX: [OKX] [Discover] [Trade] [Grow] [Assets]
ZR:  [首页] [行情] [交易] [资产] [更多]
     5个Tab, 83px高(含safe area), 品牌蓝active indicator
```

### 5.3 Asset Class Switcher (ZR创新)
```
位置: 行情页顶部, Nav bar下方
高度: 44px
样式: Segmented control
选中: 填充品牌蓝 #1A73E8, 白色文字
未选: 透明背景, 灰色文字 #757575
切换: 300ms cross-fade动画
Segments: [加密] [股票] [外汇] [商品]
```

### 5.4 Exchange Badge
```
位置: 资产/订单行内, 币对名下方或右侧
大小: auto width × 20px高
样式: 12px text, 10px radius pill
颜色:
  HashKey:  bg #E8EEFF, text #2962FF
  Bullish:  bg #E0F7F0, text #00BFA5
  OSL:      bg #FFF3E0, text #FF6D00
  VDX:      bg #EDE7F6, text #7C4DFF
```

### 5.5 Cooling-Off Modal (ZR创新)
```
触发: order_amount > 20% of portfolio_value
延时: 28秒倒计时
内容:
  - ⚠️ 大额订单提醒
  - "此订单占您总资产的 {X}%"
  - "历史数据显示: {Y}% 的同等规模订单产生亏损"
  - "您近30天胜率: {Z}%"
  - [等待 28秒...] (进度条)
  - [取消] [继续交易]
样式: Modal overlay, 16px radius, 24px padding
注意: 没有"不再提示"选项 (反脆弱原则)
```

---

## 6. Screen Priority Matrix 页面优先级矩阵

Phase 3 v0原型生成顺序：

| Priority | Screen | Complexity | Dependencies |
|----------|--------|-----------|-------------|
| P0 | Design System (全局组件) | High | None |
| P1 | 行情列表 + 资产类别切换器 | Medium | Design System |
| P2 | 币种详情 (K线 + 盘口) | High | Design System |
| P3 | 交易下单 (含冷静期弹窗) | High | Design System, 币种详情 |
| P4 | 资产总览 (含交易所摘要) | Medium | Design System |
| P5 | 充值页 (QR + 网络选择) | Medium | Design System |
| P6 | 提币页 (地址 + 安全验证) | Medium | Design System |
| P7 | 委托管理 (含跨交易所) | Medium | Design System |
| P8 | 开户流程 (含交易所选择 + KYC) | High | Design System |

---

*Last Updated: 2026-03-04*
*Next: zr-design-system.md → 9份v0 Prompt*
