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
    fillColor: d.close >= d.open ? "var(--rise)" : "var(--fall)",
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
                <stop offset="5%" stopColor="var(--rise)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--rise)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "var(--text-tertiary)" }}
              interval={Math.floor(data.length / 5)}
            />
            <YAxis
              domain={["auto", "auto"]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "var(--text-tertiary)" }}
              width={48}
              orientation="right"
            />
            <Tooltip
              contentStyle={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                fontSize: 11,
                color: "var(--text-primary)",
              }}
              labelStyle={{ color: "var(--text-secondary)", fontSize: 10 }}
            />
            <Area
              type="monotone"
              dataKey="close"
              stroke="var(--rise)"
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
              fill="var(--text-tertiary)"
              opacity={0.4}
              radius={[1, 1, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
