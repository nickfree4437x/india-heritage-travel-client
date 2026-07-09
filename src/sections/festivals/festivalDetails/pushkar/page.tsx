
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
export default function PushkarDetails() {
  const pushkarSeo = festivalSeoData.pushkar;

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
            name: "Festivals",
            url: "https://indiaheritagetravel.com/festivals",
          },
          {
            name: "Pushkar Camel Fair",
            url: "https://indiaheritagetravel.com/festivals/pushkar",
          },
        ]}
      />

      {/* Event Schema - SEO */}
      <EventSchema
        name="Pushkar Camel Fair"
        description={pushkarSeo.description}
        url="https://indiaheritagetravel.com/festivals/pushkar"
        image="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547787/Pushkar_k4ugcf.png"
        location="Pushkar, Rajasthan, India"
      />

      {/* Page Section */}
      <PushkarHero />
      <StickyNav />

      {/* Festival Breadcrumb */}
      <FestivalBreadcrumb title="Pushkar Camel Fair" />

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