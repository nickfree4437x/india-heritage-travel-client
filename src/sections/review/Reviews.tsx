"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewData";

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: "-100px 0px -100px 0px",
  });

  const [index, setIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [visibleCards, setVisibleCards] = useState<number>(1);

  useEffect(() => {
    const handleResize = (): void => {
      const width = window.innerWidth;

      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCards);

  useEffect(() => {
    setIndex(0);
  }, [visibleCards]);

  useEffect(() => {
    if (!isAutoPlaying || isHovering || maxIndex <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, isHovering]);

  const next = useCallback((): void => {
    if (maxIndex <= 0) return;

    setIsAutoPlaying(false);

    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  }, [maxIndex]);

  const prev = useCallback((): void => {
    if (maxIndex <= 0) return;

    setIsAutoPlaying(false);

    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  }, [maxIndex]);

  const goToSlide = useCallback((slideIndex: number): void => {
    setIsAutoPlaying(false);

    setIndex(slideIndex);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 8000);
  }, []);

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) /
    reviews.length;

  // Heading animation
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Rating stars animation
  const ratingVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Slider container animation
  const sliderVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.4,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Dots animation
  const dotsVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative py-10 sm:py-10 lg:py-10 px-4 sm:px-6 bg-gradient-to-br from-[#faf8f4] via-[#f8f6f2] to-[#f5f1ea] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c9a45c]/5 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c9a45c]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-12 sm:mb-16 px-2"
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
            Reviews from Travellers
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
            Every journey tells a story discover unforgettable experiences
            across India
          </p>

          <motion.div
            variants={ratingVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-3"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-[#c9a45c] fill-[#c9a45c]"
                />
              ))}

              <span className="font-semibold text-sm sm:text-base">
                {averageRating.toFixed(1)}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* SLIDER */}
        <motion.div
          variants={sliderVariants}
          className="relative group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {maxIndex > 0 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous review"
                title="Previous review"
                className="absolute -left-4 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 
                w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                bg-white border rounded-full shadow-sm transition hover:shadow-md hover:scale-105 duration-300"
              >
                <ChevronLeft
                  aria-hidden="true"
                  size={18}
                />
              </button>

              <button
                onClick={next}
                aria-label="Next review"
                title="Next review"
                className="absolute -right-4 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 
                w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center
                bg-white border rounded-full shadow-sm transition hover:shadow-md hover:scale-105 duration-300"
              >
                <ChevronRight
                  aria-hidden="true"
                  size={18}
                />
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
        </motion.div>

        {/* DOTS */}
        {maxIndex > 0 && (
          <motion.div
            variants={dotsVariants}
            className="flex justify-center gap-2 mt-6 sm:mt-8 mb-8"
          >
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to review slide ${i + 1}`}
                title={`Go to review slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-6 h-2 bg-[#c9a45c]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}