"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Ayurveda Journey: Explore the Science of Wellness",
    desc: "Ayurveda, a natural health system, originated more than 3,000 years ago in India.",
    image: "/journeys/yoga/recom.jpg",
    slug: "/journeys/health-based/ayurveda-journey",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 tracking-wide">
        Recommended Tours
      </h2>

      {/* 🔹 Cards */}
      <div className="flex justify-center">
        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group w-full max-w-[380px]"
          >
            <div
              className="bg-white rounded-sm
                         shadow-sm
                         border border-[#eee7dd]
                         overflow-hidden 
                         transition-all duration-500
                         hover:shadow-md"
            >

              {/* 🔥 Image */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* 🔥 Content */}
              <div className="p-6 space-y-3">

                <h3 className="text-[17px] font-semibold text-red-500 leading-snug group-hover:underline">
                  {tour.title}
                </h3>

                <p className="text-gray-700 text-[14px] leading-relaxed line-clamp-4">
                  {tour.desc}
                </p>

              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}