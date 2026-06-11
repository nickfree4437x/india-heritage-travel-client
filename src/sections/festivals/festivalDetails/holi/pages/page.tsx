"use client";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

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
import HoliHero from "../components/HoliHeroSection";

export default function HoliDetails() {
  return (
    <div className="w-full">

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Festivals",
            url: "https://indiaheritagetravel.com/festivals",
          },
          {
            name: "Diwali Festival",
            url: "https://indiaheritagetravel.com/festivals/diwali",
          },
        ]}
      />

      {/* 🔥 HERO SECTION - New Separate Component */}
      <HoliHero />

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