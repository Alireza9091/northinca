import type { FeatureBlock, NavItem } from "./types";

export const heroSlides = [
  {
    image: "/images/hero/hero1.jpg", // Ensure these exist or placeholders used
    alt: "Global Distribution",
    title: "Expand your Health and Beauty market in Canada",
    subtitle: "Through expert distribution",
    cta: { label: "Explore Services", href: "/services" },
  },
  {
    image: "/images/hero/hero2.png",
    alt: "Healthcare Expertise",
    title: "Navigating Regulations with Ease",
    subtitle: "Your partner in compliance and success",
    cta: { label: "Contact Us", href: "/contact" },
  },
  {
    image: "/images/hero/hero3.jpg",
    alt: "Sustainable Logistics",
    title: "Eco-Friendly Supply Chain",
    subtitle: "Committed to sustainability",
    cta: { label: "Learn More", href: "/about" },
  },
];

export const introSection = {
  title: "Northinca: Bridging Global Innovation to Canadian Markets",
  body: "Northinca brings together seasoned business leaders and healthcare industry experts to create a unique advantage for companies/products seeking entry to the Canadian market. Our team understands both the commercial complexities of global trade and the nuances of healthcare regulations, ensuring your products move smoothly from international and domestic supply chains to Canadian shelves.",
};

export const features: FeatureBlock[] = [
  {
    title: "BUSINESS LEADERSHIP & ESTABLISHED DISTRIBUTION NETWORK",
    content:
      "Northinca’s leadership team has decades of experience in both the Canadian and international e-commerce and retail landscape. We have established strong relationships with major retailers and e-commerce platforms, supported by a vast logistical infrastructure.",
  },
  {
    title: "REGULATORY & HEALTHCARE EXPERTISE",
    content:
      "Our subject matter experts, who understand the complexities of the Canadian healthcare market, ensure a seamless entry for your products",
  },
];
