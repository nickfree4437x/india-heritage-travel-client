"use client";

import Image from "next/image";

export default function Munnar() {
  return (
    <div id="munnar" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Munnar – South India’s Alpine Haven
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[15px] space-y-4 text-justify">

        <p>
          Munnar, the mesmerising hill-station in the{" "}
          <span className="font-semibold text-black">
            Western Ghats of Kerala
          </span>, 
          is famous for its amazing rolling hills, cool climate, beautiful valleys & tea plantation. Also referred to as the “Kashmir of South India”, it’s a place of natural beauty. Located along the banks of three beautiful rivers – Madupetti, Nallathanni, and Periavaru, Munnar also have vast tea plantations & natural bird sanctuaries. Here you can also explore the tea museums & factories to learn more about the process of tea production. It have a rich biodiversity & breath-taking scenery, makes it a perfect gataway dor trekkers & nature lovers..
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/munnar.jpg"
          alt="Munnar Tea Plantations"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}