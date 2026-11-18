import type { Metadata } from "next";

import { metadata as pageMetadata } from "./seo/metadata";

import {
  articleSchema,
  webPageSchema,
} from "./seo/schema";

import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

import HeroSection from "./sections/hero/HeroSection";
import JaipurGuideIntroSection from "./sections/jaipur-guide/JaipurGuideIntroSection";
import DayOneJaipurSection from "./sections/day-one/DayOneJaipurSection";
import JaipurDayTwoSection from "./sections/day-two/JaipurDayTwoSection";
import JaipurDayTwoExtraSection from "./sections/day-two-extra/JaipurDayTwoExtraSection";
import JaipurDayThreeSection from "./sections/day-three/JaipurDayThreeSection";

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
            name: "Jaipur Travel Guide",
            url:
              "https://indiaheritagetravel.com/blog/jaipur-travel-tips",
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


      {/* Page Section */}
      <HeroSection />
      <JaipurGuideIntroSection />
      <DayOneJaipurSection />
      <JaipurDayTwoSection />
      <JaipurDayTwoExtraSection />
      <JaipurDayThreeSection />
      <Moreblogs />
      <Footer />

    </main>
  );
}