import type { Metadata } from "next";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

// Common components
import Footer from "@/src/sections/footer/Footer";

// Page sections
import HeroSection from "./sections/hero/HeroSection";
import IntroSection from "./sections/intro/IntroSection";
import TopAttraction from "./sections/TopAttraction/TopAttraction";
import TopMoreAttraction from "./sections/TopAttraction/TopMoreAttraction";
import HiddenGems from "./sections/HiddenGems/HiddenGems";
import VisitSection from "./sections/time-to-visit/VisitSection";
import Itinerary from "./sections/travel-itinerary/Itinerary";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";
import FAQSection from "./sections/faq-conclusion/FaqSection";
import Conclusion from "./sections/faq-conclusion/Conclusion";
import MoreBlog from "./sections/more-blogs/MoreBlogs";

// ============================================
// ARTICLE SCHEMA (JSON-LD)
// ============================================
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Golden Triangle Tour India: Your Ultimate 2026 Guide for First-Timers",
  description:
    "Are you planning a Golden Triangle tour India? Find out all about the itinerary, cost, ideal timing, and more by a luxury India travel expert.",
  image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-golden-triangle.jpg",
  author: {
    "@type": "Organization",
    name: "India Heritage Travel",
  },
  publisher: {
    "@type": "Organization",
    name: "India Heritage Travel",
    logo: {
      "@type": "ImageObject",
      url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://indiaheritagetravel.com/blog/golden-triangle-tour-india-guide",
  },
};

// ============================================
// SEO METADATA
// ============================================
export const metadata: Metadata = {
  title: "Golden Triangle Tour India: Your Ultimate 2026 Guide for First-Timers",
  description:
    "Are you planning a Golden Triangle tour India? Find out all about the itinerary, cost, ideal timing, and more by a luxury India travel expert.",
  alternates: {
    canonical: "/blog/golden-triangle-tour-india-guide",
  },
  openGraph: {
    title: "Golden Triangle Tour India: Your Ultimate 2026 Guide for First-Timers",
    description:
      "Are you planning a Golden Triangle tour India? Find out all about the itinerary, cost, ideal timing, and more by a luxury India travel expert.",
    url: "https://indiaheritagetravel.com/blog/golden-triangle-tour-india-guide",
    siteName: "India Heritage Travel",
    images: [
      {
        url: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-golden-triangle.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Triangle Tour India",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Triangle Tour India: Your Ultimate 2026 Guide for First-Timers",
    description:
      "Are you planning a Golden Triangle tour India? Find out all about the itinerary, cost, ideal timing, and more by a luxury India travel expert.",
    images: ["https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779828252/blog-golden-triangle.jpg"],
  },
};

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
            name: "Golden Triangle Tour India Guide",
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

      {/* FAQ Schema - JSON-LD */}
      <FAQSchema />

      {/* Blog Content Sections */}
      <HeroSection />
      <IntroSection />
      <TopAttraction />
      <TopMoreAttraction />
      <HiddenGems />
      <VisitSection />
      <Itinerary />
      <FAQSection />
      <Conclusion />
      <MoreBlog/>
      <Footer />
    </main>
  );
}