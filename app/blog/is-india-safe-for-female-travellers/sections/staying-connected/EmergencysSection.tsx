"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Emergency Preparedness and Health
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Like most international getaways, a bit of prep really does a lot, even if it feels small at the start: 
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Save the national emergency number 112 and also the embassy contact details before you actually travel.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Let a friend or family member at home know your day by day plans, plus where you’re staying and the hotel info, just so it’s there if anything happens.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Make sure your travel insurance is solid and comprehensive, especially for medical evacuation; the private healthcare in India is very good, but it isn’t free. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bring a basic health kit (rehydration salts, any required prescription medication, hand sanitiser) and stick to bottled or filtered water, even when it feels overkill.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}