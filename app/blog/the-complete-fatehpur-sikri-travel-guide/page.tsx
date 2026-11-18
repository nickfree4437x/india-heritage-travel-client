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
import FAQSchema from "./section/faq-conclusion/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./section/hero-intro/HeroSection";
import IntroSection from "./section/hero-intro/IntroSection";
import HistorySection from "./section/hero-intro/History";
import AttractionsSection from "./section/top-attraction/AttractionsSection";
import NearbyAttractionsSection from "./section/top-attraction/NearbyAttractionsSection";
import PracticalGuideSection from "./section/practical-guide/PracticalGuideSection";
import VisitSection from "./section/practical-guide/VisitSection";
import FAQSection from "./section/faq-conclusion/FaqSection";
import MoreBlogs from "./section/more-blogs/MoreBlogs";

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
export default function FatehpurSikriTravelGuidePage() {
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
      name: "Fatehpur Sikri Travel Guide",
      url: "https://indiaheritagetravel.com/blog/the-complete-fatehpur-sikri-travel-guide",
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

      {/* Page Sections */}
      <HeroSection />
      <main>
        <IntroSection />
        <HistorySection />
        <AttractionsSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <VisitSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}