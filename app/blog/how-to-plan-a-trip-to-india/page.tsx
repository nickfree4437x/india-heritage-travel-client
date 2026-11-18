import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import metadata from "./seo/metadata";

// ============================================
// SEO SCHEMAS
// ============================================
import {
  breadcrumbSchema,
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import HowPlanSection from "./sections/hero-intro/HowPlanSection";
import WhyPlanningSection from "./sections/hero-intro/WhyPlanningSection";
import BestTimeSection from "./sections/best-time/BestTimeSection";
import VisaGuideSection from "./sections/best-time/VisaGuideSection";
import DestinationsSection from "./sections/best-time/DestinationsSection";
import TransportationSection from "./sections/best-time/TransportationSection";
import AccommodationSection from "./sections/travel-section/AccommodationSection";
import PackingSection from "./sections/travel-section/PackingSection";
import EtiquetteSection from "./sections/travel-section/TravelTipSection";
import LuxuryVsBudgetSection from "./sections/travel-section/LuxuryVsBudgetSection";
import ItinerariesSection from "./sections/pratical-guide/ItinerariesSection";
import TravelAppsSection from "./sections/pratical-guide/TravelAppsSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../golden-triangle-tour-india-guide/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export { metadata };

// ============================================
// PAGE COMPONENT
// ============================================
export default function HowToPlanATripToIndiaPage() {
  return (
    <>
      {/* SEO Schemas - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      <main>
        <HowPlanSection />
        <WhyPlanningSection />
        <BestTimeSection />
        <VisaGuideSection />
        <DestinationsSection />
        <TransportationSection />
        <div className="-mt-2">
          <AccommodationSection />
        </div>
        <PackingSection />
        <EtiquetteSection />
        <LuxuryVsBudgetSection />
        <ItinerariesSection />
        <TravelAppsSection />
        <div className="-mt-4">
          <WhyChooseSection />
        </div>
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}