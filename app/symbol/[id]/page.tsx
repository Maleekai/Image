"use client";

import { use, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Star, Share2 } from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { CandlestickChart } from "@/components/trading/candlestick-chart";
import { OrderBook } from "@/components/trading/order-book";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import { MARKET_DATA, generateOrderBook, generateCandleData } from "@/lib/mock-data";
import { formatPrice, formatCompact, cn } from "@/lib/utils";

type TabType = "orderbook" | "trades";

export default function SymbolPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("orderbook");
  const [isFav, setIsFav] = useState(false);

  const item = MARKET_DATA.find((m) => m.id === id) ?? MARKET_DATA[0];
  const isPositive = item.change24h >= 0;
  const decimals = item.price < 1 ? 4 : 2;

  const candleData = useMemo(() => generateCandleData(item.price), [item.price]);
  const orderBook = useMemo(
    () => generateOrderBook(item.price, decimals),
    [item.price, decimals]
  );

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav Bar */}
      <div className="flex items-center justify-between px-4 h-11">
        <button onClick={() => router.back()} className="text-foreground" aria-label="返回">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold text-foreground">{item.symbol}</span>
          <ExchangeBadge exchange={item.exchange} size="md" />
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsFav(!isFav)} aria-label="收藏">
            <Star
              className={cn("w-5 h-5", isFav ? "fill-brand text-brand" : "text-text-secondary")}
            />
          </button>
          <button aria-label="分享" className="text-text-secondary">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Price Header */}
      <div className="px-4 py-3">
        <div className="flex items-end gap-3">
          <span
            className={cn(
              "text-[28px] leading-tight font-mono tabular-nums font-bold",
              isPositive ? "text-rise" : "text-fall"
            )}
          >
            {formatPrice(item.price, decimals)}
          </span>
          <span
            className={cn(
              "text-sm font-mono tabular-nums font-medium pb-1",
              isPositive ? "text-rise" : "text-fall"
            )}
          >
            {isPositive ? "+" : ""}
            {item.change24h.toFixed(2)}%
          </span>
        </div>
        <div className="text-xs text-text-secondary mt-1">
          &asymp; HK${formatPrice(item.price * 7.8, 2)}
        </div>

        {/* OHLV Stats */}
        <div className="grid grid-cols-4 gap-2 mt-3">
          {[
            { label: "24h高", value: formatPrice(item.high24h, decimals) },
            { label: "24h低", value: formatPrice(item.low24h, decimals) },
            {
              label: "24h量",
              value: formatCompact(item.volume24h),
            },
            {
              label: "价差",
              value: `${((item.high24h - item.low24h) / item.low24h * 100).toFixed(2)}%`,
            },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-[10px] text-text-tertiary">{stat.label}</span>
              <span className="text-xs font-mono tabular-nums text-text-secondary">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <CandlestickChart data={candleData} />

      {/* Order Book / Trades Toggle */}
      <div className="flex items-center gap-4 px-4 py-2 border-t border-border">
        {(["orderbook", "trades"] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "text-sm font-medium pb-1 relative transition-colors",
              activeTab === tab ? "text-foreground" : "text-text-secondary"
            )}
          >
            {tab === "orderbook" ? "盘口" : "最新成交"}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "orderbook" ? (
          <OrderBook
            asks={orderBook.asks}
            bids={orderBook.bids}
            midPrice={item.price}
            decimals={decimals}
          />
        ) : (
          <div className="px-4 space-y-1">
            {Array.from({ length: 15 }).map((_, i) => {
              const seed = (i * 16807 + 7) % 2147483647;
              const r1 = ((seed * 16807) % 2147483647 - 1) / 2147483646;
              const r2 = (((seed * 16807 * 16807) % 2147483647) - 1) / 2147483646;
              const r3 = (((seed * 16807 * 16807 * 16807) % 2147483647) - 1) / 2147483646;
              const isBuy = r1 > 0.5;
              const price = item.price + (r2 - 0.5) * item.price * 0.002;
              const amount = (r3 * 2 + 0.01).toFixed(4);
              const h = (14 - Math.floor(i / 4)) % 24;
              const m = (i * 17) % 60;
              const s = (i * 43) % 60;
              const time = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
              return (
                <div key={i} className="flex items-center text-xs py-0.5">
                  <span className="flex-1 font-mono tabular-nums" style={{ color: isBuy ? "#0ECB81" : "#F6465D" }}>
                    {formatPrice(price, decimals)}
                  </span>
                  <span className="w-20 text-right font-mono tabular-nums text-text-secondary">
                    {amount}
                  </span>
                  <span className="w-20 text-right font-mono tabular-nums text-text-tertiary">
                    {time}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="flex gap-3 px-4 py-3 pb-7 border-t border-border bg-background">
        <button
          onClick={() => router.push(`/trade?symbol=${item.id}&side=buy`)}
          className="flex-1 py-3 rounded-md bg-rise text-[#0B0B0E] font-semibold text-sm"
        >
          买入
        </button>
        <button
          onClick={() => router.push(`/trade?symbol=${item.id}&side=sell`)}
          className="flex-1 py-3 rounded-md bg-fall text-foreground font-semibold text-sm"
        >
          卖出
        </button>
      </div>
    </MobileShell>
  );
}
