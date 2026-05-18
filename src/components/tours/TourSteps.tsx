"use client";

import Image from "next/image";

export default function BookingStepsSection() {
  return (
    <section className="w-full bg-[#f7f5f1] py-8 sm:py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            {/* Heading */}
            <h2 className="
              text-[18px]
              sm:text-[19px]
              md:text-[22px]
              lg:text-[22px]
              xl:text-[22px]
              leading-[1.4]
              font-[450]
              text-[#2f2f2f]
              max-w-[620px]
            ">
              Four Easy Steps To Book Your Dream Trip
            </h2>

            {/* Steps */}
            <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-7">

              {/* Step 1 */}
              <div>
                <h3 className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                  font-[450]
                  text-[#9B7A50]
                ">
                  Fill out the Form
                </h3>

                <p className="
                  mt-1
                  text-[12px]
                  sm:text-[13px]
                  md:text-[13px]
                  leading-[1.9]
                  text-[#7B7B7B]
                  font-[300]
                ">
                  Complete our Simple Form to Start your Journey
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <h3 className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                  font-[450]
                  text-[#9B7A50]
                ">
                  Our Team will Contact You!
                </h3>

                <p className="
                  mt-1
                  text-[12px]
                  sm:text-[13px]
                  text-[13.5]
                  leading-[1.9]
                  text-[#7B7B7B]
                  font-[300]
                ">
                  Expect a Call, WhatsApp, or Email
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <h3 className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                  font-[450]
                  text-[#9B7A50]
                ">
                  Tell Us your requirements
                </h3>

                <p className="
                  mt-1
                  text-[12px]
                  sm:text-[13px]
                  text-[13.5]
                  leading-[2]
                  text-[#7B7B7B]
                  font-[300]
                  text-justify
                  max-w-xl
                ">
                  Let us know how you would like your India Stories to be —
                  around food, architecture, luxury hotels and stays,
                  art & crafts adventure or a fusion of all of these.
                </p>
              </div>

              {/* Step 4 */}
              <div>
                <h3 className="
                  text-[14px]
                  sm:text-[15px]
                  md:text-[16px]
                  lg:text-[17px]
                  font-[450]
                  text-[#9B7A50]
                ">
                  Personalized Trip
                </h3>

                <p className="
                  mt-1
                  text-[12px]
                  sm:text-[13px]
                  text-[13.5]
                  leading-[1.9]
                  text-[#7B7B7B]
                  font-[300]
                ">
                  We’ll craft a unique itinerary tailored just for you!
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="
            order-1 lg:order-2
            relative
            w-full
            h-[260px]
            sm:h-[340px]
            md:h-[380px]
            lg:h-[380px]
            xl:h-[400px]
            overflow-hidden
            rounded-md
            shadow-md
          ">
            <Image
              src="/images/pottery-trip.jpg"
              alt="Dream Trip"
              fill
              priority
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}