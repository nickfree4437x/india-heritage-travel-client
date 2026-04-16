"use client";

import { motion } from "framer-motion";
import GallerySlider from "./GallerySlider";

const images = [
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
  return (
    <section className="py-24 bg-[#f8f6f2] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ EXACT SAME HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-semibold text-4xl text-gray-800 tracking-tight mb-2">
            Our <span className="text-[#A38664]">Gallery</span>
          </h2>

          <p className="text-sm md:text-md text-gray-600 max-w-2xl mx-auto">
            Explore beautiful moments from our curated travel experiences
          </p>
        </motion.div>

        {/* ✅ EXACT SAME SLIDER WRAPPER */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <GallerySlider images={images} />
        </motion.div>

      </div>

      {/* ✅ EXACT SAME LIGHT EFFECT */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-40 h-40 bg-[#A07008]/10 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-52 h-52 bg-[#A07008]/10 blur-3xl rounded-full"
      />
    </section>
  );
}