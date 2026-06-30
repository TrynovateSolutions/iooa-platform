"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020033] pt-32 lg:pt-40 pb-20 lg:pb-28 min-h-[1000px] md:min-h-[750px] lg:min-h-[450px]">
      <div className="max-w-[1450px] mx-auto px-8 sm:px-12 lg:px-24 xl:px-32 lg:pl-32 xl:pl-40">
        <div className="h-4 lg:h-6" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 items-start text-center lg:text-left justify-items-center lg:justify-items-start lg:translate-x-6 xl:translate-x-10">
          {/* ADDRESS */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full lg:ml-6 xl:ml-10">
            <h3 className="text-white text-[24px] lg:text-[28px] font-semibold tracking-[0.5px] leading-none">
              Address
            </h3>

            <div className="w-[52px] h-[3px] rounded-full bg-[#f37022] mt-4 mb-8" />

            <p className="text-white/72 text-[15px] lg:text-[16px] font-normal leading-[1.7] tracking-[0.3px]">
              <span className="text-white font-medium">Head Office:</span>
              <br />
              Indian Oil Officers' Association
              <br />
              G-9 Ali Yavar Jung Marg
              <br />
              Bandra (East)
              <br />
              Mumbai – 400 051
            </p>

            <div className="h-6" />

            <p className="text-white/72 text-[15px] lg:text-[16px] font-normal leading-[1.7] tracking-[0.3px]">
              <span className="text-white font-medium">President Address:</span>
              <br />
              5th Floor West Wing
              <br />
              Indian Oil Bhawan
              <br />
              2, Gariahat Road (South)
              <br />
              Dhakuria
              <br />
              Kolkata – 700068
            </p>
          </div>

          {/* QUICK LINKS */}
          <div
            className="
          flex
          flex-col

          items-center
          md:items-start

          text-center
          md:text-left

          w-full
        "
          >
            <h3 className="text-white text-[24px] lg:text-[28px] font-semibold tracking-[0.5px] leading-none">
              Quick Links
            </h3>

            <div className="w-[52px] h-[3px] rounded-full bg-[#f37022] mt-4 mb-10" />

            <div className="flex flex-col items-center md:items-start gap-2">
              <Link
                href="/"
                className="text-white/72 text-[14px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022] hover:translate-x-1"
              >
                Home
              </Link>

              <Link
                href="/constitution"
                className="text-white/72 text-[14px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022] hover:translate-x-1"
              >
                Constitution
              </Link>

              <Link
                href="/media"
                className="text-white/72 text-[14px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022] hover:translate-x-1"
              >
                Media
              </Link>

              <Link
                href="/gallery"
                className="text-white/72 text-[14px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022] hover:translate-x-1"
              >
                Gallery
              </Link>

              <Link
                href="/contact"
                className="text-white/72 text-[14px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022] hover:translate-x-1"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CONNECT */}
          <div
            className="
          flex
          flex-col

          items-center
          md:items-start

          text-center
          md:text-left

          w-full
        "
          >
            <h3
              className="
            text-white
            text-[24px]
            lg:text-[28px]
            font-semibold
            tracking-[0.5px]
            leading-none
          "
            >
              Connect With Us
            </h3>

            <div className="w-[52px] h-[3px] rounded-full bg-[#f37022] mt-4 mb-8" />
            <div
              className="    w-[52px]    h-[3px]
    rounded-full    bg-[#f37022]
    mt-4    mb-8
  "
            />
            {/* EMPTY SPACE */}
            <div className="h-2" />
            <Link
              href="mailto:info@iooa.org"
              className="mt-5 text-white/70 text-[15px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022] "
            >
              <span className="text-white font-medium">Email:</span>{" "}
              iocl.iooa.org@gmail.com
            </Link>
            <div className="h-4" />
            <Link
              href="tel:+918595109307"
              className="mt-3 text-white/70 text-[15px] lg:text-[16px] tracking-[0.3px] transition-all duration-300 hover:text-[#f37022]"
            >
              <span className="text-white font-medium">Phone:</span> +91
              8595109307
            </Link>
            <div className="h-4" />
            <div className="flex items-center gap-4 mt-8">
              <Link
                href="#"
                className="
                  w-[42px]
                  h-[42px]
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-[#f37022]
                  transition-all
                  duration-300
                "
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="#"
                className="
                  w-[42px]
                  h-[42px]
                  rounded-full
                  bg-white/10
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-[#f37022]
                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={17} />
              </Link>

              <Link
                href="#"
                className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#f37022] transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <Link
                href="https://x.com/IOOA_CoreGroup"
                target="_blank"
                className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#f37022] transition-all duration-300"
              >
                <FaXTwitter size={15} />
              </Link>

              <Link
                href="#"
                className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#f37022] transition-all duration-300"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 w-full pt-8 border-t border-white/10 flex justify-center items-center text-center">
          <p className="text-white/50 text-[12px] lg:text-[13px] tracking-[0.5px]">
            © {new Date().getFullYear()} Indian Oil Officers' Association. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
