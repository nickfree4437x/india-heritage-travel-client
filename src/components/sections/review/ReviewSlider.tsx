"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export default function ReviewSlider({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Next / Prev
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Animation reset
  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  // Swipe Support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchStartX.current - touchEndX.current < -50) prev();
  };

  const currentReview = reviews[currentIndex];

  return (
    <>
      {/* Top Images */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {reviews.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative overflow-hidden rounded-3xl cursor-pointer transition duration-500 ${
              index === currentIndex
                ? "ring-4 ring-[#8b6a3d] scale-105"
                : "opacity-60"
            }`}
          >
            <Image
              src={item.gallery}
              alt="review"
              width={500}
              height={350}
              className="object-cover w-full h-[260px] hover:scale-110 transition duration-500"
            />

            {index === currentIndex && (
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm shadow">
                {item.name}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div
        className="grid md:grid-cols-2 gap-12 items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left */}
        <div
          key={currentIndex}
          className="transition-all duration-500 ease-in-out opacity-100"
        >
          <Quote size={70} className="text-green-600 mb-6 opacity-80" />

          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
            {currentReview.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-6">
            <button
              onClick={prev}
              className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowLeft />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <ArrowRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-3 mt-6">
            {reviews.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "bg-[#8b6a3d]"
                    : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <div className="absolute bottom-0 w-[260px] h-[260px] bg-yellow-400 rounded-full blur-2xl opacity-60 -z-10"></div>

          <Image
            key={currentIndex}
            src={currentReview.image}
            alt="traveller"
            width={260}
            height={380}
            className="rounded-xl object-cover shadow-lg transition-all duration-500"
          />

          <div className="absolute bottom-10 -left-10 bg-[#8b6a3d] text-white px-6 py-3 rounded-xl shadow-lg">
            <p className="font-semibold">{currentReview.name}</p>
            <p className="text-sm opacity-80">{currentReview.type}</p>
          </div>
        </div>
      </div>
    </>
  );
}