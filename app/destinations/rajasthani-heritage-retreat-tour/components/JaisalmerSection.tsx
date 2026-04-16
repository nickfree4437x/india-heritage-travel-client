"use client";

import Image from "next/image";

export default function JaisalmerSection() {
  return (
    <section id="jaisalmer" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Jaisalmer – Where Desert Stories Come Alive
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Jaisalmer, where humans and animals have acquired the desert together for
        centuries. A camel ride takes you to a bygone era, showcasing the strength
        and productivity of its people.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/jaisalmer.jpg"
          alt="Jaisalmer"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}