"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food and Shopping in the Blue City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The Marwari cuisine, shaped by Rajasthan's arid climate, once lacked fresh vegetable dishes 
            but is now one of India's most distinctive food traditions - with Jodhpur as its unofficial 
            capital. Don't miss local specialities like mirchi vada (spicy stuffed chilli), mawa kachori 
            (sweet nutty pastry), and the famous makhaniya lassi served at a century-old restaurant near 
            the Clock Tower.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The well-known traditional dish of dal baati churma - Rajasthan's signature - should be tasted 
            in a good thali restaurant. 
          </p>
        </div>
      </div>
    </section>
  );
}