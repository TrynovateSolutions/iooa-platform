"use client";

import { usePathname } from "next/navigation";

import Footer from "./Footer";

export default function FooterLayoutWrapper() {
  const pathname = usePathname();

  const hideFooter = pathname.includes("login") || pathname.includes("signup");

  return <>{!hideFooter && <Footer />}</>;
}
