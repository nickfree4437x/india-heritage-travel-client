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
          Flights & Transportation: Getting Around India
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Most folks coming from abroad touch down in Delhi, Mumbai or Bengaluru . From there, the inside 
            connections are pretty extensive , and also not that pricey compared to what Western travelers 
            pay. So, doing short flights is usually the smart move to cross long stretches, like going Delhi 
            to Udaipur , or Kochi .   
          </p>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Domestic flights: these are the quickest option when the hop is long; try to book maybe two to four weeks ahead during peak season.        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Private car with a driver: this is kind of the default for heritage wandering between nearby cities such as Delhi–Agra–Jaipur; it’s comfy, adaptable and honestly far less stressful than going the self-driving route.          
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Trains: Shatabdi and Rajdhani express services feel quite scenic, and they run efficiently for certain well-liked routes.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Local transport: auto-rickshaws and ride-hailing apps work nicely inside the cities for quick, laid-back errands.      
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}