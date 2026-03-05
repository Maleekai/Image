# ZR Securities — v0 Prompt 使用指南

> 本指南帮助你将16份v0 Prompt高效转化为交互原型，实现基于OKX + Binance竞品分析的1:1精准设计
>
> **v2.0 更新**: 新增5份Prompt (首页/搜索/设置/理财/闪兑OTC)，补全所有DA/DD/IO覆盖

---

## 快速开始

### 步骤1: 打开 v0.dev
访问 https://v0.dev 并登录

### 步骤2: 选择一个 Prompt 文件
按以下顺序逐个生成（设计系统优先，因为其他页面都依赖它）：

| 顺序 | 文件 | 页面 | 覆盖DA/DD/IO | 预计v0轮次 |
|------|------|------|-------------|-----------|
| **1** | `00-design-system.md` | 全局设计系统组件 | DD-002/007 | 1-2轮 |
| **2** | `11-home-dashboard.md` | 首页仪表盘 ★ (新) | DA-012, IO-005/007/008 | 2-3轮 |
| **3** | `01-market-list.md` | 行情列表页 ★ | DA-013, IO-005/008/009 | 2-3轮 |
| **4** | `12-search.md` | 全局搜索 (新) | DA-010 | 1-2轮 |
| **5** | `02-symbol-detail.md` | 币种详情/K线 | DA-004 | 2-3轮 |
| **6** | `03-trade-order.md` | 交易下单 ★★ | DA-005, IO-001/003, DD-006 | 3-4轮 |
| **7** | `15-convert-otc.md` | 闪兑/OTC ★ (新) | DD-011, IO-003 | 2-3轮 |
| **8** | `04-order-management.md` | 委托管理 | DD-009 | 2-3轮 |
| **9** | `05-assets.md` | 资产总览 ★ | DA-014/015 | 2-3轮 |
| **10** | `06-deposit.md` | 充值 | DA-007/008 | 1-2轮 |
| **11** | `07-withdraw.md` | 提币 | DA-008 | 1-2轮 |
| **12** | `14-earn-products.md` | 理财产品 ★ (新) | DA-016, DD-012 | 2-3轮 |
| **13** | `08-onboarding.md` | 开户流程 | DA-001/002, DD-004/005/008 | 2-3轮 |
| **14** | `13-settings-profile.md` | 设置/安全 ★ (新) | DA-011, IO-004/006, DD-010 | 3-4轮 |
| **15** | `09-heatmap.md` | 热力图 ★ | IO-009 | 2-3轮 |
| **16** | `10-ai-companion.md` | AI认知伴侣 ★★ | IO-002/004/007/010 | 3-4轮 |

★ = 重点页面 | ★★ = 核心差异化页面

### 步骤3: 粘贴 Prompt + 上传参考截图
**关键技巧：v0 支持同时上传图片和文本。配合截图效果会大幅提升。**

---

## 每个 Prompt 的最佳参考截图

### 11-home-dashboard.md (首页) ★ [新增]
上传截图:
- `OKX_iOS/056_Menu_Hub/` — 菜单布局参考
- `OKX_iOS/057_Customize_menu/` — 可定制Grid参考
- `Binance_iOS/006_Home/` — 首页布局(作为反面参考，太社交化)

v0提示语补充: "参考OKX的菜单网格和Binance的首页结构，但ZR首页是数据优先、操作导向的。加入市场时段状态栏和交易所健康迷你行。这些是ZR独有的，截图里没有"

### 01-market-list.md (行情列表)
上传截图:
- `OKX_iOS/011_Markets_page/` — 任意2张 (OKX行情列表基准)
- `Binance_iOS/085_Markets/` — 任意2张 (Binance行情对比)

v0提示语补充: "参考上传的OKX和Binance截图的行情列表布局，但使用ZR的品牌蓝色(#1A73E8)替代它们的品牌色，并加入多资产类别切换器、迷你K线和市场时段状态栏"

### 12-search.md (全局搜索) [新增]
上传截图:
- `OKX_iOS/007_Search/` — OKX搜索覆盖层参考
- `Binance_iOS/085_Markets/` — Binance搜索入口参考

v0提示语补充: "参考OKX的全屏搜索覆盖层，但ZR支持多资产搜索(加密/股票/外汇/商品)和功能页面搜索"

### 02-symbol-detail.md (币种详情)
上传截图:
- `OKX_iOS/014_Market_page_(expanded)/` — K线截图2张
- `Binance_iOS/087_Coin_detail_(Markets)/` — 币种详情2张

v0提示语补充: "参考OKX的K线布局和Binance的社区讨论区域，但ZR不做社区只做数据展示"

