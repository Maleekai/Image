"use client";

import Link from "next/link";
import type { MarketItem } from "@/lib/mock-data";
import { formatPrice, formatCompact } from "@/lib/utils";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import { ChangeBadge } from "@/components/shared/price-display";
import { Sparkline } from "@/components/shared/sparkline";

interface MarketRowProps {
  item: MarketItem;
}

export function MarketRow({ item }: MarketRowProps) {
  const isPositive = item.change24h >= 0;

  // Generate a consistent color for the coin icon
  const hue = item.symbol.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 360;

  return (
    <Link
      href={`/symbol/${item.id}`}
      className="flex items-center gap-3 px-4 py-3 active:bg-[rgba(19,19,24,0.5)] transition-colors"
    >
      {/* Coin Icon */}
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-foreground shrink-0"
        style={{ backgroundColor: `hsl(${hue}, 50%, 30%)` }}
      >
        {item.symbol.slice(0, item.symbol.indexOf("/") > 0 ? item.symbol.indexOf("/") : 2).slice(0, 3)}
      </div>

      {/* Name + Exchange */}
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-semibold text-foreground truncate">
            {item.symbol}
          </span>
          <ExchangeBadge exchange={item.exchange} />
        </div>
        <span className="text-[11px] text-text-secondary">
          Vol {formatCompact(item.volume24h)}
        </span>
      </div>

      {/* Sparkline */}
      <div className="shrink-0">
        <Sparkline data={item.sparkline} positive={isPositive} width={48} height={20} />
      </div>

      {/* Price + Change */}
      <div className="flex flex-col items-end gap-1 shrink-0 min-w-[90px]">
        <span className="text-sm font-mono tabular-nums font-semibold text-foreground">
          {formatPrice(item.price, item.price < 1 ? 4 : 2)}
        </span>
        <ChangeBadge change={item.change24h} />
      </div>
    </Link>
  );
}
