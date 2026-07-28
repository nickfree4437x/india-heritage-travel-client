"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          A 7-Day Pre-Trip Safety Checklist
        </h2>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            7 Days Before
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Confirm accommodation, airport transfer and internal transport for your full route.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            5 Days Before
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Register with your embassy's traveller programme and share your itinerary with a contact at home. 
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            3 Days Before
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Set up an eSIM or arrange a local SIM on arrival, and install your chosen safety and translation apps.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            1 Day Before
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Photocopy your documents, split your cash and cards, and pack your daypack with essentials.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 md:mb-1">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day of Arrival
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Meet your pre-booked transfer, complete a check-in message home, and confirm your first two days' plan with your guide or hotel.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}