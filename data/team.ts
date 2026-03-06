import { cld } from "@/lib/cloudinary";

export interface SocialLinks {
  website?: string;
  linkedin?: string;
  github?: string;
  x?: string;
  instagram?: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  fullName: string;
  role: string;
  department: string;
  bio: string;
  avatarUrl: string;
  isLeadership: boolean;
  socialLinks: SocialLinks;
  country: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team_001",
    slug: "anuj-tiwari",
    fullName: "Dr. Anuj Tiwari",
    role: "Founder & Director",
    department: "Management",
    bio: "Leads strategy and partnerships across learning and hiring ecosystems.",
    avatarUrl: cld("Founder_kwgszb", 400),
    isLeadership: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/dr-a-tiwari-gkwebtech-cloud-03570938a/",
    },
    country: "India"
  },
  {
    id: "team_002",
    slug: "preeti-tiwari",
    fullName: "Preeti Tiwari",
    role: "Managing Director",
    department: "Management",
    bio: "Drives technology vision, platform architecture, automation and engineering excellence.",
    avatarUrl: cld("Preeti_kyad0g", 400),
    isLeadership: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/preetitiwari2025/",
    },
    country: "New Zealand"
  },
  {
    id: "team_003",
    slug: "judith-spek",
    fullName: "J. E. Spek",
    role: "Advisor",
    department: "Management",
    bio: "Drives technology vision, platform architecture, automation and engineering excellence.",
    avatarUrl: cld("judith_aruw3a", 400),
    isLeadership: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/judithspek/",
    },
    country: "Netherlands"
  },
  {
    id: "team_004",
    slug: "utkarsh-sharma",
    fullName: "Utkarsh Sharma",
    role: "Cheif Technical Officer",
    department: "Technology",
    bio: "Drives technology vision, platform architecture, automation and engineering excellence.",
    avatarUrl: cld("Utkarsh1_yiat7m", 400),
    isLeadership: true,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/utkarsh-sharma-2b9110362",
    github: "https://github.com/Utkarsh9571",
    },
    country: "India"
  },
  {
    id: "team_005",
    slug: "harsimran-kaur",
    fullName: "Harsimran Kaur",
    role: "Manager - Counselor",
    department: "Counselling",
    bio: "Drives student success through personalized guidance, career planning, and outcome-focused support.",
    avatarUrl: cld("gkinstitute/team/product-lead", 400),
    isLeadership: false,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/harsimran-kaur-37a6a8362?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    country: "India"
  },
  {
    id: "team_006",
    slug: "archana-avasthi",
    fullName: "Archana Avasthi",
    role: "Wordpress Developer",
    department: "Technology",
    bio: "Builds and maintains the organization's online presence through the WordPress platform.",
    avatarUrl: cld("archana_tnkjo7", 400),
    isLeadership: false,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/archana-avasthi-bb031015b/"
    },
    country: "India"
  }
];
