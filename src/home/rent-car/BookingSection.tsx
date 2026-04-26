"use client";

export default function BookingSection() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6">

      <div className="max-w-6xl mx-auto space-y-16">

        {/* ===== TOP STEPS ===== */}
        <div className="text-center space-y-10">

          <h2 className="text-3xl md:text-5xl font-semibold text-[#9c6b2f]">
            How To Book Your Vehicle
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              "Choose your ride",
              "Fill the form",
              "Meet your driver",
              "Travel Stress-free",
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">

                {/* Circle Number */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9c6b2f] text-white font-semibold text-lg">
                  {i + 1}
                </div>

                <p className="text-sm text-gray-700">{step}</p>

              </div>
            ))}

          </div>
        </div>

        {/* ===== FORM HEADING ===== */}
        <h3 className="text-center text-xl md:text-2xl font-semibold text-[#9c6b2f]">
          If you want to rent a car with us, please fill this form:
        </h3>

        {/* ===== FORM ===== */}
        <form className="max-w-4xl mx-auto space-y-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]"
            />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="No. Of Guests"
              className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]"
            />

            <input
              type="text"
              placeholder="Mobile No."
              className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]"
            />
          </div>

          {/* Note */}
          <p className="text-sm text-gray-600">
            Please enter a number from 1 to 100.
          </p>

          {/* Dates */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-1">
              <label className="text-sm text-gray-700">From</label>
              <input
                type="date"
                className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-700">To</label>
              <input
                type="date"
                className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]"
              />
            </div>

          </div>

          {/* Select */}
          <select className="w-full border border-gray-200 px-4 py-3 rounded-md bg-white outline-none focus:border-[#9c6b2f]">
            <option>Select Type of Vehicle</option>
            <option>Innova Crysta</option>
            <option>Etios</option>
            <option>Dzire</option>
            <option>Tempo Traveller</option>
            <option>Luxury Bus</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#9c6b2f] text-white px-8 py-3 rounded-md hover:bg-[#7a5323] transition"
          >
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}