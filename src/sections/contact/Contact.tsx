"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Country } from "country-state-city";
import { ContactForm } from "./components/ContactForm";
import { ContactHeader } from "./components/ContactHeader";
import type { CountryOption } from "./types/types";

// ============================================================
// CONSTANTS
// ============================================================
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// ============================================================
// COMPONENT
// ============================================================
export default function ContactSection() {
  // ===== FORM STATE =====
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // ===== COUNTRY SELECT STATE =====
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [countryOptions, setCountryOptions] = useState<CountryOption[]>([]);

  // ===== FETCH COUNTRIES ON MOUNT =====
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

  // ===== FORM VALIDATION & SUBMISSION =====
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    // Validate Email
    if (!email.trim()) {
      toast.error("Email is required!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    // Validate Phone
    if (!phoneNumber.trim()) {
      toast.error("Phone number is required!");
      return;
    }

    if (phoneNumber.trim().length < 5) {
      toast.error("Please enter a valid phone number!");
      return;
    }

    // Validate Country
    if (!selectedCountry) {
      toast.error("Please select your country!");
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
        toast.success("Message sent successfully! We'll get back to you soon.");

        // Reset form after successful submission
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

  // ===== RENDER =====
  return (
    <section className="relative mt-16 min-h-[100vh] py-10 px-6 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 bg-black overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779744490/contact1_q8t4a4.jpg"
          alt="Travel consultation and journey planning with India Heritage Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] sm:object-[center_30%]"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
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