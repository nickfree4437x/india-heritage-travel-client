import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "../best-destinations-for-women-travellers-india/sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import FemaleSafetySection from "./sections/hero-intro/FemaleSafetySection";
import PreTripPlanningSection from "./sections/hero-intro/PreTripPlanningSection";
import DestinationResearchSection from "./sections/destination-research/DestinationResearchSection";
import AccommodationSafetySection from "./sections/destination-research/AccommodationSafetySection";
import AirportSafetySection from "./sections/destination-research/AirportSafetySection";
import TransportSafetySection from "./sections/destination-research/TransportSafetySection";
import NightTravelSection from "./sections/cultural-tourist/NightTravelSection";
import CulturalEtiquetteSection from "./sections/cultural-tourist/CulturalEtiquetteSection";
import TouristScamsSection from "./sections/cultural-tourist/TouristScamsSection";
import SafetySection from "./sections/cultural-tourist/SafetySection";
import TravelTipsSection from "./sections/practical-guide/TravelTipsSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import SafetyChecklistSection from "./sections/practical-guide/SafetyChecklistSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "../best-destinations-for-women-travellers-india/sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../best-destinations-for-women-travellers-india/sections/practical-guide/MoreBlogSection";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function FemaleTravelSafetyGuidePage() {
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
      name: "Female Travel Safety Guide for India",
      url: "https://indiaheritagetravel.com/blog/female-travel-safety-guide-india",
    },
  ];

  return (
    <>
      {/* Breadcrumb Schema - SEO */}
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Article Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* WebPage Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      <main>
        <FemaleSafetySection />
        <PreTripPlanningSection />
        <DestinationResearchSection />
        <AccommodationSafetySection />
        <AirportSafetySection />
        <TransportSafetySection />
        <NightTravelSection />
        <CulturalEtiquetteSection />
        <TouristScamsSection />
        <SafetySection />
        <TravelTipsSection />
        <PracticalGuideSection />
        <SafetyChecklistSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}