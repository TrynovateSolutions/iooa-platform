import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import WhatWeDoSection from "../components/home/WhatWeDoSection";
import CoreTeamSection from "../components/home/CoreTeamSection";
import GallerySection from "../components/home/GallerySection";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white">
      <HeroSection />
      <div className="h-10 lg:h-16 bg-[#f8fafc]" />
      <AboutSection />
      <div className="h-10 lg:h-16 bg-[#f8fafc]" />
      <WhatWeDoSection />
      <div className="h-10 lg:h-16 bg-[#f8fafc]" />
      <CoreTeamSection />
      <div className="h-10 lg:h-16 bg-[#f8fafc]" />
      <GallerySection />
      <div className="h-10 lg:h-16 bg-[#f8fafc]" />
    </main>
  );
}
