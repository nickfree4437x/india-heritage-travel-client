"use client";


const architectureFeatures = [
  {
    title: "Visa and Documents",
    description:
      "International travelers require an e-Visa - apply online and check processing times. Keep physical and digital copies of all key documents.",
  },
  {
    title: "Health Preparation",
    description:
      "Visit a travel clinic 6–8 weeks before for vaccinations and malaria advice. Pack a health kit, and drink only bottled or filtered water - don't wait for signs of dehydration.",
  },
  {
    title: "Money and Connectivity",
    description:
      "Cards work in cities, cash in smaller towns - keep rupees for tips and shopping. Get a local SIM on arrival to stay connected.",
  },
  {
    title: "A Conversation With Your Operator",
    description:
      "Enquire about group size, rooming options, physical demands, and emergency support. Quick, clear answers signal a trustworthy women-only operator.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-2">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            How to Prepare Before You Go
          </h2>
        </div>

        {/* Features */}

        <div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-md p-5"
              >
                <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-1">
                  {feature.title}
                </h4>

                <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}