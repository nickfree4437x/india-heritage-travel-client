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

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f4f0ea] pt-20 pb-10" id="special">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#2c2c2c] tracking-wide">
          What makes this trip Special?
        </h2>

        {/* SLIDER */}
        <div className="relative h-[500px] overflow-hidden">

          {data.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  i === index
                    ? "opacity-100 translate-x-0 z-10"
                    : i < index
                    ? "opacity-0 -translate-x-10 z-0"
                    : "opacity-0 translate-x-10 z-0"
                }`}
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover scale-[1.05] transition-transform duration-[6000ms] ease-linear"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

              {/* CONTENT */}
              <div className="absolute bottom-12 left-8 md:left-12 text-white max-w-xl">

                <h3
                  className={`text-2xl md:text-3xl font-semibold mb-3
                  transition-all duration-[1000ms] delay-200
                  ${
                    i === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm md:text-base text-gray-200 leading-relaxed
                  transition-all duration-[1000ms] delay-400
                  ${
                    i === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 
                       bg-white/80 backdrop-blur-sm 
                       p-2 rounded-full 
                       hover:scale-110 transition duration-300"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 
                       bg-white/80 backdrop-blur-sm 
                       p-2 rounded-full 
                       hover:scale-110 transition duration-300"
          >
            <ChevronRight />
          </button>

          {/* DOTS */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {data.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-[6px] rounded-full cursor-pointer transition-all duration-300
                  ${
                    i === index
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}