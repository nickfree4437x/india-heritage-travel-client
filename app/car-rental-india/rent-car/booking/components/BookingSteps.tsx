// components/booking/BookingSteps.tsx

import { bookingSteps } from "../data/bookingData";

export default function BookingSteps() {
  return (
    <div className="text-center mb-14 sm:mb-16">

      {/* HEADING */}
      <h2
        className="
          text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-[#8b6a3d]
          tracking-wide
          mb-10 sm:mb-12
        "
      >
        How To Book Your Vehicle
      </h2>

      {/* STEPS */}
      <div
        className="
          grid grid-cols-2 md:grid-cols-4
          gap-y-10
          gap-x-6 sm:gap-x-10
          max-w-5xl
          mx-auto
        "
      >
        {bookingSteps.map((step, i) => (
          <div
            key={step}
            className="
              flex flex-col items-center
              gap-4
            "
          >

            {/* NUMBER */}
            <div
              className="
                w-11 h-11 sm:w-12 sm:h-12
                flex items-center justify-center

                rounded-full

                bg-[#9A7A58]
                text-white

                text-[14px] sm:text-[15px]
                font-medium

                shadow-sm
              "
            >
              {i + 1}
            </div>

            {/* TEXT */}
            <p
              className="
                text-[11px] sm:text-[12px]
                text-[#4f4f4f]
                font-light
                tracking-wide
              "
            >
              {step}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}