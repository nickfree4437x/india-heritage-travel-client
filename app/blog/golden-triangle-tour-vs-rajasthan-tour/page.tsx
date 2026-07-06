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
import QuickAnswer from "./sections/hero-intro/QuickAnswer";
import GoldenTriangleSection from "./sections/golden-triangle/GoldenTriangle";
import RajasthanTourSection from "./sections/Rajasthan-tour/RajasthanSection";
import CityBreakdown from "./sections/comparison/CityComparison";
import ExperiencesCompared from "./sections/comparison/Experiences-compared";
import SignatureExpericnces from "./sections/comparison/Signature-experiences";
import BughetSection from "./sections/golden-triangle/BughetSection";
import VisitSection from "./sections/Rajasthan-tour/VisitSection";
import FAQSection from "./sections/faq-conclusion/FAQSection";
import MoreBlog from "./sections/more-blog/MoreBlog";

// ============================================
// PAGE METADATA
// ============================================
export const metadata: Metadata = pageMetadata;

// ============================================
// PAGE COMPONENT
// ============================================
export default function GoldenTriangleVsRajasthanPage() {
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
            name: "Golden Triangle Tour vs Rajasthan Tour",
            url: "https://indiaheritagetravel.com/blog/golden-triangle-tour-vs-rajasthan-tour",
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

      {/* Blog Sections */}
      <HeroSection />
      <QuickAnswer />
      <GoldenTriangleSection />
      <RajasthanTourSection />
      <CityBreakdown />
      <ExperiencesCompared />
      <SignatureExpericnces />
      <BughetSection />
      <VisitSection />
      <FAQSection />
      <MoreBlog />

      {/* Footer */}
      <Footer />
    </main>
  );
}