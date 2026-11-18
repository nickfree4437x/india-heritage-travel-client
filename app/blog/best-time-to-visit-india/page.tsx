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
} from "./seo/schema";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import SeasonsSection from "./sections/hero-intro/SeasonsSection";
import RegionalGuideSection from "./sections/best-time/RegionalGuideSection";
import MonthlyWeatherSection from "./sections/best-time/MonthlyWeatherSection";
import TravelStyleSection from "./sections/best-time/TravelStyleSection";
import FestivalCalendarSection from "./sections/best-time/FestivalCalendarSection";
import PackingSection from "./sections/season-guide/PackingSection";
import SeasonalItinerariesSection from "./sections/season-guide/ItinerariesSection";
import PracticalGuideSection from "./sections/season-guide/PracticalGuideSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "../india-weather-by-month/sections/festival-calendar/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function BestTimeToVisitIndiaPage() {
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
      name: "Best Time to Visit India",
      url: "https://indiaheritagetravel.com/blog/best-time-to-visit-india",
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

      {/* Hero */}
      <HeroSection />

      {/* Main Blog Content */}
      <main>
        <IntroSection />
        <SeasonsSection />
        <RegionalGuideSection />
        <MonthlyWeatherSection />
        <TravelStyleSection />
        <FestivalCalendarSection />
        <PackingSection />
        <SeasonalItinerariesSection />
        <PracticalGuideSection />
        <div className="-mt-3">
          <WhyChooseSection />
        </div>
        <FAQSection />
        <MoreBlogs />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}