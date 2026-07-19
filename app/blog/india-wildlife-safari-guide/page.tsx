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
import FAQSchema from "./secctions/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./secctions/hero-overview/HeroSection";
import IntroSection from "./secctions/hero-overview/IntroSection";
import WildlifeOverviewSection from "./secctions/wildlife-experience/WildlifeOverviewSection";
import WildlifeAnimalsSection from "./secctions/wildlife-experience/WildlifeAnimals";
import WildlifeSafariSection from "./secctions/wildlife-experience/WildlifeSafariSection";
import BestNationalParksSection from "./secctions/wildlife-experience/BestNationalParksSection";
import BestTimeSection from "./secctions/pratical-guide/BestTimeSection";
import LuxurySafariSection from "./secctions/pratical-guide/LuxurySafariSection";
import HowToChooseSection from "./secctions/pratical-guide/HowToChoose";
import FAQSection from "./secctions/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";
import MoreFoodSection from "../luxury-golden-triangle-tour/sections/more-blog/MoreBlog";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndiaWildlifeSafariGuidePage() {
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
      name: "India Wildlife Safari Guide",
      url: "https://indiaheritagetravel.com/blog/india-wildlife-safari-guide",
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
        <WildlifeOverviewSection />
        <WildlifeAnimalsSection />
        <WildlifeSafariSection />
        <BestTimeSection />
        <BestNationalParksSection />
        <LuxurySafariSection />
        <HowToChooseSection />
        <FAQSection />
        <MoreFoodSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}