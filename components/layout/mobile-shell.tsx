"use client";

import { cn } from "@/lib/utils";

interface MobileShellProps {
  children: React.ReactNode;
  className?: string;
}

export function MobileShell({ children, className }: MobileShellProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050507] p-4">
      <div
        className={cn(
          "relative w-[390px] h-[844px] bg-background rounded-[40px] overflow-hidden",
          "border border-border-light/30 shadow-[0_0_60px_rgba(0,0,0,0.8)]",
          "flex flex-col",
          className
        )}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[18px] z-50" />
        {children}
      </div>
    </div>
  );
}
