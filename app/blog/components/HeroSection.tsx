// app/blogs/components/HeroSection.tsx

"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",
    title: "A Guide to Indian Food: What to Try & What to Avoid",
    desc: "Step into the world of majestic forts, royal palaces, vibrant bazaars, and centuries-old cultural traditions.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635143/hero-2_yi8tf9.jpg",
    title: "A First-Timer’s Guide to Jaipur | Ultimate 3 Day Guide",
    desc: "Reconnect your mind and soul through curated wellness experiences across India’s serene destinations.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635049/hero-3_wj3zaa.jpg",
    title:
      "Find the Ideal Honeymoon Tour Packages with India Heritage Travel",
    desc: "Explore inspiring journeys, safety tips, and meaningful travel experiences designed for solo women travelers.",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635022/hero-4_kjz2ij.jpg",
    title:
      "India for Solo Travelers: Cultural, Wellness and Offbeat Experiences",
    desc: "Get insider travel inspiration, hidden gems, local experiences, and expert travel insights from across India.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // NEXT SLIDE
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // PREV SLIDE
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // AUTO SLIDER
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(slider);
  }, [nextSlide]);

  return (
    <section className="relative h-[92vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* SLIDES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === current
              ? "opacity-100 z-20"
              : "opacity-0 z-10"
          }`}
        >
          {/* IMAGE */}
          <div
            className={`absolute inset-0 transition-transform duration-[9000ms] ease-linear ${
              index === current
                ? "scale-110"
                : "scale-100"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              quality={100}
              className="object-cover"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/65" />

          {/* CONTENT */}
          <div className="relative z-30 h-full flex items-center justify-center text-center">

            <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">

              {/* TITLE */}
              <h1
                className="
                  text-white
                  text-[28px]
                  leading-[1.25]
                  sm:text-4xl
                  sm:leading-[1.2]
                  lg:text-5xl
                  max-w-3xl
                  mx-auto
                "
              >
                {slide.title}
              </h1>

              {/* DESC */}
              <p
                className="
                  mt-4
                  sm:mt-5
                  text-white/70
                  text-[13px]
                  leading-6
                  sm:text-[14px]
                  sm:leading-7
                  lg:text-base
                  font-light
                  max-w-2xl
                  mx-auto
                  px-1
                  sm:px-0
                "
              >
                {slide.desc}
              </p>

              {/* BUTTON */}
              <div className="mt-7 sm:mt-10 flex justify-center">
                <button
                  aria-label="Read more about this article"
                  className="
                    border
                    font-[300]
                    border-white/30
                    bg-white/5
                    hover:bg-white/10
                    transition-all
                    duration-300
                    text-white
                    px-6
                    sm:px-7
                    py-3
                    rounded-full
                    text-[11px]
                    sm:text-xs
                    tracking-wide
                    flex
                    items-center
                    gap-2
                    backdrop-blur-sm
                  "
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* LEFT ARROW */}
      <button
      onClick={prevSlide}
      aria-label="Previous slide"
      title="Previous slide"
      className="
        absolute
        left-3
        sm:left-8

        top-[58%]
        sm:top-1/2

        -translate-y-1/2
        z-40

        h-9
        w-9
        sm:h-12
        sm:w-12

        rounded-full
        border
        border-white/20
        bg-white/5
        backdrop-blur-sm

        flex
        items-center
        justify-center

        text-white
        transition-all
        duration-300
      "
    >
      <ChevronLeft
        aria-hidden="true"
        size={18}
        className="sm:w-[22px] sm:h-[22px]"
      />
    </button>

      {/* RIGHT ARROW */}
      <button
      onClick={nextSlide}
      aria-label="Next slide"
      title="Next slide"
      className="
        absolute
        right-3
        sm:right-8

        top-[58%]
        sm:top-1/2

        -translate-y-1/2
        z-40

        h-9
        w-9
        sm:h-12
        sm:w-12

        rounded-full
        border
        border-white/20
        bg-white/5
        backdrop-blur-sm

        flex
        items-center
        justify-center

        text-white
        transition-all
        duration-300
      "
    >
      <ChevronRight
        aria-hidden="true"
        size={18}
        className="sm:w-[22px] sm:h-[22px]"
      />
    </button>

      {/* BOTTOM AREA */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-40">

        {/* DOTS */}
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`transition-all duration-500 rounded-full ${
                index === current
                  ? "w-10 sm:w-12 h-[3px] bg-white"
                  : "w-3 sm:w-4 h-[3px] bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* SLIDE NUMBER */}
        <div className="mt-4 sm:mt-5 flex justify-center">
          <p className="text-white/60 text-[10px] sm:text-xs tracking-[3px]">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}