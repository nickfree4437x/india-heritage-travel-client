import type { Metadata } from "next";
import Footer from "@/src/sections/footer/Footer";

export const metadata: Metadata = {
  title:
    "India Visa Requirements | Tourist Visa & Entry Requirements Guide",

  description:
    "Learn about India visa requirements, tourist visas, passport validity, entry rules, travel permits, e-Visa options, and essential travel information for planning your trip to India.",

  keywords: [
    "India Visa Requirements",
    "India Tourist Visa",
    "India Visa Guide",
    "India eVisa",
    "India Travel Requirements",
    "India Entry Requirements",
    "Tourist Visa India",
    "India Travel Documents",
    "India Visa Information",
    "India Visa Application",
    "India Visa for Tourists",
    "India Travel Permit",
    "Passport Requirements India",
    "India Tourist Entry Rules",
    "India Visa Process",
    "India Travel Guide",
    "India Immigration Requirements",
    "Visit India Visa",
    "India Travel Planning",
    "India Tourism Visa",
  ],

  alternates: {
    canonical: "/visa-rules-for-india",
  },

  openGraph: {
    title:
      "India Visa Requirements | Tourist Visa & Entry Requirements Guide",
    description:
      "Find everything you need to know about India tourist visas, e-Visas, passport requirements, entry rules, and travel documentation before visiting India.",
    url: "https://indiaheritagetravel.com/visa-rules-for-india",
    siteName: "India Heritage Travel",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "India Visa Requirements | Tourist Visa & Entry Requirements Guide",
    description:
      "Understand India visa requirements, e-Visa options, passport validity rules, and essential travel documentation for your India trip.",
  },
};

export default function VisaRulesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="h-[100vh] flex items-center justify-center bg-[#A67E5B] text-white text-center">
        <h1 className="
          max-w-[700px]
          text-3xl md:text-4xl
          font-[600]
          leading-[1.1]
          tracking-[0.04em]
          mb-4
          opacity-0 translate-y-10
          animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
        ">
          India Visa Requirements & Travel Information Guide
        </h1>
      </section>

      {/* Main Content - Visa Information */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-[#9c7a45] mb-10">
          Visa Rules for India
        </h2>

        {/* Visa & Permits */}
        <h3 className="font-semibold mb-3">Visa and Permits in India</h3>
        <p className="
          text-gray-700
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-[300]
          leading-relaxed
          mb-6
        ">
          Visa serves as permission for individuals to stay in a country for a
          specific period and purpose, typically stamped in their passport.
          <span className="font-semibold"> All travelers to India</span>, except
          for Indian and Nepali citizens traveling between the two countries,
          must obtain a visa.
        </p>

        {/* Visa Durations */}
        <h3 className="font-semibold mb-3">Visa Durations</h3>
        <p className="
          text-gray-700
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-[300]
          leading-relaxed
          mb-6
        ">
          Tourist visas in India are usually issued for three to six months,
          allowing multiple entries, which is useful for side trips to neighboring
          countries like Nepal. Other options include one-year student visas,
          journalist visas, business visas, and five-year visas for non-resident
          Indians. When applying for a visa, ensure that your passport remains
          valid for at least six months beyond your intended return date.
        </p>

        {/* Obtaining a Visa */}
        <h3 className="font-semibold mb-3">Obtaining a Visa</h3>
        <p className="
          text-gray-700
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-[300]
          leading-relaxed
          mb-6
        ">
          The visa application process is more efficient when done through the
          Indian embassy in your home country. You'll need to complete an
          application form and provide your current passport, along with at least
          two passport-sized photographs. Visa applications can be sent Image via mail
          with payment in the form of money orders. Cash or checks are typically
          not accepted. When applying in person, consulates and embassies often
          accept cash, but money orders are the preferred option. The visa
          requirements, costs, and processing times can vary from country to
          country.
        </p>

        {/* Special Permits */}
        <h3 className="font-semibold mb-3">Special Permits</h3>
        <p className="
          text-gray-700
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-[300]
          leading-relaxed
          mb-6
        ">
          Certain regions in India require special permits in addition to a
          regular Indian visa. These permits can be issued by Indian High
          Commissions and Indian Embassies abroad, the Ministry of Home Affairs
          in Delhi, or Foreigner's Registration Offices (FRROs) in Indian cities.
        </p>
      </section>

      {/* Regions Requiring Special Permits */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h3 className="font-bold text-center mb-8">
          These regions include:
        </h3>

        <div className="
          text-gray-700
          text-[12px] sm:text-[13px] md:text-[14.5px]
          font-[300]
          leading-relaxed
          text-justify
        ">
          <p>
            <span className="font-semibold">1. Northeast India:</span> The seven
            sister states (excluding Assam, Meghalaya, and Tripura) require
            special permits due to tribal insurgencies and concerns related to
            potential conflicts with China. A group of at least four people must
            travel together, sponsored by a government-approved travel agency.
            These permits generally cost Rs. 300-400 and are valid for 15 days,
            renewable for an additional 15 days at the Foreigner's Registration
            Offices in state capitals. The processing time varies from 2 days to
            2 months depending on the state.
          </p>

          <p className="mt-6">
            <span className="font-semibold">2. Sikkim:</span> Due to its proximity
            to China, Sikkim is treated as a military buffer, and foreign travelers
            require a permit. The maximum stay duration cannot exceed 15 days per
            year. Permits are free and available in major Indian cities. They can
            be extended in special circumstances, but only for 3-5 days and on a
            limited basis. For North Sikkim, an inner line permit is necessary,
            which is available through tour companies for groups of four or more.
            A guide must accompany the group, with a minimum daily charge of
            US$30-35, including the guide. These permits are issued in a day but
            are obtainable only in Gangtok.
          </p>

          <p className="mt-6">
            <span className="font-semibold">3. Andaman and Nicobar Islands:</span>
            The Nicobar Islands are off-limits, and obtaining a permit for the
            Andaman Islands from the Ministry of Home Affairs or Indian
            Embassies abroad can be time-consuming. Arrivals by air can obtain
            permits upon arrival in Port Blair.
          </p>

          <p className="mt-6">
            <span className="font-semibold">4. Lakshadweep:</span> Only Bangaram
            Island is open to foreigners. You can obtain a free permit through
            the Liaison Officer of Lakshadweep or at select hotels in Cochin.
            You'll need four passport-sized photographs, and the permit can be
            issued within a day or two.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}