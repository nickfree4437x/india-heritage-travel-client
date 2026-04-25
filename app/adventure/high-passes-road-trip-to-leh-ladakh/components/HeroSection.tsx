"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[91vh] w-full overflow-hidden">

      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="/adventure/ladakh/hero.jpg"
          alt="Adventure Through High Passes: Road Trip to Leh-Ladakh"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4
                       opacity-0 translate-y-10
                       animate-[fadeUp_1.2s_ease-out_0.3s_forwards]">
          Adventure Through High Passes:<br></br> Road Trip to Leh-Ladakh
        </h1>

      </div>

    </section>
  );
}