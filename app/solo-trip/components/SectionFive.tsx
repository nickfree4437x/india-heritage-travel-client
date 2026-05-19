"use client";

export default function WomensCircleSection() {
  return (
    <section className="w-full bg-[#f8f6f2] py-10 md:py-14">

      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* SECTION LABEL */}
        <p
          className="
            text-[11px]
            tracking-[0.2em]
            uppercase

            text-[#8b7355]

            text-center

            mb-2
          "
        >
          Let’s connect
        </p>

        {/* HEADING */}
        <h2
          className="
            text-[20px]
            sm:text-[24px]
            md:text-[26px]

            font-semibold

            text-center

            mb-8

            text-[#2c2c2c]

            tracking-wide
          "
        >
          You don’t have to plan it all alone either
        </h2>

        {/* INTRO TEXT */}
        <div
          className="
            max-w-3xl
            mx-auto

            space-y-5

            text-[12px]
            md:text-[13px]

            leading-[1.9]
            tracking-[0.01em]

            text-[#5b5b5b]
            font-[350]
          "
          style={{
            fontFamily:
              '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
          }}
        >

          <p>
            I’ve started creating a small space for women who are thinking
            about traveling to India — whether it’s this year, someday later,
            or even just an idea sitting quietly in their mind right now.
          </p>

          <p>
            A space where women can ask questions, share thoughts, connect,
            and feel a little more prepared before taking the leap.
          </p>

        </div>

        {/* WHAT IT IS */}
        <div className="mt-14 max-w-2xl mx-auto">

          <h3
            className="
              text-[14px]
              tracking-[0.16em]
              uppercase

              text-[#1f1f1f]

              mb-6

              text-center
            "
          >
            What It Is
          </h3>

          <div
            className="
              bg-white/80
              border border-[#e4dbcf]

              rounded-[24px]

              px-7 md:px-10
              py-8 md:py-10

              shadow-[0_4px_20px_rgba(0,0,0,0.03)]
            "
          >

            <p
              className="
                text-[13px]
                md:text-[14px]

                leading-[1.9]

                text-[#555555]
                font-[350]

                mb-7
              "
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              A private WhatsApp circle for women travelers interested in India.
            </p>

            <div
              className="
                space-y-3

                text-[13px]
                md:text-[14px]

                text-[#555555]
                font-[350]
              "
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >

              <p>• travel questions</p>

              <p>• ideas</p>

              <p>• updates</p>

              <p>• inspiration</p>

              <p>• future women group journeys later</p>

            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">

          <a
            href="YOUR_WHATSAPP_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center

              px-8 md:px-10
              py-4

              rounded-full

              bg-[#25D366]
              text-white

              text-[12px]
              tracking-[0.14em]
              uppercase

              shadow-[0_8px_24px_rgba(37,211,102,0.22)]

              hover:bg-[#1ebe5d]
              hover:scale-[1.02]

              transition-all
              duration-300
            "
          >
            Join the Women’s Circle
          </a>

          <p
            className="
              mt-5

              text-[12px]
              md:text-[13px]

              leading-[1.8]

              text-[#6a6a6a]
              font-[350]
            "
            style={{
              fontFamily:
                '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
            }}
          >
            No pressure. No overwhelming travel chats.
            <br />
            Just a calm and helpful space.
          </p>

        </div>

        {/* FINAL TEXT */}
        <div
          className="
            mt-20

            max-w-3xl
            mx-auto

            space-y-5

            text-center
          "
        >

          <p
            className="
              text-[13px]
              md:text-[14px]

              text-[#5b5b5b]

              leading-[1.9]
              font-[350]
            "
            style={{
              fontFamily:
                '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
            }}
          >
            Whenever you feel ready…
          </p>

          <p
            className="
              text-[13px]
              md:text-[14px]

              text-[#5b5b5b]

              leading-[1.9]
              font-[350]
            "
            style={{
              fontFamily:
                '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
            }}
          >
            I’d genuinely love to help you experience India in a way that
            feels right for you.
          </p>

          <p
            className="
              text-[#1f1f1f]

              text-[16px]
              md:text-[18px]

              font-medium
            "
          >
            Come travel with me
          </p>

        </div>

      </div>

    </section>
  );
}