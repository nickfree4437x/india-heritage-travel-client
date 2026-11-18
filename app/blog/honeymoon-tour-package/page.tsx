import type { Metadata } from "next";

// SEO Metadata
import { metadata as pageMetadata } from "./seo/metadata";
import {
  articleSchema,
  webPageSchema,
  faqSchema,
} from "./seo/schema";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import HoneymoonContentSection from "./sections/content/HoneymoonContentSection";
import RomanticEscapesSection from "./sections/romantic-escapes/RomanticEscapesSection";
import HoneymoonFinalSection from "./sections/final-content/HoneymoonFinalSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function BlogDetailsPage() {
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
            name: "Best Honeymoon Tour Packages in India",
            url: "https://indiaheritagetravel.com/blog/honeymoon-tour-package",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Page Sections */}
      <HeroSection />
      <HoneymoonContentSection />
      <RomanticEscapesSection />
      <HoneymoonFinalSection />
      <Moreblogs />

      {/* Footer */}
      <Footer />
    </main>
  );
}