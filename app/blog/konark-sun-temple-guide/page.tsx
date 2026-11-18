import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// Sections
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import HistorySection from "./sections/history-architecture/HistorySection";
import ArchitectureSection from "./sections/history-architecture/ArchitectureSection";
import UNESCOSection from "./sections/history-architecture/UNESCOSection";
import MajorAttractionsSection from "./sections/major-attractions/MajorAttractionsSection";
import DanceFestivalSection from "./sections/major-attractions/DanceFestivalSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractionsSection";
import TicketInformationSection from "./sections/practical-guide/TicketInformationSection";
import BestTimeSection from "./sections/practical-guide/BestTimeSection";
import WhyChooseSection from "./sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// Common
import Footer from "@/src/sections/footer/Footer";
import MoreBlogSection from "../ajanta-and-ellora-caves-guide/sections/more-blogs/MoreBlogs";

export const metadata: Metadata =
  pageMetadata;

export default function KonarkSunTempleGuidePage() {
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
      name: "Konark Sun Temple Guide",
      url:
        "https://indiaheritagetravel.com/blog/konark-sun-temple-guide",
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

      <main>
        <IntroSection />
        <HistorySection />
        <ArchitectureSection />
        <UNESCOSection />
        <MajorAttractionsSection />
        <DanceFestivalSection />
        <NearbyAttractionsSection />
        <TicketInformationSection />
        <BestTimeSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogSection />
      </main>

      <Footer />
    </>
  );
}