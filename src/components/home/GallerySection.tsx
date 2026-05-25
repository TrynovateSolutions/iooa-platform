import Image from "next/image";
import { ZoomIn } from "lucide-react";

const galleryItems = [
  {
    title: "GBM at Dimapur - 29.01.2025",
    image: "/gallery/Dimapur1.jpeg",
  },
  {
    title: "Haldia Refinery",
    image: "/gallery/Haldia-Refinery.jpeg",
  },
  {
    title:
      "IOOA President with Chairman & Director (Marketing), IOCL",
    image:
      "/gallery/President_Chairman.jpeg",
  },
  {
    title: "GBM Guwahati",
    image: "/gallery/GBM Guwahati.jpg",
  },
];

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">

      {/* SECTION LABEL */}
        <div className="w-full flex justify-center items-center">

          <div className="relative inline-flex justify-center items-center">

            {/* BACKGROUND PATTERN */}
            <div
              className="absolute inset-0 scale-[2.2] bg-center bg-no-repeat opacity-100      "
              style={{
                backgroundImage: "url('/pattern-13.png')",
                backgroundSize: "80% 50%",
              }}
            />
            <span className="relative z-10 text-[#f37022] px-16 py-8 text-[20px] sm:text-[24px] lg:text-[32px] font-Semibold tracking-[2px]">
              Gallery
            </span>

          </div>

        </div>        
         {/* TITLE */}
                <div className="w-full flex justify-center items-center">
                  <div
                    className="
            relative        
            max-w-5xl
            w-full        
            text-center        
            flex
            flex-col        
            gap-8
            lg:gap-10        
            mt-10
            lg:mt-14
          "
                  >
                    <div
                      className="
            absolute
            inset-0        
            flex
            justify-start
            items-center        
            pointer-events-none        
            pl-6
            lg:pl-16
          "
                    >
        
                      <Image
                        src="/pattern-18.png"
                        alt="pattern"
                        width={400}
                        height={400}
                        className="
            w-[220px]
            lg:w-[420px]
            h-auto
          "
                      />
        
                    </div>
        
                    <h2
                      className="relative z-10
                text-[#02144d]
                font-black
                leading-[1.08]
                tracking-[-1px]
        
                text-[30px]
                sm:text-[40px]
                lg:text-[56px]
                
              "
                    >
                      Latest & Upcoming Events
        
                     
                    </h2>
        
                   
        
                  </div>
        
                </div>

        {/* GALLERY GRID */}
        <div className="h-16 lg:h-24" />
       <div
  className="
    mt-16
    lg:mt-24

    px-8
    sm:px-12
    lg:px-20
    xl:px-28
  "
>
          <div className="grid grid-cols-[40px_1fr_40px] lg:grid-cols-[80px_1fr_80px]">

                {/* LEFT SPACE */}
                <div />
                <div
  className="
    mt-16
    lg:mt-24

    grid
    sm:grid-cols-2
    lg:grid-cols-3

    gap-8
    lg:gap-10
  "
>


          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-white
                border
                border-[#edf1f7]
                shadow-[0_10px_40px_rgba(2,20,77,0.06)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_70px_rgba(2,20,77,0.14)]
              "
            >
              {/* IMAGE */}
              
              <div className="relative aspect-square overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* DARK OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#02144d]/55
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ICON */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-white/15
                      backdrop-blur-md
                      border
                      border-white/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ZoomIn
                      size={28}
                      className="text-white"
                    />
                  </div>
                </div>

              </div>

              {/* CONTENT */}
              <div
  className="
    p-6

    flex
    justify-center
    items-center

    text-center
  "
>

                <h3
                  className="
                    text-[#02144d]
                    text-[20px]
                    font-bold
                    leading-8
                    transition-colors
                    duration-300
                    group-hover:text-[#f37022]
                  "
                >
                  {item.title}
                </h3>

              </div>

            </div>
          ))}

        </div>
  </div>
  </div>
    </section>
  );
}