# ZR Securities — 竞品分析到产品原型 全链路工作流索引

> **Version**: v2.0 | **Date**: 2026-03-05 | **Owner**: 余博 (Maleekai) · CPO

---

## 当前状态 Current Status

| Phase | Status | Output |
|-------|--------|--------|
| Phase 0: 截图分类 | ✅ 完成 | GitHub: OKX_iOS/ (74 flows), Binance_iOS/ (248 flows) |
| Phase 1: 竞品学习 | ✅ 完成 | OKX全量分析: okx-complete-analysis.md (74 flows, 429 screenshots) |
| Phase 1.5: 深度像素分析 | ✅ 完成 | 8份design-spec文档 (共174KB), 9份v0 prompt参考文档 |
| Phase 2: 设计决策 | ✅ 完成 | 设计决策总纲 + 设计系统规范 + 9份v0 Prompt (00-08, 共101KB) |
| Phase 3: 原型生成 | ✅ 完成 | 9份React交互原型 (00-08, 共182KB, prototypes/*.html) |
| Phase 4: Figma精调 | ✅ 完成 | 3份Figma参考文档 (Tokens JSON + 组件库 + 逐屏规格, figma-handoff/) |
| Phase 5: 文档更新 | ✅ 完成 | PRD v2.0 (22KB) + FRD v2.0 (28KB), docs/*.docx |
| **Phase 6: Binance竞品分析** | **✅ 完成** | **5模块分析 + 差异报告 + 设计决策v2.0, binance-analysis/** |

---

## 目录结构 Directory Structure

```
Image/ (GitHub repo root)
├── OKX_iOS/                          ← 429张截图, 74个Mobbin Flow文件夹
│   ├── 001_Onboarding/
│   ├── 002_Verifying_account/
│   ├── ...
│   └── 074_Logging_in/
│
├── Binance_iOS/                      ← 1811张截图, 248个Mobbin Flow文件夹
│   ├── 001_Onboarding/
│   ├── ...
│   └── 248_Dynamic_Island/
│
├── zr-skills/                        ← Claude Skills (可安装到Cowork)
│   ├── zr-competitive-design-analysis/   ← Skill 1: 竞品设计分析
│   │   ├── SKILL.md                      ← 主技能文件 (已更新: 引用全量分析)
│   │   ├── references/                   ← 分析指南 + 全量分析
│   │   │   ├── okx-complete-analysis.md  ← ★ OKX全量分析 (74 flows, 342行)
│   │   │   ├── market-analysis-guide.md
│   │   │   ├── trading-analysis-guide.md
│   │   │   └── asset-analysis-guide.md
│   │   └── templates/                    ← 输出模板
│   │       └── design-spec-template.md
│   │
│   └── zr-v0-prompt-generator/           ← Skill 2: v0 Prompt生成器
│       ├── SKILL.md                      ← 主技能文件 (已更新: 融合OKX tokens)
│       ├── references/                   ← v0 Prompt指南 (9模块, 含pixel tokens)
│       │   ├── v0-market-prompts.md      ← ✅ 行情 (pixel tokens表)
│       │   ├── v0-trading-prompts.md     ← ✅ 交易 (pixel tokens表)
│       │   ├── v0-asset-prompts.md       ← ✅ 资产 (pixel tokens表)
│       │   ├── v0-onboarding-prompts.md  ← ✅ 开户/登录 (pixel tokens表)
│       │   ├── v0-settings-prompts.md    ← ✅ 设置/安全 (pixel tokens表)
│       │   ├── v0-earn-prompts.md        ← ✅ 理财/Earn (pixel tokens表)
│       │   ├── v0-order-management-prompts.md ← ✅ 委托管理 (pixel tokens表)
│       │   ├── v0-p2p-convert-prompts.md ← ★ 新增: P2P/兑换/跟单
│       │   └── flow-module-mapping.md    ← Flow→模块映射
│       └── templates/                    ← v0 Prompt模板
│           └── v0-prompt-template.md
│
└── zr-workspace/                     ← 工作产出区（所有Phase输出存这里）
    ├── WORKFLOW-INDEX.md             ← 本文件（全链路索引）
    ├── design-specs/                 ← Phase 1.5 输出：像素级设计规范 (已完成 ✅)
    │   ├── design-spec-01-market-discovery.md     ← ✅ 行情/发现 (14KB)
    │   ├── design-spec-02-trading.md              ← ✅ 交易/K线/下单 (13KB)
    │   ├── design-spec-03-assets-deposit-withdraw.md ← ✅ 资产/充提 (14KB)
    │   ├── design-spec-04-onboarding-login.md     ← ✅ 开户/登录/验证 (28KB)
    │   ├── design-spec-05-home-navigation.md      ← ✅ 首页/导航/搜索 (35KB)
    │   ├── design-spec-06-earn-grow.md            ← ✅ 理财/Earn/结构化产品 (31KB)
    │   ├── design-spec-07-p2p-convert-copy.md     ← ✅ P2P/兑换/跟单/机器人 (13KB)
    │   └── design-spec-08-settings-security.md    ← ✅ 设置/安全/手续费 (26KB)
    ├── design-decisions/             ← Phase 2 输出：设计决策 (已完成 ✅)
    │   ├── zr-design-decisions.md         ← ✅ 设计决策总纲 (12直接借鉴+12差异化+8创新+5原则)
    │   └── zr-design-system.md            ← ✅ 设计系统规范 (色彩/字体/间距/组件)
    ├── v0-prompts/                   ← Phase 2 输出：v0 Prompt集 (已完成 ✅)
    │   ├── 00-design-system.md            ← ✅ 全局设计系统组件
    │   ├── 01-market-list.md              ← ✅ 行情列表页
    │   ├── 02-symbol-detail.md            ← ✅ 币种详情(K线)
    │   ├── 03-trade-order.md              ← ✅ 交易下单(含冷静期)
    │   ├── 04-order-management.md         ← ✅ 委托管理
    │   ├── 05-assets.md                   ← ✅ 资产总览
    │   ├── 06-deposit.md                  ← ✅ 充值页面
    │   ├── 07-withdraw.md                 ← ✅ 提币页面(含安全验证)
    │   └── 08-onboarding.md               ← ✅ 开户流程(5屏)
    ├── docs/                        ← Phase 5 输出：产品文档 (已完成 ✅)
    │   ├── ZR-PRD-v2.0.docx            ← ✅ 产品需求文档 (12章, 22KB)
    │   └── ZR-FRD-v2.0.docx            ← ✅ 功能需求文档 (13章, 28KB)
    ├── figma-handoff/               ← Phase 4 输出：Figma参考文档 (已完成 ✅)
    │   ├── figma-design-tokens.json     ← ✅ Design Tokens (可导入Figma Variables)
    │   ├── figma-component-library.md   ← ✅ 组件库参考 (命名/变体/尺寸/状态)
    │   └── figma-screen-specs.md        ← ✅ 逐屏布局规格 (Frame层级/Auto Layout)
    ├── binance-analysis/            ← Phase 6 输出：Binance竞品分析 (已完成 ✅)
    │   ├── module-01-onboarding.md      ← ✅ 开户/登录模块 (18KB)
    │   ├── module-02-markets.md         ← ✅ 行情/发现模块 (8KB)
    │   ├── module-03-trading.md         ← ✅ 交易/下单模块 (24KB)
    │   ├── module-04-assets.md          ← ✅ 资产/充提模块 (8KB)
    │   ├── module-05-innovation.md      ← ✅ 创新功能模块 (9KB)
    │   ├── binance-vs-okx-differential.md ← ✅ Binance vs OKX差异分析总报告
    │   ├── UI-COMPARISON.md             ← ✅ UI详细对比 (12KB)
    │   ├── IMPLEMENTATION-GUIDE.md      ← ✅ 实施指南 (8KB)
    │   └── README.md                    ← ✅ 分析索引
    └── prototypes/                  ← Phase 3 输出：React交互原型 (已完成 ✅)
        ├── 00-design-system.html          ← ✅ 设计系统组件展示 (20KB)
        ├── 01-market-list.html            ← ✅ 行情列表页 (18KB)
        ├── 02-symbol-detail.html          ← ✅ 币种详情/K线 (23KB)
        ├── 03-trade-order.html            ← ✅ 交易下单(含冷静期) (28KB)
        ├── 04-order-management.html       ← ✅ 委托管理(多交易所) (27KB)
        ├── 05-assets.html                 ← ✅ 资产总览(多交易所聚合) (13KB)
        ├── 06-deposit.html                ← ✅ 充值(3步选币→网络→地址) (14KB)
        ├── 07-withdraw.html               ← ✅ 提币(含OTP安全验证) (16KB)
        └── 08-onboarding.html             ← ✅ 开户流程(5屏KYC) (23KB)
```

---

## Skill 体系 Skill Architecture

三个 Skill 协同工作，覆盖从策略到交付的完整链路：

```
┌─────────────────────────────────────────────────────────────────┐
│                    ZR Securities Skill Stack                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐                                      │
│  │ zhuorui-securities-  │  产品战略框架 (已安装)                 │
│  │ strategy             │  • 苏格拉底五问                       │
│  │                      │  • 三大验收标准                       │
│  │                      │  • 反脆弱交互原则                     │
│  └──────────┬───────────┘                                      │
│             │ 战略指导                                          │
│             ▼                                                   │
│  ┌──────────────────────┐                                      │
│  │ zr-competitive-      │  竞品设计分析 (新建)                  │
│  │ design-analysis      │  • 截图逐屏分析                       │
│  │                      │  • 组件提取                           │
│  │                      │  • 交互模式总结                       │
│  │                      │  • ZR适配建议                         │
│  └──────────┬───────────┘                                      │
│             │ design-spec-*.md                                  │
│             ▼                                                   │
│  ┌──────────────────────┐                                      │
│  │ zr-v0-prompt-        │  v0 Prompt生成器 (新建)               │
│  │ generator            │  • 设计决策文档                       │
│  │                      │  • 设计系统规范                       │
│  │                      │  • 像素级v0 Prompt                   │
│  │                      │  • Flow→模块映射                     │
│  └──────────┬───────────┘                                      │
│             │ v0-prompts/*.md                                   │
│             ▼                                                   │
│  ┌──────────────────────┐                                      │
│  │ v0.dev               │  原型生成 (外部工具)                  │
│  │ (+ Figma)            │  • React可交互原型                    │
│  │                      │  • Figma高保真设计                    │
│  └──────────────────────┘                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Phase 1 执行指南: 竞品截图分析 ✅ 已完成

### 完成状态

OKX全量分析已完成，采用自动化方式一次性分析了全部74个Flow的429张截图：

**产出文件**: `zr-skills/zr-competitive-design-analysis/references/okx-complete-analysis.md`

**覆盖范围**:
| 分组 | Flows | 截图数 | 状态 |
|------|-------|--------|------|
| 开户/登录 | 001-002, 060, 074 | ~25 | ✅ |
| 首页/发现/搜索 | 003-013 | ~60 | ✅ |
| 交易/K线/盘口 | 014-017 | ~25 | ✅ |
| P2P/买卖 | 018-021 | ~30 | ✅ |
| 兑换/机器人/跟单/期权 | 022-025 | ~20 | ✅ |
| 理财/贷款/Jumpstart | 026-031 | ~40 | ✅ |
| 资产/充提/转账/历史 | 032-036, 039 | ~45 | ✅ |
| Web3钱包/NFT/DeFi | 037-055 | ~100 | ✅ |
| 菜单/快捷/设置/安全 | 056-073 | ~70 | ✅ |
| 登录 | 074 | ~14 | ✅ |

**提取产出**: 设计系统tokens、30+组件库、交互模式汇总、8项优势/8项弱点、ZR适配建议

### Binance差异分析（待执行）
Binance的1811张截图（248 Flows）可作为Phase 1.5单独分析，重点关注与OKX的差异点。

---

## Phase 2 执行指南: 设计决策 + v0 Prompt ✅ 已完成

### 前置条件 ✅
Phase 1 OKX全量分析已完成 (`okx-complete-analysis.md`)

### 已完成
- ✅ Skill 1 (`zr-competitive-design-analysis`) 已更新，引用全量分析
- ✅ Skill 2 (`zr-v0-prompt-generator`) 已更新，融合OKX设计tokens
- ✅ v0 Prompt引用文件已扩展到9个模块全覆盖 (原3个→现9个+映射表)
- ✅ 新增模块: 开户/登录、设置/安全、理财/Earn、委托管理、P2P/兑换/跟单
- ✅ 所有v0 Prompt文件已增加像素级design tokens表 (从design-spec提取)
- ✅ 8份design-spec深度像素分析文档已完成 (共174KB):
  - 01-行情发现 | 02-交易 | 03-资产充提 | 04-开户登录 | 05-首页导航 | 06-理财Earn | 07-P2P兑换跟单 | 08-设置安全

### 下一步操作

1. 触发 `zr-v0-prompt-generator` skill 生成：
   - `zr-design-decisions.md` — 设计决策总纲
   - `zr-design-system.md` — 设计系统规范
   - 9份 v0 prompt 文件 (00-08)

---

## Phase 3 执行指南: React 交互原型 ✅ 已完成

### 完成状态

由于v0.dev浏览器自动化不可用，改为直接生成自包含React原型HTML文件。每个文件可在任何浏览器中直接打开，无需构建工具。

**技术栈**: React 18 (CDN) + Babel Standalone (JSX) + Tailwind CSS (CDN) + Inter/JetBrains Mono

**产出文件** (9份, 共182KB):

| # | 文件 | 描述 | 尺寸 |
|---|------|------|------|
| 00 | design-system.html | 14个核心组件展示 (按钮/输入/Badge/Modal等) | 20KB |
| 01 | market-list.html | 行情列表 (4资产类别, 实时价格模拟) | 18KB |
| 02 | symbol-detail.html | 币种详情/K线图 (时间周期切换, 盘口) | 23KB |
| 03 | trade-order.html | 交易下单 (限价/市价, 冷静期28s倒计时) | 28KB |
| 04 | order-management.html | 委托管理 (10条订单, 4交易所, 实时成交模拟) | 27KB |
| 05 | assets.html | 资产总览 (多交易所聚合, 隐藏余额, 粉尘过滤) | 13KB |
| 06 | deposit.html | 充值 (3步: 选币→网络→地址/二维码) | 14KB |
| 07 | withdraw.html | 提币 (4步: 表单→邮箱OTP→手机OTP→成功) | 16KB |
| 08 | onboarding.html | 开户 (5屏: 欢迎→注册→OTP→KYC三步→成功) | 23KB |

**关键交互特性**:
- 所有页面390px移动端视窗, 遵循ZR设计系统
- 多交易所色彩体系 (HashKey蓝/Bullish绿/OSL橙/VDX紫)
- 反脆弱交互: 冷静期倒计时Modal, 安全验证多因子
- SFC合规: 风险披露, KYC流程, 风险评估
- 实时模拟: 价格变动, 订单成交, WebSocket仿真

---

## Phase 4 执行指南: Figma参考文档 ✅ 已完成

### 完成状态

生成3份结构化参考文档，供在Figma中手动搭建高保真设计：

| 文件 | 内容 | 用途 |
|------|------|------|
| `figma-design-tokens.json` | 完整token体系 (色彩/间距/圆角/阴影/排版/布局/动画) | 导入Figma Variables，建立设计变量系统 |
| `figma-component-library.md` | 10大类组件规格 (Button/Input/Nav/Badge/Card/Row/Switcher/Modal/Progress/Misc) | 在Figma中搭建Component Library with Variants |
| `figma-screen-specs.md` | 8个页面的Frame层级结构 + Auto Layout配置 + 组件引用 | 逐屏建模参考，含20+个Figma Frame |

**覆盖范围**:
- 色彩: 50+ tokens (品牌/语义/中性/交易所/资产类别/状态, 含Light+Dark模式)
- 组件: 25+ 组件变体 (含10个Figma Component Property定义)
- 页面: 8个核心页面的完整Frame树 (含多步流程展开为独立Frame)
- 建模建议: Figma Auto Layout / Variables / Component Properties 最佳实践

---

## Phase 5 执行指南: 文档更新 ✅ 已完成

### 完成状态

生成2份专业Word文档 (.docx)，整合Phase 0-4全部产出：

| 文档 | 章节数 | 内容 | 尺寸 |
|------|--------|------|------|
| ZR-PRD-v2.0.docx | 12章 | 执行摘要、问题陈述、目标/非目标、用户故事、需求(P0/P1/P2)、设计原则、成功指标、竞品定位、技术约束、时间线、开放问题、附录 | 22KB |
| ZR-FRD-v2.0.docx | 13章 | 8个功能模块详细规格(开户/行情/详情/交易/委托/资产/充值/提币)、设计系统参考、数据模型、API契约、边界/错误处理 | 28KB |

**文档特性**:
- 封面页 + 目录 + 页眉/页脚/页码
- ZR品牌色 (#1A73E8) 标题样式
- 50+ 详细表格，每个功能点有明确的验收标准
- 12项P0需求 + 6项P1需求 + 6项P2规划
- 3个核心数据模型 (User/Order/Asset) + 16个API端点
- 完整边界场景覆盖 (网络/交易/充提/空态)

---

## Phase 6 执行指南: Binance竞品分析 ✅ 已完成

### 完成状态

对Binance iOS 248个Flow进行按模块抽样分析(42 key flows, ~310 screenshots)，与OKX基准对比：

| 模块 | Flows | 截图数 | 分析文件 |
|------|-------|--------|---------|
| ① 开户/登录 | 001, 002, 245, 246 | 35 | module-01-onboarding.md (18KB) |
| ② 行情/发现 | 006, 085-087, 025, 103, 023, 027, 056, 201 | 80 | module-02-markets.md (8KB) |
| ③ 交易/下单 | 104, 105, 108, 110, 111, 140, 116, 127, 212 | 75 | module-03-trading.md (24KB) |
| ④ 资产/充提 | 160-162, 164, 168, 013, 165, 176, 236 | 55 | module-04-assets.md (8KB) |
| ⑤ 创新功能 | 068-069, 156, 100, 203, 102, 180, 214 | 65 | module-05-innovation.md (9KB) |

**核心产出**:
- **5份模块分析报告**: 每模块含Flow详细分析、设计亮点、设计不足、ZR借鉴点、ZR应避免设计
- **Binance vs OKX差异报告**: 5维度对比矩阵(战略/行情/交易/资产/创新)、竞争力评分
- **设计决策v2.0更新**: 新增DA-013~016(Binance借鉴), IO-009~010(新创新点), IO-002/008升级
- **UI对比文档 + 实施指南**: 10个关键UI对比 + 3阶段开发计划

**关键发现**:
- Binance战略: 从交易所→超级App(社交Square+AI+支付+Stocks)
- ZR差异化确认: 多资产原生、交易所透明、合规即产品、做减法不做加法
- 新增4个Direct Adoption: 迷你K线、行内快捷按钮、提现Bottom Sheet、定投模拟器
- 新增2个Innovation: 多资产热力图(IO-009)、交易者画像(IO-010)

---

## 时间估算

| Phase | 内容 | 预计耗时 |
|-------|------|---------|
| Phase 1 | 8轮竞品截图分析 | 3-4小时 |
| Phase 2 | 设计决策 + v0 Prompt | 1-2小时 |
| Phase 3 | v0原型生成 (9步) | 3-4小时 |
| Phase 4 | Figma精调 | 1-2天 |
| Phase 5 | 文档更新 | 2-3小时 |
| **总计** | | **约2-3个工作日** |

---

*Last Updated: 2026-03-05*
*Maintainer: 余博 (Maleekai) · CPO, ZR Securities*
