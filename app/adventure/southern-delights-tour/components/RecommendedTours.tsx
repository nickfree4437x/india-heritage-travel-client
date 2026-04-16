"use client";

import Image from "next/image";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in history and regal splendor.",
    img: "/adventure/delights/reco1.jpg",
  },
  {
    title: "A Journey Through Heritage & Wildlife",
    desc: "Explore a 13-day adventure blending heritage and wildlife from Delhi to Ranthambore.",
    img: "/adventure/delights/reco2.jpg",
  },
  {
    title: "Southern Splendors: Culture & Nature Trail",
    desc: "A 19-day journey from Mumbai to Hampi covering culture, coastal beauty, and nature.",
    img: "/adventure/delights/reco3.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Recommended Tours
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-[#f5f5f5] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={tour.img}
              alt={tour.title}
              width={400}
              height={250}
              className="w-full h-[220vh] object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-red-600 mb-2">
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