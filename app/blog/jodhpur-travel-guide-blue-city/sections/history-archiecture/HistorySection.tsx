"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Brief History of Jodhpur and the Marwar Kingdom
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jodhpur was founded in the year 1459 when Rao Jodha, the ruler of Rathore dynasty, founded his 
            capital in Jodhpur from Mandore, a small town near Jodhpur. Fort constructed by him was known 
            as Mehrangarh and the city surrounding this fort derived its name from his name. Since then till 
            today, Jodhpur has served as the capital of the Marwar state for about five hundred years. It 
            has always been the toughest and the most warlike princely state of Rajputana.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The cause for the prosperity of the rulers of the Rathore dynasty was their geographic location 
            in such a way that the trade routes of Delhi-Gujarat and western coastline passed through their 
            capital; Marwar was the only way through which opium, silk, sandalwood and copper could be traded 
            and thus the profits earned by them from these trades helped the rulers of Jodhpur build their 
            palaces and temples. Rulers of Jodhpur have won much fame throughout history for their skills 
            in warfare and horsemanship. Jodhpurs are famous breeches named after Maharaja Sir Pratap Singh 
            of Jodhpur.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786764803/rahul-chakraborty-Lw6Q0ip7-rM-unsplash_ecvzbn.jpg"
              alt="Jodhpur Blue City - blue-painted houses with Mehrangarh Fort view"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}