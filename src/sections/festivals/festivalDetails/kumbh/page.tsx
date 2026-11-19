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
import StickyNav from "../holi//content/StickyNav";
import DesignedFor from "../holi/content/DesignedFor";

// ============================================
// PAGE SECTIONS
// ============================================
import KumbhHero from "./hero/HeroSection";
import AboutSection from "./content/AboutSection";
import SpecialSection from "./content/SpecialSection";
import ItinerarySection from "./itinerary-pricing/ItinerarySection";
import PricingSection from "./itinerary-pricing/PricingSection";
import ExploreSection from "./content/ExploreSection";

// ============================================
// PAGE COMPONENT
// ============================================
export default function KumbhMelaTour() {

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
            name: "Kumbh Mela Tour",
            url: "https://indiaheritagetravel.com/festivals/kumbh",
          },
        ]}
      />


      {/* Page Section */}
      <KumbhHero />
      <StickyNav />

      {/* Festival Breadcrumb */}
      <FestivalBreadcrumb title="Kumbh Mela Tour" />

      <DesignedFor />
      <AboutSection />
      <SpecialSection />
      <ItinerarySection />
      <PricingSection />

      {/* Booking Form */}
      <CommonForm tourName="kumbh-tour" />

      <ExploreSection />
      <FAQSection />
      <Footer />
    </div>
  );
}