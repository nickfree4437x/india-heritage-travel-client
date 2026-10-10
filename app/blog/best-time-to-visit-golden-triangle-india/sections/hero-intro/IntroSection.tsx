"use client";

import Image from "next/image";
import Link from "next/link";
import {Clock, ArrowRight } from "lucide-react";

export default function IntroSection() {
  // City data with images
  const cities = [
    {
      name: "Delhi",
      description:
        "India's capital city, known for Mughal monuments, colonial architecture and modern urban energy.",
      image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782111577/sagar-dwivedi-iR9xWm1JK20-unsplash_y9budl.jpg",
      link: "/tours/the-royal-heritage-trail-tour",
    },
    {
      name: "Agra",
      description:
        "Home to the Taj Mahal, Agra Fort, and Fatehpur Sikri - three of India's most celebrated Mughal landmarks.",
      image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782111489/hitesh-kapoor-VIfemIk89UY-unsplash_smnff2.jpg",
      link: "/tours/heritage-odyssey-tour",
    },
    {
      name: "Jaipur",
      description:
        "Rajasthan's Pink City, famous for its hilltop forts, royal palaces, colorful bazaars, and cultural heritage.",
      image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782111714/naman-pandey-Iya5bn212xA-unsplash_nlrgdb.jpg",
      link: "/tours/majestic-golden-triangle-tour",
    },
  ];

  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== INTRODUCTION ===== */}
        <div className="mb-6 sm:mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-bold mb-2">
            Best Time to Visit the Golden Triangle
          </h2>

          {/* Intro paragraphs with styling */}
          <div className="space-y-4">
            <div className="relative border-[#c9a45c]/30 hover:border-[#c9a45c] transition-colors duration-300">
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                There is a certain light that bathes the Taj Mahal shortly after sunrise  -  gentle, rose gold, and fleeting. It's as if the marble were breathing. Mist rises from the waters of the Yamuna River, monkeys screech in the gardens, and for a few precious minutes, one of the world's most photographed monuments feels almost entirely your own.
              </p>
            </div>
          </div>
        </div>

        {/* ===== WHAT IS GOLDEN TRIANGLE ===== */}
        <div>
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-2">
            <div>
              <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-bold">
                What Is the Golden Triangle Tour?
              </h2>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light mb-6">
            The Golden Triangle is India's most iconic travel circuit, connecting{' '}
            <Link href="/tours/the-royal-heritage-trail-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
              Delhi
            </Link>
            ,{' '}
            <Link href="/tours/heritage-odyssey-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
              Agra
            </Link>
            , and{' '}
            <Link href="/tours/majestic-golden-triangle-tour" className="text-[#c9a45c] hover:text-[#a8843a] hover:underline transition-colors duration-200">
              Jaipur
            </Link>
            . Together these three historic cities showcase the country's rich blend of Mughal architecture, Rajput heritage, royal palaces, UNESCO World Heritage Sites, vibrant culture, and timeless traditions.
          </p>

          {/* City Cards with Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
            {cities.map((city, idx) => (
              <Link
                key={idx}
                href={city.link}
                className="group block overflow-hidden transition-all duration-300 hover:border-[#c9a45c]/30"
              >
                {/* Image Container */}
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={city.image}
                    alt={`${city.name} - Golden Triangle destination`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 Image via-black/20 to-transparent" />
                  
                  {/* City Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-[20px] font-bold text-white">
                      {city.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-2">
                  <p className="text-gray-600 text-[12px] sm:text-[13px] leading-relaxed font-light text-justify">
                    {city.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[#c9a45c] text-[11px] group-hover:gap-2 transition-all duration-300">
                    <span>Explore {city.name} Tour</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}