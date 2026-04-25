"use client";

import GallerySlider from "./GallerySlider";

const images = [
  "/gallery/memory1.jpg",
  "/gallery/memory2.jpg",
  "/gallery/memory3.jpg",
  "/gallery/memory4.jpg",
  "/gallery/memory5.jpg",
  "/gallery/memory6.jpg",
  "/gallery/memory7.jpg",
  "/gallery/memory8.jpg",
  "/gallery/memory9.jpg",
  "/gallery/memory10.jpg",
  "/gallery/memory11.jpg",
  "/gallery/memory12.jpg",
  "/gallery/memory13.jpg",
  "/gallery/memory14.jpg",
  "/gallery/memory15.jpg",
];

export default function GallerySection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-[#f8f6f2] relative overflow-hidden"
      id="gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold mb-2">
            Our <span className="text-[#A38664]">Gallery</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-md text-gray-600 max-w-2xl mx-auto">
            Explore beautiful moments from our curated travel experiences
          </p>
        </div>

        {/* SLIDER */}
        <GallerySlider images={images} />

      </div>

      {/* LIGHT EFFECT (same as memory) */}
      <div className="absolute top-10 left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#A07008]/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 sm:w-52 h-40 sm:h-52 bg-[#A07008]/10 blur-3xl rounded-full animate-pulse"></div>
    </section>
  );
}