"use client";

export default function DetailedItineraryIntro() {
  return (
    <section className="w-full bg-[#e9e5df">
      <div className="max-w-6xl mx-auto bg-white px-4 sm:px-4 lg:px-4 py-4">

        {/* Heading */}
        <h2 className="text-[16px] md:text-[18px] font-medium text-[#AF956C] tracking-[0.01em]">
          Detailed Itinerary
        </h2>

        {/* Description */}
        <div className="mt-2 max-w-4xl">
          <p className="text-[12px] font-light sm:text-[13px] lg:text-[13px] leading-[2] italic text-[#7B7B7B] m-0">
            <span className="font-[600] text-[#5F5F5F]">
              Note:
            </span>{" "}
            This is the sample itinerary and will be customized as per your
            preference. If you are willing to make any changes in the below
            plan, fill out the form and an Expert from our team will reach
            out to you shortly.
          </p>
        </div>

      </div>

      {/* 🔹 CTA */}
      <div className="mt-8 flex justify-center px-4">

        <button
          className="
            group relative overflow-hidden

            bg-[#AF956C] text-white

            px-5 sm:px-7 lg:px-8
            py-3 sm:py-3.5

            rounded-lg

            text-[11px] sm:text-[12px] lg:text-[12px]
            font-[300]
            tracking-[0.08em]

            transition-all duration-300 ease-out

            shadow-[0_8px_30px_rgba(175,149,108,0.18)]

            hover:bg-[#9d845d]
            hover:shadow-[0_12px_35px_rgba(175,149,108,0.28)]

            active:translate-y-0

            w-full sm:w-auto mb-6
            text-center
          "
        >
          <span className="relative z-10">
            Book This Tour Or Modify This Itinerary
          </span>

          {/* Hover Shine */}
          <span
            className="
              absolute inset-0
              -translate-x-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              transition-transform duration-700
              group-hover:translate-x-full
            "
          />
        </button>

      </div>
    </section>
  );
}