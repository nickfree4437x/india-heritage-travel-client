"use client";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewData";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden">

      {/* 🔥 SOFT GLOW */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#c9a45c]/10 rounded-full blur-3xl z-0"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        {/* 🔥 HEADER */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">

          {/* Badge */}
          <span className="inline-block text-[10px] sm:text-xs tracking-[3px] uppercase bg-[#e9dfd3] text-[#8b6a3d] px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold text-[#8b6a3d] mb-3"
          >
            Reviews from Travellers
          </motion.h2>

          {/* Subtext */}
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Hear from our happy travellers who experienced unforgettable journeys across India.
          </p>

        </div>

        {/* 🔥 SLIDER */}
        <div className="relative">
          <ReviewCard reviews={reviews} />
        </div>

      </div>
    </section>
  );
}