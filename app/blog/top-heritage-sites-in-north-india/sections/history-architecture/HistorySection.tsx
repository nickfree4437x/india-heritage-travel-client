"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Quick History: Delhi Sultans, Mughals and Rajputs
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784525039/pexels-sudeep-kumar-173738022-23885155_fow9qt.jpg"
              alt="North India history - Delhi Sultans Mughals and Rajputs heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            It starts with the Delhi Sultanate, which from around the 12th century began sending Indo-Islamic 
            architecture into the subcontinent - the Qutub Minar, begun in 1199, remains its most enduring 
            monument. Then comes the Mughal Empire, founded in 1526, which refined those earlier ideas to 
            produce Humayun's Tomb, Fatehpur Sikri, Agra Fort, the Red Fort, and at the peak of Mughal wealth, 
            the Taj Mahal. Running alongside this imperial story, the Rajput kingdoms of Rajasthan - Jaipur, 
            Jodhpur, Udaipur - built hill forts and city palaces, blending their own martial traditions with 
            Mughal ornamentation, resulting in masterpieces like Amber Fort and Jaipur's City Palace.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            Beyond the monuments of power lies North India's living religious heritage - the Sikh Golden 
            Temple in Amritsar, established in the 16th century, and the ghats of Varanasi, one of the 
            world's oldest continuously inhabited cities and a Hindu pilgrimage hub for millennia. Put 
            these three strands together - Sultanate, Mughal-Rajput, and spiritual - and you understand why 
            North India's heritage circuit feels far richer than any single monument, no matter how famous. 
          </p>
        </div>
      </div>
    </section>
  );
}