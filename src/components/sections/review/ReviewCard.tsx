"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewControls from "./ReviewControls";
import ReviewThumbnails from "./ReviewThumbnails";

// ✅ TYPE DEFINE
type Review = {
  rating: number;
  description: string;
  name: string;
  location: string;
  type: string;
  image: string;
  gallery: string; // ✅ ADD THIS
};

type ReviewCardProps = {
  reviews: Review[];
};

export default function ReviewCard({ reviews }: ReviewCardProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!reviews || reviews.length === 0) return null;

  const next = () =>
    setCurrentIndex((p) => (p + 1) % reviews.length);

  const prev = () =>
    setCurrentIndex((p) => (p - 1 + reviews.length) % reviews.length);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const current = reviews[currentIndex];

  // ⭐ Rating
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ));

  return (
    <>
      <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-[32px] shadow-md p-10 md:p-16 grid md:grid-cols-2 gap-16 items-center overflow-hidden">

        {/* Glow Background */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#8b6a3d]/10 rounded-full blur-3xl"></div>

        {/* LEFT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 z-10"
          >
            <Quote className="text-[#8b6a3d] opacity-20" size={90} />

            {/* Rating */}
            <div className="text-yellow-500 text-xl">
              {renderStars(current.rating)}
            </div>

            {/* Text */}
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl max-w-xl">
              {current.description}
            </p>

            {/* Name */}
            <div>
              <p className="font-semibold text-xl">{current.name}</p>
              <p className="text-sm text-gray-500">
                {current.location}
              </p>

              <span className="inline-block mt-2 bg-[#8b6a3d]/10 text-[#8b6a3d] px-4 py-1 rounded-full text-xs">
                {current.type}
              </span>
            </div>

            <ReviewControls
              prev={prev}
              next={next}
              currentIndex={currentIndex}
              total={reviews.length}
              setIndex={setCurrentIndex}
            />
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[350px] h-[350px] bg-[#8b6a3d]/20 rounded-full blur-3xl"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={current.image}
                alt="traveller"
                width={380}
                height={480}
                className="rounded-3xl object-cover shadow-sm"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ReviewThumbnails
        reviews={reviews}
        currentIndex={currentIndex}
        setIndex={setCurrentIndex}
      />
    </>
  );
}