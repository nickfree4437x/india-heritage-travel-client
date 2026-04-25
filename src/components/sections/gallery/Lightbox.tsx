"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({
  images,
  index,
  setIndex,
  onClose,
}: any) {

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setIndex((prev: number) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setIndex((prev: number) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      <img
        src={images[index]}
        alt="preview"
        className="max-h-[70vh] sm:max-h-[75vh] rounded-sm shadow-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {/* close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white"
      >
        <X size={28} />
      </button>

      {/* counter */}
      <p className="text-white mt-3 text-xs sm:text-sm">
        {index + 1} / {images.length}
      </p>

      {/* thumbnails */}
      <div className="flex gap-2 mt-4 sm:mt-6 overflow-x-auto px-3 sm:px-4">
        {images.map((img: string, i: number) => (
          <img
            key={i}
            src={img}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`w-14 h-14 sm:w-16 sm:h-16 object-cover rounded cursor-pointer border-2 ${
              i === index
                ? "border-[#A07008]"
                : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* nav */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex(index === 0 ? images.length - 1 : index - 1);
        }}
        className="absolute left-3 sm:left-6 text-white text-2xl sm:text-3xl"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          setIndex((index + 1) % images.length);
        }}
        className="absolute right-3 sm:right-6 text-white text-2xl sm:text-3xl"
      >
        ›
      </button>
    </div>
  );
}