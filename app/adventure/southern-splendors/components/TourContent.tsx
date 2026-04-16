"use client";

import Image from "next/image";

const places = [
  {
    title: "Mumbai – A City Of Dreams",
    description: `Mumbai, the “City of Dreams”, is a bustling financial capital...`,
    image: "/adventure/splendors/mumbai.jpg",
  },
  {
    title: "Cochin – Where History Meets Commerce",
    description: `Cochin, is former name of Kochi...`,
    image: "/adventure/splendors/cochin.jpg",
  },
  {
    title: "Alleppey – World Of Coastal Delights",
    description: `Alleppey, officially known as Alappuzha...`,
    image: "/adventure/splendors/alleppey.jpg",
  },
  {
    title: "Thekkady – Where Nature Rules",
    description: `Located in the Idukki district of Kerala...`,
    image: "/adventure/splendors/thekkady.jpg",
  },
  {
    title: "Munnar – South India’s Alpine Haven",
    description: `Munnar, the mesmerising hill-station...`,
    image: "/adventure/splendors/munnar.jpg",
  },
  {
    title: "Ooty – King Of Hillstations",
    description: `It is a picturesque hillstation...`,
    image: "/adventure/splendors/ooty.jpg",
  },
  {
    title: "Mysore – A City Of Cultural Splendour",
    description: `Mysore famous for its rich heritage including Mysore Palace...`,
    image: "/adventure/splendors/mysore.jpg",
  },
  {
    title: "Hassan – A Heritage City With Cultural Richness",
    description: `Hassan famous for Carnatic music, vibrant flowers...`,
    image: "/adventure/splendors/hassan.jpg",
  },
  {
    title: "Hampi – City Of Ancient Treasures",
    description: `UNESCO World Site in Karnataka with 500 ancient monuments...`,
    image: "/adventure/splendors/hampi.jpg",
  },
];

export default function TourContent() {
  return (
    <div>

      {places.map((place, index) => (
        <div key={index} className="mb-16">

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {place.title}
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
            {place.description}
          </p>

          <div className="relative w-full h-[250px] md:h-[420px] rounded-xl overflow-hidden shadow">
            <Image
              src={place.image}
              alt={place.title}
              fill
              className="object-cover"
            />
          </div>

        </div>
      ))}

      {/* Highlights + Inclusions */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">

        {/* Highlights */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Highlights
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>✔ Cochin: A Tapestry of Time and Trade</li>
            <li>✔ Serenity on Backwaters</li>
            <li>✔ Paradise in the Ghats</li>
            <li>✔ Romance Amidst Hills and Gardens</li>
            <li>✔ Royalty and Rich Flavors</li>
            <li>✔ Hoysala Heritage Journey</li>
            <li>✔ UNESCO Marvels of History</li>
          </ul>
        </div>

        {/* Inclusions */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Inclusions
          </h3>

          <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-700">
            <p>🏨 18 nights, chosen hotels</p>
            <p>🚗 Local driver, guide</p>
            <p>🍽 Daily breakfast</p>
            <p>💰 All costs covered</p>
            <p>📶 In Car Wi-fi</p>
            <p>🍳 Cooking classes, dinner</p>
            <p>✈ Airport transfer</p>
            <p>🛺 Delhi rickshaw</p>
          </div>
        </div>

      </div>

    </div>
  );
}