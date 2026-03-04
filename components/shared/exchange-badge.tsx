"use client";

import { EXCHANGES, type ExchangeId } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface ExchangeBadgeProps {
  exchange: ExchangeId;
  size?: "sm" | "md";
  className?: string;
}

export function ExchangeBadge({
  exchange,
  size = "sm",
  className,
}: ExchangeBadgeProps) {
  const ex = EXCHANGES[exchange];
  if (!ex) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded",
        size === "sm" && "text-[9px] px-1 py-0.5 leading-none",
        size === "md" && "text-[11px] px-1.5 py-0.5",
        className
      )}
      style={{
        backgroundColor: `${ex.color}20`,
        color: ex.color,
      }}
    >
      {ex.name}
    </span>
  );
}
