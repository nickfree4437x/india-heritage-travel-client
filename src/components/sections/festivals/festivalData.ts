export type FestivalType = {
  title: string;
  days: string;
  image: string;
  desc: string;
  slug: string;
};

export const festivals: FestivalType[] = [
  {
    title: "Colors Of Joy: Holi Festival",
    days: "16 Days",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547592/holi_cx2jwa.jpg",
    desc: "Experience the magical festival of colors where streets come alive with vibrant hues, music, and laughter. Celebrate unity, joy, and the spirit of togetherness with unforgettable moments.",
    slug: "holi",
  },
  {
    title: "Diwali: Festival Of Lights",
    days: "20 Days",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547715/diwali_yi6jku.jpg",
    desc: "Celebrate the triumph of light over darkness with glowing diyas, sparkling fireworks, and festive sweets. A time of joy, prosperity, and new beginnings shared with loved ones.",
    slug: "diwali",
  },
  {
    title: "Pushkar Camel Carnival",
    days: "16 Days",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547787/Pushkar_k4ugcf.png",
    desc: "Immerse yourself in Rajasthan’s rich traditions with camel fairs, folk music, and colorful desert celebrations. A unique cultural experience filled with energy and heritage.",
    slug: "pushkar",
  },
  {
    title: "Sacred Path: Kumbh Mela",
    days: "11 Days",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547846/kumbh_arulyq.jpg",
    desc: "Witness the world’s largest spiritual gathering where millions come together for sacred rituals, holy dips, and divine experiences that reflect deep faith and devotion.",
    slug: "kumbh",
  },
];