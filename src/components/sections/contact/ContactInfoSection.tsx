"use client";

import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <section className="bg-[#f8f6f2] py-10 sm:py-16 lg:py-20 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="lg:ml-16 xl:ml-24 2xl:ml-32 px-5 sm:px-8 lg:px-0">

            <div className="max-w-[620px] space-y-8">
              <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-center font-semibold text-[#2d2d2d] leading-tight">
                Let’s connect with us
              </h2>

              {/* TEXT */}
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify">
                Be our guest! Let us know about your dream or need.
                We’ll transform it into a memorable and luxurious travel
                experience crafted specially for you.
              </p>

              {/* CONTACT CARDS */}
              <div className="space-y-5">

                {/* VISIT */}
                <div className="flex gap-4 sm:gap-5 items-start bg-white rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-300">

                  <div className="min-w-[52px] sm:min-w-[58px] h-[52px] sm:h-[58px] rounded-full bg-[#9c6b2f] flex items-center justify-center text-white shadow-sm">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h3 className="text-[#9c6b2f] font-semibold text-[14px] sm:text-[15px] tracking-wide mb-2">
                      VISIT US
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify">
                      15-16-17 Maa Shakambhari Nagar-d Block,
                      Near Silver Stream World School,
                      Gandhi Path Road, Jaipur,
                      Rajasthan - 302021
                    </p>
                  </div>

                </div>

                {/* MAIL */}
                <div className="flex gap-4 sm:gap-5 items-start bg-white rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-300">

                  <div className="min-w-[52px] sm:min-w-[58px] h-[52px] sm:h-[58px] rounded-full bg-[#9c6b2f] flex items-center justify-center text-white shadow-sm">
                    <Mail size={22} />
                  </div>

                  <div>
                    <h3 className="text-[#9c6b2f] font-semibold text-[14px] sm:text-[15px] tracking-wide mb-2">
                      MAIL US
                    </h3>

                    <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify break-words">
                      info.indiaheritagetravel@gmail.com
                    </p>
                  </div>

                </div>

                {/* CALL */}
                <div className="flex gap-4 sm:gap-5 items-start bg-white rounded-xl p-4 sm:p-5 shadow-sm transition-all duration-300">

                  <div className="min-w-[52px] sm:min-w-[58px] h-[52px] sm:h-[58px] rounded-full bg-[#9c6b2f] flex items-center justify-center text-white shadow-sm">
                    <Phone size={22} />
                  </div>

                  <div>
                    <h3 className="text-[#9c6b2f] font-semibold text-[14px] sm:text-[15px] tracking-wide mb-2">
                      CALL US
                    </h3>

                    <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify">
                      +91 7062101914
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:mr-16 xl:mr-24 2xl:mr-32 px-5 sm:px-8 lg:px-0">

  <div className="rounded-sm overflow-hidden border border-[#e9dfd2] shadow-sm">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3607526.3185683247!2d74.17314341796877!3d27.994663692885368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e182bf9fa9%3A0x942288a77789dd3f!2sIndia%20Heritage%20Travel!5e0!3m2!1sen!2sin!4v1779286272703!5m2!1sen!2sin"
      width="100%"
      height="100%"
      className="w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px]"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

  </div>

</div>

        </div>

      </section>
  );
}