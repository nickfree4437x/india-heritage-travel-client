"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Short History of Royal Dholpur
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There are layers of history associated with Dholpur. According to tradition, the earlier name 
            of the settlement was Dhawalpuri and it is attributed to be founded by Raja Dholan Deo Tomar 
            in the 8th century, but the documentation dates from a much later period. Jadu rulers of Karauli 
            are documented as building a fort here in the early 12th century. Due to its location near the 
            Chambal River, the town served as a passage for the armies moving towards Malwa and Gwalior and 
            appears many times in the records of the Delhi Sultanate and Mughals.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The founder of the Mughal dynasty, Babur, arranged a garden in this place between 1527 and 
            1530 on a red-sandstone ridge above the Chambal River. Further, in 1540 Sher Shah Suri 
            reconstructed the fort in the river and called it Shergarh. In the early 17th century there 
            was a lake and lodge of Talab-e-Shahi erected as the hunting place for Prince Shah Jahan.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In 1805 the modern princely state was formed with the transfer of Jats of the Bamraulia 
            family from Gohad to Dholpur. Dholpur became a British protectorate in 1806. Rana Kirat 
            Singh was the ruler until 1836, then followed by Bhagwant Singh (1836)
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791977000/images_2_mq4x8g.jpg"
              alt="Dholpur location - eastern Rajasthan near Chambal River"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>
      </div>
    </section>
  );
}