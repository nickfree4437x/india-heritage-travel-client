"use client";

import Image from "next/image";

const tours = [
  {
    title: "Heritage Odyssey: North To South India Tour",
    desc: "Embark on a 15-day journey through India’s history and culture.",
    img: "/tours/tour1.jpg",
  },
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Indulge in a 16-day journey exploring Rajasthan’s rich heritage.",
    img: "/tours/tour2.jpg",
  },
  {
    title: "Coastal Treasures & Mountain Magic",
    desc: "Experience coastal beauty and mountain landscapes in this 10-day tour.",
    img: "/tours/tour3.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="mt-24">

      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Recommended Tours
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            {/* Image */}
            <Image
              src={tour.img}
              alt={tour.title}
              width={400}
              height={250}
              className="w-full h-[220px] object-cover"
            />

            {/* Content */}
            <div className="p-5">

              <h3 className="text-red-600 font-semibold text-lg mb-2">
                {tour.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {tour.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}