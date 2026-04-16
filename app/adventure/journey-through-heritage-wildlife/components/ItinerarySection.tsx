"use client";

import Image from "next/image";

const itineraryData = [
  {
    title: "Day 1-3: Delhi",
    image: "/adventure-wildlife/delhi.jpg",
    content: [
      "When you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel.",
      "Explore Delhi’s rich history including India Gate, Parliament House, Red Fort, Jama Masjid, and Chandni Chowk.",
      "Visit Akshardham Temple, Humayun’s Tomb, Lotus Temple and enjoy Old Delhi rickshaw ride."
    ],
    next: "Mandawa",
    distance: "5.5-hour drive (260 km)"
  },
  {
    title: "Day 3-4: Mandawa",
    image: "/adventure-wildlife/mandawa.jpg",
    content: [
      "A beautiful Rajasthan town known for havelis and wall paintings.",
      "Enjoy heritage walk and explore Silk Route-era mansions."
    ],
    next: "Pushkar",
    distance: "3.5-hour drive (200 km)"
  },
  {
    title: "Day 4-5: Pushkar",
    image: "/adventure-wildlife/pushkar.jpg",
    content: [
      "Visit Brahma Temple and sacred Pushkar Lake.",
      "Enjoy panoramic views and spiritual vibes."
    ],
    next: "Bundi",
    distance: "3-hour drive (170 km)"
  },
  {
    title: "Day 5-6: Bundi",
    image: "/adventure-wildlife/bundi.jpg",
    content: [
      "Explore Bundi Palace, Taragarh Fort and Nawal Sagar Lake.",
      "Walk through blue-painted streets and local markets."
    ],
    next: "Ranthambore",
    distance: "3-hour drive (179 km)"
  },
  {
    title: "Day 6-8: Ranthambore",
    image: "/adventure-wildlife/ranthambore.jpg",
    content: [
      "Enjoy thrilling jungle safari in Ranthambore National Park.",
      "Spot tigers and explore Ranthambore Fort."
    ],
    next: "Jaipur",
    distance: "2-hour drive (149 km)"
  },
  {
    title: "Day 8-10: Jaipur",
    image: "/adventure-wildlife/jaipur.jpg",
    content: [
      "Visit Hawa Mahal, Amber Fort, City Palace & Jantar Mantar.",
      "Explore Johri Bazaar & Bapu Bazaar."
    ],
    next: "Agra",
    distance: "4.5-hour drive (240 km)"
  },
  {
    title: "Day 10-11: Agra",
    image: "/adventure-wildlife/agra.jpg",
    content: [
      "Witness Taj Mahal sunrise & explore Agra Fort.",
      "Enjoy Yamuna river views."
    ],
    next: "Delhi",
    distance: "4-hour drive (230 km)"
  },
  {
    title: "Day 12: Delhi",
    image: "/adventure-wildlife/delhi2.jpg",
    content: [
      "Relax or explore markets like Chandni Chowk & Spice Market.",
      "Visit temples and cultural spots."
    ]
  },
  {
    title: "Day 13: Farewell & Departure",
    image: "/adventure-wildlife/farewell.jpg",
    content: [
      "Transfer to airport as per flight schedule.",
      "Safe travels!"
    ]
  }
];

export default function ItinerarySection() {
  return (
    <section className="py-16">

      {/* Heading */}
      <h2 className="text-4xl font-serif text-center mb-10">
        Detailed Itinerary
      </h2>

      <div className="space-y-8">

        {itineraryData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border"
          >

            {/* Title */}
            <h3 className="text-red-600 font-semibold text-lg mb-4">
              {item.title}
            </h3>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-6 items-center">

              {/* Image */}
              <div className="rounded-lg overflow-hidden shadow">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-[220px] object-cover"
                />
              </div>

              {/* Text */}
              <div className="space-y-3 text-gray-700 leading-relaxed">
                {item.content.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

            </div>

            {/* Next Stop */}
            {item.next && (
              <div className="mt-4 text-sm">
                <p className="font-semibold">
                  Next stop: {item.next}
                </p>
                <p className="text-gray-600">{item.distance}</p>
              </div>
            )}

          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="bg-[#9b7a50] hover:bg-[#856544] text-white px-8 py-3 rounded-lg">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

    </section>
  );
}