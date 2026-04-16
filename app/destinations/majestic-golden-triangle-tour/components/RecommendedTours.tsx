"use client";

import Image from "next/image";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "/destination/golden-triangle/recommended/tour1.jpg",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    desc: "Experience a 20-day journey through the heart of India on the ‘Royal Rajasthan & Sacred Ganges’ tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "/destination/golden-triangle/recommended/tour2.jpg",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour, from Cochin’s history to Mumbai’s vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
    image: "/destination/golden-triangle/recommended/tour3.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Recommended Tours
      </h2>

      {/* 🔹 Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition"
          >

            {/* Image */}
            <div className="relative h-[220px] w-full overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">

              <h3 className="text-lg font-semibold text-red-600">
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