"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div>
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-6">
            Let Us Design Your Perfect India Itinerary
          </h2>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light">
            Whether you choose the iconic <strong><a href="https://www.indiaheritagetravel.com/tours/majestic-golden-triangle-tour" className="hover:underline">Golden Triangle Tour</a></strong>,
            an immersive <strong><a href="https://www.indiaheritagetravel.com/tours/rajasthani-heritage-retreat-tour" className="hover:underline">Rajasthan Tour</a></strong>, or a seamless journey
            combining both, India Heritage Travel creates fully customised,
            chauffeur-driven experiences designed around your interests, travel
            style, and preferred pace.
          </p>

          <p className="max-w-6xl mx-auto mt-5 text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light">
            Every itinerary is personally curated by our destination experts -
            with carefully selected heritage hotels, experienced local guides,
            private transportation, and thoughtful recommendations that help
            you experience India beyond the ordinary.
          </p>

        </div>

        {/* Highlights */}

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-center">

          {[
            "Private Chauffeur-Driven Tours",
            "Luxury & Heritage Palace Stays",
            "Expert Local Guides",
            "24/7 Travel Support",
          ].map((item) => (

            <span
              key={item}
              className="px-4 py-2 text-[12px] sm:text-[12.5px] border border-[#e7dfd4] bg-white text-[#2c2c2c] rounded-full"
            >
              {item}
            </span>

          ))}

        </div>

        {/* CTA */}

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">

          <Link
            href="/customize-your-journey"
            className="inline-flex items-center gap-2 bg-[#AF956C] hover:bg-[#9b815c] transition-colors duration-300 text-white px-7 py-3 rounded-md text-[12px] md:text-[13px]"
          >
            Design My Itinerary
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#AF956C] text-[#AF956C] hover:bg-[#AF956C] hover:text-white transition-colors duration-300 px-7 py-3 rounded-md text-[12px] md:text-[13px]"
          >
            Speak to Isha

          </Link>

        </div>

        {/* Bottom Note */}

        <div className="mt-8 text-center">

          <p className="text-[12px] sm:text-[13px] text-gray-500 font-light">
            Free consultation • Fully customised • No obligation
          </p>

        </div>

      </div>

    </section>
  );
}