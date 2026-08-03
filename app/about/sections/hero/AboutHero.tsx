"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785733983/satyam-bhardwaj-qnO1zuuRN7Q-unsplash_fmngdp.jpg"
          alt="Founders and team behind India Heritage Travel"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">
        <h1 className="
          max-w-[500px]
          text-3xl md:text-4xl
          font-[600]
          leading-[1.1]
          tracking-[0.04em]
          mb-4
          opacity-0 translate-y-10
          animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
        ">
          The Story Behind India Heritage Travel
        </h1>
        <p className="
          text-white
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-light
          leading-relaxed
          mb-6
        ">
          Driven by a passion for authentic travel, we create journeys that reveal the true spirit of India.
        </p>
      </div>
    </section>
  );
}