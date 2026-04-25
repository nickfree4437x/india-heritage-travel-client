"use client";

import Image from "next/image";
import { rajasthanDetails } from "../data/tourData";

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">

      {/* 🔥 Background Image (Smooth Zoom Animation) */}
      <Image
        src="/rajasthan.jpg"
        alt="Rajasthan Tour"
        fill
        priority
        className="object-cover scale-105 animate-[zoomSlow_20s_ease-in-out_infinite]"
      />

      {/* 🔥 Dark Overlay (Premium Look) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 🔥 Gradient Overlay (Depth Add) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* 🔥 Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">

        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5 tracking-wide">
            {rajasthanDetails.title}
          </h1>

          <p className="text-lg md:text-lg text-gray-200 leading-relaxed">
            {rajasthanDetails.content}
          </p>

        </div>

      </div>

    </section>
  );
}