### 03-trade-order.md (交易下单) ★★
上传截图:
- `OKX_iOS/020_Trade_page/` — 下单界面2张
- `Binance_iOS/108_Spot_(Trade)/` — 现货交易2张

v0提示语补充: "参考OKX和Binance的下单布局，但ZR需要额外加入'多交易所价格对比'条(4个交易所的实时价格并排)、'交易频率警告'和'追加亏损警告'横幅 — 这些是ZR独有的反脆弱设计"

### 15-convert-otc.md (闪兑/OTC) ★ [新增]
上传截图:
- `OKX_iOS/014_Market_page_(expanded)/` — Convert/Swap参考
- `Binance_iOS/108_Spot_(Trade)/` — Convert tab参考

v0提示语补充: "参考OKX和Binance的闪兑界面，但ZR分为两个模式：即时闪兑(含多交易所最优汇率)和OTC机构询价(替代P2P)。OTC部分截图里没有参考"

### 05-assets.md (资产总览) ★
上传截图:
- `OKX_iOS/031_My_assets/` — 资产页2张
- `Binance_iOS/160_Assets/` — Binance资产页(截图1193.png等)

v0提示语补充: "参考Binance资产列表中每个币种行内的Earn/Trade按钮设计，加入ZR的多交易所聚合展示"

### 14-earn-products.md (理财产品) ★ [新增]
上传截图:
- `OKX_iOS/136_Grow/` — OKX理财中心参考
- `Binance_iOS/120_Earn/` — Binance理财产品参考
- `Binance_iOS/135_Recurring_buy/` — 定投计划参考

v0提示语补充: "参考OKX和Binance的理财产品布局，但ZR的每个产品必须显示SFC审批徽章和风险等级标签。加入定投历史模拟器(回测曲线) — 这是ZR独有的"

### 08-onboarding.md (开户流程)
上传截图:
- `OKX_iOS/001_Onboarding/` — 开户流程3张
- `Binance_iOS/001_Onboarding/` — Binance开户3张

v0提示语补充: "参考两者的单焦点表单设计，但ZR需要在OTP验证后加入'选择交易所'步骤和强制KYC流程"

### 13-settings-profile.md (设置/安全) ★ [新增]
上传截图:
- `OKX_iOS/056_Menu_Hub/` — 菜单中心参考
- `OKX_iOS/058_Settings/` — 设置列表参考
- `OKX_iOS/068_User_center_(Security_tab)/` — 安全Tab参考

v0提示语补充: "参考OKX的菜单和设置布局，但ZR需要加入安全评分Banner(IO-004)、税务导出(IO-006)、交易所费率对比表(DD-010)和通知分类管理。安全评分和税务导出是ZR独有的"

### 09-heatmap.md (热力图) ★
上传截图:
- `Binance_iOS/103_Heatmap/` — Binance热力图(全部5张)
- 可选: 在Google搜索 "finviz heatmap" 截取传统股市热力图作为补充参考

v0提示语补充: "参考Binance的加密热力图，但扩展为4个资产类别区域(加密/股票/外汇/商品)"

### 10-ai-companion.md (AI认知伴侣) ★★
上传截图:
- `Binance_iOS/068_Binance_AI_assistant/526.png` — Opportunity仪表盘
- `Binance_iOS/068_Binance_AI_assistant/528.png` — Token Unlock详情

v0提示语补充: "参考Binance AI Hub的三Tab布局和恐惧贪婪仪表盘，但ZR版本不做任何推荐/建议，只展示中性数据。加入交易所健康状态和安全评分"

---

## v0 对话技巧

### 第一轮: 整体架构
粘贴完整Prompt文件内容 + 上传参考截图
```
请根据以下规格生成一个React组件。这是一个香港合规的多资产交易App的[页面名称]。

[粘贴Prompt全文]

参考上传的截图作为视觉基准，但使用规格中指定的ZR品牌色和布局。
```

### 第二轮: 细节调整
```
请调整以下细节:
1. [具体修改点1]
2. [具体修改点2]
保持其他部分不变。
```

### 第三轮: 交互状态
```
请添加以下交互状态:
1. Loading skeleton效果
2. Empty state (无数据)
3. Error state (加载失败)
4. Tab切换动画
```

### 第四轮: 深色模式
```
请增加深色模式支持:
- 背景: #121212
- Surface: #1E1E1E
- 文字: #FFFFFF
- 保持品牌蓝 #1A73E8 不变
- 涨跌颜色保持不变
使用CSS变量或Tailwind dark: 前缀实现
```

---

## 设计系统一致性检查清单

每个v0生成的页面，确认以下一致性:

