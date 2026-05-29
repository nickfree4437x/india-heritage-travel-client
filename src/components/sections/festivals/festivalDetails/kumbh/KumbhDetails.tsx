"use client";

import Image from "next/image";

import StickyNav from "../holi/components/StickyNav";
import DesignedFor from "../holi/components/DesignedFor";
import AboutSection from "./AboutSection";
import SpecialSection from "./SpecialSection";
import ItinerarySection from "./ItinerarySection";
import PricingSection from "./PricingSection";
import ExploreSection from "./ExploreSection";
import FAQSection from "../../common/FAQSection";
import Footer from "../../../footer/Footer";
import CommonForm from "@/src/components/tours/CommonForm";
import FestivalBreadcrumb from "@/src/components/common/Breadcrumb/FestivalBreadcrumb";

export default function KumbhDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[93vh] w-full overflow-hidden">

        {/* Background Image with Zoom */}
        <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">

          <Image
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547846/kumbh_arulyq.jpg"
            alt="Kumbh Mela"
            fill
            priority
            className="object-cover object-center will-change-transform"
          />

        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            flex flex-col items-center justify-center
            text-center
            px-6
            text-white
            h-full
          "
        >

          {/* HEADING */}
          <h1
            className="
              max-w-[700px]
              text-3xl md:text-4xl
              font-[600]
              leading-[1.1]
              tracking-[0.04em]
              mb-4

              opacity-0 translate-y-10
              animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
            "
          >
            Sacred Path: Kumbh Mela
          </h1>

        </div>

      </section>

      {/* 🔗 STICKY NAV */}
      <StickyNav />

      <FestivalBreadcrumb
        title="Kumbh Festival"
      />

      {/* 🎯 DESIGNED FOR */}
      <DesignedFor />

      {/* 📖 ABOUT */}
      <AboutSection />

      {/* ✨ SPECIAL */}
      <SpecialSection />

      {/* 🗺️ ITINERARY */}
      <ItinerarySection />

      {/* 💰 PRICING */}
      <PricingSection />

      <CommonForm tourName="kumbh-tour"/>

      {/* 🌍 EXPLORE */}
      <ExploreSection />

      {/* ❓ FAQ */}
      <FAQSection />

      {/* 🔻 FOOTER */}
      <Footer />

    </div>
  );
}