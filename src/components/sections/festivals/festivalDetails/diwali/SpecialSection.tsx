"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    image: "/festivals/diwali/diwali1.jpg",
    title: "Festival of Lights",
    desc: "Witness India glowing with millions of diyas, candles, and lights.",
  },
  {
    image: "/festivals/diwali/diwali2.jpg",
    title: "Traditional Feasts",
    desc: "Enjoy festive meals, sweets, and authentic Indian cuisine.",
  },
  {
    image: "/festivals/diwali/diwali3.jpg",
    title: "Spiritual Rituals",
    desc: "Experience Lakshmi Puja and ancient traditions up close.",
  },
  {
    image: "/festivals/diwali/diwali4.jpg",
    title: "Heritage Architecture",
    desc: "Explore beautifully lit palaces and historic monuments.",
  },
  {
    image: "/festivals/diwali/diwali5.jpg",
    title: "Desert & Culture",
    desc: "Celebrate Diwali with cultural performances and desert vibes.",
  },
  {
    image: "/festivals/diwali/diwali6.jpg",
    title: "Ganga Aarti Experience",
    desc: "Feel the divine energy during evening aarti ceremonies.",
  },
  {
    image: "/festivals/diwali/diwali7.jpg",
    title: "Taj Mahal Visit",
    desc: "Visit one of the world’s wonders during festive season.",
  },
];

export default function SpecialSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#f4f0ea]" id="special">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
          What makes this trip Special?
        </h2>

        {/* Carousel */}
        <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-md">

          {data.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                i === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center"
                priority={i === 0}
              />

              {/* Overlay (improved gradient) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-10 left-10 text-white max-w-lg">

                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-gray-200">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

          {/* Left Button */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 
                       bg-white/80 hover:bg-white 
                       p-3 rounded-full shadow transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Button */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 
                       bg-white/80 hover:bg-white 
                       p-3 rounded-full shadow transition"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}