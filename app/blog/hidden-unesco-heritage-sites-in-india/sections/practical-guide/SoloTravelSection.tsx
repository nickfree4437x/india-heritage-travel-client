"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Solo Traveler Tips
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784612640/rachita-saxena-YB7fl-OKxxY-unsplash_toryto.jpg"
              alt="Solo traveler exploring South India - heritage sites with guide and local tips"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            South India’s temple towns and heritage sites are usually pretty manageable for solo travelers, 
            like there’s this steady visitor flow through the day and overall it feels calmer than some of 
            North India’s more hectic cities. For solo female travelers in particular, having pre arranged 
            private transport between towns, plus vetted local guides, and staying somewhere with solid 
            solo traveler reviews really changes things. It matters even more around Hampi where the ruins 
            are more spread out, so moving from place to place can feel less spontaneous and more smooth, 
            if you plan it a bit.
          </p>
        </div>
      </div>
    </section>
  );
}