export default function GalleryPage() {
  return (
    <main className="bg-white text-[#02144d] overflow-hidden">
      <section className="relative overflow-hidden bg-[#020033] py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,140,0,0.25),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,87,255,0.15),transparent_35%)]" />
        <div className="relative max-w-[1450px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="h-8" />
            <div
              className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                backdrop-blur-xl
                                px-8
                                py-3
                                text-white
                                text-base
                                lg:text-lg
                                font-semibold
                                tracking-[0.3em]
                                uppercase
                                "
            >
              Gallery
            </div>
            <div className="h-8" />
            <h1
              className="
                            mt-10
                            max-w-[1200px]
                            text-center
                            text-3xl
                            md:text-4xl
                            lg:text-[60px]
                            font-black
                            leading-[1]
                            text-white
                        "
            >
              Capturing Our
              <span className="block text-orange-400 mt-4">
                Moments & Milestones
              </span>
            </h1>
            <div className="h-8" />
            <p
              className="
                            mt-8
                            max-w-[850px]
                            text-center
                            text-sm
                            md:text-base
                            lg:text-[20px]
                            leading-[1.5]
                            text-white/70
                        "
            >
              Explore highlights from our conferences, leadership events, CSR
              activities, innovation programs, and key organizational milestones
              through our premium visual gallery.
            </p>
            <div className="h-8" />
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100 blur-[140px] rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] rounded-full opacity-40" />

        <div className="relative max-w-[1450px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="h-8" />
            <div
              className="
      inline-flex
      items-center
      justify-center
      rounded-full
      border
      border-orange-200
      bg-orange-50
      px-7
      py-3
      text-orange-600
      text-sm
      lg:text-base
      font-bold
      tracking-[0.25em]
      uppercase
    "
            >
              CSR Activities
            </div>
            <div className="h-8" />
            <h2
              className="
      mt-8
      max-w-[1100px]
      text-center
      text-2xl
      md:text-3xl
      lg:text-[50px]
      font-black
      leading-[1]
      text-[#02144d]
    "
            >
              Building Communities
              <span className="block text-orange-500 mt-3">
                Creating Impact
              </span>
            </h2>
            <div className="h-8" />
            <p
              className="
      mt-8
      max-w-3xl
      mx-auto
      text-center
      text-base
      md:text-lg
      leading-[1.5]
      text-[#5c6987]
    "
            >
              Explore moments from our CSR initiatives focused on education,
              sustainability, healthcare, environmental awareness, and community
              development programs across the nation.
            </p>
          </div>

          {/* Space */}
          <div className="h-8" />

          {/* Premium Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
            {/* Card 1 */}
            <div
              className="
    group
    relative
    overflow-hidden
    rounded-[34px]
    h-[380px]
    lg:h-[400px]
    shadow-[0_25px_70px_rgba(2,20,77,0.08)]
  "
            >
              <img
                src="/gallery/csr/CSR1.jpeg"
                alt=""
                className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-110
    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-full
    p-8
    text-center
    text-white
    z-10
  "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  An ISR Initiative
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Nai Dharti
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
           group
    relative
    overflow-hidden
    rounded-[34px]
    h-[380px]
    lg:h-[400px]
    shadow-[0_25px_70px_rgba(2,20,77,0.08)]
        "
            >
              <img
                src="/gallery/csr/CSR2.jpeg"
                alt=""
                className="
            absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-110
          "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-full
    p-8
    text-center
    text-white
    z-10
  "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  An ISR Initiative
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Nai Dharti
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/csr/CSR3.jpeg"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  An ISR Initiative
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Nai Dharti
                </h3>
              </div>
            </div>

            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/csr/CSR5.jpeg"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  An ISR Initiative
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Nai Dharti
                </h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/csr/CSR4.jpeg"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  An ISR Initiative
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Nai Dharti
                </h3>
              </div>
            </div>

            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/csr/Blood-Donation.jpeg"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Eastern Region CSR Drive
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Blood Donation Camp
                </h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/csr/Blood-Donation2.jpeg"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Eastern Region CSR Drive
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">
                  Blood Donation Camp
                </h3>
              </div>
            </div>
          </div>
          <div className="h-16" />
        </div>
      </section>
      <div className="relative flex justify-center py-14">
        <div className="w-full max-w-[1400px] h-[1px] bg-orange-400/30" />

        <div className="absolute w-40 h-[2px] bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />
      </div>
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100 blur-[140px] rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] rounded-full opacity-40" />

        <div className="relative max-w-[1450px] mx-auto px-6 lg:px-16 xl:px-24">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="h-8" />
            <div
              className="
      inline-flex
      items-center
      justify-center
      rounded-full
      border
      border-orange-200
      bg-orange-50
      px-7
      py-3
      text-orange-600
      text-sm
      lg:text-base
      font-bold
      tracking-[0.25em]
      uppercase
    "
            >
              Foundation Day
            </div>
            <div className="h-8" />
            <h2
              className="
      mt-8
      max-w-[1100px]
      text-center
      text-2xl
      md:text-3xl
      lg:text-[50px]
      font-black
      leading-[1]
      text-[#02144d]
    "
            >
              Celebrating Our
              <span className="block text-orange-500 mt-3">
                Legacy & Excellence
              </span>
            </h2>
            <div className="h-8" />
            <p
              className="
      mt-8
      max-w-3xl
      mx-auto
      text-center
      text-base
      md:text-lg
      leading-[1.5]
      text-[#5c6987]
    "
            >
              Glimpses from our Foundation Day celebrations showcasing
              organizational milestones, employee recognition, cultural
              programs, leadership interactions, and moments reflecting our
              enduring commitment to growth, innovation, and nation building.
            </p>
          </div>

          {/* Space */}
          <div className="h-8" />

          {/* Premium Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
            {/* Card 1 */}
            <div
              className="
    group
    relative
    overflow-hidden
    rounded-[34px]
    h-[380px]
    lg:h-[400px]
    shadow-[0_25px_70px_rgba(2,20,77,0.08)]
  "
            >
              <img
                src="/gallery/foundation-day/Foundation1.webp"
                alt=""
                className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-110
    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-full
    p-8
    text-center
    text-white
    z-10
  "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="
           group
    relative
    overflow-hidden
    rounded-[34px]
    h-[380px]
    lg:h-[400px]
    shadow-[0_25px_70px_rgba(2,20,77,0.08)]
        "
            >
              <img
                src="/gallery/foundation-day/Foundation2.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
          "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    w-full
    p-8
    text-center
    text-white
    z-10
  "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation3.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>

            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation4.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation5.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>

            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation6.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation7.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation8.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation9.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation10.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation11.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation12.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation13.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
            <div
              className="
                                group
                            relative
                            overflow-hidden
                            rounded-[34px]
                            h-[380px]
                            lg:h-[400px]
                            shadow-[0_25px_70px_rgba(2,20,77,0.08)]
                                "
            >
              <img
                src="/gallery/foundation-day/Foundation14.webp"
                alt=""
                className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-110
                    "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020033] via-[#020033]/20 to-transparent" />

              <div
                className="
                            absolute
                            bottom-0
                            left-1/2
                            -translate-x-1/2
                            w-full
                            p-8
                            text-center
                            text-white
                            z-10
                        "
              >
                <span className="text-orange-400 text-sm tracking-[0.25em] uppercase font-semibold">
                  Foundation Day
                </span>

                <h3 className="mt-4 text-3xl font-black leading-tight">2026</h3>
              </div>
            </div>
          </div>
          <div className="h-16" />
        </div>
      </section>
    </main>
  );
}
