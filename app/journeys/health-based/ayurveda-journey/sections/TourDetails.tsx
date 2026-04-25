"use client";

import Image from "next/image";
import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      id: "mumbai",
      title: "Mumbai",
      desc: "Mumbai, often referred to as Bombay, is the heartbeat of India’s urban landscape. This bustling metropolis on the western coast is a captivating fusion of diverse cultures and pulsating energy. With its iconic landmarks like the Gateway of India, a rich cosmopolitan lifestyle, and an endless array of experiences, Mumbai is a city that never ceases to amaze, inviting you to explore its vibrant soul.",
      img: "/journeys/ayurvedic/mumbai.jpg",
    },
    {
      id: "cochin",
      title: "Cochin",
      desc: "Cochin, often hailed as the Queen of the Arabian Sea, is a bustling commercial hub steeped in a rich trading legacy spanning over six centuries. Here, the echoes of Arabian, Dutch, Phoenician, Portuguese, Chinese, and British influences are woven into the city’s vibrant tapestry. As the financial, commercial, and industrial heart of Kerala, Cochin invites you to immerse yourself in its captivating blend of history and commerce.",
      img: "/journeys/ayurvedic/cochin.jpg",
    },
    {
      id: "alleppey",
      title: "Alleppey",
      desc: `In the coastal town of Alleppey, a world of unforgettable experiences unfolds. From idyllic houseboat stays to basking on pristine beaches, the options for creating lasting memories are abundant, especially for first-time visitors.
             Nestled amid lush greenery, where coconut trees gracefully bow over the serene waters, Alleppey’s backwaters offer a unique journey. These tranquil channels are navigated by a variety of traditional boats, most notably the iconic Kerala River boats, promising an enchanting exploration like no other.`,
      img: "/journeys/ayurvedic/alleppey.jpg",
    },
    {
      id: "thekkedy",
      title: "Thekkedy",
      desc: "In Thekkady, prepare for a sensory feast that includes the majestic presence of elephants, fragrant spice plantations, and picturesque hills. The Periyar forest, a true national treasure, cradles within it the most vibrant array of flora and fauna found anywhere on Earth, including captivating migratory species that grace these lands. Your journey here promises an immersive encounter with the awe-inspiring wonders of nature.",
      img: "/journeys/ayurvedic/thekkedy.jpg",
    },
    {
      id: "munnar",
      title: "Munnar",
      desc: `Munnar, the cherished hill-station of Kerala, rests gracefully at an elevation of 1600 meters amidst the Western Ghats. Often referred to as the “Kashmir of South India”, it’s a place of sheer natural splendor.
            Perched along the banks of three pristine rivers – Madupetti, Nallathanni, and Periavaru, Munnar also boasts of natural bird sanctuaries and vast tea plantations. Prepare to be enchanted by the alpine wonders of this picturesque destination.`,
      img: "/journeys/ayurvedic/munnar.jpg",
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