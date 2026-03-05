import { cld } from "@/lib/cloudinary";

export interface SeoDefaults {
  titleTemplate: string;
  defaultTitle: string;
  defaultDescription: string;
  canonicalBaseUrl: string;
  openGraphImage: string;
  robots: string;
  keywords: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface SiteConfig {
  id: string;
  brandName: string;
  legalName: string;
  domain: string;
  supportHours: string;
  locale: string;
  seo: SeoDefaults;
  contact: ContactInfo;
  social: {
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  id: "site_001",
  brandName: "GK Institute",
  legalName: "GK Institute Learning Technologies Pvt Ltd",
  domain: "gkinstitute.com",
  supportHours: "Mon-Sat, 9:00 AM - 7:00 PM IST",
  locale: "en-IN",
  seo: {
    titleTemplate: "%s | GK Institute",
    defaultTitle: "GK Institute - Job-Ready Learning Programs",
    defaultDescription: "Build in-demand skills through project-based learning, mentorship, and career-focused certification tracks.",
    canonicalBaseUrl: "https://gkinstitute.com",
    openGraphImage: cld("resources/og-default", 1200),
    robots: "index,follow",
    keywords: [
      "job ready courses",
      "project based learning",
      "online certification",
      "mentorship programs",
      "career upskilling"
    ]
  },
  contact: {
    email: "contact@gkwebtech.cloud",
    phone: "+91 99719 44676",
    whatsapp: "https://wa.me/919971944676",
    address: "1st Floor, Tiwari Clinic Building, Jyoti Rao Fule Circle, Alwar 301001, Rajasthan, India"
  },
  social: {
    twitter: "https://x.com/gkwtech",
    linkedin: "https://www.linkedin.com/company/gk-webtech/",
    instagram: "https://www.instagram.com/gkweb_tech/",
    youtube: "https://www.youtube.com/@GK-Web-Tech"
  }
};
