// components/booking/BookingForm.tsx

import BookingInput from "./BookingInput";
import { vehicleOptions } from "./bookingData";

export default function BookingForm() {
  return (
    <form
      className="
        max-w-5xl
        mx-auto

        backdrop-blur-sm

        border border-[#ddd2c2] rounded-xl shadow-sm

        px-5 sm:px-8 md:px-10
        py-6 sm:py-8 md:py-10
      "
    >

      {/* ===== ROW 1 ===== */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">

        <BookingInput
          type="text"
          placeholder="Name"
        />

        <BookingInput
          type="email"
          placeholder="Email"
        />

      </div>

      {/* ===== ROW 2 ===== */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-1">

        <BookingInput
          type="number"
          placeholder="No. Of Guests"
        />

        <BookingInput
          type="text"
          placeholder="Mobile No."
        />

      </div>

      {/* ===== NOTE ===== */}
      <p
        className="
          text-[10px] sm:text-[11px]
          text-[#777]
          font-light
          pl-2
          mb-5
        "
      >
        Please enter a number from 1 to 100.
      </p>

      {/* ===== DATES ===== */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">

        {/* FROM */}
        <div>

          <label
            className="
              block

              text-[11px] sm:text-[12px]
              text-[#555]

              font-light

              pl-2
              mb-2
            "
          >
            From
          </label>

          <BookingInput type="date" />

        </div>

        {/* TO */}
        <div>

          <label
            className="
              block

              text-[11px] sm:text-[12px]
              text-[#555]

              font-light

              pl-2
              mb-2
            "
          >
            To
          </label>

          <BookingInput type="date" />

        </div>

      </div>

      {/* ===== SELECT ===== */}
      <div className="mb-8">

        <select
          className="
            w-full

            border border-[#ddd2c2]

            bg-[#f9f7f3]

            rounded-lg

            px-5
            py-3

            text-[12px] sm:text-[13px]
            text-[#5c5448]

            font-light

            outline-none

            transition-all duration-300

            focus:border-[#9A7A58]
          "
          defaultValue=""
        >
          <option value="" disabled>
            Select Type of Vehicle
          </option>

          {vehicleOptions.map((vehicle) => (
            <option
              key={vehicle}
              value={vehicle}
            >
              {vehicle}
            </option>
          ))}

        </select>

      </div>

      {/* ===== BUTTON ===== */}
      <div className="flex justify-center">

        <button
          type="submit"
          className="
            bg-[#AF956C]
            text-white

            text-[11px] sm:text-[12px]

            tracking-[1px]

            px-8 sm:px-10
            py-3

            rounded-full

            transition-all duration-300

            hover:bg-[#8f7654]
            hover:shadow-md
          "
        >
          Submit Request
        </button>

      </div>

    </form>
  );
}