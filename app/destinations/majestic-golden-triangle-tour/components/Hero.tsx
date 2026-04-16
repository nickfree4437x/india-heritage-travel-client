"use client";

import Image from "next/image";
import { goldenTriangleDetails } from "../data/tourData";

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full">

      {/* Background Image */}
      <Image
        src="/golden-triangle.jpg"
        alt="Golden Triangle Tour"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {goldenTriangleDetails.title}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-6 text-gray-200">
          {goldenTriangleDetails.content}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#c29d59] hover:bg-[#a88445] px-6 py-3 rounded-full text-white font-medium transition">
            Book Now
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore
          </button>
        </div>

      </div>

    </section>
  );
}