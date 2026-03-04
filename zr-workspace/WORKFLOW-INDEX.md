# ZR Securities — 竞品分析到产品原型 全链路工作流索引

> **Version**: v1.0 | **Date**: 2026-03-04 | **Owner**: 余博 (Maleekai) · CPO

---

## 当前状态 Current Status

| Phase | Status | Output |
|-------|--------|--------|
| Phase 0: 截图分类 | ✅ 完成 | GitHub: OKX_iOS/ (74 flows), Binance_iOS/ (248 flows) |
| Phase 1: 竞品学习 | 🔲 待开始 | → design-specs/ (8份设计规范) |
| Phase 2: 设计决策 | 🔲 待开始 | → design-decisions/ + v0-prompts/ |
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
│   │   ├── SKILL.md                      ← 主技能文件
│   │   ├── references/                   ← 模块分析指南
│   │   │   ├── market-analysis-guide.md
│   │   │   ├── trading-analysis-guide.md
│   │   │   └── asset-analysis-guide.md
│   │   └── templates/                    ← 输出模板
│   │       └── design-spec-template.md
│   │
│   └── zr-v0-prompt-generator/           ← Skill 2: v0 Prompt生成器
│       ├── SKILL.md                      ← 主技能文件
│       ├── references/                   ← v0 Prompt详细指南
│       │   ├── v0-market-prompts.md
│       │   ├── v0-trading-prompts.md
│       │   ├── v0-asset-prompts.md
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

## Phase 1 执行指南: 竞品截图分析

### 操作步骤

每轮分析一个模块（约15-20张截图），共8轮：

| 轮次 | 模块 | OKX Flow文件夹 | 操作 |
|------|------|----------------|------|
| 1 | 行情列表 | 003, 010-013, 015 | 上传截图 → Claude分析 → design-spec-01 |
| 2 | K线盘口 | 014, 015 | 上传截图 → Claude分析 → design-spec-02 |
| 3 | 交易下单 | 014, 016-017, 019, 022, 025 | 上传截图 → Claude分析 → design-spec-03 |
| 4 | 委托管理 | 020, 035, 036 | 上传截图 → Claude分析 → design-spec-04 |
| 5 | 资产管理 | 032, 034, 039 | 上传截图 → Claude分析 → design-spec-05 |
| 6 | 充值提币 | 033, 035 | 上传截图 → Claude分析 → design-spec-06 |
| 7 | 开户设置 | 001, 002, 060, 074 | 上传截图 → Claude分析 → design-spec-07 |
| 8 | Binance差异 | Binance特有Flow | 上传截图 → Claude分析 → design-spec-08 |

### 每轮的Claude Prompt

```
[触发 zr-competitive-design-analysis skill]

分析模块：[模块名]
截图来源：OKX iOS / [Flow文件夹名]
截图数量：[XX]张

请按照设计规范模板输出完整分析文档。
```

---

## Phase 2 执行指南: 设计决策 + v0 Prompt

### 前置条件
Phase 1 的 8 份 design-spec 文档全部完成

### 操作步骤

1. 将所有 design-spec 文档上传到新的 Claude 对话
2. 触发 `zr-v0-prompt-generator` skill
3. Claude 生成：
   - `zr-design-decisions.md` — 设计决策总纲
   - `zr-design-system.md` — 设计系统规范
   - 9份 v0 prompt 文件

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
