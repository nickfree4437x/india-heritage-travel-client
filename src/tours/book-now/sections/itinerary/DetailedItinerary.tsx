"use client";

export default function DetailedItineraryIntro() {
  // Scroll to booking form
  const handleScrollToForm = () => {
    const formSection = document.getElementById("booking-form");
    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto bg-white shadow-sm border border-[#eee7dd] rounded-md px-4 sm:px-4 lg:px-4 py-4">
        {/* Heading */}
        <h2 className="text-[16px] md:text-[18px] font-medium text-[#AF956C] tracking-[0.01em]">
          Detailed Itinerary
        </h2>

        {/* Description */}
        <div className="mt-2 max-w-4xl">
          <p className="text-[12px] font-light sm:text-[13px] lg:text-[13px] leading-[2] italic text-gray-600 m-0">
            <span className="font-[600] text-[#5F5F5F]">Note:</span>{" "}
            This is the sample itinerary and will be customized as per your
            preference. If you are willing to make any changes in the below
            plan, fill out the form and an Expert from our team will reach
            out to you shortly.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex justify-center px-4">
        <button
          onClick={handleScrollToForm}
          className="
            group
            relative overflow-hidden
            bg-[#AF956C] text-white
            px-5 sm:px-7 lg:px-8
            py-3 sm:py-3.5
            rounded-lg
            text-[11px] sm:text-[12px] lg:text-[12px]
            font-[300]
            tracking-[0.08em]
            transition-all duration-300 ease-out
            shadow-sm
            hover:bg-[#9d845d]
            hover:shadow-md
            active:translate-y-0
            w-full sm:w-auto
            text-center
            mb-6
          "
        >
          <span className="relative z-10">
            Book This Tour Or Modify This Itinerary
          </span>

          {/* Hover Shine Effect */}
          <span className="
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r from-transparent Image via-white/20 to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
          " />
        </button>
      </div>
    </section>
  );
}