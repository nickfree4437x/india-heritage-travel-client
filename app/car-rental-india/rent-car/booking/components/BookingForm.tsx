"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import BookingInput from "./BookingInput";
import DateField from "./DateField";
import { vehicleOptions } from "../data/bookingData";

// ============================================
// INITIAL FORM STATE
// ============================================
const initialFormState = {
  full_name: "",
  email: "",
  guests: "",
  phone: "",
  from_date: "",
  to_date: "",
  vehicle_type: "",
};

// ============================================
// MAIN COMPONENT
// ============================================
export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  // ============================================
  // HANDLE FORM FIELD CHANGES
  // ============================================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Validate guests field
    if (name === "guests") {
      const numValue = Number(value);
      
      if (numValue < 0) return; // Prevent negative numbers
      
      if (numValue > 100) {
        toast.error("Guests must be between 1 and 100");
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================================
  // HANDLE FORM SUBMISSION
  // ============================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Required field validations
    if (!formData.full_name.trim()) {
      toast.error("Name is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.vehicle_type.trim()) {
      toast.error("Please select vehicle type");
      return;
    }

    // Guests range validation
    if (formData.guests && (Number(formData.guests) < 1 || Number(formData.guests) > 100)) {
      toast.error("Guests must be between 1 and 100");
      return;
    }

    try {
      setLoading(true);

      // Send email Image via EmailJS
      await emailjs.send(
        "service_wknck3i",
        "template_tcj7wc3",
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          guests: formData.guests,
          from_date: formData.from_date,
          to_date: formData.to_date,
          vehicle_type: formData.vehicle_type,
        },
        "rvMW1BZcFGmyRc8y6"
      );

      toast.success("Inquiry Sent Successfully!");
      setFormData(initialFormState);
      
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <form
      onSubmit={handleSubmit}
      className="
        max-w-5xl mx-auto
        backdrop-blur-sm
        border border-[#ddd2c2] rounded-xl shadow-sm
        px-5 sm:px-8 md:px-10
        py-6 sm:py-8 md:py-10
      "
    >
      {/* Row 1: Name & Email */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">
        <BookingInput
          type="text"
          placeholder="Full Name *"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
        <BookingInput
          type="email"
          placeholder="Email Address*"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Row 2: Guests & Phone */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-1">
        <BookingInput
          type="number"
          placeholder="No. Of Guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min={1}
          max={100}
        />
        <BookingInput
          type="text"
          placeholder="Mobile Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Helper text for guests */}
      <p className="text-[10px] sm:text-[11px] text-[#777] font-light pl-2 mb-5">
        Please enter a number from 1 to 100.
      </p>

      {/* Row 3: Travel Dates */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">
        <DateField
          name="from_date"
          value={formData.from_date}
          placeholder="Travel From"
          onChange={handleChange}
        />
        <DateField
          name="to_date"
          value={formData.to_date}
          placeholder="Travel To"
          onChange={handleChange}
        />
      </div>

      {/* Vehicle Selection */}
      <div className="mb-8">
        <select
          name="vehicle_type"
          value={formData.vehicle_type}
          onChange={handleChange}
          required
          aria-label="Select Type of Vehicle"
          aria-required="true"
          className="
            w-full
            border border-[#ddd2c2]
            bg-white rounded-lg
            px-5 py-2.5 sm:py-2.5
            text-[12px] sm:text-[13px] text-[#5b5348]
            font-light
            outline-none
            transition-all duration-300
            focus:border-[#9A7A58]
          "
        >
          <option value="">Select Your Preferred Vehicle *</option>
          {vehicleOptions.map((vehicle) => (
            <option key={vehicle} value={vehicle}>
              {vehicle}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="
            bg-[#AF956C] text-white
            text-[11px] sm:text-[12px]
            tracking-[1px] font-[300]
            px-8 sm:px-10 py-3
            rounded-full
            transition-all duration-300
            hover:bg-[#8f7654]
            shadow-sm hover:shadow-md
            disabled:opacity-70 disabled:cursor-not-allowed
          "
        >
          {loading ? "Sending..." : "Get a Free Quote"}
        </button>
      </div>
    </form>
  );
}