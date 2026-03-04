# ZR Securities — 竞品分析到产品原型 全链路工作流索引

> **Version**: v1.0 | **Date**: 2026-03-04 | **Owner**: 余博 (Maleekai) · CPO

---

## 当前状态 Current Status

| Phase | Status | Output |
|-------|--------|--------|
| Phase 0: 截图分类 | ✅ 完成 | GitHub: OKX_iOS/ (74 flows), Binance_iOS/ (248 flows) |
| Phase 1: 竞品学习 | ✅ 完成 | OKX全量分析: okx-complete-analysis.md (74 flows, 429 screenshots) |
| Phase 1.5: 深度像素分析 | ✅ 完成 | 8份design-spec文档 (共174KB), 9份v0 prompt参考文档 |
| Phase 2: 设计决策 | ✅ 完成 | 设计决策总纲 + 设计系统规范 + 9份v0 Prompt (00-08, 共101KB) |
| Phase 3: 原型生成 | 🔲 待开始 | → v0.dev 在线原型 |
| Phase 4: Figma精调 | 🔲 待开始 | → Figma 高保真设计 |
| Phase 5: 文档更新 | 🔲 待开始 | → PRD v2.0 + FRD v2.0 |

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
    └── v0-prompts/                   ← Phase 2 输出：v0 Prompt集 (已完成 ✅)
        ├── 00-design-system.md            ← ✅ 全局设计系统组件
        ├── 01-market-list.md              ← ✅ 行情列表页
        ├── 02-symbol-detail.md            ← ✅ 币种详情(K线)
        ├── 03-trade-order.md              ← ✅ 交易下单(含冷静期)
        ├── 04-order-management.md          ← ✅ 委托管理
        ├── 05-assets.md                     ← ✅ 资产总览
        ├── 06-deposit.md                    ← ✅ 充值页面
        ├── 07-withdraw.md                   ← ✅ 提币页面(含安全验证)
        └── 08-onboarding.md                 ← ✅ 开户流程(5屏)
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

## Phase 2 执行指南: 设计决策 + v0 Prompt 🔄 进行中

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

## Phase 3 执行指南: v0 原型生成

### 准备上传到 v0.dev 的文件

```
上传文件清单：
1. zr-design-decisions.md
2. zr-design-system.md
3. zr-v0-prompts-updated.md (所有prompt合集)
4. 之前的PRD文档 (业务上下文)
5. 之前的FRD文档 (功能规格)
```

### v0 操作顺序

```
Step 1: 设计系统组件 → 00-design-system.md
Step 2: 行情列表 → 01-market-list.md
Step 3: 币种详情 → 02-symbol-detail.md
Step 4: 交易下单 → 03-trade-order.md
Step 5: 委托管理 → 04-order-management.md
Step 6: 资产总览 → 05-assets.md
Step 7: 充值页面 → 06-deposit.md
Step 8: 提币页面 → 07-withdraw.md
Step 9: 开户流程 → 08-onboarding.md
```

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

*Last Updated: 2026-03-04*
*Maintainer: 余博 (Maleekai) · CPO, ZR Securities*
