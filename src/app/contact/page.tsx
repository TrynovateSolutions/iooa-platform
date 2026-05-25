import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="
          relative
          bg-[#020033]
          pt-36
          lg:pt-44
          pb-24
          lg:pb-32
        "
      >
        <div
          className="
            max-w-[1450px]
            mx-auto
            px-6
            sm:px-10
            lg:px-20
            xl:px-28
          "
        >
          <div className="max-w-[850px]">
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2
                backdrop-blur-md
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#f37022]" />

              <span
                className="
                  text-white/80
                  text-[13px]
                  tracking-[1px]
                  uppercase
                "
              >
                Indian Oil Officers Association
              </span>
            </div>

            <div className="h-8 lg:h-10" />

            <h1
              className="
                text-white
                text-[42px]
                sm:text-[56px]
                lg:text-[72px]
                font-bold
                leading-[1.05]
                tracking-[-1px]
              "
            >
              Contact
              <span className="text-[#f37022]"> IOOA</span>
            </h1>

            <div className="h-6" />

            <p
              className="
                max-w-[760px]
                text-white/70
                text-[15px]
                sm:text-[17px]
                lg:text-[18px]
                leading-[1.9]
                tracking-[0.2px]
              "
            >
              Reach out to the Indian Oil Officers Association for
              communication, support, information, and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        className="
          relative
          -mt-16
          lg:-mt-24
          z-20
          pb-28
          lg:pb-36
        "
      >
        <div
          className="
            max-w-[1450px]
            mx-auto
            px-6
            sm:px-10
            lg:px-20
            xl:px-28
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.1fr_0.9fr]
              overflow-hidden
              rounded-[34px]
              border
              border-[#e9edf5]
              bg-white
              shadow-[0_30px_80px_rgba(2,0,51,0.08)]
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                px-7
                sm:px-10
                lg:px-16
                py-14
                lg:py-20
              "
            >
              <div className="max-w-[620px]">
                <div
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    bg-[#f37022]/10
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      text-[#f37022]
                      text-[13px]
                      font-semibold
                      tracking-[1px]
                      uppercase
                    "
                  >
                    Get In Touch
                  </span>
                </div>

                <div className="h-8" />

                <h2
                  className="
                    text-[#02144d]
                    text-[34px]
                    lg:text-[52px]
                    font-bold
                    leading-[1.1]
                    tracking-[-1px]
                  "
                >
                  We would love to hear from you.
                </h2>

                <div className="h-6" />

                <p
                  className="
                    text-[#475569]
                    text-[15px]
                    lg:text-[17px]
                    leading-[1.9]
                  "
                >
                  For queries, communication, association-related updates, and
                  support, feel free to connect with IOOA.
                </p>

                <div className="h-14" />

                {/* CONTACT CARDS */}
                <div className="space-y-7">
                  {/* EMAIL */}
                  <div
                    className="
                      flex
                      items-start
                      gap-5
                      rounded-[24px]
                      border
                      border-[#eef2f7]
                      bg-[#fafcff]
                      p-6
                      transition-all
                      duration-300
                      hover:shadow-[0_12px_40px_rgba(2,20,77,0.08)]
                    "
                  >
                    <div
                      className="
                        w-[62px]
                        h-[62px]
                        rounded-2xl
                        bg-[#f37022]
                        flex
                        items-center
                        justify-center
                        text-white
                        shrink-0
                      "
                    >
                      <FaEnvelope size={24} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[#02144d]
                          text-[20px]
                          font-semibold
                        "
                      >
                        Email Us
                      </h3>

                      <div className="h-2" />

                      <a
                        href="mailto:info@iooa.org"
                        className="
                          text-[#64748b]
                          text-[15px]
                          transition-all
                          duration-300
                          hover:text-[#f37022]
                        "
                      >
                        info@iooa.org
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div
                    className="
                      flex
                      items-start
                      gap-5
                      rounded-[24px]
                      border
                      border-[#eef2f7]
                      bg-[#fafcff]
                      p-6
                      transition-all
                      duration-300
                      hover:shadow-[0_12px_40px_rgba(2,20,77,0.08)]
                    "
                  >
                    <div
                      className="
                        w-[62px]
                        h-[62px]
                        rounded-2xl
                        bg-[#02144d]
                        flex
                        items-center
                        justify-center
                        text-white
                        shrink-0
                      "
                    >
                      <FaPhoneAlt size={22} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[#02144d]
                          text-[20px]
                          font-semibold
                        "
                      >
                        Call Us
                      </h3>

                      <div className="h-2" />

                      <a
                        href="tel:+918595109307"
                        className="
                          text-[#64748b]
                          text-[15px]
                          transition-all
                          duration-300
                          hover:text-[#f37022]
                        "
                      >
                        +91 85951 09307
                      </a>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div
                    className="
                      flex
                      items-start
                      gap-5
                      rounded-[24px]
                      border
                      border-[#eef2f7]
                      bg-[#fafcff]
                      p-6
                      transition-all
                      duration-300
                      hover:shadow-[0_12px_40px_rgba(2,20,77,0.08)]
                    "
                  >
                    <div
                      className="
                        w-[62px]
                        h-[62px]
                        rounded-2xl
                        bg-[#0b47d1]
                        flex
                        items-center
                        justify-center
                        text-white
                        shrink-0
                      "
                    >
                      <FaMapMarkerAlt size={22} />
                    </div>

                    <div>
                      <h3
                        className="
                          text-[#02144d]
                          text-[20px]
                          font-semibold
                        "
                      >
                        Office Address
                      </h3>

                      <div className="h-3" />

                      <p
                        className="
                          text-[#64748b]
                          text-[15px]
                          leading-[1.8]
                        "
                      >
                        Indian Oil Officers' Association
                        <br />
                        Indian Oil Bhawan, Yusuf Sarai
                        <br />
                        1, Aurobindo Marg
                        <br />
                        New Delhi - 110016
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                relative
                bg-[#020033]
                px-7
                sm:px-10
                lg:px-14
                py-14
                lg:py-20
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-[320px]
                  h-[320px]
                  rounded-full
                  bg-[#f37022]/20
                  blur-[100px]
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      text-white/80
                      text-[13px]
                      tracking-[1px]
                      uppercase
                    "
                  >
                    Social Presence
                  </span>
                </div>

                <div className="h-8" />

                <h2
                  className="
                    text-white
                    text-[34px]
                    lg:text-[46px]
                    font-bold
                    leading-[1.1]
                    tracking-[-1px]
                  "
                >
                  Stay connected with IOOA.
                </h2>

                <div className="h-6" />

                <p
                  className="
                    text-white/70
                    text-[15px]
                    lg:text-[16px]
                    leading-[1.9]
                  "
                >
                  Follow us on social media for association updates,
                  announcements, activities, and communications.
                </p>

                <div className="h-14" />

                {/* SOCIAL GRID */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-5
                  "
                >
                  <a
                    href="#"
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-6
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-[#f37022]
                    "
                  >
                    <FaFacebookF className="text-white" size={22} />

                    <div className="h-5" />

                    <h3
                      className="
                        text-white
                        text-[18px]
                        font-semibold
                      "
                    >
                      Facebook
                    </h3>
                  </a>

                  <a
                    href="#"
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-6
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-[#f37022]
                    "
                  >
                    <FaInstagram className="text-white" size={22} />

                    <div className="h-5" />

                    <h3
                      className="
                        text-white
                        text-[18px]
                        font-semibold
                      "
                    >
                      Instagram
                    </h3>
                  </a>

                  <a
                    href="#"
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-6
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-[#f37022]
                    "
                  >
                    <FaLinkedinIn className="text-white" size={22} />

                    <div className="h-5" />

                    <h3
                      className="
                        text-white
                        text-[18px]
                        font-semibold
                      "
                    >
                      LinkedIn
                    </h3>
                  </a>

                  <a
                    href="https://x.com/IOOA_Coregroup"
                    target="_blank"
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-6
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-[#f37022]
                    "
                  >
                    <FaXTwitter className="text-white" size={22} />

                    <div className="h-5" />

                    <h3
                      className="
                        text-white
                        text-[18px]
                        font-semibold
                      "
                    >
                      X / Twitter
                    </h3>
                  </a>

                  <a
                    href="#"
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-6
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-[#f37022]
                    "
                  >
                    <FaYoutube className="text-white" size={22} />

                    <div className="h-5" />

                    <h3
                      className="
                        text-white
                        text-[18px]
                        font-semibold
                      "
                    >
                      YouTube
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
