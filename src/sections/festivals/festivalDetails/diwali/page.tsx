
// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// ============================================
// COMMON COMPONENTS
// ============================================
import FestivalBreadcrumb from "@/src/common/Breadcrumb/FestivalBreadcrumb";
import CommonForm from "@/src/tours/CommonForm";
import FAQSection from "../../common/FAQSection";
import Footer from "../../../footer/Footer";

// ============================================
// SHARED COMPONENTS (from Holi)
// ============================================
import StickyNav from "../holi/content/StickyNav";
import DesignedFor from "../holi/content/DesignedFor";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./hero/HeroSection";
import AboutSection from "./content/AboutSection";
import SpecialSection from "./content/SpecialSection";
import ItinerarySection from "./itinerary-pricing/ItinerarySection";
import PricingSection from "./itinerary-pricing/PricingSection";
import ExploreMoreSection from "./content/ExploreMoreSection";

// ============================================
// PAGE COMPONENT
// ============================================
export default function DiwaliDetails() {

  return (
    <div className="w-full">
      {/* Breadcrumb Schema - SEO */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Diwali Festival Tour",
            url: "https://indiaheritagetravel.com/festivals/diwali",
          },
        ]}
      />

      {/* Page Section */}
      <HeroSection />
      <StickyNav />

      {/* Festival Breadcrumb */}
      <FestivalBreadcrumb title="Diwali Festival Tour" />

      <DesignedFor />
      <AboutSection />
      <SpecialSection />
      <ItinerarySection />
      <PricingSection />
      <CommonForm tourName="diwali-tour" />
      <ExploreMoreSection />
      <FAQSection />
      <Footer />
    </div>
  );
}