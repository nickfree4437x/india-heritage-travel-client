"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    image: "/festivals/holi/holi1.jpg",
    title: "Join pre-Holi celebrations and rituals",
    desc: "Experience pre-Holi celebration filled with folk rituals, Gidad performances, and a deep sense of tradition.",
  },
  {
    image: "/festivals/holi/holi-female.jpeg",
    title: "Experience unique Holi traditions",
    desc: "Celebrate Holi the traditional way — with village rituals, folk dress, and local rhythms.",
  },
  {
    image: "/festivals/holi/holi3.jpeg",
    title: "Celebrate Holi like a Local",
    desc: "Dressed in white kurtas and colorful turbans, guests celebrate Holi the local way — with joy, color, and community.",
  },
  {
    image: "/festivals/holi/camel-safari.jpg",
    title: "Camel Riding & Bonfire at the desert",
    desc: "Ride through the Thar as the sun sets, then enjoy folk music, dancing, and a starlit bonfire in the dunes of Jaisalmer.",
  },
  {
    image: "/festivals/holi/udaipur.jpg",
    title: "Lakeside romance of Udaipur",
    desc: "Enjoy a peaceful boat ride on Lake Pichola with stunning views of palaces and cityscapes.",
  },
  {
    image: "/festivals/holi/jodhpur.jpg",
    title: "Colours of the Blue City",
    desc: "Wander through Jodhpur's old town, past blue-washed homes, spice markets, and the towering Mehrangarh Fort above.",
  },
  {
    image: "/festivals/holi/jaipur.jpg",
    title: "Pink City's Royalty",
    desc: "Admire Hawa Mahal's unique windows, built to let in cool air and city views for the royal women.",
  },
  {
    image: "/festivals/holi/taj.jpg",
    title: "Timeless Beauty of the Taj",
    desc: "Visit the Taj Mahal a white marble wonder and symbol of eternal love, glowing at sunrise.",
  },
];

export default function SpecialSection() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, index]);

  return (
    <section className="bg-[#f4f0ea] py-12 sm:py-16 md:py-20" id="special">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] text-center tracking-wide text-[#2c2c2c] font-semibold mb-8 sm:mb-10 md:mb-12">
          What makes this trip Special?
        </h2>

        {/* SLIDER CONTAINER */}
        <div 
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-black/5"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          
          {/* FIXED HEIGHT SLIDER */}
          <div className="relative h-[450px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden">
            
            {data.map((item, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-out
                  ${i === index
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0"
                  }`}
              >
                {/* IMAGE */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={i === 0}
                    className="object-cover"
                    sizes="100vw"
                  />
                  
                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 md:p-12 lg:p-16">
                  <div className="max-w-4xl mx-auto text-center">
                    <h3
                      className={`text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-white mb-4 sm:mb-5 leading-tight
                      transition-all duration-500 delay-200
                      ${i === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs text-gray-200 leading-relaxed max-w-3xl mx-auto
                      transition-all duration-500 delay-300
                      ${i === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* LEFT BUTTON */}
            <button
              onClick={prev}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20
                         bg-white/90 hover:bg-white backdrop-blur-sm
                         w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300 hover:scale-110
                         flex items-center justify-center
                         focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20
                         bg-white/90 hover:bg-white backdrop-blur-sm
                         w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                         shadow-lg hover:shadow-2xl
                         transition-all duration-300 hover:scale-110
                         flex items-center justify-center
                         focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </button>

            {/* DOTS */}
            <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-300 rounded-full cursor-pointer
                    ${i === index
                      ? "w-10 sm:w-12 h-1.5 sm:h-2 bg-white shadow-md"
                      : "w-3 sm:w-4 h-1.5 sm:h-2 bg-white/40 hover:bg-white/60"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* SLIDE COUNTER */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 
                            bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white text-xs sm:text-sm font-medium">
                {String(index + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}