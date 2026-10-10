"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Understanding the Indian Rupee
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The Indian Rupee , symbol ₹ , ISO code INR , is India’s only real legal tender , basically. Like 
            , there is not much of any shop , hotel , taxi , vendor who is forced to accept US dollars euros 
            or any other outside currency, and most simply won’t , you know. Right now the banknotes that are 
            getting around are ₹10, ₹20, ₹50, ₹100, ₹200, ₹500 , and also ₹1, ₹2, ₹5, ₹10, ₹20 coins are in 
            the mix too. The ₹2,000 note , which used to be pretty common, was pulled from circulation in 
            2023, and it isn’t valid tender anymore , so if it somehow pops up in your change, just refuse it.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The exchange rates don’t really stay put, they wobble each day , like clockwork but not quite. 
            Still for rough planning in 2026, one US dollar is about ₹94 , one British pound is around ₹125, 
            and one euro comes out near ₹108. Even so, check a live converter right before you travel, don’t 
            rely on one fixed number only, because currency markets shift from week to week, sometimes quite 
            fast.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785760980/pexels-dhruv-pulipaka-2153070585-33821795_p7b4ee.jpg"
              alt="Understanding Indian rupee notes and coins - currency guide for tourists"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}