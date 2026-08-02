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
          Safety & Cybersecurity Tips
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Try not to log into any banking apps, or type in payment details, when you’re on open public Wi‑Fi, it ’s safer to use your own personal SIM or eSIM data connection instead.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Make sure your phone has a lock screen PIN, or a biometric lock, because it will be the key tool for payments, bookings, and basically messaging during the whole trip.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Also, save your carrier’s customer care number and your accommodation’s contact info, offline, so if you’re in some remote place and signal drops you can still reach them.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Be a bit wary about random SIM swap offers, or any KYC related calls/messages, most carriers don’t usually ask for OTPs over the phone.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> When you’re installing an eSIM app or travel apps, stick to official app stores only. And before you buy any plan, double-check the provider’s India coverage first.  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}