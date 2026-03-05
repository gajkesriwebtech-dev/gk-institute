import { cld } from "@/lib/cloudinary";

export interface LogoItem {
  id: string;
  name: string;
  image: string;
  website?: string;
  category: "tool" | "partner" | "certification";
}

export const toolsLogos: LogoItem[] = [
  { id: "tool-react", name: "React", image: cld("Reactjs_qozeyf", 120), website: "https://react.dev", category: "tool" },
  { id: "tool-nextjs", name: "Next.js", image: cld("next_wzl2vs", 120), website: "https://nextjs.org", category: "tool" },
  { id: "tool-nodejs", name: "Node.js", image: cld("nodejs_qsyxjr", 120), website: "https://nodejs.org", category: "tool" },
  { id: "tool-mongodb", name: "MongoDB", image: cld("mongodb_dhebsm", 120), website: "https://www.mongodb.com", category: "tool" },
  { id: "tool-python", name: "Python", image: cld("python_e3sgck", 120), website: "https://www.python.org", category: "tool" },
  { id: "tool-figma", name: "Figma", image: cld("figma_rlgcze", 120), website: "https://www.figma.com", category: "tool" },
  { id: "tool-openai", name: "OpenAI", image: cld("openai_wzk9vw", 120), website: "https://openai.com", category: "tool" },
  { id: "tool-gemini", name: "Gemini", image: cld("gemini_qwlsxj", 120), website: "https://gemini.google.com", category: "tool" },
];

export const partnerLogos: LogoItem[] = [
  { id: "partner-google", name: "Google", image: cld("google_m5wqqp", 140), website: "https://about.google", category: "partner" },
  { id: "partner-amazon", name: "Amazon", image: cld("amazon_tinf7t", 140), website: "https://www.amazon.com", category: "partner" },
  { id: "partner-microsoft", name: "Microsoft", image: cld("microsoft_izehpu", 140), website: "https://www.microsoft.com", category: "partner" },
  { id: "partner-ibm", name: "IBM", image: cld("ibm_p1wu5e", 140), website: "https://www.ibm.com", category: "partner" },
  { id: "partner-meta", name: "Meta", image: cld("meta_xzjmhq", 140), website: "https://about.meta.com", category: "partner" },
  { id: "partner-zoho", name: "Zoho", image: cld("zoho_xowzi4", 140), website: "https://www.zoho.com", category: "partner" },
  { id: "partner-infosys", name: "Infosys", image: cld("infosys_myo6q3", 140), website: "https://www.infosys.com", category: "partner" },
];

export const certificationLogos: LogoItem[] = [
  { id: "cert-google", name: "Google", image: cld("google_m5wqqp", 100), website: "https://skillshop.exceedlms.com", category: "certification" },
  { id: "cert-meta", name: "Meta", image: cld("meta_xzjmhq", 100), website: "https://www.coursera.org/professional-certificates/meta", category: "certification" },
  { id: "cert-microsoft", name: "Microsoft", image: cld("microsoft_izehpu", 100), website: "https://learn.microsoft.com/credentials", category: "certification" },
  { id: "cert-ibm", name: "IBM", image: cld("ibm_p1wu5e", 100), website: "https://www.ibm.com/training", category: "certification" },
  { id: "cert-coursera", name: "Coursera", image: cld("coursera_pmt4oz", 100), website: "https://www.coursera.org", category: "certification" },
  { id: "cert-udemy", name: "Udemy", image: cld("udemy_me98se", 100), website: "https://www.udemy.com", category: "certification" },
  { id: "cert-hubspot", name: "HubSpot", image: cld("hubspot_kkdbpq", 100), website: "https://academy.hubspot.com", category: "certification" },
  { id: "cert-cs50", name: "Harvard CS50", image: cld("harvard_rnk9zp", 100), website: "https://cs50.harvard.edu", category: "certification" },
  { id: "cert-aws", name: "AWS", image: cld("aws_cni2ay", 100), website: "https://aws.amazon.com/certification", category: "certification" },
  { id: "cert-oracle", name: "Oracle", image: cld("oracle_n32fny", 100), website: "https://education.oracle.com/certification", category: "certification" },
];
