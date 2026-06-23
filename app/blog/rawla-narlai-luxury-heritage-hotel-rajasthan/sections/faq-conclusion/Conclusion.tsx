
"use client";

import Link from "next/link";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white  pb-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* CONCLUSION */}

        <div className="max-w-6xl mx-auto mb-10">

          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-6 leading-tight">
            Why You Must Include Rawla Narlai in Your Rajasthan Journey
          </h2>

          <p className="text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Among Rajasthan's many heritage properties, Rawla Narlai stands
            apart not because of its size or grandeur, but because of the depth
            of experiences it offers. Every aspect of the property - from its
            beautifully preserved 17th-century architecture to its intimate
            courtyards and centuries-old stepwell - creates a rare connection
            between history, culture, and luxury.
          </p>

          <p className="text-gray-700 mb-5 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether you arrive for the unforgettable Jawai Leopard Safari, the
            legendary Stepwell Soirée, the serenity of the Aravalli landscape,
            or simply the opportunity to experience authentic Rajput heritage,
            Rawla Narlai consistently delivers moments that stay with you long
            after your journey ends.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            More than a heritage hotel, Rawla Narlai is a destination in its
            own right - a place where Rajasthan's royal legacy, natural beauty,
            wildlife encounters, and warm hospitality come together to create
            one of the state's most memorable luxury travel experiences.
          </p>

        </div>

        {/* CTA BOX */}

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#faf7f3] to-[#f5f0e9] border border-[#e7dfd4] rounded-sm p-6 sm:p-8 md:p-10">

          <div className="text-center">

            <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
              Plan Your Journey
            </span>

            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
              Ready to Experience Rawla Narlai?
            </h3>

            <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-700 leading-relaxed font-light max-w-3xl mx-auto mb-8">
              From selecting the ideal room category to arranging leopard
              safaris, Stepwell Dinner experiences, heritage stays, and
              customized Rajasthan itineraries, our travel specialists can help
              you make the most of everything Rawla Narlai has to offer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#AF956C] text-white text-[12px] sm:text-[13px] rounded-md hover:bg-[#95764e] transition-colors"
              >
                Plan Your Journey
              </Link>

              <Link
                href="/tours/rajasthani-heritage-retreat-tour"
                className="inline-flex items-center justify-center px-8 py-3 border border-[#AF956C] text-[#AF956C] text-[12px] sm:text-[13px] rounded-md hover:bg-[#faf7f3] transition-colors"
              >
                Explore Rajasthan Tours
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}