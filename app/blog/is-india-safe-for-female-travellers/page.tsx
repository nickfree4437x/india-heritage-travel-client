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
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import HonestOverviewSection from "./sections/hero-intro/HonestOverviewSection";
import IndiaSafeSection from "./sections/hero-intro/IndiaSafeSection";
import OfficialAdvisoriesSection from "./sections/hero-intro/OfficialAdvisoriesSection";
import SafestDestinationsSection from "./sections/safest-destinations/SafestDestinationsSection";
import CulturalEtiquetteSection from "./sections/safest-destinations/CulturalEtiquetteSection";
import TransportationSafetySection from "./sections/safest-destinations/TransportationSafetySection";
import HotelSafetySection from "./sections/safest-destinations/HotelSafetySection";
import NightTravelSection from "./sections/staying-connected/NightTravelSection";
import EmergencyPreparednessSection from "./sections/staying-connected/EmergencysSection";
import TravelTipsSection from "./sections/staying-connected/TravelTipsSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/practical-guide/ItinerarySection";
import WhyChooseSection from "./sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlogs from "./sections/practical-guide/MoreBlogsSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function IsIndiaSafeForFemaleTravellersPage() {
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
      name: "Is India Safe for Female Travellers?",
      url: "https://indiaheritagetravel.com/blog/is-india-safe-for-female-travellers",
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
        <HonestOverviewSection />
        <IndiaSafeSection />
        <OfficialAdvisoriesSection />
        <SafestDestinationsSection />
        <CulturalEtiquetteSection />
        <TransportationSafetySection />
        <HotelSafetySection />
        <NightTravelSection />
        <EmergencyPreparednessSection />
        <TravelTipsSection />
        <PracticalGuideSection />
        <ItinerarySection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}