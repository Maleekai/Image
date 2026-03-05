# ZR Securities — v0 Prompt 使用指南

> 本指南帮助你将11份v0 Prompt高效转化为交互原型，实现基于OKX + Binance竞品分析的1:1精准设计

---

## 快速开始

### 步骤1: 打开 v0.dev
访问 https://v0.dev 并登录

### 步骤2: 选择一个 Prompt 文件
按以下顺序逐个生成（设计系统优先，因为其他页面都依赖它）：

| 顺序 | 文件 | 页面 | 预计v0轮次 |
|------|------|------|-----------|
| **1** | `00-design-system.md` | 全局设计系统组件 | 1-2轮 |
| **2** | `01-market-list.md` | 行情列表页 ★ | 2-3轮 |
| **3** | `02-symbol-detail.md` | 币种详情/K线 | 2-3轮 |
| **4** | `03-trade-order.md` | 交易下单 ★★ | 3-4轮 |
| **5** | `04-order-management.md` | 委托管理 | 2-3轮 |
| **6** | `05-assets.md` | 资产总览 ★ | 2-3轮 |
| **7** | `06-deposit.md` | 充值 | 1-2轮 |
| **8** | `07-withdraw.md` | 提币 | 1-2轮 |
| **9** | `08-onboarding.md` | 开户流程 | 2-3轮 |
| **10** | `09-heatmap.md` | 热力图 ★ (新) | 2-3轮 |
| **11** | `10-ai-companion.md` | AI认知伴侣 ★★ (新) | 3-4轮 |

★ = 重点页面(含Binance新发现) | ★★ = 核心差异化页面

### 步骤3: 粘贴 Prompt + 上传参考截图
**关键技巧：v0 支持同时上传图片和文本。配合截图效果会大幅提升。**

---

## 每个 Prompt 的最佳参考截图

### 01-market-list.md (行情列表)
上传截图:
- `OKX_iOS/011_Markets_page/` — 任意2张 (OKX行情列表基准)
- `Binance_iOS/085_Markets/` — 任意2张 (Binance行情对比)

v0提示语补充: "参考上传的OKX和Binance截图的行情列表布局，但使用ZR的品牌蓝色(#1A73E8)替代它们的品牌色，并加入多资产类别切换器和迷你K线"

### 02-symbol-detail.md (币种详情)
上传截图:
- `OKX_iOS/014_Market_page_(expanded)/` — K线截图2张
- `Binance_iOS/087_Coin_detail_(Markets)/` — 币种详情2张

v0提示语补充: "参考OKX的K线布局和Binance的社区讨论区域，但ZR不做社区只做数据展示"

### 03-trade-order.md (交易下单) ★★
上传截图:
- `OKX_iOS/020_Trade_page/` — 下单界面2张
- `Binance_iOS/108_Spot_(Trade)/` — 现货交易2张

v0提示语补充: "参考OKX和Binance的下单布局，但ZR需要额外加入'多交易所价格对比'条(4个交易所的实时价格并排) — 这是ZR独有的，截图里没有"

### 05-assets.md (资产总览) ★
上传截图:
- `OKX_iOS/031_My_assets/` — 资产页2张
- `Binance_iOS/160_Assets/` — Binance资产页(截图1193.png等)

v0提示语补充: "参考Binance资产列表中每个币种行内的Earn/Trade按钮设计，加入ZR的多交易所聚合展示"

### 08-onboarding.md (开户流程)
上传截图:
- `OKX_iOS/001_Onboarding/` — 开户流程3张
- `Binance_iOS/001_Onboarding/` — Binance开户3张

v0提示语补充: "参考两者的单焦点表单设计，但ZR需要在OTP验证后加入'选择交易所'步骤和强制KYC流程"

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

---

## ZR独创设计清单 (竞品没有的)

v0生成时需特别注意这些独创设计，截图中不会有参考:

| ID | 独创设计 | 出现页面 | 描述 |
|----|---------|---------|------|
| IO-001 | 冷静期倒计时 | 03-trade-order | 大额订单28秒冷静期Modal |
| IO-003 | 多交易所价格对比 | 03-trade-order | 4交易所实时价格并排 |
| IO-004 | 安全评分环形图 | 10-ai-companion | 85/100分 + 提升建议 |
| IO-005 | 市场时段感知 | 01-market-list | "NYSE ● 开盘" 状态标签 |
| IO-007 | 交易所健康状态 | 10-ai-companion | 4交易所延迟+状态 |
| IO-009 | 多资产热力图 | 09-heatmap | 加密/股票/外汇/商品合并 |
| DD-002 | 交易所Badge | 全局 | 每笔订单/资产旁的交易所标识 |
| DD-004 | 强制KYC | 08-onboarding | SFC合规3步KYC |
| DD-006 | SFC风险披露 | 03-trade-order | 交易确认中内嵌风险提示 |

这些设计是ZR的核心差异化，**不会出现在任何竞品截图中**，v0需要完全基于Prompt文字描述来生成。

---

## 文件清单

```
v0-prompts/
├── V0-USAGE-GUIDE.md          ← 本文件
├── 00-design-system.md        ← 全局组件系统 (8KB)
├── 01-market-list.md          ← 行情列表 ★ (含迷你K线+情绪卡片)
├── 02-symbol-detail.md        ← 币种详情/K线 (12KB)
├── 03-trade-order.md          ← 交易下单 ★★ (含多交易所价格对比+冷静期)
├── 04-order-management.md     ← 委托管理 (12KB)
├── 05-assets.md               ← 资产总览 ★ (含行内Earn/Trade+提现Sheet)
├── 06-deposit.md              ← 充值 (12KB)
├── 07-withdraw.md             ← 提币 (16KB)
├── 08-onboarding.md           ← 开户流程 (24KB)
├── 09-heatmap.md              ← 热力图 ★ (新增, IO-009)
└── 10-ai-companion.md         ← AI认知伴侣 ★★ (新增, IO-002/004/007)
```

Total: 11份自包含Prompt + 本使用指南
