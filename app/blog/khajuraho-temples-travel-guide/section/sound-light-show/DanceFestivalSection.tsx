"use client";

import Image from "next/image";

export default function DanceFestivalSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Khajuraho Dance Festival - India's Most Beautiful Cultural Event
          </h2>

        </div>

        {/* Image */}

        <div className="mb-4 md:mb-6">

          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783329261/Shinjini_kathak_dance_indian_classical_khajuraho_festival_oejnfq.jpg"
              alt="Classical dancers performing during the Khajuraho Dance Festival with illuminated temples in the background"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>

        </div>

        {/* Content */}

        <div className="max-w-6xl mb-4 md:mb-6">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-6">
            Every year, in late February or early March , Khajuraho puts on one of India’s more celebrated
             classical dance events the Khajuraho Dance Festival , and it usually runs for six or seven 
             evenings in an open air amphitheatre., it feels less like “just a show” and more like real 
             cultural motion. Like, choreography is there of course, but the mood does half the job even 
             before the first mudra
          </p>

        </div>

        {/* Festival Details */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="border border-gray-200 rounded-md p-5">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
              Festival Dates
            </h3>

            <p className="text-[12px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Usually held during the last week of February and the first
              days of March. Exact dates vary each year.
            </p>

          </div>

          <div className="border border-gray-200 rounded-md p-5">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
              Venue
            </h3>

            <p className="text-[12px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Open-air amphitheatre at Shilpgram, located close to the
              Western Group of Temples.
            </p>

          </div>

          <div className="border border-gray-200 rounded-md p-5">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
              Tickets
            </h3>

            <p className="text-[12px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Available through Madhya Pradesh Tourism. Popular evenings
              often sell out, so advance booking is strongly recommended.
            </p>

          </div>

          <div className="border border-gray-200 rounded-md p-5">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
              Accommodation
            </h3>

            <p className="text-[12px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Hotels across Khajuraho fill quickly during the festival.
              Booking accommodation three to four months in advance is
              highly advisable.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}