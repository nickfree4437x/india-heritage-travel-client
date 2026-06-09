import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import SummerPlacesContentSection from "./sections/summer-paces/SummerPlacesContentSection";
import RishikeshSection from "./sections/cities/rishikesh/RishikeshSection";
import SpitiValleySection from "./sections/cities/spitivalley/SpitiValleySection";
import AndamanSection from "./sections/cities/andaman/AndamanSection";
import LehLadakhSection from "./sections/cities/leh-ladakh/LehLadakhSection";
import CoorgSection from "./sections/cities/coorg/CoorgSection";
import OotySection from "./sections/cities/ooty/OotySection";
import DarjeelingSection from "./sections/cities/darjeeling/DarjeelingSection";
import AuliSection from "./sections/cities/auli/AuliSection";
import ShillongSection from "./sections/cities/shilong/ShillongSection";
import Moreblogs from "./sections/more-blogs/Moreblogs";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Best Places to Visit in India | Top Travel Destinations & Experiences",
  description:
    "Discover the best places to visit in India, from scenic mountains and cultural landmarks to heritage cities, beaches, and unforgettable travel experiences.",
};

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