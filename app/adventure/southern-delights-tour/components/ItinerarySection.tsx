"use client";

import Image from "next/image";

const itineraryData = [
  {
    title: "Day 1-3: Cochin",
    desc: "Arrival at Cochin Airport. Explore Fort Kochi, St. Francis Church, Synagogue and Mattancherry Palace.",
    img: "/adventure/delights/cochin2.jpg",
    next: "Alleppey – 1 hr 20 min drive",
  },
  {
    title: "Day 3-4: Alleppey",
    desc: "Enjoy backwaters and houseboat experience with serene views.",
    img: "/adventure/delights/alleppey2.jpg",
    next: "Thekkady",
  },
  {
    title: "Day 4-6: Thekkady",
    desc: "Visit Periyar National Park and spice plantations.",
    img: "/adventure/delights/thekkady2.jpg",
    next: "Munnar",
  },
  {
    title: "Day 6-8: Munnar",
    desc: "Explore tea gardens, valleys and scenic viewpoints.",
    img: "/adventure/delights/munnar2.jpg",
    next: "Madurai",
  },
  {
    title: "Day 8-10: Madurai",
    desc: "Visit Meenakshi Temple and cultural markets.",
    img: "/adventure/delights/madurai2.jpg",
    next: "Thanjavur",
  },
  {
    title: "Day 10-11: Thanjavur",
    desc: "Explore Brihadeeswarar Temple and heritage.",
    img: "/adventure/delights/thanjavur2.jpg",
    next: "Pondicherry",
  },
  {
    title: "Day 11-13: Pondicherry",
    desc: "Enjoy French streets, beaches and Auroville.",
    img: "/adventure/delights/pondicherry2.jpg",
    next: "Mahabalipuram",
  },
  {
    title: "Day 13-15: Mahabalipuram",
    desc: "Visit UNESCO temples and coastal views.",
    img: "/adventure/delights/mahabalipuram2.jpg",
    next: "Mumbai",
  },
  {
    title: "Day 15-16: Mumbai",
    desc: "Explore Gateway of India, Marine Drive and city life.",
    img: "/adventure/delights/mumbai2.jpg",
    next: "Departure",
  },
  {
    title: "Day 17: Farewell & Departure",
    desc: "Departure with unforgettable memories.",
  },
];

export default function ItinerarySection() {
  return (
    <div className="space-y-8">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center">
        Detailed Itinerary
      </h2>

      {/* Cards */}
      {itineraryData.map((item, index) => (
        <div
          key={index}
          className="bg-[#f5f5f5] rounded-xl shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-red-600 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-700 mb-4">
            {item.desc}
          </p>

          {item.img && (
            <Image
              src={item.img}
              alt={item.title}
              width={800}
              height={400}
              className="rounded-lg mb-4"
            />
          )}

          {item.next && (
            <p className="font-medium text-gray-800">
              <span className="font-semibold">Next Stop:</span> {item.next}
            </p>
          )}
        </div>
      ))}

    </div>
  );
}