"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/hero/hero1.jpg", "/hero/hero2.jpg", "/hero/hero3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Images */}

      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="India Travel"
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl animate-fadeUp">
          Discover the Magic of India
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-200 animate-fadeUp delay-200">
          Explore breathtaking destinations, cultural heritage, and luxury
          experiences with our handcrafted India tour packages.
        </p>

        {/* CTA Buttons */}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeUp delay-500">

          <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 px-8 py-3 rounded-full font-semibold transition duration-300">
            Explore Tours
          </button>

          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black hover:scale-105 transition duration-300">
            Plan Custom Trip
          </button>

        </div>

      </div>

    </section>
  );
}