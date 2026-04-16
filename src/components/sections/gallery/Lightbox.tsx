"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({
  images,
  index,
  setIndex,
  onClose,
}: any) {

  const next = () => setIndex((prev: number) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev: number) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >

        {/* 🔥 Top Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-[10000]"
        >
          <p className="text-white text-sm tracking-wide">
            {index + 1} / {images.length}
          </p>

          <button
            onClick={onClose}
            className="text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition backdrop-blur"
          >
            <X size={26} />
          </button>
        </div>

        {/* 🔥 Left Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-6 z-[10000] text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition backdrop-blur"
        >
          <ChevronLeft size={36} />
        </button>

        {/* 🔥 Right Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-6 z-[10000] text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition backdrop-blur"
        >
          <ChevronRight size={36} />
        </button>

        {/* 🔥 Main Image Animation */}
        <motion.div
          key={index}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center max-h-[80vh] px-4"
        >
          <Image
            src={images[index]}
            alt="lightbox"
            width={900}
            height={1000}
            className="rounded-md object-contain max-h-[75vh] shadow-sm"
          />
        </motion.div>

        {/* 🔥 Thumbnails */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-6 w-full max-w-5xl overflow-x-auto px-6"
        >
          <div className="flex gap-2 justify-center">

            {images.map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                onClick={() => setIndex(i)}
                className={`w-16 h-16 object-cover rounded cursor-pointer border-2 transition
                  ${
                    i === index
                      ? "border-[#A07008]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }
                `}
              />
            ))}

          </div>
        </div>

        {/* 🔥 Floating Glow Effect */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-40 h-40 bg-[#A07008]/10 blur-3xl rounded-full"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-52 h-52 bg-[#A07008]/10 blur-3xl rounded-full"
        />

      </motion.div>
    </AnimatePresence>
  );
}