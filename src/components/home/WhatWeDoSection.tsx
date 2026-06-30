import { Fuel, Zap, Workflow, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Fuel,
    description:
      "IOOA, representing 18,200 officers of Indian Oil Corporation Limited, upholds values of Care, Innovation, Passion, and Trust.",
  },
  {
    icon: Zap,
    description:
      "Officers work tirelessly across India, from Kashmir to Kanyakumari, refining oil, transporting via pipelines, and ensuring top-quality fuel reaches every corner.",
  },
  {
    icon: Workflow,
    description:
      "Elected through a democratic process every three years, IOOA's leadership fosters collective spirit and disseminates crucial information.",
  },
  {
    icon: BrainCircuit,
    description:
      "Dedicated to securing energy needs nationwide, IOOA supports both civilians and soldiers, embodying the essence of India's energy backbone.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center min-h-[115vh] pt-[120px] sm:pt-[150px] lg:pt-[190px] pb-[80px] lg:pb-[120px] pl-5 pr-5 sm:pl-10 sm:pr-10"
      style={{
        backgroundImage: `
      linear-gradient(
        rgba(2,20,77,0.88),
        rgba(2,20,77,0.92)
      ),
      url('/home/hero-banner.jpg')
    `,
      }}
    >
      {/* OVERLAY GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f37022]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="max-w-[1550px] mx-auto px-0 sm:px-10 lg:px-16 xl:px-24 pt-12 sm:pt-16 lg:pt-24 flex flex-col gap-8 lg:gap-16">
          {/* TOP LABEL */}
          <div className="flex justify-center translate-y-6 sm:translate-y-12 lg:translate-y-12 mb-10 sm:mb-0">
            <div
              className="relative flex items-center justify-center bg-center bg-no-repeat py-6"
              style={{
                backgroundImage: "url('/pattern-13.png')",
                backgroundSize: "200%",
              }}
            >
              <span className="relative z-10 text-white text-[24px] lg:text-[36px] font-medium tracking-[1px]">
                What We Do
              </span>
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-8 sm:mt-10 lg:mt-12 pb-14 sm:pb-16 lg:pb-20">
            <div className="flex justify-center items-center flex-wrap gap-3 px-6 text-center">
              <span className="text-white font-bold text-[22px] sm:text-[38px] lg:text-[54px] leading-tight tracking-[-0.5px]">
                IOOA:
              </span>

              <span className="text-[#f37022] font-bold text-[22px] sm:text-[38px] lg:text-[54px] leading-tight tracking-[-0.5px]">
                Energizing India Together
              </span>
            </div>
          </div>
          {/* CARDS */}
          {/* CARDS */}
          <div className="w-full max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    style={{
                      width: "calc(100% - 48px)",
                      marginLeft: "24px",
                      marginRight: "24px",
                    }}
                    className="group relative overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/10 bg-white/[0.06] backdrop-blur-xl px-5 sm:px-8 py-8 sm:py-10 min-h-[285px] sm:min-h-[340px] flex flex-col items-center justify-start text-center transition-all duration-500 ease-out hover:bg-[#f37022] hover:border-[#ffb27d] hover:shadow-[0_30px_80px_rgba(243,112,34,0.45)] hover:-translate-y-3"
                  >
                    {/* CARD GLOW */}
                    <div className="absolute top-0 right-0 w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] bg-white/5 blur-[70px] rounded-full" />

                    {/* ICON */}
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/15 bg-[#02144d] flex items-center justify-center transition-all duration-500 group-hover:bg-white/15 mx-auto">
                      <Icon size={34} className="text-white sm:w-10 sm:h-10" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="mt-8 sm:mt-12 text-center">
                      <p className="relative z-10 text-white/80 leading-[1.8] sm:leading-[2] text-[16px] sm:text-[16px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
