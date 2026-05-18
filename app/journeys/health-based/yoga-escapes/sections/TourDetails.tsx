"use client";

import Image from "next/image";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      id: "delhi",
      title: "Delhi",
      desc: "Discover Delhi, where history and modernity intertwine in a captivating dance. Vibrant, contemporary, and bursting with colors. In Old Delhi, you’ll experience the rich tapestry of humanity in all its hues and sensations.",
      img: "/journeys/yoga/delhi.jpg",
    },
    {
      id: "agra",
      title: "Agra",
      desc: "Enter a realm where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore intriguing tombs, stately forts, and vibrant marketplaces that eagerly await your presence",
      img: "/journeys/yoga/agra.webp",
    },
    {
      id: "jaipur",
      title: "Jaipur",
      desc: "Discover the heart of Rajasthan, where the historical and vibrant Pink City, once home to the Jaipur Royal Family, seamlessly blends the past with the present in a truly unique experience.",
      img: "/journeys/yoga/jaipur.jpg",
    },
    {
      id: "rishikesh",
      title: "Rishikesh",
      desc: "Rishikesh is a serene town in northern India, nestled in the Himalayan foothills. It’s renowned as the “Yoga Capital of the World,” attracting yoga enthusiasts and spiritual seekers. Situated along the sacred Ganges River, it’s also a hub for adventure tourism, offering activities like white-water rafting and trekking. The city’s spiritual significance and breathtaking natural beauty make it a popular destination for those seeking both inner peace and outdoor adventure",
      img: "/journeys/yoga/rishikesh.webp",
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

    </div>
  );
}