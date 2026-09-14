"use client";

import {
  ArrowRight,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link"; // 👈 1. Import Link
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type Step = "MOBILE" | "OTP" | "SUCCESS";

export default function LoginForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("MOBILE");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer logic for Resend OTP
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === "OTP" && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  // Handle Mobile Submit
  const handleMobileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep("OTP");
        setTimer(30);
        setTimeout(() => otpRefs.current[0]?.focus(), 100);
      }, 1000);
    }
  };

  // Handle OTP Change
  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  // Handle OTP Backspace
  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP Paste
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    if (pastedData.some((char) => isNaN(Number(char)))) return;

    const newOtp = [...otp];
    pastedData.forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);
    otpRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  // Handle OTP Submit
  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setStep("SUCCESS");

        // 👈 2. Navigate to profile after success animation
        setTimeout(() => {
          router.push("/profile");
        }, 1500);
      }, 1500);
    }
  };

  return (
    <div className="relative flex flex-col justify-center bg-white p-8 sm:p-12 min-h-[500px]">
      <div className="mx-auto w-full max-w-sm">
        {/* STEP 1: MOBILE NUMBER */}
        {step === "MOBILE" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Sign in
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Enter your mobile number to continue.
              </p>
            </div>

            <form onSubmit={handleMobileSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Mobile Number
                </label>
                <div className="group flex rounded-2xl bg-slate-50 border border-slate-200 focus-within:bg-white focus-within:border-[#bf2629] focus-within:ring-4 focus-within:ring-[#bf2629]/10 transition-all duration-300">
                  <span className="flex items-center px-4 text-sm font-medium text-slate-500 border-r border-slate-200">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, ""))
                    }
                    className="min-w-0 flex-1 bg-transparent px-4 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none"
                    placeholder="98765 43210"
                    maxLength={10}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || mobile.length < 10}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#bf2629] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-[#bf2629]/30 transition-all hover:bg-[#a62023] hover:shadow-[#bf2629]/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    "Continue"
                  )}
                  {!isLoading && (
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </span>
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: OTP VERIFICATION */}
        {step === "OTP" && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <button
              onClick={() => setStep("MOBILE")}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Verify OTP
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                We sent a 6-digit code to{" "}
                <span className="font-bold text-slate-800">+91 {mobile}</span>
              </p>
            </div>

            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  Enter OTP
                </label>
                <div className="flex gap-2 justify-between">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        otpRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      className="h-14 w-12 rounded-xl border border-slate-200 bg-slate-50 text-center text-xl font-bold text-slate-900 focus:border-[#bf2629] focus:bg-white focus:ring-4 focus:ring-[#bf2629]/10 outline-none transition-all duration-200"
                      maxLength={1}
                      required
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">Didn't receive code?</span>
                {timer > 0 ? (
                  <span className="font-medium text-slate-400">
                    Resend in 00:{timer.toString().padStart(2, "0")}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => setTimer(30)}
                    className="font-bold text-[#bf2629] hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading || otp.join("").length < 6}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#bf2629] px-4 py-4 text-sm font-bold text-white shadow-lg shadow-[#bf2629]/30 transition-all hover:bg-[#a62023] hover:shadow-[#bf2629]/40 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    "Verify & Login"
                  )}
                  {!isLoading && <ShieldCheck size={16} />}
                </span>
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === "SUCCESS" && (
          <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center text-center py-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Welcome back!
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-xs">
              You have successfully logged in. Redirecting to your profile...
            </p>
            <div className="mt-8 w-full">
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#bf2629] w-full animate-[progress_2s_ease-in-out_forwards]" />
              </div>
            </div>
          </div>
        )}

        {/* Footer Security Note (Hidden on Success) */}
        {step !== "SUCCESS" && (
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-400 animate-in fade-in duration-500">
            <Lock size={14} className="mt-0.5 shrink-0" />
            <p>
              By continuing, you agree to our{" "}
              {/* 👈 3. Updated Links to point to legal pages */}
              <Link
                href="/terms-of-service"
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-[#bf2629]"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-[#bf2629]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
