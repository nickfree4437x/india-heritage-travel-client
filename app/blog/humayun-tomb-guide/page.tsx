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
import HeroSection from "./sections/hero-overview/HeroSection";
import OverviewSection from "./sections/hero-overview/OverviewSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import UNESCOSection from "./sections/history-architecture/UNESCOSection";
import AttractionsSection from "./sections/major-attractions/AttractionsSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractionsSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import BestTimeSection from "./sections/practical-guide/BestTimeSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";
import MoreBlogSection from "../mahabalipuram-travel-guide/sections/MoreBlogs/MoreBlogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function HumayunsTombGuidePage() {
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
      name: "Humayun's Tomb Guide",
      url: "https://indiaheritagetravel.com/blog/humayun-tomb-guide",
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
        <UNESCOSection />
        <AttractionsSection />
        <ExperiencesSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <BestTimeSection />
        <FAQSection />
        <MoreBlogSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}