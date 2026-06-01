"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import { PlanTripModalProps, FormDataType, FormErrorsType } from "./types";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const ACCESS_KEY = "499e1d69-87f9-41fa-9539-21cf35241422";

const initialFormData: FormDataType = {
  name: "",
  email: "",
  phone: "",
  tourDate: "",
  duration: "",
  travellers: "",
  ageGroup: "Below 30",
  accommodation: "",
  interests: [],
  destinations: [],
  budget: "$1,000 - $2,000",
  comments: "",
};

export default function PlanTripModal({ open, onClose }: PlanTripModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrorsType>({});
  const [formData, setFormData] = useState<FormDataType>(initialFormData);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrorsType]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // BODY SCROLL LOCK
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const validateStep1 = (): boolean => {
    const newErrors: FormErrorsType = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.tourDate) newErrors.tourDate = "Tour start date is required";
    if (!formData.duration) newErrors.duration = "Trip duration is required";
    else if (parseInt(formData.duration) <= 0) {
      newErrors.duration = "Please enter a valid duration";
    }
    if (!formData.travellers) newErrors.travellers = "Number of travellers is required";
    else if (parseInt(formData.travellers) <= 0) {
      newErrors.travellers = "Please enter a valid number";
    }
    if (!formData.accommodation) newErrors.accommodation = "Please select accommodation type";
    if (formData.interests.length === 0) newErrors.interests = "Please select at least one interest";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error(Object.values(newErrors)[0] as string);
      return false;
    }
    return true;
  };

  const validateStep2 = (): boolean => {
    const newErrors: FormErrorsType = {};

    if (formData.destinations.length === 0) {
      newErrors.destinations = "Please select at least one destination";
    }
    if (!formData.comments.trim()) {
      newErrors.comments = "Please enter your comments or special requests";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error(Object.values(newErrors)[0] as string);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    setStep(1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep2()) return;

    setLoading(true);

    try {
      const submissionData = {
        access_key: ACCESS_KEY,
        subject: "New Trip Plan Inquiry",
        from_name: formData.name,
        replyto: formData.email,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        tour_start_date: formData.tourDate,
        duration_days: formData.duration,
        number_of_travellers: formData.travellers,
        age_group: formData.ageGroup,
        accommodation_type: formData.accommodation,
        interests: formData.interests.join(", "),
        destinations: formData.destinations.join(", "),
        per_person_budget: formData.budget,
        comments_special_requests: formData.comments,
        botcheck: "",
      };

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Trip inquiry sent successfully!");
        setFormData(initialFormData);
        setStep(1);
        setErrors({});
        setTimeout(() => onClose(), 2000);
      } else {
        toast.error(data.message || "Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network error! Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] p-4 sm:p-6 md:p-8">
      {/* OVERLAY */}
      <div onClick={onClose} className="absolute inset-0 bg-black/70 backdrop-blur-[2px] -m-4 sm:-m-6 md:-m-8" />

      {/* MODAL */}
      <div className="relative w-full max-w-3xl mx-auto bg-white shadow-md overflow-y-auto max-h-full rounded-sm sm:rounded-sm">
        {/* HEADER - Fully Responsive */}
        <div className="bg-[#a68657] py-4 sm:py-5 px-5 sm:px-6 md:px-8 flex items-center justify-center relative sticky top-0 z-10 rounded-t-sm sm:rounded-t-sm">
          <h2 className="text-white text-[16px] sm:text-[18px] md:text-[20px] tracking-wide font-medium">
            Plan Your Trip
          </h2>

          <button
            onClick={onClose}
            className="absolute right-4 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-transform duration-200"
          >
            <X size={20} strokeWidth={2.5} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* CONTENT - Responsive Padding */}
        <div className="px-5 sm:px-7 md:px-9 lg:px-10 py-6 sm:py-8 md:py-10">
          {step === 1 && (
            <Step1
              formData={formData}
              errors={errors}
              updateFormData={updateFormData}
              onNext={handleNext}
            />
          )}

          {step === 2 && (
            <Step2
              formData={formData}
              errors={errors}
              loading={loading}
              updateFormData={updateFormData}
              onPrevious={handlePrevious}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}