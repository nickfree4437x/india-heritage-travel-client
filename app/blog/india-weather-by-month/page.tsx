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
import FourSeasonsSection from "./sections/hero-intro/FourSeasonsSection";
import WeatherTableSection from "./sections/india-weather/WeatherTableSection";
import MonthlyWeatherSection from "./sections/india-weather/MonthlyWeatherSection";
import RegionalClimateSection from "./sections/india-weather/RegionalClimateSection";
import PackingSection from "./sections/india-weather/PackingSection";
import FestivalCalendarSection from "./sections/festival-calendar/FestivalCalendarSection";
import LuxuryTravelSection from "../how-to-plan-a-trip-to-india/sections/travel-section/TravelTipSection";
import WhyChooseSection from "../is-india-safe-for-female-travellers/sections/practical-guide/WhyChooseSection";
import FAQSection from "./sections/faq-section/FaqSection";

// ============================================
// COMMON COMPONENTS
// ============================================
import MoreBlogs from "./sections/festival-calendar/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndiaWeatherByMonthPage() {
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
      name: "India Weather by Month",
      url: "https://indiaheritagetravel.com/blog/india-weather-by-month",
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
        <FourSeasonsSection />
        <WeatherTableSection />
        <MonthlyWeatherSection />
        <RegionalClimateSection />
        <PackingSection />
        <FestivalCalendarSection />
        <div className="mt-6">
          <LuxuryTravelSection />
        </div>
        <div className="-mt-2 md:mt-0">
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