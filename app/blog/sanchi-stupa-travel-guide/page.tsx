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
import IntroSection from "./sections/hero-intro/IntroSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import ToranasSection from "./sections/history-architecture/ToranasSection";
import FullComplexSection from "./sections/major-attractions/FullComplexSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractionsSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import BestTimeSection from "./sections/practical-guide/BestTimeSection";
import WhyChooseSection from "./sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FAQSection";
import MoreBlogSection from "../mahabalipuram-travel-guide/sections/MoreBlogs/MoreBlogs";

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
export default function SanchiStupaTravelGuidePage() {
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
      name: "Sanchi Stupa Travel Guide",
      url: "https://indiaheritagetravel.com/blog/sanchi-stupa-travel-guide",
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
        <IntroSection />
        <HistorySection />
        <ArchitectureSection />
        <ToranasSection />
        <FullComplexSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <BestTimeSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}