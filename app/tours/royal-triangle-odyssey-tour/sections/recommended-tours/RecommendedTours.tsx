"use client";

import Image from "next/image";
import Link from "next/link";

// Explore More India Heritage Tours data
const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534877/trail-tour_ypzior.png",
    alt: "Royal Heritage Trail Tour featuring Delhi Mandawa Jaipur and Agra heritage attractions",
    slug: "/tours/the-royal-heritage-trail-tour",
  },
  {
    title: "North India Tour Package",
    desc: "Discover North India from Delhi to Varanasi, exploring historic cities, heritage landmarks, cultural traditions, and spiritual experiences along the way.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529935/hero_vfhtr5.jpg",
    alt: "Mystical North India Discovery Tour covering Delhi Agra Khajuraho and Varanasi",
    slug: "/tours/mystical-north-india-discovery-tour",
  },
  {
    title: "Southern Splendors: Culture & Nature Trail Tour",
    desc: "Embark on a 19-day Southern Splendors journey from Mumbai to Hampi, experiencing history, coastal delights, nature's majesty, and regal splendor.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779535291/splander_rxivgm.png",
    alt: "Southern Splendors Tour featuring Mumbai Hampi Kerala and South India cultural attractions",
    slug: "/tours/southern-splendors-tour",
  },
];

export default function OdysseyRecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-12">
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
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group"
          >
            <div className="
              bg-white rounded-sm
              shadow-sm
              border border-[#eee7dd]
              overflow-hidden
              transition-all duration-500
              hover:shadow-md
              hover:-translate-y-2
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