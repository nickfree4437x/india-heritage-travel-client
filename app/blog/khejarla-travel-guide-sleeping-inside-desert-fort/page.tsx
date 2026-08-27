import type { Metadata } from "next";
import Script from "next/script";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-section/FaqSchema";

// ============================================
// SEO METADATA
// ============================================
import { metadata } from "./seo/metadata";
import khejarlaTravelGuideSchema from "./seo/schema";

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
import FoodSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import LuxuryTravelTipsSection from "./sections/pratical-guide/TravelTipSection";
import WhyChooseSection from "./sections/pratical-guide/WhyTravelSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../bikaner-travel-guide/sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// SEO METADATA
// ============================================
export { metadata };

// ============================================
// PAGE COMPONENT
// ============================================
export default function KhejarlaTravelGuidePage() {
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
      name: "Khejarla Travel Guide",
      url: "https://indiaheritagetravel.com/blog/khejarla-travel-guide-sleeping-inside-desert-fort",
    },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema />

      {/* Article Schema - JSON-LD */}
      <Script
        id="khejarla-travel-guide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(khejarlaTravelGuideSchema),
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
        <FoodSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <ItinerarySection />
        <LuxuryTravelTipsSection />
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