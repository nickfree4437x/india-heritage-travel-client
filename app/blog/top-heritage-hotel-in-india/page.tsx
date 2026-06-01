import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import HeritageHotelsSection from "./components/HeritageHotelsSection";
import MoreHeritageHotelsSection from "./components/MoreHeritageHotelsSection";
import FinalHeritageHotelsSection from "./components/FinalHeritageHotelsSection";
import HeritageHotelsConclusionSection from "./components/HeritageHotelsConclusionSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

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