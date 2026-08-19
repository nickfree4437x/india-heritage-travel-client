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
  organizationSchema,
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import LakeGhatsSection from "./sections/history-archiecture/LakeGhatsSection";
import MajorAttractionsSection from "./sections/major-attractions/AttractionsSection";
import HiddenGemsSection from "./sections/history-archiecture/HiddenGemsSection";
import BestExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import CamelFairSection from "./sections/major-attractions/CamelFairSection";
import FoodSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import LuxuryTravelTipsSection from "./sections/pratical-guide/TravelTipSection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import WhyChooseSection from "./sections/pratical-guide/WhyTravelSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../bikaner-travel-guide/sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function PushkarTravelGuidePage() {
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
      name: "Pushkar Travel Guide: The Sacred Lake City",
      url: "https://indiaheritagetravel.com/blog/pushkar-travel-guide-sacred-lake-city",
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

      {/* Organization Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroSection />
        <HistorySection />
        <ArchitectureSection />
        <LakeGhatsSection />
        <MajorAttractionsSection />
        <HiddenGemsSection />
        <BestExperiencesSection />
        <CamelFairSection />
        <FoodSection />
        <NearbyAttractionsSection />
        <LuxuryTravelTipsSection />
        <PracticalGuideSection />
        <ItinerarySection />
        <WhyChooseSection />
        <FAQSection />
      </main>

      {/* More Blogs */}
      <MoreBlogs />

      {/* Footer */}
      <Footer />
    </>
  );
}