"use client";

import Image from "next/image";

export default function BookingStepsSection() {
  const steps = [
    {
      title: "Fill out the Form",
      description: "Complete our Simple Form to Start your Journey",
    },
    {
      title: "Our Team will Contact You!",
      description: "Expect a Call, WhatsApp, or Email",
    },
    {
      title: "Tell Us your requirements",
      description:
        "Let us know how you would like your India Stories to be — around food, architecture, luxury hotels and stays, art & crafts adventure or a fusion of all of these.",
    },
    {
      title: "Personalized Trip",
      description: "We'll craft a unique itinerary tailored just for you!",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Heading */}
            <h2 className="
              text-[18px] sm:text-[19px] md:text-[22px] lg:text-[22px] xl:text-[22px]
              leading-[1.4]
              font-[450]
              text-[#2f2f2f]
              max-w-[620px]
            ">
              Four Easy Steps To Book Your Dream Trip
            </h2>

            {/* Steps */}
            <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-7">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="
                    text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px]
                    font-[450]
                    text-[#9B7A50]
                  ">
                    {step.title}
                  </h3>
                  <p className={`
                    mt-1
                    text-[12px] sm:text-[13px] md:text-[13px]
                    leading-[1.9]
                    text-[#7B7B7B]
                    font-[300]
                    ${index === 2 ? 'text-justify max-w-xl' : ''}
                  `}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="
            order-1 lg:order-2
            relative
            w-full
            h-[260px] sm:h-[340px] md:h-[380px] lg:h-[380px] xl:h-[400px]
            overflow-hidden
            rounded-md
            shadow-md
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779744414/pottery-trip_fys5yj.jpg"
              alt="Four Easy Steps To Book Your Dream Trip"
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