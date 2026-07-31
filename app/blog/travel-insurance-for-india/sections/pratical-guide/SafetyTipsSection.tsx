"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Practical Safety Tips for a Worry-Free India Trip
        </h2>

        {/* Content */}
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            There are a few things it kinda won’t cover, pre existing medical conditions, unless you actually 
            state them and they are specifically included which is usually tied to a higher premium. Also 
            injuries that happen while somebody is under the influence of alcohol or drugs, that sort of 
            thing. Then there’s unlicensed adventure activities, or adventure sports that go past a set 
            altitude or level of intensity, and without a rider. Travel to places that are under an official 
            government travel advisory when you book it, not after. And claims that pop up because you did not 
            seek treatment promptly, or because there was a change in your itinerary that you didn’t declare.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Your Pre-Departure Insurance Checklist
        </h2>

        {/* Content */}
        <div className="space-y-2 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Before you go, double check the latest e-Visa insurance guidance for your nationality, like 
            right now. Make sure you pick a policy with at least USD 50,000 in medical cover, plus named 
            evacuation benefits, not just general support. If your plans involve trekking, safaris, or 
            rafting, consider adding an adventure rider too. Also, when you buy the plan, be truthful about 
            any pre existing conditions you already have, even if they seem minor. Save your insurer 
            assistance number and your policy number both in your phone and on paper, just to be safe. 
            Lastly, send your policy details to your India Heritage Travel trip coordinator before departure.
          </p>
        </div>
      </div>
    </section>
  );
}