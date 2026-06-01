
import StickyNav from "../holi/components/StickyNav";
import DesignedFor from "../holi/components/DesignedFor";
import AboutSection from "./AboutSection";
import SpecialSection from "./SpecialSection";
import ItinerarySection from "./ItinerarySection";
import PricingSection from "./PricingSection";
import ExploreMoreSection from "./ExploreMoreSection";
import FAQSection from "../../common/FAQSection";
import Footer from "../../../footer/Footer";
import CommonForm from "@/src/components/tours/CommonForm";
import FestivalBreadcrumb from "@/src/components/common/Breadcrumb/FestivalBreadcrumb";
import HeroSection from "./HeroSection"; // 👈 Naya import

export default function DiwaliDetails() {
  return (
    <div className="w-full">
      {/* 🔥 HERO SECTION - NEW COMPONENT */}
      <HeroSection />

      {/* 🔗 STICKY NAV */}
      <StickyNav />

      <FestivalBreadcrumb title="Diwali Festival" />

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

      <CommonForm tourName="diwali-tour" />

      {/* 🌍 EXPLORE MORE */}
      <ExploreMoreSection />

      {/* ❓ FAQ */}
      <FAQSection />

      {/* 🔻 FOOTER */}
      <Footer />
    </div>
  );
}