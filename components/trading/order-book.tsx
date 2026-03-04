"use client";

import { cn, formatPrice } from "@/lib/utils";
import type { OrderBookEntry } from "@/lib/mock-data";

interface OrderBookProps {
  asks: OrderBookEntry[];
  bids: OrderBookEntry[];
  midPrice: number;
  decimals?: number;
  onPriceClick?: (price: number) => void;
}

export function OrderBook({
  asks,
  bids,
  midPrice,
  decimals = 2,
  onPriceClick,
}: OrderBookProps) {
  const maxTotal = Math.max(
    asks[asks.length - 1]?.total ?? 0,
    bids[bids.length - 1]?.total ?? 0,
    1
  );

  return (
    <div className="flex flex-col gap-0.5 px-4">
      {/* Header */}
      <div className="flex items-center text-[10px] text-text-tertiary py-1">
        <span className="flex-1">价格</span>
        <span className="w-20 text-right">数量</span>
        <span className="w-20 text-right">累计</span>
      </div>

      {/* Asks (sells) - reversed so lowest ask is at bottom */}
      {asks.slice(0, 5).map((entry, i) => (
        <button
          key={`ask-${i}`}
          onClick={() => onPriceClick?.(entry.price)}
          className="flex items-center relative py-0.5 hover:bg-fall/5 transition-colors"
        >
          {/* Depth bar */}
          <div
            className="absolute right-0 top-0 bottom-0 bg-fall/10"
            style={{ width: `${(entry.total / maxTotal) * 100}%` }}
          />
          <span className="flex-1 text-xs font-mono tabular-nums text-fall relative z-10">
            {formatPrice(entry.price, decimals)}
          </span>
          <span className="w-20 text-right text-xs font-mono tabular-nums text-text-secondary relative z-10">
            {entry.amount.toFixed(4)}
          </span>
          <span className="w-20 text-right text-xs font-mono tabular-nums text-text-tertiary relative z-10">
            {entry.total.toFixed(4)}
          </span>
        </button>
      ))}

      {/* Mid price / Spread */}
      <div className="flex items-center justify-center py-1.5 border-y border-border">
        <span className="text-sm font-mono tabular-nums font-bold text-foreground">
          {formatPrice(midPrice, decimals)}
        </span>
        <span className="text-[10px] text-text-tertiary ml-2">
          &asymp; HK${formatPrice(midPrice * 7.8, 2)}
        </span>
      </div>

      {/* Bids (buys) */}
      {bids.slice(0, 5).map((entry, i) => (
        <button
          key={`bid-${i}`}
          onClick={() => onPriceClick?.(entry.price)}
          className="flex items-center relative py-0.5 hover:bg-rise/5 transition-colors"
        >
          {/* Depth bar */}
          <div
            className="absolute right-0 top-0 bottom-0 bg-rise/10"
            style={{ width: `${(entry.total / maxTotal) * 100}%` }}
          />
          <span className="flex-1 text-xs font-mono tabular-nums text-rise relative z-10">
            {formatPrice(entry.price, decimals)}
          </span>
          <span className="w-20 text-right text-xs font-mono tabular-nums text-text-secondary relative z-10">
            {entry.amount.toFixed(4)}
          </span>
          <span className="w-20 text-right text-xs font-mono tabular-nums text-text-tertiary relative z-10">
            {entry.total.toFixed(4)}
          </span>
        </button>
      ))}
    </div>
  );
}
