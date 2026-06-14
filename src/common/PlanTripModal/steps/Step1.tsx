"use client";

import FormInput from "../components/fields/FormInput";
import FormPhoneInput from "../components/fields/FormPhoneInput";
import FormSelect from "../components/fields/FormSelect";
import FormRadioGroup from "../components/groups/FormRadioGroup";
import FormCheckboxGroup from "../components/groups/FormCheckboxGroup";
import { FormDataType, FormErrorsType } from "../types/types";
import FormDatePicker from "../components/fields/FormDatePicker";

interface Step1Props {
  formData: FormDataType;
  errors: FormErrorsType;
  updateFormData: (field: string, value: any) => void;
  onNext: () => void;
}

const interestOptions = [
  "Culture & History",
  "Wildlife",
  "Adventure",
  "Leisure & Wellness",
  "Nature & Landscapes",
];

const ageGroupOptions = ["Below 30", "30 - 40", "40 - 50", "50 - 60", "60 - 70", "70 and Above"];
const accommodationOptions = [
  { value: "Luxury", label: "Luxury", stars: 5 },
  { value: "Comfort", label: "Comfort", stars: 4 },
];

export default function Step1({
  formData,
  errors,
  updateFormData,
  onNext,
}: Step1Props) {
  return (
    <>
      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FormInput
          name="name"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
          placeholder="Enter your name"
          error={errors.name}
        />

        <FormInput
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
          placeholder="Enter your email"
          error={errors.email}
        />

        <FormPhoneInput
            value={formData.phone}
            onChange={(value) => updateFormData("phone", value)}
            error={errors.phone}
          />
      </div>

      {/* ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <FormDatePicker
          value={formData.tourDate}
          onChange={(value) => updateFormData("tourDate", value)}
          error={errors.tourDate}
        />

        <FormInput
          name="duration"
          type="number"
          value={formData.duration}
          onChange={(e) => updateFormData("duration", e.target.value)}
          placeholder="Duration"
          error={errors.duration}
        />

        <FormInput
          name="travellers"
          type="number"
          value={formData.travellers}
          onChange={(e) => updateFormData("travellers", e.target.value)}
          placeholder="Number of Travellers"
          error={errors.travellers}
        />
      </div>

      {/* AGE GROUP */}
      <div className="mt-8">
        <FormSelect
          value={formData.ageGroup}
          onChange={(e) => updateFormData("ageGroup", e.target.value)}
          options={ageGroupOptions}
        />
      </div>

      {/* ACCOMMODATION */}
      <FormRadioGroup
        label="Accommodation Type"  // ADDED this line
        name="accommodation"
        value={formData.accommodation}
        onChange={(value) => updateFormData("accommodation", value)}
        options={accommodationOptions}
        error={errors.accommodation}
      />

      {/* INTERESTS */}
      <FormCheckboxGroup
        label="Interested In"
        items={interestOptions}
        selectedItems={formData.interests}
        onChange={(item, checked) => {
          const newInterests = checked
            ? [...formData.interests, item]
            : formData.interests.filter((i) => i !== item);
          updateFormData("interests", newInterests);
        }}
        error={errors.interests}
      />

      {/* NEXT BUTTON */}
      <div className="mt-14 flex justify-center">
        <button
          onClick={onNext}
          className="
            bg-[#b89563] text-white tracking-[1px] text-[15px] font-light
            px-16 md:px-24 py-3 hover:bg-[#9f7a47]
            transition-all duration-300 rounded-sm
          "
        >
          NEXT →
        </button>
      </div>
    </>
  );
}