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
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779523009/golden-triangle_izyhwq.jpg",
    desc:
      "Experience the iconic cities of Delhi, Agra, and Jaipur with their rich history, stunning monuments, and vibrant culture. Witness architectural marvels like the Taj Mahal and immerse yourself in India’s royal heritage.",
    icon: Gem,
    slug: "majestic-golden-triangle-tour",
  },

  {
    title: "Rajasthani Heritage Retreat Tour",
    days: "16",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779523312/heritage_upv4io.jpg",
    desc:
      "Dive deep into Rajasthan’s royal legacy with grand forts, colorful markets, and cultural traditions. From Jaipur to Udaipur, explore majestic palaces and experience the timeless charm of desert life.",
    icon: Castle,
    slug: "rajasthani-heritage-retreat-tour",
  },

  {
    title: "Coastal Treasures & Mountain Magic Tour",
    days: "10",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779523352/coastal_uysoj5.jpg",
    desc:
      "Unwind in Kerala’s serene backwaters, lush greenery, and tranquil beaches. Discover Ayurveda, wildlife sanctuaries, and scenic hill stations that offer a perfect blend of relaxation and adventure.",
    icon: Sailboat,
    slug: "coastal-treasures-mountain-magic-tour",
  },
];