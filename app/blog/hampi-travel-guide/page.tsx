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
import FAQSchema from "./section/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./section/hero-intro/HeroSection";
import IntroSection from "./section/hero-intro/IntroSection";
import HistorySection from "./section/history-architecture/HistorySection";
import ArchitectureSection from "./section/history-architecture/ArchitectureSection";
import MajorAttraction from "./section/major-attraction/MajorAttraction";
import CulturalExperiencesSection from "./section/cultural-experiences/CulturalExperiencesSection";
import NearbyAttractionsSection from "./section/major-attraction/NearbyAttractionsSection";
import PracticalGuideSection from "./section/practical-guide/PracticalGuideSection";
import BestTimeSection from "./section/practical-guide/BestTimeSection";
import FAQSection from "./section/faq-section/FaqSection";
import MoreBlog from "./section/cultural-experiences/MoreBlog";

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
export default function HampiTravelGuidePage() {
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
      name: "Hampi Travel Guide",
      url: "https://indiaheritagetravel.com/blog/hampi-travel-guide",
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
        <IntroSection />
        <HistorySection />
        <ArchitectureSection />
        <MajorAttraction />
        <CulturalExperiencesSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <BestTimeSection />
        <FAQSection />
        <MoreBlog />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}