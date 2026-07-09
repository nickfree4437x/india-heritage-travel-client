"use client";

import Image from "next/image";
import Link from "next/link";

// Explore more tours data
const tours = [
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547715/diwali_yi6jku.jpg",
    title: "Diwali Festival Tour",
    days: "Days : 20",
    desc: "Step into the warmth of India's Festival of Lights – come celebrate Diwali the local way.",
    link: "/festivals/diwali",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547592/holi_cx2jwa.jpg",
    title: "Holi Festival Tour",
    days: "Days : 16",
    desc: "Celebrate Holi with locals through colours, music, and tradition.",
    link: "/festivals/holi",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779547787/Pushkar_k4ugcf.png",
    title: "Pushkar Camel Carnival",
    days: "Days : 16",
    desc: "Experience India's most vibrant desert fair – with camels, color, and culture.",
    link: "/festivals/pushkar",
  },
];

export default function ExploreMoreSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Explore More Festival Tours in India
        </h2>

        {/* Subheading */}
        <p className="
          text-[12.5px] sm:text-[13.5px] md:text-[14px]
          font-light
          max-w-[580px]
          mx-auto
          text-[#8b6a3d]
          mb-4
        ">
          Discover more festival tours in India, including Diwali, Holi, and Pushkar Camel Fair cultural experiences.
        </p>

        {/* Tour Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {tours.map((tour, i) => (
            <Link key={i} href={tour.link} className="group block">
              <div className="
                bg-white
                border border-[#eee7dd]
                rounded-md
                overflow-hidden
                shadow-sm
                transition-all duration-300 ease-out
                hover:shadow-md hover:-translate-y-1
              ">
                {/* Tour Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Image Overlay */}
                  <div className="
                    absolute inset-0
                    bg-black/5
                    opacity-0
                    group-hover:opacity-100
                    transition duration-300
                  " />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  {/* Title */}
                  <h3 className="
                    text-sm
                    font-semibold
                    tracking-[0.10em]
                    text-[#9b7a50]
                    mb-3
                    leading-relaxed
                  ">
                    {tour.title}
                  </h3>

                  {/* Days */}
                  <p className="text-xs tracking-[0.10em] text-gray-700 mb-4">
                    {tour.days}
                  </p>

                  {/* Description */}
                  <p className="
                    leading-relaxed
                    text-[12px] sm:text-[13px] md:text-[14px]
                    font-light
                    text-gray-600
                    mb-6
                    line-clamp-3
                  ">
                    {tour.desc}
                  </p>

                  {/* CTA Button */}
                  <span className="
                    inline-block
                    border border-[#9b7a50]
                    text-[#9b7a50]
                    px-5 py-2
                    text-xs
                    tracking-[0.10em]
                    rounded-md
                    transition-all duration-300
                    hover:bg-[#9b7a50] hover:text-white
                  ">
                    Explore Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}