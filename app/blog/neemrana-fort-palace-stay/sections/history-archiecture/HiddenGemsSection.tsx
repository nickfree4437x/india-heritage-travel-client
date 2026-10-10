"use client";

export default function NearbyAttractions() {
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
         Hidden Gems Most Visitors Miss
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Stepwell (baori): located approximately one kilometre away from the fortress, an 18th-century stepwell comprises nine storeys. It is a calm and beautiful architectural wonder, which should be seen at sunrise.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Viewing the stars: owing to low light pollution, the sky above the Aravalli range at night looks quite fascinating. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Using a camel-cart: it is a leisurely way to take a look at the villages and fields below the ridges.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Getting lost on purpose: the place is renowned for its maze-like structure. It will take you some time in your first day there to learn how it functions since the most interesting things can be found away from the path.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}