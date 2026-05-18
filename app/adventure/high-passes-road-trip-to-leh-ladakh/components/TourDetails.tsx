"use client";

import Image from "next/image";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";
import ExcludedServices from "@/app/destinations/majestic-golden-triangle-tour/components/ExcludedServices";
import DetailedItineraryIntro from "@/src/components/tours/DetailedItinerary";

export default function TourDetails() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi- A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "/adventure/ladakh/delhi.jpg",
    },
    {
      id: "chandigarh",
      title: "Chandigarh- Urban & Modern City",
      desc: "Chandigarh is located on the foothills of Shivaliks & is famous as one of the best in urban planning & modern architecture. It is the dream city of India’s 1st prime Minister, Sh. Jawahar Lal Nehru & is planned by famous French architect Le Cobuiser.",
      img: "/adventure/ladakh/chandigarh.jpeg",
    },
    {
      id: "manali",
      title: "Manali- A Picturesque Hill Station",
      desc: "It is a popular tourist destination which serves a gateway to Lahaul & spiti district as well as Leh Ladakh. This has beautiful place which has amazing views, greenery, snow0kissed peaks, lush valleys.",
      img: "/adventure/ladakh/manali.jpg",
    },
    {
      id: "jispa",
      title: "Jispa- A Picturesque Village",
      desc: "Located in Lahaul region of Himachal Pradesh, Jispa is nestled along the banks of Bhaga River. It is famous stop over for travelers travelling to Leh-Ladakh which stunning views of the surrounding mountains, peaceful environment, serene landscapes. It is famous for its trekking routes, campsites & base for exploring nearby Baralacha la Pass.",
      img: "/adventure/ladakh/jispa.jpg",
    },
    {
      id: "leh",
      title: "Leh - A Historic Town",
      desc: "Situated on an altitude of 3,500 meters (11,500 ft) above sea level, Leh is famous for its stunning landscapes, vibrant monasteries & rich cultural heritage. Leh is also a gateway to the breathtaking beauty of Himalayas which offers attraction such as Leh Palace, Leh market & Shanti Stupa. It is also a hub for adventure activities like river rafting , mountain biking & trekking.",
      img: "/adventure/ladakh/leh.jpg",
    },
    {
      id: "nubra",
      title: "Nubra Valley- A Cold Desert In High Altitude",
      desc: "Nubra valley is famous for its sand dunes, vibrant monasteries & stunning landscapes. It is located 10,000ft above sea level & is accessible via the Khardung La Pass which is one of the highest motorable roads in the world. This valley is famous for its double-humped Bacrian camels, confluence of the Shyok & picturesque village & Nubra rivers.",
      img: "/adventure/ladakh/nubra.jpg",
    },
    {
      id: "pangong",
      title: "Pangong Lake - Blue Water Lake",
      desc: "Pangong Lake is a stunning high-altitude lake in Ladakh. It is stretched over 134 kilometers & extends from India to Tibet. It is famous for its mesmerizing blue waters that change shades throughout the day. It has breathtaking scenaries & serene atmosphere.",
      img: "/adventure/ladakh/pangong.jpg",
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
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14.5px] text-justify">
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
      <Itinerary />
      <div className="space-y-6">
        <ExcludedServices/>
        <DetailedItineraryIntro/>
       </div>

    </div>
  );
}