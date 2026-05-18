"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="/adventure/splendors/splander.jpg"
          alt="Southern Splendors"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Heading */}
        <h1
          className="
            max-w-[700px]
            text-3xl md:text-4xl
            font-[600]
            leading-[1.1]
            tracking-[0.04em]
            mb-4

            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          Southern Splendors: Culture & <br />
          Nature Trail Tour
        </h1>

      </div>

    </section>
  );
}