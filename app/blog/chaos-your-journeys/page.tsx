import type { Metadata } from "next";

// SEO Metadata
import { metadata as pageMetadata } from "./seo/metadata";
import { articleSchema, webPageSchema } from "./seo/schema";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import BlogContentSection from "./sections/content/BlogContentSection";
import BlogExtraContentSection from "./sections/extra-content/BlogExtraContentSection";
import BlogFinalSection from "./sections/final-content/BlogFinalSection";
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
            name: "How the Right India Travel Agency Can Transform Your Journey",
            url: "https://indiaheritagetravel.com/blog/chaos-your-journeys",
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
      <BlogContentSection />
      <BlogExtraContentSection />
      <BlogFinalSection />
      <Moreblogs />

      {/* Footer */}
      <Footer />
    </main>
  );
}