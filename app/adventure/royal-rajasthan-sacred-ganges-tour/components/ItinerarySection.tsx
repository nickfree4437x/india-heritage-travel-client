"use client";

import Image from "next/image";

const itineraryData = [
  {
    day: "Day 1-3: Delhi",
    desc: "Explore Delhi’s rich history, monuments, and markets.",
    image: "/adventure/ganga-tour/delhi-itinerary.jpg",
    next: "Mandawa (5.5 hrs / 260 km)",
  },
  {
    day: "Day 3-5: Mandawa",
    desc: "Discover frescoes, havelis, and heritage walk.",
    image: "/adventure/ganga-tour/mandawa-itinerary.jpg",
    next: "Bikaner (3.5 hrs / 200 km)",
  },
  {
    day: "Day 5-6: Bikaner",
    desc: "Visit Junagarh Fort & Karni Mata Temple.",
    image: "/adventure/ganga-tour/bikaner-itinerary.jpg",
    next: "Jaisalmer (5 hrs / 220 km)",
  },
  {
    day: "Day 6-8: Jaisalmer",
    desc: "Fort visit, camel safari & desert camp.",
    image: "/adventure/ganga-tour/jaisalmer-itinerary.jpg",
    next: "Jodhpur (4.5 hrs / 285 km)",
  },
  {
    day: "Day 8-9: Jodhpur",
    desc: "Explore blue city & Mehrangarh Fort.",
    image: "/adventure/ganga-tour/jodhpur-itinerary.jpg",
    next: "Udaipur (5 hrs / 250 km)",
  },
  {
    day: "Day 9-11: Udaipur",
    desc: "City of Lakes, boat ride & palaces.",
    image: "/adventure/ganga-tour/udaipur-itinerary.jpg",
    next: "Pushkar",
  },
  {
    day: "Day 11-12: Pushkar",
    desc: "Visit Brahma Temple & Pushkar Lake.",
    image: "/adventure/ganga-tour/pushkar-itinerary.jpg",
    next: "Jaipur",
  },
  {
    day: "Day 12-14: Jaipur",
    desc: "Explore Amber Fort, Hawa Mahal & markets.",
    image: "/adventure/ganga-tour/jaipur-itinerary.jpg",
    next: "Agra",
  },
  {
    day: "Day 14-15: Agra",
    desc: "Visit Taj Mahal & Red Fort.",
    image: "/adventure/ganga-tour/agra-itinerary.jpg",
    next: "Orchha",
  },
  {
    day: "Day 15-16: Orchha",
    desc: "Explore temples, cenotaphs & river rafting.",
    image: "/adventure/ganga-tour/orchha-itinerary.jpg",
    next: "Khajuraho",
  },
  {
    day: "Day 16-17: Khajuraho",
    desc: "Famous temples & light show.",
    image: "/adventure/ganga-tour/khajuraho-itinerary.jpg",
    next: "Varanasi",
  },
  {
    day: "Day 17-19: Varanasi",
    desc: "Ganga Aarti & spiritual experience.",
    image: "/adventure/ganga-tour/varanasi-itinerary.jpg",
    next: "Delhi",
  },
  {
    day: "Day 19: Delhi",
    desc: "Relax or explore local markets.",
    image: "/adventure/ganga-tour/delhi2.jpg",
    next: "",
  },
  {
    day: "Day 20: Farewell & Departure",
    desc: "Transfer to airport. Safe travels!",
    image: "/adventure/ganga-tour/departure.jpg",
    next: "",
  },
];

export default function ItinerarySection() {
  return (
    <section className="mt-16">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Detailed Itinerary
      </h2>

      <div className="space-y-8">
        {itineraryData.map((item, index) => (
          <div key={index} className="bg-[#f8f6f2] rounded-xl shadow-md p-6">

            <h3 className="text-red-600 font-semibold text-lg mb-4">
              {item.day}
            </h3>

            <div className="grid md:grid-cols-3 gap-6 items-center">

              {/* Image */}
              <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.day}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="md:col-span-2 text-gray-700 text-sm leading-relaxed space-y-2">
                <p>{item.desc}</p>

                {item.next && (
                  <p className="font-semibold mt-2">
                    Next stop: {item.next}
                  </p>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <button className="bg-[#9b7a50] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#7c623f] transition">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

      {/* Excluded Section */}
      <div className="mt-16 border-t pt-6">
        <h3 className="text-xl font-semibold text-[#9b7a50]">
          Excluded Services in this Journey:
        </h3>

        <ul className="mt-4 text-gray-700 text-sm space-y-2">
          <li>• International flights</li>
          <li>• Personal expenses</li>
          <li>• Travel insurance</li>
          <li>• Any extra activities not mentioned</li>
        </ul>
      </div>

    </section>
  );
}