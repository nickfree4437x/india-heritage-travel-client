"use client";

export default function IntroSection() {
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
          Insurance, SIM, ATM Fees & Other Practical Costs
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Travel insurance, expect like $40–120 for a two week trip, it really swings on age, coverage level , and trip price  - basically  non negotiable, because India’s private healthcare for foreigners can get expensive fast.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> SIM & internet: a tourist SIM with data (Airtel, Jio, Vodafone Idea) usually lands around $8–15 for 20–28 days of pretty generous data; eSIMs from places like Airalo are a bit higher, but you dodge the whole paperwork thing.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Currency & ATM fees: most ATMs hit you ₹150–250 ($2–3) each withdrawal, on top of whatever foreign transaction fee your home bank charges; withdrawing more money fewer times tends to make the overall pain smaller.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Tipping: roughly ₹100–200 per day for a private driver, about 10% at restaurants if there’s no service charge, and ₹50–100 per bag for porters  - all of it is pretty normal and people do appreciate it.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Shopping & souvenirs: total chaos range, but think a hand block printed textile for $15–40, a smaller pashmina around $30–80, and a Jaipur silver jewelry item $20–150+ , before you even start bargaining. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}