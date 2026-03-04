"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, SlidersHorizontal } from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { TabBar } from "@/components/layout/tab-bar";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { ORDERS, type Order } from "@/lib/mock-data";
import { cn, formatPrice } from "@/lib/utils";

type OrderTab = "open" | "history" | "trades";

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  open: { label: "挂单中", color: "text-brand" },
  partially_filled: { label: "部分成交", color: "text-[#F59E0B]" },
  filled: { label: "已成交", color: "text-rise" },
  cancelled: { label: "已撤销", color: "text-text-tertiary" },
};

export default function OrdersPage() {
  const router = useRouter();
  const [tab, setTab] = useState<OrderTab>("open");
  const [cancelTarget, setCancelTarget] = useState<Order | null>(null);
  const [detailTarget, setDetailTarget] = useState<Order | null>(null);
  const [swipedId, setSwipedId] = useState<string | null>(null);

  const openOrders = ORDERS.filter(
    (o) => o.status === "open" || o.status === "partially_filled"
  );
  const historyOrders = ORDERS.filter(
    (o) => o.status === "filled" || o.status === "cancelled"
  );

  const displayOrders =
    tab === "open"
      ? openOrders
      : tab === "history"
      ? historyOrders
      : ORDERS.filter((o) => o.status === "filled");

  const handleCancel = (order: Order) => {
    setCancelTarget(order);
  };

  const confirmCancel = () => {
    setCancelTarget(null);
  };

  const tabs: { id: OrderTab; label: string; count?: number }[] = [
    { id: "open", label: "当前委托", count: openOrders.length },
    { id: "history", label: "历史委托" },
    { id: "trades", label: "成交记录" },
  ];

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 h-11">
        <button onClick={() => router.back()} className="text-foreground" aria-label="返回">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-base font-bold text-foreground">委托</h1>
        <button className="text-text-secondary" aria-label="筛选">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 px-4 py-2 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "relative text-sm font-medium pb-2 transition-colors",
              tab === t.id ? "text-foreground" : "text-text-secondary"
            )}
          >
            <span className="flex items-center gap-1">
              {t.label}
              {t.count !== undefined && t.count > 0 && (
                <span className="text-[10px] bg-brand rounded-full px-1.5 py-0.5 text-foreground leading-none">
                  {t.count}
                </span>
              )}
            </span>
            {tab === t.id && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-brand" />
            )}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto">
        {displayOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-sm text-text-secondary">暂无委托记录</p>
          </div>
        ) : (
          displayOrders.map((order) => {
            const status = STATUS_MAP[order.status] ?? { label: order.status, color: "text-text-secondary" };
            const isBuy = order.side === "buy";
            const swiped = swipedId === order.id;

            return (
              <div
                key={order.id}
                className="relative overflow-hidden"
              >
                {/* Swipe to cancel button (background) */}
                {tab === "open" && (
                  <div className="absolute right-0 top-0 bottom-0 w-20 flex items-center justify-center bg-fall">
                    <button
                      onClick={() => handleCancel(order)}
                      className="text-xs font-medium text-foreground"
                    >
                      撤单
                    </button>
                  </div>
                )}

                <div
                  className={cn(
                    "relative bg-background px-4 py-3 border-b border-border transition-transform cursor-pointer",
                    swiped && "-translate-x-20"
                  )}
                  onClick={() => {
                    if (swiped) {
                      setSwipedId(null);
                    } else if (tab === "open") {
                      setSwipedId(order.id);
                    } else {
                      setDetailTarget(order);
                    }
                  }}
                >
                  {/* Row 1: Symbol + Side + Status */}
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-foreground">
                        {order.symbol}
                      </span>
                      <span
                        className={cn(
                          "text-[10px] font-medium px-1.5 py-0.5 rounded",
                          isBuy ? "bg-rise/15 text-rise" : "bg-fall/15 text-fall"
                        )}
                      >
                        {isBuy ? "买入" : "卖出"}
                      </span>
                      <span className="text-[10px] text-text-tertiary">
                        {order.type === "limit" ? "限价" : order.type === "market" ? "市价" : "止损"}
                      </span>
                      <ExchangeBadge exchange={order.exchange} />
                    </div>
                    <span className={cn("text-[11px] font-medium", status.color)}>
                      {status.label}
                    </span>
                  </div>

                  {/* Row 2: Price + Amount */}
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-tertiary">委托价</span>
                      <span className="font-mono tabular-nums text-text-secondary">
                        {formatPrice(order.price, 2)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-tertiary">数量</span>
                      <span className="font-mono tabular-nums text-text-secondary">
                        {order.amount}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-text-tertiary">已成交</span>
                      <span className="font-mono tabular-nums text-text-secondary">
                        {order.filled}
                      </span>
                    </div>
                    {order.fee !== undefined && (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-text-tertiary">手续费</span>
                        <span className="font-mono tabular-nums text-text-secondary">
                          {order.fee} USDT
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Row 3: Time */}
                  <div className="mt-1.5">
                    <span className="text-[10px] text-text-tertiary">
                      {order.createdAt}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <TabBar />

      {/* Cancel Confirmation */}
      <BottomSheet
        open={!!cancelTarget}
        onClose={() => setCancelTarget(null)}
        title="确认撤单"
      >
        {cancelTarget && (
          <div className="space-y-3">
            <p className="text-sm text-text-secondary">
              确认撤销 {cancelTarget.symbol} {cancelTarget.side === "buy" ? "买入" : "卖出"} 委托？
            </p>
            <div className="bg-bg-tertiary rounded-md p-3 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-text-secondary">委托价</span>
                <span className="font-mono tabular-nums text-foreground">{formatPrice(cancelTarget.price, 2)} USDT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">数量</span>
                <span className="font-mono tabular-nums text-foreground">{cancelTarget.amount}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCancelTarget(null)}
                className="flex-1 py-3 rounded-md bg-bg-tertiary text-text-secondary font-medium text-sm"
              >
                取消
              </button>
              <button
                onClick={confirmCancel}
                className="flex-1 py-3 rounded-md bg-fall text-foreground font-semibold text-sm"
              >
                确认撤单
              </button>
            </div>
          </div>
        )}
      </BottomSheet>

      {/* Order Detail */}
      <BottomSheet
        open={!!detailTarget}
        onClose={() => setDetailTarget(null)}
        title="委托详情"
      >
        {detailTarget && (
          <div className="space-y-2 text-xs">
            {[
              { l: "交易对", v: detailTarget.symbol },
              { l: "方向", v: detailTarget.side === "buy" ? "买入" : "卖出" },
              { l: "类型", v: detailTarget.type === "limit" ? "限价" : detailTarget.type === "market" ? "市价" : "止损" },
              { l: "委托价", v: `${formatPrice(detailTarget.price, 2)} USDT` },
              { l: "委托量", v: `${detailTarget.amount}` },
              { l: "已成交", v: `${detailTarget.filled}` },
              { l: "手续费", v: detailTarget.fee ? `${detailTarget.fee} USDT` : "--" },
              { l: "时间", v: detailTarget.createdAt },
            ].map((row) => (
              <div key={row.l} className="flex items-center justify-between py-1 border-b border-border">
                <span className="text-text-secondary">{row.l}</span>
                <span className="font-mono tabular-nums text-foreground">{row.v}</span>
              </div>
            ))}
          </div>
        )}
      </BottomSheet>
    </MobileShell>
  );
}
