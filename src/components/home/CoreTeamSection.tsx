import Image from "next/image";

const teamMembers = [
  {
    name: "Mr Kumar Gaurav",
    role: "President",
    image: "/coreteam/Kumar-Gaurav.webp",
  },
  {
    name: "Amit Kumar",
    role: "Vice President",
    image: "/coreteam/AmitKumar.webp",
  },
  {
    name: "Anoop Singh",
    role: "General Secretary",
    image: "/coreteam/Anoop-Singh.webp",
  },
  {
    name: "Dr. Ajay Kumar Sharma",
    role: "General Treasurer",
    image: "/coreteam/Ajay-Kumar-Sharma.webp",
  },
  {
    name: "Mr. Aashish Dahiya",
    role: "Addl General Secretary",
    image: "/coreteam/Aasish-Dahiya.webp",
  },
  {
    name: "Mr Saurabh Tiwari",
    role: "Joint Secretary Marketing",
    image: "/coreteam/Saurabh-Tiwari.webp",
  },
  {
    name: "Mr. Amarjit Kumar Dwivedi",
    role: "Joint Secretary Refineries",
    image: "/coreteam/Amarjit-Kumar-Dwivedi.webp",
  },
  {
    name: "Mr. Pardeep Singh",
    role: "Joint Secretary Pipelines",
    image: "/coreteam/Pardeep-Singh.jpg",
  },
  {
    name: "Mr Utkarsh Yadav",
    role: "Marketing Coordinator",
    image: "/coreteam/Utkarsh-Yadav.jpeg",
  },
  {
    name: "Mr Tarun Kumar",
    role: "Refinery Coordinator",
    image: "/coreteam/Tarun-Kumar.jpeg",
  },
];

export default function CoreTeamSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] bg-no-repeat bg-center bg-[length:700px] lg:bg-[length:1100px]"
        style={{
          backgroundImage: "url('/pattern-18.png')",
        }}
      />

      {/* ORANGE GLOW */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f37022]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* SECTION LABEL */}
        <div className="w-full flex justify-center items-center">
          <div className="relative inline-flex justify-center items-center">
            {/* BACKGROUND PATTERN */}
            <div
              className="absolute inset-0 scale-[2.2] bg-center bg-no-repeat opacity-100"
              style={{
                backgroundImage: "url('/pattern-13.png')",
                backgroundSize: "80% 50%",
              }}
            />
            <span className="relative z-10 text-[#f37022] px-16 py-8 text-[20px] sm:text-[24px] lg:text-[32px] font-Semibold tracking-[2px]">
              Core Team
            </span>
          </div>
        </div>

        {/* TITLE */}
        <div className="w-full flex justify-center items-center">
          <div className="relative max-w-5xl w-full text-center flex flex-col gap-8 lg:gap-10 mt-10 lg:mt-14">
            <div className="absolute inset-0 flex justify-start items-center pointer-events-none pl-6 lg:pl-16">
              <Image
                src="/pattern-18.png"
                alt="pattern"
                width={400}
                height={400}
                className="w-[220px] lg:w-[420px] h-auto"
              />
            </div>

            <h2 className="relative z-10 text-[#02144d] font-black leading-[1.08] tracking-[-1px] text-[30px] sm:text-[40px] lg:text-[56px]">
              The Core Group Leading IOOA for
              <span className="block text-[#f37022]">2025–2028</span>
            </h2>

            <div className="flex justify-center">
              <p className="relative z-10 max-w-[820px] text-center text-[#666] text-[16px] lg:text-[18px] leading-7 lg:leading-8">
                The Core Group, elected to lead IOOA, drives its mission from
                2025 to 2028, ensuring effective representation and fostering
                collective progress.
              </p>
            </div>
          </div>
        </div>
        <div className="h-16 sm:h-20 lg:h-24" />
        {/* TEAM GRID */}
        <div className="mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-12 lg:px-20 xl:px-28">
          <div className="grid grid-cols-[12px_1fr_12px] sm:grid-cols-[40px_1fr_40px] lg:grid-cols-[80px_1fr_80px]">
            {/* LEFT SPACE */}
            <div />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  style={{
                    width: "calc(100% - 48px)",
                    margin: "0 auto",
                  }}
                  className="group relative w-full max-w-[290px] lg:max-w-[360px] mx-auto rounded-[28px] overflow-hidden border border-[#edf1f7] bg-white shadow-[0_10px_40px_rgba(2,20,77,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(2,20,77,0.14)]"
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative overflow-hidden aspect-[1/1.08]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center sm:object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02144d]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative p-7 flex flex-col items-center text-center">
                    {/* SMALL GLOW */}
                    <div className="absolute top-0 right-0 w-[120px] h-[120px] bg-[#f37022]/5 blur-[60px] rounded-full" />

                    <h3 className="relative z-10 text-[#02144d] text-[24px] font-black leading-tight transition-colors duration-300 group-hover:text-[#f37022]">
                      {member.name}
                    </h3>

                    <div className="relative z-10 mt-4 inline-flex items-center justify-center rounded-full bg-[#02144d]/5 px-4 py-2 text-[#02144d] text-sm font-semibold">
                      {member.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT SPACE */}
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
