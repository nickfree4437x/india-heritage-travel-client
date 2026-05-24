"use client";

import { useState } from "react";

import emailjs from "@emailjs/browser";

import toast from "react-hot-toast";

import BookingInput from "./BookingInput";

import { vehicleOptions } from "./bookingData";

export default function BookingForm() {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    guests: "",
    phone: "",
    from_date: "",
    to_date: "",
    vehicle_type: "",
  });

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {

    const { name, value } = e.target;

    // Guests Validation
    if (name === "guests") {

      // Prevent negative
      if (Number(value) < 0) {
        return;
      }

      // Max limit
      if (Number(value) > 100) {

        toast.error(
          "Guests must be between 1 and 100"
        );

        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    // ========= REQUIRED VALIDATIONS =========

    if (!formData.full_name.trim()) {

      toast.error("Name is required");

      return;
    }

    if (!formData.email.trim()) {

      toast.error("Email is required");

      return;
    }

    if (!formData.vehicle_type.trim()) {

      toast.error(
        "Please select vehicle type"
      );

      return;
    }

    // Guests Validation
    if (
      formData.guests &&
      (
        Number(formData.guests) < 1 ||
        Number(formData.guests) > 100
      )
    ) {

      toast.error(
        "Guests must be between 1 and 100"
      );

      return;
    }

    try {

      setLoading(true);

      // =========================
      // EMAIL TEMPLATE PARAMS
      // =========================
      const templateParams = {
        full_name: formData.full_name,

        email: formData.email,

        phone: formData.phone,

        guests: formData.guests,

        from_date: formData.from_date,

        to_date: formData.to_date,

        vehicle_type:
          formData.vehicle_type,
      };

      // =========================
      // SEND EMAIL
      // =========================
      await emailjs.send(
        "service_wknck3i",
        "template_tcj7wc3",
        templateParams,
        "rvMW1BZcFGmyRc8y6"
      );

      // =========================
      // SUCCESS
      // =========================
      toast.success(
        "Inquiry Sent Successfully!"
      );

      // Reset Form
      setFormData({
        full_name: "",
        email: "",
        guests: "",
        phone: "",
        from_date: "",
        to_date: "",
        vehicle_type: "",
      });

    } catch (error) {

      console.log(error);

      toast.error(
        "Something went wrong!"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="
        max-w-5xl
        mx-auto

        backdrop-blur-sm

        border border-[#ddd2c2]
        rounded-xl shadow-sm

        px-5 sm:px-8 md:px-10
        py-6 sm:py-8 md:py-10
      "
    >

      {/* ===== ROW 1 ===== */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">

        <BookingInput
          type="text"
          placeholder="Name *"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

        <BookingInput
          type="email"
          placeholder="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

      </div>

      {/* ===== ROW 2 ===== */}
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
          placeholder="Mobile No."
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

      </div>

      {/* ===== NOTE ===== */}
      <p
        className="
          text-[10px] sm:text-[11px]
          text-[#777]
          font-light
          pl-2
          mb-5
        "
      >
        Please enter a number from 1 to 100.
      </p>

      {/* ===== DATES ===== */}
      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">

      {/* FROM */}
      <input
        type={
          formData.from_date
            ? "date"
            : "text"
        }
        name="from_date"
        value={formData.from_date}
        placeholder="Travel From"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        onBlur={(e) => {
          if (!formData.from_date) {
            e.target.type = "text";
          }
        }}
        onChange={handleChange}
        className="
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

          outline-none

          transition-all duration-300

          focus:border-[#9A7A58]
        "
      />

      {/* TO */}
      <input
        type={
          formData.to_date
            ? "date"
            : "text"
        }
        name="to_date"
        value={formData.to_date}
        placeholder="Travel To"
        onFocus={(e) => {
          e.target.type = "date";
        }}
        onBlur={(e) => {
          if (!formData.to_date) {
            e.target.type = "text";
          }
        }}
        onChange={handleChange}
        className="
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

          outline-none

          transition-all duration-300

          focus:border-[#9A7A58]
        "
      />

    </div>

      {/* ===== SELECT ===== */}
      <div className="mb-8">

        <select
          name="vehicle_type"
          value={formData.vehicle_type}
          onChange={handleChange}
          required
          className="
            w-full

            border border-[#ddd2c2]

            bg-white

            rounded-lg

            px-5
            py-2.5 sm:py-2.5

            text-[12px] sm:text-[13px]
            text-[#5b5348]

            font-light

            outline-none

            transition-all duration-300

            focus:border-[#9A7A58]
          "
        >

          <option value="">
            Select Type of Vehicle *
          </option>

          {vehicleOptions.map((vehicle) => (
            <option
              key={vehicle}
              value={vehicle}
            >
              {vehicle}
            </option>
          ))}

        </select>

      </div>

      {/* ===== BUTTON ===== */}
      <div className="flex justify-center">

        <button
          type="submit"
          disabled={loading}
          className="
            bg-[#AF956C]
            text-white

            text-[11px] sm:text-[12px]

            tracking-[1px]

            px-8 sm:px-10
            py-3

            rounded-full

            transition-all duration-300

            hover:bg-[#8f7654]
            shadow-sm
            hover:shadow-md

            disabled:opacity-70
            disabled:cursor-not-allowed
          "
        >
          {loading
            ? "Sending..."
            : "Submit Request"}
        </button>

      </div>

    </form>
  );
}