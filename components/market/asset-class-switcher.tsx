"use client";

import { ASSET_CLASSES, type AssetClass } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface AssetClassSwitcherProps {
  value: AssetClass;
  onChange: (v: AssetClass) => void;
}

export function AssetClassSwitcher({ value, onChange }: AssetClassSwitcherProps) {
  return (
    <div className="flex items-center gap-1 px-4 py-2">
      {ASSET_CLASSES.map((ac) => {
        const active = ac.id === value;
        return (
          <button
            key={ac.id}
            onClick={() => onChange(ac.id)}
            className={cn(
              "flex-1 text-center text-xs font-medium py-1.5 rounded-md transition-all",
              active
                ? "bg-brand text-foreground"
                : "bg-bg-secondary text-text-secondary"
            )}
          >
            {ac.label}
          </button>
        );
      })}
    </div>
  );
}
