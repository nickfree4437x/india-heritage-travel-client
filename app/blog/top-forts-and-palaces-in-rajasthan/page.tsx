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
import WhyPopularSection from "./sections/hero-intro/WhyPopularSection";
import TopFortsAndPalaces from "./sections/fort-section/TopfortSection";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import ConclusionSection from "./sections/faq-conclusion/Conclusion";
import MoreBlogSection from "../golden-triangle-tour-vs-rajasthan-tour/sections/more-blog/MoreBlog";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function TopFortsAndPalacesPage() {
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
            name: "Top Forts and Palaces in Rajasthan",
            url: "https://indiaheritagetravel.com/blog/top-forts-and-palaces-in-rajasthan",
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
      <WhyPopularSection />
      <TopFortsAndPalaces />
      <FAQSection />
      <ConclusionSection />
      <MoreBlogSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}