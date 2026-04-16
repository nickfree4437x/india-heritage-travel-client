"use client";

import Image from "next/image";

const tours = [
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Explore the beautiful landscapes and rich culture of this region.",
    image: "/recommended/rajasthan.jpg",
  },
  {
    title: "Royal-Triangle-Odyssey",
    desc: "Experience adventure and breathtaking views on this thrilling tour.",
    image: "/recommended/royal.jpg",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on this 17-day tour.",
    image: "/recommended/south.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="py-16 bg-[#f8f6f2]">

      {/* Heading */}
      <h2 className="text-4xl font-serif text-center mb-12">
        Recommended Tours
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">

        {tours.map((tour, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 group"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={tour.image}
                alt={tour.title}
                width={500}
                height={300}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

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