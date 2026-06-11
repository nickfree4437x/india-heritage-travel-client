"use client";

import Script from "next/script";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "IS INDIA A FAMILY-FRIENDLY DESTINATION?",
    a: "India offers a diverse range of unique activities, experiences, and attractions, making it an ideal destination for family travel. The country's warm hospitality and rich cultural traditions create an enriching environment for young travelers, and children are warmly welcomed everywhere they go. Whether you're seeking natural beauty, historical sites, bustling cities, or vibrant festivals like Holi or the Pushkar Fair, India has it all. Sanitation, and hygiene (WASH) programming to protect everyone's long-term health.",
  },
  {
    q: "IS INDIA A SAFE COUNTRY FOR TRAVELING WITH FAMILY, FRIENDS, SOLO FEMALE, OR BUSINESS?",
    a: "When it comes to personal safety and the well-being of your travel group, India is generally considered a safe destination. English is widely spoken and easily accessible, making navigation straightforward. However, it's advisable to take common-sense safety precautions, as you would when traveling anywhere in the world. Having a local tour guide can be invaluable for identifying safe areas to explore and recommending hygienic dining options. It's essential for international tourists to avoid drinking tap water and opt for bottled water during their stay.",
  },
  {
    q: "WHAT TYPES OF ACCOMMODATIONS ARE AVAILABLE IN INDIA?",
    a: "India offers a wide range of accommodations to suit various budgets and preferences. From opulent palace hotels to Western-style chain hotels and budget-friendly hostels, you'll find numerous options. Note that overnight stays are typically not permitted in wildlife sanctuaries and national parks, but you can easily find private accommodations on the outskirts of these areas. Hotel rates vary depending on the season and location. At IHT, we select accommodations that are not only comfortable but also maintain high hygiene standards. We provide boutique experiences for international guests and luxury hotels to ensure your stay is memorable.",
  },
  {
    q: "BOOKING AND PAYMENT WITH INDIA HERITAGE TRAVEL",
    a: "To confirm a booking with us, we require an advance payment, typically a percentage of the total cost, to secure your reservation. The remaining balance can be paid according to the agreed-upon payment plan for your journey. In some cases, such as during peak or holiday seasons, full payment may be required to confirm your reservation. We accept payments via Visa, MasterCard, and American Express, with a small bank processing fee for credit card payments. Alternatively, you can make a direct payment through a wire transfer to our bank account, with no additional fees. We will provide you with our billing and bank details at the time of invoicing, which you will receive after confirming your bookings.",
  },
  {
    q: "IS A VISA REQUIRED FOR TRAVELING TO INDIA?",
    a: "Most international travelers need to obtain a visa before visiting India. It's essential to contact your local Indian embassy for guidance on the visa application process. Tourist visas are typically valid for six months, and it's necessary to have at least two blank pages in your passport when applying. India also offers e-visa options for convenience.",
  },
  {
    q: "DO I NEED TRAVEL INSURANCE FOR INDIA?",
    a: "Before traveling to India, ensure your travel insurance covers loss of personal items, personal accidents, medical emergencies, emergency travel expenses, and trip cancellation. We require all guests traveling with Incredible Real India to have travel insurance.",
  },
  {
    q: "ARE SPECIFIC VACCINATIONS REQUIRED FOR TRAVELING TO INDIA?",
    a: "We recommend discussing vaccination requirements with your healthcare provider, as we cannot provide medical advice.",
  },
  {
    q: "How Safe Am I When Traveling with Incredible Real India?",
    a: "In the event of a medical emergency or any unfavorable incident, our team is readily available to assist you. Your safety is our top priority, and we maintain constant communication with our vehicles on the road. Additionally, we provide contact information for private doctors and medical facilities in your journey documents, and most hotels partner with doctors for 24-hour on-call services.",
  },
  {
    q: "Are Dietary Restrictions Accommodated in India?",
    a: "Our restaurant and hotel selections can cater to specific dietary requirements."
  },
  {
    q: "Tipping Guidelines?",
    a: "Tipping practices vary by location. On some journeys, certain gratuities are included. Typically, it's customary to tip the car or bus driver, driver's assistant (if applicable), local tour guide, as well as waitstaff, hotel housekeeping, and hotel porters."
  },
  {
    q: "Weather in India",
    a: "India's climate varies from region to region. Winters are generally cool and fresh from November to March, while hot and dry temperatures, along with dust storms and coastal humidity, prevail from April to June. The best time to visit the Himalayas is during the monsoon season when the rest of the country experiences heavy rainfall."
  },
  {
    q: "Currency in India",
    a: "Major international airports in India have currency exchange counters. Most hotels can also assist with currency exchange. It's a good practice to carry sufficient local currency for basic expenses, as some wildlife resorts may not offer currency exchange facilities. There are no specific restrictions on the amount of foreign currency or traveler's checks you can bring into India, but you'll need to fill out a declaration form upon arrival."
  },
  {
    q: "Credit Card Usage in India",
    a: "While major cities accept MasterCard and Visa, Diner's Club and American Express cards may not be as widely accepted. ATMs are readily available in major cities, but carrying some Indian currency is advisable for smaller locations and for tipping."
  },
  {
    q: "Internet and Mobile Coverage in India",
    a: "India has extensive telecom coverage, with mobile phones working in most areas. However, not all mobile operators have the same coverage quality. Some remote areas, such as national parks and mountainous regions, may have limited network access. Most hotels offer internet facilities, and you can find internet cafes in cities. Acquiring a local prepaid mobile number can be cost- effective, and our cars and buses provide free Wi-Fi access for your convenience.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",

    name: faq.q,

    acceptedAnswer: {
      "@type": "Answer",

      text: faq.a,
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
     <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
     />
     <section className="py-8 md:py-8 bg-white scroll-mt-20 md:scroll-mt-28" id="faq">
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-semibold text-center mb-4 sm:mb-6 text-[#9b7a50] tracking-wide">
            Frequently Asked Questions
          </h2>

          <div className="inline-block bg-[#9b7a50] text-white px-5 py-2 text-xs sm:text-sm tracking-wide rounded-sm relative">
            GENERAL FAQ'S
            <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-3 h-3 bg-[#9b7a50] rotate-45"></div>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3 md:space-y-4 mb-12">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#e9e2d8] border border-[#eee7dd] rounded-sm overflow-hidden transition-all duration-300 shadow-sm"
            >

              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-4 sm:px-5 md:px-6 py-3 sm:py-4 text-left
                          text-[11px] sm:text-xs md:text-sm tracking-[0.08em] uppercase
                          text-[#9b7a50] hover:bg-[#f9f6f2] transition-all duration-300 cursor-pointer group"
              >
                <span className="pr-3 sm:pr-4 leading-relaxed font-medium">
                  {item.q}
                </span>

                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 transition-all duration-500 ease-in-out ${
                    openIndex === i ? "rotate-180 text-[#7a5c3a]" : ""
                  } group-hover:scale-110`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === i
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 pt-3 sm:pt-4 text-justify bg-white
                            text-gray-600 text-[12px] sm:text-[13px] md:text-[13px] font-light
                            leading-6 sm:leading-7 tracking-[0.02em]
                            border-t border-[#eee7dd]"
                >
                  {item.a}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
     </section>
    </>
  );
}