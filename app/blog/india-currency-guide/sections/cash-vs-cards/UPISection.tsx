"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
         UPI for Tourists: India's Digital Payment Revolution
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            There is one shift that has kinda changed the way foreigners spend money in India, and it is 
            UPI - the Unified Payments Interface. Made by the National Payments Corporation of India (NPCI) 
            , UPI allows people to pay straightaway by scanning a QR code, and now it feels like the default 
            everywhere from five star spas to that roadside chai stall situation.    
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Before, UPI really needed an Indian bank account plus a phone number, so it kinda locked tourists 
            out, like fully. Now it’s different, with UPI One World, a kind of framework that lets overseas 
            visitors add money into a prepaid wallet using their passport and visa , and pay using UPI QR 
            codes, without ever needing to open an Indian bank account.    
          </p>

          <h3 className="leading-relaxed text-[14px] md:text-[16px] font-semibold tracking-wide text-[#2c2c2c] ">
            How to set up a tourist UPI wallet    
          </h3>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Pick an authorized UPI One World provider  - in practice there are kiosks at international arrivals in Delhi, Mumbai and Bengaluru airports, or you can download a approved app before you fly.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Finish KYC using your passport along with your Indian visa , (usually the e-visa approval or an entry stamp is enough).      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Add funds to the wallet Image via an international debit  credit card , or simply trade cash at the counter.     
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Scan any UPI QR code - at a shop, hotel , taxi stand or market stall - and settle it right away in rupees .    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Temples, monuments, and heritage sites - keep small cash notes for entry, offerings, and even for shoe-minders, just in case.    
            </li>
          </ul>

        </div>

        {/* Image */}
        <div className="mt-2 md:mt-4 mb-1 md:mb-2">
            <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785761698/pexels-julio-lopez-75309646-29502353_obax2n.jpg"
                alt="Complete UPI payment guide for international tourists in India 2026 - QR code app setup and usage"
                fill
                sizes="100vw"
                className="object-cover"
            />
            </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
            </p>
        </div>
        <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The advantage is kind a real: once your wallet is topped up, transactions come with no extra, 
          per-payment fee, because the money swap happens once, during the loading time, not on every 
          single swipe. So, UPI ends up being one of the lowest-cost options to pay in India as a tourist 
          in 2026, if you load smaller amounts back to back, instead of putting one big lump sum at the 
          beginning. Also, if there’s unused balance left, it can usually be refunded at the airport 
          before you depart, but that involves paperwork, which is kind of a hassle and best to avoid when 
          you can.    
        </p>

      </div>
    </section>
  );
}