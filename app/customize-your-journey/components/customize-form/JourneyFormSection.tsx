"use client";

import PersonalDetails from "./PersonalDetails";
import JourneyDetails from "./JourneyDetails";

export default function JourneyFormSection() {
  return (
    <section
      id="customize-form"
      className="w-full bg-[#f8f6f2] pt-4 pb-14 sm:pb-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP HEADING */}
        <div className="text-center">
          <h2
            className="
            text-[20px]
            sm:text-[24px]
            md:text-[26px]

            font-semibold
            text-center

            mb-4 sm:mb-2

            text-[#8b6a3d]
            tracking-wide
            "
          >
            Customise Your Journey
          </h2>

          <p
            className="
              text-[11px]
              sm:text-[12px]
              md:text-[13px]

              font-light
              leading-relaxed
              tracking-wide

              max-w-[580px]
              mx-auto

              text-[#2c2c2c]
            "
          >
            Be our guest! Let us know about your dream or need.
            We will convert it into a memorable journey.
          </p>

        </div>

        {/* FORM CONTAINER */}
        <div
          className="
            mt-12
            border border-[#ddd2c2] rounded-xl shadow-sm
            p-6
            sm:p-10
            lg:p-12
            
          "
        >

          <form>

            <PersonalDetails />

            <JourneyDetails />

            {/* BUTTON */}
            <div className="flex justify-center"> 
              <button
                type="submit"
                className="
                  group relative w-full sm:w-auto px-8 sm:px-8 h-10 sm:h-[45px] rounded-xl bg-[#AF956C] hover:bg-[#8f7654] text-white font-[300] text-[12px] sm:text-[13px] tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center gap-2
                "
              >
                Submit Your Request
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}