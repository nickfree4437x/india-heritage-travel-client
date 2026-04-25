"use client";

import Image from "next/image";

type Props = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function CitySection({
  id,
  title,
  description,
  image,
}: Props) {
  return (
    <div id={id} className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
        {description}
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
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