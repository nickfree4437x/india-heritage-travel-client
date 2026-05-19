"use client";

export default function ContactFormSection() {
  return (
    <section className="bg-[#f8f6f2] px-4 sm:px-6 pb-14 sm:pb-16 lg:pb-20">

      <div className="max-w-[1100px] mx-auto">

        {/* HEADING */}
        <div className="text-center mb-4 sm:mb-4">

          <h2 className="text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-[#8b6a3d]
          tracking-wide
          mb-4 sm:mb-4">
            Send Us Message
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify max-w-2xl mx-auto">
            Be our guest! Let us know about your dream or need.
            We will convert it into a memorable journey.
          </p>

        </div>

        {/* FORM BOX */}
        <div className="max-w-[900px] mx-auto border border-[#dbcdbb] rounded-[20px] bg-[#f8f6f2] px-5 sm:px-8 md:px-10 py-6 sm:py-8 shadow-sm" >

          <form className="space-y-5">

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

              <input
                type="text"
                placeholder="First Name"
                className="
                w-full

                border border-[#ddd2c2]

                bg-[#f9f7f3]

                rounded-lg

                px-5
                py-2.5 sm:py-2.5

                text-[12px] sm:text-[13px]
                text-[#5b5348]

                placeholder:text-[#9a8f81]
                placeholder:font-light

                font-light
                tracking-[0.2px]

                focus:outline-none
                focus:border-[#9A7A58]
                transition 
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full

                border border-[#ddd2c2]

                bg-[#f9f7f3]

                rounded-lg

                px-5
                py-2.5 sm:py-2.5

                text-[12px] sm:text-[13px]
                text-[#5b5348]

                placeholder:text-[#9a8f81]
                placeholder:font-light

                font-light
                tracking-[0.2px]

                focus:outline-none
                focus:border-[#9A7A58]
                transition
                "
              />

            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

              <input
                type="text"
                placeholder="Mobile No."
                className="
                  w-full

                border border-[#ddd2c2]

                bg-[#f9f7f3]

                rounded-lg

                px-5
                py-2.5 sm:py-2.5

                text-[12px] sm:text-[13px]
                text-[#5b5348]

                placeholder:text-[#9a8f81]
                placeholder:font-light

                font-light
                tracking-[0.2px]

                focus:outline-none
                focus:border-[#9A7A58]
                transition
                "
              />

            </div>

            {/* VEHICLE */}
            <textarea
              rows={4}
              placeholder="Write your message"
              className="
              w-full

              border border-[#ddd2c2]

              bg-[#f9f7f3]

              rounded-xl

              px-5
              py-4

              text-[12px]
              sm:text-[13px]

              text-[#5b5348]

              placeholder:text-[#9a8f81]
              placeholder:font-light

              font-light
              tracking-[0.2px]

              focus:outline-none
              focus:border-[#9A7A58]
              resize-none
              "
            />

            {/* BUTTON */}
            <div className="flex justify-center pt-3">

              <button
                type="submit"
                className="
                  group relative w-full sm:w-auto px-8 sm:px-8 h-10 sm:h-[45px] rounded-xl bg-[#AF956C] hover:bg-[#8f7654] text-white font-[300] text-[12px] sm:text-[13px] tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center gap-2
                "
              >
                Contact us Now
              </button>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
}