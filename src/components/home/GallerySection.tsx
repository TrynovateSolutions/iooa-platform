"use client";

import Image from "next/image";
import { ZoomIn, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const galleryItems = [
  {
    title: "Director HR Introductory Meet",
    image: "/gallery/AICEC-Meet.jpeg",
  },
  {
    title: "AICEC Meeting",
    image: "/gallery/AICEC Meeting.webp",
  },
  {
    title: "Blood Donation Eastern Region",
    image: "/gallery/Blood-Donation.jpg",
  },
  {
    title: "IOOA ERO",
    image: "/gallery/IOOA ERO.png",
  },
  {
    title: "Foundation Day Celebration",
    image: "/gallery/Foundation Day1.webp",
  },
  {
    title: "Foundation Day Celebration",
    image: "/gallery/Foundation Day2.webp",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-white">
      <div className="w-full flex justify-center items-center">
        <div className="relative inline-flex justify-center items-center">
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
              className="w-[220px] lg:w-[420px] h-auto "
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
      <div className="h-16 lg:h-24" />
      <div className="mt-16 lg:mt-24 px-8 sm:px-12 lg:px-20 xl:px-28 ">
        <div className="grid grid-cols-[40px_1fr_40px] lg:grid-cols-[80px_1fr_80px]">
          <div />
          <div
            className="
                        mt-16
                        lg:mt-24

                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-12

                        gap-6
                        lg:gap-8

                        auto-rows-[220px]
                        lg:auto-rows-[260px]
                    "
          >
            {galleryItems.map((item, index) => {
              const layouts = [
                "lg:col-span-7 lg:row-span-2", // Big
                "lg:col-span-5 lg:row-span-1", // Small
                "lg:col-span-5 lg:row-span-1", // Small
                "lg:col-span-4 lg:row-span-1", // Small
                "lg:col-span-8 lg:row-span-2", // Big
                "lg:col-span-4 lg:row-span-1", // Small
                "lg:col-span-4 lg:row-span-1", // Small
                "lg:col-span-8 lg:row-span-2", // Big
              ];

              return (
                <div
                  key={index}
                  className={`
          group
          relative
          overflow-hidden
          rounded-[30px]

          bg-white
          border
          border-[#edf1f7]

          shadow-[0_10px_40px_rgba(2,20,77,0.06)]

          transition-all
          duration-500

          hover:-translate-y-2
          hover:shadow-[0_25px_70px_rgba(2,20,77,0.14)]

          ${layouts[index % layouts.length]} `}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
                    />
                    {/* Zoom Button */}
                    {/* Center Zoom Button */}
                    <button
                      onClick={() => setSelectedImage(item)}
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

    z-20
  "
                    >
                      <div
                        className="
      w-16
      h-16

      rounded-full

      bg-white/88
      backdrop-blur-md

      shadow-[0_10px_30px_rgba(0,0,0,0.12)]

      flex
      items-center
      justify-center

      transition-all
      duration-300

      hover:scale-110
    "
                      >
                        <ZoomIn size={28} className="text-[#02144d]" />
                      </div>
                    </button>

                    {/* Bottom Center Floating Title */}
                    <div
                      className="
      absolute
      bottom-0
      left-0

      w-full

      flex
      justify-center

      p-5
      lg:p-6

      z-10
    "
                    >
                      <div
                        className="
                                  px-5
                                  py-3

                                  rounded-full

                                  bg-white/88
                                  backdrop-blur-md

                                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                                  transition-all
                                  duration-300

                                  group-hover:scale-105
                                "
                      >
                        <h3
                          className="
                                    text-[#02144d]
                                    text-[16px]
                                    lg:text-[18px]
                                    font-bold
                                    text-center
                                    leading-tight
                                    whitespace-nowrap
                                  "
                        >
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-6 lg:h-8" />
        {/* View Full Gallery */}
        <div className="flex justify-center pt-6 lg:pt-8 mt-16 lg:mt-24">
          <Link
            href="/gallery"
            className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-10
                    lg:px-14
                    min-w-[220px]
                    h-[60px]
                    rounded-full
                    bg-[#f37022]
                    text-white
                    font-semibold
                    text-[15px]
                  lg:text-[16px]
                  shadow-[0_14px_45px_rgba(243,112,34,0.28)]
                  transition-all
                  duration-300
                  hover:bg-[#02144d]
                  hover:-translate-y-1
                  hover:shadow-[0_18px_55px_rgba(2,20,77,0.24)]
                "
          >
            View Full Gallery
            <span
              className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
            >
              →
            </span>
          </Link>
        </div>
      </div>
      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="
      fixed
      inset-0
      z-[999]

      bg-black/85
      backdrop-blur-md

      flex
      items-center
      justify-center

      p-4
      lg:p-10
    "
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="
        absolute
        top-6
        right-6

        w-12
        h-12

        rounded-full

        bg-white/10
        backdrop-blur-md

        border
        border-white/20

        flex
        items-center
        justify-center

        transition-all
        duration-300

        hover:bg-white/20
      "
          >
            <X size={26} className="text-white" />
          </button>

          {/* Large Image */}
          <div
            className="
        relative

        w-full
        max-w-6xl

        h-[80vh]

        rounded-[30px]
        overflow-hidden

        shadow-[0_25px_100px_rgba(0,0,0,0.45)]
      "
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
