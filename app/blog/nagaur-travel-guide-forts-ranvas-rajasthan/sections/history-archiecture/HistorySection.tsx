"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Nagaur: From Nagavanshi Kings to Rathore Rule
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nagaur’s history goes back further than most travelers are already used to hearing about, in 
            Rajasthan. Local tradition and a few inscriptions basically map the town’s beginnings to the 
            Nagavanshi rulers, who are said to have built the first mud and earthen walls of what later 
            became Ahhichatragarh as soon as the 4th century, and yes the name itself is a kind of word-mix, 
            Naga (serpent) plus pur (town), so the fort keeps its well-known sobriquet Fort of the Hooded 
            Cobra. The town is also tossed into the Mahabharata in passing too, which is one more reason 
            people feel it is so very old compared with Rajasthan’s more loudly advertised royal centers.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            After that, over the centuries , Nagaur kept changing ownership in a loop. Chauhan and other 
            Rajput lineages held it at different moments, then medieval incursions from Delhi as well as 
            Gujarat brought Muslim rulers who left their own architectural and cultural fingerprints 
            during those campaigns. By the 16th and 17th centuries, the fort was seeing heavy rebuilding, 
            a lot of reshaping, and it kept evolving. From the 17th century onward, Nagaur finally landed 
            in the steady control of the Rathore Maharajas of Jodhpur, and they, eventually, turned it 
            from just a military anchor into a place for art, leisure, and royal respite, more refined 
            than what it started out as.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787370329/pexels-rehman-yousaf-321165099-14196150_ctguwh.jpg"
              alt="Nagaur history - Nagavanshi kings to Rathore rule and Ahhichatragarh Fort"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}