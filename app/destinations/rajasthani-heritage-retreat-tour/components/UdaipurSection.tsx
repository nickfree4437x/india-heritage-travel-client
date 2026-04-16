"use client";

import Image from "next/image";

export default function UdaipurSection() {
  return (
    <section id="udaipur" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Udaipur – Where Romance And Royalty Reign
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Udaipur lies in the heart of India, a city that combines love and richness.
        Explore majestic palaces, ancient temples, and graceful Havelis. Discover
        bustling markets and breathtaking sunset views on Lake Pichola.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/udaipur.jpg"
          alt="Udaipur"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}