import "./globals.css";

import HeaderLayoutWrapper from "../components/layout/HeaderLayoutWrapper";
import FooterLayoutWrapper from "../components/layout/FooterLayoutWrapper";

export const metadata = {
  title: "IOOA",
  description: "Indian Oil Officers Association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* HEADER */}
        <HeaderLayoutWrapper />

        {/* PAGE CONTENT */}
        <main className="flex-1 pt-[90px] lg:pt-[110px]">{children}</main>

        {/* FOOTER */}
        <FooterLayoutWrapper />
      </body>
    </html>
  );
}
