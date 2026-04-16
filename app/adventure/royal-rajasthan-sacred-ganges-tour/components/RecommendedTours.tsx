"use client";

import Image from "next/image";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "/adventure/ganga-tour/tour1.jpg",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    desc: "Experience a 20-day journey through the heart of India on the ‘Royal Rajasthan & Sacred Ganges’ tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "/adventure/ganga-tour/tour2.jpg",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour, from Cochin’s history to Mumbai’s vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
    image: "/adventure/ganga-tour/tour3.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="py-16 px-6 bg-[#f8f6f2]">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
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
            <div className="relative w-full h-[220px]">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-red-600 font-semibold text-lg mb-2">
                {tour.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {tour.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}