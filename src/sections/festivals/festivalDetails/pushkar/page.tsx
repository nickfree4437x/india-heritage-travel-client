
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
import PushkarHero from "./hero/HeroSection";
import AboutSection from "./content/AboutSection";
import SpecialSection from "./content/SpecialSection";
import ItinerarySection from "./itinerary-pricing/ItinerarySection";
import PricingSection from "./itinerary-pricing/PricingSection";
import ExploreMoreSection from "./content/ExploreMoreSection";

// ============================================
// PAGE COMPONENT
// ============================================
export default function PushkarCamelFairTour() {

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
            name: "Pushkar Camel Fair Tour",
            url: "https://indiaheritagetravel.com/festivals/pushkar",
          },
        ]}
      />

      {/* Page Section */}
      <PushkarHero />
      <StickyNav />

      {/* Festival Breadcrumb */}
      <FestivalBreadcrumb title="Pushkar Camel Fair Tour" />

      <DesignedFor />
      <AboutSection />
      <SpecialSection />
      <ItinerarySection />
      <PricingSection />

      {/* Booking Form */}
      <CommonForm tourName="pushkar-fair-tour" />

      <ExploreMoreSection />
      <FAQSection />
      <Footer />
    </div>
  );
}