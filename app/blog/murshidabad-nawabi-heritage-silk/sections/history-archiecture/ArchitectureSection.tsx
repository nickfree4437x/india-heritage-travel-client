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
          Architecture: Indo-Islamic Grandeur Meets Neoclassicism
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mb-2 md:mb-4">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The Katra mosque is an example of Mughal and Bengal brick architecture having arched structures, rooms, and a big courtyard.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Examples of neoclassical palaces are the Hazarduari palaces that incorporate European architectural vocabulary through the Italianate style into a nawabi setting.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Architecture for Muharram rites includes the Imambara and the Medina Masjid.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Designs combining garden and pavilion traditions are exemplified by Kathgola and Khushbagh, incorporating Persian garden design into the wet Bengal environment. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Marble Jain temples are represented by the Kathgola tracery, reflecting the mercantile background of the nawabs.
            </li>
          </ul>
        </div>

        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792580523/pexels-anshu-35466431_azdshs.jpg"
              alt="Hazarduari Palace facade - neoclassical architecture in Murshidabad"
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