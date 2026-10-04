"use client";

import Image from "next/image";
import HighlightsInclusions from "../hightlights/HighlightsInclusions";
import Itinerary from "../itinerary/Itinerary";
import ExcludedServices from "@/app/tours/majestic-golden-triangle-tour/components/pricing/ExcludedServices";
import DetailedItineraryIntro from "@/src/tours/book-now/sections/itinerary/DetailedItinerary";
import WhyChooseSection from "@/src/tours/why-choose/WhyChooseSection";

export default function TourDetails() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi – History, Heritage & Modern Culture",
      desc: "Discover Delhi, India's capital city, where historic landmarks, vibrant local culture, and modern life come together. Explore Old Delhi and experience the city's rich history, diverse traditions, and architectural heritage as part of your Spiti Valley Tour Package.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542152/delhi_x74w1o.jpg",
    },
    {
      id: "chandigarh",
      title: "Chandigarh – Modern Architecture & Urban Heritage",
      desc: "Chandigarh is known for its modern urban planning, distinctive architecture, and location at the foothills of the Shivalik Hills. Designed with a focus on planned development and contemporary architecture, the city offers a unique contrast before your journey into the Himalayan landscapes of Spiti Valley.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542249/chandigarh_dtlwll.jpg",
    },
    {
      id: "manali",
      title: "Manali – Himalayan Landscapes & Adventure",
      desc: "It is a popular tourist destination which serves a gateway to Lahaul & spiti district as well as Leh Ladakh. This has beautiful place which has amazing views, greenery, snow0kissed peaks, lush valleys.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779542288/manali_a5vjkq.jpg",
    },
    {
      id: "chandratal",
      title: "Chandratal- Moon Lake Of Himachal",
      desc: "Chandratal, meaning Moon Lake, is a high-altitude lake in Spiti Valley known for its crescent shape, clear waters, and dramatic Himalayan surroundings. Its remote setting and striking landscapes make it one of the memorable highlights of a Spiti Valley Tour.",
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
    <div className="space-y-8 md:space-y-12">

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
          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
            {city.desc}
          </p>

          {/* IMAGE */}
          <div className="relative w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0">
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