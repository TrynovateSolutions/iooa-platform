"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
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
              className="
                h-[46px]
                min-w-[120px]
                px-7
                inline-flex
                items-center
                justify-center
                rounded-[12px]
                border-2
                border-[#02144d]
                bg-white
                text-[#02144d]
                text-[14px]
                font-semibold
                tracking-wide
                shadow-sm
                transition-all
                duration-300
                hover:bg-[#02144d]
                hover:text-white
                hover:shadow-lg
              "
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="
                h-[46px]
                min-w-[120px]
                px-7
                inline-flex
                items-center
                justify-center
                rounded-[12px]
                bg-gradient-to-r
                from-[#f37022]
                to-[#ff8c42]
                text-white
                text-[14px]
                font-semibold
                tracking-wide
                shadow-[0_8px_20px_rgba(243,112,34,0.28)]
                transition-all
                duration-300
                hover:shadow-[0_12px_28px_rgba(243,112,34,0.38)]
                hover:-translate-y-[1px]
              "
            >
              Register
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          {/* TOP BAR */}
          <div className="h-[74px] flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <Image
                src="/logo.png"
                alt="Indian Oil Officers Association"
                width={90}
                height={90}
                priority
                className="h-[42px] w-auto object-contain shrink-0"
              />

              <div className="min-w-0 text-center">
                <h1 className="text-[#02144d] font-extrabold text-[15px] leading-tight">
                  Indian Oil
                </h1>

                <p
                  className="
            text-[#f37022]
            text-[11px]
            font-semibold
            tracking-wide
            leading-tight
          "
                >
                  Officers Association
                </p>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="
        h-11
        w-11
        flex
        items-center
        justify-center
        rounded-xl
        border
        border-[#dbe3f0]
        bg-white
        shadow-sm
        z-50
        relative
      "
            >
              {mobileMenu ? (
                <X size={22} className="text-[#02144d]" />
              ) : (
                <Menu size={22} className="text-[#02144d]" />
              )}
            </button>
          </div>

          {/* FULL SCREEN DRAWER */}
          <div
            className={`
      fixed
      top-0
      left-0
      w-full
      h-screen
      bg-white
      z-40
      transition-all
      duration-300
      ease-in-out
      ${
        mobileMenu
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none"
      }
    `}
          >
            {/* Drawer Header */}
            <div
              className="
        h-[74px]
        px-5
        flex
        items-center
        justify-between
        border-b
        border-[#edf1f7]
      "
            >
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

              <button
                onClick={() => setMobileMenu(false)}
                className="
          h-11
          w-11
          flex
          items-center
          justify-center
          rounded-xl
          border
          border-[#dbe3f0]
          bg-white
        "
              >
                <X size={22} className="text-[#02144d]" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="px-5 pt-6">
              <div className="flex flex-col">
                <Link
                  href="/"
                  onClick={() => setMobileMenu(false)}
                  className="
        h-[62px]
        flex
        items-center
        justify-center
        border-b
        border-[#edf1f7]
        text-[#02144d]
        font-semibold
        text-[16px]
        rounded-xl
        transition-all
        duration-300
        hover:bg-[#f37022]
        hover:text-white
      "
                >
                  Home
                </Link>

                <Link
                  href="/constitution"
                  onClick={() => setMobileMenu(false)}
                  className="
        h-[62px]
        flex
        items-center
        justify-center
        border-b
        border-[#edf1f7]
        text-[#02144d]
        font-semibold
        text-[16px]
        rounded-xl
        transition-all
        duration-300
        hover:bg-[#f37022]
        hover:text-white
      "
                >
                  Constitution
                </Link>

                <Link
                  href="/aicec-members"
                  onClick={() => setMobileMenu(false)}
                  className="
        h-[62px]
        flex
        items-center
        justify-center
        border-b
        border-[#edf1f7]
        text-[#02144d]
        font-semibold
        text-[16px]
        rounded-xl
        transition-all
        duration-300
        hover:bg-[#f37022]
        hover:text-white
      "
                >
                  AICEC Members
                </Link>

                <Link
                  href="/media"
                  onClick={() => setMobileMenu(false)}
                  className="
        h-[62px]
        flex
        items-center
        justify-center
        border-b
        border-[#edf1f7]
        text-[#02144d]
        font-semibold
        text-[16px]
        rounded-xl
        transition-all
        duration-300
        hover:bg-[#f37022]
        hover:text-white
      "
                >
                  Media
                </Link>

                <Link
                  href="/gallery"
                  onClick={() => setMobileMenu(false)}
                  className="
        h-[62px]
        flex
        items-center
        justify-center
        border-b
        border-[#edf1f7]
        text-[#02144d]
        font-semibold
        text-[16px]
        rounded-xl
        transition-all
        duration-300
        hover:bg-[#f37022]
        hover:text-white
      "
                >
                  Gallery
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="
        h-[62px]
        flex
        items-center
        justify-center
        border-b
        border-[#edf1f7]
        text-[#02144d]
        font-semibold
        text-[16px]
        rounded-xl
        transition-all
        duration-300
        hover:bg-[#f37022]
        hover:text-white
      "
                >
                  Contact
                </Link>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col items-center gap-4 pt-10">
                <Link
                  href="/login"
                  className="
            h-[50px]
            w-[230px]
            flex
            items-center
            justify-center
            rounded-[14px]
            border-2
            border-[#02144d]
            text-[#02144d]
            font-semibold
            bg-white
            transition-all
            duration-300
            hover:bg-[#02144d]
            hover:text-white
          "
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="
            h-[50px]
            w-[230px]
            flex
            items-center
            justify-center
            rounded-[14px]
            bg-gradient-to-r
            from-[#f37022]
            to-[#ff8c42]
            text-white
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.02]
          "
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
            <ul
              className="
    flex
    items-center
    gap-12
    text-white
    font-semibold
    text-[16px]
  "
            >
              <div className="w-2 xl:w-0 2xl:w-20" />
              <li className="pl-10 xl:pl-16">
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/constitution">Constitution</Link>
              </li>

              <li>
                <Link href="/aicec-members">AICEC Members</Link>
              </li>

              <li>
                <Link href="/media">Media</Link>
              </li>

              <li>
                <Link href="/gallery">Gallery</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
