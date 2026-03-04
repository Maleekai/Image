"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  BarChart3,
  ArrowLeftRight,
  ClipboardList,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "markets", label: "行情", icon: BarChart3, href: "/markets" },
  { id: "trade", label: "交易", icon: ArrowLeftRight, href: "/trade" },
  { id: "orders", label: "委托", icon: ClipboardList, href: "/orders" },
  { id: "assets", label: "资产", icon: Wallet, href: "/assets" },
];

export function TabBar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/markets") return pathname === "/markets" || pathname === "/" || pathname.startsWith("/symbol");
    return pathname.startsWith(href);
  };

  return (
    <div className="flex items-end justify-around bg-background border-t border-border px-2 pb-5 pt-2">
      {tabs.map((tab) => {
        const active = isActive(tab.href);
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
