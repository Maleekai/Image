"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ScanLine,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { NETWORKS, type Network } from "@/lib/mock-data";
import { cn, formatPrice } from "@/lib/utils";

type VerifyStep = "email" | "phone" | "done";

export default function WithdrawPage() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(NETWORKS[0]);
  const [amount, setAmount] = useState("");
  const [memo, setMemo] = useState("");
  const [showVerify, setShowVerify] = useState(false);
  const [verifyStep, setVerifyStep] = useState<VerifyStep>("email");
  const [emailCode, setEmailCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [verifyCountdown, setVerifyCountdown] = useState(0);

  const available = 1.5234;
  const fee = selectedNetwork.fee;
  const numAmount = parseFloat(amount || "0");
  const receiveAmount = Math.max(numAmount - fee, 0);
  const isValidAddress = address.length >= 20;
  const canSubmit = isValidAddress && numAmount > selectedNetwork.minAmount;

  const startVerifyCountdown = () => {
    setVerifyCountdown(60);
    const timer = setInterval(() => {
      setVerifyCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    setShowVerify(true);
    setVerifyStep("email");
    startVerifyCountdown();
  };

  const handleEmailVerify = () => {
    if (emailCode.length >= 4) {
      setVerifyStep("phone");
      startVerifyCountdown();
    }
  };

  const handlePhoneVerify = () => {
    if (phoneCode.length >= 4) {
      setVerifyStep("done");
    }
  };

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 h-11">
        <button onClick={() => router.back()} className="text-foreground" aria-label="返回">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-base font-bold text-foreground">提币 BTC</h1>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-8">
        {/* Address Input */}
        <div className="space-y-1.5">
          <label className="text-xs text-text-secondary">提币地址</label>
          <div className="flex items-center gap-2 bg-bg-secondary rounded-md px-3 h-10">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="输入或粘贴地址"
              className="flex-1 bg-transparent text-sm font-mono text-foreground outline-none placeholder:text-text-tertiary"
            />
            <button className="text-text-secondary" aria-label="扫码">
              <ScanLine className="w-4 h-4" />
            </button>
            <button className="text-text-secondary" aria-label="地址簿">
              <BookOpen className="w-4 h-4" />
            </button>
          </div>
          {address && !isValidAddress && (
            <p className="text-[10px] text-fall">地址格式不正确</p>
          )}
          {address && isValidAddress && (
            <p className="text-[10px] text-rise">地址格式有效</p>
          )}
        </div>

        {/* Network */}
        <div>
          <p className="text-xs text-text-secondary mb-2">提币网络</p>
          <div className="space-y-2">
            {NETWORKS.slice(0, 3).map((network) => (
              <button
                key={network.id}
                onClick={() => setSelectedNetwork(network)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-md transition-colors border",
                  selectedNetwork.id === network.id
                    ? "bg-brand/5 border-brand/30"
                    : "bg-bg-secondary border-transparent"
                )}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{network.name}</span>
                    {network.recommended && (
                      <span className="text-[9px] bg-rise/15 text-rise px-1.5 py-0.5 rounded font-medium">推荐</span>
                    )}
                  </div>
                  <span className="text-[11px] text-text-secondary">{network.fullName}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-foreground font-mono">
                    手续费 {network.fee} BTC
                  </span>
                  <span className="text-[10px] text-text-tertiary block">
                    {network.estimatedTime}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs text-text-secondary">提币数量</label>
            <span className="text-[11px] text-text-tertiary">
              可用 {available} BTC
            </span>
          </div>
          <div className="flex items-center bg-bg-secondary rounded-md px-3 h-10">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="flex-1 bg-transparent text-sm font-mono tabular-nums text-foreground outline-none placeholder:text-text-tertiary"
            />
            <button
              onClick={() => setAmount(available.toString())}
              className="text-xs text-brand font-medium"
            >
              全部
            </button>
          </div>
          <p className="text-[10px] text-text-tertiary">
            最低提币 {selectedNetwork.minAmount} BTC
          </p>
        </div>

        {/* Memo */}
        <div className="space-y-1.5">
          <label className="text-xs text-text-secondary">
            Memo/Tag <span className="text-text-tertiary">(可选)</span>
          </label>
          <div className="flex items-center bg-bg-secondary rounded-md px-3 h-10">
            <input
              type="text"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="如需要请输入"
              className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-text-tertiary"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="bg-bg-secondary rounded-md p-3 space-y-2 text-xs">
          {[
            { l: "网络", v: selectedNetwork.name },
            { l: "手续费", v: `${fee} BTC` },
            { l: "实到数量", v: `${receiveAmount > 0 ? receiveAmount.toFixed(4) : "--"} BTC` },
          ].map((row) => (
            <div key={row.l} className="flex items-center justify-between">
              <span className="text-text-secondary">{row.l}</span>
              <span className="font-mono tabular-nums text-foreground">{row.v}</span>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <span className="text-text-secondary">执行交易所</span>
            <ExchangeBadge exchange="hashkey" size="md" />
          </div>
        </div>

        {/* Warning */}
        <div className="flex gap-2 p-3 rounded-md bg-fall/5 border border-fall/10">
          <AlertTriangle className="w-4 h-4 text-fall shrink-0 mt-0.5" />
          <p className="text-[11px] text-text-secondary leading-relaxed">
            请仔细核对提币地址和网络。资产一旦发送至错误的地址或网络，将无法找回。
          </p>
        </div>

        {/* Submit */}
        <button
          onClick={canSubmit ? handleSubmit : undefined}
          disabled={!canSubmit}
          className={cn(
            "w-full py-3.5 rounded-md font-semibold text-sm transition-colors",
            canSubmit
              ? "bg-brand text-foreground"
              : "bg-bg-tertiary text-text-tertiary cursor-not-allowed"
          )}
        >
          提币
        </button>
      </div>

      {/* Security Verification */}
      <BottomSheet
        open={showVerify}
        onClose={() => setShowVerify(false)}
        title="安全验证"
      >
        <div className="space-y-4">
          {verifyStep === "done" ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <CheckCircle2 className="w-12 h-12 text-rise" />
              <p className="text-base font-semibold text-foreground">
                提币申请已提交
              </p>
              <p className="text-xs text-text-secondary text-center">
                预计 {selectedNetwork.estimatedTime} 到账，请留意交易状态更新
              </p>
              <button
                onClick={() => {
                  setShowVerify(false);
                  router.push("/assets");
                }}
                className="w-full py-3 rounded-md bg-brand text-foreground font-medium text-sm mt-2"
              >
                返回资产页
              </button>
            </div>
          ) : (
            <>
              {/* Steps indicator */}
              <div className="flex items-center gap-2 justify-center">
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    verifyStep === "email" ? "bg-brand" : "bg-rise"
                  )}
                />
                <div className="w-8 h-0.5 bg-border-light" />
                <div
                  className={cn(
                    "w-2 h-2 rounded-full",
                    verifyStep === "phone" ? "bg-brand" : "bg-border-light"
                  )}
                />
              </div>

              <p className="text-sm text-text-secondary text-center">
                {verifyStep === "email"
                  ? "验证码已发送至 e***@gmail.com"
                  : "验证码已发送至 +852 ****5678"}
              </p>

              <div className="flex items-center gap-2 bg-bg-tertiary rounded-md px-3 h-10">
                <input
                  type="text"
                  value={verifyStep === "email" ? emailCode : phoneCode}
                  onChange={(e) =>
                    verifyStep === "email"
                      ? setEmailCode(e.target.value)
                      : setPhoneCode(e.target.value)
                  }
                  placeholder="输入验证码"
                  maxLength={6}
                  className="flex-1 bg-transparent text-sm font-mono text-foreground outline-none text-center tracking-widest placeholder:text-text-tertiary"
                />
                <button
                  disabled={verifyCountdown > 0}
                  onClick={startVerifyCountdown}
                  className={cn(
                    "text-xs font-medium shrink-0",
                    verifyCountdown > 0
                      ? "text-text-tertiary"
                      : "text-brand"
                  )}
                >
                  {verifyCountdown > 0
                    ? `${verifyCountdown}s`
                    : "重新发送"}
                </button>
              </div>

              <button
                onClick={
                  verifyStep === "email"
                    ? handleEmailVerify
                    : handlePhoneVerify
                }
                className="w-full py-3 rounded-md bg-brand text-foreground font-semibold text-sm"
              >
                {verifyStep === "email" ? "下一步" : "确认提币"}
              </button>
            </>
          )}
        </div>
      </BottomSheet>
    </MobileShell>
  );
}
