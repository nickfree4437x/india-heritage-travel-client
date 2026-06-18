"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Lightbox from "./Lightbox";

// ============================================================
// 2. TYPES
// ============================================================
type GalleryImage = {
  src: string;
  alt: string;
};

interface GallerySliderProps {
  images: GalleryImage[];
}

// ============================================================
// 3. COMPONENT
// ============================================================
export default function GallerySlider({ images }: GallerySliderProps) {
  // State
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Handlers
  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  return (
    <>
      {/* ===== SLIDER ===== */}
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
            <GalleryImage
              image={img}
              index={index}
              onClick={openLightbox}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== LIGHTBOX ===== */}
      {activeIndex !== null && (
        <Lightbox
          images={images}
          index={activeIndex}
          setIndex={setActiveIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}

// ============================================================
// 4. SUB-COMPONENT
// ============================================================
function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: (index: number) => void;
}) {
  return (
    <div
      onClick={() => onClick(index)}
      className="
        relative
        rounded-sm
        overflow-hidden
        cursor-pointer
        group
        shadow-sm
        hover:shadow-md
        transition
        duration-300
        h-[420px]
        sm:h-[320px]
        md:h-[360px]
        lg:h-[460px]
      "
    >
      {/* Image */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        loading="lazy"
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          (max-width: 1280px) 33vw,
          25vw
        "
        className="
          object-cover
          transition-transform
          duration-500
        "
      />

      {/* Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/25
          group-hover:bg-black/40
          transition
          duration-300
        "
      />

      {/* Border */}
      <div
        className="
          absolute
          inset-0
          border
          border-white/10
          group-hover:border-[#A07008]/40
          transition
          duration-300
        "
      />
    </div>
  );
}