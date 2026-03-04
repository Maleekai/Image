"use client";

import { cn } from "@/lib/utils";

export type MarketCategory =
  | "favorites"
  | "hot"
  | "gainers"
  | "losers"
  | "volume"
  | "new";

const CATEGORIES: { id: MarketCategory; label: string }[] = [
  { id: "favorites", label: "自选" },
  { id: "hot", label: "热门" },
  { id: "gainers", label: "涨幅榜" },
  { id: "losers", label: "跌幅榜" },
  { id: "volume", label: "成交额" },
  { id: "new", label: "新上线" },
];

interface CategoryTabsProps {
  value: MarketCategory;
  onChange: (v: MarketCategory) => void;
}

export function CategoryTabs({ value, onChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-2 overflow-x-auto no-scrollbar">
      {CATEGORIES.map((cat) => {
        const active = cat.id === value;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={cn(
              "relative whitespace-nowrap text-sm font-medium pb-1.5 transition-colors",
              active ? "text-foreground" : "text-text-secondary"
            )}
          >
            {cat.label}
            {active && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand" />
            )}
          </button>
        );
      })}
    </div>
  );
}
