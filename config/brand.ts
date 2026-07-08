import type { BrandConfig } from "@/types/brand";

/**
 * SINGLE SOURCE OF TRUTH.
 *
 * To rebrand this website for a different jewellery business, edit ONLY this
 * file. Store images live in /public/images and are committed with the repo.
 */
export const BRAND: BrandConfig = {
  businessName: "Neha Jewellery",
  tagline: "Gold & Diamond Jewellery in Perinthalmanna Town",
  description:
    "Neha Jewellery is Perinthalmanna's destination for aesthetic gold, diamond and silver jewellery. Located in the heart of Perinthalmanna Town on Ootty Road, we serve the town with timeless craftsmanship for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo:
    "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description:
        "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 0, loopEnd: 8 },
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description:
        "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 32, loopEnd: 40 },
    },
    {
      quote: "പെരിന്തൽമണ്ണയുടെ ഹൃദയത്തിൽ നിന്ന്.",
      description:
        "ഈ നാടിന്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video:
        "https://res.cloudinary.com/fylz5e3j/video/upload/v1782936959/VN20260702_013328_tbexfn.mp4",
      segments: { startAt: 16, loopEnd: 24 },
    },
  ],

  storeImages: [
    "/images/store1.webp",
    "/images/store2.webp",
    "https://res.cloudinary.com/fylz5e3j/image/upload/v1783495082/What_s_Driving_the_Surge_in_Hallmark_Registration_Across_India_tgfpfs.jpg",
    "https://res.cloudinary.com/fylz5e3j/image/upload/v1783495080/download_4_jsatvk.jpg",
  ],

  address: "Neha Jewellery Town, Juma Masjid New Shopping Mall, Ootty Rd, Perinthalmanna, Kerala 679322",
  city: "Perinthalmanna",
  state: "Kerala",
  pincode: "679322",

  phone: "+919744874767",
  whatsapp: "919744874767",
  email: "",

  mapsLink: "https://share.google/ZZItVRgZmZqqbnMGo",

  openingHours: "",

  instagram: "",
  facebook: "",

  seo: {
    title: "Neha Jewellery | Jewellery in Perinthalmanna Town",
    description:
      "Neha Jewellery — gold, diamond and silver jewellery in Perinthalmanna Town, Kerala. Timeless craftsmanship for every celebration.",
    keywords: [
      "Neha Jewellery",
      "Neha Jewellery Perinthalmanna",
      "jewellery Perinthalmanna",
      "gold jewellery Perinthalmanna",
      "diamonds Perinthalmanna",
      "jewellery store Perinthalmanna Town",
      "jewellery Kerala",
    ],
    canonical: "https://nehajewellery.com",
    ogImage: "/images/store1.webp",
  },

  faq: [],

  whatsappMessage:
    "Hello Neha Jewellery, I'd like to know more about your jewellery collections.",
};
