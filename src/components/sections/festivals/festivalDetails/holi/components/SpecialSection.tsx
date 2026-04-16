"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    image: "/festivals/holi/holi1.jpg",
    title: "Vibrant Holi Celebrations",
    desc: "Experience the joy of colors, music, and energy like never before.",
  },
  {
    image: "/festivals/holi/holi2.jpg",
    title: "Local Cultural Immersion",
    desc: "Celebrate with locals and feel the true spirit of Rajasthan.",
  },
  {
    image: "/festivals/holi/holi3.jpg",
    title: "Desert Adventure",
    desc: "Camel rides and golden sunsets in the vast Thar desert.",
  },
  {
    image: "/festivals/holi/holi4.jpg",
    title: "Udaipur Views",
    desc: "Peaceful lakes and royal palaces create magical moments.",
  },
  {
    image: "/festivals/holi/holi5.jpg",
    title: "Blue City Walk",
    desc: "Explore the iconic blue streets of Jodhpur.",
  },
  {
    image: "/festivals/holi/holi6.jpg",
    title: "Pink City Wonders",
    desc: "Discover Jaipur’s rich heritage and architecture.",
  },
  {
    image: "/festivals/holi/holi7.jpg",
    title: "Taj Mahal Visit",
    desc: "Witness one of the world’s most beautiful monuments.",
  },
];

export default function SpecialSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + data.length) % data.length);

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#f4f0ea]" id="special">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#9b7a50] mb-12">
          What makes this trip Special?
        </h2>

        {/* Carousel */}
        <div className="relative h-[450px] overflow-hidden rounded-xl">

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
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="absolute bottom-10 left-10 text-white max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
}