"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779523352/coastal_uysoj5.jpg"
          alt="South India tour package featuring Kerala backwaters tea plantations and scenic landscapes"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay (SAME AS GOLDEN TRIANGLE) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 Image via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Title */}
        <h1
          className="max-w-[700px]
            text-3xl md:text-4xl
            font-[600]
            leading-[1.1]
            tracking-[0.04em]
            mb-4

            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]"
        >
          South India Tour <br/>Package
        </h1>
      </div>
    </section>
  );
}