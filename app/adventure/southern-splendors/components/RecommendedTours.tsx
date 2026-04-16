"use client";

import Image from "next/image";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    description:
      "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "/adventure/splendors/tour1.jpg",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    description:
      "Experience a 20-day journey through the heart of India on the ‘Royal Rajasthan & Sacred Ganges’ tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "/adventure/splendors/tour2.jpg",
  },
  {
    title: "Coastal Treasures & Mountain Magic",
    description:
      "Experience a 10-day journey of ‘Coastal Treasures & Mountain Magic’ from Cochin’s historical charm to the lush greenery of Munnar, all while enjoying coastal delights and nature.",
    image: "/adventure/splendors/tour3.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="mt-20 px-4 py-16 bg-[#f9f9f9]">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Recommended Tours
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">

              <h3 className="text-red-600 font-semibold text-lg mb-3">
                {tour.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {tour.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}