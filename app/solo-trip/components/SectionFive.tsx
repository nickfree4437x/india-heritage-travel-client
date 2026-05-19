"use client";

export default function WomensCircleSection() {
  return (
    <section className="w-full bg-[#f8f6f2] py-14 md:py-4 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* TOP */}
        <div className="max-w-3xl mx-auto text-center">

          {/* LABEL */}
          <p
            className="
              text-[11px]
            tracking-[0.1em]
            uppercase

            text-[#8b7355]

            text-center

            mb-2
            "
          >
            Let’s Connect
          </p>

          {/* HEADING */}
          <h2
            className="
              text-[20px]
            sm:text-[24px]
            md:text-[26px]

            font-semibold

            text-center

            mb-4 md:mb-4

            text-[#2c2c2c]

            tracking-wide
            "
          >
            You don’t have to plan
            it all alone either
          </h2>

          {/* INTRO */}
          <div
            className="
              space-y-5

              text-[13px]
              md:text-[14px]

              leading-[2]

              text-[#5f5f5f]
              font-[350]
            "
          >
            <p className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-light leading-[1.7]">
              I’ve started creating a calm little space for women who are
              thinking about traveling to India - whether it’s this year,
              someday later, or simply an idea quietly sitting in their heart.
            </p>

            <p className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-light leading-[1.7]">
              A space to ask questions, share thoughts, connect with other
              women, and feel a little more prepared before taking the leap.
            </p>

          </div>

        </div>

        {/* MAIN CARD */}
        <div className="mt-12 relative">

          {/* SOFT GLOW */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#efe4d5]
              via-transparent
              to-[#eadfd2]
              opacity-40
              blur-xl
            "
          />

          <div
            className="
              relative

              max-w-4xl
              mx-auto

              rounded-2xl
              bg-white/75
              backdrop-blur-md

              px-7 md:px-14
              py-10 md:py-14

              shadow-sm
            "
          >

            {/* SMALL TITLE */}
            <div className="text-center mb-4 -mt-8">

              <p
                className="
                  text-[12px]
                  tracking-[0.01em]
                  uppercase

                  text-[#8b7355]

                  mb-3
                "
              >
                What It Is
              </p>

              <h3
                className="
                  text-[18px]
                  md:text-[22px]

                  text-[#1f1f1f]

                  font-[500]
                "
              >
                A private circle for women travelers
              </h3>

            </div>

            {/* FEATURES */}
            <div
              className="
                grid
                sm:grid-cols-2
                gap-x-10
                gap-y-3

                max-w-2xl
                mx-auto
                font-light
              "
            >

              {[
                "Travel questions",
                "Ideas & inspiration",
                "Helpful updates",
                "India travel tips",
                "Future women group journeys",
                "A calm & supportive space",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3

                    text-[13px]
                    md:text-[14px]

                    text-[#555555]
                  "
                >
                  <span
                    className="
                      w-[7px]
                      h-[7px]
                      rounded-full
                      bg-[#b08b63]
                      flex-shrink-0
                    "
                  />

                  <p>{item}</p>

                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-14 text-center">

              <a
                href="YOUR_WHATSAPP_GROUP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center

                  px-9 md:px-11
                  py-[14px]

                  rounded-full

                  bg-[#AF956C]
                  text-white

                  text-[11px]
                  md:text-[12px]

                  tracking-[0.18em]
                  uppercase

                  shadow-sm

                  hover:bg-[#8f7654]

                  transition-all
                  duration-300
                "
              >
                Join The Women’s Circle
              </a>

              <p
                className="
                  mt-6

                  text-[12px]
                  md:text-[13px]

                  leading-[1.9]

                  text-[#6d6d6d]
                  font-light
                  
                "
              >
                No pressure. No overwhelming travel chats.
                <br />
                Just a thoughtful and supportive space for women.
              </p>

            </div>

          </div>

        </div>

        {/* FINAL TEXT */}
        <div
          className="
            mt-12

            max-w-4xl
            mx-auto

            relative
          "
        >

          {/* BACKGROUND CARD */}
          <div
            className="
              relative

              bg-[#efe7dc]/55

              border border-[#e3d7c8]

              rounded-2xl

              px-8 md:px-16
              py-14 md:py-14

              overflow-hidden
            "
          >

            {/* DECOR CIRCLE */}
            <div
              className="
                absolute
                -top-16
                -right-16

                w-[180px]
                h-[180px]

                rounded-full

                border border-[#d8c6b2]/50
              "
            />

            {/* SMALL LABEL */}
            <p
              className="
                text-[10px]
                tracking-[0.05em]
                uppercase

                text-[#9a7a58]

                mb-2
              "
            >
              A Personal Invitation
            </p>

            {/* MAIN TEXT */}
            <div
              className="
                max-w-2xl

                space-y-2
              "
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >

              <p
                className="
                  text-[12px]
                  md:text-[13px]

                  leading-[2]

                  text-[#4f4f4f]
                  font-light
                "
              >
                Whenever you feel ready…
              </p>

              <p
                className="
                  text-[12px]
                  md:text-[13px]

                  leading-[2]

                  text-[#4f4f4f]
                  font-light
                "
              >
                I’d genuinely love to help you experience India in a way
                that feels calm, meaningful, comfortable, and truly your own.
              </p>

            </div>

            {/* SIGNATURE AREA */}
            <div className="mt-4">

              <p
                className="
                  text-[24px]
                  md:text-[28px]

                  italic

                  text-[#1f1f1f]

                  leading-[1.3]
                "
                style={{
                  fontFamily: 'Georgia, "Times New Roman", Times, serif',
                  fontStyle: "italic",
                  letterSpacing: "0.3px",
                }}
              >
                Come travel with me
              </p>

              <div className="mt-5 flex items-center gap-4">

                <span className="w-12 h-[1px] bg-[#b08b63]" />

                <p
                  className="
                    text-[11px]
                    tracking-[0.24em]
                    uppercase

                    text-[#8b7355]
                  "
                >
                  India Heritage Travel
                </p>

                <span className="w-12 h-[1px] bg-[#b08b63]" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}