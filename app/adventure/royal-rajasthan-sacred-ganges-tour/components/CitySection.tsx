"use client";

import Image from "next/image";

interface CitySectionProps {
  title: string;
  description: string;
  image: string;
}

export default function CitySection({
  title,
  description,
  image,
}: CitySectionProps) {
  return (
    <div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}