"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Luxury Destinations in India for Women Travelers
          </h2>
        </div>

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Rajasthan: Jaipur, Udaipur & Jodhpur
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Rajasthan is kinda the heartland of India’s luxury heritage travel, and honestly for good reason too. 
            Jaipur’s Amber Fort and City Palace show Rajput architecture in a really theatrical way, like bold 
            scenes all around, while Udaipur - people call it the most romantic city in India, almost without 
            exception - wraps Lake Pichola in a kind of marble palace ring, and quite a few of those places are 
            now heritage hotels. Then there’s Jodhpur’s Mehrangarh Fort, which rises so sheer above the blue-washed 
            old city that it feels unreal, and it gives some of the country’s most dramatic perspectives. And yes, 
            across all three, you get this dense cluster of palace to hotel properties, plus private guiding networks, 
            plus artisan workshops block printing, miniature painting, silver jewellery, etc, that pair up really 
            well with slower more immersive women’s itineraries.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785388228/abhinav-tripathi-3FeeAbwIO2o-unsplash_ee7bh8.jpg"
                alt="Rajasthan luxury destinations for women - Jaipur Udaipur Jodhpur palace tours"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            The Golden Triangle: Delhi, Agra & Jaipur
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3 md:mb-6">
            For first-time visitors, the classic Golden Triangle route is still the fastest way to get an 
            introduction to India, kinda anchored by the Taj Mahal in Agra-an UNESCO World Heritage Site 
            and also one of the most photographed buildings on earth. There’s a luxury version of this 
            whole circuit that trades the crowded coach transfers for something more private, like a 
            chauffeur on call, and the visits to the monuments are paced so you hit them before the peak 
            crowds. Instead of standard business hotels, you usually stay in heritage-hotel settings, a 
            kind of quieter indulgence overall.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785388399/sreehari-devadas-j4hGnHYl8ic-unsplash_yilbfn.jpg"
                alt="Golden Triangle luxury tour for women - Delhi Agra Jaipur private heritage experience"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Kerala: Backwaters & Wellness
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Kerala has this whole different vibe register, like houseboat cruises moving thru the backwaters , 
            Ayurvedic wellness retreats that feel grounded, and spice-plantation stays tucked inside the 
            Western Ghats. For women who put rest and rejuvenation first , but still want culture stitched 
            in, Kerala just pairs naturally with a Rajasthan heritage circuit as the second half of a longer 
            trip.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785390349/abhishek-prasad-ii0oWs5abCo-unsplash_lrmfdc.jpg"
                alt="Kerala backwaters and wellness tour for women - houseboat and Ayurveda retreat"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
           Varanasi: Spiritual Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Kerala has this whole different vibe register, like houseboat cruises moving thru the backwaters , 
            Ayurvedic wellness retreats that feel grounded, and spice-plantation stays tucked inside the 
            Western Ghats. For women who put rest and rejuvenation first , but still want culture stitched 
            in, Kerala just pairs naturally with a Rajasthan heritage circuit as the second half of a longer 
            trip.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785390513/harsh-khandelwal-_cBHOR8UsDI-unsplash_a3de1r.jpg"
                alt="Varanasi spiritual heritage tour for women - Ganga Aarti and temple visits"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via unsplash
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Signature Experiences Designed for Women
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Wellness and spa retreats, more about Ayurveda and yoga, with quiet mornings instead of super 
            packed sight seeing days or that constant hurry. Culinary experiences with home cooks and female 
            led kitchens, think Rajasthani thalis and Keralan seafood curries, that kind of warm hospitality. 
            Then there are luxury train journeys like the Maharajas' Express or Palace on Wheels, where you 
            get moving scenery but still hotel level comfort, not the shaky kind. Artisan lead workshops too, 
            block printing in Bagru, miniature painting in Udaipur, textile weaving in Varanasi, little by 
            little. And finally small group women departures for solo travelers, a bit of company when you 
            want it but still a tailor-made pace you can actually feel comfortable with.
          </p>
        </div>
      </div>
    </section>
  );
}