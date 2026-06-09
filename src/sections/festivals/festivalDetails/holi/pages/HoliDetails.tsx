"use client";

import Image from "next/image";

import StickyNav from "../components/StickyNav";
import DesignedFor from "../components/DesignedFor";
import TourDetailsContent from "../components/TourDetailsContent";
import SpecialSection from "../components/SpecialSection";
import ItinerarySection from "../components/ItinerarySection";
import PricingSection from "../components/PricingSection";
import ExploreMoreSection from "../components/ExploreMoreSection";
import FAQSection from "../../../common/FAQSection";
import Footer from "@/src/sections/footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import FestivalBreadcrumb from "@/src/common/Breadcrumb/FestivalBreadcrumb";

export default function HoliDetails() {
  return (
    <div className="w-full">

      {/* 🔥 HERO SECTION (UPDATED SAME AS TOUR HERO) */}
      <section className="relative h-[93vh] w-full overflow-hidden">

        {/* Background Image with Zoom */}
        <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
          <Image
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547592/holi_cx2jwa.jpg"
            alt="Holi Tour"
            fill
            priority
            className="object-cover object-center will-change-transform"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
        
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
           Holi Festival Tour India - Celebrate Colors in Rajasthan
          </h1>

        </div>
      </section>

      {/* 🔗 STICKY NAV */}
      <StickyNav />

      <FestivalBreadcrumb
        title="Holi Festival"
      />

      {/* 🎯 DESIGNED FOR */}
      <DesignedFor />

      <TourDetailsContent />
      <SpecialSection />
      <ItinerarySection />
      <PricingSection/>
      <CommonForm tourName="holi-tour"/>
      <ExploreMoreSection />
      <FAQSection />
      <Footer/>

    </div>
  );
}