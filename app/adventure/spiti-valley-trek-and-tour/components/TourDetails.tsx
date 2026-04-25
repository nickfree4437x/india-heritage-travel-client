"use client";

import Image from "next/image";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi- A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "/adventure/spiti/delhi.jpg",
    },
    {
      id: "chandigarh",
      title: "Chandigarh- Urban & Modern City​",
      desc: "Chandigarh is located on the foothills of Shivaliks & is famous as one of the best in urban planning & modern architecture. It is the dream city of India’s 1st prime Minister, Sh. Jawahar Lal Nehru & is planned by famous French architect Le Cobuiser.",
      img: "/adventure/spiti/chandigarh.jpg",
    },
    {
      id: "manali",
      title: "Manali- A Picturesque Hill Station​",
      desc: "It is a popular tourist destination which serves a gateway to Lahaul & spiti district as well as Leh Ladakh. This has beautiful place which has amazing views, greenery, snow0kissed peaks, lush valleys.",
      img: "/adventure/spiti/manali.jpg",
    },
    {
      id: "chandratal",
      title: "Chandratal- Moon Lake Of Himachal",
      desc: "Also known as ‘Moon-Lake’, it is high altitude lake located in Spiti valley of Himachal Pradesh. Famous for crystal waters & crescent shape, stunning landscapes.",
      img: "/adventure/spiti/chandratal.jpg",
    },
    {
      id: "kaza",
      title: "Kaza- Scenic Hub With Ancient Monasteries",
      desc: "Kaza is capital of Spiti, it is the most significant settlement you’ll witness in this planet.",
      img: "/adventure/spiti/kaza.jpg",
    },
    {
      id: "tobo",
      title: "Tabo- Ajanta of Himalayas",
      desc: "Nubra valley is famous for its sand dunes, vibrant monasteries & stunning landscapes. It is located 10,000ft above sea level & is accessible via the Khardung La Pass which is one of the highest motorable roads in the world. This valley is famous for its double-humped Bacrian camels, confluence of the Shyok & picturesque village & Nubra rivers.",
      img: "/adventure/spiti/tobo.jpg",
    },
    {
      id: "langza",
      title: "Langza- Natural beauty & geological history",
      desc: "Langza is a state surrounded by snow-clad mountains, barren landscapes & green pastures & have beautiful golden statue of Buddha & an ancient temple called ‘Lang’ & is said to be the Abode of the Deities of region. It is famous for its rich fossil reserve of marine plants & animals.",
      img: "/adventure/spiti/langza.jpg",
    },
  ];

  return (
    <div className="space-y-20">

      {cities.map((city) => (
        <div
          key={city.id}
          id={city.id}
          className="w-full scroll-mt-28"
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#2c2c2c]">
            {city.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-8 leading-relaxed text-[15px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md group">
            <Image
              src={city.img}
              alt={city.title}
              fill
              className="object-cover transition-transform duration-700"
            />
          </div>

        </div>
      ))}

      {/* EXTRA SECTIONS */}
      <HighlightsInclusions />
      <Itinerary />

    </div>
  );
}