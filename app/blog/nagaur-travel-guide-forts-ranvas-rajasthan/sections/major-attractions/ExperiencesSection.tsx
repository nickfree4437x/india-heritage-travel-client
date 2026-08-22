"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Best Experiences in Nagaur
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦ A guided heritage walk through Ahhichatragarh's palace wings, museum galleries and gardens 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	A tuk-tuk cultural tour through old Nagaur, stopping at the Sufi dargah, temples and artisan workshops 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	A private dinner in one of the fort's restored courtyards, lit by oil lamps
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	Sundowners on the fort ramparts, watching the town settle into evening below 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦	A jeep safari or camel cart ride into the surrounding desert landscape 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              ✦ Time simply spent in Ranvas's gardens and pool courtyard - a rare chance to sit still inside a functioning Rajput palace
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}