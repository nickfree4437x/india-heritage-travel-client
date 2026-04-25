"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    image: "/festivals/pushkar/p1.jpg",
    title: "Vibrant Local Culture",
    desc: "Experience colorful traditions, attire, and local Rajasthani life.",
  },
  {
    image: "/festivals/pushkar/p2.jpg",
    title: "Handcrafted Markets",
    desc: "Shop unique handicrafts, jewelry, and festive souvenirs.",
  },
  {
    image: "/festivals/pushkar/p3.jpg",
    title: "Desert Traditions",
    desc: "Witness age-old rituals and traditional desert lifestyles.",
  },
  {
    image: "/festivals/pushkar/p4.jpg",
    title: "Camel Safari",
    desc: "Ride through golden dunes and experience desert sunsets.",
  },
  {
    image: "/festivals/pushkar/p5.jpg",
    title: "Lakeside Views",
    desc: "Relax by Pushkar Lake with spiritual and scenic beauty.",
  },
  {
    image: "/festivals/pushkar/p6.jpg",
    title: "Blue City Walk",
    desc: "Explore narrow streets and iconic blue architecture.",
  },
  {
    image: "/festivals/pushkar/p7.jpg",
    title: "Heritage Wonders",
    desc: "Visit grand forts, palaces, and architectural marvels.",
  },
  {
    image: "/festivals/pushkar/p8.jpg",
    title: "Taj Mahal Visit",
    desc: "End your journey with a visit to one of the world’s wonders.",
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

              {/* Overlay */}
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