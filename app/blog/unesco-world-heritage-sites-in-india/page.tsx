import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

// SEO
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";

// Common
import Footer from "@/src/sections/footer/Footer";

// Sections
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSetion";
import TopHeritageHotelsPage from "./sections/heritage-site/TopHeritageSection";
import BestTimeSection from "./sections/heritage-site/BestTimeSection";
import AdviceTipsSection from "./sections/heritage-site/TravelTipsSection";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import MoreFoodSection from "../golden-triangle-tour-india-guide/sections/more-blogs/MoreBlogs";

export const metadata: Metadata =
  pageMetadata;

export default function UNESCOWorldHeritageSitesPage() {
  return (
    <main className="w-full bg-white">

      {/* Breadcrumb Schema */}
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
            name:
              "UNESCO World Heritage Sites in India",
            url:
              "https://indiaheritagetravel.com/blog/unesco-world-heritage-sites-in-india",
          },
        ]}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />

      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema
          ),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            organizationSchema
          ),
        }}
      />

      {/* FAQ Schema */}
      <FAQSchema />

      {/* Blog Sections */}
      <HeroSection />
      <IntroSection />
      <TopHeritageHotelsPage />
      <BestTimeSection />
      <AdviceTipsSection />
      <FAQSection />
      <MoreFoodSection />
      <Footer />

    </main>
  );
}