"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The History of Ranakpur Jain Temple: A Fifteenth-Century Vision Carved in Marble
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            A tale of devotion and divine dreams leads back to the origins of the Ranakpur Jain Temple. 
            According to Jain traditions, the merchant Dharna Shah had a divine vision where he saw an 
            ethereal vehicle called Nalinigulma Vimana. Inspired by this vision, he decided to set up a 
            temple dedicated to gods and goddesses in this celestial vehicle’s image. So, he went to then 
            powerful ruler of Mewar – Rana Kumbh – asking him to provide a plot of land on which such a 
            temple could rise. But instead of rejecting his idea, the emperor sanctioned Dharna Shah’s 
            request wholeheartedly and even supported the construction process. And thus the settlement 
            got its name ‘Ranakpur’ in honor of the mighty Rana Kumbh who became a guardian figure of 
            this place.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Construction of the temple started in the mid-1400s and lasted almost five decades, roughly 
            between 1446 to 1496 CE. The main temple was designed in collaboration with dozens of master 
            sculptors & architects from different parts of India, led by Chief Architect Depa (or Deepaka). 
            A design so unique, so intricately crafted, so perfectly proportioned still remains a benchmark 
            of Jain temple designs even today.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788414823/pexels-roman-saienko-1867764487-29449926_oluq61.jpg"
              alt="The History of Ranakpur Jain Temple: A Fifteenth-Century Vision Carved in Marble"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          Now we come to another interesting episode of the temple’s history. When the 17th-century 
          turbulence reached this area, there are stories about how priests had secreted all the sacred 
          idols inside underground cellars to protect them from invaders. After escaping, they left the 
          temples to fall into disrepair and later these places were occupied by outlaws. In the 
          20th-century, when people realized that the spiritual essence of the place should not go to 
          waste, the entire Ranakpur region was rehabilitated by the Jain community along with heritage 
          authorities. Today, the site is maintained by the Archaeological Survey Of India and remains 
          among the most significant heritage sites of the Indian Sub-continent.
        </p>
      </div>
    </section>
  );
}