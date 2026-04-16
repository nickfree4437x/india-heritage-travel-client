"use client";

import Image from "next/image";

const itinerary = [
  {
    title: "Day 1-3: Delhi",
    image: "/adventure/delhi.jpg",
    desc: "Explore Delhi’s rich history including India Gate, Red Fort, Qutub Minar, Chandni Chowk & more.",
    next: "Jaipur",
  },
  {
    title: "Day 3-5: Jaipur",
    image: "/adventure/jaipur.jpg",
    desc: "Discover the Pink City with grand forts, palaces & vibrant markets.",
    next: "Agra",
  },
  {
    title: "Day 5-6: Agra",
    image: "/adventure/agra.jpg",
    desc: "Visit the Taj Mahal and explore Mughal architecture and heritage.",
    next: "Ajanta & Ellora",
  },
  {
    title: "Day 6-7: Ajanta & Ellora",
    image: "/adventure/ajanta.jpg",
    desc: "Witness ancient rock-cut caves and breathtaking artistic heritage.",
    next: "Mumbai",
  },
  {
    title: "Day 7-9: Mumbai",
    image: "/adventure/mumbai.jpg",
    desc: "Experience the vibrant city life, Gateway of India & Marine Drive.",
    next: "Cochin",
  },
  {
    title: "Day 9-10: Cochin",
    image: "/adventure/cochin.jpg",
    desc: "Explore Kochi’s colonial charm, churches, and spice markets.",
    next: "Alleppey",
  },
  {
    title: "Day 10-11: Alleppey",
    image: "/adventure/alleppey.jpg",
    desc: "Enjoy houseboat cruise in Kerala backwaters.",
    next: "Thekkady",
  },
  {
    title: "Day 11-12: Thekkady",
    image: "/adventure/thekkady.jpg",
    desc: "Visit Periyar Wildlife Sanctuary, spice plantations & bamboo rafting.",
    next: "Munnar",
  },
  {
    title: "Day 12-14: Munnar",
    image: "/adventure/munnar.jpg",
    desc: "Explore tea gardens, valleys, and scenic hill views.",
    next: "Delhi",
  },
  {
    title: "Day 15: Delhi",
    image: "/adventure/delhi.jpg",
    desc: "Return to Delhi and explore remaining attractions.",
    next: "Departure",
  },
  {
    title: "Day 16: Farewell & Departure",
    image: "/adventure/farewell.jpg",
    desc: "Departure with beautiful memories of your journey.",
    next: null,
  },
];

export default function DetailedItinerary() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Detailed Itinerary
      </h2>

      <div className="space-y-8">
        {itinerary.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6"
          >
            <h3 className="text-red-600 font-bold text-lg mb-3">
              {item.title}
            </h3>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-lg shadow"
              />

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {item.next && (
              <p className="mt-4 font-semibold text-gray-800">
                Next Stop: {item.next}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}