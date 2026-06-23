"use client";

import Image from "next/image";
import HighlightsInclusions from "../hightlight/HighlightsInclusions";
import Itinerary from "../itinerary/Itinerary";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

export default function TourDetails() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi- A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with Vibrant, contemporary, and bursting colours. In Old Delhi, you’ll experience the rich colours of humanity in all its shades and sensations.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611394/Delhi-blog-9-scaled_jq0vs9.jpg",
      alt: "Delhi sightseeing tour featuring India Gate Red Fort Qutub Minar and historic landmarks",
    },
    {
      id: "chandigarh",
      title: "Chandigarh- Urban & Modern City",
      desc: `Chandigarh, located at the foothills of the Shivalik Range, is one of India’s best-planned cities and a remarkable example of modern urban design. Designed by renowned French architect Le Corbusier, the city is known for its wide roads, green spaces, and architectural excellence. It was envisioned by India’s first Prime Minister, Jawaharlal Nehru, as a symbol of a modern and progressive India.
             The city is home to popular attractions such as the Rock Garden, Sukhna Lake, and the Capitol Complex, a UNESCO World Heritage Site. With its blend of natural beauty, modern infrastructure, and cultural attractions, Chandigarh serves as an ideal gateway to the Himalayan regions of Himachal Pradesh and Leh Ladakh.`,
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611530/chandigarh-1-1_yxbpdq.jpg",
      alt: "Chandigarh city tour featuring Rock Garden Sukhna Lake and modern architectural attractions",
    },
    {
      id: "manali",
      title: "Manali- A Picturesque Hill Station",
      desc: `Manali is one of the most popular hill stations in Himachal Pradesh and serves as a gateway to the breathtaking regions of Lahaul, Spiti, and Leh Ladakh. Surrounded by snow-capped Himalayan peaks, lush valleys, dense forests, and flowing rivers, Manali offers spectacular natural beauty throughout the year.
             Known for its adventure activities and scenic landscapes, Manali attracts travelers seeking trekking, river rafting, skiing, and mountain exploration. Visitors can explore famous attractions such as Solang Valley, Rohtang Pass, and traditional Himalayan villages while enjoying the region’s peaceful atmosphere and stunning mountain views.`,
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611574/manali-1-1-e1728021932879_jmguyp.jpg",
      alt: "Manali hill station with snow covered mountains lush valleys and Himalayan landscapes",
    },
    {
      id: "jispa",
      title: "Jispa- A Picturesque Village",
      desc: "Located in Lahaul region of Himachal Pradesh, Jispa is nestled along the banks of Bhaga River. It is famous stop over for travelers travelling to Leh-Ladakh which stunning views of the surrounding mountains, peaceful environment, serene landscapes. It is famous for its trekking routes, campsites & base for exploring nearby Baralacha la Pass.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611639/jispa-2-1_vjoius.jpg",
      alt: "Jispa village in Himachal Pradesh surrounded by mountains rivers and scenic landscapes",
    },
    {
      id: "leh",
      title: "Leh - A Historic Town",
      desc: "Situated on an altitude of 3,500 meters (11,500 ft) above sea level, Leh is famous for its stunning landscapes, vibrant monasteries & rich cultural heritage. Leh is also a gateway to the breathtaking beauty of Himalayas which offers attraction such as Leh Palace, Leh market & Shanti Stupa. It is also a hub for adventure activities like river rafting , mountain biking & trekking.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611693/leh-4_vtofnh.jpg",
      alt: "Leh Ladakh travel destination featuring monasteries mountain views and cultural heritage attractions",
    },
    {
      id: "nubra",
      title: "Nubra Valley- A Cold Desert In High Altitude",
      desc: "Nubra valley is famous for its sand dunes, vibrant monasteries & stunning landscapes. It is located 10,000ft above sea level & is accessible via the Khardung La Pass which is one of the highest motorable roads in the world. This valley is famous for its double-humped Bacrian camels, confluence of the Shyok & picturesque village & Nubra rivers.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611771/nubra-valley-3_xfhho2.jpg",
      alt: "Nubra Valley Ladakh featuring sand dunes double humped camels and high altitude landscapes",
    },
    {
      id: "pangong",
      title: "Pangong Lake - Blue Water Lake",
      desc: "Pangong Lake is a stunning high-altitude lake in Ladakh. It is stretched over 134 kilometers & extends from India to Tibet. It is famous for its mesmerizing blue waters that change shades throughout the day. It has breathtaking scenaries & serene atmosphere.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779611801/Pangong-Tso-Lake-ladakh_e01byb.jpg",
      alt: "Pangong Lake Ladakh with crystal blue waters dramatic mountains and scenic views",
    },
  ];

  return (
    <div className="space-y-12">

      <WhyChooseSection/>

      {cities.map((city) => (
        <div
          key={city.id}
          id={city.id}
          className="w-full scroll-mt-24 md:scroll-mt-28"
        >

          {/* TITLE */}
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            {city.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14.5px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
            <Image
              src={city.img}
              alt={city.alt}
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