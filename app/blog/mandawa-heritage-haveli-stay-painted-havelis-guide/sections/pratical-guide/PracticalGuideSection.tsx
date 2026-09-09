"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-3 md:mt-0 -mt-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-1 
        ">
          Practical Travel Guide
        </h2>

        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Best Time to Visit Mandawa
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The period between October and March stands as the optimal season because daytime temperatures 
            stay moderate which enables visitors to explore the area through extended walking tours. The 
            period between April and June brings hot weather because temperatures rise above 40 degrees 
            which creates an unpleasant environment for exploring the havelis. The monsoon season begins to 
            affect the area during the months of July through September.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          How to Reach Mandawa
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By air: The closest airport is Jaipur International which is around 170 to 190 kilometers from Mandawa. It links up with lots of Indian cities and some places outside the country too. Getting there by private car with a driver takes about 3.5 to 4 hours I think. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By Rail Mandawa does not have its own train station. The nearest one is in Jhunjhunu roughly 27 to 28 kilometers away and it connects to Jaipur and Delhi along with Bikaner. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Mandawa is well-connected by road on National Highway 11. Jaipur is about 3–4 hours away, while Delhi is roughly 260 km (5.5–7 hours, depending on traffic). A private chauffeur-driven car is the most comfortable way to travel and combine Mandawa with other Rajasthan destinations.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Entry and Ticket Details
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Mandawa Fort now runs as a heritage hotel and people can usually walk through the public areas plus the museum sections after paying a small fee. Some of the privately owned havelis ask for entry money too and it is collected by the caretaker there. The amount is often fifty rupees up to one hundred fifty.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Suggested Duration
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            At least a day is required to cover the important havelis and fort of Mandawa; two days will suffice to go on a leisurely haveli walk and undertake trips to other Shekhawati towns nearby.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Budget Estimates
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Budget options work fine with simple guesthouses and local meals. A luxury heritage setup with a private guide and a restored suite seems to offer the best value through a specialist operator for Mandawa Heritage Haveli Stay. Pricing shifts quite a bit by season and property though. I think that part gets overlooked sometimes.
          </p>
        </div>
      </div>

    </section>
  );
}