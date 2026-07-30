"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
         Suggested Women's Luxury Itinerary (7 Days)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1 – Landing in Delhi Private airport transfer, then check in to a heritage minded five-star stay, and that easing in evening thing … maybe a rooftop dinner, with the city lights just kinda hanging around.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2 – Delhi Heritage Tour Private guided wander through Humayun’s Tomb, the Qutub Minar complex and then Old Delhi’s spice and textile bazaars, with a female guide who’s fluent in the city’s Mughal and colonial “layers” , not just facts.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 3 – Agra & the Taj Moment Very early private drive to Agra, sunrise Taj Mahal visit before the crowds think they own the place, then Agra Fort, after that a calm heritage hotel lunch, no rushing really. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 4 – Head On to Jaipur Scenic private drive to Jaipur, stop at Fatehpur Sikri along the way, and then arrival with enough time for an evening at leisure in a palace style hotel.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 5 – Jaipur: Forts & Craft Amber Fort in morning glow, City Palace and Jantar Mantar by midday, then a block printing workshop in the afternoon with a local artisan family-more hands on than just watching.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 6 – Udaipur: The City, of Lakes Fly or drive to Udaipur. Sunset boat ride on Lake Pichola, and then dinner at a lakeside palace restaurant, where the breeze does half the entertaining.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 7 – Udaipur Loose Ends & Departure A slow morning, spa treatment or a private cooking class, before transfer to the airport for onward travel.   
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}