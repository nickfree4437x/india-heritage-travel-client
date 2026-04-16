"use client";

import Image from "next/image";

export default function RecommendedTours() {
  const tours = [
    {
      title: "The Royal Heritage Trail Tour",
      desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra.",
      img: "/destination/coastal-tour/r1.jpg",
    },
    {
      title: "Mystical North India Discovery Tour",
      desc: "Discover the mystical North India in 12 days.",
      img: "/destination/coastal-tour/r2.jpg",
    },
    {
      title: "Heritage Odyssey: North To South India Tour",
      desc: "Discover Southern India with coastal delights.",
      img: "/destination/coastal-tour/r3.jpg",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      
      {/* Title */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Recommended Tours
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {tours.map((tour, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative h-[220px]">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h3 className="text-red-600 font-semibold mb-2">
                {tour.title}
              </h3>

              <p className="text-gray-700 text-sm">
                {tour.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}