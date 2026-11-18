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
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import WhyVisitSection from "./sections/hero-intro/IntroSection";
import OverviewSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import AttractionsSection from "./sections/major-attractions/AttractionsSection";
import SafariGuideSection from "./sections/history-archiecture/SafariGuideSection";
import WildlifeSection from "./sections/history-archiecture/WildlifeSection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import CulturalSection from "./sections/history-archiecture/SignificanceSection";
import AccommodationSection from "./sections/major-attractions/HeritageHotelsSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import HiddenGemsSection from "./sections/history-archiecture/HiddenGemsSection";
import FoodSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import TravelerTipsSection from "./sections/pratical-guide/TravelTipSection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
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
// CONSTANTS
// ============================================
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
    name: "Ranthambore Luxury Heritage and Wildlife",
    url: "https://indiaheritagetravel.com/blog/ranthambore-luxury-heritage-wildlife",
  },
];

// ============================================
// PAGE COMPONENT
// ============================================
export default function RanthamboreLuxuryHeritageWildlifePage() {
  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Script
        id="ranthambore-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="ranthambore-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />


      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <WhyVisitSection />
        <OverviewSection />
        <HistorySection />
        <AttractionsSection />
        <SafariGuideSection />
        <WildlifeSection />
        <ArchitectureSection />
        <CulturalSection />
        <AccommodationSection />
        <ExperiencesSection />
        <HiddenGemsSection />
        <FoodSection />
        <NearbyAttractionsSection />
        <TravelerTipsSection />
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