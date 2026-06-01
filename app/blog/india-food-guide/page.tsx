// app/blogs/india-food-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import FoodIntroSection from "./components/FoodIntroSection";
import DishesSection from "./components/DishesSection";
import TravelTipsSection from "./components/TravelTipsSection";
import FinalThoughtsSection from "./components/FinalThoughtsSection";
import MoreFoodSection from "./components/MoreFoodSection";
import Footer from "@/src/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Indian Food Guide | What to Eat, What to Avoid & Travel Food Tips",
  description:
    "Discover India's diverse cuisine with essential food recommendations, local specialties, travel dining tips, and practical advice on what to eat and avoid during your journey.",
};

export default function IndiaFoodGuidePage() {
  return (
    <main className="w-full bg-white">

      <HeroSection />

      <FoodIntroSection />

      <DishesSection />

      <TravelTipsSection />

      <FinalThoughtsSection />

      <MoreFoodSection />
      <Footer/>

    </main>
  );
}