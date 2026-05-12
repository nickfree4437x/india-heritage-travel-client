"use client";

import Image from "next/image";

import StickyNav from "../components/StickyNav";
import DesignedFor from "../components/DesignedFor";
import TourDetailsContent from "../components/TourDetailsContent";
import SpecialSection from "../components/SpecialSection";
import ItinerarySection from "../components/ItinerarySection";
import PricingSection from "../components/PricingSection";
import ExploreMoreSection from "../components/ExploreMoreSection";
import FAQSection from "../components/FAQSection";
import Footer from "@/src/components/sections/footer/Footer";

export default function HoliDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION (UPDATED SAME AS TOUR HERO) */}
      <section className="relative h-[93vh] w-full overflow-hidden">

        {/* Background Image with Zoom */}
        <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
          <Image
            src="/festivals/holi/holi.jpg"
            alt="Holi Tour"
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
          <h1 className="max-w-[700px]
            text-3xl md:text-4xl
            font-[600]
            leading-[1.1]
            tracking-[0.04em]
            mb-4

            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          ">
           Colors of Joy: Holi<br />
           Festival
          </h1>

        </div>
      </section>

      {/* 🔗 STICKY NAV */}
      <StickyNav />

      {/* 🎯 DESIGNED FOR */}
      <DesignedFor />

      <TourDetailsContent />
      <SpecialSection />
      <ItinerarySection />
      <PricingSection/>
      <ExploreMoreSection />
      <FAQSection />
      <Footer/>

    </div>
  );
}