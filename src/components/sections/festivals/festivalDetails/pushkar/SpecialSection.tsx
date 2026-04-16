"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [active, setActive] = useState(0);

  // 🔥 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#f4f0ea]" id="special">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#9b7a50] mb-12">
          What makes this trip Special?
        </h2>

        {/* STRIP SLIDER */}
        <div className="flex h-[420px] overflow-hidden rounded-xl">

          {data.map((item, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                className={`relative transition-all duration-700 ease-in-out cursor-pointer ${
                  isActive ? "w-[40%]" : "w-[8%]"
                }`}
                onClick={() => setActive(i)}
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

                {/* Content (only active) */}
                {isActive && (
                  <div className="absolute bottom-6 left-6 text-white max-w-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-90">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}