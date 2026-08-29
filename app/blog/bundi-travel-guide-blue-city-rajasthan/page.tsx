import type { Metadata } from "next";
import Script from "next/script";

// ============================================
// SEO METADATA
// ============================================
import { metadata } from "./seo/metadata";
import { bundiTravelGuideSchema } from "./seo/schema";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import OverviewSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import CulturalSignificanceSection from "./sections/history-archiecture/SignificanceSection";
import MajorAttractionsSection from "./sections/major-attractions/AttractionsSection";
import HiddenGemsSection from "./sections/history-archiecture/HiddenGemsSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import FoodSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import TravelerTipsSection from "./sections/pratical-guide/TravelTipSection";
import WhyChooseSection from "./sections/pratical-guide/WhyTravelSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../rohet-travel-guide/sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// CONSTANTS
// ============================================
const BLOG_URL =
  "https://indiaheritagetravel.com/blog/bundi-travel-guide-blue-city-rajasthan";

// ============================================
// SEO METADATA
// ============================================
export { metadata };

// ============================================
// PAGE COMPONENT
// ============================================
export default function BundiTravelGuidePage() {
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
      name: "Bundi Travel Guide",
      url: BLOG_URL,
    },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema />

      {/* Article Schema - JSON-LD */}
      <Script
        id="bundi-travel-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bundiTravelGuideSchema),
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
        <CulturalSignificanceSection />
        <MajorAttractionsSection />
        <HiddenGemsSection />
        <ExperiencesSection />
        <FoodSection />
        <NearbyAttractionsSection />
        <ItinerarySection />
        <PracticalGuideSection />
        <TravelerTipsSection />
        <WhyChooseSection />
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}