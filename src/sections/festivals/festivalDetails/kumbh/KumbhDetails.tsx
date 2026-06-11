"use client";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import StickyNav from "../holi/components/StickyNav";
import DesignedFor from "../holi/components/DesignedFor";
import AboutSection from "./AboutSection";
import SpecialSection from "./SpecialSection";
import ItinerarySection from "./ItinerarySection";
import PricingSection from "./PricingSection";
import ExploreSection from "./ExploreSection";
import FAQSection from "../../common/FAQSection";
import Footer from "../../../footer/Footer";
import CommonForm from "@/src/tours/CommonForm";
import FestivalBreadcrumb from "@/src/common/Breadcrumb/FestivalBreadcrumb";
import KumbhHero from "./HeroSection";

export default function KumbhDetails() {
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
            name: "Kumbh Festival",
            url: "https://indiaheritagetravel.com/festivals/kumbh",
          },
        ]}
      />

      {/* 🔥 HERO SECTION - New Separate Component */}
      <KumbhHero />

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