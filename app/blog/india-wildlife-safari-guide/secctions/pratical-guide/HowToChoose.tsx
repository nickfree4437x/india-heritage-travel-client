"use client";

export default function BookingSection() {
  return (
    <section className="py-1 md:py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-6xl mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide mb-1">
            How to Book a Wildlife Safari in India
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Booking a wildlife safari in India is simple if you plan ahead,
            especially during the peak safari season when permits sell out
            quickly. Most national parks allow online bookings through official
            government portals or authorised tour operators.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="flex gap-4 items-start border-b border-gray-100 pb-4">
            <span className="text-[#2c2c2c] font-bold text-lg min-w-[30px]">01</span>
            <div>
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                Choose Your National Park
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                Select the park based on the wildlife you want to see. 
                <span className="font-[400] text-[#AF956C]"> Ranthambore</span> and{" "}
                <span className="font-[400] text-[#AF956C]">Bandhavgarh</span> for tigers,{" "}
                <span className="font-[400] text-[#AF956C]">Gir</span> for lions, and{" "}
                <span className="font-[400] text-[#AF956C]">Kaziranga</span> for rhinos.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 items-start border-b border-gray-100 pb-4">
            <span className="text-[#2c2c2c] font-bold text-lg min-w-[30px]">02</span>
            <div>
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                Select Your Safari Zone
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                National parks have multiple zones with different landscapes. 
                Choose the right zone to enhance your safari experience.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 items-start border-b border-gray-100 pb-4">
            <span className="text-[#2c2c2c] font-bold text-lg min-w-[30px]">03</span>
            <div>
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                Pick a Morning or Evening Safari
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                Morning safaris have cooler temperatures and active wildlife. 
                Evening safaris offer golden-hour views and photography opportunities.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 items-start border-b border-gray-100 pb-4">
            <span className="text-[#2c2c2c] font-bold text-lg min-w-[30px]">04</span>
            <div>
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                Book Through Official or Authorised Operators
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                Reserve through the official park website or a trusted tour operator. 
                Book in advance, especially between{" "}
                <span className="font-[400] text-[#AF956C]">October and June</span>.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4 items-start">
            <span className="text-[#2c2c2c] font-bold text-lg min-w-[30px]">05</span>
            <div>
              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-1">
                Carry Your Confirmation & Valid ID
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light">
                Bring your booking confirmation and a valid government ID. 
                Arrive at the gate{" "}
                <span className="font-[400] text-[#AF956C]">30–45 minutes</span> before 
                departure to avoid delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}