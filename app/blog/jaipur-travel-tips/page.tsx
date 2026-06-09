import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import JaipurGuideIntroSection from "./sections/jaipur-guide/JaipurGuideIntroSection";
import DayOneJaipurSection from "./sections/day-one/DayOneJaipurSection";
import JaipurDayTwoSection from "./sections/day-two/JaipurDayTwoSection";
import JaipurDayTwoExtraSection from "./sections/day-two-extra/JaipurDayTwoExtraSection";
import JaipurDayThreeSection from "./sections/day-three/JaipurDayThreeSection";
import Moreblogs from "./sections/more-blogs/MoreBlogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Jaipur Travel Guide | Best Places to Visit, Tips & 3-Day Itinerary",
  description:
    "Explore Jaipur's forts, palaces, local markets, cultural landmarks, food experiences, and essential travel tips with this complete first-time visitor's guide. : indiaheritagetravel.com/blog/jaipur-travel-tips",
};

export default function BlogDetailsPage() {
  return (
    <main>
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