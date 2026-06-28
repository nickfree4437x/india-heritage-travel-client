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
import SlowTravelIntroSection from "./sections/solo-traveler/SoloTravelntroSection";
import WellnessSection from "./sections/wellness-section/WellnessSection";
import HiddenPlacesSection from "./sections/hidden-places/HiddenPlacesSection";
import PlanningSection from "./sections/planing-sections/PlanningSection";
import MoreBlogSection from "./sections/more-blogs/MoreBlogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function SoloTravelerPage() {
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
            name: "Solo Women Travel India",
            url: "https://indiaheritagetravel.com/blog/solo-traveler",
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
      <SlowTravelIntroSection />
      <WellnessSection />
      <HiddenPlacesSection />
      <PlanningSection />
      <MoreBlogSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}