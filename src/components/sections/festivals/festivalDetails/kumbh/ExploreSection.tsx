"use client";

import Image from "next/image";

const tours = [
  {
    img: "/festivals/diwali/diwali.jpg",
    title: "Diwali Festival Tour",
    days: "20",
    desc: "Step into the warmth of India’s Festival of Lights — come celebrate Diwali the local way.",
  },
  {
    img: "/festivals/holi/holi.jpg",
    title: "Holi Festival Tour",
    days: "16",
    desc: "Celebrate Holi with locals through colours, music, and tradition.",
  },
  {
    img: "/festivals/pushkar/pushkar.jpg",
    title: "Pushkar Camel Carnival",
    days: "16",
    desc: "Experience India’s most vibrant desert fair — with camels, color, and culture.",
  },
];

export default function ExploreSection() {
  return (
    <section className="py-20 bg-[#f4f0ea]" id="explore">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#9b7a50] mb-3">
          Keep Exploring
        </h2>

        {/* Subheading */}
        <p className="text-[#9b7a50]/80 mb-12 tracking-wide">
          Go Beyond Kumbh With More Cultural And Offbeat Tours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {tours.map((tour, index) => (
            <div
              key={index}
              className="border border-[#d6c7b2] rounded-xl p-4 hover:shadow-md transition"
            >

              {/* Image */}
              <div className="relative h-52 rounded-lg overflow-hidden mb-4">
                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#9b7a50] mb-2">
                {tour.title}
              </h3>

              {/* Days */}
              <p className="text-sm font-medium mb-3">
                Days : {tour.days}
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-5">
                {tour.desc}
              </p>

              {/* CTA */}
              <button className="bg-[#9b7a50] text-white px-6 py-2 rounded-md hover:bg-[#876845] transition">
                Explore Now
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}