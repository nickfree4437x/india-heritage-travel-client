import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import HeritageHotelsSection from "./sections/heritage-hotel/HeritageHotelsSection";
import MoreHeritageHotelsSection from "./sections/more-heritage-hotel/MoreHeritageHotelsSection";
import FinalHeritageHotelsSection from "./sections/final-heritage/FinalHeritageHotelsSection";
import HeritageHotelsConclusionSection from "./sections/heritage-hotel-conclusion/HeritageHotelsConclusionSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Best Heritage Hotels in India | Luxury Palace Stays & Royal Experiences",
  description:
    "Discover India's most iconic heritage hotels featuring royal palaces, luxury accommodations, cultural experiences, historic architecture, and unforgettable hospitality.",
};

export default function BlogDetailsPage() {
  return (
    <main>
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