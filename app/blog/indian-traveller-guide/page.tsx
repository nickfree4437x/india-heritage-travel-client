import type { Metadata } from "next";

// SEO Metadata
import { metadata as pageMetadata } from "./seo/metadata";
import { articleSchema, organizationSchema, webPageSchema } from "./seo/schema";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import TravelBasicsSection from "./sections/travel-basics/TravelBasicsSection";
import SafetyAndMoneySection from "./sections/safety-and-money/SafetyAndMoneySection";
import FinalTravelTipsSection from "./sections/travel-tips/FinalTravelTipsSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function IndianTravelerGuidePage() {
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
            name: "First-Time Travel Guide to India",
            url: "https://indiaheritagetravel.com/blog/indian-traveller-guide",
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

      {/* Page Sections */}
      <HeroSection />
      <TravelBasicsSection />
      <SafetyAndMoneySection />
      <FinalTravelTipsSection />
      <Moreblogs />

      {/* Footer */}
      <Footer />
    </main>
  );
}