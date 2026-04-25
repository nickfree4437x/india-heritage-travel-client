"use client";

import ReviewCard from "./ReviewCard";
import { reviews } from "./reviewData";
import { motion } from "framer-motion";

export default function ReviewsSection() {
  return (
    <section className="relative py-32 px-6 bg-[#f8f6f2] overflow-hidden">

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full z-0"></div>

      <div className="relative max-w-6xl mx-auto z-10">

        <div className="flex justify-center mb-4">
          <span className="text-xs tracking-[3px] uppercase bg-[#e9dfd3] text-[#8b6a3d] px-4 py-1 rounded-full">
            Testimonials
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-semibold text-[#8b6a3d] mb-4"
        >
          Reviews from Travellers
        </motion.h2>

        <ReviewCard reviews={reviews} />

      </div>
    </section>
  );
}