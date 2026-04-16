import { notFound } from "next/navigation";

import HoliDetails from "@/src/components/sections/festivals/festivalDetails/holi/pages/HoliDetails";
import DiwaliDetails from "@/src/components/sections/festivals/festivalDetails/diwali/DiwaliDetails";
import PushkarDetails from "@/src/components/sections/festivals/festivalDetails/pushkar/PushkarDetails";
import KumbhDetails from "@/src/components/sections/festivals/festivalDetails/kumbh/KumbhDetails";

export default async function FestivalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ FIX

  switch (slug) {
    case "holi":
      return <HoliDetails />;
    case "diwali":
      return <DiwaliDetails />;
    case "pushkar":
      return <PushkarDetails />;
    case "kumbh":
      return <KumbhDetails />;
    default:
      return notFound();
  }
}