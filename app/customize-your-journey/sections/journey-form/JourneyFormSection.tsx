"use client";

import { useRef, useState } from "react";

import toast from "react-hot-toast";

import PersonalDetails from "../form/sections/PersonalDetails";
import JourneyDetails from "../form/sections/JourneyDetails";

const WEB3FORMS_URL =
  "https://api.web3forms.com/submit";

export default function JourneyFormSection() {

  const [loading, setLoading] =
    useState(false);

  const formRef =
    useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {

      const form = e.currentTarget;

      const formData = {

        access_key:
          process.env
            .NEXT_PUBLIC_JOURNEY_FORM_KEY,

        subject:
          "New Journey Request",

        from_name:
          "India Heritage Travel",

        // PERSONAL DETAILS
        name:
          (
            form.elements.namedItem(
              "name"
            ) as HTMLInputElement
          )?.value || "",

        email:
          (
            form.elements.namedItem(
              "email"
            ) as HTMLInputElement
          )?.value || "",

        phone:
          (
            form.elements.namedItem(
              "phone"
            ) as HTMLInputElement
          )?.value || "",

        // JOURNEY DETAILS
        members:
          (
            form.elements.namedItem(
              "members"
            ) as HTMLSelectElement
          )?.value || "",

        country:
          (
            form.elements.namedItem(
              "country"
            ) as HTMLInputElement
          )?.value || "",

        festival:
          (
            form.elements.namedItem(
              "festival"
            ) as HTMLInputElement
          )?.value || "",

        travel_date:
          (
            form.elements.namedItem(
              "travel_date"
            ) as HTMLInputElement
          )?.value || "",

        trip_duration:
          (
            form.elements.namedItem(
              "trip_duration"
            ) as HTMLSelectElement
          )?.value || "",

        destination:
          (
            form.elements.namedItem(
              "destination"
            ) as HTMLInputElement
          )?.value || "",

        message:
          (
            form.elements.namedItem(
              "message"
            ) as HTMLTextAreaElement
          )?.value || "",

        // CHECKBOX VALUES
        travel_preferences:
          Array.from(

            form.querySelectorAll(
              'input[name="travel_preferences"]:checked'
            )

          )

            .map(
              (item) =>
                (
                  item as HTMLInputElement
                ).value
            )

            .join(", "),
      };

      const response = await fetch(
        WEB3FORMS_URL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            formData
          ),
        }
      );

      const data =
        await response.json();

      // SUCCESS
      if (
        response.ok &&
        data.success
      ) {

        toast.success(
          "Request submitted successfully!"
        );

        formRef.current?.reset();

        return;

      }

      // ERROR
      toast.error(
        data.message ||
        "Something went wrong!"
      );

      console.log(
        "WEB3FORMS ERROR:",
        data
      );

    } catch (error) {

      console.log(
        "SUBMIT ERROR:",
        error
      );

      toast.error(
        "Failed to submit form"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <section
      id="customize-form"
      className="
        w-full
        bg-[#f8f6f2]
        pt-4
        pb-14
        sm:pb-16
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* TOP HEADING */}
        <div className="text-center">

          <h2
            className="
              text-[20px]
              sm:text-[24px]
              md:text-[26px]

              font-semibold
              text-center

              mb-4
              sm:mb-2

              text-[#8b6a3d]
              tracking-wide
            "
          >
            Customise Your Journey
          </h2>

          <p
            className="
              text-[11px]
              sm:text-[12px]
              md:text-[13px]

              font-light
              leading-relaxed
              tracking-wide

              max-w-[580px]
              mx-auto

              text-[#2c2c2c]
            "
          >
            Be our guest! Let us know about
            your dream or need. We will
            convert it into a memorable
            journey.
          </p>

        </div>

        {/* FORM CONTAINER */}
        <div
          className="
            mt-12

            border
            border-[#ddd2c2]

            rounded-xl

            shadow-sm

            p-6
            sm:p-10
            lg:p-12
          "
        >

          <form
            ref={formRef}
            onSubmit={handleSubmit}
          >

            {/* HONEYPOT */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {/* PERSONAL DETAILS */}
            <PersonalDetails />

            {/* JOURNEY DETAILS */}
            <JourneyDetails />

            {/* BUTTON */}
            <div className="flex justify-center">

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  relative

                  w-full
                  sm:w-auto

                  px-8
                  sm:px-8

                  h-10
                  sm:h-[45px]

                  rounded-xl

                  bg-[#AF956C]
                  hover:bg-[#8f7654]

                  disabled:opacity-70
                  disabled:cursor-not-allowed

                  text-white

                  font-[300]

                  text-[12px]
                  sm:text-[13px]

                  tracking-wide

                  transition-all
                  duration-300

                  shadow-sm

                  flex
                  items-center
                  justify-center
                  gap-2
                "
              >

                {
                  loading
                    ? "Submitting..."
                    : "Submit Your Request"
                }

              </button>

            </div>

          </form>

        </div>

      </div>

    </section>

  );

}