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
import IntroductionSection from "./sections/hero-intro/IntroductionSection";
import WhyIndiaFestivals from "./sections/hero-intro/WhyIndiaFestivals";
import HistorySection from "./sections/festival-history/HistorySection";
import BestTimeSection from "./sections/festival-history/BestTimeSection";
import TopFestivalsSection from "./sections/festival-history/TopFestivalsSection";
import FestivalFoodSection from "./sections/festival-history/FestivalFoodSection";
import LuxuryTravelSection from "./sections/luxury-travel/LuxuryTravelSection";
import FamilyTravelSection from "./sections/luxury-travel/TravelTipsSection";
import PracticalGuideSection from "./sections/luxury-travel/PracticalGuideSection";
import ItinerarySection from "./sections/luxury-travel/ItinerarySection";
import WhyChooseSection from "../internet-sim-card-guide-india/sections/pricing-others/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../delhi-tour-guide/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function BestIndianFestivalsPage() {
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
      name: "Best Indian Festivals for Tourists",
      url: "https://indiaheritagetravel.com/blog/best-indian-festivals-for-tourists",
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
        <IntroductionSection />
        <WhyIndiaFestivals />
        <HistorySection />
        <BestTimeSection />
        <TopFestivalsSection />
        <FestivalFoodSection />
        <LuxuryTravelSection />
        <FamilyTravelSection />
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