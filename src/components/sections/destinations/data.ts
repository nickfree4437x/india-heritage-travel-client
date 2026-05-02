import {
  Gem,
  Castle,
  Sailboat,
} from "lucide-react";

export type Destination = {
  title: string;
  days: string;
  image: string;
  desc: string;
  icon: any;
  slug: string;
};

export const destinations: Destination[] = [
  {
    title: "Majestic Golden Triangle Tour",
    days: "7",
    image: "/destination/golden-triangle/golden-triangle.jpg",
    desc: "Experience the iconic cities of Delhi, Agra, and Jaipur with their rich history, stunning monuments, and vibrant culture. Witness architectural marvels like the Taj Mahal and immerse yourself in India’s royal heritage.",
    icon: Gem, // 🔥 Tour route / travel journey feel
    slug: "majestic-golden-triangle-tour",
  },
  {
    title: "Rajasthani Heritage Retreat Tour",
    days: "16",
    image: "/destination/heritage-tour/heritage.jpg",
    desc: "Dive deep into Rajasthan’s royal legacy with grand forts, colorful markets, and cultural traditions. From Jaipur to Udaipur, explore majestic palaces and experience the timeless charm of desert life.",
    icon: Castle, // 🔥 Heritage + forts + palaces
    slug: "rajasthani-heritage-retreat-tour",
  },
  {
    title: "Coastal Treasures & Mountain Magic Tour",
    days: "10",
    image: "/destination/coastal-tour/coastal.jpg",
    desc: "Unwind in Kerala’s serene backwaters, lush greenery, and tranquil beaches. Discover Ayurveda, wildlife sanctuaries, and scenic hill stations that offer a perfect blend of relaxation and adventure.",
    icon: Sailboat, // 🔥 Coastal + Kerala + relaxation vibe
    slug: "coastal-treasures-mountain-magic-tour",
  },
];