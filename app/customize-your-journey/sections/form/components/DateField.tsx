"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function DateField({
  name,
  value,
  placeholder = "Select Date of Visit",
  className = "",
  onChange,
}: Props) {
  // Parse date string (dd-mm-yyyy) to Date object
  const selectedDate = value
    ? (() => {
        const [day, month, year] = value.split("-");
        return new Date(Number(year), Number(month) - 1, Number(day));
      })()
    : null;

  return (
    <div className="w-full">
      <DatePicker
        selected={selectedDate}
        dateFormat="dd-MM-yyyy"
        placeholderText={placeholder}
        minDate={new Date()}
        wrapperClassName="w-full"
        onChange={(date: Date | null) => {
          if (!date || !onChange) return;

          // Format date to dd-mm-yyyy
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();
          const formattedDate = `${day}-${month}-${year}`;

          onChange({
            target: {
              name,
              value: formattedDate,
            },
          } as React.ChangeEvent<HTMLInputElement>);
        }}
        className={`
          w-full
          border border-[#ddd2c2]
          bg-[#f9f7f3]
          rounded-lg
          px-5 py-2.5 sm:py-2.5
          text-[12px] sm:text-[13px] text-[#5b5348]
          placeholder:text-[#9a8f81] placeholder:font-light
          font-light tracking-[0.2px]
          focus:outline-none focus:border-[#9A7A58]
          transition
          ${className}
        `}
      />
    </div>
  );
}