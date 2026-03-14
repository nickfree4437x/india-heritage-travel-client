"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];

export default function GallerySection() {

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#f4f0ea] py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}

        <h2 className="text-4xl font-semibold text-[#8b6a3d] mb-3">
          Gallery
        </h2>

        <p className="text-[#8b6a3d] tracking-wide mb-14">
          Visual Highlights Of Our Tours And Experiences
        </p>


        {/* Gallery */}

        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}

          <button
            onClick={prev}
            className="absolute left-0 z-10 bg-white shadow rounded-full p-3 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>


          {/* Images */}

          <div className="flex items-center gap-6 overflow-hidden">

            {images.map((img, i) => {

              const position =
                i === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-50";

              return (

                <div
                  key={i}
                  className={`transition duration-500 ${position}`}
                >

                  <Image
                    src={img}
                    alt="gallery"
                    width={400}
                    height={450}
                    className="rounded-xl object-cover"
                  />

                </div>

              );

            })}

          </div>


          {/* Right Arrow */}

          <button
            onClick={next}
            className="absolute right-0 z-10 bg-white shadow rounded-full p-3 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>

        </div>

      </div>

    </section>
  );
}