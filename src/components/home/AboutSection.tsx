import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative bg-[#f8fafc] pb-24 lg:pb-40">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f37022]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0b47d1]/10 blur-[140px] rounded-full" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0b47d1 1px, transparent 1px), linear-gradient(to bottom, #0b47d1 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />
      <div className="relative z-10 max-w-[1450px] mx-auto pl-6 pr-8 lg:pl-20 lg:pr-32">
        <div className="grid    lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center relative z-10 mt-10  ">
          <div
            className="relative animate-[fadeInLeft_1s_ease] mx-4 lg:mx-0 lg:translate-x-8
                    translate-y-8
                    lg:translate-y-10
                    pb-20
                    lg:pb-36
                  "
          >
            <div
              className="
                          relative
                          overflow-hidden
                          rounded-[20px]
                          shadow-[0_30px_100px_rgba(2,20,77,0.20)]
                          p-4
                          lg:p-10
                          bg-white/60
                          backdrop-blur-xl
                          border
                          border-white/50
                        "
            >
              <Image
                src="/home/indian-oil-image_about.png"
                alt="About IOOA"
                width={700}
                height={850}
                className="
                            w-full
                            h-[340px]
                            sm:h-[420px]
                            lg:h-[620px]
                            object-cover
                            rounded-[16px]
                            hover:scale-105
                            duration-700
                          "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#02144d]/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* RIGHT TEXT CONTENT */}
          <div
            className="
                        relative
                        animate-[fadeInRight_1.2s_ease]
                        max-w-[780px]
                        mr-0
                        lg:mr-20
                      "
          >
            <div className="flex">
              <div className="w-[14px] sm:w-[18px] lg:hidden" />
              <div className="flex-1 pt-2 pr-[14px] sm:pr-[18px] lg:pr-16">
                <div className="relative inline-block mb-10">
                  <Image
                    src="/pattern-13.png"
                    alt="pattern"
                    width={400}
                    height={200}
                    className="
                              absolute
                              -top-6
                              -left-10
                              w-[220%]
                              max-w-none
                              h-[220%]
                              object-contain
                              opacity-100
                            "
                  />

                  <h2
                    className="
                                relative
                                z-10
                                px-5
                                py-2
                                text-[18px]
                                lg:text-[24px]
                                font-semibold
                                tracking-[1px]
                                text-[#0b47d1]
                              "
                  >
                    About IOOA
                  </h2>
                </div>
                <p
                  className="
                          text-[13px]
                          sm:text-[14px]
                          lg:text-[15px]
                          leading-[1.9]
                          tracking-[0.2px]
                          text-[#334155]
                          font-normal
                          max-w-[720px]
                          mx-auto
                          text-left
                          "
                >
                  <span className="font-semibold text-[#f37022]">
                    Indian Oil Officers Association (IOOA)
                  </span>
                  , is the embodiment of the collective spirit and aspiration of
                  18,000 officers of Indian Oil Corporation Limited (India's
                  largest Commercial Enterprises, Maharatna PSU of Govt of India
                  and 94th ranked Fortune 500 Companies of the world),
                  registered under Trade Union Act, 1926.
                  <br />
                  We take pride in being
                  <span className="font-semibold text-[#0b47d1]">
                    {" "}
                    “the Energy of India”
                  </span>{" "}
                  from Kashmir to Kanyakumari and Dwarka to Digboi.
                  <br />
                  Our members work round the clock, as soldiers on war footing,
                  for Refining of Crude Oil, Transportation through Cross
                  Country Pipelines, Marketing of Petroleum Products, engaging
                  with civil Authorities and public at large with the sole
                  motive of securing the energy needs for our beloved citizens.
                  <br />
                  Our members strive to bring smiles to homes across the
                  country, including the remotest hamlets in Leh-Ladakh, Thar
                  and the hilly terrains of the North East, by bringing top
                  quality and affordable fuels to their neighbourhoods while
                  also supporting the nation’s soldiers defending the country’s
                  borders at all times.
                  <br />
                  The Corporate values of
                  <span className="font-semibold text-[#f37022]">
                    {" "}
                    Care, Innovation, Passion and Trust
                  </span>{" "}
                  are ingrained in the DNA of our members.
                  <br />
                  We have given IOOA to ourselves for sustaining the
                  fountainhead of our lives — the Indian Oil Corporation
                  Limited.
                  <br />
                  This forum has been envisaged to foster dissemination of
                  information related to IOOA to its members and continuously
                  reinvigorate our collective spirit.
                </p>
              </div>
            </div>
            <div className="w-[14px] sm:w-[18px] lg:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
