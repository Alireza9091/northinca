import type { ServiceItem } from "./types";

export const keyServices: ServiceItem[] = [
  {
    title: "PRODUCT DISTRIBUTION",
    description:
      "Our deep-rooted partnerships and strong logistical infrastructure ensure seamless distribution",
    icon: "truck",
  },
  {
    title: "REGULATORY GUIDANCE",
    description:
      "Our team of experts can help you navigate the complex Canadian regulatory pathways",
    icon: "document",
  },
  {
    title: "MARKETING STRATEGY",
    description: "We specialize in online marketing and e-commerce promotions",
    icon: "chart",
  },
  {
    title: "MARKET ANALYSIS",
    description:
      "We offer in-depth market analysis for NHPs, Hair/Skincare products, OTC Medications, and Health/Wellness accessories.",
    icon: "search",
  },
];

export const serviceScopes = [
  {
    category: "NATURAL HEALTH PRODUCTS",
    items: [
      "Herbal Remedies",
      "Natural vitamins and supplements",
      "Natural creams and solutions",
    ],
  },
  {
    category: "HAIR/SKINCARE PRODUCTS",
    items: ["Beauty products", "Skincare, haircare creams and solutions"],
  },
  {
    category: "OTC MEDICATIONS",
    items: ["Supplements and vitamins", "Probiotics", "Homeopathy medications"],
  },
  {
    category: "HEALTH/WELLNESS ACCESSORIES",
    items: [
      "Health and wellness accessories and gadgets",
      "e.g, pressure stockings, medical footwear",
    ],
  },
];
