"use client";

export default function IntroSection() {
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
          Cash vs Cards in India: What Actually Works Where
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
             India sort of runs on this layered payment economy, and what works right for you depends completely 
             on the spot where you end up standing. In luxury hotels , fine dining places, airlines, bigger 
             retail chains and a lot of tourist-facing shops in Delhi Mumbai Jaipur and Goa, you’ll usually 
             see Visa, Mastercard and increasingly American Express doing the heavy lifting.    
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Five-star hotels and luxury resorts - usually card and UPI are accepted, cash is rarely needed, except for tips.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Fine dining, and city restaurants - cards work well; smaller cafés sometime lean more to UPI or a bit of cash.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Local markets, bazaars and street food - mostly cash, or scan a UPI QR code. Cards are almost never taken.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Auto-rickshaws and taxis - cash or UPI. App-based rides like Uber, Ola may accept cards inside the app.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Temples, monuments, and heritage sites - keep small cash notes for entry, offerings, and even for shoe-minders, just in case.    
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}