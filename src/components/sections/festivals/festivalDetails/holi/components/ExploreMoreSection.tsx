"use client";

import Image from "next/image";

const tours = [
  {
    image: "/festivals/holi/diwali.jpg",
    title: "Diwali Festival Tour",
    days: "Days : 20",
    desc: "Step into the warmth of India’s Festival of Lights – come celebrate Diwali the local way.",
  },
  {
    image: "/festivals/holi/kumbh.jpg",
    title: "Sacred Path: Kumbh Mela",
    days: "Days : 11",
    desc: "Take part in Kumbh Mela’s sacred rituals, holy dips, and ancient traditions.",
  },
  {
    image: "/festivals/holi/pushkar.jpg",
    title: "Pushkar Camel Carnival",
    days: "Days : 16",
    desc: "Experience India’s most vibrant desert fair – with camels, color, and culture.",
  },
];

export default function ExploreMoreSection() {
  return (
    <section className="py-20 bg-[#f4f0ea]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#9b7a50] mb-4">
          Keep Exploring
        </h2>

        <p className="text-gray-600 mb-12 tracking-wide">
          Go Beyond Holi With More Cultural And Offbeat Tours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {tours.map((tour, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
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
              <div className="p-6 text-center">

                <h3 className="text-lg font-semibold text-[#9b7a50] mb-2">
                  {tour.title}
                </h3>

                <p className="text-sm font-medium mb-3">{tour.days}</p>

                <p className="text-gray-600 text-sm mb-6">
                  {tour.desc}
                </p>

                <button className="bg-[#9b7a50] text-white px-6 py-2 rounded-md hover:bg-[#876845] transition">
                  Explore Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}