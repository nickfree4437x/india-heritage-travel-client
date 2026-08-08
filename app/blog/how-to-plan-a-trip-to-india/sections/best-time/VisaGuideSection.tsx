"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          India Visa Guide: Entry Requirements for International Travelers
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            India Visa Guide, for international people going in 
            <br/> 
            Entry Requirements and stuff to know  
            <br/>
            So the visa part is basically where you start planning, because it really decides your travel 
            dates and how smooth the whole thing goes. Nowadays, most international leisure travelers enter 
            India using an electronic Tourist e-Visa. You usually apply online before you depart, not do that 
            on arrival, because that’s just how it tends to work.  
          </p>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 30-day e-Tourist Visa  - double entry, overall one of the quickest and cheap-ish choices if you are doing a single heritage trip.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 1-year e-Tourist Visa - multiple entry, good fit for travelers who are thinking about more than one trip within twelve months.        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 5-year e-Tourist Visa - multiple entry, probably the best value for frequent visitors, but it’s also subject to current availability, so check that part.    
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Most nationalities can stay up to 90 days per visit, while US, UK, Canadian, and Japanese citizens 
            are allowed up to 180 days. Visa processing takes a few business days, but apply 3–4 weeks before 
            departure to avoid last-minute stress. You'll need a passport valid for six months beyond arrival, 
            a digital photo, and a pre-arrival e-Arrival Card. Since rules and fees change, double-check the 
            official e-Visa portal before booking flights.  
          </p>

        </div>

      </div>
    </section>
  );
}