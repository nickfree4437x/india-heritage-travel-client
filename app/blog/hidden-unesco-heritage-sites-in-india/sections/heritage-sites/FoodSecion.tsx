"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food to Pair With the Journey
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Each region rewards the traveler about as much at the table as it does at the monument, sort 
            of same vibe. In Gujarat , you might expect a classic thali that is built around dhokla undhiyu 
            and shrikhand, and it’s best sampled in Vadodara or Ahmedabad before or after a Champaner day 
            trip. Madhya Pradesh’s Bhopal is known for Mughlai-influenced non-vegetarian cooking, paired 
            with simple sturdy poha for breakfast… which feels almost like it should be there every morning. 
            Karnataka’s Hassan district, gateway to the Hoysala temples , is a really good stop where you 
            can sip Mysore-style filter coffee and also try a traditional Karnataka thali on a banana leaf. 
            And in Assam, look for khar- that distinctive alkaline-based dish-and for black rice, both of 
            these are tightly linked to Ahom-era food culture.
          </p>
        </div>
      </div>
    </section>
  );
}