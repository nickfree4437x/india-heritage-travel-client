"use client";

import { ChevronDown } from "lucide-react";
import FormCheckboxGroup from "../components/groups/FormCheckboxGroup";
import { FormDataType, FormErrorsType } from "../types/types";

interface Step2Props {
  formData: FormDataType;
  errors: FormErrorsType;
  loading: boolean;
  updateFormData: (field: string, value: any) => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

const destinationOptions = [
  "Golden Triangle & Rajasthan",
  "Himalayas",
  "Mumbai, Goa & Central India",
  "Kolkata & East",
  "Kerala & South",
  "Varanasi & Amritsar",
];

const budgetOptions = ["$1,000 - $2,000", "$2,000 - $5,000", "$5,000 - $10,000", "$10,000+"];

export default function Step2({
  formData,
  errors,
  loading,
  updateFormData,
  onPrevious,
  onSubmit,
}: Step2Props) {
  return (
    <>
      {/* DESTINATIONS */}
      <FormCheckboxGroup
        label="Destinations"
        items={destinationOptions}
        selectedItems={formData.destinations}
        onChange={(item, checked) => {
          const newDestinations = checked
            ? [...formData.destinations, item]
            : formData.destinations.filter((d) => d !== item);
          updateFormData("destinations", newDestinations);
        }}
        error={errors.destinations}
      />

      {/* BUDGET */}
      <div className="mt-10">

        <div className="relative">
          <select
            value={formData.budget}
            onChange={(e) => updateFormData("budget", e.target.value)}
            className="
              appearance-none w-full

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
            "
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>

          <ChevronDown
            size={20}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-[#555] pointer-events-none"
          />
        </div>
      </div>

      {/* COMMENTS */}
      <div className="mt-10">

        <textarea
          rows={7}
          value={formData.comments}
          onChange={(e) => updateFormData("comments", e.target.value)}
          placeholder="Details or comments (e.g., preferred destinations, health conditions, special requests)"
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
            ${errors.comments ? 'border-red-500 border' : 'border-[#d9d9d9]'}
          `}
        />

        {errors.comments && (
          <p className="text-red-500 text-[10px] sm:text-[11px] md:text-[12px] font-light mt-2">{errors.comments}</p>
        )}
      </div>

      {/* BUTTONS */}
      <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
        <button
          onClick={onPrevious}
          disabled={loading}
          className="
            bg-[#b89563] text-white tracking-[1px] text-[14px] font-light
            min-w-[260px]
            h-[56px]
            hover:bg-[#9f7a47]
            transition-all duration-300 rounded-sm
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center
            whitespace-nowrap
          "
        >
          ← PREVIOUS
        </button>

        <button
          onClick={onSubmit}
          disabled={loading}
          className="
            bg-[#b89563] text-white tracking-[1px] text-[14px] font-light
            min-w-[260px]
            h-[56px]
            hover:bg-[#9f7a47]
            transition-all duration-300 rounded-sm
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center
            whitespace-nowrap
          "
        >
          {loading ? "SENDING..." : "SUBMIT INQUIRY"}
        </button>
      </div>
    </>
  );
}