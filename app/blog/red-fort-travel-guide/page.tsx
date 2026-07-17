import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
  organizationSchema,
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
import OverviewSection from "./sections/hero-intro/Overview";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import MajorAttractionsSection from "./sections/major-attractions/MajorAttractionsSection";
import MuseumsSection from "./sections/major-attractions/MuseumsSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractionsSection";
import ItinerarySection from "./sections/major-attractions/ItinerarySection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import SoloTravelSection from "./sections/practical-guide/SoloTravelSection";
import WhyChooseSection from "./sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlogSection from "../qutub-minar-travel-guide/sections/more-blogs/MoreBlogs";

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
export default function RedFortTravelGuidePage() {
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
      name: "Red Fort Travel Guide",
      url: "https://indiaheritagetravel.com/blog/red-fort-travel-guide",
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

      {/* Organization Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      <main>
        <OverviewSection />
        <HistorySection />
        <ArchitectureSection />
        <MajorAttractionsSection />
        <MuseumsSection />
        <NearbyAttractionsSection />
        <ItinerarySection />
        <PracticalGuideSection />
        <SoloTravelSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}