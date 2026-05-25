"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Turnstile from "react-turnstile";
import { useState } from "react";

export default function PremiumLoginPage() {
  const [token, setToken] = useState("");
  return (
    <div className="min-h-screen bg-[#071120] flex items-center justify-center px-6 py-5 relative overflow-hidden">
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="w-full max-w-[440px] flex flex-col items-center justify-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl" />
          <div
            className="    relative    h-[92px]
w-[92px]    rounded-full    border    border-white/20
    bg-white/30    backdrop-blur-xl    flex    items-center    justify-center    shadow-[0_12px_40px_rgba(0,0,0,0.30)]
  "
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={110}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="
            relative
            w-full
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            px-8 py-8
          "
        >
          <div className="flex flex-col gap-5 pt-4">
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-white text-[28px] font-semibold tracking-tight">
                Welcome Back
              </h1>
              <p
                className="
                  text-white/55
                  text-[15px]
                  text-center
                  leading-[28px]
                  max-w-[300px]
                "
              >
                Sign in to continue accessing your premium dashboard.
              </p>
            </div>

            <div className="flex flex-col items-center gap-7">
              <div
                className="
    relative
    h-[68px]
    w-[88%]
    rounded-2xl
    border
    border-white/10
    bg-white/[0.05]
    flex
    items-center
    px-6
    gap-4
  "
              >
                <div className="flex items-center gap-3 text-orange-400 shrink-0">
                  <Mail size={20} />
                  <Phone size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Enter email or phone number"
                  className="
      flex-1
      bg-transparent
      text-white
      text-[16px]
      font-medium
      outline-none
      placeholder:text-white/35
      placeholder:text-[16px]
    "
                />
              </div>
              <div className="w-[88%] flex justify-center">
                <div
                  className="
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      px-2 py-2
      backdrop-blur-xl
    "
                >
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    theme="dark"
                    onVerify={(token) => {
                      setToken(token);
                    }}
                  />
                </div>
              </div>
              <button
                disabled={!token}
                className="
    h-[64px]
    w-[88%]
    rounded-2xl
    bg-gradient-to-r
    from-orange-500
    to-orange-600
    text-white
    text-[16px]
    font-semibold
    tracking-wide
    shadow-[0_16px_40px_rgba(255,140,0,0.38)]
    hover:scale-[1.02]
    hover:shadow-[0_18px_50px_rgba(255,140,0,0.50)]
    active:scale-[0.99]
    transition-all
    duration-300
    disabled:opacity-40
    disabled:cursor-not-allowed
  "
              >
                Continue
              </button>
              <p
                className="
                  pt-2
                  text-center
                  text-white/40
                  text-[13px]
                  leading-[24px]
                "
              >
                By continuing, you agree to our Terms & Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
