"use client";

import ItineraryCard from "./ItineraryCard";

const itineraryData = [
  {
    day: "Day 1-3",
    title: "Mumbai",
    description: `Dive in Mumbai’s busy life. Visit Gateway of India...`,
    image: "/adventure/splendors/mumbai2.jpg",
    nextStop: "Cochin",
    travelInfo: "A 2 hour flight from Mumbai",
  },
  {
    day: "Day 3-5",
    title: "Cochin",
    description: `When you arrive at Cochin Airport...`,
    image: "/adventure/splendors/cochin2.jpg",
    nextStop: "Alleppey",
    travelInfo: "1 hour 20 min drive (55 km)",
  },
  {
    day: "Day 5-6",
    title: "Alleppey",
    description: `Reach Alleppey & enjoy backwaters...`,
    image: "/adventure/splendors/alleppey2.jpg",
    nextStop: "Thekkady",
    travelInfo: "3.5 hour drive (140 km)",
  },
  {
    day: "Day 6-8",
    title: "Thekkady",
    description: `Guided jungle hike & bamboo rafting...`,
    image: "/adventure/splendors/thekkady2.jpg",
    nextStop: "Munnar",
    travelInfo: "3 hour drive (90 km)",
  },
  {
    day: "Day 8-10",
    title: "Munnar",
    description: `Explore tea plantations & trekking...`,
    image: "/adventure/splendors/munnar2.jpg",
    nextStop: "Mumbai",
    travelInfo: "2 hour flight",
  },
  {
    day: "Day 8-10",
    title: "Ooty",
    description: `Explore Nilgiri hills & tribal culture...`,
    image: "/adventure/splendors/ooty2.jpg",
    nextStop: "Mysore",
    travelInfo: "3 hour drive",
  },
  {
    day: "Day 12-14",
    title: "Mysore",
    description: `Visit Mysore Palace & Chamundi Hills...`,
    image: "/adventure/splendors/mysore2.jpg",
    nextStop: "Hassan",
    travelInfo: "2.5 hour drive",
  },
  {
    day: "Day 14-15",
    title: "Hassan",
    description: `Explore Hoysala architecture...`,
    image: "/adventure/splendors/hassan2.jpg",
    nextStop: "Hampi",
    travelInfo: "6 hour drive",
  },
  {
    day: "Day 15-18",
    title: "Hampi",
    description: `Explore ancient ruins & temples...`,
    image: "/adventure/splendors/hampi2.jpg",
    nextStop: "Mumbai",
    travelInfo: "2 hour flight",
  },
  {
    day: "Day 19",
    title: "Farewell And Departure",
    description: `Return with beautiful memories...`,
    image: "/adventure/splendors/farewell.jpg",
  },
];

export default function DetailedItinerary() {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Detailed Itinerary
      </h2>

      {itineraryData.map((item, index) => (
        <ItineraryCard key={index} {...item} />
      ))}

      {/* CTA */}
      <div className="text-center mt-10">
        <button className="bg-[#9b7a50] text-white px-8 py-4 rounded-lg hover:bg-[#7d6242] transition">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

    </section>
  );
}