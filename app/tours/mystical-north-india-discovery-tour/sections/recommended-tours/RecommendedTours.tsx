"use client";

import Image from "next/image";
import Link from "next/link";

// Explore More India Heritage Tours data
const tours = [
  {
    title: "India Wildlife Tour – Heritage & Wildlife Experience",
    desc: "Explore India's heritage and wildlife on a journey covering Delhi, Rajasthan, Jaipur, Agra, and Ranthambore. Discover historic landmarks, royal heritage, cultural experiences, and thrilling wildlife adventures.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530718/tour1_sptbbx.webp",
    alt: "Ranthambore tiger safari and Rajasthan heritage attractions tour",
    slug: "/tours/journey-through-heritage-wildlife",
  },
  {
    title: "Golden Triangle & Varanasi Tour",
    desc: "Experience Delhi, Jaipur, Agra, and Varanasi on a memorable North India journey featuring iconic heritage landmarks, the Taj Mahal, royal architecture, spiritual traditions, and rich cultural experiences.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530743/tour2_peepxe.webp",
    alt: "Delhi Jaipur Agra and Varanasi heritage tour across North India",
    slug: "/tours/royal-triangle-odyssey-tour",
  },
  {
    title: "India Heritage Tour – North to South",
    desc: "Travel across India from North to South, exploring Delhi's historic landmarks, Ajanta's ancient rock-cut heritage, Mumbai's cultural attractions, and diverse traditions along the way.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779530772/tour3_vliois.webp",
    alt: "North to South India tour featuring Ajanta Caves Mumbai and cultural landmarks",
    slug: "/tours/heritage-odyssey-tour",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Section Heading */}
      <h2
        className="
          text-[20px] sm:text-[24px] md:text-[28px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-6 sm:mb-8
        "
      >
        Explore More India Heritage Tours
      </h2>

      {/* Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-10">
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
              {/* Tour Image */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={tour.img}
                  alt={tour.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Image Overlay */}
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

              {/* Tour Content */}
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