"use client";

import { useState, useEffect } from "react";
import { ShieldAlert } from "lucide-react";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { RiskDisclosure } from "@/components/shared/risk-disclosure";

interface CoolingOffModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  symbol: string;
  amount: string;
  side: "buy" | "sell";
}

export function CoolingOffModal({
  open,
  onClose,
  onConfirm,
  symbol,
  amount,
  side,
}: CoolingOffModalProps) {
  const [countdown, setCountdown] = useState(30);
  const [canConfirm, setCanConfirm] = useState(false);

  useEffect(() => {
    if (!open) {
      setCountdown(30);
      setCanConfirm(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setCanConfirm(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [open]);

  return (
    <BottomSheet open={open} onClose={onClose} title="反脆弱冷静期">
      <div className="space-y-4">
        {/* Warning Icon */}
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-fall/10 flex items-center justify-center">
            <ShieldAlert className="w-8 h-8 text-fall" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center space-y-2">
          <p className="text-sm text-foreground font-medium">
            您正在{side === "buy" ? "买入" : "卖出"} {symbol}
          </p>
          <p className="text-xs text-text-secondary leading-relaxed">
            本笔交易金额为 <span className="text-foreground font-mono">{amount} USDT</span>，
            超过您总仓位的 20%。为保护您的资产安全，系统启动了 30 秒冷静期。
          </p>
        </div>

        {/* Countdown */}
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-fall/30 flex items-center justify-center">
            <span className="text-2xl font-mono font-bold text-fall tabular-nums">
              {countdown}
            </span>
          </div>
        </div>

        {/* Risk Disclosure */}
        <RiskDisclosure />

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-md bg-bg-tertiary text-text-secondary font-medium text-sm"
          >
            取消订单
          </button>
          <button
            onClick={canConfirm ? onConfirm : undefined}
            disabled={!canConfirm}
            className={
              canConfirm
                ? "flex-1 py-3 rounded-md bg-fall text-foreground font-semibold text-sm"
                : "flex-1 py-3 rounded-md bg-fall/30 text-text-secondary font-semibold text-sm cursor-not-allowed"
            }
          >
            {canConfirm ? "确认下单" : `等待 ${countdown}s`}
          </button>
        </div>
      </div>
    </BottomSheet>
  );
}
