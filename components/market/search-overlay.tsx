"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { MARKET_DATA } from "@/lib/mock-data";
import { MarketRow } from "./market-row";
import { cn } from "@/lib/utils";

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  if (!open) return null;

  const filtered = query.trim()
    ? MARKET_DATA.filter(
        (m) =>
          m.symbol.toLowerCase().includes(query.toLowerCase()) ||
          m.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const hotSearches = ["BTC", "ETH", "SOL", "DOGE", "AAPL", "0700.HK"];

  return (
    <div className="absolute inset-0 z-40 bg-background flex flex-col animate-fade-in">
      {/* Search Bar */}
      <div className="flex items-center gap-2 px-4 pt-14 pb-3">
        <div className="flex-1 flex items-center gap-2 bg-bg-secondary rounded-md px-3 h-9">
          <Search className="w-4 h-4 text-text-secondary shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索币种/股票/外汇"
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-text-tertiary outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} aria-label="清除">
              <X className="w-4 h-4 text-text-secondary" />
            </button>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-sm text-brand font-medium shrink-0"
        >
          取消
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {!query.trim() ? (
          <div className="px-4 py-3">
            <p className="text-xs text-text-secondary mb-3">热门搜索</p>
            <div className="flex flex-wrap gap-2">
              {hotSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className={cn(
                    "px-3 py-1.5 rounded-md bg-bg-secondary text-xs text-text-secondary",
                    "hover:text-foreground transition-colors"
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-sm text-text-secondary">
              {"未找到 \""}{query}{"\" 相关结果"}
            </p>
          </div>
        ) : (
          filtered.map((item) => <MarketRow key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
}
