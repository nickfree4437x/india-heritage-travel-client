"use client";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewData";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  // ✅ FIX: always 1 on SSR
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) setVisibleCards(1);
      else if (width < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };

    handleResize(); // run after mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  useEffect(() => {
    setIndex(0);
  }, [visibleCards]);

  useEffect(() => {
    if (!isAutoPlaying || isHovering || maxIndex <= 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, isHovering]);

  const next = useCallback(() => {
    if (maxIndex <= 0) return;
    setIsAutoPlaying(false);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [maxIndex]);

  const prev = useCallback(() => {
    if (maxIndex <= 0) return;
    setIsAutoPlaying(false);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [maxIndex]);

  const goToSlide = useCallback((slideIndex: number) => {
    setIsAutoPlaying(false);
    setIndex(slideIndex);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, []);

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) /
    reviews.length;

  return (
    <section className="relative py-6 sm:py-8 lg:py-8 px-4 sm:px-6 bg-gradient-to-br from-[#faf8f4] via-[#f8f6f2] to-[#f5f1ea] overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c9a45c]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c9a45c]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
            Reviews from Travellers
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
            Every journey tells a story discover unforgettable experiences across India
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-3">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#c9a45c] fill-[#c9a45c]" />
              ))}
              <span className="font-semibold text-sm sm:text-base">
                {averageRating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {maxIndex > 0 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 
                  w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                  bg-white border rounded-full shadow-sm transition"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="absolute right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 
                  w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                  bg-white border rounded-full shadow-sm transition"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          <div className="px-2 sm:px-6 lg:px-10">
            <ReviewCard
              reviews={reviews}
              index={index}
              visibleCards={visibleCards}
            />
          </div>
        </div>

        {/* DOTS */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`rounded-full transition ${
                  i === index
                    ? "w-6 h-2 bg-[#c9a45c]"
                    : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}