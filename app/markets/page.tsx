"use client";

import { useState, useMemo } from "react";
import { Search, Bell } from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { TabBar } from "@/components/layout/tab-bar";
import { AssetClassSwitcher } from "@/components/market/asset-class-switcher";
import { CategoryTabs, type MarketCategory } from "@/components/market/category-tabs";
import { MarketRow } from "@/components/market/market-row";
import { SearchOverlay } from "@/components/market/search-overlay";
import { MARKET_DATA, type AssetClass } from "@/lib/mock-data";

type SortKey = "name" | "price" | "change";
type SortDir = "asc" | "desc";

export default function MarketsPage() {
  const [assetClass, setAssetClass] = useState<AssetClass>("crypto");
  const [category, setCategory] = useState<MarketCategory>("hot");
  const [sortKey, setSortKey] = useState<SortKey>("change");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const filteredData = useMemo(() => {
    let data = MARKET_DATA.filter((m) => m.assetClass === assetClass);

    if (category === "favorites") {
      data = data.filter((m) => m.isFavorite);
    } else if (category === "gainers") {
      data = [...data].sort((a, b) => b.change24h - a.change24h);
    } else if (category === "losers") {
      data = [...data].sort((a, b) => a.change24h - b.change24h);
    } else if (category === "volume") {
      data = [...data].sort((a, b) => b.volume24h - a.volume24h);
    }

    // Apply sort
    const dir = sortDir === "asc" ? 1 : -1;
    data = [...data].sort((a, b) => {
      if (sortKey === "name") return a.symbol.localeCompare(b.symbol) * dir;
      if (sortKey === "price") return (a.price - b.price) * dir;
      return (a.change24h - b.change24h) * dir;
    });

    return data;
  }, [assetClass, category, sortKey, sortDir]);

  const SortArrow = ({ active, dir }: { active: boolean; dir: SortDir }) => (
    <span className={active ? "text-foreground" : "text-text-tertiary"}>
      {active && dir === "asc" ? "\u2191" : "\u2193"}
    </span>
  );

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 h-11">
        <h1 className="text-lg font-bold text-foreground">行情</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="搜索"
            className="text-text-secondary"
          >
            <Search className="w-5 h-5" />
          </button>
          <button aria-label="通知" className="text-text-secondary">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Asset Class Switcher - ZR Unique */}
      <AssetClassSwitcher value={assetClass} onChange={setAssetClass} />

      {/* Category Tabs */}
      <CategoryTabs value={category} onChange={setCategory} />

      {/* Sort Header */}
      <div className="flex items-center px-4 py-1.5 text-[11px] text-text-secondary">
        <button
          onClick={() => handleSort("name")}
          className="flex items-center gap-0.5 w-[120px]"
        >
          名称/成交额 <SortArrow active={sortKey === "name"} dir={sortDir} />
        </button>
        <div className="flex-1" />
        <button
          onClick={() => handleSort("price")}
          className="flex items-center gap-0.5 w-[80px] justify-end"
        >
          最新价 <SortArrow active={sortKey === "price"} dir={sortDir} />
        </button>
        <button
          onClick={() => handleSort("change")}
          className="flex items-center gap-0.5 w-[80px] justify-end"
        >
          24h涨跌 <SortArrow active={sortKey === "change"} dir={sortDir} />
        </button>
      </div>

      {/* Divider */}
      <div className="h-px bg-border mx-4" />

      {/* Market List */}
      <div className="flex-1 overflow-y-auto">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-sm text-text-secondary">暂无数据</p>
          </div>
        ) : (
          filteredData.map((item) => <MarketRow key={item.id} item={item} />)
        )}
      </div>

      {/* Tab Bar */}
      <TabBar />

      {/* Search Overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </MobileShell>
  );
}
