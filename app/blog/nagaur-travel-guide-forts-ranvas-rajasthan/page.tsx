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
import RanvasSection from "./sections/history-archiecture/RanvasSection";
import CulturalHeritageSection from "./sections/history-archiecture/CulturalHeritageSection";
import MajorAttractionsSection from "./sections/major-attractions/AttractionsSection";
import CattleFairSection from "./sections/major-attractions/CattleFairSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
import NearbyAttractionsSection from "./sections/major-attractions/NearbyAttractions";
import PracticalGuideSection from "./sections/pratical-guide/PracticalGuideSection";
import ItinerarySection from "./sections/pratical-guide/ItinerarySection";
import TravelTipsSection from "./sections/pratical-guide/TravelTipSection";
import WhyChooseSection from "./sections/pratical-guide/WhyTravelSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "./sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function NagaurTravelGuidePage() {
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
      name: "Nagaur Travel Guide",
      url: "https://indiaheritagetravel.com/blog/nagaur-travel-guide-forts-ranvas-rajasthan",
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
        <RanvasSection />
        <CulturalHeritageSection />
        <MajorAttractionsSection />
        <CattleFairSection />
        <ExperiencesSection />
        <NearbyAttractionsSection />
        <PracticalGuideSection />
        <ItinerarySection />
        <TravelTipsSection />
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