"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

export default function ContactPage() {
  const [turnstileToken, setTurnstileToken] = useState("");

  return (
    <main className="bg-white overflow-hidden">
      <section className="relative overflow-hidden bg-[#020033] pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.25),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,87,255,0.15),transparent_35%)]" />

        <div className="relative max-w-[1450px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="h-8" />

            <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-3 text-white text-base lg:text-lg font-semibold tracking-[0.3em] uppercase">
              Contact IOOA
            </div>

            <div className="h-8" />

            <h1 className="mt-10 max-w-[1200px] text-center text-3xl md:text-4xl lg:text-[60px] font-black leading-[1] text-white">
              Connect With
              <span className="block text-orange-400 mt-4">
                Indian Oil Officers Association
              </span>
            </h1>

            <div className="h-8" />

            <p className="mt-8 max-w-[850px] text-center text-sm md:text-base lg:text-[20px] leading-[1.5] text-white/70">
              Reach out to the Indian Oil Officers Association for
              communication, collaboration, membership support, organizational
              information, and official assistance across all regions and
              divisions.
            </p>

            <div className="h-8" />
          </div>
        </div>
      </section>

      <section className="relative mt-10 lg:mt-16 z-20 pb-24 lg:pb-36">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative rounded-[34px] lg:rounded-[44px] border border-white/70 bg-white shadow-[0_35px_120px_rgba(2,20,77,0.12)]">
            <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#f37022]/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-[#0b47d1]/10 blur-[110px] pointer-events-none" />

            <div className="relative px-5 sm:px-8 lg:px-14 xl:px-16 py-14 lg:py-20">
              <div className="flex flex-col items-center text-center">
                <div className="h-8 lg:h-12" />
                <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2.5 shadow-sm">
                  <span className="text-[#f37022] text-[12px] sm:text-[13px] font-bold tracking-[0.22em] uppercase">
                    Get In Touch
                  </span>
                </div>

                <div className="h-8 lg:h-10" />

                <h2 className="max-w-[760px] text-[#02144d] text-[34px] sm:text-[42px] lg:text-[56px] font-black leading-[1.05] tracking-[-1.5px]">
                  We Would Love
                  <span className="block text-[#f37022] mt-2">
                    To Hear From You
                  </span>
                </h2>

                <div className="h-6" />

                <p className="max-w-[720px] text-[#64748b] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.7]">
                  For queries, collaboration, communication, organizational
                  support, and association-related information, feel free to
                  connect with IOOA through the following channels.
                </p>
                <div className="h-12" />

                <div className="w-full max-w-[1180px] mx-auto mt-14">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start text-left">
                    {/* LEFT CONTACT INFO */}
                    <div className="w-full text-left">
                      {/* Address */}
                      <div className="flex items-start gap-5">
                        <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ee]">
                          <MapPin className="h-7 w-7 text-[#f37022]" />
                        </div>

                        <div className="text-left">
                          <h3 className="text-[#f37022] text-[32px] font-black leading-tight">
                            Address
                          </h3>

                          {/* Space after Address */}
                          <div className="mt-10">
                            {/* Head Office */}
                            <div>
                              <h4 className="text-[#02144d] text-[22px] font-bold mb-4">
                                Head Office
                              </h4>

                              <p className="text-[#64748b] text-[16px] leading-[1.9]">
                                Indian Oil Officers&apos; Association
                                <br />
                                G-9 Ali Yavar Jung Marg
                                <br />
                                Bandra (East)
                                <br />
                                Mumbai – 400051
                              </p>
                            </div>

                            {/* Space before President Office */}
                            <div className="mt-12">
                              <h4 className="text-[#02144d] text-[22px] font-bold mb-4">
                                President Office
                              </h4>

                              <p className="text-[#64748b] text-[16px] leading-[1.9]">
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
                          </div>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-5 mt-12">
                        <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ee]">
                          <Mail className="h-7 w-7 text-[#f37022]" />
                        </div>

                        <div className="text-left">
                          <h3 className="text-[#f37022] text-[30px] font-black">
                            Email
                          </h3>
                          <p className="mt-3 text-[#64748b] text-[16px] leading-[1.75]">
                            iocl.iooa.org@gmail.com
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-5 mt-12">
                        <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ee]">
                          <Phone className="h-7 w-7 text-[#f37022]" />
                        </div>

                        <div className="text-left">
                          <h3 className="text-[#f37022] text-[30px] font-black">
                            Phone
                          </h3>
                          <p className="mt-3 text-[#64748b] text-[16px] leading-[1.75]">
                            +91 85951 09307
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="w-full rounded-[32px] border border-[#edf1f7] bg-white p-7 sm:p-9 shadow-[0_25px_80px_rgba(2,20,77,0.10)]">
                      <div className="flex justify-center mb-8">
                        <h3 className="text-[#02144d] text-[34px] font-black">
                          Send us a Message
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <input
                          className="h-14 rounded-2xl border border-[#dfe5ee] px-5 text-[16px] outline-none focus:border-[#f37022]"
                          placeholder="  First Name"
                        />
                        <input
                          className="h-14 rounded-2xl border border-[#dfe5ee] px-5 text-[16px] outline-none focus:border-[#f37022]"
                          placeholder=" Last Name"
                        />

                        <input
                          className="sm:col-span-2 h-14 rounded-2xl border border-[#dfe5ee] px-5 text-[16px] outline-none focus:border-[#f37022]"
                          placeholder="  Email Address"
                        />
                        <input
                          className="sm:col-span-2 h-14 rounded-2xl border border-[#dfe5ee] px-5 text-[16px] outline-none focus:border-[#f37022]"
                          placeholder="  Phone Number"
                        />
                        <input
                          className="sm:col-span-2 h-14 rounded-2xl border border-[#dfe5ee] px-5 text-[16px] outline-none focus:border-[#f37022]"
                          placeholder="  Subject"
                        />

                        <textarea
                          className="sm:col-span-2 min-h-[150px] rounded-2xl border border-[#dfe5ee] p-5 text-[16px] outline-none focus:border-[#f37022]"
                          placeholder="   Your Message"
                        />

                        <div className="sm:col-span-2 flex justify-center my-6">
                          <Turnstile
                            siteKey={
                              process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                            }
                            onSuccess={(token) => setTurnstileToken(token)}
                            onExpire={() => setTurnstileToken("")}
                            onError={() => setTurnstileToken("")}
                            options={{
                              theme: "light",
                              size: "normal",
                            }}
                          />
                        </div>

                        <div className="sm:col-span-2 flex justify-center">
                          <button
                            type="submit"
                            disabled={!turnstileToken}
                            className={`h-14 w-56 rounded-full text-white text-[16px] font-semibold transition-all duration-300 ${
                              turnstileToken
                                ? "bg-[#f37022] hover:bg-[#d95f15] hover:shadow-[0_12px_30px_rgba(243,112,34,0.35)]"
                                : "bg-gray-300 cursor-not-allowed"
                            }`}
                          >
                            Send Message
                          </button>
                        </div>
                        <div className="h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-12" />
      <section className="relative py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="mt-8 text-[#02144d] text-[36px] sm:text-[46px] lg:text-[54px] font-black leading-tight">
              Head Office Location
            </h2>

            <div className="flex justify-center mt-5">
              <p className="max-w-3xl text-center text-[#64748b] text-[17px] leading-[1.8]">
                You are welcome to visit the National Head Office of the Indian
                Oil Officers&apos; Association during office hours.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden border border-[#e9eef6] bg-white shadow-[0_30px_90px_rgba(2,20,77,0.08)]">
            <iframe
              title="IOOA Head Office"
              src="https://www.google.com/maps?q=G-9+Ali+Yavar+Jung+Marg+Bandra+East+Mumbai+400051&output=embed"
              width="100%"
              height="520"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
