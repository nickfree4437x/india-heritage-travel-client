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
          md:mb-2
        ">
          Luxury, Family & Solo Traveler Tips
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> For luxury travelers : take the route with a private, chauffeur-led itinerary instead of group transport, lock in a heritage haveli hotel for at least 1 night just for the vibe, and for the Sam Sand Dunes stretch pick a top-tier desert camp that has private tented suites , not the kind with shared-camp setup.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> For families: desert camps with dedicated family tents are often easier than in-fort heritage hotels with narrow stairs and cramped spaces. Build in breathing room between the fort, havelis, and desert transfer - so kids aren't running a nonstop schedule in the heat.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> For solo female travellers: Jaisalmer is comfortable and welcoming when arranged through a trusted operator with vetted drivers, women-only tour options, and private vehicles. India Heritage Travel includes this as standard in its women-only and private tour itineraries.
            </li>
          </ul>

        </div>
      </div>

    </section>
  );
}