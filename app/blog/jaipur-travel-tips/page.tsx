import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import JaipurGuideIntroSection from "./sections/jaipur-guide/JaipurGuideIntroSection";
import DayOneJaipurSection from "./sections/day-one/DayOneJaipurSection";
import JaipurDayTwoSection from "./sections/day-two/JaipurDayTwoSection";
import JaipurDayTwoExtraSection from "./sections/day-two-extra/JaipurDayTwoExtraSection";
import JaipurDayThreeSection from "./sections/day-three/JaipurDayThreeSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Jaipur Travel Guide | Best Places to Visit, Tips & 3-Day Itinerary",

  description:
    "Explore Jaipur's forts, palaces, local markets, cultural landmarks, food experiences, and essential travel tips with this complete first-time visitor's guide.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779822612/blog-11_payr6l.jpg",

  author: {
    "@type": "Organization",

    name: "India Heritage Travel",
  },

  publisher: {
    "@type": "Organization",

    name: "India Heritage Travel",

    logo: {
      "@type": "ImageObject",

      url:
        "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779742948/logo2_yhlwmt.png",
    },
  },

  mainEntityOfPage: {
    "@type": "WebPage",

    "@id":
      "https://indiaheritagetravel.com/blog/jaipur-travel-tips",
  },
};

export const metadata: Metadata = {
  title: "Jaipur Travel Guide | Best Places to Visit, Tips & 3-Day Itinerary",
  description:
    "Explore Jaipur's forts, palaces, local markets, cultural landmarks, food experiences, and essential travel tips with this complete first-time visitor's guide. : indiaheritagetravel.com/blog/jaipur-travel-tips",
  alternates: {
    canonical: "/blog/jaipur-travel-tips",
  },
};

export default function BlogDetailsPage() {
  return (
    <main>

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
            name: "Jaipur Travel Tips",
            url: "https://indiaheritagetravel.com/blog/jaipur-travel-tips",
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema
          ),
        }}
      />
      
      <HeroSection />
      <JaipurGuideIntroSection />
      <DayOneJaipurSection />
      <JaipurDayTwoSection />
      <JaipurDayTwoExtraSection />
      <JaipurDayThreeSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}