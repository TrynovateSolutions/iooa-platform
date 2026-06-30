"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [aicecOpen, setAicecOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#e9edf5] shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-10">
        <div className="hidden lg:grid grid-cols-[220px_1fr_220px] items-center h-[82px]">
          <div className="relative left-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Indian Oil Officers Association"
                width={120}
                height={120}
                priority
                className="h-[50px] w-auto object-contain"
              />
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-[#02144d] font-extrabold leading-tight tracking-wide">
              <span className="block text-[28px] xl:text-[32px] whitespace-nowrap">
                Indian Oil Officers Association
              </span>
            </h1>
          </div>
          <div className="flex items-center justify-end gap-4 relative right-6">
            <Link
              href="/login"
              className="h-[46px] min-w-[120px] px-7 inline-flex items-center justify-center rounded-[12px] border-2 border-[#02144d] bg-white text-[#02144d] text-[14px] font-semibold tracking-wide shadow-sm transition-all duration-300 hover:bg-[#02144d] hover:text-white hover:shadow-lg"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="h-[46px] min-w-[120px] px-7 inline-flex items-center justify-center rounded-[12px] bg-gradient-to-r from-[#f37022] to-[#ff8c42] text-white text-[14px] font-semibold tracking-wide shadow-[0_8px_20px_rgba(243,112,34,0.28)] transition-all duration-300 hover:shadow-[0_12px_28px_rgba(243,112,34,0.38)] hover:-translate-y-[1px]"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="h-[74px] flex items-center">
            <div className="w-[72px] flex justify-start items-center">
              <Link href="/" className="shrink-0">
                <Image
                  src="/logo.png"
                  alt="Indian Oil Officers Association"
                  width={80}
                  height={80}
                  priority
                  className="h-[40px] w-auto object-contain"
                />
              </Link>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
              <h1 className="text-[#02144d] font-extrabold text-[18px] leading-tight whitespace-nowrap">
                Indian Oil
              </h1>

              <p className="text-[#f37022] text-[13px] font-semibold leading-tight whitespace-nowrap">
                Officers Association
              </p>
            </div>
            <div className="w-[72px] flex justify-end items-center">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="relative z-50 h-[46px] w-[46px] flex items-center justify-center rounded-2xl border border-[#f37022]/20 bg-white/90 backdrop-blur-md shadow-[0_8px_25px_rgba(243,112,34,0.12)] transition-all duration-300 active:scale-95"
              >
                {mobileMenu ? (
                  <X size={24} strokeWidth={2.3} className="text-[#f37022]" />
                ) : (
                  <Menu
                    size={24}
                    strokeWidth={2.3}
                    className="text-[#f37022]"
                  />
                )}
              </button>
              <div className="w-2 shrink-0" />
            </div>
          </div>
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transition-all duration-300 ease-in-out ${mobileMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}
          >
            <div className="h-[74px] px-5 flex items-center justify-between border-b border-[#edf1f7]">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Indian Oil Officers Association"
                  width={90}
                  height={90}
                  priority
                  className="h-[42px] w-auto object-contain"
                />
                <div>
                  <h1 className="text-[#02144d] font-extrabold text-[15px] leading-tight">
                    Indian Oil
                  </h1>

                  <p className="text-[#f37022] text-[11px] font-semibold tracking-wide">
                    Officers Association
                  </p>
                </div>
              </div>
              <div className="w-3 sm:w-4 shrink-0" />
            </div>
            <div className="px-5 pt-6">
              <div className="flex flex-col">
                <Link
                  href="/"
                  onClick={() => setMobileMenu(false)}
                  className="h-[62px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#f37022] hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/constitution"
                  onClick={() => setMobileMenu(false)}
                  className="h-[62px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#f37022] hover:text-white"
                >
                  Constitution
                </Link>
                <div>
                  <button
                    onClick={() => setAicecOpen(!aicecOpen)}
                    className="h-[62px] w-full flex items-center justify-center gap-2 border-b border-[#edf1f7] text-[#02144d] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#f37022] hover:text-white"
                  >
                    AICEC Members
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${aicecOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {aicecOpen && (
                    <div className="bg-[#f8fafc] rounded-xl overflow-hidden">
                      <Link
                        href="/aicec-members/marketing-division"
                        onClick={() => setMobileMenu(false)}
                        className="h-[50px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] text-[15px] font-medium hover:bg-[#f37022] hover:text-white"
                      >
                        Marketing Division
                      </Link>

                      <Link
                        href="/aicec-members/refineries-division"
                        onClick={() => setMobileMenu(false)}
                        className="h-[50px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] text-[15px] font-medium hover:bg-[#f37022] hover:text-white"
                      >
                        Refineries Division
                      </Link>

                      <Link
                        href="/aicec-members/pipeline-division"
                        onClick={() => setMobileMenu(false)}
                        className="h-[50px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] text-[15px] font-medium hover:bg-[#f37022] hover:text-white"
                      >
                        Pipeline Division
                      </Link>

                      <Link
                        href="/aicec-members/rd-division"
                        onClick={() => setMobileMenu(false)}
                        className="h-[50px] flex items-center justify-center text-[#02144d] text-[15px] font-medium hover:bg-[#f37022] hover:text-white"
                      >
                        R&amp;D Division
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/media"
                  onClick={() => setMobileMenu(false)}
                  className="h-[62px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#f37022] hover:text-white"
                >
                  Media
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenu(false)}
                  className="h-[62px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#f37022] hover:text-white"
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="h-[62px] flex items-center justify-center border-b border-[#edf1f7] text-[#02144d] font-semibold text-[16px] rounded-xl transition-all duration-300 hover:bg-[#f37022] hover:text-white"
                >
                  Contact
                </Link>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col items-center gap-4 pt-10">
                <Link
                  href="/login"
                  className="h-[50px] w-[230px] flex items-center justify-center rounded-[14px] border-2 border-[#02144d] text-[#02144d] font-semibold bg-white transition-all duration-300 hover:bg-[#02144d] hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="h-[50px] w-[230px] flex items-center justify-center rounded-[14px] bg-gradient-to-r from-[#f37022] to-[#ff8c42] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="hidden lg:block bg-[#02144d] border-t border-[#0a236d] border-b border-[#0a236d] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-10 xl:px-16 2xl:px-20">
          <div className="h-[68px] flex items-center pl-10 xl:pl-16">
            <ul className="flex items-center gap-12 text-white font-semibold text-[16px]">
              <div className="w-2 xl:w-0 2xl:w-20" />
              <li className="pl-10 xl:pl-16">
                <Link
                  href="/"
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/constitution"
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  Constitution
                </Link>
              </li>
              <li className="relative group">
                <button className="flex items-center gap-2 transition-colors duration-300 hover:text-orange-400">
                  AICEC Members
                  <ChevronDown
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-180"
                  />
                </button>

                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="w-[280px] rounded-2xl bg-[#02144d] shadow-[0_20px_60px_rgba(2,20,77,0.35)] border border-[#0b47d1] overflow-hidden">
                    <Link
                      href="/aicec-members/marketing-division"
                      className="h-[58px] flex items-center justify-center text-white text-[20px] font-medium transition-all duration-300 hover:bg-[#f37022]"
                    >
                      Marketing Division
                    </Link>

                    <Link
                      href="/aicec-members/refineries-division"
                      className="h-[58px] flex items-center justify-center text-white text-[20px] font-medium transition-all duration-300 hover:bg-[#f37022]"
                    >
                      Refineries Division
                    </Link>

                    <Link
                      href="/aicec-members/pipeline-division"
                      className="h-[58px] flex items-center justify-center text-white text-[20px] font-medium transition-all duration-300 hover:bg-[#f37022]"
                    >
                      Pipeline Division
                    </Link>

                    <Link
                      href="/aicec-members/rd-division"
                      className="h-[58px] flex items-center justify-center text-white text-[20px] font-medium transition-all duration-300 hover:bg-[#f37022]"
                    >
                      R&D Division
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/media"
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors duration-300 hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
