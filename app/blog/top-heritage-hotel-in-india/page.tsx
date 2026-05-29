import HeroSection from "./components/HeroSection";
import HeritageHotelsSection from "./components/HeritageHotelsSection";
import MoreHeritageHotelsSection from "./components/MoreHeritageHotelsSection";
import FinalHeritageHotelsSection from "./components/FinalHeritageHotelsSection";
import HeritageHotelsConclusionSection from "./components/HeritageHotelsConclusionSection";
import Moreblogs from "./components/MoreBlogs";
import Footer from "@/src/components/sections/footer/Footer";

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