"use client";

import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[65vh] md:h-[94vh]">

      {/* Background Image */}
      <Image
        src="/contact/india.jpg" // 👈 apni bg image daal
        alt="Contact Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
          Contact Us
        </h1>
      </div>

    </section>
  );
}