// app/blogs/components/HeroSection.tsx

"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hero slides data
const slides = [
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779634924/hero-1_xs9azf.jpg",
    title: "A Guide to Indian Food: What to Try & What to Avoid",
    slug: "/blog/india-food-guide",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635143/hero-2_yi8tf9.jpg",
    title: "A First-Timer's Guide to Jaipur | Ultimate 3 Day Guide",
    slug: "/blog/jaipur-travel-tips",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635049/hero-3_wj3zaa.jpg",
    title: "Find the Ideal Honeymoon Tour Packages with India Heritage Travel",
    slug: "/blog/honeymoon-tour-package",
  },
  {
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779635022/hero-4_kjz2ij.jpg",
    title: "India for Solo Travelers: Cultural, Wellness and Offbeat Experiences",
    slug: "/blog/solo-traveller",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Next slide handler
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  // Previous slide handler
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(slider);
  }, [nextSlide]);

  return (
    <section className="relative h-[92vh] sm:h-screen w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Image with Zoom Animation */}
          <div
            className={`absolute inset-0 transition-transform duration-[9000ms] ease-linear ${
              index === current ? "scale-110" : "scale-100"
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

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/65" />

          {/* Content */}
          <div className="relative z-30 h-full flex items-center justify-center text-center">
            <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
              <h2 className="
                text-white
                text-[28px] leading-[1.25]
                sm:text-4xl sm:leading-[1.2]
                lg:text-5xl
                max-w-3xl
                mx-auto
              ">
                {slide.title}
              </h2>

              <div className="mt-7 sm:mt-10 flex justify-center">
                <Link href={slide.slug}>
                  <button
                    aria-label="Read more about this article"
                    className="
                      border border-white/30
                      bg-white/5 hover:bg-white/10
                      transition-all duration-300
                      text-white
                      px-6 sm:px-7 py-3
                      rounded-full
                      text-[11px] sm:text-xs
                      tracking-wide
                      flex items-center gap-2
                      backdrop-blur-sm
                      font-[300]
                    "
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        title="Previous slide"
        className="
          absolute
          left-3 sm:left-[80px]
          top-[58%] sm:top-1/2
          -translate-y-1/2
          z-40
          h-9 w-9 sm:h-12 sm:w-12
          rounded-full
          border border-white/20
          bg-white/5 backdrop-blur-sm
          flex items-center justify-center
          text-white
          transition-all duration-300
          hover:bg-white/20
        "
      >
        <ChevronLeft aria-hidden="true" size={18} className="sm:w-[22px] sm:h-[22px]" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        title="Next slide"
        className="
          absolute
          right-3 sm:right-[50px]
          top-[58%] sm:top-1/2
          -translate-y-1/2
          z-40
          h-9 w-9 sm:h-12 sm:w-12
          rounded-full
          border border-white/20
          bg-white/5 backdrop-blur-sm
          flex items-center justify-center
          text-white
          transition-all duration-300
          hover:bg-white/20
        "
      >
        <ChevronRight aria-hidden="true" size={18} className="sm:w-[22px] sm:h-[22px]" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-40">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              title={`Go to slide ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={`
                transition-all duration-500 rounded-full
                ${index === current
                  ? "w-10 sm:w-12 h-[3px] bg-white"
                  : "w-3 sm:w-4 h-[3px] bg-white/40"
                }
              `}
            />
          ))}
        </div>

        {/* Slide Counter */}
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