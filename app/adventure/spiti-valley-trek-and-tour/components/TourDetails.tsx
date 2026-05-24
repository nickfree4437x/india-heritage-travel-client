"use client";

import Image from "next/image";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";

export default function TourDetails() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi- A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542152/delhi_x74w1o.jpg",
    },
    {
      id: "chandigarh",
      title: "Chandigarh- Urban & Modern City​",
      desc: "Chandigarh is located on the foothills of Shivaliks & is famous as one of the best in urban planning & modern architecture. It is the dream city of India’s 1st prime Minister, Sh. Jawahar Lal Nehru & is planned by famous French architect Le Cobuiser.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542249/chandigarh_dtlwll.jpg",
    },
    {
      id: "manali",
      title: "Manali- A Picturesque Hill Station​",
      desc: "It is a popular tourist destination which serves a gateway to Lahaul & spiti district as well as Leh Ladakh. This has beautiful place which has amazing views, greenery, snow0kissed peaks, lush valleys.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542288/manali_a5vjkq.jpg",
    },
    {
      id: "chandratal",
      title: "Chandratal- Moon Lake Of Himachal",
      desc: "Also known as ‘Moon-Lake’, it is high altitude lake located in Spiti valley of Himachal Pradesh. Famous for crystal waters & crescent shape, stunning landscapes.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542330/chandratal_wbcvan.jpg",
    },
    {
      id: "kaza",
      title: "Kaza- Scenic Hub With Ancient Monasteries",
      desc: "Kaza is capital of Spiti, it is the most significant settlement you’ll witness in this planet.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542371/kaza_bd6oix.jpg",
    },
    {
      id: "tobo",
      title: "Tabo- Ajanta of Himalayas",
      desc: "Nubra valley is famous for its sand dunes, vibrant monasteries & stunning landscapes. It is located 10,000ft above sea level & is accessible via the Khardung La Pass which is one of the highest motorable roads in the world. This valley is famous for its double-humped Bacrian camels, confluence of the Shyok & picturesque village & Nubra rivers.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542416/tabo_f01iq9.jpg",
    },
    {
      id: "langza",
      title: "Langza- Natural beauty & geological history",
      desc: "Langza is a state surrounded by snow-clad mountains, barren landscapes & green pastures & have beautiful golden statue of Buddha & an ancient temple called ‘Lang’ & is said to be the Abode of the Deities of region. It is famous for its rich fossil reserve of marine plants & animals.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542458/langza_zi9ccp.webp",
    },
  ];

  return (
    <div className="space-y-16">

      {cities.map((city) => (
        <div
          key={city.id}
          id={city.id}
          className="w-full scroll-mt-24 md:scroll-mt-28"
        >

          {/* TITLE */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={city.img}
              alt={city.title}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </div>

        </div>
      ))}

      {/* EXTRA SECTIONS */}
      <HighlightsInclusions />
      <div className="space-y-6">
        <Itinerary />
        <ExcludedServices/>
        <DetailedItineraryIntro/>
      </div>

    </div>
  );
}