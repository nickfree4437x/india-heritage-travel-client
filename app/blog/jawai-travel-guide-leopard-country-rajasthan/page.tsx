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
import JawaiTravelGuideSchema from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import OverviewSection from "./sections/hero-intro/OverviewSection";
import HistorySection from "./sections/history-archiecture/HistorySection";
import RabariCultureSection from "./sections/history-archiecture/RabariCultureSection";
import WildlifeSafariSection from "./sections/history-archiecture/WildlifeSafariSection";
import MajorAttractionsSection from "./sections/major-attractions/AttractionsSection";
import ExperiencesSection from "./sections/major-attractions/ExperiencesSection";
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
import MoreBlogs from "../nagaur-travel-guide-forts-ranvas-rajasthan/sections/faq-section/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function JawaiTravelGuidePage() {
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
      name: "Jawai Travel Guide",
      url: "https://indiaheritagetravel.com/blog/jawai-travel-guide-leopard-country-rajasthan",
    },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(JawaiTravelGuideSchema),
        }}
        />
      <FAQSchema />

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroSection />
        <OverviewSection />
        <HistorySection />
        <RabariCultureSection />
        <WildlifeSafariSection />
        <MajorAttractionsSection />
        <ExperiencesSection />
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