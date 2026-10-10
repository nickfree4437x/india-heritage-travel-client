"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Bundi: From Hada Rajputs to a Forgotten Kingdom
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The Hada Chauhan Rajputs founded Bundi during the 12th century after they lost their home in 
            Ajmer. The city features Taragarh Fort as its main landmark which Rao Deva Hada built on a 
            steep hill in 1354 to establish a strong military base for his new kingdom. The state of Bundi 
            continued to support the Rajput dynasty while it maintained its own Rajput princely state until 
            it established strong connections with the Mughal court but kept its unique architectural and 
            artistic traditions.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This structure beneath the fort developed through several generations as different rulers 
            built their own wings until finally Rao Ummed Singh built wings in the 18th century. It was 
            during this period that the famous miniature school of paintings of Bundi thrived. Afterward 
            came the period of the British when the disintegration and conversion of parts of the fort 
            started. Following independence and with the disappearance of royal patronage, Bundi fell 
            into oblivion as it no longer enjoyed the limelight of the bigger cities of Rajasthan. The 
            renowned author, Rudyard Kipling resided at Bundi's Sukh Mahal when he was writing his novel 
            Kim and said, "More the work of goblins than of men," about the palace.
          </p>
        </div>

        {/* Image */}
        <div className="md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788002406/dhabhai-kund-bundi-rajasthan-1-attr-hero_moxexm.jpg"
              alt="History of Bundi: From Hada Rajputs to a Forgotten Kingdom"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via incredibleindia
          </p>
        </div>
      </div>
    </section>
  );
}