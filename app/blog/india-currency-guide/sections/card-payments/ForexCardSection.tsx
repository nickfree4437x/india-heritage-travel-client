"use client";
import Image from "next/image";

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
         Forex Cards: The Middle Path Between Cash and Cards
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
             A prepaid forex travel card, loaded in your home currency before you leave and used like a debit 
             card in India, gives a kind of halfway option that feels practical. It kind of fixes your exchange 
             rate upfront, cuts down the annoying cycle of repeated ATM fees, and honestly it’s more safer to 
             carry than big stacks of cash, because if it goes missing you can block it right away. Loading fees 
             usually land around 1%–3% , including the taxes that apply, so it’s worth checking different providers 
             before you pour in a big amount, and try to keep a spare or backup card too, just in case the first 
             one gets declined.    
          </p>

          {/* Image */}
          <div className="">
           <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
             <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785810857/pexels-davegarcia-32642488_kvhszt.jpg"
                alt="Forex cards for India travel - middle path between cash and credit cards 2026"
                fill
                sizes="100vw"
                className="object-cover"
             />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             Image via pexels
            </p>
          </div>

          <h3 className="leading-relaxed text-[14px] md:text-[16px] font-semibold tracking-wide text-[#2c2c2c] ">
            Payment Safety & Fraud Prevention   
          </h3>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Try to keep the smaller denominations sort of apart from the larger notes, so you’re not showing this thick wad of cash every single purchase. It seems like a tiny thing but it add up.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> When you need cash, use ATMs that are inside a bank branch, an airport, or a hotel lobby , instead of those free standing street machines once it gets dark. Also , covering the keypad when you type your PIN helps a lot, and if some stranger offers “help” at the ATM , just decline it right away.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Make sure transaction alerts are turned on for your card as well as your UPI wallet , so you catch any weird or unauthorized activity immediately. It’s also smart to keep both a digital copy and a physical note of your bank’s international helpline number, just in case you have to block a card in a hurry.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> And when exchanging money, photograph or jot down the exchange receipts , then count the cash before you leave the counter , not after.    
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}