"use client";

import Image from "next/image";
import { useState } from "react";

const regions = [
  {
    title: "East India",
    description:
      "Step into a culturally rich, less-traveled side of India raw, real, and ready to explore.",
    image: "/customize-journey/east.jpg",
    button: "CUSTOMIZE EAST INDIA JOURNEY",
  },
  {
    title: "South India",
    description:
      "Explore lands where tradition meets tranquility temples, tea hills, and coastal breezes await.",
    image: "/customize-journey/south.webp",
    button: "CUSTOMIZE SOUTH INDIA JOURNEY",
  },
  {
    title: "North India",
    description:
      "Wander through royal cities, holy lands, and Himalayan hideaways all on your terms.",
    image: "/customize-journey/north.jpg",
    button: "CUSTOMIZE NORTH INDIA JOURNEY",
  },
  {
    title: "Central India",
    description:
      "Travel into India's core home to majestic wildlife, mystic traditions, and lost civilizations.",
    image: "/customize-journey/central.webp",
    button: "CUSTOMIZE CENTRAL INDIA JOURNEY",
  },
  {
    title: "West India",
    description:
      "Explore the dramatic contrasts of West India bustling bazaars, serene beaches, and desert marvels.",
    image: "/customize-journey/west.jpg",
    button: "CUSTOMIZE WEST INDIA JOURNEY",
  },
  {
    title: "Nepal",
    description:
      "Trace the spirit of Nepal across prayer-flag-lined trails, golden stupas, and peaceful mountain villages.",
    image: "/customize-journey/nepal.jpg",
    button: "CUSTOMIZE NEPAL JOURNEY",
  },
];

export default function RegionsSection() {

  const [hoveredIndex, setHoveredIndex] =
    useState<number | null>(null);

  // SCROLL TO FORM
  const scrollToForm = () => {

    const section =
      document.getElementById("customize-form");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };

  return (

    <section className="w-full bg-[#f5f3ef] py-12 md:py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-14">

          <h2
            className="
              relative
              inline-block
              text-[20px] sm:text-[24px] md:text-[26px]
              font-semibold
              text-[#8b6a3d]
              tracking-wide
              mb-3
            "
          >
            Design Your Trip, Region by Region

            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-[#8b6a3d]/30 rounded-full" />

          </h2>

          <p
            className="
              text-[#5a5a5a]
              text-[13px] sm:text-[14px] md:text-[13.5px]
              leading-relaxed
              max-w-2xl
              mx-auto
              font-light
            "
          >
            Click on a region to uncover its hidden gems,
            traditions, and local flavor.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">

          {regions.map((region, index) => (

            <div
              key={index}
              onClick={scrollToForm}
              onMouseEnter={() =>
                setHoveredIndex(index)
              }
              onMouseLeave={() =>
                setHoveredIndex(null)
              }
              className="
                relative
                h-[300px]
                lg:h-[350px]
                overflow-hidden
                rounded-sm
                group
                cursor-pointer
                select-none
                shadow-sm
                transition-all
                duration-500
                ease-out
              "
            >

              {/* IMAGE */}
              <Image
                src={region.image}
                alt={region.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="
                  object-cover
                  transition-all
                  duration-[2000ms]
                  ease-out
                  group-hover:scale-105
                "
                priority={index < 3}
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/40
                  to-black/10
                  group-hover:from-black/85
                  group-hover:via-black/50
                  transition-all
                  duration-500
                "
              />

              {/* DECORATIVE CORNERS */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20 rounded-tr-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-8">

                {/* TITLE */}
                <div className="relative">

                  <h2
                    className="
                      text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]
                      font-semibold
                      text-white
                      tracking-wide
                      mb-2
                      transform
                      transition-all
                      duration-300
                    "
                  >
                    {region.title}
                  </h2>

                </div>

                {/* DESCRIPTION */}
                <p
                  className="
                    mt-6
                    text-white/90
                    text-[13px]
                    md:text-[14px]
                    leading-[1.8]
                    max-w-sm
                    font-light
                    transform
                    transition-all
                    duration-300
                    delay-75
                  "
                >
                  {region.description}
                </p>

                {/* BUTTON */}
                <button
                  className="
                    mt-12
                    min-w-[260px]
                    sm:min-w-[270px]
                    h-[44px]
                    sm:h-[48px]
                    px-6
                    sm:px-8
                    bg-[#a67c47]/95
                    hover:bg-[#8b6a3d]
                    text-white
                    uppercase
                    whitespace-nowrap
                    tracking-[0.01em]
                    text-[10px]
                    sm:text-[11px]
                    rounded-lg
                    transition-all
                    duration-300
                    backdrop-blur-sm
                    hover:border-white/40
                    flex
                    items-center
                    justify-center
                    shadow-sm
                    transform
                    gap-2
                    group/btn
                  "
                >
                  <span>{region.button}</span>
                </button>

              </div>

              {/* SHIMMER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}