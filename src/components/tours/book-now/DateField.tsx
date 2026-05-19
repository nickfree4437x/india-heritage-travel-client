"use client";

export default function DateField() {
  return (
    <div className="w-full">

      <input
        type="date"
        className="
          w-full

          h-12 sm:h-[45px]

          border border-[#ddd2c2]

          bg-[#f9f7f3]

          rounded-lg

          px-5
          py-2.5 sm:py-2.5

          text-[12px]
          sm:text-[13px]

          text-[#5b5348]

          font-light
          tracking-[0.2px]

          focus:outline-none
          focus:border-[#9A7A58] 

          cursor-pointer transition 
        " 
      />

    </div>
  );
}