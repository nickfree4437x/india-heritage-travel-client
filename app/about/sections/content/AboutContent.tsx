"use client";

import WelcomeSection from "../welcome/WelcomeSection";
import WorkSection from "../work/WorkSection";
import JourneySection from "../journey/JourneySection";
import TeamSection from "../team/TeamSection";

export default function AboutContent() {
  return (
    <div className="md:col-span-2 space-y-16 md:space-y-20">
      <WelcomeSection />
      <WorkSection />
      <JourneySection />
      <TeamSection />
    </div>
  );
}