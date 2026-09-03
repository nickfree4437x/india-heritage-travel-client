"use client";

import Image from "next/image";
import Link from "next/link";

// ============================================================================
// DATA - Recommended Tours
// ============================================================================

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779525489/tour1_pkzz1n.webp",
    alt: "Royal Heritage Trail tour featuring Delhi Mandawa Jaipur Agra and Rajasthan heritage attractions",
    slug: "/tours/the-royal-heritage-trail-tour",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    desc: "Experience a 20-day journey through the heart of India on the 'Royal Rajasthan & Sacred Ganges' tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779525516/tour2_cjzckz.webp",
    alt: "Royal Rajasthan and Sacred Ganges tour covering Delhi Rajasthan Varanasi and cultural heritage destinations",
    slug: "/tours/royal-rajasthan-sacred-ganges-tour",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on the 'Southern Delights' 17-day tour, from Cochin's history to Mumbai's vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536598/delights_g6wjjy.jpg",
    alt: "Southern India tour package featuring Cochin Kerala backwaters Munnar and cultural attractions",
    slug: "/tours/southern-delights-tour",
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function RecommendedTours() {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-8 md:py-12">
      {/* ====================================================================
          SECTION HEADING
      ==================================================================== */}
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

      {/* ====================================================================
          TOURS GRID
      ==================================================================== */}
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {tours.map((tour, index) => (
          <Link key={index} href={tour.slug} className="block group">
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
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Image Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Tour Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-[17px] font-semibold text-red-500 leading-snug group-hover:underline">
                  {tour.title}
                </h3>

                <p className="text-gray-700 text-[13px] font-light leading-relaxed line-clamp-4">
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