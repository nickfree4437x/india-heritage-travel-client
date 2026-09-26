"use client";

import Image from "next/image";
import Link from "next/link";

export default function RecommendedTours() {
  // Explore More India Heritage Tours data
  const tours = [
    {
      title: "The Royal Heritage Trail Tour",
      desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529731/r1_urhezn.jpg",
      alt: "Rajasthan heritage tour featuring royal palaces historic forts and cultural landmarks",
      slug: "/tours/the-royal-heritage-trail-tour",
    },
    {
      title: "Mystical North India Discovery Tour",
      desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529759/r2_ijxsvn.jpg",
      alt: "North India cultural tour featuring Delhi Agra Jaipur and historic heritage attractions",
      slug: "/tours/mystical-north-india-discovery-tour",
    },
    {
      title: "Heritage Odyssey: North To South India Tour",
      desc: "Discover the essence of Southern India on the 'Southern Delights' 17-day tour, from Cochin's history to Mumbai's vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
      img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529784/r3_wapfho.webp",
      alt: "India heritage tour featuring cultural landmarks Kerala backwaters and historic destinations",
      slug: "/tours/heritage-odyssey-tour",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-8 py-10">
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
        {tours.map((tour, i) => (
          <Link
            key={i}
            href={tour.slug}
            className="
              block
              bg-white
              rounded-sm
              shadow-sm
              border border-[#eee7dd]
              overflow-hidden
              transition-all duration-500
              hover:shadow-md
              hover:-translate-y-2
              cursor-pointer
            "
          >
            {/* Tour Image */}
            <div className="relative h-[240px] w-full overflow-hidden group">
              <Image
                src={tour.img}
                alt={tour.alt}
                fill
                className="object-cover transition-transform duration-700"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Tour Content */}
            <div className="p-6 space-y-3">
              <h3 className="text-[17px] font-semibold text-red-500 leading-snug hover:underline">
                {tour.title}
              </h3>

              <p className="text-gray-700 text-[13px] font-light leading-relaxed line-clamp-4">
                {tour.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}