"use client";

import Image from "next/image";
import StickyNav from "../holi/components/StickyNav";
import DesignedFor from "../holi/components/DesignedFor";
import AboutSection from "./AboutSection";
import SpecialSection from "./SpecialSection";
import ItinerarySection from "./ItinerarySection";
import PricingSection from "./PricingSection";
import ExploreSection from "./ExploreSection";
import FAQSection from "../holi/components/FAQSection";
import Footer from "../../../footer/Footer";

export default function KumbhDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION (UPDATED SAME AS HOLI) */}
      <section className="relative h-[93vh] w-full overflow-hidden">

        {/* Background Image with Zoom */}
        <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
          <Image
            src="/festivals/kumbh/kumbh.jpg"
            alt="Kumbh Mela"
            fill
            priority
            className="object-cover object-center will-change-transform"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

          {/* Heading */}
          <h1 className="text-4xl md:text-4xl font-bold mb-4 leading-tight
                         opacity-0 translate-y-10
                         animate-[fadeUp_1.2s_ease-out_0.3s_forwards]">
            Sacred Path: Kumbh Mela
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg md:text-md text-gray-200
                        opacity-0 translate-y-10
                        animate-[fadeUp_1.4s_ease-out_0.6s_forwards]">
            A sacred gathering of millions, cleansing souls in holy waters.
          </p>

        </div>
      </section>

      <StickyNav/>
      <DesignedFor/>
      <AboutSection/>
      <SpecialSection/>
      <ItinerarySection/>
      <PricingSection/>
      <ExploreSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}