"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
            Greetings and Social Interactions
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            A namaste , palms together at chest height with a slight bow of the head - well it tends to be 
            the safest warmest greeting basically anywhere in India , and it avoids that little uncertainty 
            around handshakes, hugs or cheek kisses, which are less common in traditional or rural places . 
            Address elders and folks in positions of authority with a respectful title if you know one, and 
            take your lead from your host or guide, on whether a handshake is appropriate in more westernised , 
            urban settings .
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785303978/pexels-avro-dutta-2153793012-34755223_jepcm1.jpg"
                alt="Greetings and social interactions in India - namaste and cultural etiquette"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via pexels
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
            Public Behaviour and Personal Space
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3 md:mb-6">
            Physical affection between couples is generally kept sort of low key in public across most of 
            India, and sort of mirroring that quieter tone tends to feel more comfortable, then standing 
            out too much. Pointing with just a single finger is often considered impolite in a lot of 
            contexts - use an open hand instead - and it’s pretty common for personal space in queues and 
            markets to feel closer than what travellers from the US, UK, or Australia are used to; a little 
            patience goes a long way rather than visible frustration.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
           Dining Etiquette
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Many Indians eat with their right hand rather than using cutlery, especially in traditional 
            restaurants and at home kinda settings; follow your host’s lead and use your right hand for 
            offering or receiving food and, money too. It’s pretty common, and actually welcomed, to remove 
            your shoes before entering a traditional home, like no big deal. If you are at a home dinner, 
            leaving a small amount of food on the plate is generally fine, but fully finishing everything 
            can sometimes be interpreted as a kind of signal that you’re asking for more. Alcohol is not 
            served everywhere and some religious or family environments are “dry” by tradition rather than 
            by law, so check first before assuming it’s available there.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785304321/pexels-yankrukov-8818660_ndpmth.jpg"
                alt="Dining etiquette in India - eating with hands and table manners guide"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via pexels
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
           Photography Etiquette
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Always ask first before photographing anyone, especially in rural zones, at religious places, 
            and when there’s a ceremony going on. A lot of temple interiors restrict photography, or they 
            stop it completely,so keep an eye out for any posted signs, or just ask the temple staff before 
            you lift your camera. Drone photography in India needs its own permissions, and it can be limited, 
            or outright prohibited near many heritage sites and government areas. For the best shots at most 
            heritage sites try early morning light, it gives a nicer look while also dodging the heat, and those 
            most crowded times.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785305049/pexels-harsh-kukadiya-244412142-37879981_cnpmz0.jpg"
                alt="Photography etiquette in India - respecting culture and asking permission"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via pexels
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
            Shopping and Market Etiquette
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Bargaining is usually expected in most markets, and even with independent vendors, however in 
            fixed price shops , malls, or government emporiums it’s not really a thing. A friendly, unhurried 
            back-and-forth is more like part of the whole experience than a showdown , so see it as a conversation 
            not a confrontation. It’s also pretty normal to end up in the middle somewhere between the first asking 
            number and your first offer, even if it feels a bit casual at the start.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
           Festivals and Cultural Events
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            If your trip lines up with a big festival - Diwali, Holi, Navratri, or a regional temple festival - 
            dress in a modest way, even while you are still outdoors at the celebrations. Before you photograph 
            rituals or the celebrants, ask first, because it really can vary. Also, do not be surprised if crowds 
            get much denser than you expect and the noise level is noticeably higher than on a normal day. 
            Going into a festival for even a short moment, is honestly one of the most memorable cultural moments 
            any traveller can run into, and having a local guide can make it easier to join in respectfully, not 
            just stand there awkwardly as a distant observer at the edge of things.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785305369/pexels-suman-karmakar-2882002-31182127_x42xmz.jpg"
                alt="Festivals and cultural events in India - celebrating Holi Diwali and local traditions"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via pexels
            </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
            Rural and Village Etiquette
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Village settings tend to be more traditional than the cities, and dress modesty matters even 
            more there, honestly. Start with elders when you arrive, greet them first , and ask for permission 
            before you take photos of people or their homes. Also, just expect a slower, more conversational 
            tempo compared to urban India. Rural hospitality can be extraordinarily warm , so a bit of patience 
            and real curiosity are typically rewarded many times over, in ways you don’t really plan for.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
           Heritage Site Etiquette
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            At forts, palaces and monuments, try not to touch carvings, murals or the original stonework, just stay 
            within marked pathways, and really follow the posted rules about food drones and tripods. A lot of India’s 
            most important heritage sites are UNESCO World Heritage listings, so treating them with that same kind 
            of care you’d want in a major museum abroad goes a long way towards keeping them safe for the travellers 
            who come after us.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785305688/pexels-shootsaga-36763659_loiywx.jpg"
                alt="Temple etiquette in India - dress code and respectful behaviour at heritage sites"
                fill
                sizes="100vw"
                className="object-cover"
            />
           </div>
            <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
             via pexels
            </p>
        </div>
      </div>
    </section>
  );
}