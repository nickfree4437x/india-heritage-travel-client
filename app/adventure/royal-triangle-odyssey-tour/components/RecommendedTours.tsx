"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534877/trail-tour_ypzior.png",
    slug: "/adventure/the-royal-heritage-trail-tour",
  },
  {
    title: "Mystical North India Discovery",
    desc: "Discover the mystical North India in 12 days with ‘Mystical North India Discovery,’ from Delhi to Varanasi, with timeless heritage and sculpted wonders in between.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529935/hero_vfhtr5.jpg",
    slug: "/destinations/mystical-north-india-discovery-tour",
  },
  {
    title: "Southern Splendors: Culture & Nature Trail Tour",
    desc: "Embark on a 19-day Southern Splendors journey from Mumbai to Hampi, experiencing history, coastal delights, nature’s majesty, and regal splendor.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535291/splander_rxivgm.png",
    slug: "/adventure/southern-splendors",
  },
];

export default function OdysseyRecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-12">

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
      <div className="grid md:grid-cols-3 gap-10 mb-10">

        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group"
          >
            <div
              className="
                bg-white rounded-sm
                shadow-sm
                border border-[#eee7dd]
                overflow-hidden
                transition-all duration-500
                hover:shadow-md
                hover:-translate-y-2
              "
            >

              {/* 🔥 Image */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                  "
                />

                {/* Overlay */}
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
                    text-[17px]
                    font-semibold
                    text-red-500
                    leading-snug
                    group-hover:underline
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