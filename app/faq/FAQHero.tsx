
"use client";

import Image from "next/image";

export default function FAQHero() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-labelledby="faq-hero-title"
    >
      {/* Background Image */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743099/tajmahal_nofzyw.jpg"
          alt="Taj Mahal in Agra, India"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center text-white">
        <h1
          id="faq-hero-title"
          className="
            mb-4
            max-w-[700px]
            text-3xl md:text-4xl
            font-semibold
            leading-[1.1]
            tracking-[0.02em]
            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          India Travel FAQs – Everything You Need to Know
        </h1>

        <p className="
          max-w-[650px]
          mb-6
          text-[13px] sm:text-[14px] md:text-[15px]
          font-light
          leading-relaxed
        ">
          Find helpful answers to common questions about planning your trip
          to India.
        </p>
      </div>
    </section>
  );
}
