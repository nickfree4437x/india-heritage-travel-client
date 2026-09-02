"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The Kumbhalgarh Fort situated in Mewar seems to be more of an area of origin than an area 
            which is visited. The people take it as an area where the warrior king of Maharana Pratap 
            was originated who struggled against Mughals for his freedom. This story has been passed 
            on from generation to generation through the folklore of Rajputs and not just from classes 
            on history but also from the night show organized at the fort using light and sound show.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Walking through the fort, one sees both Jain and Hindu temples existing together. This makes a 
            perfect picture of how the religion flourished in Mewar for a very long time. The Kumbhalgarh 
            Fort Festival, organized for three days, adds much more color to the whole picture. This includes 
            folk music, dances, and cuisine of Rajasthan.
          </p>
        </div>
      </div>
    </section>
  );
}