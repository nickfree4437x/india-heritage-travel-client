"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import {
  User,
  Mail,
  Users,
  Phone,
  CalendarDays,
  MessageSquareText,
  Globe,
  ArrowRight,
} from "lucide-react";
import React from "react";

interface CountryOption {
  value: string;
  label: React.ReactNode;
  code: string;
  flag: string;
  name: string;
}

export default function BookNowSection() {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );

        const data = await res.json();

        const formattedCountries = data
          .map((country: any) => {
            const root = country.idd?.root || "";
            const suffix = country.idd?.suffixes?.[0] || "";

            return {
              value: country.name.common,
              name: country.name.common,
              code: `${root}${suffix}`,
              flag: country.flags.svg,
              label: (
                <div className="flex items-center gap-3">
                  <img
                    src={country.flags.svg}
                    alt={country.name.common}
                    className="w-5 h-4 object-cover rounded-sm shadow-sm"
                  />
                  <span className="text-[13px] font-normal text-gray-700">
                    {country.name.common}
                  </span>
                </div>
              ),
            };
          })
          .sort((a: any, b: any) => a.name.localeCompare(b.name));

        setCountries(formattedCountries);

        const india = formattedCountries.find(
          (c: CountryOption) => c.name === "India"
        );

        setSelectedCountry(india);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  // Don't render Select components on server to avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="w-full bg-gradient-to-br from-[#faf8f5] to-[#f2efe8] py-6 md:py-8 lg:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-[20px]
              sm:text-[24px]
              md:text-[26px]
              font-semibold
              text-center
              mb-6 sm:mb-8
              text-[#2c2c2c]
              tracking-wide">
              Plan Your Journey
            </h2>
            <p className="text-[14px] sm:text-[15px] text-gray-500 font-light max-w-md mx-auto">
              Fill in your details and our travel expert will reach out to you
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10">
              <div className="animate-pulse space-y-5">
                <div className="h-12 bg-gray-100 rounded-xl"></div>
                <div className="h-12 bg-gray-100 rounded-xl"></div>
                <div className="h-12 bg-gray-100 rounded-xl"></div>
                <div className="h-32 bg-gray-100 rounded-xl"></div>
                <div className="h-12 bg-gray-100 rounded-xl w-32"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#fcfcfb] py-6 md:py-6 lg:py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[20px]
            sm:text-[24px]
            md:text-[26px]
            font-semibold
            text-center
            mb-4 sm:mb-2
            text-[#2c2c2c]
            tracking-wide">
            Plan Your Journey
          </h2>
          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
            Fill in your details and our travel expert will reach out to you
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            
            <form className="space-y-5 sm:space-y-6" suppressHydrationWarning>
              
              {/* Row 1 - Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#8b6a3d] transition-colors" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-12 sm:h-[45px] pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-[12px] md:text-[13px] font-light text-gray-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#9a7242]/10 placeholder:text-gray-400"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#9a7242] transition-colors" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-12 sm:h-[45px] pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-[12px] md:text-[13px] font-light text-gray-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#9a7242]/10 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Row 2 - Guests & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="relative group">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#9a7242] transition-colors" />
                  <input
                    type="number"
                    min="1"
                    placeholder="Number of Guests"
                    className="w-full h-12 sm:h-[45px] pl-11 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-[12px] md:text-[13px] font-light text-gray-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#9a7242]/10 placeholder:text-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <Globe className="w-4 h-4 text-gray-400" />
                  </div>
                  <Select
                    key="country-select"
                    options={countries}
                    value={selectedCountry}
                    onChange={(value) => setSelectedCountry(value as CountryOption)}
                    placeholder="Select Country"
                    className="react-select-container"
                    classNamePrefix="react-select"
                    instanceId="country-select"
                    styles={{
                      control: (base, state) => ({
                        ...base,
                        minHeight: "45px",
                        height: "45px",
                        borderColor: state.isFocused ? "#9a7242" : "#e5e7eb",
                        boxShadow: state.isFocused ? "0 0 0 2px rgba(154,114,66,0.1)" : "none",
                        borderRadius: "8px",
                        backgroundColor: state.isFocused ? "white" : "#f9fafb",
                        fontSize: "14px",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: "#d4c5b0",
                        },
                      }),
                      option: (base, state) => ({
                        ...base,
                        fontSize: "13px",
                        backgroundColor: state.isFocused ? "#f5f1ea" : "white",
                        color: state.isSelected ? "#9a7242" : "#374151",
                        cursor: "pointer",
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#9ca3af",
                        fontSize: "14px",
                      }),
                      valueContainer: (base) => ({
                        ...base,
                        paddingLeft: "34px",
                      }),
                    }}
                  />
                </div>
              </div>

              {/* Row 3 - Mobile Number & Date of Visit (NOW IN SAME ROW) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Mobile Number Field */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="w-full sm:w-[140px]">
                    <Select
                      key="country-code-select"
                      options={countries}
                      value={selectedCountry}
                      onChange={(value) => setSelectedCountry(value as CountryOption)}
                      instanceId="country-code-select"
                      styles={{
                        control: (base, state) => ({
                          ...base,
                          minHeight: "45px",
                          height: "45px",
                          borderColor: state.isFocused ? "#9a7242" : "#e5e7eb",
                          boxShadow: state.isFocused ? "0 0 0 2px rgba(154,114,66,0.1)" : "none",
                          borderRadius: "8px",
                          backgroundColor: state.isFocused ? "white" : "#f9fafb",
                          cursor: "pointer",
                          "&:hover": {
                            borderColor: "#d4c5b0",
                          },
                        }),
                        option: (base, state) => ({
                          ...base,
                          fontSize: "12px",
                          backgroundColor: state.isFocused ? "#f5f1ea" : "white",
                          cursor: "pointer",
                        }),
                      }}
                      formatOptionLabel={(country: any) => (
                        <div className="flex items-center gap-2">
                          <img
                            src={country.flag}
                            alt={country.name}
                            className="w-5 h-4 object-cover rounded-sm shadow-sm"
                          />
                          <span className="text-[13px] font-normal text-gray-700">
                            {country.code}
                          </span>
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex-1 relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#9a7242] transition-colors" />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full h-12 sm:h-[45px] pl-11 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-[12px] md:text-[13px] font-light text-gray-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#9a7242]/10 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Date of Visit Field */}
                <div>
                  <div className="relative group w-full">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#9a7242] transition-colors pointer-events-none" />
                    <input
                      type="date"
                      placeholder="Select Date of Visit"
                      className="w-full h-12 sm:h-[45px] pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-[12px] md:text-[13px] font-light text-gray-800 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#9a7242]/10 placeholder:text-gray-400 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                {/* <label className="text-[12px] sm:text-[13px] text-gray-600 mb-2 block">
                  Additional Details
                </label> */}
                <div className="relative group">
                  <MessageSquareText className="absolute left-4 top-4 w-4 h-4 text-gray-400 group-focus-within:text-[#9a7242] transition-colors" />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your travel preferences, special requests, or anything else you'd like us to know..."
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50/50 text-[12px] md:text-[13px] font-light text-gray-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#9a7242]/10 placeholder:text-gray-400 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group relative w-full sm:w-auto px-8 sm:px-8 h-10 sm:h-[45px] rounded-xl bg-[#AF956C] hover:bg-[#8f7654] text-white font-[300] text-[12px] sm:text-[13px] tracking-wide transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}