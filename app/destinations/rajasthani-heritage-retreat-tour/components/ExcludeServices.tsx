"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExcludedServices() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto py-10 border-t">

      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h2 className="text-2xl font-semibold text-[#9b7a50]">
          Excluded Services in this Journey:
        </h2>
        <ChevronDown className={`${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
          <li>Flights (International/Domestic)</li>
          <li>Visa & Insurance</li>
          <li>Meals not mentioned</li>
          <li>Personal expenses</li>
          <li>Monument entrance fees</li>
          <li>Tips & camera charges</li>
        </ul>
      )}
    </div>
  );
}