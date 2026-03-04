"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";
import type { CandleData } from "@/lib/mock-data";

interface CandlestickChartProps {
  data: CandleData[];
  className?: string;
}

const TIMEFRAMES = ["分时", "5m", "15m", "1H", "4H", "日K", "周K"];

export function CandlestickChart({ data, className }: CandlestickChartProps) {
  const [activeTimeframe, setActiveTimeframe] = useState("1H");

  // Build chart data with color info
  const chartData = data.map((d) => ({
    ...d,
    isGreen: d.close >= d.open,
    value: d.close,
    fillColor: d.close >= d.open ? "#0ECB81" : "#F6465D",
  }));

  return (
    <div className={cn("flex flex-col", className)}>
      {/* Timeframe Tabs */}
      <div className="flex items-center gap-1 px-4 py-2 overflow-x-auto">
        {TIMEFRAMES.map((tf) => (
          <button
            key={tf}
            onClick={() => setActiveTimeframe(tf)}
            className={cn(
              "text-xs font-medium px-2.5 py-1 rounded transition-colors whitespace-nowrap",
              tf === activeTimeframe
                ? "bg-bg-tertiary text-foreground"
                : "text-text-secondary"
            )}
          >
            {tf}
          </button>
        ))}
      </div>

      {/* Area Chart (simplified candlestick view) */}
      <div className="h-[180px] px-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ECB81" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ECB81" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "#5A5A5E" }}
              interval={Math.floor(data.length / 5)}
            />
            <YAxis
              domain={["auto", "auto"]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "#5A5A5E" }}
              width={48}
              orientation="right"
            />
            <Tooltip
              contentStyle={{
                background: "#1A1A22",
                border: "1px solid rgb(30 30 38)",
                borderRadius: 8,
                fontSize: 11,
                color: "#FFFFFF",
              }}
              labelStyle={{ color: "#8E8E93", fontSize: 10 }}
            />
            <Area
              type="monotone"
              dataKey="close"
              stroke="#0ECB81"
              strokeWidth={1.5}
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Volume Bars */}
      <div className="h-[48px] px-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 4, bottom: 0, left: 4 }}>
            <Bar
              dataKey="volume"
              fill="#5A5A5E"
              opacity={0.4}
              radius={[1, 1, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
