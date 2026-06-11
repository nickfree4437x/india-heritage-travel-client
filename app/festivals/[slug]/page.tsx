import { Metadata } from "next";
import { notFound } from "next/navigation";

import HoliDetails from "@/src/sections/festivals/festivalDetails/holi/pages/page";
import DiwaliDetails from "@/src/sections/festivals/festivalDetails/diwali/page";
import PushkarDetails from "@/src/sections/festivals/festivalDetails/pushkar/PushkarDetails";
import KumbhDetails from "@/src/sections/festivals/festivalDetails/kumbh/KumbhDetails";

import { festivalSeoData } from "@/src/sections/festivals/seoData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type FestivalSeo = {
  title: string;
  description: string;
  image: string;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const seo = festivalSeoData[
    slug as keyof typeof festivalSeoData
  ] as FestivalSeo | undefined;

  if (!seo) {
    return {
      title: "Festival Not Found",
    };
  }

  return {
    title: seo.title,
    description: seo.description,

    alternates: {
      canonical: `/festivals/${slug}`,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/festivals/${slug}`,
      type: "website",
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
  };
}

export default async function FestivalPage({
  params,
}: PageProps) {
  const { slug } = await params;

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
      notFound();
  }
}