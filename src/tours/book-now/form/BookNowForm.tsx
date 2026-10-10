"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Form components
import FormInput from "./fields/FormInput";
import CountrySelect from "./fields/CountrySelect";
import PhoneField from "./fields/PhoneField";
import DateField from "./fields/DateField";
import MessageField from "./fields/MessageField";

// Types
import { CountryOption } from "./types/types";

type Props = {
  countries: CountryOption[];
  selectedCountry: CountryOption | null;
  setSelectedCountry: (country: CountryOption | null) => void;
  tourName: string;
};

export default function BookNowForm({
  countries,
  selectedCountry,
  setSelectedCountry,
  tourName,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guests: "",
    phone: "",
    travelDate: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Guests validation
    if (name === "guests") {
      if (Number(value) > 100) {
        toast.error("Maximum 100 guests allowed");
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Required field validations
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Mobile number is required");
      return;
    }

    try {
      setLoading(true);

      // EmailJS template params
      const templateParams = {
        tour_name: tourName,
        full_name: formData.fullName,
        email: formData.email,
        guests: formData.guests,
        phone: formData.phone,
        country: selectedCountry?.name || "",
        travel_date: formData.travelDate,
        message: formData.message,
      };

      // Send email Image via EmailJS
      await emailjs.send(
        "service_wknck3i",
        "template_0t712xa",
        templateParams,
        "rvMW1BZcFGmyRc8y6"
      );

      toast.success("Inquiry Sent Successfully!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        guests: "",
        phone: "",
        travelDate: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <FormInput
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
      </div>

      {/* Row 2: Guests & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <FormInput
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          placeholder="Number of Guests"
          max={100}
        />
        <CountrySelect
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </div>

      {/* Row 3: Phone & Travel Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <PhoneField
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          value={formData.phone}
          onPhoneChange={(phone) =>
            setFormData((prev) => ({
              ...prev,
              phone,
            }))
          }
          required
        />
        <DateField
          name="travelDate"
          value={formData.travelDate}
          onChange={handleChange}
        />
      </div>

      {/* Message */}
      <MessageField
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <div className="flex justify-center">
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
            disabled:opacity-70
            text-white
            font-[300]
            text-[12px] sm:text-[13px]
            tracking-wide
            transition-all duration-300
            shadow-sm
            flex items-center justify-center gap-2
          "
        >
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}