"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture: Reading the Stone of Ahilya Fort
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           The Ahilya Fort occupies an area of around three acres on the hillock that rises directly from 
           the Narmada River, surrounded by high walls, which have five gates. Two of these gates, which 
           are frequently used, are called Kamani Darwaza and Ahilya Dwar, which were designed to allow 
           the elephants and palanquins of Holkar to enter them easily. Architecturally, this fort 
           combines the Maratha scale with Rajput ornamentation, and sometimes, also the Mughal, and even 
           French architectural influence added during later renovation work.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           One only needs to observe the carvings on the plinths and temple friezes to notice the very 
           motifs that were eventually adapted on Maheshwari saris – wave motifs signifying the river, 
           diamond motifs, and stylized motifs of cotton flowers. The chhatris or memorial towers within 
           the fort have been erected in memory of Ahilya Bai Holkar and other members of the Holkar family. 
           The steps within the fort take one down directly to the river Narmada via the Paani Darwaza or 
           the water gate.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789549085/pexels-shravankhare-10932678_xgmuws.jpg"
              alt="Ahilya Fort architecture - stone carvings and Maratha design in Maheshwar"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        </div>
    </section>
  );
}