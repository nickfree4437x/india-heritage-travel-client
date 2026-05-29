import HeroSection from "./components/HeroSection";
import SummerPlacesContentSection from "./components/SummerPlacesContentSection";
import RishikeshSection from "./components/RishikeshSection";
import SpitiValleySection from "./components/SpitiValleySection";
import AndamanSection from "./components/AndamanSection";
import LehLadakhSection from "./components/LehLadakhSection";
import CoorgSection from "./components/CoorgSection";
import OotySection from "./components/OotySection";
import DarjeelingSection from "./components/DarjeelingSection";
import AuliSection from "./components/AuliSection";
import ShillongSection from "./components/ShillongSection";
import Moreblogs from "./components/Moreblogs";
import Footer from "@/src/components/sections/footer/Footer";

export default function BlogDetailsPage() {
  return (
    <main>
      <HeroSection />
      <SummerPlacesContentSection />
      <RishikeshSection />
      <SpitiValleySection />
      <AndamanSection />
      <LehLadakhSection />
      <CoorgSection />
      <OotySection />
      <DarjeelingSection />
      <AuliSection />
      <ShillongSection />
      <Moreblogs/>
      <Footer/>
    </main>
  );
}