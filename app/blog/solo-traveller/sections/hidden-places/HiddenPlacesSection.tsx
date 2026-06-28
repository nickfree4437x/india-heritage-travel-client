// app/blogs/solo-traveler/components/HiddenPlacesSection.tsx

"use client";

export default function HiddenPlacesSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-6xl">
          {/* Heading */}
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            Places People Rarely Talk About
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Himachal Pradesh's Tirthan Valley is near the
            Great Himalayan National Park but far away
            from its noise. The river is crystal clear here;
            you can see the fish swimming through.
            Guesthouses feel like family homes rather than
            staying in a stranger's house.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Majuli is the largest river island in the world.
            Monks dance ancient dances, mask-makers ply
            old trades, and life proceeds at the speed of
            the river.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            You can rent a bamboo cottage for next to
            nothing. Mandawa in Rajasthan is home to
            some wonderful painted havelis - old merchant
            homes emblazoned with depictions of gods,
            trains, animals and tales from a century ago.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            They are quiet now, only adding to their appeal,
            making wandering easier.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Tamil Nadu's Chettinad is filled with huge
            mansions, handmade tiles and food that you
            can't find elsewhere in India. Observing master
            craftsmen at work in the making of Athangudi
            tiles is akin to stepping into another time.
            Havelock Island offers you beaches minus the
            noisy crowd. White sand, blue water,
            fresh seafood. That's the whole agenda.
          </p>
        </div>
      </div>
    </section>
  );
}