"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  Settings,
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowLeftRight,
  RefreshCw,
} from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { TabBar } from "@/components/layout/tab-bar";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import {
  HOLDINGS,
  PORTFOLIO,
  EXCHANGES,
  type AssetClass,
  type AssetHolding,
} from "@/lib/mock-data";
import { cn, formatCurrency, formatPercent } from "@/lib/utils";

type AssetFilter = "all" | AssetClass;

const FILTERS: { id: AssetFilter; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "crypto", label: "加密" },
  { id: "hk_stock", label: "港股" },
  { id: "us_stock", label: "美股" },
  { id: "forex", label: "外汇" },
];

const QUICK_ACTIONS = [
  { id: "deposit", label: "充值", icon: ArrowDownToLine, href: "/deposit" },
  { id: "withdraw", label: "提币", icon: ArrowUpFromLine, href: "/withdraw" },
  { id: "transfer", label: "划转", icon: ArrowLeftRight, href: "#" },
  { id: "convert", label: "兑换", icon: RefreshCw, href: "#" },
];

export default function AssetsPage() {
  const router = useRouter();
  const [hideBalance, setHideBalance] = useState(false);
  const [filter, setFilter] = useState<AssetFilter>("all");

  const filtered: AssetHolding[] =
    filter === "all"
      ? HOLDINGS
      : HOLDINGS.filter((h) => h.assetClass === filter);

  const mask = (val: string) => (hideBalance ? "****" : val);

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 h-11">
        <h1 className="text-lg font-bold text-foreground">资产</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setHideBalance(!hideBalance)}
            className="text-text-secondary"
            aria-label={hideBalance ? "显示余额" : "隐藏余额"}
          >
            {hideBalance ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
          <button className="text-text-secondary" aria-label="设置">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Total Balance Card */}
        <div className="mx-4 p-4 rounded-lg bg-bg-secondary mt-2">
          <p className="text-xs text-text-secondary mb-1">总资产 (HKD)</p>
          <p className="text-[26px] font-mono tabular-nums font-bold text-foreground leading-tight">
            {mask(formatCurrency(PORTFOLIO.totalValueHKD))}
          </p>
          <p className="text-xs text-text-secondary mt-0.5">
            &asymp; {mask(formatCurrency(PORTFOLIO.totalValueUSD, "USD"))}
          </p>

          {/* 24h PnL */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-text-secondary">24h 盈亏</span>
            <span
              className={cn(
                "text-xs font-mono tabular-nums font-medium",
                PORTFOLIO.pnl24h >= 0 ? "text-rise" : "text-fall"
              )}
            >
              {mask(
                `${PORTFOLIO.pnl24h >= 0 ? "+" : ""}${formatCurrency(PORTFOLIO.pnl24h)} (${formatPercent(PORTFOLIO.pnl24hPercent)})`
              )}
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center justify-around mt-4">
            {QUICK_ACTIONS.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => router.push(action.href)}
                  className="flex flex-col items-center gap-1"
                >
                  <div className="w-9 h-9 rounded-full bg-brand/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-[10px] text-text-secondary">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Exchange Summary - ZR Unique */}
        <div className="mx-4 mt-3 p-3 rounded-lg bg-bg-secondary">
          <p className="text-xs text-text-secondary mb-2">多交易所资产</p>
          <div className="space-y-2">
            {(Object.keys(PORTFOLIO.byExchange) as Array<keyof typeof PORTFOLIO.byExchange>)
              .filter((exId) => PORTFOLIO.byExchange[exId] > 0)
              .map((exId) => {
                const ex = EXCHANGES[exId];
                const val = PORTFOLIO.byExchange[exId];
                const pct = (val / PORTFOLIO.totalValueHKD) * 100;
                return (
                  <div key={exId} className="flex items-center gap-2">
                    <ExchangeBadge exchange={exId} size="md" />
                    <div className="flex-1">
                      <div className="h-1.5 rounded-full bg-bg-tertiary overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: ex.color,
                          }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-mono tabular-nums text-text-secondary min-w-[80px] text-right">
                      {mask(formatCurrency(val))}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Asset Filter Tabs */}
        <div className="flex items-center gap-3 px-4 py-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "text-xs font-medium px-2.5 py-1 rounded-md transition-colors",
                filter === f.id
                  ? "bg-bg-tertiary text-foreground"
                  : "text-text-secondary"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Holdings List */}
        <div className="px-4 space-y-0">
          {filtered.map((holding) => {
            const isProfit = holding.pnl >= 0;
            const hue =
              holding.symbol
                .split("")
                .reduce((a, c) => a + c.charCodeAt(0), 0) % 360;

            return (
              <div
                key={holding.id}
                className="flex items-center gap-3 py-3 border-b border-border/50"
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-foreground shrink-0"
                  style={{ backgroundColor: `hsl(${hue}, 50%, 30%)` }}
                >
                  {holding.symbol.slice(0, 3)}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-foreground">
                      {holding.symbol}
                    </span>
                    <ExchangeBadge exchange={holding.exchange} />
                  </div>
                  <span className="text-[11px] text-text-tertiary">
                    {holding.name}
                  </span>
                </div>

                {/* Balance + PnL */}
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-sm font-mono tabular-nums font-semibold text-foreground">
                    {mask(holding.balance.toFixed(4))}
                  </span>
                  <span className="text-[11px] text-text-secondary">
                    {mask(formatCurrency(holding.valueHKD))}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-mono tabular-nums",
                      isProfit ? "text-rise" : "text-fall"
                    )}
                  >
                    {mask(
                      `${isProfit ? "+" : ""}${formatPercent(holding.pnlPercent)}`
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <TabBar />
    </MobileShell>
  );
}
