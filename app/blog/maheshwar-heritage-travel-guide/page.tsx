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
import IntroductionSection from "./sections/hero-intro/IntroSection";
import OverviewSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import CulturalSection from "./sections/history-archiecture/SignificanceSection";
import AttractionsSection from "./sections/major-attractions/AttractionsSection";
import HiddenGemsSection from "./sections/history-archiecture/HiddenGemsSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
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
import MoreBlogs from "./sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// SEO METADATA
// ============================================
export { metadata };

// ============================================
// PAGE COMPONENT
// ============================================
export default function MaheshwarHeritageTravelGuidePage() {
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
      name: "Maheshwar Heritage Travel Guide",
      url: "https://indiaheritagetravel.com/blog/maheshwar-heritage-travel-guide",
    },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Script
        id="maheshwar-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="maheshwar-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <Script
        id="maheshwar-organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroductionSection />
        <OverviewSection />
        <HistorySection />
        <ArchitectureSection />
        <CulturalSection />
        <AttractionsSection />
        <HiddenGemsSection />
        <ExperiencesSection />
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