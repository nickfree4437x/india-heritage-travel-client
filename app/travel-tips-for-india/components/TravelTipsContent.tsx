"use client";

import Image from "next/image";

const tips = [
  {
    title: "VISA",
    text: `India is a very busy, overwhelming, and occasionally confusing country. You’ll need some time to get used to the hectic energy of this confusing place and figure out how to keep yourself safe, healthy, and sane. India is among the most rewarding destinations to visit, despite not being the easiest. It provides some genuinely incredible views that are unmatched by anything else in the entire globe. It also has mouthwatering cuisine, breathtaking scenery, friendly and endearing locals, and a rich cultural history that is fascinating to discover.
    So, before you travel to India, here are some shrewd tips and tricks to help you make the most of your experience there.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743499/visa_awivc4.png",
  },
  {
    title: "INSURANCE",
    text: `Travel insurance (It is recommended that you insure yourself against medical claims, theft, loss, and emergencies).`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743492/insurance_itg0ae.svg",
  },
  {
    title: "CLOTHES",
    text: `Travel insurance (It is recommended that you insure yourself against medical claims, theft, loss, and emergencies).`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743487/clothes_jqkjyc.png",
  },
  {
    title: "HEALTH",
    text: `Bring your own prescription drugs. There’s no need to take any extra medication when it’s not monsoon season. All the necessary resources are available on site, in case you require a physician or pharmacist.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743491/health_z6g4tf.png",
  },
  {
    title: "MONEY",
    text: `You can exchange cash with your driver or guide, who will get you the best rate, or withdraw money from ATMs. Naturally, avoid doing this around strangers. You’ll require a large number of tiny notes for small purchases, tips, toilets, etc.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743493/money_bqdqdp.png",
  },
  {
    title: "FOOD",
    text: `Food tastes good and is unique. When starting a trip, use caution when handling meat and dairy products. Fruit is safe to eat if you peel it yourself, and you can even get peeled fruit in hotels. Papayas taste great when paired with a small squeeze of lime. If your dish isn’t spicy, ask to have the chillies removed. Request less salt overall and less sugar in your chai. Try everything, even if just a little bit. There are many crowded, spotless areas where street food is served. You shouldn’t miss this aspect of Indian culture.Reduce your intake and consume boiled rice, bananas, and coke to prevent dehydration if you have an upset stomach.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743489/food_cyahvw.jpg",
  },
  {
    title: "WATER",
    text: `Drink mineral water at all times. You can even use it to brush your teeth.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743500/water_jpivnr.png",
  },
  {
    title: "SAFETY",
    text: `The safety regulations are the same as those in other nations. Keep an eye on your possessions and exercise street smarts, but don’t get fixated on them. If you’re traveling by train or car, never accept food offered by other passengers. There may be sleeping pills in it. In trains, always travel in the reserved class. It is always advisable to refrain from driving at night on Indian highways.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743495/safety_gwagkz.png",
  },
  {
    title: "DRIVER",
    text: `When you drive, you have someone to help you at all times, and your luggage is always secure. Telling him to drive more slowly or to call us right away is always preferable if you’re uncomfortable with the way he’s driving or if you think his speeding is unsafe.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743488/driver_fsijad.jpg",
  },
  {
    title: "SOLO WOMEN",
    text: `In some desolate areas, women who travel alone should refrain from going for walks during strange hours. Avoid appearing confused when traveling. Maintain the demeanor of a local authority.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743501/women_mpxavs.webp",
  },
  {
    title: "TEMPLES",
    text: `You shouldn’t miss any of India’s temples because they are an integral part of the country’s culture. Whether you believe in God or not, it is very moving to watch and listen to the people going about their daily prayers and to the songs and dances. You will see a great deal of religious reverence in mosques belonging to Muslims, Sikhs, Hindus, and Jainites, among others. In India, visiting places of worship is a must. You should bring old socks that you can throw away or buy a pack of inexpensive socks because you will need to take off your shoes.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743497/temple_rkhzpm.webp",
  },
  {
    title: "TIPPING",
    text: `Tipping is a widely accepted custom in India. Some suggestions for how much to tip for face photos at tourist attractions are 20 to 50 rupees (less than a Euro). It should be between 5 and 10% of your total at restaurants. Your driver should receive a tip of at least 5 to 10 euros per day, as he receives tips only once or twice a month. The amount you tip will depend on your budget and the quality of service the driver provides.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743498/tipping_la7dhd.png",
  },
  {
    title: "BEGGARS",
    text: `You will come across a lot of mendacity when begging, which makes sense given that India is still a developing nation with high rates of poverty. Give as you are moved to do so. Remember that some beggars in tourist areas don’t really keep much of their gatherings and are actually working for someone.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743488/driver_fsijad.jpg",
  },
  {
    title: "A TIP FOR YOU",
    text: `Do some research on the places you are visiting before you leave or while using the Wi-Fi at your hotel. Bring a guidebook or two. You’re curious about the current events in India, a nation rich in culture and traditions. Go with a receptive mindset.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743486/book_dlpxlo.webp",
  },
  {
    title: "CULTURAL DIFFERENCES",
    text: `You can pretty much count on experiencing cultural shock when you first get to India. Attempting to resist it is futile. Prepare yourself and acknowledge that things will not be the same as they are at home. Leave your expectations at home and try to keep an open mind.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743491/india_ehlzgx.webp",
  },
  {
    title: "RELIGIOUS SCAMS",
    text: `You might feel under pressure to purchase a sacred offering or to make a donation at a lot of the mosques and temples. A holy man might, for instance, tie a string around your wrist or place a red dot on your forehead before requesting money from you. Many tourists feel compelled to comply because they don’t want to offend the native faith. But if you don’t want to, you don’t have to. If it seems like it would cost a lot for a local to perform, it is most likely a tourist scam rather than a genuine spiritual offering.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743495/scam_zo9vgh.avif",
  },
  {
    title: "LEARN HOW TO BARGAIN",
    text: `In India, Bargaining is an inherent aspect of shopping; however, if you come from a culture where haggling is not common, you may find it unfamiliar and unsettling at first. It’s crucial to keep in mind that this is a cordial negotiation rather than a war.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743486/bargain_ffldea.webp",
  },
  {
    title: "DON'T EXPECT THINGS ON TIME",
    text: `Keep in mind that events take place on Indian Time. Things can take far longer than anticipated, trains may not depart when they are supposed to, and friends from India may not show up when they promised. In order to avoid becoming anxious, it’s critical to remember this and to budget extra time for delays. Bring along a good book to read while you wait, and know that what you are waiting for will materialize eventually.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743498/time_cjuyd9.png",
  },
  {
    title: "AVOID AFFECTION IN PUBLIC",
    text: `When visiting India with a partner, refrain from publicly hugging, kissing, or holding hands. These kinds of open expressions of love are frowned upon and deemed improper in Indian culture. Show respect for the locals by keeping your romantic feelings under wraps.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743494/pda_h4rysv.webp",
  },
  {
    title: "JUST GO FOR IT",
    text: `It’s a fact that traveling within India will be far more difficult than traveling abroad. It’s possible that you will occasionally feel overburdened and worn out, so it’s critical to look after yourself and be ready for this. Nonetheless, traveling to India is a truly worthwhile experience. You will encounter some truly memorable people, take in some breathtaking scenery, and learn about an intriguing ancient culture. You’ll be happy that you visited India.`,
    image: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743490/go_oqnmeb.webp",
  },
];

export default function TravelTipsContent() {
  return (
    <section className="bg-white py-20 px-6 md:px-28">
      <div className="mx-auto max-w-7xl">
        {/* 🔥 Intro */}
        <div className="grid md:grid-cols-[320px_1fr] gap-12 items-start mb-16">
      
      {/* LEFT SIDE */}
      <div className="md:ml-6">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779743493/intro_nyeuvz.webp"
          alt="India Travel Tips"
          width={300}
          height={260}
          className="rounded-sm"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="md:mr-6">
        <p className="text-gray-700 mt-8 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-[300] text-justify">
          India is a very busy, overwhelming, and occasionally confusing country. 
          You'll need some time to get used to the hectic energy of this confusing 
          place and figure out how to keep yourself safe, healthy, and sane. 
          India is among the most rewarding destinations to visit, despite not being the easiest. 
          It provides some genuinely incredible views that are unmatched by anything else in the entire globe. 
          It also has mouthwatering cuisine, breathtaking scenery, friendly and endearing locals, 
          and a rich cultural history that is fascinating to discover.
        </p>

        <p className="mt-5 text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-[300] text-justify">
          So, before you travel to India, here are some shrewd tips and tricks to help you make the most 
          of your experience there.
        </p>
      </div>

    </div>

    {/* 🔥 Heading */}
    <h2 className="text-[20px] sm:text-[24px] md:text-[26px]
            font-semibold
            text-center
            mb-6 sm:mb-8 text-[#8b6a3c] tracking-wide">
      THE PREPARATIONS FOR YOUR INDIA TRAVEL
    </h2>

    {/* 🔥 Tips List */}
    <div className="space-y-8">
      {tips.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`
              grid items-center gap-16
              ${isLeft
                ? "md:grid-cols-[1fr_280px]"
                : "md:grid-cols-[280px_1fr]"
              }
            `}
          >

            {/* CONTENT LEFT + IMAGE RIGHT */}
            {isLeft ? (
              <>
                {/* CONTENT */}
                <div className="md:ml-8">
                  <h3 className="text-[16px] sm:text-[20px] md:text-[22px] text-center tracking-wide font-semibold text-[#8b6a3c]">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mt-8 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-[300] text-justify">
                    {item.text}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="flex justify-center md:mr-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={200}
                    className="object-contain rounded-full"
                  />
                </div>
              </>
            ) : (
              <>
                {/* IMAGE */}
                <div className="flex justify-center md:ml-8">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={200}
                    className="object-contain rounded-full"
                  />
                </div>

                {/* CONTENT */}
                <div className="md:mr-8">
                  <h3 className="text-[16px] sm:text-[20px] md:text-[22px] text-center tracking-wide font-semibold text-[#8b6a3c]">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mt-8 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-[300] text-justify">
                    {item.text}
                  </p>
                </div>
              </>
            )}

          </div>
        );
      })}
    </div>
  </div>
</section>
  );
}