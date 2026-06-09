// app/blogs/page.tsx
import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import BlogsGrid from "./components/BlogsGrid";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title: 'India Travel Blog | Heritage, Food, Solo & Honeymoon Guides',
  description: 'Explore India’s rich heritage, best food tips, Jaipur 3-day itinerary, solo travel guides & honeymoon ideas. Read expert travel blogs on India Heritage Travel.',
  openGraph: {
    title: 'India Travel Blog | Heritage Travel Guides',
    description: 'Discover hidden gems, local experiences & wellness journeys across India.',
    url: 'https://www.indiaheritagetravel.com/blog',
    siteName: 'India Heritage Travel',
  },
}

export default function BlogsPage() {
  return (
    <main className="w-full bg-[#f4f0ea]">
      <HeroSection />
      <BlogsGrid />
      <Footer/>
    </main>
  );
}