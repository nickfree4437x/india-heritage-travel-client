"use client";

import Image from "next/image";

type TourSectionProps = {
  title: string;
  description: string;
  image: string;
};

export default function TourSection({
  title,
  description,
  image,
}: TourSectionProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        {title}
      </h2>

      <p className="text-gray-700 text-[15px] leading-relaxed mb-4 whitespace-pre-line text-justify">
        {description}
      </p>

      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="rounded-lg w-full object-cover"
      />
    </div>
  );
}