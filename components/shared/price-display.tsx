"use client";

import { cn, formatPrice, formatPercent } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  change?: number;
  decimals?: number;
  size?: "sm" | "md" | "lg" | "xl";
  showSign?: boolean;
  className?: string;
}

export function PriceDisplay({
  price,
  change,
  decimals = 2,
  size = "md",
  showSign = true,
  className,
}: PriceDisplayProps) {
  const isPositive = (change ?? 0) >= 0;

  return (
    <div className={cn("flex flex-col items-end gap-0.5", className)}>
      <span
        className={cn(
          "font-mono tabular-nums font-semibold",
          size === "sm" && "text-sm",
          size === "md" && "text-base",
          size === "lg" && "text-xl",
          size === "xl" && "text-[28px] leading-tight"
        )}
      >
        {formatPrice(price, decimals)}
      </span>
      {change !== undefined && (
        <span
          className={cn(
            "font-mono tabular-nums font-medium",
            size === "sm" && "text-[11px]",
            size === "md" && "text-xs",
            size === "lg" && "text-sm",
            size === "xl" && "text-base",
            isPositive ? "text-rise" : "text-fall"
          )}
        >
          {showSign && (isPositive ? "+" : "")}
          {formatPercent(change)}
        </span>
      )}
    </div>
  );
}

interface ChangeBadgeProps {
  change: number;
  className?: string;
}

export function ChangeBadge({ change, className }: ChangeBadgeProps) {
  const isPositive = change >= 0;

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono tabular-nums text-xs font-semibold rounded-md px-2 py-1 min-w-[72px] text-center",
        isPositive
          ? "bg-rise text-[#0B0B0E]"
          : "bg-fall text-foreground",
        className
      )}
    >
      {isPositive ? "+" : ""}
      {formatPercent(change)}
    </span>
  );
}
