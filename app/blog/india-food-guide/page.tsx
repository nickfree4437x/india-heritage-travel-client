// app/blogs/india-food-guide/page.tsx
import type { Metadata } from "next";
import HeroSection from "./sections/hero/HeroSection";
import FoodIntroSection from "./sections/intro/FoodIntroSection";
import DishesSection from "./sections/dishes/DishesSection";
import TravelTipsSection from "./sections/travel-tips/TravelTipsSection";
import FinalThoughtsSection from "./sections/final-thoughts/FinalThoughtsSection";
import MoreFoodSection from "./sections/more-blogs/MoreFoodSection";
import Footer from "@/src/sections/footer/Footer";

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