"use client";

import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiskDisclosureProps {
  className?: string;
  compact?: boolean;
}

export function RiskDisclosure({ className, compact = false }: RiskDisclosureProps) {
  if (compact) {
    return (
      <p className={cn("text-[10px] text-text-tertiary leading-tight", className)}>
        虚拟资产交易服务由持牌交易所提供。虚拟资产价格波动剧烈，可能导致重大损失。
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-2 p-3 rounded-md bg-fall/5 border border-fall/10",
        className
      )}
    >
      <AlertTriangle className="w-4 h-4 text-fall shrink-0 mt-0.5" />
      <div className="space-y-1">
        <p className="text-xs font-medium text-fall">SFC 风险披露</p>
        <p className="text-[11px] text-text-secondary leading-relaxed">
          虚拟资产交易涉及高风险，虚拟资产的价格可能会大幅波动，
          您可能会损失全部投资金额。过往表现并不代表未来表现。
          请确保您完全了解所涉及的风险，并在必要时寻求独立的财务建议。
          本服务由香港证监会(SFC)持牌机构提供。
        </p>
      </div>
    </div>
  );
}
