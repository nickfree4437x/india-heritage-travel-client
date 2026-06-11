import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import HeritageHotelsSection from "./sections/heritage-hotel/HeritageHotelsSection";
import MoreHeritageHotelsSection from "./sections/more-heritage-hotel/MoreHeritageHotelsSection";
import FinalHeritageHotelsSection from "./sections/final-heritage/FinalHeritageHotelsSection";
import HeritageHotelsConclusionSection from "./sections/heritage-hotel-conclusion/HeritageHotelsConclusionSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";
import BreadcrumbSchema from "@/src/common/seo/BreadcrumbSchema";

const articleSchema = {
  "@context": "https://schema.org",

  "@type": "Article",

  headline:
    "Best Heritage Hotels in India | Luxury Palace Stays & Royal Experiences",

  description:
    "Discover India's most iconic heritage hotels featuring royal palaces, luxury accommodations, cultural experiences, historic architecture, and unforgettable hospitality.",

  image:
    "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779638017/blog-9_h4aqqf.jpg",

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
      "https://indiaheritagetravel.com/blog/top-heritage-hotel-in-india",
  },
};

export const metadata: Metadata = {
  title: "Best Heritage Hotels in India | Luxury Palace Stays & Royal Experiences",
  description:
    "Discover India's most iconic heritage hotels featuring royal palaces, luxury accommodations, cultural experiences, historic architecture, and unforgettable hospitality.",
  alternates: {
    canonical: "/blog/top-heritage-hotel-in-india",
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
            name: "Top Heritage Hotels in India | Luxury Palace Stays & Royal Experiences",
            url: "https://indiaheritagetravel.com/blog/top-heritage-hotel-in-india",
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
      <HeritageHotelsSection />
      <MoreHeritageHotelsSection />
      <FinalHeritageHotelsSection />
      <HeritageHotelsConclusionSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}