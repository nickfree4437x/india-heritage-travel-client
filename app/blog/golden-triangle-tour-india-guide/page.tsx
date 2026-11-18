import type { Metadata } from "next";

// ============================================
// SEO METADATA
// ============================================
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// ============================================
// SEO COMPONENTS
// ============================================
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// ============================================
// COMMON COMPONENTS
// ============================================
import Footer from "@/src/sections/footer/Footer";

// ============================================
// PAGE SECTIONS
// ============================================
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import TopAttraction from "./sections/TopAttraction/TopAttraction";
import TopMoreAttraction from "./sections/TopAttraction/TopMoreAttraction";
import VisitSection from "./sections/time-to-visit/VisitSection";
import Itinerary from "./sections/travel-itinerary/Itinerary";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import Conclusion from "./sections/faq-conclusion/Conclusion";
import MoreBlog from "./sections/more-blogs/MoreBlogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function GoldenTriangleTourGuidePage() {
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
            name: "Golden Triangle Tour India",
            url: "https://indiaheritagetravel.com/blog/golden-triangle-tour-india-guide",
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

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Page Sections */}
      <HeroSection />
      <IntroSection />
      <TopAttraction />
      <TopMoreAttraction />
      <VisitSection />
      <Itinerary />
      <FAQSection />
      <Conclusion />
      <MoreBlog />
      <Footer />
    </main>
  );
}