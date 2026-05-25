"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsappButton() {
  return (
    <a
      href="https://wa.me/918595109307?text=Hello%20IOOA"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-5
        right-5
        z-[9999]

        flex
        items-center
        justify-center

        w-[58px]
        h-[58px]

        rounded-full
        bg-[#25D366]

        shadow-[0_8px_30px_rgba(37,211,102,0.45)]

        transition-all
        duration-300
        hover:scale-110

        animate-bounce
      "
    >
      <FaWhatsapp className="text-white text-[34px]" />
    </a>
  );
}
