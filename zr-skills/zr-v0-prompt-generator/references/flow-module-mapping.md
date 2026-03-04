# OKX & Binance Flow → ZR Module Mapping

This document maps the Mobbin Flow folders (numbered subfolders in the GitHub repo) to ZR analysis modules, so you know which screenshots to look at for each design-spec document.

---

## OKX iOS (74 Flows → 8 Analysis Modules)

### Module 1: 行情列表 Market List
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 003 | Home_(Exchange) | 014-022 |
| 010 | Discover_(Exchange) | 052-060 |
| 011 | Editing_favorites | 061-064 |
| 012 | Switching_crypto | 065-068 |
| 013 | Sorting_crypto | 069-072 |
| 015 | Crypto_detail | 082-085 |

### Module 2: K线与盘口 K-line & Order Book
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 014 | Trade_(Exchange) | 073-081 |
| 015 | Crypto_detail | 082-085 |

### Module 3: 交易下单 Trade Order
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 014 | Trade_(Exchange) | 073-081 |
| 016 | Sell_crypto | 086-089 |
| 017 | Action_options_(crypto) | 090-093 |
| 019 | Buying_a_crypto | 103-111 |
| 022 | Converting_tokens | 120-123 |
| 025 | Options | 132-135 |

### Module 4: 委托管理 Order Management
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 020 | Orders | 112-115 |
| 036 | Trading_history | 196-199 |
| 035 | Deposit_history | 187-195 |

### Module 5: 资产管理 Assets
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 032 | Assets | 170-178 |
| 039 | Assets_detail | 218-226 |
| 034 | Transferring_an_asset | 183-186 |

### Module 6: 充值提币 Deposit/Withdraw
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 033 | Deposit_crypto | 179-182 |
| 035 | Deposit_history | 187-195 |

### Module 7: 开户设置 Onboarding
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 001 | Onboarding | 001-009 |
| 002 | Verifying_account | 010-013 |
| 060 | Identity_verification | 347-350 |
| 074 | Logging_in | 413-429 |

### Module 8: 安全设置 Security & Settings
| Flow | Folder Name | Screenshot Range |
|------|-------------|-----------------|
| 058 | Settings | 334-342 |
| 068 | Security | 379-382 |
| 069 | Changing_language | 383-391 |
| 070 | Notification_settings | 392-395 |
| 071 | Help_center | 396-399 |

### Additional Modules (P2/P3 priority)
**P2P Trading**: 018, 019, 021
**Copy Trading**: 024
**Trading Bots**: 023
**Earn/Grow**: 026, 027, 028, 029, 030, 031
**Web3 Wallet**: 037-055
**Social/Profile**: 056, 057, 059, 063-066

---

## Binance iOS (248 Flows → Diff Analysis)

For Module 8 (Binance差异), focus on these Binance flows that DIFFER significantly from OKX:

| Area | Binance Flows to Analyze | Key Differences |
|------|--------------------------|-----------------|
| Home/Discovery | 006, 007-020 | Binance has richer home feed |
| Convert (简单交易) | 021-030 | One-tap convert UX, very simplified |
| Futures | 031-050 | More complex order types |
| Earn | 201-230 | More product variety (Flexible, Locked, Launchpool) |
| Pay | 121-140 | Binance Pay ecosystem |
| NFT | 141-170 | Different NFT marketplace approach |
| Square (社交) | 181-200 | Social trading community |

---

## How to Use This Mapping

1. Identify which module you're analyzing
2. Look up the flow folders from the table
3. Navigate to `OKX_iOS/[folder_name]/` in the GitHub repo
4. Upload the screenshots from those folders to Claude
5. Use the `zr-competitive-design-analysis` skill to generate the design-spec
