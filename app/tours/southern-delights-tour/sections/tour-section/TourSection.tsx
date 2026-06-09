"use client";

import Image from "next/image";

type TourSectionProps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export default function TourSection({
  id,
  title,
  description,
  image,
}: TourSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28"
    >
      <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
        {title}
      </h2>

      <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[300] md:text-[14px] text-justify">
        {description}
      </p>

      <div className="w-full rounded-md overflow-hidden shadow-md -mb-6 md:mb-0">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </section>
  );
}