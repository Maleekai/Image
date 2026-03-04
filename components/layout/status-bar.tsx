"use client";

import { useState, useEffect } from "react";
import { Signal, Wifi, Battery } from "lucide-react";

export function StatusBar() {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

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
