export default function ConstitutionPage() {
  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-hidden">
      <section className="relative -mt-20 lg:-mt-28 z-20 pb-24 lg:pb-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[260px] h-[260px] rounded-full bg-[#0b47d1]/10 blur-[120px] " />
          <div className="absolute bottom-[5%] right-[5%] w-[260px] h-[260px] rounded-full bg-[#f37022]/10 blur-[120px] " />
        </div>
        <div className="relative z-10 max-w-[1450px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 ">
          <div
            className="
        relative
        overflow-hidden
        rounded-[24px] lg:rounded-[38px]
        border
        border-white/40
        bg-white/80
        backdrop-blur-2xl
        shadow-[0_35px_120px_rgba(2,0,51,0.14)]
        transition-all
        duration-500
      "
          >
            <div
              className="
                            relative
                            min-h-[120px] lg:h-[78px]
                            border-b
                            border-[#eef2f7]
                            bg-gradient-to-r
                            from-white
                            to-[#f8fafc]
                           flex
                          flex-col
                              lg:flex-row
                              items-center
                              justify-center
                              lg:justify-between
                              gap-5
                              lg:gap-0`
                            px-5
lg:px-10
py-5
lg:py-0
                          "
            >
              <div className="flex items-center justify-center lg:justify-start w-full lg:w-auto">
                <div className="w-3 lg:w-6" />
                <div
                  className="
    flex
    flex-col
    sm:flex-row

    items-center
    justify-center
    lg:justify-start

    gap-3
    sm:gap-5

    text-center
    lg:text-left
  "
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div>
                    <h3
                      className="
                                text-[#02144d]
                                text-[18px]
                                lg:text-[22px]
                                font-semibold
                                tracking-[0.2px]
                                "
                    >
                      IOOA Constitution Document
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="
    flex
    flex-col
    sm:flex-row

    items-center
    justify-center

    gap-3
    lg:gap-4

    w-full
    lg:w-auto

    pr-0
    lg:pr-4
  "
              >
                <a
                  href="/pdfs/Constitution.pdf"
                  target="_blank"
                  className="
    flex
    h-[46px]
    w-[220px]
    px-8
    rounded-xl
    border
    border-[#dbe4f0]
    bg-[#02144d]
    items-center
    justify-center
    text-white
    text-[14px]
    font-medium
    shadow-[0_8px_25px_rgba(2,20,77,0.18)]
    transition-all
    duration-300
    hover:bg-[#0b47d1]
    hover:border-[#0b47d1]
    hover:scale-[1.02]
  "
                >
                  Open Fullscreen
                </a>
                <a
                  href="/pdfs/Constitution.pdf"
                  download
                  className="
    h-[46px]
    w-[220px]
    px-8
    rounded-xl
    border
    border-[#f7a46c]
    bg-[#f37022]
    flex
    items-center
    justify-center
    text-white
    text-[14px]
    font-medium
    shadow-[0_8px_25px_rgba(243,112,34,0.35)]
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:bg-[#ff7d30]
  "
                >
                  Download
                </a>
                <div className="w-1 lg:w-3" />
              </div>
            </div>
            <div
              className="
          relative

          bg-[#edf2f7]

          p-2
sm:p-3
lg:p-5
        "
            >
              <div
                className="
            overflow-hidden

            rounded-[24px]

            border
            border-[#e5e7eb]

            shadow-[0_20px_60px_rgba(2,20,77,0.08)]
          "
              >
                <iframe
                  src="/pdfs/Constitution.pdf"
                  className="
  w-full

  h-[58vh]
  sm:h-[68vh]
  md:h-[75vh]
  lg:h-[88vh]

  bg-white
"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
