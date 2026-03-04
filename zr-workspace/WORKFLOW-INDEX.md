# ZR Securities — 竞品分析到产品原型 全链路工作流索引

> **Version**: v1.0 | **Date**: 2026-03-04 | **Owner**: 余博 (Maleekai) · CPO

---

## 当前状态 Current Status

| Phase | Status | Output |
|-------|--------|--------|
| Phase 0: 截图分类 | ✅ 完成 | GitHub: OKX_iOS/ (74 flows), Binance_iOS/ (248 flows) |
| Phase 1: 竞品学习 | ✅ 完成 | OKX全量分析: okx-complete-analysis.md (74 flows, 429 screenshots) |
| Phase 2: 设计决策 | 🔄 进行中 | Skills已更新, v0 Prompt引用文件已完成 (8个模块全覆盖) |
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
│       ├── references/                   ← v0 Prompt详细指南 (8个模块全覆盖)
│       │   ├── v0-market-prompts.md      ← 行情列表 (已增强OKX组件)
│       │   ├── v0-trading-prompts.md     ← 交易下单 (已增强OKX组件)
│       │   ├── v0-asset-prompts.md       ← 资产管理 (已增强OKX组件)
│       │   ├── v0-onboarding-prompts.md  ← ★ 新增: 开户/登录
│       │   ├── v0-settings-prompts.md    ← ★ 新增: 设置/安全
│       │   ├── v0-earn-prompts.md        ← ★ 新增: 理财/Earn
│       │   ├── v0-order-management-prompts.md ← ★ 新增: 委托管理
│       │   └── flow-module-mapping.md    ← Flow文件夹→分析模块映射表
│       └── templates/                    ← v0 Prompt模板
│           └── v0-prompt-template.md
│
└── zr-workspace/                     ← 工作产出区（所有Phase输出存这里）
    ├── WORKFLOW-INDEX.md             ← 本文件（全链路索引）
    ├── design-specs/                 ← Phase 1 输出：竞品设计规范
    │   ├── (待生成) design-spec-01-market-list.md
    │   ├── (待生成) design-spec-02-kline-orderbook.md
    │   ├── (待生成) design-spec-03-trade-order.md
    │   ├── (待生成) design-spec-04-order-management.md
    │   ├── (待生成) design-spec-05-assets.md
    │   ├── (待生成) design-spec-06-deposit-withdraw.md
    │   ├── (待生成) design-spec-07-onboarding.md
    │   └── (待生成) design-spec-08-binance-diff.md
    ├── design-decisions/             ← Phase 2 输出：设计决策
    │   ├── (待生成) zr-design-decisions.md
    │   └── (待生成) zr-design-system.md
    └── v0-prompts/                   ← Phase 2 输出：v0 Prompt集
        ├── (待生成) 00-design-system.md
        ├── (待生成) 01-market-list.md
        ├── (待生成) 02-symbol-detail.md
        ├── (待生成) 03-trade-order.md
        ├── (待生成) 04-order-management.md
        ├── (待生成) 05-assets.md
        ├── (待生成) 06-deposit.md
        ├── (待生成) 07-withdraw.md
        └── (待生成) 08-onboarding.md
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
- ✅ v0 Prompt引用文件已扩展到8个模块全覆盖 (原3个→现7个+映射表)
- ✅ 新增模块: 开户/登录、设置/安全、理财/Earn、委托管理

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
