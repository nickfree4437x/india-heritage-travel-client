"use client";

import Image from "next/image";
import { holiData } from "./holiData";

import StickyNav from "../components/StickyNav";
import DesignedFor from "../components/DesignedFor";
import TourDetailsContent from "../components/TourDetailsContent";
import SpecialSection from "../components/SpecialSection";
import ItinerarySection from "../components/ItinerarySection";
import PricingSection from "../components/PricingSection";
import ExploreMoreSection from "../components/ExploreMoreSection";
import FAQSection from "../components/FAQSection";

export default function HoliDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[80vh]">

        {/* Background Image */}
        <Image
          src="/holi.jpg"
          alt="Holi Tour"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {holiData.title}
          </h1>

          <p className="max-w-2xl text-lg md:text-xl mb-6 opacity-90">
            {holiData.description}
          </p>

          <button className="bg-[#e0b973] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#d4aa60] transition">
            Book Now
          </button>

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

    </div>
  );
}