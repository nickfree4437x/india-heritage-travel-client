"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Lightbox from "./Lightbox";

export default function GallerySlider({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        loop={true}
        speed={450}
        grabCursor={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => setActiveIndex(index)}
              className="relative rounded-sm overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                loading="lazy"
                className="w-full h-[420px] sm:h-[320px] md:h-[360px] lg:h-[460px] object-cover transition-transform duration-500"
              />

              {/* 🔥 CLEAN DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-300"></div>
              
              {/* border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-[#A07008]/40 transition duration-300"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}