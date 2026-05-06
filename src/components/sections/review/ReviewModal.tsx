"use client";

import { X, Star, User, Quote } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

type Review = {
  name: string;
  image: string;
  rating: number;
  type: string;
  full: string;
};

type ReviewModalProps = {
  review: Review;
  onClose: () => void;
};

export default function ReviewModal({ review, onClose }: ReviewModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const renderStars = (rating: number) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={18}
          className={`${
            star <= rating
              ? "fill-[#c9a45c] text-[#c9a45c]"
              : "fill-gray-100 text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  const getTypeColor = (type: string): string => {
    switch (type.toLowerCase()) {
      case "solo":
      case "couple":
      case "family":
        return "bg-gray-800/10 text-white border-gray-200";
      default:
        return "bg-gray-800/10 text-white border-gray-200";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center
                     bg-white/90 backdrop-blur-sm rounded-full shadow-md
                     hover:bg-white transition-all duration-200"
        >
          <X size={16} className="text-gray-600" />
        </button>

        {/* HERO IMAGE */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[360px]">
          <Image
            src={review.image}
            alt={review.name}
            fill
            priority
            className="object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* User Info Overlay */}
          <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 flex items-center gap-3">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#c9a45c] to-[#a8843a] 
                         flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg border-2 border-white"
            >
              {review.name.charAt(0)}
            </div>

            <div className="text-white">
              <h3 className="font-bold text-lg sm:text-xl">
                {review.name}
              </h3>

              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div
                  className={`inline-flex text-xs items-center gap-1 rounded-full px-2 py-1 ${getTypeColor(
                    review.type
                  )} bg-white/90 backdrop-blur-sm`}
                >
                  <User size={10} />
                  <span className="text-[10px] font-medium capitalize">
                    {review.type}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 sm:p-6 max-h-[50vh] overflow-y-auto">
          <Quote size={28} className="text-[#c9a45c]/20 mb-3" />

          <div className="space-y-4">
            {review.full.split("\n").map((paragraph: string, idx: number) => (
              paragraph.trim() && (
                <p
                  key={idx}
                  className="text-gray-700 leading-relaxed text-xs sm:text-[13px] text-justify"
                >
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}