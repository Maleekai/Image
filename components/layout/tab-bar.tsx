"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  ArrowLeftRight,
  Wallet,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "home", label: "首页", icon: TrendingUp, href: "/markets" },
  { id: "markets", label: "行情", icon: BarChart3, href: "/markets" },
  { id: "trade", label: "交易", icon: ArrowLeftRight, href: "/trade" },
  { id: "assets", label: "资产", icon: Wallet, href: "/assets" },
  { id: "more", label: "更多", icon: MoreHorizontal, href: "/onboarding" },
];

export function TabBar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string, id: string) => {
    if (id === "home") return pathname === "/markets" || pathname === "/";
    if (id === "markets") return pathname === "/markets";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex items-end justify-around bg-background border-t border-border px-2 pb-5 pt-2">
      {tabs.map((tab) => {
        const active = isActive(tab.href, tab.id);
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => router.push(tab.href)}
            className={cn(
              "flex flex-col items-center gap-0.5 min-w-[48px] py-1 transition-colors",
              active ? "text-brand" : "text-text-secondary"
            )}
            aria-label={tab.label}
          >
            <Icon className="w-5 h-5" strokeWidth={active ? 2.2 : 1.8} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
