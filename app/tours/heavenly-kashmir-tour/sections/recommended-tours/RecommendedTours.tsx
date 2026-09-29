"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Explore Rajasthan through royal palaces, historic forts, vibrant culture, traditional cities, and rich heritage experiences.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779527998/heritage_b4eaqj.jpg",
    alt: "Rajasthan heritage tour featuring royal palaces historic forts and vibrant cultural experiences",
    slug: "/tours/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Divine Kashmir and Exciting Ladakh",
    desc: "Discover Kashmir and Ladakh through scenic valleys, Himalayan landscapes, monasteries, Pangong Lake, Nubra Valley, and unforgettable cultural experiences.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540225/kashmir_enxzcl.jpg",
    alt: "Kashmir and Ladakh tour featuring Himalayan mountains scenic valleys and breathtaking landscapes",
    slug: "/tours/divine-kashmir-and-exciting-ladakh",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover South India through Kerala backwaters, tea plantations, historic temples, scenic landscapes, and vibrant cultural experiences.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779536598/delights_g6wjjy.jpg",
    alt: "South India tour featuring Kerala backwaters tea plantations temples and cultural landmarks",
    slug: "/tours/southern-delights-tour",
  },
];

export default function RecommendedTours() {
  return (

    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-10">

      {/* 🔹 HEADING */}
      <h2
        className="
          text-[20px] sm:text-[24px] md:text-[28px]
          font-semibold
          text-center
          mb-8 sm:mb-10 md:mb-12
          text-[#2c2c2c]
          tracking-wide
        "
      >
        Explore More India Heritage Tours
      </h2>

      {/* 🔹 CARDS GRID */}
      <div
        className="
          grid grid-cols-1
          md:grid-cols-3

          gap-8 md:gap-10
        "
      >

        {tours.map((tour, index) => (
          <Link
            key={index}
            href={tour.slug}
            className="block group mb-10"
          >

            {/* 🔥 CARD */}
            <div
              className="
                bg-white
                rounded-md
                shadow-sm
                border border-[#eee7dd]

                overflow-hidden

                transition-all duration-500

                hover:shadow-md
                hover:-translate-y-1
              "
            >

              {/* 🔥 IMAGE */}
              <div className="relative h-[240px] w-full overflow-hidden">

                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  className="
                    object-cover

                    transition-transform duration-700
                  "
                />

                {/* 🔥 OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-black/10

                    opacity-0
                    group-hover:opacity-100

                    transition duration-500
                  "
                />

              </div>

              {/* 🔥 CONTENT */}
              <div className="p-5 sm:p-6 space-y-3">

                {/* TITLE */}
                <h3
                  className="
                    text-[17px] font-semibold text-red-500 leading-snug group-hover:underline
                  "
                >
                  {tour.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-[12px] sm:text-[13px]
                    text-gray-700
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