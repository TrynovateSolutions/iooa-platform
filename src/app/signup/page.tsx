"use client";

import Image from "next/image";
import { Building2, Mail, MapPin, Phone, User } from "lucide-react";
import Turnstile from "react-turnstile";
import { useState } from "react";

export default function PremiumRegisterPage() {
  const [token, setToken] = useState("");
  const [division, setDivision] = useState("");
  const [location, setLocation] = useState("");

  const divisionLocationMap: Record<string, string[]> = {
    AOD: ["AOD-Refinery"],

    BRPL: ["Bongaigaon Refinery"],

    "Corporate Office": ["Business Development", "Refinery HO"],

    IBP: ["IndianOil Cryogenics", "IndianOil Explosives"],

    Marketing: [
      "Bihar State Office",
      "Delhi & Haryana SO",
      "Eastern Region Office",
      "Gujarat State Office",
      "Indian Oil AOD",
      "Karnataka State Office",
      "Madhya Pradesh SO",
      "Maharashtra State Office",
      "Marketing Head Office",
      "Northern Region Office",
      "Odisha State Office",
      "Punjab & Himachal SO",
      "Rajasthan State Office",
      "Southern Region Office",
      "Tamil Nadu State Office",
      "TAPSO",
      "Uttar Pradesh SO I",
      "Uttar Pradesh SO II",
      "West Bengal State Office",
      "Western Region Office",
    ],

    Pipelines: [
      "Barauni-Kanpur Pipeline",
      "City Gas Distribution",
      "Eastern Reg HQ - Pipeline",
      "Guwahati-Siliguri Pipeline",
      "Haldia-Mauri-Rajb-Barauni",
      "Koyali Refy based Prod PL",
      "Mathura Refy based Prod PL",
      "Mundra Panipat Crude PL",
      "Paradip Raipur Ranchi Ppl",
      "Paradip-Hyderabad PL",
      "Pdrp-Hld-Barauni Crude PL",
      "Pipeline HO",
      "PL Constn Office, Jaipur",
      "Salaya-Mathura Pipeline",
      "Southern Region PL",
    ],

    "R&D Centre": ["Research & Development"],

    Refineries: [
      "Barauni Refinery",
      "Gujarat Refinery",
      "Guwahati Refinery",
      "Haldia Refinery",
      "Mathura Refinery",
      "Panipat Refinery",
      "Paradip Refinery",
      "Refinery HO",
    ],
  };

  return (
    <div
      className="
    min-h-screen
    bg-[#071120]
    flex
    justify-center
    relative
    overflow-hidden    
    px-6
  "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute bottom-[-140px] right-[-140px] h-[340px] w-[340px] rounded-full bg-blue-500/20 blur-3xl" />

      <div
        className="
    w-full
    max-w-[520px]
    mx-auto
    flex
    flex-col
    items-center
    gap-4
    pt-16
    pb-10f
  "
      >
        <div className="h-2" />
        {/* LOGO */}
        <div className="relative mb-2">
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl" />

          <div
            className="
              relative
              h-[92px]
              w-[92px]
              rounded-full
              border
              border-white/20
              bg-white/30
              backdrop-blur-xl
              flex
              items-center
              justify-center
              shadow-[0_12px_40px_rgba(0,0,0,0.30)]
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
                px-8
                py-6
              "
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 pt-2">
              <h1 className="text-white text-[30px] font-semibold tracking-tight">
                Create Account
              </h1>

              <p
                className="
                  text-white/55
                  text-[15px]
                  text-center
                  leading-[28px]
                  max-w-[340px]
                "
              >
                Register to access your employee retirement dashboard.
              </p>
            </div>

            {/* FORM */}
            <div className="flex flex-col items-center gap-5">
              {/* EMP CODE */}
              <div
                className="
                  relative
                  h-[66px]
                  w-[90%]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  flex
                  items-center
                  px-5
                  gap-4
                "
              >
                <User size={20} className="text-orange-400 shrink-0" />

                <input
                  type="text"
                  placeholder="Enter Employee Code"
                  className="
                    flex-1
                    bg-transparent
                    text-white
                    text-[15px]
                    font-medium
                    outline-none
                    placeholder:text-white/35
                  "
                />
              </div>
              <div
                className="
                  relative
                  h-[66px]
                  w-[90%]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  flex
                  items-center
                  px-5
                  gap-4
                "
              >
                <User size={20} className="text-orange-400 shrink-0" />

                <input
                  type="text"
                  placeholder="Enter Employee Name"
                  className="
                    flex-1
                    bg-transparent
                    text-white
                    text-[15px]
                    font-medium
                    outline-none
                    placeholder:text-white/35
                  "
                />
              </div>
              <div
                className="   group
                              relative
                              h-[68px]
                              w-[90%]
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.05]
                              backdrop-blur-xl
                              flex
                              items-center
                              px-5
                              gap-4
                              transition-all
                              duration-300
                              hover:border-orange-400
                              hover:bg-orange-500/[0.08]
                              focus-within:border-orange-400
                              focus-within:bg-orange-500/[0.08]
                              focus-within:shadow-[0_0_0_4px_rgba(255,140,0,0.12)]
                            "
              >
                <Building2
                  size={20}
                  className="
      text-orange-400
      shrink-0
    "
                />

                <select
                  value={division}
                  onChange={(e) => {
                    setDivision(e.target.value);
                    setLocation("");
                  }}
                  className="
      flex-1
      h-full
      bg-transparent
      text-white
      text-[15px]
      font-semibold
      outline-none
      appearance-none
      cursor-pointer
      text-center
      pr-8
      transition-all
      duration-300
    "
                >
                  <option
                    value=""
                    disabled
                    className="
        bg-[#0B1728]
        text-white
      "
                  >
                    Select Division
                  </option>

                  {Object.keys(divisionLocationMap).map((division) => (
                    <option
                      key={division}
                      value={division}
                      className="
          bg-[#0B1728]
          text-white
          hover:bg-orange-500
        "
                    >
                      {division}
                    </option>
                  ))}
                </select>

                {/* PREMIUM ARROW */}
                <div
                  className="
    absolute
    right-5
    pointer-events-none
    text-orange-400
    text-[11px]
    transition-all
    duration-300
    group-hover:text-orange-300
  "
                >
                  ▼
                </div>
              </div>
              <div
                className={`    group
                                relative
                                h-[68px]
                                w-[90%]
                                rounded-2xl
                                border
                                flex
                                items-center
                                px-5
                                gap-4
                                backdrop-blur-xl
                                transition-all
                                duration-300
                                ${
                                  division
                                    ? `
                                      border-white/10
                                      bg-white/[0.05]
                                      hover:border-orange-400
                                      hover:bg-orange-500/[0.08]
                                      focus-within:border-orange-400
                                      focus-within:bg-orange-500/[0.08]
                                      focus-within:shadow-[0_0_0_4px_rgba(255,140,0,0.12)]
                                    `
                                    : `
                                      border-white/10
                                      bg-white/[0.03]
                                      opacity-60
                                    `
                                }
                              `}
              >
                <MapPin
                  size={20}
                  className="
      text-orange-400
      shrink-0
    "
                />

                <select
                  value={location}
                  disabled={!division}
                  onChange={(e) => setLocation(e.target.value)}
                  className="
      flex-1
      h-full
      bg-transparent
      text-white
      text-[15px]
      font-semibold
      outline-none
      appearance-none
      cursor-pointer
      text-center
      pr-8
      transition-all
      duration-300
      disabled:cursor-not-allowed
    "
                >
                  <option
                    value=""
                    disabled
                    className="
        bg-[#0B1728]
        text-white
      "
                  >
                    {division ? "Select Location" : "Select Division First"}
                  </option>

                  {divisionLocationMap[division]?.map((loc) => (
                    <option
                      key={loc}
                      value={loc}
                      className="
          bg-[#0B1728]
          text-white
        "
                    >
                      {loc}
                    </option>
                  ))}
                </select>

                {/* PREMIUM ARROW */}
                <div
                  className="
    absolute
    right-5
    pointer-events-none
    text-orange-400
    text-[11px]
    transition-all
    duration-300
    group-hover:text-orange-300
  "
                >
                  ▼
                </div>
              </div>
              <div
                className="
                  relative
                  h-[66px]
                  w-[90%]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  flex
                  items-center
                  px-5
                  gap-4
                "
              >
                <Mail size={20} className="text-orange-400 shrink-0" />
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="
                    flex-1
                    bg-transparent
                    text-white
                    text-[15px]
                    font-medium
                    outline-none
                    placeholder:text-white/35
                  "
                />
              </div>
              <div
                className="
                  relative
                  h-[66px]
                  w-[90%]
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  flex
                  items-center
                  px-5
                  gap-4
                "
              >
                <Phone size={20} className="text-orange-400 shrink-0" />

                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  className="
                    flex-1
                    bg-transparent
                    text-white
                    text-[15px]
                    font-medium
                    outline-none
                    placeholder:text-white/35
                  "
                />
              </div>
              <div className="w-[90%] flex justify-center pt-1">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-2
                    py-2
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
                  w-[90%]
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
                Register Now
              </button>
              <p
                className="
                  pt-1
                  text-center
                  text-white/40
                  text-[13px]
                  leading-[24px]
                  max-w-[360px]
                "
              >
                By continuing, you agree to our Terms & Privacy Policy.
              </p>
            </div>
          </div>
        </div>
        <div className="h-2" />
      </div>
    </div>
  );
}
