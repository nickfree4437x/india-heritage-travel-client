import type { Metadata } from "next";

import Footer from "@/src/components/sections/footer/Footer";
import TravelTipsContent from "./components/TravelTipsContent";
import TravelTipsHero from "./components/TravelTipsHero";

export const metadata: Metadata = {
  title: "India Travel Tips & Advice | Essential Travel Guide",
  description:
    "Discover practical travel tips, cultural insights, packing advice, and useful information for exploring India confidently.",
};

export default function TravelTipsPage() {
  return (
    <>
      <TravelTipsHero />
      <TravelTipsContent/>
      <Footer/>
    </>
  );
}