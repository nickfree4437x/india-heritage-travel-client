"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  type Variants,
} from "framer-motion";

export default function WomenSeeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.3,
    margin: "-80px 0px -80px 0px",
  });

  // HERO IMAGE - Left se slide + thoda rotate
  const heroVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -80,
      rotate: -5,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.2,
        ease: [0.34, 1.2, 0.64, 1],
      },
    },
  };

  // GRID IMAGE 1 - Neeche se + thoda bounce
  const gridImage1Variants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.85,
      rotate: 3,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.34, 1.2, 0.64, 1],
      },
    },
  };

  // GRID IMAGE 2 - Right se slide + thoda rotate
  const gridImage2Variants: Variants = {
    hidden: {
      opacity: 0,
      x: 60,
      scale: 0.9,
      rotate: 4,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.55,
        ease: [0.34, 1.2, 0.64, 1],
      },
    },
  };

  // GRID IMAGE 3 - Upar se neeche aaye + scale
  const gridImage3Variants: Variants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.88,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.7,
        ease: [0.34, 1.2, 0.64, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-white md:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* SIRF YAHAN GAP CHANGE KIYA - gap-20 se gap-8/12 kar diya */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16">

          {/* LEFT SIDE - CONTENT (NO ANIMATION) */}
          <div className="mt-12 w-full max-w-xl">
            <p className="mb-2 text-[10px] uppercase tracking-[0.01em] text-[#8b7355]">
              What I Really Want Women To See
            </p>

            <h2 className="mb-8 text-[18px] font-[450] leading-[1.4] text-gray-800 md:text-[22px]">
              There&apos;s another side of India I want you to experience
            </h2>

            <div className="space-y-3 text-[13px] font-[300] leading-[1.7] text-gray-600 md:text-[14px]">

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#8b7355]">•</span>
                <p>The quiet mornings.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#8b7355]">•</span>
                <p>The warmth of people.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#8b7355]">•</span>
                <p>The stories hidden in old streets.</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-[#8b7355]">•</span>

                <p>
                  The feeling of sitting somewhere unfamiliar… and somehow
                  feeling completely present there.
                </p>
              </div>

              <div className="my-5 h-px bg-[#8b7355]/20" />

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-[#8b7355]">❝</span>

                <p>
                  India is intense sometimes, yes. But it&apos;s also deeply
                  beautiful.
                </p>
              </div>

              <div className="my-5 h-px bg-[#8b7355]/20" />

              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-[#8b7355]">→</span>

                <p className="text-[#8b7355]">
                  And I truly believe women deserve to experience that side
                  of it too - comfortably, confidently, and in their own way.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - MOVING ANIMATIONS */}
          <div className="mt-6 w-full lg:mt-0 lg:w-[540px]">

            {/* HERO IMAGE - Left se slide */}
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative mb-3 h-[300px] overflow-hidden rounded-none shadow-lg"
            >
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779633583/img_3_tgerix.jpg"
                alt="Solo woman traveller exploring the cultural beauty of India"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6" />
            </motion.div>

            {/* BOTTOM GRID */}
            <div className="grid grid-cols-3 gap-3">

              {/* IMAGE 1 - Neeche se upar */}
              <motion.div
                variants={gridImage1Variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative h-[180px] overflow-hidden shadow-md"
              >
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779633575/img_1_rex932.jpg"
                  alt="Elephant experience during a cultural tour in India"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* IMAGE 2 - Right se left */}
              <motion.div
                variants={gridImage2Variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative h-[180px] overflow-hidden shadow-md"
              >
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779633697/img_2_ibmjqt.jpg"
                  alt="Traditional Indian festival lights and cultural celebrations"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* IMAGE 3 - Upar se neeche */}
              <motion.div
                variants={gridImage3Variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative h-[180px] overflow-hidden shadow-md"
              >
                <Image
                  src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779633582/img_4_bj0ywl.jpg"
                  alt="Taj Mahal in Agra one of India's most iconic heritage landmarks"
                  fill
                  className="object-cover"
                />
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}