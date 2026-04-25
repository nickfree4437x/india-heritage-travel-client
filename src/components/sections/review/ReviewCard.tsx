"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewControls from "./ReviewControls";
import ReviewThumbnails from "./ReviewThumbnails";

type Review = {
  rating: number;
  description: string;
  name: string;
  location: string;
  type: string;
  image: string;
  gallery: string;
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

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const current = reviews[currentIndex];

  // ⭐ Better Stars
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={18}
        className={`${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <>
      <div className="relative bg-white/70 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-md p-8 md:p-14 grid md:grid-cols-2 gap-12 items-center overflow-hidden">

        {/* ✨ Soft Background Glow */}
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#8b6a3d]/10 rounded-full blur-[120px]" />

        {/* 🪶 BIG QUOTE BACKGROUND */}
        <Quote className="absolute right-10 top-10 text-[#8b6a3d]/10 w-40 h-40 hidden md:block" />

        {/* LEFT CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 z-10"
          >
            {/* ⭐ Rating */}
            <div className="flex gap-1">{renderStars(current.rating)}</div>

            {/* 💬 Review Text */}
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl max-w-xl">
              “{current.description}”
            </p>

            {/* 👤 User Info */}
            <div className="pt-4 border-t border-gray-200">
              <p className="font-semibold text-lg text-gray-900">
                {current.name}
              </p>
              <p className="text-sm text-gray-500">
                {current.location}
              </p>

              <span className="inline-block mt-2 bg-[#8b6a3d]/10 text-[#8b6a3d] px-4 py-1 rounded-full text-xs font-medium">
                {current.type}
              </span>
            </div>

            {/* 🎮 Controls */}
            <div className="pt-4">
              <ReviewControls
                prev={prev}
                next={next}
                currentIndex={currentIndex}
                total={reviews.length}
                setIndex={setCurrentIndex}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">
          <div className="absolute bg-[#8b6a3d]/20 rounded-md" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#8b6a3d]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <Image
                src={current.image}
                alt="traveller"
                width={380}
                height={480}
                className="rounded-xl object-cover shadow-sm transition duration-500"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* 🧩 THUMBNAILS */}
      <div className="mt-10">
        <ReviewThumbnails
          reviews={reviews}
          currentIndex={currentIndex}
          setIndex={setCurrentIndex}
        />
      </div>
    </>
  );
}