import type { Metadata } from "next";

// SEO Metadata
import { metadata as pageMetadata } from "./seo/metadata";
import { articleSchema, webPageSchema } from "./seo/schema";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero-intro/HeroSection";
import FoodIntroSection from "./sections/hero-intro/FoodIntroSection";
import DishesSection from "./sections/dishes/DishesSection";
import TravelTipsSection from "./sections/travel-tips/TravelTipsSection";
import FinalThoughtsSection from "./sections/final-thoughts/FinalThoughtsSection";
import MoreFoodSection from "./sections/more-blogs/MoreFoodSection";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndiaFoodGuidePage() {
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
            name: "India Food Guide",
            url: "https://indiaheritagetravel.com/blog/india-food-guide",
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

      {/* Page Sections */}
      <HeroSection />
      <FoodIntroSection />
      <DishesSection />
      <TravelTipsSection />
      <FinalThoughtsSection />
      <MoreFoodSection />
      <Footer />
    </main>
  );
}