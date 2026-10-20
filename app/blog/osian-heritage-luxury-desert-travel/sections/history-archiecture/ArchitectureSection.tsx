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
          Reading the Stone: Pratihara Architecture
        </h2>
        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
          Osian acts like a real-life class on early Gurjara-Pratihara temple architecture. Temples have 
          raised platforms, entrance porch leading to the shrine, and above all, they have a tiered tower 
          with ribbed and gooseberry-shaped amalaka. The wall decoration of the temples is in bands, where 
          gods in niches, dancing maidens at corners, and mythological stories in between.
        </p>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mb-2 md:mb-4">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Go through the plinths. Their heights distinguish the shrines from the village and reflect their well-planned nature.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Pay attention to the niches. The images of different manifestations of Vishnu, Shiva, and the guardians have been carved according to certain iconographical conventions.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Look up in the shrines. The decorative ceilings and pillar brackets exemplify the best carvings, especially those in Jain shrines.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Look at the pillars. The motif of the vessel overflowing with plenty is found on the pillars of the Sun Temple.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Scholars view Osian's temples as crucial evidence of the Maru-Gurjara style's evolution - a language that later blossomed at Mount Abu and Ranakpur. This context enriches every future temple visit across Rajasthan.
            </li>
          </ul>
        </div>

        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792495076/pexels-hemant-singh-chauhan-639506990-38205192_jjoxoo.jpg"
              alt="Osian temples - evolution of Maru-Gurjara architecture"
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