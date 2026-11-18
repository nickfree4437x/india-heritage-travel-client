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
import BestDestinationSection from "./sections/hero-intro/BestDestination";
import WhatMakesGreatSection from "./sections/hero-intro/WhatMakesGreatSection";
import RajasthanSection from "./sections/best-destinations/RajasthanSection";
import KeralaSection from "./sections/best-destinations/KeralaSection";
import RishikeshSection from "./sections/best-destinations/RishikeshSection";
import GoaSection from "./sections/best-destinations/GoaSection";
import HillStationsSection from "./sections/best-destinations/HillStationsSection";
import GoldenTriangleSection from "./sections/hidden-gems/GoldenTriangleSection";
import HiddenGemsSection from "./sections/hidden-gems/HiddenGemsSection";
import TravelTipsSection from "./sections/hidden-gems/TravelTipsSection";
import PracticalGuideSection from "./sections/practical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/practical-guide/ItinerarySection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";
import MoreBlogs from "./sections/practical-guide/MoreBlogSection";

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
export default function BestDestinationsWomenTravellersPage() {
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
      name: "Best Destinations for Women Travellers in India",
      url: "https://indiaheritagetravel.com/blog/best-destinations-for-women-travellers-india",
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
        <BestDestinationSection />
        <WhatMakesGreatSection />
        <RajasthanSection />
        <KeralaSection />
        <RishikeshSection />
        <GoaSection />
        <HillStationsSection />
        <GoldenTriangleSection />
        <HiddenGemsSection />
        <TravelTipsSection />
        <PracticalGuideSection />
        <ItinerarySection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}