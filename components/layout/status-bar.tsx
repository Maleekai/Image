"use client";

import { Signal, Wifi, Battery } from "lucide-react";

export function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="flex items-center justify-between px-6 h-[44px] bg-background">
      <span className="text-sm font-semibold font-sans text-foreground">
        {time}
      </span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-4 h-4 text-foreground" />
        <Wifi className="w-4 h-4 text-foreground" />
        <Battery className="w-5 h-5 text-foreground" />
      </div>
    </div>
  );
}
