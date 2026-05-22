"use client";

import { useState } from "react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

import CountrySelect, {
  type CountryOption,
} from "./CountrySelect";

export default function JourneyDetails() {

  const [selectedCountry, setSelectedCountry] =
    useState<CountryOption | null>(null);

  return (

    <div className="w-full">

      {/* MEMBERS + COUNTRY */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-x-6
        "
      >

        {/* MEMBERS */}
        <div className="w-full">

          <FormSelect
            options={[
              "Select Members",
              "1 Member",
              "2 Members",
              "3 Members",
              "4 Members",
              "6 Members",
              "8 Members",
              "10 Members",
              "More than 10 Members",
            ]}
          />

        </div>

        {/* COUNTRY */}
        <div className="w-full mb-5 sm:mb-6">

          <CountrySelect
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

        </div>

      </div>

      {/* FESTIVAL */}
      <div className="w-full">

        <FormSelect
          placeholder="Please Select"
          options={[
            "Not Particulary",
            "Diwali Festivals",
            "Holi Festivals",
            "Pushkar Festivals",
            "Kumbh Festivals",
          ]}
        />

      </div>

      {/* DATE + DURATION */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-x-6
        "
      >

        {/* DATE */}
        <div className="w-full">

          <FormInput
            type="date"
            placeholder="Preferred Travel Dates"
          />

        </div>

        {/* DURATION */}
        <div className="w-full">

          <FormSelect
            placeholder="Trip Duration"
            options={[
              "Trip Duration",
              "3-5 Days",
              "1 Week",
              "2 Weeks",
              "1 Month",
            ]}
          />

        </div>

      </div>

      {/* TRAVEL STYLE */}
      <div className="w-full">

        <FormSelect
          placeholder="Travel Preferences"
          options={[
            "Travel Preferences",
            "Luxury",
            "Adventure",
            "Spiritual",
            "Wildlife",
            "Wellness",
          ]}
        />

      </div>

      {/* DESTINATION */}
      <div className="w-full">

        <FormInput
          placeholder="Destination Preferences"
        />

      </div>

      {/* TEXTAREA */}
      <div className="w-full">

        <FormTextarea
          placeholder="Special Requests & Considerations"
        />

      </div>

    </div>

  );
}