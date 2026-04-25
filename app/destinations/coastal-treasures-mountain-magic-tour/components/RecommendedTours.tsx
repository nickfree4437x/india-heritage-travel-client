"use client";

import Image from "next/image";

export default function RecommendedTours() {
  const tours = [
    {
      title: "The Royal Heritage Trail Tour",
      desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
      img: "/destination/coastal-tour/r1.jpg",
    },
    {
      title: "Mystical North India Discovery Tour",
      desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
      img: "/destination/coastal-tour/r2.jpg",
    },
    {
      title: "Heritage Odyssey: North To South India Tour",
      desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour, from Cochin’s history to Mumbai’s vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
      img: "/destination/coastal-tour/r3.jpg",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 tracking-wide">
        Recommended Tours
      </h2>

      {/* 🔹 Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {tours.map((tour, i) => (
          <div
            key={i}
            className="bg-white rounded-sm
                       shadow-sm
                       border border-[#eee7dd]
                       overflow-hidden 
                       transition-all duration-500
                       hover:shadow-md
                       hover:-translate-y-2"
          >

            {/* 🔥 Image */}
            <div className="relative h-[240px] w-full overflow-hidden">
              <Image
                src={tour.img}
                alt={tour.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 hover:opacity-100" />
            </div>

            {/* 🔥 Content */}
            <div className="p-6 space-y-3">

              <h3 className="text-[17px] font-semibold text-red-500 leading-snug hover:underline">
                {tour.title}
              </h3>

              <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-4">
                {tour.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}