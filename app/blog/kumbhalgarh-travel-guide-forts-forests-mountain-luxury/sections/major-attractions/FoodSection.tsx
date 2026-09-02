"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Food & Where to Eat
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Kumbhalgarh may not feel big, but the meals here are anything but.  You can try Mewari and 
            Marwari dishes without trouble. Many visitors ask for dal baati churma.Others order gatte ki 
            sabzi.  Ker sangri is also a common pick.  Ker sangri comes from the Thar desert belt.  It is 
            cooked with berries and beans.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Around the fort, many boutique hotels serve thalis for dinner. Each thali brings several 
           Rajasthani dishes in one meal. The vegetables used for these dishes often come from the 
           hotels own garden plots. Some hotels also have roof top places to eat. Others have forest 
           view restaurants. Diners can watch the fort scenery while the sun goes down.
          </p>
        </div>
      </div>
    </section>
  );
}