import Footer from "@/src/components/sections/footer/Footer";
import TravelTipsContent from "@/src/home/travel-tips/TravelTipsContent";
import TravelTipsHero from "@/src/home/travel-tips/TravelTipsHero";

export default function TravelTipsPage() {
  return (
    <>
      <TravelTipsHero />
      <TravelTipsContent/>
      <Footer/>
    </>
  );
}