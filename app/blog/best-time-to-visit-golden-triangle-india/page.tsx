import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import WeatherOverview from "./sections/weather-overview/WeatherOverview";
import WinterSeason from "./sections/weather-overview/WinterSeason";
import SummerSeason from "./sections/summer-mansoon/SummerSeason";
import MonsoonSeason from "./sections/summer-mansoon/MonsoonSeason";
import FestivalsSection from "./sections/festivals/FestivalsSection";
import FaqSection from "./sections/faq-conclusion/FAQSection";
import Conclusion from "./sections/faq-conclusion/Conclusion";
import Moreblog from "../indian-traveller-guide/sections/more-blogs/MoreBlogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function BestTimeToVisitGoldenTrianglePage() {
  return (
    <main className="w-full bg-white">
      {/* Breadcrumb Schema - SEO */}
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://indiaheritagetravel.com",
          },
          {
            name: "Blog",
            url: "https://indiaheritagetravel.com/blog",
          },
          {
            name: "Best Time to Visit the Golden Triangle India",
            url: "https://indiaheritagetravel.com/blog/best-time-to-visit-golden-triangle-india",
          },
        ]}
      />

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

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Page Sections */}
      <HeroSection />
      <IntroSection />
      <WeatherOverview />
      <WinterSeason />
      <SummerSeason />
      <MonsoonSeason />
      <FestivalsSection />
      <FaqSection />
      <Conclusion />
      <Moreblog />
      <Footer />
    </main>
  );
}