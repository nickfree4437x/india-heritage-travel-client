"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import Lightbox from "./Lightbox";

export default function GallerySlider({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* 🔥 EXACT SAME SWIPER */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        loop
        speed={900}
        autoplay={{
          delay: 1600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.07, y: -8 }}
              onClick={() => setActiveIndex(index)}
              className="relative rounded-md overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition duration-500"
            >
              <motion.img
                src={img}
                alt=""
                className="w-full h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] object-cover"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 1.2 }}
              />

              {/* ✅ EXACT SAME OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition duration-500"></div>

              {/* ✅ EXACT SAME BORDER */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-[#A07008]/40 transition duration-500"></div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 LIGHTBOX (same as memory) */}
      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            images={images}
            index={activeIndex}
            setIndex={setActiveIndex}
            onClose={() => setActiveIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}