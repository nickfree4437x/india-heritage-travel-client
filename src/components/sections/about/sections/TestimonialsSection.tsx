"use client";

import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-10">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-[#9c6b2f]">
        Testimonials
      </h2>

      {/* Main Layout */}
      <div className="grid md:grid-cols-3 gap-10 items-start">

        {/* LEFT - Rating */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide">EXCELLENT</h3>

          {/* Stars */}
          <div className="flex items-center gap-1 text-yellow-400">
            {[1,2,3,4].map((_,i)=>(
              <Star key={i} fill="currentColor" size={24} />
            ))}
            <Star size={24} className="text-gray-300" />
          </div>

          <p className="text-sm text-gray-600">
            Based on <span className="font-semibold">14 reviews</span>
          </p>

          {/* Google Text */}
          <p className="text-2xl font-semibold text-blue-500">Google</p>
        </div>

        {/* REVIEW CARD 1 */}
        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-200" />
            <div>
              <p className="font-semibold">Róża Bartnicka</p>
              <p className="text-xs text-gray-500">1 year ago</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex text-yellow-400">
            {[1,2,3,4,5].map((_,i)=>(
              <Star key={i} fill="currentColor" size={16} />
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            For our first visit in India with my husband we decided to book a tour.
            I contacted few companies and finally I chose India heritage travel...
          </p>

          <p className="text-sm text-gray-400">Read more</p>
        </div>

        {/* REVIEW CARD 2 */}
        <div className="space-y-3">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-semibold">Dhananjay Vyas</p>
              <p className="text-xs text-gray-500">1 year ago</p>
            </div>
          </div>

          {/* Stars */}
          <div className="flex text-yellow-400">
            {[1,2,3,4,5].map((_,i)=>(
              <Star key={i} fill="currentColor" size={16} />
            ))}
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Good Service and Best Tour! Driver is also good and they done their best job! Thanks
          </p>

        </div>

      </div>

      {/* Footer Badge */}
      <div className="flex justify-end">
        <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
          Verified by Trustindex
        </div>
      </div>

    </section>
  );
}