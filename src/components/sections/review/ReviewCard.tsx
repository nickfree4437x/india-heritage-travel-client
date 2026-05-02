"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

// ✅ TYPE DEFINE
type Review = {
  id: string | number;
  image: string;
  name: string;
  short: string;
  full: string;
  rating: number;
  location: string;
  type: string;
};

type ReviewCardProps = {
  reviews: Review[];
};

export default function ReviewCard({ reviews }: ReviewCardProps) {
  const [index, setIndex] = useState<number>(0);
  const [selected, setSelected] = useState<Review | null>(null);

  const visibleCards = 3;

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  // 🔥 AUTO SLIDE
  useEffect(() => {
    if (!reviews.length) return;

    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <>
      <div className="relative">
        {/* 🔥 SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
              >
                {/* 🔥 CARD */}
                <div
                  onClick={() => setSelected(review)}
                  className="relative h-[380px] rounded-sm overflow-hidden cursor-pointer group"
                >
                  {/* ✅ IMAGE FIX */}
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* 🔥 OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                  {/* 🔥 TEXT */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white text-center">
                    <p className="text-sm line-clamp-2 mb-2">
                      “{review.short}”
                    </p>
                    <h4 className="text-sm font-medium">{review.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔥 MODAL BACK */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-lg w-full rounded-xl overflow-hidden relative">
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white bg-black/50 px-2 rounded-full z-10"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative h-[250px]">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#8b6a3d]">
                {selected.name}
              </h3>

              <p className="text-sm text-gray-500">{selected.location}</p>

              {/* ⭐ STARS */}
              <div className="flex justify-center gap-1 mt-2">
                {renderStars(selected.rating)}
              </div>

              {/* FULL REVIEW */}
              <p className="text-gray-700 text-sm mt-4 leading-relaxed">
                “{selected.full}”
              </p>

              <span className="inline-block mt-4 bg-[#8b6a3d]/10 text-[#8b6a3d] px-4 py-1 rounded-full text-xs">
                {selected.type}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}