"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0 md:mt-0 -mt-2">

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
          Best Time to Visit
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The best time to visit runs from October through March because the weather stays cool which 
            makes it perfect for exploring temples and going on outdoor wildlife safaris. The Aravallis 
            experience their hottest days during April through June but the monsoon season from July to 
            September creates lush green landscapes which might cause problems for drivers on the roads.
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
          How to Reach
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> By Air: The nearest airport is Udaipur (UDR), roughly 90 km away, with regular domestic connections from Delhi, Mumbai, and Jaipur.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> •	By Rail:  Falna Railway Station (~35-40km away) connects you via rail but majority of the travelers go by connecting railway stations in city of Udaipur for better train connectivity.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> •	By Road:  From Udaipur take private Car/ Taxi / Auto which will cover around 2 – 2.5 Hrs distance while covering beautiful Aravallis Route. State & Private Buses are available from City Of Udaipur ,Jodhpur ,Mount Abu To Our Town “Ranakpur” .
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
           Entry into the Ranakpur Jain Temple complex itself is free of charge for all visitors. There’s also a small fee involved if you want to bring cameras/mobiles inside. Non-Jain visitors will usually be admitted between approx 12PM-5PM – though this may vary slightly according to festivals, and during which times the temple is normally open for Jain devotees since dawn. It’s best to confirm timings on arrival (or via your tour operator) before heading out.
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
          Recommended Duration
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Allow at least 90 minutes to two hours within the temple itself. Half a day is enough to cover Ranakpur, while a day will be sufficient to visit either Kumbhalgarh or go on a wildlife trip.
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
           The city itself offers an affordable option with its temples offering free entry. Travelers can consider budgeting their money on things such as Private Transport, Guide Fees, Camera Charges & Dining/Safari Add-Ons respectively while luxury traveler who may go for Private Chauffeur-Driven Transfers along with Expert Guides & Heritage-Hotel Stays will need to have a Premium Budget accordingly.
          </p>
        </div>
      </div>

    </section>
  );
}