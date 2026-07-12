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
import OverviewSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import UNESCOSection from "./sections/history-architecture/UNESCOSection";
import MajorAttractionsSection from "./sections/major-attractions/MajorAttractionsSection";
import FoodSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractionsSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import BestTimeSection from "./sections/practical-guide/BestTimeSection";
import SoloTravelSection from "./sections/practical-guide/SoloTravelSection";
import WhyChooseSection from "./sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlogs from "./sections/MoreBlogs/MoreBlogs";

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
export default function MahabalipuramTravelGuidePage() {
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
      name: "Mahabalipuram Travel Guide",
      url: "https://indiaheritagetravel.com/blog/mahabalipuram-travel-guide",
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
        <MajorAttractionsSection />
        <FoodSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <BestTimeSection />
        <SoloTravelSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}