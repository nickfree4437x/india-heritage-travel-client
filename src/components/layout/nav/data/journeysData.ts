// src/components/layout/nav/data/journeysData.ts

export const journeysData = {
  //////////////////////////////////////
  // ✅ CURATED (SCROLL BASED)
  //////////////////////////////////////
  curated: [
    {
      name: "The Royal Rajasthan",
      link: "/journeys/curated-tours/royal-rajasthan-tour",
      sectionId: "adventure",
    },
    {
      name: "Golden Triangle Tour",
      link: "/journeys/curated-tours/golden-triangle-tour",
      sectionId: "adventure",
    },
    {
      name: "South India Getaways",
      link: "/journeys/curated-tours/south-indian-gateways",
      sectionId: "adventure",
    },
    {
      name: "East India Adventure",
      link: "/journeys/curated-tours/east-india-adventure",
      sectionId: "east-west",
    },
    {
      name: "West India Escapes",
      link: "/journeys/curated-tours/west-india-escapes",
      sectionId: "east-west",
    },
  ],

  //////////////////////////////////////
  // ✅ FESTIVALS (SLUG BASED ROUTING)
  //////////////////////////////////////
  festivals: [
    {
      name: "Holi Festival Tour",
      link: "/festivals/holi",
    },
    {
      name: "Diwali Festival Tour",
      link: "/festivals/diwali",
    },
    {
      name: "Pushkar Fair Tour",
      link: "/festivals/pushkar",
    },
    {
      name: "Kumbh Mela Tour",
      link: "/festivals/kumbh",
    },
  ],

  //////////////////////////////////////
  // ✅ HEALTH (NORMAL ROUTES)
  //////////////////////////////////////
  health: [
    {
      name: "Yoga Escapes",
      link: "/journeys/health-based/yoga-escapes",
    },
    {
      name: "Ayurveda Journey",
      link: "/journeys/health-based/ayurveda-journey",
    },
  ],
};

//////////////////////////////////////
// ✅ CATEGORY LIST (NO CHANGE)
//////////////////////////////////////
export const journeyCategories = [
  { id: "curated", title: "Curated Journeys" },
  { id: "festivals", title: "Festivals" },
  { id: "health", title: "Health Based" },
];