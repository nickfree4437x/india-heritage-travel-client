"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History: The Rise and Fall of the Bundela Capital
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The historical background of Orchha can be traced back to the year 1501 AD, when Rudra Pratap 
            Singh, the ruler of the Bundela Rajputs, laid down the foundation for this fort on this 
            particular island. Unfortunately, he did not live long to complete this task and the same 
            was left to be completed by his son Bharatichand. Hence, it is here that the capital city of 
            this place known as Bundelkhand came into existence.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Madhukar Shah was the ruler who ruled over the place from the years 1554 to 1592. It must be 
            noted that Madhukar Shah was a devotee of Lord Krishna while his queen Ganesh Kunwari was 
            devoted to Lord Rama; it is believed that this gave rise to the popular legend regarding the 
            temples of Orchha (refer below). The golden age of Orchha was that of the rule of Bir Singh 
            Deo during the seventeenth century. This intelligent friend of the Mughal prince Salim (future 
            Emperor Jahangir) made full use of this to construct many grand structures which included the 
            Jahangir Mahal, the Chaturbhuj Temple and many river banks.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789311989/pexels-thebioscopeguy-20000876_zzxvnj.jpg"
              alt="Sandstone palaces of Orchha, a hidden kingdom on the Betwa River"
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
          The relation of the city with the Mughals was at times both advantageous as well as disadvantageous. 
          As the Prince Aurangzeb launched an attack on the state of Orchha in 1635 and planted the Mughal flag 
          on the topmost tier of the Jahangir Mahal. The capital of the Bundela state could never recapture its 
          old glory and by the eighteenth century, the entire royal family shifted to Tikamgarh. But it was due 
          to this very decline that Orchha survived. There was nothing being built and Orchha has remained 
          preserved since the days of the decline of its royalty.	
        </p>
      </div>
    </section>
  );
}