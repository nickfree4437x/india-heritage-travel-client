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
import HiddenSiteSection from "./sections/hero-intro/HiddenSites";
import OverviewSection from "./sections/hero-intro/OverViewSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import HiddenSitesSection from "./sections/heritage-sites/HiddenSiteSection";
import HiddenGemsSection from "./sections/heritage-sites/HiddenGems";
import FoodSection from "./sections/heritage-sites/FoodSecion";
import TravelGuideSection from "./sections/heritage-sites/LuxurySection";
import SoloTravelSection from "./sections/practical-guide/SoloTravelSection";
import TicketPricesSection from "./sections/practical-guide/TicketPricesSection";
import PraticalGuide from "./sections/practical-guide/PracticalGuideSection";
import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlogs from "./sections/more-blogs/MoreBlogs";

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
export default function HiddenUNESCOHeritageSitesPage() {
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
      name: "Hidden UNESCO Heritage Sites in India",
      url: "https://indiaheritagetravel.com/blog/hidden-unesco-heritage-sites-in-india",
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
        <HiddenSiteSection />
        <OverviewSection />
        <HistorySection />
        <ArchitectureSection />
        <HiddenSitesSection />
        <HiddenGemsSection />
        <FoodSection />
        <TravelGuideSection />
        <SoloTravelSection />
        <TicketPricesSection />
        <PraticalGuide />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}