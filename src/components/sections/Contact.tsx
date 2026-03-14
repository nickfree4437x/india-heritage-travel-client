"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative py-24 px-6 text-white">

      {/* Background Image */}
      <Image
        src="/contact-bg.jpg"
        alt="Contact Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">
          Contact
        </h2>

        <p className="text-lg mb-6">
          <span className="font-semibold">Be our guest!</span> Let us know about your dream or need.
          <br />
          We will convert it into a memorable journey.
        </p>

        <p className="italic text-xl mb-14">
          Namaste
        </p>

        {/* Form */}
        <form className="grid md:grid-cols-2 gap-8 text-left">

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-b border-gray-300 py-3 outline-none placeholder-gray-300"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b border-gray-300 py-3 outline-none placeholder-gray-300"
          />

          {/* Country */}
          <select className="bg-transparent border border-gray-300 py-3 px-3 outline-none text-white">
            <option className="text-black">Select your Country</option>
            <option className="text-black">India</option>
            <option className="text-black">USA</option>
            <option className="text-black">UK</option>
            <option className="text-black">Germany</option>
          </select>

          {/* Message */}
          <textarea
            rows={3}
            placeholder="Message"
            className="bg-transparent border-b border-gray-300 py-3 outline-none placeholder-gray-300"
          ></textarea>

        </form>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-[#f0a041] px-10 py-3 rounded text-white font-medium hover:bg-[#d8892e] transition">
            Send
          </button>
        </div>

      </div>

    </section>
  );
}