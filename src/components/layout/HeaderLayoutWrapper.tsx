"use client";

import { usePathname } from "next/navigation";

import Header from "./Header";
import FloatingWhatsappButton from "./FloatingWhatsappButton";

export default function HeaderLayoutWrapper() {
  const pathname = usePathname();

  const hideLayout = pathname.includes("login") || pathname.includes("signup");

  return (
    <>
      {!hideLayout && <Header />}

      {/* ALWAYS SHOW */}
      <FloatingWhatsappButton />
    </>
  );
}
