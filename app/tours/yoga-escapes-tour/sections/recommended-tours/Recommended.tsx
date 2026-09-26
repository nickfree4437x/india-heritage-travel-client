"use client";

import Image from "next/image";
import Link from "next/link";

// Explore More India Heritage Tours data
const tours = [
  {
    title: "Ayurveda Wellness Tour India",
    desc: "Ayurveda, a natural health system, originated more than 3,000 years ago in India.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545537/recom_x6z095.webp",
    alt: "Ayurveda wellness tour in India featuring holistic healing and rejuvenation experiences",
    slug: "/tours/ayurveda-journey-tour",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10">
      {/* Section Heading */}
      <h2 className="
        text-[20px] sm:text-[24px] md:text-[28px]
        font-semibold
        text-center
        text-[#2c2c2c]
        tracking-wide
        mb-6 sm:mb-8
      ">
        Explore More India Heritage Tours
      </h2>

      {/* Tour Cards */}
      <div className="flex justify-center mb-10">
        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group w-full max-w-[380px]"
          >
            <div className="
              bg-white rounded-sm
              shadow-sm
              border border-[#eee7dd]
              overflow-hidden
              transition-all duration-500
              hover:shadow-md
              hover:-translate-y-1
            ">
              {/* Tour Image */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                " />
              </div>

              {/* Tour Content */}
              <div className="p-6 space-y-3">
                <h3 className="
                  text-[17px]
                  font-semibold
                  text-red-500
                  leading-snug
                  group-hover:underline
                ">
                  {tour.title}
                </h3>

                <p className="
                  text-gray-700
                  text-[13px]
                  font-light
                  leading-relaxed
                  line-clamp-4
                ">
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