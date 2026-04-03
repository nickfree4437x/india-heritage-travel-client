import { Landmark, Castle, Mountain, Flame } from "lucide-react";

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
    image: "/golden-triangle.jpg",
    desc: "Experience the iconic cities of Delhi, Agra, and Jaipur with their rich history, stunning monuments, and vibrant culture. Witness architectural marvels like the Taj Mahal and immerse yourself in India’s royal heritage.",
    icon: Landmark,
    slug: "majestic-golden-triangle-tour",
  },
  {
    title: "Rajasthani Heritage Retreat Tour",
    days: "16",
    image: "/rajasthan.jpg",
    desc: "Dive deep into Rajasthan’s royal legacy with grand forts, colorful markets, and cultural traditions. From Jaipur to Udaipur, explore majestic palaces and experience the timeless charm of desert life.",
    icon: Castle,
    slug: "rajasthani-heritage-retreat-tour",
  },
  {
    title: "Coastal Treasures & Mountain Magic Tour",
    days: "10",
    image: "/kerala.jpg",
    desc: "Unwind in Kerala’s serene backwaters, lush greenery, and tranquil beaches. Discover Ayurveda, wildlife sanctuaries, and scenic hill stations that offer a perfect blend of relaxation and adventure.",
    icon: Mountain,
    slug: "coastal-treasures-mountain-magic-tour",
  },
  {
    title: "Mystical North India Discovery Tour",
    days: "12",
    image: "/varanasi.jpg",
    desc: "Explore the spiritual heart of India through sacred temples, ancient cities, and the holy Ganga River. Experience the divine energy of Varanasi and the cultural richness of North India.",
    icon: Flame,
    slug: "mystical-north-india-discovery-tour",
  },
];