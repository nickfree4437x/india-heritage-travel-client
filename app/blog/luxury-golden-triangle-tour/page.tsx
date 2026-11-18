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
import FAQSchema from "./sections/faq-conclusion/FAQSchema";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import WhatIsLuxuryTourSection from "./sections/luxury-golden/LuxurySection";
import DelhiLuxuryExperiences from "./sections/luxurious-experiences/DelhiSection";
import AgraLuxuryExperiences from "./sections/luxurious-experiences/AgraSection";
import JaipurLuxuryExperiences from "./sections/luxurious-experiences/JaipurSection";
import LuxuryHotelsSection from "./sections/luxurious-experiences/HotelSection";
import LuxuryTransportSection from "./sections/luxury-transport/TranspotSection";
import BestTimeLuxuryTourSection from "./sections/time-to-visit/BestTimeSection";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";
import Moreblog from "./sections/more-blog/MoreBlog";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function LuxuryGoldenTriangleTourPage() {
  return (
    <main className="w-full bg-white">
      {/* Breadcrumb Schema - SEO */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Blog",
            url: "https://indiaheritagetravel.com/blog",
          },
          {
            name: "Luxury Golden Triangle Tour",
            url: "https://indiaheritagetravel.com/blog/luxury-golden-triangle-tour",
          },
        ]}
      />

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
      <IntroSection />
      <WhatIsLuxuryTourSection />
      <DelhiLuxuryExperiences />
      <AgraLuxuryExperiences />
      <JaipurLuxuryExperiences />
      <LuxuryHotelsSection />
      <LuxuryTransportSection />
      <BestTimeLuxuryTourSection />
      <FAQSection />
      <ConclusionSection />
      <Moreblog />

      {/* Footer */}
      <Footer />
    </main>
  );
}