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
import FAQSchema from "../best-destinations-for-women-travellers-india/sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import WomenLuxurySection from "./sections/hero-intro/WomenLuxurySection";
import WhyWomenChooseSection from "./sections/hero-intro/WhyWomenChooseSection";
import WhatMakesLuxurySection from "./sections/luxury-destinations/WhatMakesLuxurySection";
import LuxuryDestinationsSection from "./sections/luxury-destinations/LuxuryDestinationsSection";
import ItinerarySection from "./sections/luxury-destinations/itinerary";
import PraticalGuide from "./sections/pratical-guide/PraticalGuideSection";
import PackingTipsSection from "./sections/pratical-guide/PackingTipsSection";
import PhotographyTipsSection from "./sections/pratical-guide/TravelTipsSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "../best-destinations-for-women-travellers-india/sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../best-destinations-for-women-travellers-india/sections/practical-guide/MoreBlogSection";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function WomensLuxuryToursIndiaPage() {
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
      name: "Women's Luxury Tours in India",
      url: "https://indiaheritagetravel.com/blog/womens-luxury-tours-in-india",
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
        <WomenLuxurySection />
        <WhyWomenChooseSection />
        <WhatMakesLuxurySection />
        <LuxuryDestinationsSection />
        <ItinerarySection />
        <PraticalGuide />
        <PackingTipsSection />
        <PhotographyTipsSection />
        <div className="-mt-3 md:mt-0">
          <WhyChooseSection />
        </div>
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}