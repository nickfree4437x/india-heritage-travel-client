"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Explore the beautiful landscapes and rich culture of this region.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779527998/heritage_b4eaqj.jpg",
    alt: "Rajasthan heritage tour featuring royal palaces historic forts and cultural experiences",
    slug: "/tours/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Royal-Triangle-Odyssey",
    desc: "Experience tours and breathtaking views on this thrilling tour.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779534877/trail-tour_ypzior.png",
    alt: "North India cultural tour featuring Rajasthan heritage sites and the sacred Ganges River",
    slug: "/tours/royal-rajasthan-sacred-ganges-tour",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536598/delights_g6wjjy.jpg",
    alt: "South India tour featuring Kerala backwaters temples tea plantations and cultural landmarks",
    slug: "/tours/southern-delights-tour",
  },
];

export default function RecommendedTours() {
  return (

    <section
      className="
        max-w-[1400px]
        mx-auto
        px-4 sm:px-6
        py-8 sm:py-10 md:py-14
      "
    >

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
      <div
        className="
          grid grid-cols-1 md:grid-cols-3
          gap-6 sm:gap-8 md:gap-10
          mb-4 sm:mb-6
        "
      >

        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group mb-10"
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
              <div
                className="
                  relative
                  h-[220px] sm:h-[240px]
                  w-full
                  overflow-hidden
                "
              >

                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                  "
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
              <div
                className="
                  p-5 sm:p-6
                  space-y-3
                "
              >

                <h3
                  className="
                    text-[16px] sm:text-[17px]
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