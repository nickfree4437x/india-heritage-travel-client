
import type { Metadata } from "next";

// ============================================================
// METADATA & SCHEMAS
// ============================================================

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// ============================================================
// SEO
// ============================================================

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================================
// BLOG SECTIONS
// ============================================================

import HeroSection from "./sections/hero-intro/HeroSection";
import OverviewSection from "./sections/hero-intro/OverviewSection";
import RegionHistorySection from "./sections/hero-intro/IntroSection";
import KingdomsSection from "./sections/hero-intro/KingdomsSection";

import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import LivingHeritageSection from "./sections/history-archiecture/LivingHeritage";

import AttractionsSection from "./sections/major-attractions/AttractionsSection";

import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import FamilyTravelSection from "./sections/pratical-guide/TravelTipSection";
import WhyChooseSection from "./sections/pratical-guide/WhyTravelSection";

import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlogs from "./sections/faq-section/MoreBlogs";

// ============================================================
// COMMON
// ============================================================

import Footer from "@/src/sections/footer/Footer";

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata =
  pageMetadata;

// ============================================================
// BREADCRUMB ITEMS
// ============================================================

export default function HistoricKingdomsNortheastIndiaPage() {
  const breadcrumbItems = [
    {
      name: "Home",
      url: "https://www.indiaheritagetravel.com",
    },
    {
      name: "Blog",
      url: "https://www.indiaheritagetravel.com/blog",
    },
    {
      name: "Historic Kingdoms of Northeast India",
      url:
        "https://www.indiaheritagetravel.com/blog/historic-kingdoms-northeast-india",
    },
  ];

  return (
    <>
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={breadcrumbItems}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema
          ),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema />

      {/* Hero */}
      <HeroSection />
      <OverviewSection />

      <main>
        <RegionHistorySection />
        <KingdomsSection />
        <ArchitectureSection />
        <LivingHeritageSection />
        <AttractionsSection />
        <ItinerarySection />
        <PracticalGuideSection />
        <FamilyTravelSection />
        <WhyChooseSection />
        <FAQSection />
      </main>

      {/* Related Blogs */}
      <MoreBlogs />

      {/* Footer */}
      <Footer />
    </>
  );
}
