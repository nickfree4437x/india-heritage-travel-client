
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
import ArchitectureSection from "./sections/major-attractions/HeritageHotelsSection";
import CulturalSection from "./sections/history-archiecture/SignificanceSection";
import HeritageRetreatsSection from "./sections/history-archiecture/LuxuryHeritageSection";
import SariskaSection from "./sections/history-archiecture/SariskaSection";
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
    name: "Alwar Luxury Heritage Retreats",
    url: "https://indiaheritagetravel.com/blog/alwar-luxury-heritage-retreats",
  },
];

// ============================================
// PAGE COMPONENT
// ============================================
export default function AlwarLuxuryHeritageRetreatsPage() {
  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Script
        id="alwar-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="alwar-webpage-schema"
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
        <ArchitectureSection />
        <CulturalSection />
        <HeritageRetreatsSection />
        <SariskaSection />
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