"use client";

import Image from "next/image";

export default function BikanerSection() {
  return (
    <section id="bikaner" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Bikaner – A Desert Oasis Of History And Camels
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Bikaner is a desert gem with history twisted into its castles and palaces.
        Known as Camel Country, it’s a place where camels gracefully pass over the
        landscape, making the city more attractive.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/bikaner.jpg"
          alt="Bikaner"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}