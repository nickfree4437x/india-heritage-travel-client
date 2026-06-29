import type { Metadata } from "next";

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
  organizationSchema,
} from "./seo/schema";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import HeroSection from "./sections/hero/HeroSection";
import HeritageHotelsSection from "./sections/heritage-hotel/HeritageHotelsSection";
import MoreHeritageHotelsSection from "./sections/more-heritage-hotel/MoreHeritageHotelsSection";
import FinalHeritageHotelsSection from "./sections/final-heritage/FinalHeritageHotelsSection";
import HeritageHotelsConclusionSection from "./sections/heritage-hotel-conclusion/HeritageHotelsConclusionSection";

import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata =
  pageMetadata;

export default function BlogDetailsPage() {
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
            name: "Best Heritage Hotels in India",
            url:
              "https://indiaheritagetravel.com/blog/top-heritage-hotel-in-india",
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
      
      {/* Page Section */}
      <HeroSection />
      <HeritageHotelsSection />
      <MoreHeritageHotelsSection />
      <FinalHeritageHotelsSection />
      <HeritageHotelsConclusionSection />
      <Moreblogs />
      <Footer />

    </main>
  );
}