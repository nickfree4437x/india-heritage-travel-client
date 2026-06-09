"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormDatePickerProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
}

export default function FormDatePicker({
  value,
  onChange,
  required = true,
  error,
}: FormDatePickerProps) {
  const selectedDate = value
    ? (() => {
        const [day, month, year] = value.split("-");

        return new Date(
          Number(year),
          Number(month) - 1,
          Number(day)
        );
      })()
    : null;

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => {
          if (!date) {
            onChange("");
            return;
          }

          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();

          onChange(`${day}-${month}-${year}`);
        }}
        dateFormat="dd-MM-yyyy"
        placeholderText="Tour Start Date"
        minDate={new Date()}
        required={required}
        wrapperClassName="w-full"
        className={`
          w-full

          border border-[#ddd2c2]

          bg-white

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
          ${error ? "border-red-500 border-1" : "border-[#ddd2c2]"}
        `}
      />

      {/* Same as FormInput */}
      {/* {error && (
        <p className="text-red-500 text-[12px] mt-2">
          {error}
        </p>
      )} */}
    </div>
  );
}