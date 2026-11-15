
// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import EventSchema from "@/src/common/seo/EventSchema";

// ============================================
// SEO DATA
// ============================================
import { festivalSeoData } from "../../data/seoData";

// ============================================
// COMMON COMPONENTS
// ============================================
import FestivalBreadcrumb from "@/src/common/Breadcrumb/FestivalBreadcrumb";
import CommonForm from "@/src/tours/CommonForm";
import FAQSection from "../../common/FAQSection";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE SECTIONS
// ============================================
import HoliHero from "./hero/HoliHeroSection";
import StickyNav from "./content/StickyNav";
import DesignedFor from "./content/DesignedFor";
import TourDetailsContent from "./content/TourDetailsContent";
import SpecialSection from "./content/SpecialSection";
import ItinerarySection from "./itinerary-pricing/ItinerarySection";
import PricingSection from "./itinerary-pricing/PricingSection";
import ExploreMoreSection from "./content/ExploreMoreSection";

// ============================================
// PAGE COMPONENT
// ============================================
export default function HoliFestivalTour() {
  const holiSeo = festivalSeoData.holi;

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
            name: "Holi Festival Tour",
            url: "https://indiaheritagetravel.com/festivals/holi",
          },
        ]}
      />

      {/* Event Schema - SEO */}
      <EventSchema
        name="Holi Festival Tour"
        description={holiSeo.description}
        url="https://indiaheritagetravel.com/festivals/holi"
        image="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547592/holi_cx2jwa.jpg"
        location="Mathura, Vrindavan, India"
      />

      {/* Page Section */}
      <HoliHero />
      <StickyNav />

      {/* Festival Breadcrumb */}
      <FestivalBreadcrumb title="Holi Festival Tour" />

      <DesignedFor />
      <TourDetailsContent />
      <SpecialSection />
      <ItinerarySection />
      <PricingSection />

      {/* Booking Form */}
      <CommonForm tourName="holi-tour" />

      <ExploreMoreSection />
      <FAQSection />
      <Footer />
    </div>
  );
}