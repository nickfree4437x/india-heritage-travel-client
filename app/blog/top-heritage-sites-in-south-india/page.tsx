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
import WhySouthIndiaSection from "./sections/hero-intro/WhySouthIndiaSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import TamilNaduSection from "./sections/heritage-sites/TamilNaduHeritageSection";
import KarnatakaSection from "./sections/heritage-sites/KarnatakaHeritageSection";
import KeralaSection from "./sections/heritage-sites/KeralaHeritageSection";
import AndhraTelanganaSection from "./sections/heritage-sites/AndhraTelanganaSection";
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
export default function TopHeritageSitesSouthIndiaPage() {
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
      name: "Top Heritage Sites in South India",
      url: "https://indiaheritagetravel.com/blog/top-heritage-sites-in-south-india",
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
        <WhySouthIndiaSection />
        <HistorySection />
        <ArchitectureSection />
        <TamilNaduSection />
        <KarnatakaSection />
        <KeralaSection />
        <AndhraTelanganaSection />
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