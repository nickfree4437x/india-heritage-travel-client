"use client";

import Image from "next/image";
import { Star, User, Quote, ChevronRight } from "lucide-react";
import ReviewModal from "./ReviewModal";
import { useState, useEffect } from "react";

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
  const [cardsToShow, setCardsToShow] = useState(visibleCards);

  // Mobile pe sirf 1 card dikhao
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1); // 👈 Mobile par sirf 1 card
      } else {
        setCardsToShow(visibleCards);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCards]);

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

  return (
    <>
      <div className="overflow-hidden">
        <div
          className="flex w-full transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
          style={{
            transform: `translateX(-${index * (100 / cardsToShow)}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="px-0 sm:px-3" // 👈 Mobile par 0 padding, desktop par normal
              style={{
                flex: `0 0 ${100 / cardsToShow}%`,
                maxWidth: `${100 / cardsToShow}%`,
              }}
            >
              <div
                onClick={() => setSelected(review)}
                className="group isolate relative bg-white sm:rounded-sm overflow-hidden cursor-pointer
                           transition-all duration-300 shadow-sm hover:shadow-md
                           border border-gray-100 mx-0 sm:mx-0"
              >
                {/* IMAGE */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={`${review.name} review about India Heritage Travel`}
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