"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import GallerySlider from "./GallerySlider";

const images: string[] = [
  "/gallery/memory1.jpg",
  "/gallery/memory2.jpg",
  "/gallery/memory3.jpg",
  "/gallery/memory4.jpg",
  "/gallery/memory5.jpg",
  "/gallery/memory6.jpg",
  "/gallery/memory7.jpg",
  "/gallery/memory8.jpg",
  "/gallery/memory9.jpg",
  "/gallery/memory10.jpg",
  "/gallery/memory11.jpg",
  "/gallery/memory12.jpg",
  "/gallery/memory13.jpg",
  "/gallery/memory14.jpg",
  "/gallery/memory15.jpg",
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: "-100px 0px -100px 0px",
  });

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

  // Slider animation
  const sliderVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  // Light effects animation
  const lightEffectVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        delay: 0.5,
        ease: [0.16, 1, 0.3, 1.01] as const,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="py-8 sm:py-8 md:py-10 bg-white relative overflow-hidden"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        {/* HEADER */}
        <motion.div
          variants={headingVariants}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
            Our Gallery
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
            Explore beautiful moments from our curated travel experiences
          </p>
        </motion.div>

        {/* SLIDER */}
        <motion.div variants={sliderVariants}>
          <GallerySlider images={images} />
        </motion.div>
      </div>

      {/* LIGHT EFFECTS */}
      <motion.div
        variants={lightEffectVariants}
        className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#A07008]/10 blur-3xl rounded-full animate-pulse"
      />

      <motion.div
        variants={lightEffectVariants}
        className="absolute bottom-10 right-10 w-40 sm:w-52 h-40 sm:h-52 bg-[#A07008]/10 blur-3xl rounded-full animate-pulse"
      />
    </motion.section>
  );
}