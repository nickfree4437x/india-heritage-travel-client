// app/blogs/safe-luxury-destinations/components/MoreDestinationsSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function MoreDestinationsSection() {
  return (
    <section className="w-full bg-white pb-10 sm:pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Rishikesh */}
        <div className="max-w-5xl">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Rishikesh, Uttarakhand : A Peaceful Luxury Escape
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            There's a reason Rishikesh is such a hit with solo
            travellers. The city runs on routine and calm.
            Yoga studios, riverside paths and early evenings
            create the sense that it is a safe, gentle place.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Some of the luxury stay options are Ananda in the
            Himalayas or Aloha on Ganges. Morning yoga by the
            river, then quieter seaside walks establish an even
            flow. It's a town that feels safe because it's built
            around mindfulness rather than noise.
          </p>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782537034/pexels-yogeshsharma-35185649_aoliso.jpg"
              alt="Ganga river, ghats and Himalayan foothills in Rishikesh, Uttarakhand"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Pondicherry */}
        <div className="max-w-5xl mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Pondicherry : A Relaxed Coastal Luxury Destination
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Pondicherry is an easy place to travel alone.
            The streets are clean, the ocean breeze refreshing
            and the neighborhoods more compact, which makes
            getting around easy. People do not like to invade
            your personal space here!
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            There are also fancier places to stay like
            The Promenade and Palais de Mahe.
            White Town is perfect for leisurely strolls,
            café meals and balmy nights by the ocean.
            The environment feels familiar even on a first visit.
          </p>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782537290/pexels-prasang-yadav-2151662075-37266540_d00kua.jpg"
              alt="French colonial architecture and bougainvillea-lined streets in Pondicherry"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Varanasi */}
        <div className="max-w-5xl mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Varanasi : A Cultural Experience with Guided Support
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Varanasi is challenging, but it does not need to
            be overwhelming. If you have proper guidance,
            it can feel orderly and meaningful rather than
            chaotic. Living close to the ghats will save you
            money and also travel time.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            The options available for a luxury stay are
            BrijRama Palace and Taj Ganges.
            A boat ride at sunrise provides a quiet moment
            of reflection, while evening rituals can be
            observed from a distance. In destination such as
            this, a trusted India travel agency plays a very
            important role. If you are going for{" "}
            personalized holiday packages, make sure to check
            that it has Varanasi as a destination for the
            wholesome spiritual experience.
          </p>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782537400/pexels-chandi-saha-706198694-18728098_telcyf.jpg"
              alt="Historic ghats along the Ganges River in Varanasi, India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Kerala */}
        <div className="mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Kerala : Kochi, Alleppey and Munnar
          </h2>

          <div className="max-w-5xl">
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Kerala is also considered to be one of the most
              hassle-free parts of India for solo female
              travellers. High-quality healthcare, clear signs
              and polite local behaviour keep visitors at ease.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              For the luxury traveller, pamper yourself with
              a stay at Brunton Boatyard in Kochi,
              at exclusive houseboats in Alleppey, and
              Windermere Estate in Munnar.
              A backwater cruise, tea gardens, and coastal
              walks allow you to enjoy nature without
              seclusion. The experience feels steady and
              well supported.
            </p>
          </div>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779637786/goa_uw2nhp.jpg"
              alt="Scenic beaches and coastal landscapes in Goa India"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* South Goa */}
        <div className="max-w-5xl mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            South Goa : Luxury Beach Resorts
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            South Goa is quieter and more contained than the
            north. Resorts are spaced out, beaches are less
            crowded, and evenings are relaxed rather than loud.
            Luxury resorts near Palolem and Colva provide calm
            surroundings, wellness spas, and private beach
            experiences that feel comfortable for solo women
            wanting a slower pace.
          </p>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
          ">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782538068/pexels-j-singh-166004985-10898926_ss3e8z.jpg"
              alt="Luxury beachfront resort and palm-lined beach in South Goa, India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Practical Tips */}
        <div className="max-w-5xl mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Practical Safety Tips for Solo Female Travellers in India
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Comfort grows with small habits. Choose accommodation
            with strong reviews and visible staff presence.
            Use hotel drivers or known transport services.
            Keep daily plans simple and avoid rushing between locations.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Dress in a way that feels respectful to the setting.
            Carry digital copies of documents. Share your itinerary
            with someone you trust. Ask hotel staff for local advice.
            Trust instinct over politeness. Leaving a situation early
            is always acceptable.
          </p>
        </div>
        <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Looking for a Safe Luxury Destination?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light mb-4">
            India Heritage Travel designs personalised journeys that combine luxury, safety, and comfort with authentic cultural experiences, trusted local recommendations, and expert travel guidance throughout your trip.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#AF956C]
              px-6
              py-2 md:py-2.5
              text-[12px]
              sm:text-[13px]
              font-light
              text-white
              transition-colors
              duration-300
              hover:bg-[#9d8157]
            "
          >
            Planning a Luxury Solo Trip to India?
          </Link>

        </div>
      </div>
    </section>
  );
}