- [ ] 品牌蓝 #1A73E8 用于主CTA和活跃状态
- [ ] 涨跌色: 绿 #34A853 / 红 #EA4335
- [ ] 字体: Inter(文字) + JetBrains Mono(数字)
- [ ] 间距: 8px网格, 16px container padding
- [ ] 圆角: 8px(卡片) / 20px(pill按钮) / 12px(modal)
- [ ] 底部TabBar: 5项, 83px高(含safe area)
- [ ] 交易所颜色: HashKey #2962FF / Bullish #00BFA5 / OSL #FF6D00 / VDX #7C4DFF
- [ ] 资产类别颜色: 加密 #F7931A / 股票 #1A73E8 / 外汇 #34A853 / 商品 #FF6D00
- [ ] AI紫色: #7C4DFF (AI生成内容标识)
- [ ] 理财绿色: #00BFA5 (Earn/APY)
- [ ] 安全绿色: #1EC989 (验证/安全)

---

## DA/DD/IO 完整覆盖矩阵

### Direct Adoption (DA) — 从竞品直接借鉴

| ID | 功能 | 覆盖Prompt | 状态 |
|----|------|-----------|------|
| DA-001 | 单焦点表单 | 08-onboarding | ✅ |
| DA-002 | 6位OTP | 08-onboarding, 07-withdraw | ✅ |
| DA-003 | 底部Sheet模态 | 多个页面 | ✅ |
| DA-004 | 盘口分色深度条 | 02-symbol-detail | ✅ |
| DA-005 | 快捷百分比按钮 | 03-trade-order | ✅ |
| DA-006 | 收藏星标+拖拽排序 | 01-market-list | ✅ |
| DA-007 | 充值QR码 | 06-deposit | ✅ |
| DA-008 | 网络选择器 | 06-deposit, 07-withdraw | ✅ |
| DA-009 | 空状态 | 00-design-system (全局) | ✅ |
| DA-010 | 搜索覆盖层 | **12-search** (新增) | ✅ |
| DA-011 | 通知设置 | **13-settings-profile** (新增) | ✅ |
| DA-012 | 可自定义快捷入口 | **11-home-dashboard** (新增) | ✅ |
| DA-013 | 迷你K线 | 01-market-list | ✅ |
| DA-014 | 行内Earn/Trade | 05-assets | ✅ |
| DA-015 | 提现Bottom Sheet | 05-assets | ✅ |
| DA-016 | 定投历史模拟器 | **14-earn-products** (新增) | ✅ |

### Differentiated Design (DD) — ZR差异化

| ID | 功能 | 覆盖Prompt | 状态 |
|----|------|-----------|------|
| DD-001 | 多资产类别 | 01-market-list, 多个 | ✅ |
| DD-002 | 交易所Badge | 00-design-system (全局) | ✅ |
| DD-003 | Exchange/Brokerage模式 | 11-home-dashboard | ✅ |
| DD-004 | 强制KYC | 08-onboarding | ✅ |
| DD-005 | 注册含交易所选择 | 08-onboarding | ✅ |
| DD-006 | SFC风险披露 | 03-trade-order | ✅ |
| DD-007 | 品牌蓝CTA | 00-design-system | ✅ |
| DD-008 | Google+Apple登录 | 08-onboarding | ✅ |
| DD-009 | 按交易所分组订单 | 04-order-management | ✅ |
| DD-010 | 交易所费率对比 | **13-settings-profile** (新增) | ✅ |
| DD-011 | OTC机构询价 | **15-convert-otc** (新增) | ✅ |
| DD-012 | SFC审批理财产品 | **14-earn-products** (新增) | ✅ |

### Innovation Opportunities (IO) — ZR独创

| ID | 功能 | 覆盖Prompt | 状态 |
|----|------|-----------|------|
| IO-001 | 冷静期倒计时 | 03-trade-order | ✅ |
| IO-002 | AI认知伴侣 | 10-ai-companion | ✅ |
| IO-003 | 多交易所价格对比 | 03-trade-order, 15-convert-otc | ✅ |
| IO-004 | 安全评分 | 10-ai-companion, 13-settings-profile | ✅ |
| IO-005 | 市场时段感知 | 01-market-list, 11-home-dashboard | ✅ |
| IO-006 | 税务导出 | **13-settings-profile** (新增) | ✅ |
| IO-007 | 交易所健康状态 | 10-ai-companion, 11-home-dashboard | ✅ |
| IO-008 | 情绪感知 | 01-market-list, 11-home-dashboard | ✅ |
| IO-009 | 多资产热力图 | 09-heatmap | ✅ |
| IO-010 | 交易者画像 | 10-ai-companion | ✅ |

### 策略框架集成 (来自 zhuorui-securities-strategy Skill)

