"use client";

import Image from "next/image";

export default function MandawaSection() {
  return (
    <section id="mandawa" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Mandawa – A Town Of Timeless Heritage And Beauty
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Mandawa is a town where walls speak tales of artistry. This Rajasthani gem
        has its streets decorated with beautiful frescoes and havelis, each a live
        canvas of history and beauty.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/mandawa.jpg"
          alt="Mandawa"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}