"use client";

import { useState } from "react";

type Props = {
  name?: string;
  value?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function DateField({
  name,
  value,
  onChange,
}: Props) {

  const [inputType, setInputType] = useState("text");

  return (

    <div className="w-full">

      <input
        type={inputType}
        name={name}
        value={value}
        placeholder="Select Date of Visit"

        onFocus={() => setInputType("date")}

        onBlur={() => {
          if (!value) {
            setInputType("text");
          }
        }}

        onChange={onChange}

        className="
          w-full
          border border-[#ddd2c2]
          bg-white
          rounded-lg
          px-5
          py-2.5 sm:py-2.5
          text-[12px]
          sm:text-[13px]
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
  );
}