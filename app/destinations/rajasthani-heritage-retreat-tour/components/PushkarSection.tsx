"use client";

import Image from "next/image";

export default function PushkarSection() {
  return (
    <section id="pushkar" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Pushkar – Where Desert Charm Meets Holy Peace
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Pushkar is one of the holiest cities of India and an ultimate pilgrimage
        destination. Famous for Pushkar Camel Fair, it offers a once-in-a-lifetime
        experience filled with culture, traditions, and vibrant festivities.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/pushkar.jpg"
          alt="Pushkar"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}