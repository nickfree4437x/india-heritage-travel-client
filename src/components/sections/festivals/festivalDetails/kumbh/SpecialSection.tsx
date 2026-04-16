"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "/festivals/kumbh/1.jpg",
    title: "Sacred Rituals",
    desc: "Witness ancient rituals performed on the banks of holy rivers.",
  },
  {
    img: "/festivals/kumbh/2.jpg",
    title: "Sadhus & Saints",
    desc: "Meet spiritual seekers living a life beyond material world.",
  },
  {
    img: "/festivals/kumbh/3.jpg",
    title: "Holy River Experience",
    desc: "Take a sacred dip believed to cleanse lifetimes of sins.",
  },
  {
    img: "/festivals/kumbh/4.jpg",
    title: "Mass Pilgrimage",
    desc: "Be part of the world’s largest spiritual gathering.",
  },
  {
    img: "/festivals/kumbh/5.jpg",
    title: "Spiritual Energy",
    desc: "Feel the chants, devotion, and vibrations around you.",
  },
  {
    img: "/festivals/kumbh/6.jpg",
    title: "Cultural Exploration",
    desc: "Explore temples, traditions, and spiritual heritage.",
  },
];

export default function SpecialSection() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#f4f0ea]" id="special">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#9b7a50] mb-10">
          What makes this trip Special?
        </h2>

        {/* Slider */}
        <div className="flex h-[400px] overflow-hidden rounded-xl">

          {slides.map((slide, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className={`relative transition-all duration-500 cursor-pointer ${
                active === index ? "flex-[3]" : "flex-[1]"
              }`}
            >
              {/* Image */}
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div
                className={`absolute bottom-0 p-4 text-white transition-all duration-500 ${
                  active === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm">{slide.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}