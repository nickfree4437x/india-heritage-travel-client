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
    title: "A Journey Through Heritage & Wildlife",
    desc: "Embark on a 13-day odyssey through heritage and wildlife on the ‘A Journey Through Heritage & Wildlife’ tour, from the captivating blend of history in Delhi to the wildlife wonders of Ranthambore, desert charm, and regal splendor.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779532950/hero_xrxpym.jpg",
    slug: "/adventure/journey-through-heritage-wildlife",
  },
  {
    title: "Southern Splendors: Culture & Nature Trail",
    desc: "Embark on a 19-day ‘Southern Splendors: Culture & Nature Trail’ from Mumbai’s vibrant dreams to the rich cultural tapestry of Hampi, experiencing history, coastal delights, nature’s majesty, and regal splendor in between.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535291/splander_rxivgm.png",
    slug: "/adventure/southern-splendors",
  },
];

export default function RecommendedTours() {
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