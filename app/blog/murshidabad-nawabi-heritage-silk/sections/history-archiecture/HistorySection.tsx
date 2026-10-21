"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           A Short History: Capital of the Bengal Nawabs
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             The town is named after Murshid Quli Khan, the appointed Mughal governor who shifted the 
             capital of the Bengal Subah from Dhaka to Murshidabad during the early 18th century and 
             created the town named after him. As the rule of the Nawabs of Bengal followed his, the 
             town prospered and became one of the wealthiest towns in India. The banking family like 
             Jagat Seths funded the rulers while European factories existed nearby at Cossimbazar for 
             trade of silk and textiles.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This prosperity came to an abrupt end in 1757 when the young Nawab Siraj ud-Daulah was 
            defeated at the Battle of Plassey, betrayed partly by his own commander Mir Jafar, and 
            soon assassinated. Calcutta became the treasury and court of Bengal, and the Nawabs became 
            purely ceremonial. The latter Nawabs of Bengal, Nazims as they are called due to British 
            supremacy, continued their building and the Hazar Duari Palace and reconstructed Nizamat 
            Imambara belong to this period.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            It explains the peculiar atmosphere of this town, grandiose yet melancholy, a capital which 
            lost its kingdom but preserved its monuments. The Hazar Duari Palace was declared Monument 
            of National Importance in 1977 and is maintained by the Archaeological Survey of India since
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792579643/pexels-chandi-saha-706198694-18509459_xtliqq.jpg"
              alt="Murshidabad history - capital of the Bengal Nawabs and Nawabi heritage"
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