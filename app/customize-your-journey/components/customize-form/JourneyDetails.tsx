"use client";

import { useState } from "react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

import CountrySelect, {
  type CountryOption,
} from "./CountrySelect";

const festivalOptions = [
  "Not Particularly",
  "Diwali Festival",
  "Holi Festival",
  "Pushkar Festival",
  "Kumbh Festival",
];

const travelPreferences = [
  "Luxury",
  "Semi Luxury",
  "Affordable",
];

export default function JourneyDetails() {

  const [selectedCountry, setSelectedCountry] =
    useState<CountryOption | null>(null);

  const [selectedFestival, setSelectedFestival] =
    useState("");

  const [selectedPreferences, setSelectedPreferences] =
    useState<string[]>([]);

  const handlePreferenceChange = (
    preference: string
  ) => {

    setSelectedPreferences((prev) => {

      if (prev.includes(preference)) {

        return prev.filter(
          (item) => item !== preference
        );

      }

      return [...prev, preference];

    });

  };

  return (

    <div className="w-full px-4 sm:px-0">

      {/* HEADING */}
      <h3
        className="
          text-[18px]
          sm:text-[20px]
          md:text-[24px]
          tracking-wide
          text-[#2c2c2c]
          font-semibold
          mb-4
          sm:mb-5
          text-center
          sm:text-left
        "
      >
        Journey Details
      </h3>

      {/* MEMBERS + COUNTRY */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          sm:gap-5
          md:gap-6
          mb-5
          sm:mb-6
        "
      >

        {/* MEMBERS */}
        <div className="w-full">

          <FormSelect
            name="members"
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
        <div className="w-full">

          <CountrySelect
            name="country"
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />

        </div>

      </div>

      {/* FESTIVAL SECTION */}
      <div className="w-full mb-6 sm:mb-8">

        <h4
          className="
            text-gray-700
            mt-4
            sm:mt-5
            md:mt-6
            leading-relaxed
            text-[13px]
            sm:text-[14px]
            md:text-[14.5px]
            font-[300]
            text-center
            mb-4
            sm:mb-5
          "
        >
          Interested in a particular Indian Festival?
        </h4>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:gap-5
            md:gap-8
            lg:gap-10
          "
        >

          {festivalOptions.map((festival) => {

            const isSelected =
              selectedFestival === festival;

            return (

              <label
                key={festival}
                className="
                  flex
                  items-center
                  gap-2
                  sm:gap-2.5
                  md:gap-3
                  cursor-pointer
                  group
                "
              >

                <input
                  type="radio"
                  name="festival"
                  value={festival}
                  checked={isSelected}
                  onChange={() =>
                    setSelectedFestival(festival)
                  }
                  className="hidden"
                />

                {/* CUSTOM RADIO */}
                <div
                  className="
                    w-[18px]
                    h-[18px]
                    sm:w-[20px]
                    sm:h-[20px]
                    md:w-[22px]
                    md:h-[22px]
                    rounded-full
                    border-2
                    border-[#c7a77a]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:border-[#b8925a]
                  "
                >

                  <div
                    className={`
                      w-[8px]
                      h-[8px]
                      sm:w-[9px]
                      sm:h-[9px]
                      md:w-[10px]
                      md:h-[10px]
                      rounded-full
                      bg-[#c7a77a]
                      transition-all
                      duration-300
                      ${
                        isSelected
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                  />

                </div>

                <span
                  className="
                    text-gray-700
                    leading-relaxed
                    text-[12px]
                    sm:text-[13px]
                    md:text-[14px]
                    font-light
                    transition-colors
                    duration-300
                    group-hover:text-[#c7a77a]
                  "
                >
                  {festival}
                </span>

              </label>

            );

          })}

        </div>

      </div>

      {/* DATE + DURATION */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-4
          sm:gap-5
          md:gap-6
          mb-5
          sm:mb-6
        "
      >

        {/* DATE */}
        <div className="w-full">

          <FormInput
            type="date"
            name="travel_date"
            placeholder="Preferred Travel Dates"
            className="h-[40px] sm:h-[40px] md:h-[40px] w-full"
          />

        </div>

        {/* DURATION */}
        <div className="w-full">

          <FormSelect
            name="trip_duration"
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

      {/* TRAVEL PREFERENCES */}
      <div className="w-full mb-6 sm:mb-8">

        <h4
          className="
            text-gray-700
            mt-4
            sm:mt-5
            md:mt-6
            leading-relaxed
            text-[13px]
            sm:text-[14px]
            md:text-[14.5px]
            font-[300]
            text-center
            mb-4
            sm:mb-5
          "
        >
          Travel Preferences
        </h4>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            sm:gap-6
            md:gap-8
            lg:gap-10
          "
        >

          {travelPreferences.map((preference) => {

            const isChecked =
              selectedPreferences.includes(
                preference
              );

            return (

              <label
                key={preference}
                className="
                  flex
                  items-center
                  gap-2
                  sm:gap-2.5
                  md:gap-3
                  cursor-pointer
                  group
                "
              >

                <input
                  type="checkbox"
                  name="travel_preferences"
                  value={preference}
                  checked={isChecked}
                  onChange={() =>
                    handlePreferenceChange(
                      preference
                    )
                  }
                  className="hidden"
                />

                {/* CUSTOM CHECKBOX */}
                <div
                  className="
                    w-[18px]
                    h-[18px]
                    sm:w-[20px]
                    sm:h-[20px]
                    md:w-[22px]
                    md:h-[22px]
                    rounded-[4px]
                    sm:rounded-[5px]
                    border-2
                    border-[#c7a77a]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:border-[#b8925a]
                  "
                >

                  <div
                    className={`
                      w-[8px]
                      h-[8px]
                      sm:w-[9px]
                      sm:h-[9px]
                      md:w-[10px]
                      md:h-[10px]
                      rounded-[2px]
                      bg-[#c7a77a]
                      transition-all
                      duration-300
                      ${
                        isChecked
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                  />

                </div>

                <span
                  className="
                    text-gray-700
                    leading-relaxed
                    text-[12px]
                    sm:text-[13px]
                    md:text-[14px]
                    font-light
                    transition-colors
                    duration-300
                    group-hover:text-[#c7a77a]
                  "
                >
                  {preference}
                </span>

              </label>

            );

          })}

        </div>

      </div>

      {/* DESTINATION */}
      <div className="w-full mb-4 sm:mb-5">

        <FormInput
          name="destination"
          placeholder="Destination Preferences"
          className="w-full"
        />

      </div>

      {/* TEXTAREA */}
      <div className="w-full">

        <FormTextarea
          name="message"
          placeholder="Special Requests & Considerations"
          className="w-full"
        />

      </div>

    </div>

  );

}