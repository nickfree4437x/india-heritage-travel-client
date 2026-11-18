import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
export { metadata } from "./seo/metadata";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// SEO SCHEMAS
// ============================================
import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import QuickFactsSection from "./sections/hero-intro/QuickFactsSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import MajorAttractionsSection from "./sections/major-attractions/AttractionsSection";
import BestExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import FoodSection from "./sections/major-attractions/FoodSection";
import ShoppingSection from "./sections/major-attractions/ShoppingSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import TravelerTipsSection from "./sections/pratical-guide/TravelTipSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "./sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function BikanerTravelGuidePage() {
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
      name: "Bikaner Travel Guide",
      url: "https://indiaheritagetravel.com/blog/bikaner-travel-guide",
    },
  ];

  return (
    <>
      {/* SEO Structured Data */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema />

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

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroSection />
        <QuickFactsSection />
        <HistorySection />
        <ArchitectureSection />
        <MajorAttractionsSection />
        <BestExperiencesSection />
        <FoodSection />
        <ShoppingSection />
        <NearbyAttractionsSection />
        <ItinerarySection />
        <PracticalGuideSection />
        <TravelerTipsSection />
        <div className="md:-mt-3 -mt-5">
          <WhyChooseSection />
        </div>
        <FAQSection />
      </main>

      {/* More Blogs */}
      <MoreBlogs />

      {/* Footer */}
      <Footer />
    </>
  );
}