"use client";

import Image from "next/image";
import { Star, User, Quote, ChevronRight } from "lucide-react";
import ReviewModal from "./ReviewModal";
import { useState } from "react";

type Review = {
  id: number;
  name: string;
  type: string;
  rating: number;
  short: string;
  full: string;
  image: string;
};

type Props = {
  reviews: Review[];
  index: number;
  visibleCards: number;
};

export default function ReviewCard({ reviews, index, visibleCards }: Props) {
  const [selected, setSelected] = useState<Review | null>(null);

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={`${
            star <= rating
              ? "fill-[#c9a45c] text-[#c9a45c]"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "solo":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      case "couple":
        return "bg-pink-500/10 text-pink-700 border-pink-200";
      case "family":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="px-2 sm:px-3"
              style={{
                flex: `0 0 ${100 / visibleCards}%`,
                maxWidth: `${100 / visibleCards}%`,
              }}
            >
              <div
                onClick={() => setSelected(review)}
                className="group isolate relative bg-white sm:rounded-sm overflow-hidden cursor-pointer
                           transition-all duration-300 shadow-sm hover:shadow-md
                           border border-gray-100"
              >
                {/* IMAGE */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    priority
                    className="object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* CONTENT */}
                <div className="p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#c9a45c] to-[#a8843a] 
                                      flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-sm truncate">
                          {review.name}
                        </h3>

                        <div className="flex items-center gap-1 mt-0.5">
                          <User size={10} className="text-gray-400" />
                          <span className="text-[10px] text-gray-500 capitalize truncate">
                            {review.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {renderStars(review.rating)}
                  </div>

                  <div className="relative mt-2">
                    <Quote size={12} className="text-[#c9a45c]/20 absolute -top-1 -left-1" />
                    <p className="text-gray-600 font-light text-[11px] sm:text-xs leading-relaxed line-clamp-3 pl-4">
                      {review.short}
                    </p>
                  </div>

                  <div className="w-8 h-px bg-gradient-to-r from-[#c9a45c]/30 to-transparent my-2" />

                  <button
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-medium text-[#8b6a3d] 
                               hover:text-[#a8843a] transition group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(review);
                    }}
                  >
                    <span>Read full story</span>
                    <ChevronRight
                      size={12}
                      className="group-hover/btn:translate-x-0.5 transition"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ReviewModal
          review={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}