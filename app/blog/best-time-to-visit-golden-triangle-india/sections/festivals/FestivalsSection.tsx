"use client";

import Image from "next/image";
import Link from "next/link";

// Festivals data with links (only Holi & Diwali have backlinks)
const festivals = [
  {
    title: "Diwali",
    period: "October / November",
    image:
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782139701/suchandra-roy-chowdhury-cM8X2DDvnGE-unsplash_qnzre5.jpg",
    description:
      "Experience the Festival of Lights as palaces, monuments, and city streets across Delhi, Agra, and Jaipur glow with millions of lamps, fireworks, and celebrations.",
    slug: "/festivals/diwali", // ✅ Backlink for Diwali
  },
  {
    title: "Holi",
    period: "March",
    image:
      "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547592/holi_cx2jwa.jpg",
    description:
      "Witness India's most colorful festival as Jaipur and nearby regions come alive with music, celebrations, and vibrant clouds of color.",
    slug: "/festivals/holi", // ✅ Backlink for Holi
  },
  {
    title: "Jaipur Literature Festival",
    period: "January",
    image:
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782139816/22.06.2026_20.19.48_REC_u6tynv.png",
    description:
      "Join writers, thinkers, artists, and travelers from around the world at one of the most respected literary festivals globally.",
    slug: null, // ❌ No backlink
  },
  {
    title: "Republic Day",
    period: "26 January",
    image:
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782225354/vikram-chouhan-udaipur-web-designer-9mUD8FKhvgc-unsplash_rtrscw.jpg",
    description:
      "Witness India's grand national celebration in Delhi featuring spectacular parades, military displays, and cultural performances.",
    slug: null, // ❌ No backlink
  },
];

export default function FestivalsSection() {
  return (
    <section className="w-full bg-white py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="
            text-[20px] sm:text-[24px] md:text-[26px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            Festivals That Make the Golden Triangle More Special
          </h2>

          <p className="
            text-gray-700
            text-[12px] sm:text-[13px] md:text-[14.5px]
            font-light
            leading-relaxed
            max-w-4xl
          ">
            Weather is only one part of choosing the best time to visit the
            Golden Triangle. Festivals can completely transform your experience,
            adding celebrations, traditions, colors, and cultural moments that
            many travelers remember long after the monuments themselves.
          </p>
        </div>

        {/* Festival Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {festivals.map((festival) => {
            // Check if festival has a slug (backlink)
            const isClickable = festival.slug !== null;

            // Card content
            const cardContent = (
              <div className="
                border border-[#e7dfd4]
                rounded-sm
                overflow-hidden
                bg-white
                hover:shadow-sm
                transition-all duration-300
                h-full
                group
              ">
                {/* Festival Image */}
                <div className="relative h-[240px] sm:h-[280px] md:h-[260px] overflow-hidden">
                  <Image
                    src={festival.image}
                    alt={`${festival.title} Festival in India`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Image Overlay */}
                  {isClickable && (
                    <div className="
                      absolute inset-0
                      bg-black/10
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-300
                    " />
                  )}
                </div>

                {/* Festival Content */}
                <div className="p-5 sm:p-6">
                  <span className="
                    inline-flex
                    items-center
                    px-3 py-1
                    rounded-full
                    bg-[#AF956C]/10
                    text-[#AF956C]
                    text-[11px]
                    mb-3
                  ">
                    {festival.period}
                  </span>

                  <h3 className={`
                    text-[16px] sm:text-[17px]
                    font-semibold
                    text-[#2c2c2c]
                    mb-3
                    ${isClickable ? ' cursor-pointer' : ''}
                    transition-colors duration-300
                  `}>
                    {festival.title}
                  </h3>

                  <p className="
                    text-[12px] sm:text-[13px] md:text-[14px]
                    text-gray-700
                    leading-relaxed
                    font-light
                  ">
                    {festival.description}
                  </p>
                </div>
              </div>
            );

            // If clickable (Holi or Diwali), wrap with Link
            if (isClickable) {
              return (
                <Link
                  key={festival.title}
                  href={festival.slug!}
                  className="block"
                >
                  {cardContent}
                </Link>
              );
            }

            // If not clickable, render without Link
            return (
              <div key={festival.title} className="block">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}