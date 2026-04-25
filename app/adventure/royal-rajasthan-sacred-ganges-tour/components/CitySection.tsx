"use client";

import Image from "next/image";

interface CitySectionProps {
  id?: string;
  title: string;
  description: string;
  image: string;
}

export default function CitySection({
  id,
  title,
  description,
  image,
}: CitySectionProps) {
  return (
    <section id={id} className="scroll-mt-28">

      {/* TITLE */}
      <h2
        className="text-3xl md:text-4xl font-semibold mb-4 text-[#2c2c2c]
                   opacity-0 translate-y-10
                   animate-[fadeUp_1.2s_ease-out_0.2s_forwards]"
      >
        {title}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="text-gray-700 mb-8 leading-relaxed text-[15px]
                   text-left md:text-justify
                   opacity-0 translate-y-10
                   animate-[fadeUp_1.4s_ease-out_0.4s_forwards]"
      >
        {description}
      </p>

      {/* IMAGE */}
      <div
        className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md group
                   opacity-0 translate-y-10
                   animate-[fadeUp_1.6s_ease-out_0.6s_forwards]"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="object-cover transition-transform duration-700"
        />
      </div>

    </section>
  );
}