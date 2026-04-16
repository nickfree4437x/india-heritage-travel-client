"use client";

import Image from "next/image";
import { pushkarData } from "./pushkarData";
import StickyNav from "../holi/components/StickyNav";
import DesignedFor from "../holi/components/DesignedFor";
import AboutSection from "./AboutSection";
import SpecialSection from "./SpecialSection";
import ItinerarySection from "./ItinerarySection";
import PricingSection from "./PricingSection";
import ExploreMoreSection from "./ExploreMoreSection";
import FAQSection from "../holi/components/FAQSection";

export default function PushkarDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[80vh]">

        {/* Background Image */}
        <Image
          src="/festivals/pushkar/pushkar.jpg"
          alt="Pushkar Camel Festival"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white">

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {pushkarData.title}
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg md:text-xl mb-6 opacity-90">
            {pushkarData.description}
          </p>

          {/* CTA */}
          <button className="bg-[#9b7a50] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#876845] transition">
            Book Now
          </button>

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

    </div>
  );
}