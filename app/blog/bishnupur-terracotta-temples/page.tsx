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
import WhyVisitSection from "./sections/hero-intro/IntroSection";
import AtAGlanceSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import AttractionsSection from "./sections/major-attractions/AccommodationSection";
import ArchitectureSection from "./sections/history-archiecture/ArchitectureSection";
import CraftMusicSection from "./sections/history-archiecture/CraftMusicSection";
import CulturalSignificanceSection from "./sections/history-archiecture/SignificanceSection";
import WhereToStaySection from "./sections/major-attractions/AccommodationSection";
import BestExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import HiddenGemsSection from "./sections/history-archiecture/HiddenGemsSection";
import FoodSection from "./sections/major-attractions/FoodSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import TravellerTipsSection from "./sections/pratical-guide/TravelTipSection";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import SuggestedItinerariesSection from "./sections/pratical-guide/ItinerarySection";
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
    name: "Bishnupur Terracotta Temples",
    url: "https://indiaheritagetravel.com/blog/bishnupur-terracotta-temples",
  },
];

// ============================================
// PAGE COMPONENT
// ============================================
export default function BishnupurTerracottaTemplesPage() {
  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />

      <Script
        id="bishnupur-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="bishnupur-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <Script
        id="bishnupur-organization-schema"
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
        <WhyVisitSection />
        <AtAGlanceSection />
        <HistorySection />
        <AttractionsSection />
        <ArchitectureSection />
        <CraftMusicSection />
        <CulturalSignificanceSection />
        <WhereToStaySection />
        <BestExperiencesSection />
        <HiddenGemsSection />
        <FoodSection />
        <NearbyAttractionsSection />
        <TravellerTipsSection />
        <PracticalGuideSection />
        <SuggestedItinerariesSection />
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