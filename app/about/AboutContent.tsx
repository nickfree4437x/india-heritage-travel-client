"use client";

import WelcomeSection from "./sections/WelcomeSection";
import WorkSection from "./sections/WorkSection";
import JourneySection from "./sections/JourneySection";
import TeamSection from "./sections/TeamSection";
//import TestimonialsSection from "./sections/TestimonialsSection";
//import LiveSection from "./sections/LiveSection";

export default function AboutContent() {
  return (
    <div className="md:col-span-2 space-y-16 md:space-y-20">

      <WelcomeSection />
      <WorkSection />
      <JourneySection />
      <TeamSection />
      {/* <TestimonialsSection /> */}
      {/* <LiveSection /> */}

    </div>
  );
}