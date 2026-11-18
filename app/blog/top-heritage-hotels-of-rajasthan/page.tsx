import type { Metadata } from "next";

// Metadata & Schemas
import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

// SEO Components
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";
import FAQSchema from "./sections/faq-conclusion/FAQSchema";

// Common Components
import Footer from "@/src/sections/footer/Footer";

// Sections
import HeroSection from "./sections/hero-intro/HeroSection";
import IntroSection from "./sections/hero-intro/IntroSection";
import TopHeritageHotels from "./sections/hotels/TopHotelsSection";
import ChoosingHotelSection from "./sections/heritage-guide/ChoosingHotelSection";
import BestTimeSection from "./sections/travel-guide/BestTimeSection";
import WhyChooseIHTSection from "./sections/travel-guide/WhyChooseIHTSection";
import FAQSection from "./sections/faq-conclusion/FAQSection";
import MoreBlogSection from "../golden-triangle-tour-vs-rajasthan-tour/sections/more-blog/MoreBlog";

export const metadata: Metadata =
  pageMetadata;

export default function TopHeritageHotelsPage() {
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
            name: "Top Heritage Hotels of Rajasthan",
            url:
              "https://indiaheritagetravel.com/blog/top-heritage-hotels-of-rajasthan",
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


      {/* FAQ Schema */}
      <FAQSchema />

      {/* Blog Sections */}
      <HeroSection />
      <IntroSection />
      <TopHeritageHotels />
      <ChoosingHotelSection />
      <BestTimeSection />
      <WhyChooseIHTSection />
      <FAQSection />
      <MoreBlogSection />
      <Footer />
    </main>
  );
}