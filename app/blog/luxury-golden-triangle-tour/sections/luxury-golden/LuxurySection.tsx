"use client";

import Image from "next/image";

const cities = [
  {
    title: "Delhi",
    image:
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782281892/pexels-miheertewari-13256094_z17xae.jpg",
    alt: "India Gate and luxury experiences in Delhi",
    description:
      "The multi-layered capital where Mughal monuments, colonial boulevards, luxury hotels, and world-class dining come together.",
  },
  {
    title: "Agra",
    image:
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782281975/pexels-animesh-paul-150064-27125869_gslxen.jpg",
    alt: "Taj Mahal luxury travel experience in Agra",
    description:
      "Home to the Taj Mahal, Agra Fort, and Fatehpur Sikri, offering some of India's most iconic heritage experiences.",
  },
  {
    title: "Jaipur",
    image:
      "https://res.cloudinary.com/dja5yspwr/image/upload/v1782282135/pexels-ansh-yati-875278361-34649673_bwjsib.jpg",
    alt: "Luxury Rajasthan experience in Jaipur",
    description:
      "The Pink City of Rajasthan, famous for royal palaces, hilltop forts, heritage hotels, and vibrant culture.",
  },
];

export default function WhatIsLuxuryTourSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-0">
            What Is a Luxury Golden Triangle Tour?
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            India's most famous tourism circuit connects three extraordinary
            cities that showcase the country's rich history of empires,
            royalty, architecture, and culture.
          </p>
        </div>

        {/* City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-2 md:mb-4">
          {cities.map((city) => (
            <div key={city.title} className="overflow-hidden">
              <div className="relative h-[250px]">
                <Image
                  src={city.image}
                  alt={city.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-[16px] font-semibold text-[#2c2c2c] mb-2">
                  {city.title}
                </h3>

                <p className="text-[12px] sm:text-[13px] md:text-[13.5px] text-gray-700 leading-relaxed font-light">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            While the route on a luxury Golden Triangle tour remains the same,
            everything behind it is entirely different. Instead of traveling in
            large groups and following rigid schedules, luxury travel offers a
            completely personalized experience tailored around your interests,
            pace, and preferences.
          </p>
        </div>
      </div>
    </section>
  );
}