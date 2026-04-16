"use client";

import Image from "next/image";

export default function RoyalTriangleHero() {
  return (
    <section className="relative h-[80vh] w-full">

      {/* Background Image */}
      <Image
        src="/adventure/odyssey/triangle-hero.jpg"
        alt="Royal Triangle Odyssey"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Royal Triangle Odyssey
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-200">
          Discover the timeless charm of Delhi, Agra, and Jaipur in this iconic journey through India’s royal heritage.
        </p>

      </div>

    </section>
  );
}