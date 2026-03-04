"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  Upload,
  Camera,
  CheckCircle2,
  Shield,
} from "lucide-react";
import { MobileShell } from "@/components/layout/mobile-shell";
import { StatusBar } from "@/components/layout/status-bar";
import { ExchangeBadge } from "@/components/shared/exchange-badge";
import { RiskDisclosure } from "@/components/shared/risk-disclosure";
import { EXCHANGES, type ExchangeId } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type Step = 0 | 1 | 2 | 3;

const STEPS = ["欢迎", "注册", "身份认证", "绑定交易所"];

const ID_TYPES = [
  { id: "id_card", label: "身份证" },
  { id: "passport", label: "护照" },
  { id: "driving", label: "驾驶证" },
];

const EXCHANGE_LIST: { id: ExchangeId; assets: string[]; feeRate: string }[] = [
  { id: "hashkey", assets: ["加密货币", "港股"], feeRate: "0.10%" },
  { id: "bullish", assets: ["加密货币", "美股"], feeRate: "0.08%" },
  { id: "osl", assets: ["加密货币", "外汇"], feeRate: "0.12%" },
  { id: "vdx", assets: ["加密货币"], feeRate: "0.15%" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(0);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [selectedIdType, setSelectedIdType] = useState("id_card");
  const [frontUploaded, setFrontUploaded] = useState(false);
  const [backUploaded, setBackUploaded] = useState(false);
  const [selectedExchanges, setSelectedExchanges] = useState<ExchangeId[]>([
    "hashkey",
  ]);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 0) as Step);

  const startCountdown = () => {
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const passwordStrength = (() => {
    if (password.length < 6) return { level: 0, label: "", color: "" };
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) return { level: 1, label: "弱", color: "bg-fall" };
    if (score <= 2) return { level: 2, label: "中", color: "bg-[#F59E0B]" };
    return { level: 3, label: "强", color: "bg-rise" };
  })();

  const toggleExchange = (exId: ExchangeId) => {
    setSelectedExchanges((prev) =>
      prev.includes(exId)
        ? prev.filter((e) => e !== exId)
        : [...prev, exId]
    );
  };

  return (
    <MobileShell>
      <StatusBar />

      {/* Nav with Progress */}
      <div className="flex items-center justify-between px-4 h-11">
        {step > 0 ? (
          <button onClick={prevStep} className="text-foreground" aria-label="返回">
            <ChevronLeft className="w-6 h-6" />
          </button>
        ) : (
          <div className="w-6" />
        )}
        <div className="flex items-center gap-1">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 rounded-full transition-all",
                i <= step ? "bg-brand w-6" : "bg-border-light w-3"
              )}
            />
          ))}
        </div>
        <div className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col">
        {/* ===== Step 0: Welcome ===== */}
        {step === 0 && (
          <div className="flex-1 flex flex-col px-6 pt-12">
            {/* Logo */}
            <div className="flex flex-col items-center mb-10">
              <div className="w-20 h-20 rounded-2xl bg-brand flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-foreground">ZR</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground text-center text-balance">
                卓锐证券
              </h1>
              <p className="text-sm text-text-secondary mt-2 text-center text-balance leading-relaxed">
                多资产类别聚合交易平台
                <br />
                加密货币 / 港股 / 美股 / 外汇
              </p>
            </div>

            <div className="flex-1" />

            {/* Actions */}
            <div className="space-y-3 pb-8">
              <button
                onClick={nextStep}
                className="w-full py-3.5 rounded-md bg-brand text-foreground font-semibold text-sm"
              >
                注册
              </button>
              <button className="w-full py-3.5 rounded-md bg-bg-secondary text-foreground font-medium text-sm">
                登录
              </button>

              {/* Social Login */}
              <div className="flex items-center gap-4 justify-center pt-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-text-tertiary">或使用</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex items-center justify-center gap-4 pt-2">
                {["Google", "Apple"].map((provider) => (
                  <button
                    key={provider}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-bg-secondary border border-border"
                  >
                    <span className="text-xs font-semibold text-text-secondary">
                      {provider.charAt(0)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Compliance */}
              <p className="text-[10px] text-text-tertiary text-center leading-relaxed pt-4">
                注册即表示您同意
                <span className="text-brand"> 用户协议</span> 和
                <span className="text-brand"> 隐私政策</span>
                <br />
                本平台由香港证监会(SFC)监管
              </p>
            </div>
          </div>
        )}

        {/* ===== Step 1: Registration ===== */}
        {step === 1 && (
          <div className="flex-1 flex flex-col px-6 pt-6">
            <h2 className="text-xl font-bold text-foreground mb-1">创建账户</h2>
            <p className="text-sm text-text-secondary mb-6">
              输入您的手机号码开始注册
            </p>

            <div className="space-y-4 flex-1">
              {/* Phone Input */}
              <div className="space-y-1.5">
                <label className="text-xs text-text-secondary">手机号码</label>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 bg-bg-secondary rounded-md px-3 h-10 shrink-0">
                    <span className="text-sm text-foreground">+852</span>
                    <ChevronRight className="w-3 h-3 text-text-secondary rotate-90" />
                  </button>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="手机号码"
                    className="flex-1 bg-bg-secondary rounded-md px-3 h-10 text-sm text-foreground outline-none placeholder:text-text-tertiary"
                  />
                </div>
              </div>

              {/* Verify Code */}
              <div className="space-y-1.5">
                <label className="text-xs text-text-secondary">验证码</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                    placeholder="输入验证码"
                    maxLength={6}
                    className="flex-1 bg-bg-secondary rounded-md px-3 h-10 text-sm font-mono text-foreground outline-none tracking-widest placeholder:text-text-tertiary"
                  />
                  <button
                    disabled={countdown > 0 || phone.length < 4}
                    onClick={startCountdown}
                    className={cn(
                      "shrink-0 px-4 h-10 rounded-md text-xs font-medium",
                      countdown > 0 || phone.length < 4
                        ? "bg-bg-tertiary text-text-tertiary"
                        : "bg-brand text-foreground"
                    )}
                  >
                    {countdown > 0 ? `${countdown}s` : "获取验证码"}
                  </button>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs text-text-secondary">设置密码</label>
                <div className="flex items-center bg-bg-secondary rounded-md px-3 h-10">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="至少8位，含大小写字母和数字"
                    className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-text-tertiary"
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-text-secondary"
                    aria-label={showPassword ? "隐藏密码" : "显示密码"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {/* Strength Indicator */}
                {password.length > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 flex-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={cn(
                            "h-1 flex-1 rounded-full",
                            level <= passwordStrength.level
                              ? passwordStrength.color
                              : "bg-border-light"
                          )}
                        />
                      ))}
                    </div>
                    <span
                      className={cn(
                        "text-[10px]",
                        passwordStrength.level <= 1
                          ? "text-fall"
                          : passwordStrength.level === 2
                          ? "text-[#F59E0B]"
                          : "text-rise"
                      )}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Next */}
            <div className="pb-8 pt-4">
              <button
                onClick={nextStep}
                disabled={!phone || !verifyCode || password.length < 6}
                className={cn(
                  "w-full py-3.5 rounded-md font-semibold text-sm",
                  phone && verifyCode && password.length >= 6
                    ? "bg-brand text-foreground"
                    : "bg-bg-tertiary text-text-tertiary cursor-not-allowed"
                )}
              >
                下一步
              </button>
            </div>
          </div>
        )}

        {/* ===== Step 2: KYC ===== */}
        {step === 2 && (
          <div className="flex-1 flex flex-col px-6 pt-6">
            <h2 className="text-xl font-bold text-foreground mb-1">
              身份认证 (KYC)
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              根据香港证监会要求，需要验证您的身份
            </p>

            <div className="space-y-4 flex-1">
              {/* ID Type */}
              <div className="space-y-1.5">
                <label className="text-xs text-text-secondary">证件类型</label>
                <div className="flex gap-2">
                  {ID_TYPES.map((idType) => (
                    <button
                      key={idType.id}
                      onClick={() => setSelectedIdType(idType.id)}
                      className={cn(
                        "flex-1 py-2 text-xs font-medium rounded-md transition-colors",
                        selectedIdType === idType.id
                          ? "bg-brand/15 text-brand border border-brand/30"
                          : "bg-bg-secondary text-text-secondary border border-transparent"
                      )}
                    >
                      {idType.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Upload Front */}
              <div className="space-y-1.5">
                <label className="text-xs text-text-secondary">证件正面</label>
                <button
                  onClick={() => setFrontUploaded(true)}
                  className={cn(
                    "w-full h-32 rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-colors",
                    frontUploaded
                      ? "border-rise/30 bg-rise/5"
                      : "border-border-light bg-bg-secondary"
                  )}
                >
                  {frontUploaded ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-rise" />
                      <span className="text-xs text-rise">已上传</span>
                    </>
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-text-secondary" />
                      <span className="text-xs text-text-secondary">
                        拍照或上传证件正面
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* Upload Back */}
              <div className="space-y-1.5">
                <label className="text-xs text-text-secondary">证件反面</label>
                <button
                  onClick={() => setBackUploaded(true)}
                  className={cn(
                    "w-full h-32 rounded-md border-2 border-dashed flex flex-col items-center justify-center gap-2 transition-colors",
                    backUploaded
                      ? "border-rise/30 bg-rise/5"
                      : "border-border-light bg-bg-secondary"
                  )}
                >
                  {backUploaded ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-rise" />
                      <span className="text-xs text-rise">已上传</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-text-secondary" />
                      <span className="text-xs text-text-secondary">
                        拍照或上传证件反面
                      </span>
                    </>
                  )}
                </button>
              </div>

              {/* SFC Notice */}
              <div className="flex items-start gap-2 p-3 rounded-md bg-brand/5 border border-brand/10">
                <Shield className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  您的身份信息将通过加密传输，并由持牌机构安全存储。
                  我们遵守香港个人资料(隐私)条例的所有规定。
                </p>
              </div>
            </div>

            <div className="pb-8 pt-4">
              <button
                onClick={nextStep}
                disabled={!frontUploaded || !backUploaded}
                className={cn(
                  "w-full py-3.5 rounded-md font-semibold text-sm",
                  frontUploaded && backUploaded
                    ? "bg-brand text-foreground"
                    : "bg-bg-tertiary text-text-tertiary cursor-not-allowed"
                )}
              >
                下一步
              </button>
            </div>
          </div>
        )}

        {/* ===== Step 3: Exchange Binding (ZR Unique) ===== */}
        {step === 3 && (
          <div className="flex-1 flex flex-col px-6 pt-6">
            <h2 className="text-xl font-bold text-foreground mb-1">
              绑定交易所
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              选择您想要使用的持牌交易所（可多选）
            </p>

            <div className="space-y-3 flex-1">
              {EXCHANGE_LIST.map((ex) => {
                const exchange = EXCHANGES[ex.id];
                const selected = selectedExchanges.includes(ex.id);

                return (
                  <button
                    key={ex.id}
                    onClick={() => toggleExchange(ex.id)}
                    className={cn(
                      "w-full p-4 rounded-lg border transition-all text-left",
                      selected
                        ? "border-brand/40 bg-brand/5"
                        : "border-border bg-bg-secondary"
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-foreground"
                          style={{ backgroundColor: `${exchange.color}25` }}
                        >
                          {exchange.name.slice(0, 2)}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-foreground">
                            {exchange.name}
                          </span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <span
                              className={cn(
                                "text-[9px] px-1 py-0.5 rounded",
                                exchange.status === "active"
                                  ? "bg-rise/15 text-rise"
                                  : "bg-[#F59E0B]/15 text-[#F59E0B]"
                              )}
                            >
                              {exchange.status === "active" ? "运营中" : "维护中"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                          selected ? "border-brand bg-brand" : "border-border-light"
                        )}
                      >
                        {selected && (
                          <span className="text-[10px] text-foreground">&#10003;</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px]">
                      <div>
                        <span className="text-text-tertiary">支持资产: </span>
                        <span className="text-text-secondary">
                          {ex.assets.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className="text-text-tertiary">费率: </span>
                        <span className="text-text-secondary font-mono">
                          {ex.feeRate}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}

              <RiskDisclosure compact className="mt-3" />
            </div>

            <div className="pb-8 pt-4">
              <button
                onClick={() => router.push("/markets")}
                disabled={selectedExchanges.length === 0}
                className={cn(
                  "w-full py-3.5 rounded-md font-semibold text-sm",
                  selectedExchanges.length > 0
                    ? "bg-brand text-foreground"
                    : "bg-bg-tertiary text-text-tertiary cursor-not-allowed"
                )}
              >
                完成注册
              </button>
            </div>
          </div>
        )}
      </div>
    </MobileShell>
  );
}
