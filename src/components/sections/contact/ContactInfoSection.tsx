"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="bg-[#f8f6f2] py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Intro Text */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            Be our guest! Let us know about your dream or need. We will convert
            it into a memorable journey.
          </p>

          {/* Visit */}
          <div className="flex gap-4 items-start">

            <div className="w-14 h-14 rounded-full bg-[#9c6b2f] flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>

            <div>
              <h3 className="text-[#9c6b2f] font-semibold mb-2">VISIT US:</h3>
              <p className="text-gray-700 leading-relaxed">
                15-16-17 Maa Shakambhari Nagar-d Block, Near Silver Strem World School,
                Gandhi Path Road, Jaipur, Rajasthan, 302021
              </p>
            </div>
          </div>

          {/* Mail */}
          <div className="flex gap-4 items-start">

            <div className="w-14 h-14 rounded-full bg-[#9c6b2f] flex items-center justify-center text-white">
              <Mail size={24} />
            </div>

            <div>
              <h3 className="text-[#9c6b2f] font-semibold mb-2">MAIL US:</h3>
              <p className="text-gray-700">
                info.indiaheritagetravel@gmail.com
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="flex gap-4 items-start">

            <div className="w-14 h-14 rounded-full bg-[#9c6b2f] flex items-center justify-center text-white">
              <Phone size={24} />
            </div>

            <div>
              <h3 className="text-[#9c6b2f] font-semibold mb-2">CALL US</h3>
              <p className="text-gray-700">
                +91 7062101914
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE - MAP */}
        <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-md">

          <iframe
            src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </section>
  );
}