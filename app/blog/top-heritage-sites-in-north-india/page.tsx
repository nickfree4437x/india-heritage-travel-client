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
import WhyNorthIndiaSection from "./sections/hero-intro/WhyNorthIndiaSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import DelhiHeritageSection from "./sections/heritage-sites/DelhiHeritageSection";
import AgraHeritageSection from "./sections/heritage-sites/AgraHeritageSection";
import RajasthanHeritageSection from "./sections/heritage-sites/RajasthanHeritageSection";
import SpiritualHeritageSection from "./sections/heritage-sites/SpiritualHeritageSection";
import HiddenGemsSection from "./sections/heritage-sites/HiddenGemsSection";
import HeritageExperiencesSection from "./sections/history-architecture/HeritageExperiencesSection";
import TicketPricesSection from "./sections/practical-guide/TicketPricesSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import SoloTravelSection from "./sections/practical-guide/SoloTravelSection";
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
export default function TopHeritageSitesNorthIndiaPage() {
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
      name: "Top Heritage Sites in North India",
      url: "https://indiaheritagetravel.com/blog/top-heritage-sites-in-north-india",
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
        <WhyNorthIndiaSection />
        <HistorySection />
        <ArchitectureSection />
        <DelhiHeritageSection />
        <AgraHeritageSection />
        <RajasthanHeritageSection />
        <SpiritualHeritageSection />
        <HiddenGemsSection />
        <HeritageExperiencesSection />
        <TicketPricesSection />
        <PracticalGuideSection />
        <SoloTravelSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}