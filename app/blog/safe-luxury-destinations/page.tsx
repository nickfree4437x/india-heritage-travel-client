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
import SafetyIntroSection from "./sections/safety-intro/SafetyIntroSection";
import DestinationsSection from "./sections/destination/DestinationsSection";
import MoreDestinationsSection from "./sections/more-destinations/MoreDestinationsSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function SafeLuxuryDestinationsPage() {
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
            name: "Safe Luxury Destinations in India",
            url: "https://indiaheritagetravel.com/blog/safe-luxury-destinations",
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
      <SafetyIntroSection />
      <DestinationsSection />
      <MoreDestinationsSection />
      <Moreblogs />

      {/* Footer */}
      <Footer />
    </main>
  );
}