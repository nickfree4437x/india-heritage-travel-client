import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./section/faq/FaqSchema";

// Sections
import HeroSection from "./section/hero-intro/HeroSection";
import IntroSection from "./section/hero-intro/IntroSection";
import HistorySection from "./section/hero-intro/HistorySection";
import ArchitectureSection from "./section/architecture-group/ArchitectureSection";
import MajorAttractionsSection from "./section/major-attraction/MajorAttractionsSection";
import SoundLightShowSection from "./section/sound-light-show/SoundLightShowSection";
import DanceFestivalSection from "./section/sound-light-show/DanceFestivalSection";
import NearbyAttractionsSection from "./section/major-attraction/NearbyAttractionsSection";
import PracticalGuideSection from "./section/practical-guide/PracticalGuideSection";
import VisitSection from "./section/practical-guide/VisitSection";
import FAQSection from "./section/faq/FaqSection";

// Common
import MoreBlogSection from "../golden-triangle-tour-vs-rajasthan-tour/sections/more-blog/MoreBlog";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata =
  pageMetadata;

export default function KhajurahoTemplesTravelGuidePage() {
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
      name: "Khajuraho Temples Travel Guide",
      url:
        "https://indiaheritagetravel.com/blog/khajuraho-temples-travel-guide",
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
        <MajorAttractionsSection />
        <SoundLightShowSection />
        <DanceFestivalSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <VisitSection />
        <FAQSection />
        <MoreBlogSection />
      </main>

      <Footer />
    </>
  );
}
