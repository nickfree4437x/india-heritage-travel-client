"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submission to Web3Forms API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      const form = e.currentTarget;

      // Collect form data
      const formData = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        subject: "New Contact Form Submission",
        name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
        mobile: (form.elements.namedItem("mobile") as HTMLInputElement)?.value || "",
        email: (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
        message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "",
      };

      // Send to Web3Forms
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-4 sm:px-6 pb-14 sm:pb-16 lg:pb-20">
      <div className="max-w-[1100px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-4">
          <h2 className="
            text-[20px] sm:text-[24px] md:text-[26px]
            font-semibold
            text-[#8b6a3d]
            tracking-wide
            mb-4 sm:mb-4
          ">
            Contact Our Travel Experts
          </h2>
          <p className="
            text-gray-700
            text-[12px] sm:text-[13px] md:text-[14px]
            font-[300]
            max-w-2xl
            mx-auto
            mb-6
          ">
            Tell us about your travel plans and our team will help you create a 
            personalized India tour, cultural journey, or festival experience.
          </p>
        </div>

        {/* Contact Form */}
        <div className="
          max-w-[900px]
          mx-auto
          border border-[#dbcdbb]
          rounded-xl
          bg-white
          px-5 sm:px-8 md:px-10
          py-6 sm:py-8
          shadow-sm
        ">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Row 1: Name & Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                aria-label="First Name"
                className="
                  w-full
                  border border-[#ddd2c2]
                  bg-white rounded-lg
                  px-5 py-2.5 sm:py-2.5
                  text-[12px] sm:text-[13px] text-[#5b5348]
                  placeholder:text-[#9a8f81] placeholder:font-light
                  font-light tracking-[0.2px]
                  focus:outline-none focus:border-[#9A7A58]
                  transition
                "
              />
              <input
                type="tel"
                name="mobile"
                required
                placeholder="Mobile No."
                aria-label="Mobile Number"
                aria-required="true"
                inputMode="tel"
                autoComplete="tel"
                className="
                  w-full
                  border border-[#ddd2c2]
                  bg-white rounded-lg
                  px-5 py-2.5 sm:py-2.5
                  text-[12px] sm:text-[13px] text-[#5b5348]
                  placeholder:text-[#9a8f81] placeholder:font-light
                  font-light tracking-[0.2px]
                  focus:outline-none focus:border-[#9A7A58]
                  transition
                "
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                aria-label="Email Address"
                aria-required="true"
                autoComplete="email"
                className="
                  w-full
                  border border-[#ddd2c2]
                  bg-white rounded-lg
                  px-5 py-2.5 sm:py-2.5
                  text-[12px] sm:text-[13px] text-[#5b5348]
                  placeholder:text-[#9a8f81] placeholder:font-light
                  font-light tracking-[0.2px]
                  focus:outline-none focus:border-[#9A7A58]
                  transition
                "
              />
            </div>

            {/* Message */}
            <textarea
              rows={4}
              name="message"
              placeholder="Write your message"
              aria-label="Message"
              autoComplete="off"
              className="
                w-full
                border border-[#ddd2c2]
                bg-white rounded-xl
                px-5 py-4
                text-[12px] sm:text-[13px] text-[#5b5348]
                placeholder:text-[#9a8f81] placeholder:font-light
                font-light tracking-[0.2px]
                focus:outline-none focus:border-[#9A7A58]
                resize-none
              "
            />

            {/* Submit Button */}
            <div className="flex justify-center pt-3">
              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  w-full sm:w-auto
                  px-8 sm:px-8
                  h-10 sm:h-[45px]
                  rounded-xl
                  bg-[#AF956C] hover:bg-[#8f7654]
                  disabled:opacity-70 disabled:cursor-not-allowed
                  text-white font-[300]
                  text-[12px] sm:text-[13px] tracking-wide
                  transition-all duration-300
                  shadow-sm
                  flex items-center justify-center gap-2
                "
              >
                {loading ? "Sending..." : "Contact us Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}