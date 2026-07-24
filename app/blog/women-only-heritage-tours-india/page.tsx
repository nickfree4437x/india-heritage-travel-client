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
import WhyGrowingSection from "./sections/women-only-tour/WhyGrowingSection";
import WhatToExpectSection from "./sections/women-only-tour/WhatToExpectSection";
import WhatToWearSection from "./sections/women-only-tour/WhatToWearSection";
import EtiquetteSection from "./sections/cultural-sections/EtiquetteSection";
import PreparationSection from "./sections/cultural-sections/PreparationSection";
import BestTimeSection from "./sections/practical-guide/BestTimeSection";
import ItinerarySection from "./sections/practical-guide/ItinerarySection";
import LuxurySection from "./sections/cultural-sections/LuxurySection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import WhyChooseSection from "./sections/cultural-sections/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";
import MoreBlogSection from "../hampi-travel-guide/section/cultural-experiences/MoreBlog";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function WomenOnlyHeritageToursPage() {
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
      name: "Women-Only Heritage Tours in India",
      url: "https://indiaheritagetravel.com/blog/women-only-heritage-tours-india",
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
        <WhyGrowingSection />
        <WhatToExpectSection />
        <WhatToWearSection />
        <EtiquetteSection />
        <PreparationSection />
        <BestTimeSection />
        <ItinerarySection />
        <LuxurySection />
        <PracticalGuideSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}