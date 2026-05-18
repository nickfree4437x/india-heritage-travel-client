"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Yoga Escapes: Discover Balance & Rejuvenate",
    desc: "Yoga is an ancient and intricate practice deeply rooted in Indian philosophy. It originally served as a spiritual discipline but has evolved into a popular approach for enhancing physical and mental well-being.",
    image: "/journeys/ayurvedic/recom.jpg",
    slug: "/journeys/health-based/yoga-escapes",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-8">

      {/* 🔹 Heading */}
      <h2
        className="
          text-[20px] sm:text-[24px] md:text-[28px]
          font-semibold
          text-center
          mb-6 sm:mb-8
          text-[#2c2c2c]
          tracking-wide
        "
      >
        Recommended Tours
      </h2>

      {/* 🔹 Cards */}
      <div className="flex justify-center mb-10">

        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group w-full max-w-[380px]"
          >

            <div
              className="
                bg-white rounded-sm
                shadow-sm
                border border-[#eee7dd]
                overflow-hidden
                transition-all duration-500
                hover:shadow-md
                hover:-translate-y-1
              "
            >

              {/* 🔥 Image */}
              <div className="relative h-[240px] w-full overflow-hidden">

                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* 🔥 Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/10
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

              </div>

              {/* 🔥 Content */}
              <div className="p-6 space-y-3">

                <h3
                  className="
                    text-[17px] font-semibold text-red-500 leading-snug group-hover:underline
                  "
                >
                  {tour.title}
                </h3>

                <p
                  className="
                    text-gray-700
                    text-[13px]
                    font-light
                    leading-relaxed
                    line-clamp-4
                  "
                >
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