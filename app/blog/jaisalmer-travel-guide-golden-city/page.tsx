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
import OverviewSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import FortSection from "./sections/history-archiecture/FortSection";
import HavelisSection from "./sections/history-archiecture/HavelisSection";
import GadisarLakeSection from "./sections/major-attractions/GadisarLakeSection";
import FoodShoppingSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import SamSandDunesSection from "./sections/best-experiences/SamSandDunesSection";
import BestExperiencesSection from "./sections/best-experiences/ExperiencesSection";
import LuxuryCampsSection from "./sections/best-experiences/LuxuryCampsSection";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import TravelerTipsSection from "./sections/pratical-guide/TravelTipSection";
import WhyChooseUsSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../jaipur-travel-tips/sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function JaisalmerTravelGuidePage() {
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
      name: "Jaisalmer Travel Guide: The Golden City",
      url: "https://indiaheritagetravel.com/blog/jaisalmer-travel-guide-golden-city",
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
        <OverviewSection />
        <HistorySection />
        <ArchitectureSection />
        <FortSection />
        <HavelisSection />
        <GadisarLakeSection />
        <SamSandDunesSection />
        <BestExperiencesSection />
        <FoodShoppingSection />
        <LuxuryCampsSection />
        <NearbyAttractionsSection />
        <ItinerarySection />
        <PracticalGuideSection />
        <TravelerTipsSection />
        <WhyChooseUsSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}