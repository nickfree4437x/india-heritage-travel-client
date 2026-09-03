"use client";

import Image from "next/image";

interface CitySectionProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export default function CitySection({
  id,
  title,
  description,
  image,
  alt,
}: CitySectionProps) {
  return (
    <section id={id} className="max-w-5xl scroll-mt-16 md:scroll-mt-28">
      {/* Heading */}
      <h3 className="
        text-[16px] sm:text-[20px] md:text-[22px]
        tracking-wide
        text-[#2c2c2c]
        font-semibold
        mb-4
        opacity-0 translate-y-10
        animate-[fadeUp_1.2s_ease-out_0.2s_forwards]
      ">
        {title}
      </h3>

      {/* Description */}
      <p className="
        text-gray-700
        text-[12px] sm:text-[13px] md:text-[14px]
        font-[300]
        leading-relaxed
        text-justify
        mb-6
        opacity-0 translate-y-10
        animate-[fadeUp_1.4s_ease-out_0.4s_forwards]
      ">
        {description}
      </p>

      {/* Image */}
      <div className="
        w-full rounded-md
        overflow-hidden
        shadow-md
        -mb-2 md:mb-0
        opacity-0 translate-y-10
        animate-[fadeUp_1.6s_ease-out_0.6s_forwards]
      ">
        <Image
          src={image}
          alt={alt}
          width={1200}
          height={800}
          priority={false}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </section>
  );
}