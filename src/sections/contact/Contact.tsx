"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Country } from "country-state-city";
import { ContactForm } from "./ContactForm";
import { ContactHeader } from "./ContactHeader";
import type { CountryOption } from "./types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function ContactSection() {
// FORM FIELDS
const [name, setName] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [phoneNumber, setPhoneNumber] = useState<string>("");
const [message, setMessage] = useState<string>("");
const [loading, setLoading] = useState<boolean>(false);

// SELECTED VALUES
const [selectedCountry, setSelectedCountry] =
useState<CountryOption | null>(null);

// OPTIONS
const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);

// FETCH COUNTRIES
useEffect(() => {
const allCountries = Country.getAllCountries();

const countries: CountryOption[] = allCountries
  .map((country) => ({
      value: country.name,
      label: country.name,
      countryCode: country.isoCode,
    }))
  .sort((a, b) => a.label.localeCompare(b.label));

setCountryOptions(countries);

}, []);

// HANDLE FORM SUBMIT
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

if (loading) return;

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

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  toast.error("Please enter a valid email address!");
  return;
}

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
    email,
    phone: phoneNumber,
    country: selectedCountry.label,
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

  if (response.ok && data.success) {
    toast.success(
      "Message sent successfully! We'll get back to you soon."
    );

    // Reset form
    setName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedCountry(null);
    setMessage("");
  } else {
    toast.error(data.message || "Something went wrong!");
  }
} catch (error) {
  toast.error("Failed to send message. Please try again.");
} finally {
  setLoading(false);
}

};

return ( <section className="relative mt-16 min-h-[100vh] py-10 px-6 text-white overflow-hidden">
{/* BACKGROUND */} <div className="absolute inset-0 -z-10 bg-black overflow-hidden"> <img
       src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779744490/contact1_q8t4a4.jpg"
       alt="Travel consultation and journey planning with India Heritage Travel"
       className="object-cover object-[65%_center] sm:object-[center_30%] w-full h-full scale-100"
     /> </div>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60 -z-10"></div>

  <div className="relative max-w-5xl mx-auto">
    <ContactHeader />

    <ContactForm
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      message={message}
      setMessage={setMessage}
      selectedCountry={selectedCountry}
      setSelectedCountry={setSelectedCountry}
      countryOptions={countryOptions}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  </div>
</section>

);
}
