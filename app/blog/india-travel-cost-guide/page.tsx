import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
export { metadata } from "./seo/metadata";

// ============================================
// SEO SCHEMAS
// ============================================
import {
  breadcrumbSchema,
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "../best-time-to-visit-india/sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import VisaCostsSection from "./sections/hero-intro/VisaCostsSection";
import FlightsSection from "./sections/india-travel/FlightsSection";
import AccommodationSection from "./sections/india-travel/AccommodationSection";
import HeritageSection from "./sections/india-travel/HeritageSection";
import FoodDiningSection from "./sections/india-travel/FoodDiningSection";
import TransportationSection from "./sections/practical-costs/TransportationSection";
import AttractionCostsSection from "./sections/practical-costs/AttractionCostsSection";
import PracticalCostsSection from "./sections/practical-costs/PracticalCostsSection";
import RegionalCostsSection from "./sections/practical-costs/RegionalCostsSection";
import TravelerTypeSection from "./sections/traveler-type/TravelerTypeSection";
import MoneySavingSection from "./sections/traveler-type/MoneySavingSection";
import GoldenTriangleCostSection from "./sections/traveler-type/GoldenTriangleCostSection";
import TravelerTipsSection from "../how-to-plan-a-trip-to-india/sections/travel-section/TravelTipSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "../best-time-to-visit-india/sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "./sections/traveler-type/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndiaTravelCostGuidePage() {
  const breadcrumbItems = [
    {
      name: "Home",
      url: "https://indiaheritagetravel.com",
    },
    {
      name: "Blog",
      url: "https://indiaheritagetravel.com/blog",
    },
    {
      name: "India Travel Cost Guide",
      url: "https://indiaheritagetravel.com/blog/india-travel-cost-guide",
    },
  ];

  return (
    <>
      {/* SEO Structured Data - JSON-LD */}
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* SEO Components */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroSection />
        <VisaCostsSection />
        <FlightsSection />
        <AccommodationSection />
        <HeritageSection />
        <FoodDiningSection />
        <TransportationSection />
        <AttractionCostsSection />
        <PracticalCostsSection />
        <RegionalCostsSection />
        <TravelerTypeSection />
        <MoneySavingSection />
        <GoldenTriangleCostSection />
        <TravelerTipsSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}