"use client";

import Image from "next/image";
import StickyNav from "../holi/components/StickyNav";
import DesignedFor from "../holi/components/DesignedFor";
import AboutSection from "./AboutSection";
import SpecialSection from "./SpecialSection";
import ItinerarySection from "./ItinerarySection";
import PricingSection from "./PricingSection";
import ExploreMoreSection from "./ExploreMoreSection";
import FAQSection from "../holi/components/FAQSection";
import Footer from "../../../footer/Footer";

export default function DiwaliDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image with Zoom */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="/festivals/diwali/dewali.jpg"
          alt="Diwali Festival"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight
                    opacity-0 translate-y-10
                    animate-[fadeUp_1.2s_ease-out_0.3s_forwards]"
        >
          Diwali: Festival of lights
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl text-lg md:text-lg mb-6 text-gray-200
                    opacity-0 translate-y-10
                    animate-[fadeUp_1.4s_ease-out_0.6s_forwards]"
        >
          Festival of Lights & new beginnings, celebrating good over evil.
        </p>

      </div>
    </section>
      <StickyNav/>
      <DesignedFor/>
      <AboutSection/>
      <SpecialSection/>
      <ItinerarySection/>
      <PricingSection/>
      <ExploreMoreSection/>
      <FAQSection/>
      <Footer/>

    </div>
  );
}