"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronDown, Minus, Plus } from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { TabBar } from "@/components/layout/tab-bar";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { CoolingOffModal } from "@/components/trading/cooling-off-modal";
import { RiskDisclosure } from "@/components/shared/risk-disclosure";
import { MARKET_DATA } from "@/lib/mock-data";
import { cn, formatPrice } from "@/lib/utils";

type OrderType = "limit" | "market" | "stop_limit";

function TradeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const symbolId = searchParams.get("symbol") ?? "btc-usdt";
  const initialSide = (searchParams.get("side") ?? "buy") as "buy" | "sell";

  const item = MARKET_DATA.find((m) => m.id === symbolId) ?? MARKET_DATA[0];

  const [side, setSide] = useState<"buy" | "sell">(initialSide);
  const [orderType, setOrderType] = useState<OrderType>("limit");
  const [price, setPrice] = useState(item.price.toString());
  const [amount, setAmount] = useState("");
  const [percentIdx, setPercentIdx] = useState(-1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showCooling, setShowCooling] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const isBuy = side === "buy";
  const decimals = item.price < 1 ? 4 : 2;
  const priceStep = item.price < 1 ? 0.0001 : item.price < 100 ? 0.01 : 1;
  const available = isBuy ? "50,000.00 USDT" : `1.5234 ${item.symbol.split("/")[0]}`;
  const totalValue = parseFloat(price || "0") * parseFloat(amount || "0");
  const fee = totalValue * 0.001;

  const adjustPrice = (dir: 1 | -1) => {
    const p = parseFloat(price || "0");
    setPrice(formatPrice(p + dir * priceStep, decimals));
  };

  const percentages = [25, 50, 75, 100];

  const handleSubmit = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    // Check for large order (simulate >20% of portfolio)
    if (totalValue > 10000) {
      setShowCooling(true);
    } else {
      setShowConfirm(true);
    }
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    setShowCooling(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 h-11">
        <button onClick={() => router.back()} className="text-foreground" aria-label="返回">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-1.5">
          <span className="text-base font-bold text-foreground">{item.symbol}</span>
          <ExchangeBadge exchange={item.exchange} size="md" />
        </div>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
        {/* Buy/Sell Toggle */}
        <div className="flex rounded-md overflow-hidden bg-bg-secondary">
          <button
            onClick={() => setSide("buy")}
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold transition-colors",
              isBuy ? "bg-rise text-[#0B0B0E]" : "text-text-secondary"
            )}
          >
            买入
          </button>
          <button
            onClick={() => setSide("sell")}
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold transition-colors",
              !isBuy ? "bg-fall text-foreground" : "text-text-secondary"
            )}
          >
            卖出
          </button>
        </div>

        {/* Order Type */}
        <div className="flex gap-2">
          {(
            [
              { v: "limit", l: "限价" },
              { v: "market", l: "市价" },
              { v: "stop_limit", l: "止损限价" },
            ] as { v: OrderType; l: string }[]
          ).map((t) => (
            <button
              key={t.v}
              onClick={() => setOrderType(t.v)}
              className={cn(
                "text-xs font-medium px-3 py-1.5 rounded-md transition-colors",
                orderType === t.v
                  ? "bg-bg-tertiary text-foreground"
                  : "text-text-secondary"
              )}
            >
              {t.l}
            </button>
          ))}
        </div>

        {/* Price Input */}
        {orderType !== "market" && (
          <div className="space-y-1.5">
            <label className="text-xs text-text-secondary">
              价格 <span className="text-text-tertiary">(USDT)</span>
            </label>
            <div className="flex items-center gap-0 bg-bg-secondary rounded-md">
              <button
                onClick={() => adjustPrice(-1)}
                className="flex items-center justify-center w-10 h-10 text-text-secondary"
                aria-label="减少价格"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="flex-1 bg-transparent text-center text-sm font-mono tabular-nums text-foreground outline-none h-10"
              />
              <button
                onClick={() => adjustPrice(1)}
                className="flex items-center justify-center w-10 h-10 text-text-secondary"
                aria-label="增加价格"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Amount Input */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs text-text-secondary">
              数量 <span className="text-text-tertiary">({item.symbol.split("/")[0]})</span>
            </label>
            <span className="text-[11px] text-text-tertiary">
              可用 {available}
            </span>
          </div>
          <div className="flex items-center bg-bg-secondary rounded-md px-3 h-10">
            <input
              type="text"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setPercentIdx(-1);
              }}
              placeholder="0.00"
              className="flex-1 bg-transparent text-sm font-mono tabular-nums text-foreground outline-none placeholder:text-text-tertiary"
            />
            <button className="flex items-center gap-0.5 text-xs text-brand">
              {item.symbol.split("/")[0]}
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Quick Percentage */}
        <div className="flex gap-2">
          {percentages.map((p, i) => (
            <button
              key={p}
              onClick={() => {
                setPercentIdx(i);
                const maxAmount = isBuy
                  ? (50000 / parseFloat(price || "1")) * (p / 100)
                  : 1.5234 * (p / 100);
                setAmount(maxAmount.toFixed(4));
              }}
              className={cn(
                "flex-1 py-1.5 text-xs font-medium rounded-md transition-colors",
                percentIdx === i
                  ? isBuy
                    ? "bg-rise/20 text-rise"
                    : "bg-fall/20 text-fall"
                  : "bg-bg-secondary text-text-secondary"
              )}
            >
              {p}%
            </button>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-bg-secondary rounded-md p-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-secondary">交易额</span>
            <span className="font-mono tabular-nums text-foreground">
              {totalValue > 0 ? formatPrice(totalValue, 2) : "--"} USDT
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-secondary">手续费 (0.1%)</span>
            <span className="font-mono tabular-nums text-text-secondary">
              {fee > 0 ? formatPrice(fee, 4) : "--"} USDT
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-text-secondary">执行交易所</span>
            <ExchangeBadge exchange={item.exchange} size="md" />
          </div>
        </div>

        {/* SFC Disclosure */}
        <RiskDisclosure compact />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!amount || parseFloat(amount) <= 0}
          className={cn(
            "w-full py-3.5 rounded-md font-semibold text-sm transition-colors",
            !amount || parseFloat(amount) <= 0
              ? "bg-bg-tertiary text-text-tertiary cursor-not-allowed"
              : isBuy
              ? "bg-rise text-[#0B0B0E]"
              : "bg-fall text-foreground"
          )}
        >
          {isBuy ? "买入" : "卖出"} {item.symbol.split("/")[0]}
        </button>
      </div>

      <TabBar />

      {/* Confirmation Sheet */}
      <BottomSheet
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="确认订单"
      >
        <div className="space-y-3">
          <div className="space-y-2">
            {[
              { l: "交易对", v: item.symbol },
              { l: "方向", v: isBuy ? "买入" : "卖出" },
              { l: "类型", v: orderType === "limit" ? "限价" : orderType === "market" ? "市价" : "止损限价" },
              { l: "价格", v: orderType === "market" ? "市价" : `${price} USDT` },
              { l: "数量", v: `${amount} ${item.symbol.split("/")[0]}` },
              { l: "预估交易额", v: `${formatPrice(totalValue, 2)} USDT` },
              { l: "手续费", v: `${formatPrice(fee, 4)} USDT` },
            ].map((row) => (
              <div key={row.l} className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">{row.l}</span>
                <span className="text-foreground font-mono tabular-nums">{row.v}</span>
              </div>
            ))}
          </div>
          <RiskDisclosure />
          <button
            onClick={handleConfirm}
            className={cn(
              "w-full py-3 rounded-md font-semibold text-sm",
              isBuy ? "bg-rise text-[#0B0B0E]" : "bg-fall text-foreground"
            )}
          >
            确认{isBuy ? "买入" : "卖出"}
          </button>
        </div>
      </BottomSheet>

      {/* Cooling Off Modal */}
      <CoolingOffModal
        open={showCooling}
        onClose={() => setShowCooling(false)}
        onConfirm={handleConfirm}
        symbol={item.symbol.split("/")[0]}
        amount={formatPrice(totalValue, 2)}
        side={side}
      />

      {/* Success Toast */}
      {showSuccess && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg-tertiary border border-border rounded-lg px-6 py-4 z-50 animate-fade-in">
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-rise/20 flex items-center justify-center">
              <span className="text-rise text-lg">&#10003;</span>
            </div>
            <p className="text-sm font-medium text-foreground">下单成功</p>
            <button
              onClick={() => router.push("/orders")}
              className="text-xs text-brand"
            >
              查看委托
            </button>
          </div>
        </div>
      )}
    </MobileShell>
  );
}

export default function TradePage() {
  return (
    <Suspense fallback={null}>
      <TradeContent />
    </Suspense>
  );
}
