"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-white">

      {/* Background Image */}
      <Image
        src="/adventure/ganga-tour/hero.jpg"
        alt="Royal Rajasthan Tour"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Royal Rajasthan & Sacred Ganges Tour
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-200"
        >
          Experience the royal heritage of Rajasthan and the divine beauty of the Ganges.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <button className="bg-[#c9a46c] hover:bg-[#b8935f] text-black px-6 py-3 rounded-full font-semibold transition">
            Book Now
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            Explore Tour
          </button>
        </motion.div>

      </div>
    </section>
  );
}