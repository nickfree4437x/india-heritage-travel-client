"use client";

export default function NearbyAttractions() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions and Day Trips
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Nawalgarh is about 35 to 40 km from here. Lots of folks describe it as the well known painted place in Shekhawati. The Podar Haveli Museum is a key stop too.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Fatehpur is around 21 to 26 km away. While you are there, you can look at Mohan Saraf Haveli. You can also see Le Nadine Haveli. Both are spoken of as places that were brought back with care.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Dundlod sits near 20 to 30 km from this route. The town is connected with Dundlod Fort. You can also find the Goenka Haveli there. The cenotaphs in the area are another major draw.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ramgarh Shekhawati is not far, roughly 27 km. The town is known for a set of well painted chhatris. These are the cenotaphs that locals and travelers point out.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jhunjhunu is the district base. It is also the closest rail point. You can explore older havelis and temple spots within the city. 
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}