| 模块 | 覆盖Prompt | 具体体现 |
|------|-----------|---------|
| 反脆弱原则1: 冷静期 | 03-trade-order | 28秒冷静期Modal |
| 反脆弱原则1: 交易频率 | 03-trade-order | 每日3+交易警告横幅 |
| 反脆弱原则1: 追加亏损 | 03-trade-order | 亏损头寸加仓警告 |
| 反脆弱原则2: 情绪标注 | 11-home-dashboard | 公告情绪/事实标签 |
| 认知伴侣内容系统 | 10-ai-companion | AI摘要+事件日历+画像 |
| 透明信任协议1: 数据透明 | 13-settings-profile | 审计日志+数据导出 |
| 透明信任协议2: 利益冲突 | 14-earn-products | SFC审批徽章+风险披露 |
| 透明信任协议3: 数据所有权 | 13-settings-profile | 隐私控制+数据导出 |

**所有DA(16个) + DD(12个) + IO(10个) = 38个设计决策，100%已覆盖。**

---

## ZR独创设计清单 (竞品没有的)

v0生成时需特别注意这些独创设计，截图中不会有参考:

| ID | 独创设计 | 出现页面 | 描述 |
|----|---------|---------|------|
| IO-001 | 冷静期倒计时 | 03-trade-order | 大额订单28秒冷静期Modal |
| IO-003 | 多交易所价格对比 | 03-trade-order, 15-convert-otc | 4交易所实时价格并排 |
| IO-004 | 安全评分环形图 | 10-ai-companion, 13-settings | 85/100分 + 提升建议 |
| IO-005 | 市场时段感知 | 01-market-list, 11-home | "NYSE ● 开盘" 状态标签 |
| IO-006 | 税务导出 | 13-settings | CSV/PDF年度税务报告 |
| IO-007 | 交易所健康状态 | 10-ai-companion, 11-home | 4交易所延迟+状态 |
| IO-009 | 多资产热力图 | 09-heatmap | 加密/股票/外汇/商品合并 |
| IO-010 | 交易者画像 | 10-ai-companion | 保守/平衡/激进标签+饼图 |
| DD-002 | 交易所Badge | 全局 | 每笔订单/资产旁的交易所标识 |
| DD-004 | 强制KYC | 08-onboarding | SFC合规3步KYC |
| DD-006 | SFC风险披露 | 03-trade-order | 交易确认中内嵌风险提示 |
| DD-010 | 费率对比表 | 13-settings | 多交易所费率并排对比 |
| DD-011 | OTC机构询价 | 15-convert-otc | 替代P2P的机构RFQ模式 |
| DD-012 | SFC理财产品 | 14-earn-products | SFC审批徽章+风险分级 |
| — | 交易频率警告 | 03-trade-order | 每日3+交易反脆弱提醒 |
| — | 追加亏损警告 | 03-trade-order | 亏损头寸加仓反脆弱提醒 |
| — | 情绪/事实标签 | 11-home-dashboard | 公告内容的情绪浓度标注 |

这些设计是ZR的核心差异化，**不会出现在任何竞品截图中**，v0需要完全基于Prompt文字描述来生成。

---

## 文件清单

```
v0-prompts/
├── V0-USAGE-GUIDE.md          ← 本文件 (v2.0)
├── 00-design-system.md        ← 全局组件系统
├── 01-market-list.md          ← 行情列表 ★ (含迷你K线+情绪卡片+市场时段)
├── 02-symbol-detail.md        ← 币种详情/K线
├── 03-trade-order.md          ← 交易下单 ★★ (含价格对比+冷静期+反脆弱警告)
├── 04-order-management.md     ← 委托管理
├── 05-assets.md               ← 资产总览 ★ (含行内Earn/Trade+提现Sheet)
├── 06-deposit.md              ← 充值
├── 07-withdraw.md             ← 提币
├── 08-onboarding.md           ← 开户流程 (含交易所选择+强制KYC)
├── 09-heatmap.md              ← 热力图 ★ (IO-009)
├── 10-ai-companion.md         ← AI认知伴侣 ★★ (IO-002/004/007/010)
├── 11-home-dashboard.md       ← 首页仪表盘 ★ (新增, DA-012/IO-005/007/008)
├── 12-search.md               ← 全局搜索 (新增, DA-010)
├── 13-settings-profile.md     ← 设置/安全 ★ (新增, DA-011/IO-004/006/DD-010)
├── 14-earn-products.md        ← 理财产品 ★ (新增, DA-016/DD-012)
└── 15-convert-otc.md          ← 闪兑/OTC ★ (新增, DD-011/IO-003)
```

Total: **16份自包含Prompt** + 本使用指南
覆盖: **38/38** DA+DD+IO 设计决策 (100%)
