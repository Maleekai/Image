"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  Copy,
  Share2,
  Check,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { NETWORKS, type Network } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const COINS = [
  { id: "btc", symbol: "BTC", name: "Bitcoin" },
  { id: "eth", symbol: "ETH", name: "Ethereum" },
  { id: "usdt", symbol: "USDT", name: "Tether" },
  { id: "sol", symbol: "SOL", name: "Solana" },
  { id: "bnb", symbol: "BNB", name: "BNB" },
  { id: "xrp", symbol: "XRP", name: "Ripple" },
];

const MOCK_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

export default function DepositPage() {
  const router = useRouter();
  const [selectedCoin, setSelectedCoin] = useState(COINS[0]);
  const [selectedNetwork, setSelectedNetwork] = useState<Network>(NETWORKS[0]);
  const [copied, setCopied] = useState(false);
  const [showCoinSelect, setShowCoinSelect] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MOCK_ADDRESS).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav */}
      <div className="flex items-center justify-between px-4 h-11">
        <button onClick={() => router.back()} className="text-foreground" aria-label="返回">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-base font-bold text-foreground">
          充值 {selectedCoin.symbol}
        </h1>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-8">
        {/* Coin Selector */}
        <button
          onClick={() => setShowCoinSelect(!showCoinSelect)}
          className="flex items-center justify-between w-full bg-bg-secondary rounded-md px-3 py-2.5"
        >
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-foreground"
              style={{
                backgroundColor: `hsl(${selectedCoin.symbol.charCodeAt(0) * 7 % 360}, 50%, 30%)`,
              }}
            >
              {selectedCoin.symbol.slice(0, 2)}
            </div>
            <div className="text-left">
              <span className="text-sm font-semibold text-foreground">
                {selectedCoin.symbol}
              </span>
              <span className="text-xs text-text-secondary ml-1.5">
                {selectedCoin.name}
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-text-secondary" />
        </button>

        {/* Coin Quick Select */}
        {showCoinSelect && (
          <div className="bg-bg-secondary rounded-md p-3 animate-fade-in">
            <p className="text-xs text-text-secondary mb-2">选择币种</p>
            <div className="grid grid-cols-3 gap-2">
              {COINS.map((coin) => (
                <button
                  key={coin.id}
                  onClick={() => {
                    setSelectedCoin(coin);
                    setShowCoinSelect(false);
                  }}
                  className={cn(
                    "flex items-center gap-1.5 px-2 py-2 rounded-md text-xs transition-colors",
                    selectedCoin.id === coin.id
                      ? "bg-brand/15 text-brand"
                      : "bg-bg-tertiary text-text-secondary"
                  )}
                >
                  {coin.symbol}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Network Selection */}
        <div>
          <p className="text-xs text-text-secondary mb-2">选择网络</p>
          <div className="space-y-2">
            {NETWORKS.map((network) => (
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
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">
                      {network.name}
                    </span>
                    {network.recommended && (
                      <span className="text-[9px] bg-rise/15 text-rise px-1.5 py-0.5 rounded font-medium">
                        推荐
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-text-secondary">
                    {network.fullName}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-text-secondary block">
                    {network.estimatedTime}
                  </span>
                  <span className="text-[10px] text-text-tertiary">
                    {network.confirmations} 次确认
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* QR Code + Address */}
        <div className="flex flex-col items-center bg-bg-secondary rounded-lg p-4">
          {/* Simulated QR Code */}
          <div className="w-40 h-40 bg-foreground rounded-lg flex items-center justify-center mb-3">
            <div className="grid grid-cols-8 gap-0.5 w-32 h-32">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-full aspect-square rounded-[1px]",
                    Math.random() > 0.45 ? "bg-background" : "bg-foreground"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="w-full bg-bg-tertiary rounded-md p-3 mt-2">
            <p className="text-[11px] text-text-secondary mb-1">充值地址</p>
            <p className="text-xs font-mono text-foreground break-all leading-relaxed">
              {MOCK_ADDRESS}
            </p>
          </div>

          {/* Copy + Share */}
          <div className="flex gap-3 mt-3 w-full">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-md bg-brand text-foreground text-sm font-medium"
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
              {copied ? "已复制" : "复制地址"}
            </button>
            <button className="flex items-center justify-center w-10 py-2.5 rounded-md bg-bg-tertiary text-text-secondary">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Important Notices */}
        <div className="bg-fall/5 border border-fall/10 rounded-md p-3 space-y-2">
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-fall shrink-0" />
            <span className="text-xs font-medium text-fall">重要提示</span>
          </div>
          <ul className="space-y-1.5 text-[11px] text-text-secondary leading-relaxed">
            <li>
              最低充值金额: <span className="text-foreground font-mono">{selectedNetwork.minAmount} {selectedCoin.symbol}</span>
            </li>
            <li>
              所需确认数: <span className="text-foreground font-mono">{selectedNetwork.confirmations} 次</span>
            </li>
            <li>
              预计到账时间: <span className="text-foreground">{selectedNetwork.estimatedTime}</span>
            </li>
            <li className="text-fall font-medium">
              请勿向此地址充值非 {selectedCoin.symbol} 资产，否则资产将不可找回。
            </li>
          </ul>
        </div>
      </div>
    </MobileShell>
  );
}
