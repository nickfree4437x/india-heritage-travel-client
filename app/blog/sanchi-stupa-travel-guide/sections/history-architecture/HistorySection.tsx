"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History & Origins - From Emperor Ashoka to Modern Rediscovery
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784120005/003_Front_View__33709016166_vi4tzv.jpg"
              alt="The polished Ashoka Pillar at the Sanchi archaeological site in Madhya Pradesh"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Sanchi's story starts with Ashoka, who turned to Buddhism after the Kalinga War. He built 
            a brick stupa on the hill possibly influenced by his wife from nearby Vidisha. The Shungas 
            later enlarged it in stone, and the Satavahanas added four ornate toranas, making it a 
            masterpiece of Buddhist art.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            After Buddhism declined in India around the 12th century, Sanchi was abandoned and lay 
            hidden under vegetation for nearly six centuries. In 1818, British officer General H.H. 
            Taylor rediscovered it, but sculptures were removed by collectors. Later, between 1912–1919, 
            the ASI under John Marshall carried out major conservation work. UNESCO declared it a World 
            Heritage Site in 1989.
          </p>
        </div>
      </div>
    </section>
  );
}