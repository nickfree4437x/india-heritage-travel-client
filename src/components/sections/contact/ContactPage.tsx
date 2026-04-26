"use client";

export default function ContactFormSection() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6">

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#9c6b2f] tracking-wide">
            SEND US MESSAGE
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Be our guest! Let us know about your dream or need. We will convert it into a memorable journey.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First name*"
              className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#9c6b2f]"
            />

            <input
              type="email"
              placeholder="Your mail address*"
              className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#9c6b2f]"
            />
          </div>

          {/* Row 2 */}
          <input
            type="text"
            placeholder="Your Phone Number"
            className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#9c6b2f]"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full bg-white border border-gray-200 px-4 py-3 rounded-md outline-none focus:border-[#9c6b2f]"
          />

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#9c6b2f] text-white px-8 py-3 rounded-md font-medium hover:bg-[#7a5323] transition"
            >
              CONTACT US NOW
            </button>
          </div>

        </form>

      </div>

    </section>
  );
}