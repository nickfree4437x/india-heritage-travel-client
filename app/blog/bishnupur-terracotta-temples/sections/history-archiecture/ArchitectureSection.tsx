"use client";
import Image from "next/image";

export default function NearBySection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Reading the Clay: Bengal Terracotta Architecture
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mb-2 md:mb-4">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Curved "bangla" roofs. The curved eaves imitate bamboo and thatch, designed to shed monsoon rain.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Temple types. Look for the pancha-ratna (five-tower) design of Shyam Rai, the single-tower (eka-ratna) form of Madan Mohan and the twin-hut jor-bangla of Keshta Rai.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Relief panels. Fired-clay tiles, moulded and carved, tell stories from the Ramayana, the Mahabharata and Krishna's life, along with scenes of hunts, music and daily life.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Laterite and brick. Where stone was used, it was laterite, a soft reddish rock common in the region; brick and terracotta supplied the fine detail.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Raised plinths. Most temples stand on platforms, a practical response to Bengal's floods.
            </li>
          </ul>
        </div>

        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792828636/Terracotta_work_on_Jor_Bangla_temple__Bishnupur_3_pl8xlq.jpg"
              alt="Bengal terracotta architecture - Bishnupur temples with carved clay panels"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>

    </section>
  );
}