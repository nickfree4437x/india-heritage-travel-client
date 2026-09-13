"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> There are some spots worth looking at from Orchha if you have time. Jhansi fort sits really close, maybe 16 km, and it goes back to the 17th century. It ties into Rani Laxmibai and that whole 1857 mutiny period. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Datia palace feels similar in a way, about 40 km out, with its seven stories and Bundela style that matches what you see around Orchha. I think that part stands out if you like architecture. Gwalior is farther at 120 km but has the fort plus some heritage places from the Scindia time.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Khajuraho comes up a lot too at roughly 175 km with those temple sculptures and the UNESCO status. It seems like it could fit into a bigger Madhya Pradesh trip since it combines easily with Orchha. Some people see it as a must while others skip it depending on how much driving they want.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}