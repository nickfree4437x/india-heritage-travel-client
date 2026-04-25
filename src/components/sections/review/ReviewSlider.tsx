"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

type Review = {
  name: string;
  type: string;
  description: string;
  image: string;
  gallery: string;
};

type ReviewSliderProps = {
  reviews: Review[];
};

export default function ReviewSlider({ reviews }: ReviewSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((p) => (p + 1) % reviews.length);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((p) => (p - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const t = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(t);
  }, [currentIndex]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchStartX.current - touchEndX.current < -50) prev();
  };

  const current = reviews[currentIndex];

  return (
    <div className="space-y-20">

      {/* 🔥 TOP GALLERY */}
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
              index === currentIndex
                ? "scale-105 ring-2 ring-[#8b6a3d]"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={item.gallery}
              alt="review"
              width={500}
              height={350}
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

            {/* Name Tag */}
            {index === currentIndex && (
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm shadow">
                {item.name}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 💎 MAIN CONTENT */}
      <div
        className="relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-[36px] shadow-xl p-8 md:p-14 grid md:grid-cols-2 gap-12 items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[#8b6a3d]/10 blur-[120px] rounded-full" />

        {/* LEFT */}
        <div key={currentIndex} className="space-y-6 z-10">

          <Quote className="text-[#8b6a3d]/20 w-16 h-16" />

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-lg">
            “{current.description}”
          </p>

          {/* Controls */}
          <div className="flex items-center gap-4 pt-4">

            <button
              onClick={prev}
              className="group w-12 h-12 rounded-full bg-white/70 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-[#8b6a3d] hover:text-white transition"
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition" />
            </button>

            <button
              onClick={next}
              className="group w-12 h-12 rounded-full bg-white/70 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-[#8b6a3d] hover:text-white transition"
            >
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </button>

          </div>

          {/* Progress */}
          <div className="flex gap-2 pt-4 max-w-[200px]">
            {reviews.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className="flex-1 cursor-pointer"
              >
                <div className="h-[4px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      i === currentIndex
                        ? "w-full bg-[#8b6a3d]"
                        : "w-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          <div className="absolute w-[260px] h-[260px] bg-[#8b6a3d]/20 blur-3xl rounded-full" />

          <Image
            key={currentIndex}
            src={current.image}
            alt="traveller"
            width={280}
            height={400}
            className="rounded-3xl object-cover shadow-lg hover:scale-105 transition duration-500"
          />

          {/* Info Card */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow text-center">
            <p className="font-semibold">{current.name}</p>
            <p className="text-sm text-gray-500">{current.type}</p>
          </div>

        </div>

      </div>

    </div>
  );
}