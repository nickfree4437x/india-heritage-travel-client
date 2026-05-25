"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

// ✅ TYPES
type CountryAPI = {
  name?: {
    common?: string;
  };
  flags?: {
    png?: string;
  };
  idd?: {
    root?: string;
    suffixes?: string[];
  };
};

type Country = {
  name: string;
  flag: string;
  code: string;
};

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function ContactSection() {

  const [countries, setCountries] =
    useState<Country[]>([]);

  // COUNTRY SEARCH
  const [search, setSearch] =
    useState<string>("");

  // COUNTRY DROPDOWN
  const [countryOpen, setCountryOpen] =
    useState<boolean>(false);

  // PHONE CODE DROPDOWN
  const [phoneCodeOpen, setPhoneCodeOpen] =
    useState<boolean>(false);

  // SELECTED COUNTRY
  const [selectedCountry, setSelectedCountry] =
    useState<string>("");

  // PHONE CODE
  const [selectedCode, setSelectedCode] =
    useState<string>("+91");

  // FORM FIELDS
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  // 🔥 FETCH COUNTRIES
  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );

        const data: CountryAPI[] =
          await res.json();

        const cleaned: Country[] = data

          .filter(
            (c) =>
              c?.name?.common &&
              c?.flags?.png &&
              c?.idd?.root
          )

          .map((c) => ({
            name: c.name!.common!,
            flag: c.flags!.png!,
            code: `${c.idd!.root}${c.idd!.suffixes?.[0] || ""
              }`,
          }))

          .sort((a, b) =>
            a.name.localeCompare(b.name)
          );

        setCountries(cleaned);

      } catch (err) {

        console.error(
          "Country fetch error:",
          err
        );

      }

    };

    fetchCountries();

  }, []);

  // 🔥 COUNTRY FILTER
  const filteredCountries =
    countries.filter((c) =>
      c.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  // 🔥 HANDLE FORM SUBMIT
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    // ✅ VALIDATION - Email, Phone Number, Country are mandatory
    if (!email.trim()) {
      toast.error("Email is required!");
      return;
    }

    if (!phoneNumber.trim()) {
      toast.error("Phone number is required!");
      return;
    }

    if (!selectedCountry) {
      toast.error("Please select your country!");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Phone number validation (basic - at least 5 digits)
    if (phoneNumber.trim().length < 5) {
      toast.error("Please enter a valid phone number!");
      return;
    }

    setLoading(true);

    try {
      const formData = {
        access_key: "f776e919-4b3c-4463-bfb6-078617a7a28a",
        subject: "New Contact Form Submission - Travel Inquiry",
        name: name || "Not provided",
        email: email,
        phone: `${selectedCode} ${phoneNumber}`,
        country: selectedCountry,
        message: message || "No message provided",
      };

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // SUCCESS
      if (response.ok && data.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        
        // Reset form
        setName("");
        setEmail("");
        setPhoneNumber("");
        setSelectedCountry("");
        setSearch("");
        setMessage("");
        setSelectedCode("+91");
        
      } else {
        toast.error(data.message || "Something went wrong!");
      }

    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <section className="relative mt-16 min-h-[100vh] py-10 px-6 text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">

        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779744490/contact1_q8t4a4.jpg"
          alt="Contact Background"
          fill
          priority
          className="
            object-cover
            object-[65%_center]
            sm:object-[center_30%]
            scale-100
          "
        />

      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-16"
        >

          <h2
            className="
              font-heading
              text-[20px]
              sm:text-[24px]
              md:text-[28px]
              font-semibold
              tracking-wide
              text-white
              mb-2
              leading-snug
              md:whitespace-nowrap
            "
          >
            Contact
          </h2>

          <p
            className="
              text-[12px]
              sm:text-[13px]
              md:text-[13px]
              font-light
              leading-relaxed
              text-white/90
              tracking-wide
              max-w-[580px]
              mx-auto
            "
          >

            <span className="text-white">
              Be our guest!
            </span>

            {" "}Let us know about your dream
            journey and we’ll craft something unforgettable.

          </p>

        </motion.div>

        {/* FORM */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          onSubmit={handleSubmit}
          className="
            grid
            md:grid-cols-2
            gap-x-12
            gap-y-10
            mb-8
          "
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              bg-transparent
              border-b
              border-white/30
              py-1
              text-xs
              outline-none
              placeholder-gray-400
              focus:border-[#AF956C]
              transition-all
              duration-300
            "
          />

          {/* EMAIL - MANDATORY */}
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="
              w-full
              bg-transparent
              border-b
              border-white/30
              py-1
              text-xs
              outline-none
              placeholder-gray-400
              focus:border-[#AF956C]
              transition-all
              duration-300
            "
          />

          {/* PHONE FIELD - MANDATORY */}
          <div
            className="
              flex
              items-center
              gap-3
              border-b
              border-white/30
              relative
            "
          >

            {/* PHONE CODE DROPDOWN */}
            <div className="relative min-w-[95px]">

              <button
                type="button"

                onClick={() => {

                  setPhoneCodeOpen(
                    !phoneCodeOpen
                  );

                  // CLOSE OTHER DROPDOWN
                  setCountryOpen(false);

                }}

                className="
                  flex
                  items-center
                  gap-2
                  py-1
                  text-xs
                "
              >

                <span>
                  {selectedCode}
                </span>

              </button>

              {/* PHONE DROPDOWN */}
              {phoneCodeOpen && (

                <div
                  className="
                    absolute
                    left-0
                    top-10
                    w-[270px]
                    max-h-60
                    overflow-y-auto
                    rounded-md
                    z-50
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/20
                    shadow-lg
                  "
                >

                  {countries.map((country, i) => (

                    <div
                      key={i}

                      onClick={() => {

                        setSelectedCode(
                          country.code
                        );

                        setPhoneCodeOpen(false);

                      }}

                      className="
                        flex
                        items-center
                        gap-3
                        px-4
                        py-2
                        text-sm
                        cursor-pointer
                        hover:bg-white/20
                        transition
                      "
                    >

                      <img
                        src={country.flag}
                        alt={country.name}
                        className="
                          w-5
                          h-4
                          rounded-sm
                        "
                      />

                      <span>
                        {country.code}
                      </span>

                      <span className="text-white/80">
                        {country.name}
                      </span>

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* PHONE INPUT */}
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="
                w-full
                bg-transparent
                py-1
                text-xs
                outline-none
                placeholder-gray-400
              "
            />

          </div>

          {/* COUNTRY FIELD - MANDATORY */}
          <div className="relative">

            <input
              type="text"
              placeholder="Select your Country *"
              value={selectedCountry || search}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement>
              ) => {

                setSearch(e.target.value);

              }}

              onFocus={() => {

                setCountryOpen(true);

                // CLOSE OTHER DROPDOWN
                setPhoneCodeOpen(false);

              }}

              required
              className="
                w-full
                bg-transparent
                border-b
                border-white/30
                py-1
                text-xs
                outline-none
                placeholder-gray-400
                focus:border-[#AF956C]
                transition-all
                duration-300
              "
            />

            {/* COUNTRY DROPDOWN */}
            {countryOpen && (

              <div
                className="
                  absolute
                  left-0
                  w-full
                  max-h-60
                  overflow-y-auto
                  mt-2
                  rounded-md
                  z-50
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  shadow-lg
                "
              >

                {filteredCountries.length > 0 ? (

                  filteredCountries.map(
                    (country, i) => (

                      <div
                        key={i}

                        onClick={() => {

                          setSelectedCountry(
                            country.name
                          );

                          setSearch("");

                          setCountryOpen(false);

                        }}

                        className="
                          flex
                          items-center
                          gap-3
                          px-4
                          py-2
                          text-sm
                          cursor-pointer
                          hover:bg-white/20
                          transition
                        "
                      >

                        <img
                          src={country.flag}
                          alt={country.name}
                          className="
                            w-5
                            h-4
                            rounded-sm
                          "
                        />

                        {country.name}

                      </div>

                    )
                  )

                ) : (

                  <p
                    className="
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    No country found
                  </p>

                )}

              </div>

            )}

          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2">

            <textarea
              rows={4}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
                w-full
                bg-transparent
                border-b
                border-white/30
                py-1
                text-xs
                outline-none
                placeholder-gray-400
                focus:border-[#AF956C]
                transition-all
                duration-300
              "
            ></textarea>

          </div>

        </motion.form>

        {/* BUTTON */}
        <motion.div className="text-center mt-14">

          <button
            onClick={() => {
              const formEvent = new Event('submit', { bubbles: true });
              const form = formRef.current;
              if (form) form.dispatchEvent(formEvent);
            }}
            disabled={loading}
            className="
              border
              border-[#AF956C]
              px-7
              py-3
              rounded-full
              text-white
              text-xs
              tracking-wide
              hover:bg-[#AF956C]
              transition
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.div>

      </div>

    </section>
  );
}