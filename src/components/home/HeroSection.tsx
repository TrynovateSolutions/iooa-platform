import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[88vh] lg:min-h-screen pb-24
    lg:pb-32
    flex
    items-start
    bg-cover
    bg-center
"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(2,20,77,0.92),
            rgba(2,20,77,0.78),
            rgba(2,20,77,0.55)
          ),
          url('/home/hero-banner.jpg')
        `,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* TOP RIGHT GLOW */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-100px]
          w-[420px]
          h-[420px]
          bg-[#f37022]/25
          blur-[140px]
          rounded-full
          animate-pulse
          z-0
        "
      />

      {/* LEFT BLUE GLOW */}
      <div
        className="
          absolute
          bottom-[-120px]
          left-[-100px]
          w-[380px]
          h-[380px]
          bg-[#0b47d1]/20
          blur-[120px]
          rounded-full
          animate-pulse
          z-0
        "
      />

      {/* GRID OVERLAY */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          z-0
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* SHAPE LAYER */}
      <div className="absolute bottom-0 left-0 w-full z-10 opacity-95">
        <Image
          src="/home/shape-layer.png"
          alt="shape"
          width={1920}
          height={220}
          className="w-full h-auto"
        />
      </div>

      {/* CONTENT */}
      <div
        className="
    absolute
    top-1/2
    left-[20px]
    -translate-y-1/2

    lg:top-[80px]
    lg:left-[50px]
    lg:translate-y-0

    z-20
  "
      >
        <div className="flex flex-col gap-7">
          {/* TOP LABEL */}
          <div>
            <div
              className="
      inline-flex
      items-center
      gap-3
      text-white
      text-[18px]
      md:text-[24px]
      font-bold
      tracking-[2px]
      uppercase
      animate-[fadeInUp_0.8s_ease]
    "
            >
              <span className="text-white">Welcome To</span>

              <span className="text-[#f37022]">OFFICIAL</span>
            </div>
          </div>

          {/* TITLE */}
          <h1
            className="
    text-white
    font-black
    leading-[0.92]
    tracking-[-2px]
    drop-shadow-[0_5px_25px_rgba(0,0,0,0.35)]
  "
          >
            <span
              className="
      block
      whitespace-nowrap
      text-[34px]
      sm:text-[48px]
      lg:text-[78px]
      animate-[fadeInUp_1s_ease]
    "
            >
              Indian Oil Officers
            </span>

            <span
              className="
      block
      text-[#f37022]
      text-[34px]
      sm:text-[48px]
      lg:text-[78px]
      animate-[fadeInUp_1.2s_ease]
    "
            >
              Association
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
    mt-0
    max-w-2xl
    text-white/80
    text-[15px]
    md:text-[17px]
    leading-8
    font-medium
    animate-[fadeInUp_1.4s_ease]
  "
          >
            IOOA represents 18,000 Indian Oil officers dedicated to securing
            India's energy needs nationwide, embodying commitment.
          </p>
        </div>
      </div>
    </section>
  );
}
