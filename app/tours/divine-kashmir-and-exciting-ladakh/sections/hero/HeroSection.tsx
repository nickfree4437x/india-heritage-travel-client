"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779540225/kashmir_enxzcl.jpg"
          alt="Kashmir and Ladakh tour package featuring Himalayan mountains scenic valleys and breathtaking landscapes"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        <h1 
          className="
            w-full
            max-w-[95%] sm:max-w-[650px] md:max-w-[750px]
            
            text-[22px] xs:text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px]
            
            font-[600]
            leading-[1.2] sm:leading-[1.15] md:leading-[1.1]
            
            tracking-[0.02em] sm:tracking-[0.03em] md:tracking-[0.04em]
            
            mb-4
            text-center
            
            break-words
    
            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          <span className="block">Kashmir & Ladakh</span>
          <span className="block">Tour Package</span>
        </h1>

      </div>

    </section>
  );
}