"use client";

export default function MessageField() {
  return (
    <div>

      <textarea
        rows={4}
        placeholder="Tell us about your travel preferences, special requests, or anything else you'd like us to know..."
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

    </div>
  );
}