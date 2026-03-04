"use client";

import { cn } from "@/lib/utils";

interface SegmentedControlProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  size?: "sm" | "md";
  className?: string;
  fullWidth?: boolean;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  size = "md",
  className,
  fullWidth = false,
}: SegmentedControlProps<T>) {
  return (
    <div
      className={cn(
        "inline-flex items-center bg-bg-secondary rounded-md p-0.5",
        fullWidth && "w-full",
        className
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={cn(
              "flex-1 text-center font-medium transition-all rounded-md",
              size === "sm" && "text-xs px-2.5 py-1",
              size === "md" && "text-sm px-3 py-1.5",
              active
                ? "bg-bg-tertiary text-foreground shadow-sm"
                : "text-text-secondary hover:text-text-secondary/80"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
