"use client";

import Image from "next/image";
import Link from "next/link";

// Recommended tours data
const tours = [
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Indulge in a 16-day 'Rajasthani Heritage Retreat' through Delhi's history, timeless beauty in Mandawa, desert tales in Jaisalmer, and a journey of romance and regal splendor in Udaipur, all while exploring the rich heritage of Rajasthan.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779527998/heritage_b4eaqj.jpg",
    alt: "Rajasthani Heritage Retreat tour package featuring Jaipur Udaipur Jaisalmer and Rajasthan cultural attractions",
    slug: "/tours/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    desc: "Experience a 20-day journey through the heart of India on the 'Royal Rajasthan & Sacred Ganges' tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779539943/tour2_wqd4x6.webp",
    alt: "Royal Rajasthan and Sacred Ganges tour covering Delhi Rajasthan and Varanasi heritage destinations",
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

export default function RecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Section Heading */}
      <h2 className="
        text-[20px] sm:text-[24px] md:text-[28px]
        font-semibold
        text-center
        text-[#2c2c2c]
        tracking-wide
        mb-6 sm:mb-8
      ">
        Recommended Tours
      </h2>

      {/* Tour Cards */}
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        {tours.map((tour, index) => (
          <Link key={index} href={tour.slug} className="block group">
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
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
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