"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import ReviewControls from "./ReviewControls";
import ReviewThumbnails from "./ReviewThumbnails";

export default function ReviewCard({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (diff > 50) next();
    if (diff < -50) prev();
  };

  const current = reviews[currentIndex];

  return (
    <>
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="bg-white rounded-3xl shadow-xl p-10 md:p-14 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT */}
        <div className="space-y-6">
          <Quote className="text-[#8b6a3d] opacity-30" size={80} />

          <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
            {current.description}
          </p>

          <div>
            <p className="font-semibold text-lg">{current.name}</p>
            <p className="text-sm text-gray-500">{current.type}</p>
          </div>

          <ReviewControls
            prev={prev}
            next={next}
            currentIndex={currentIndex}
            total={reviews.length}
            setIndex={setCurrentIndex}
          />
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <div className="absolute w-[280px] h-[280px] bg-[#8b6a3d]/10 rounded-full blur-3xl"></div>

          <Image
            key={currentIndex}
            src={current.image}
            alt="traveller"
            width={280}
            height={380}
            className="rounded-2xl object-cover shadow-lg transition duration-500"
          />
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